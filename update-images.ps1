# Script to update the for-seniors page with fixes for Next.js image warnings

Write-Host 'Updating TestimonialCard component to add sizes attribute to images...'

# Check if the TestimonialCard component file exists
if (Test-Path 'c:\siteship\app\components\TestimonialCard.tsx') {
    # Read the TestimonialCard component file
    \ = Get-Content 'c:\siteship\app\components\TestimonialCard.tsx' -Raw
    
    # Check if we need to add the sizes prop to the interface
    if (\ -notmatch 'sizes\?:') {
        Write-Host 'Adding sizes prop to TestimonialCard interface...'
        \ = \ -replace '(interface TestimonialCardProps \{[^}]*)(})', '\  sizes?: string;
\'
    }
    
    # Check if we need to add the sizes attribute to the Image component
    if (\ -match '<Image[^>]*src=\{\w+\}[^>]*>') {
        Write-Host 'Adding sizes attribute to Image component in TestimonialCard...'
        \ = \ -replace '(<Image[^>]*)(fill={true}[^>]*>)', '\={sizes || \"(max-width: 768px) 100vw, 33vw\"} \'
    }
    
    # Save the updated content back to the file
    Set-Content 'c:\siteship\app\components\TestimonialCard.tsx' \
    Write-Host 'TestimonialCard component updated successfully!'
} else {
    Write-Host 'TestimonialCard component file not found!'
}

Write-Host 'Done!'
