FROM mcr.microsoft.com/windows/servercore:ltsc2022 as builder
WORKDIR C:/app
COPY package*.json ./
RUN powershell npm install
COPY . .
RUN powershell npm run build

FROM mcr.microsoft.com/windows/servercore:ltsc2022
WORKDIR C:/nginx
RUN powershell -Command `
  $ProgressPreference = 'SilentlyContinue'; `
  Invoke-WebRequest -Uri https://nginx.org/download/nginx-1.24.0.zip -OutFile nginx.zip; `
  Expand-Archive -Path nginx.zip -DestinationPath .; `
  Remove-Item -Force nginx.zip;

# Copy built React files into Nginx html folder
COPY --from=builder C:/app/build C:/nginx/nginx-1.24.0/html

ENV PATH="C:\\nginx\\nginx-1.24.0;${PATH}"
EXPOSE 80
WORKDIR C:/nginx/nginx-1.24.0
CMD ["nginx.exe", "-g", "daemon off;"]
