# Use a Windows Server Core base image
FROM mcr.microsoft.com/windows/servercore:ltsc2022

# Set the working directory
WORKDIR C:/nginx

# Download and install Nginx
RUN powershell -Command `
    $ProgressPreference = 'SilentlyContinue'; `
    Invoke-WebRequest -Uri https://nginx.org/download/nginx-1.24.0.zip -OutFile nginx.zip; `
    Expand-Archive -Path nginx.zip -DestinationPath .; `
    Remove-Item -Force nginx.zip; `
    Get-ChildItem -Path . -Recurse # Debugging step to show extracted files

# Update PATH to include the directory containing nginx.exe
ENV PATH="C:\\nginx\\nginx-1.24.0;${PATH}"

# Expose port 80 for HTTP traffic
EXPOSE 80

# Set the working directory to where nginx.exe is located
WORKDIR C:/nginx/nginx-1.24.0

# Default command to start Nginx
CMD ["nginx.exe", "-g", "daemon off;"]