#!/bin/bash
set -e

REPO_URL="https://meng.zip/packages/deb/fynedesk"

echo "Installing FyneDesk repository..."

# Add GPG key
curl -fsSL "${REPO_URL}/KEY.gpg" | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/fynedesk.gpg
# Add repository
echo "deb [signed-by=/etc/apt/trusted.gpg.d/fynedesk.gpg] ${REPO_URL} ./" | sudo tee /etc/apt/sources.list.d/fynedesk.list