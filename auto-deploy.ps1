# Auto Deploy Script - Wendelu Site
param(
    [string]$message = "Auto-deploy: modifications $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

Set-Location "C:\Users\HP\Desktop\Site wendelu"

Write-Host "Adding files..." -ForegroundColor Cyan
git add -A

Write-Host "Committing: $message" -ForegroundColor Yellow
git commit -m $message

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin main

Write-Host "Done! Deployment started on Vercel." -ForegroundColor Green
