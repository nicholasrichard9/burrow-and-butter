#!/bin/bash
# Deployment script for Burrow and Butter

set -e

echo "🍳 Building Burrow and Butter..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run the build
echo "🔨 Running Astro build..."
npm run build

# Deploy to Cloudflare Pages
echo "☁️ Deploying to Cloudflare Pages..."
npx wrangler pages deploy dist --project-name=burrow-and-butter

echo "✅ Deployment complete!"
echo ""
echo "Your site should be live at:"
echo "  https://burrow-and-butter.pages.dev"
echo ""
echo "To set up a custom domain, go to:"
echo "  https://dash.cloudflare.com/ > Pages > burrow-and-butter > Custom domains"
