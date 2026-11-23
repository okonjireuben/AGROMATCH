# AGROMATCH - Local HTTP Server
# Serves the compiled production app from ./dist on http://localhost:8080

param(
    [int]$Port = 8080
)

$baseDir = Join-Path $PSScriptRoot "dist"
if (-not (Test-Path $baseDir)) {
    Write-Host "dist directory not found. Please run 'npm run build' first." -ForegroundColor Red
    exit 1
}

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "============================================================" -ForegroundColor Green
    Write-Host "  AGROMATCH - AGRICULTURAL MARKETPLACE & B2B PLATFORM" -ForegroundColor Cyan
    Write-Host "  Server live at: $prefix" -ForegroundColor Yellow
    Write-Host "  Press Ctrl+C to stop." -ForegroundColor White
    Write-Host "============================================================" -ForegroundColor Green

    # Launch default browser
    try { Start-Process $prefix -ErrorAction SilentlyContinue } catch {}

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        $response.AddHeader("Access-Control-Allow-Origin", "*")

        $rawUrl = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($rawUrl) -or $rawUrl -eq '/') {
            $rawUrl = "index.html"
        }

        $filePath = [System.IO.Path]::Combine($baseDir, $rawUrl.Replace('/', '\'))

        # SPA Fallback to index.html if file does not exist
        if (-not [System.IO.File]::Exists($filePath)) {
            $filePath = [System.IO.Path]::Combine($baseDir, "index.html")
        }

        if ([System.IO.File]::Exists($filePath)) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()

            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".svg"  { "image/svg+xml" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".webp" { "image/webp" }
                default { "application/octet-stream" }
            }

            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found - AGROMATCH")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }

        $response.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
