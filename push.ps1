# PowerShell script to push changes to GitHub

# Add all changes to staging
git add .

# Get the current date and time for the commit message
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

# Create a commit with a timestamp
git commit -m "Update: $timestamp"

# Push changes to the main branch
git push origin main

Write-Host "Changes have been pushed to GitHub successfully!" -ForegroundColor Green

# Keep the window open to see the result
Pause