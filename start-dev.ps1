# 🚀 Trinovexa Labs - Ultimate Dev Starter Script
# Run this script to start the development environment with one command

# Welcome Message
Write-Host "✨ Welcome to Trinovexa Labs Dev Environment" -ForegroundColor Cyan
Write-Host "`"Three Minds. Infinite Innovation.`"" -ForegroundColor Magenta
Write-Host "----------------------------------------------" -ForegroundColor DarkGray

# Detect any process using port 3000
$existingProcess = Get-Process -Id ((Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue).OwningProcess) -ErrorAction SilentlyContinue

if ($existingProcess) {
    Write-Host "⚠️ Existing Next.js server detected (PID: $($existingProcess.Id)). Stopping it..." -ForegroundColor Yellow
    Stop-Process -Id $existingProcess.Id -Force
    Start-Sleep -Seconds 1
    Write-Host "✅ Previous server stopped." -ForegroundColor Green
}

# Navigate to project directory
Set-Location "D:\New folder\trinovexa-labs"
Write-Host "💻 Starting Next.js Dev Server..." -ForegroundColor Green

# Start Next.js dev server
Start-Process "npm" -ArgumentList "run dev"

# Give server a few seconds to start
Start-Sleep -Seconds 3

# Open default browser at localhost
Start-Process "http://localhost:3000"
Write-Host "🌐 Browser opened at http://localhost:3000" -ForegroundColor Cyan
Write-Host "----------------------------------------------" -ForegroundColor DarkGray
Write-Host "⚡ Dev server is running! Press Ctrl+C in the npm terminal to stop." -ForegroundColor Green
