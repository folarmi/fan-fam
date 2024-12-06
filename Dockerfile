FROM mcr.microsoft.com/windows/servercore:ltsc2022 as builder
WORKDIR C:\app
COPY package*.json .\
RUN powershell -NoProfile -NonInteractive -ExecutionPolicy Bypass -Command "npm install"
COPY . .
RUN powershell -NoProfile -NonInteractive -ExecutionPolicy Bypass -Command "npm run build"

FROM mcr.microsoft.com/windows/servercore:ltsc2022
WORKDIR C:\nginx
RUN powershell -NoProfile -NonInteractive -ExecutionPolicy Bypass -Command "$ProgressPreference='SilentlyContinue'; Invoke-WebRequest 'https://nginx.org/download/nginx-1.24.0.zip' -OutFile 'nginx.zip'; Expand-Archive -Path 'nginx.zip' -DestinationPath '.'; Remove-Item -Force 'nginx.zip';"

COPY --from=builder C:\app\build C:\nginx\nginx-1.24.0\html
ENV PATH="C:\\nginx\\nginx-1.24.0;${PATH}"
EXPOSE 80
WORKDIR C:\nginx\nginx-1.24.0
CMD ["nginx.exe", "-g", "daemon off;"]
