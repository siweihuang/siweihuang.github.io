# Define the root folder
$rootFolder = "C:\Projects_Cloud\2.GitHub\siweihuang.github.io\public\download\app"

# Function to recursively list files
function Get-FilesRecursive {
    param (
        [string]$path
    )

    Get-ChildItem -Path $path -Recurse | Where-Object {!$_.PSIsContainer -and $_.DirectoryName -ne ""} | ForEach-Object {
        [PSCustomObject]@{
            FolderName = $_.DirectoryName.Replace($path, "").Trim("\")
            FileName = $_.Name
        }
    }
}

# Get files recursively
$files = Get-FilesRecursive -path $rootFolder

# Filter out files with empty directory names
$filteredFiles = $files | Where-Object { $_.FolderName -ne "" }

# Convert to JSON
$jsonObject = $filteredFiles | ConvertTo-Json

# Save JSON object to a file
$jsonObject | Out-File -FilePath "files.json"