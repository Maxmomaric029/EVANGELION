$path = "c:\Users\Mxzzy\Desktop\flockz\paneles de pagina\onlypanels"
$files = @("big5.html", "EJEMPLO.html", "prueba2.html", "ruta.html", "snowfalling.html")

$css = ".overlay{position:fixed;inset:0;background:rgba(30,0,50,0.7);display:flex;align-items:center;justify-content:center;z-index:10;flex-direction:column}.follow-container{background:rgba(30,30,40,0.55);border-radius:20px;padding:40px 30px;display:flex;align-items:center;gap:30px;box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);border:1px solid rgba(120,40,180,0.18)}.follow-img{width:120px;border-radius:16px;box-shadow:0 4px 16px rgba(0,0,0,0.3)}.follow-content{display:flex;flex-direction:column;align-items:flex-start;gap:18px}.follow-title{color:#fff;font-size:2rem;font-weight:700;margin-bottom:10px;letter-spacing:1px;text-shadow:0 0 8px #fff,0 2px 8px #7c2ae8}.yt-btn{display:flex;align-items:center;background:#ff2222;color:#fff;border:none;border-radius:8px;padding:12px 22px;font-size:1.1rem;font-weight:700;cursor:pointer;gap:10px;transition:background 0.2s;box-shadow:0 2px 8px rgba(0,0,0,0.2);text-decoration:none;text-shadow:0 0 8px #fff}.yt-btn:hover{background:#cc1818}.yt-icon{width:28px;height:28px;fill:#fff;filter:drop-shadow(0 0 6px #fff)}@media (max-width:600px){.follow-container{flex-direction:column;gap:18px;padding:24px 10px}.follow-img{width:90px}}"

$html = '<div class="overlay" id="overlay"><div class="follow-container"><img class="follow-img" src="https://i.pinimg.com/736x/eb/67/1d/eb671d48f5065361adde355400b7b542.jpg" alt="Follow me"><div class="follow-content"><div class="follow-title">Follow me to use</div><a class="yt-btn" href="#" id="ytBtn"><svg class="yt-icon" viewBox="0 0 32 32"><path d="M31.2 8.3s-.3-2.2-1.2-3.2c-1.1-1.2-2.3-1.2-2.9-1.3C23.1 3.5 16 3.5 16 3.5h-.1s-7.1 0-11.1.3c-.6.1-1.8.1-2.9 1.3-.9 1-1.2 3.2-1.2 3.2S0 10.6 0 12.9v2.2c0 2.3.3 4.6.3 4.6s.3 2.2 1.2 3.2c1.1 1.2 2.6 1.2 3.3 1.3 2.4.2 10.2.3 10.2.3s7.1 0 11.1-.3c.6-.1 1.8-.1 2.9-1.3.9-1 1.2-3.2 1.2-3.2s.3-2.3.3-4.6v-2.2c0-2.3-.3-4.6-.3-4.6zM12.8 20.5v-9l8.5 4.5-8.5 4.5z"/></svg>Ir a YouTube</a></div></div></div>'

$js = '<script>document.getElementById("ytBtn").addEventListener("click",function(e){e.preventDefault();window.open("https://www.youtube.com/@DraakoXitty","_blank");document.getElementById("overlay").style.display="none";});</script>'

foreach ($file in $files) {
    $fp = Join-Path $path $file
    if (Test-Path $fp) {
        $content = Get-Content $fp -Raw
        
        if ($content -notmatch 'id="ytBtn"') {
            # Add CSS
            if ($content -match '</style>') {
                $content = $content -replace '(</style>)', "`n<style>$css</style>`n`$1"
            } else {
                $content = $content -replace '(</head>)', "<style>$css</style>`n`$1"
            }
            
            # Add HTML and JS
            $content = $content -replace '(<body[^>]*>)', "`$1`n$html`n$js"
            
            Set-Content $fp $content -Encoding UTF8
            Write-Host "Modified: $file"
        }
    }
}
