# Anggraini Mubarak and Affiliate: concept website

Static concept preview for **Anggraini Mubarak and Affiliate (AMA)**, a law office in South Jakarta.
This is a client preview, not the official website. The page carries a visible preview notice and
`<meta name="robots" content="noindex, nofollow">`.

Preview URL: https://palti28.github.io/sampel-web-lawfirm/

## Stack

Plain HTML, CSS and vanilla JS. No framework, no build step. All paths are relative, so the site works
from the `/sampel-web-lawfirm/` subpath on GitHub Pages.

```
index.html
favicon.svg
.nojekyll
assets/css/style.css
assets/js/main.js
assets/img/logo.svg
```

Run locally:

```
python3 -m http.server 8080
# open http://localhost:8080/
```

## Notes

- Language: Bahasa Indonesia by default, English via the ID / EN toggle. Strings live in the `I18N`
  dictionary in `assets/js/main.js` and map to `data-i18n` (text), `data-i18n-html`, `data-i18n-alt`,
  `data-i18n-aria` and `data-i18n-title` attributes. The choice is stored in `localStorage` (`ama-lang`).
- Contact form has no backend. "Kirim via Email" opens a `mailto:` to ama.lawfirm88@gmail.com,
  "Kirim via WhatsApp" opens `wa.me/6281400686048` with the message pre-filled.
- Images are grayscale placeholders from picsum.photos with fixed seeds, tinted navy via CSS.
- A second office card "Bali (segera hadir)" is commented out in the Kontak section of `index.html`.

## Perlu dikonfirmasi ke klien

Placeholder dan asumsi yang perlu diperiksa sebelum situs dipakai secara resmi:

1. **Bio Managing Partner**: pendidikan (S.H. dan M.H., kampus dan tahun), lama praktik sebagai advokat,
   serta keanggotaan PERADI dan nomor KTA. Saat ini ditandai `[placeholder]` di bagian Tentang.
2. **Foto Managing Partner**: saat ini blok navy dengan inisial "MA". Perlu foto resmi bila klien berkenan.
3. **Arti "& Affiliate"**: dijelaskan sebagai jaringan advokat yang berafiliasi. Mohon konfirmasi
   rumusan ini, serta apakah nama rekan afiliasi perlu ditampilkan.
4. **Deskripsi enam layanan** dan poin cakupannya: ditulis berdasarkan brief, perlu disetujui klien.
5. **Kepatuhan Pajak**: ditulis bahwa aspek perpajakan ditangani bersama mitra konsultan pajak
   (AMA tidak diklaim sebagai agen/konsultan pajak). Mohon konfirmasi siapa mitranya dan apakah boleh disebut.
6. **Lintas Negara**: hanya Indonesia, Kamboja, dan "negara Asia lainnya melalui jaringan mitra".
   Konfirmasi negara mana saja yang benar-benar dilayani dan bentuk kerja samanya (agen pajak, alamat domisili).
7. **Artikel Edukasi Hukum**: ketiga artikel adalah contoh (judul, ringkasan, gambar). Tautan "baca"
   belum mengarah ke artikel sungguhan.
8. **YouTube**: URL kanal masih placeholder (`https://www.youtube.com/@PLACEHOLDER`).
9. **Instagram dan Threads**: diasumsikan `instagram.com/ama.lawfirm` dan `threads.net/@anggraini.lawyer`.
10. **Nomor telepon**: kedua nomor diasumsikan aktif untuk WhatsApp dan telepon. Formulir WhatsApp
    dikirim ke +62 814 0068 6048; konfirmasi nomor utama.
11. **Email**: ama.lawfirm88@gmail.com sebagai email utama (tujuan formulir), apa.info.counsel@gmail.com
    sebagai email kedua. Mohon konfirmasi email kedua memang milik AMA (inisialnya "apa").
12. **Peta**: embed Google Maps memakai pencarian "Jalan Ciputat Raya Pondok Pinang Jakarta Selatan",
    bukan titik lokasi pasti. Sebaiknya diganti dengan pin kantor yang tepat.
13. **Kantor Bali**: kartu "Bali (segera hadir)" masih dikomentari. Aktifkan bila sudah pasti.
14. **Logo**: digambar ulang sebagai SVG sederhana dari kartu nama. Perlu file logo asli untuk hasil akhir.
15. **Foto**: semua foto adalah placeholder dari picsum.photos, bukan foto kantor atau klien.
16. **Teks hero dan tagline**, termasuk label "Kantor Advokat · Jakarta Selatan".
17. **Terjemahan bahasa Inggris**: perlu ditinjau, terutama istilah hukum (isbat nikah, somasi).
18. **Disclaimer**: rumusan di footer perlu disetujui klien.
19. **Domain**: situs saat ini ada di ama-lawfirm.xyz. Rencana domain dan URL Open Graph final perlu ditentukan,
    dan tag `noindex` serta strip pratinjau harus dihapus saat situs dirilis resmi.
20. **Tahun hak cipta** di footer ditulis 2026.
