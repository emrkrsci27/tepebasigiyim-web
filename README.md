# Tepebaşı Giyim Çarşısı — kurumsal site

Bağımlılıksız statik site (HTML/CSS/JS). Derleme gerekmez.

## Yayına alma
- **Vercel/Netlify:** bu repoyu içe aktarın, *Root Directory* boş kalsın, Framework = Other. Ardından `www.tepebasigiyim.com` domainini projeye ekleyip DNS'te `www` için CNAME (`cname.vercel-dns.com`) tanımlayın. `vercel.json` kök domaini `www`'ye yönlendirir.
- **Klasik hosting:** bu klasörün içeriğini `public_html`'e yükleyin.

## Düzenleme
İletişim bilgileri (`config.js`) boş ise ilgili alanlar sitede gizlenir: telefon, WhatsApp, e-posta. Adres, saatler, harita ve yol tarifi girilidir. Adres ve çalışma saatleri girilidir. Görselleri `assets/` klasöründen değiştirebilirsiniz.

## Ana ekrana ekleme (PWA)
`manifest.webmanifest`, ikonlar (`assets/icon-*.png`, `apple-touch-icon.png`) ve `sw.js` (çevrimdışı önbellek) hazırdır. Site HTTPS ile yayınlandığında Android Chrome'da "Ana ekrana ekle / Uygulamayı yükle", iPhone Safari'de Paylaş → "Ana Ekrana Ekle" ile uygulama gibi tam ekran açılır. Çevrimdışı önbellek sürümünü yenilemek için `sw.js` içindeki `CACHE` adını değiştirin.
