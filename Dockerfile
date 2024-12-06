# Use a Node.js Windows image that includes Node and npm
FROM node:18-windowsservercore-ltsc2022 as builder
WORKDIR C:\app
COPY package*.json .\
# npm install will now work because Node is available
RUN npm install
COPY . .
RUN npm run build

FROM mcr.microsoft.com/windows/servercore:ltsc2022
WORKDIR C:\nginx

# Combine all PowerShell commands into one RUN instruction
RUN powershell -NoProfile -NonInteractive -ExecutionPolicy Bypass -Command `
  "$ProgressPreference='SilentlyContinue'; ` 
  Invoke-WebRequest -Uri 'https://nginx.org/download/nginx-1.24.0.zip' -OutFile 'nginx.zip'; `
  Expand-Archive -Path 'nginx.zip' -DestinationPath '.'; `
  Remove-Item -Force 'nginx.zip'"

# Copy built files from builder stage to Nginx html folder
COPY --from=builder C:\app\build C:\nginx\nginx-1.24.0\html

ENV PATH="C:\\nginx\\nginx-1.24.0;${PATH}"
EXPOSE 80
WORKDIR C:\nginx\nginx-1.24.0
CMD ["nginx.exe", "-g", "daemon off;"]
