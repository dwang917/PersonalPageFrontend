#!/bin/bash

# Deployment script for React frontend to Apache
# Usage: ./deploy.sh

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Navigate to project directory
cd /var/www/react-frontend

echo "📦 Building React project..."
npm run build

echo "💾 Creating backup of current website..."
sudo cp -r /var/www/html /var/www/html.backup.$(date +%Y%m%d_%H%M%S)

echo "🧹 Clearing current Apache document root..."
sudo rm -rf /var/www/html/*

echo "📋 Copying new build files..."
sudo cp -r /var/www/react-frontend/build/* /var/www/html/

echo "🔧 Setting proper permissions..."
sudo chown -R apache:apache /var/www/html/
sudo chmod -R 644 /var/www/html/
sudo find /var/www/html -type d -exec chmod 755 {} \;

echo "🔄 Restarting Apache..."
sudo systemctl restart httpd

echo "✅ Deployment completed successfully!"
echo "🌐 Your website is now live at https://damingwang.dev"
