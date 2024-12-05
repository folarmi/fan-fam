# Use a Windows Server Core base image
FROM mcr.microsoft.com/windows/servercore:ltsc2022

# Set the working directory
WORKDIR C:\nginx

# Install Nginx
RUN powershell -Command \
    Invoke-WebRequest -Uri https://nginx.org/download/nginx-1.24.0.zip -OutFile nginx.zip; \
    Expand-Archive -Path nginx.zip -DestinationPath .; \
    Remove-Item -Force nginx.zip

# Set environment variables
ENV PATH="C:\\nginx;${PATH}"

# Expose port 80 for HTTP traffic
EXPOSE 80

# Expose port 443 for HTTPS traffic (if needed)
# EXPOSE 443

# Default command to start Nginx
CMD ["nginx.exe", "-g", "daemon off;"]