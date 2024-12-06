# ======================================
# Builder Stage
# ======================================
FROM mcr.microsoft.com/windows/servercore:ltsc2022 AS builder
SHELL ["powershell", "-Command"]

# Enable TLS1.2 and install Node.js
RUN [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12; `
    Invoke-WebRequest 'https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi' -OutFile 'node.msi'; `
    Start-Process msiexec.exe -Wait -ArgumentList '/i node.msi /quiet /qn /norestart'; `
    Remove-Item node.msi

# Set working directory for the app
WORKDIR C:\app

# Copy package files and install dependencies
COPY package*.json .\
RUN npm install

# Copy the rest of the app and build
COPY . .
RUN npm run build

# ======================================
# Final Stage: Nginx
# ======================================
FROM mcr.microsoft.com/windows/servercore:ltsc2022
SHELL ["powershell", "-Command"]

WORKDIR C:\nginx
RUN $ProgressPreference='SilentlyContinue'; `
    Invoke-WebRequest 'https://nginx.org/download/nginx-1.24.0.zip' -OutFile 'nginx.zip'; `
    Expand-Archive -Path 'nginx.zip' -DestinationPath '.'; `
    Remove-Item -Force 'nginx.zip';

# Copy build output from builder to Nginx html folder
COPY --from=builder C:\app\build C:\nginx\nginx-1.24.0\html

ENV PATH="C:\\nginx\\nginx-1.24.0;${PATH}"
EXPOSE 80
WORKDIR C:\nginx\nginx-1.24.0

# Start Nginx in the foreground
CMD ["nginx.exe", "-g", "daemon off;"]
