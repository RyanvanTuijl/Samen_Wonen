# This script will fix the getLocalizedText function calls in the page-new.tsx file
$filePath = "c:\siteship\app\[locale]\opportunities\[id]\page-new.tsx"

# Try to read the file directly - we know it exists from the error message
if (Test-Path -LiteralPath $filePath) {
    Write-Output "File found, proceeding with replacement."
    
    try {
        # Read the file content
        $content = Get-Content -LiteralPath $filePath -Raw -ErrorAction Stop
        
        # Replace occurrences of the issue
        $newContent = $content -replace 'getLocalizedText\(location\.description, locale\)', 'getLocalizedText(location.description, locale, location.description)'
        $newContent = $newContent -replace 'getLocalizedText\(amenity, locale\)', 'getLocalizedText(amenity, locale, amenity)'
        
        # Save the changes
        Set-Content -LiteralPath $filePath -Value $newContent -ErrorAction Stop
        Write-Output "Replacement completed successfully."
    } catch {
        Write-Error "An error occurred: $_"
    }
} else {
    Write-Error "File not found at path: $filePath"
}
