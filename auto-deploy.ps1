# Auto Deploy Script - Wendelu Site
# Ce script commit et push automatiquement toutes les modifications vers GitHub/Vercel

param(
    [string]$message = "Auto-deploy: modifications $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

Set-Location "C:\Users\HP\Desktop\Site wendelu"

Write-Host "📦 Ajout de tous les fichiers modifies..." -ForegroundColor Cyan
git add -A

Write-Host "💾 Commit: $message" -ForegroundColor Yellow
git commit -m $message

Write-Host "🚀 Push vers GitHub (Vercel va deployer automatiquement)..." -ForegroundColor Green
git push origin main

Write-Host "✅ Deploiement lance sur Vercel !" -ForegroundColor Green
Write-Host "🔗 Verifie sur: https://vercel.com/dashboard" -ForegroundColor Magenta
