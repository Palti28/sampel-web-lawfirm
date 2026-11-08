/* Anggraini Mubarak and Affiliate: concept preview scripts */
(function () {
  'use strict';

  var WA_NUMBER = '6281400686048';
  var EMAIL_TO = 'ama.lawfirm88@gmail.com';
  var STORAGE_KEY = 'ama-lang';

  /* ---------- i18n dictionary ---------- */
  var I18N = {
    id: {
      metaTitle: 'Anggraini Mubarak and Affiliate | Kantor Advokat, Jakarta Selatan',
      metaDesc: 'Anggraini Mubarak and Affiliate (AMA): pendampingan hukum untuk individu, keluarga, dan pelaku usaha, dari legalitas usaha dan ekspansi ke Asia hingga hukum keluarga. Pratinjau konsep.',
      skip: 'Langsung ke konten utama',
      preview: 'Pratinjau konsep. Bukan situs resmi Anggraini Mubarak and Affiliate.',
      menu: 'Menu',
      menuClose: 'Tutup',
      navLabel: 'Navigasi utama',
      footNavLabel: 'Navigasi footer',
      langLabel: 'Pilih bahasa',
      navServices: 'Layanan',
      navCross: 'Lintas Negara',
      navAbout: 'Tentang',
      navEdu: 'Edukasi',
      navContact: 'Kontak',
      ctaConsult: 'Konsultasi',

      heroEyebrow: 'Kantor Advokat · Jakarta Selatan',
      heroTitle: 'Pendampingan hukum yang jelas, dari Jakarta hingga Asia.',
      heroSub: 'Kami mendampingi individu, keluarga, dan pelaku usaha: mulai dari legalitas usaha dan ekspansi lintas negara hingga urusan hukum keluarga.',
      ctaWa: 'Konsultasi via WhatsApp',
      ctaServices: 'Lihat Layanan',
      heroAlt: 'Foto ilustrasi suasana kota dalam nada monokrom',

      servicesTitle: 'Layanan',
      servicesIntro: 'Enam bidang praktik yang kami tangani, untuk kebutuhan pribadi maupun usaha.',
      s1t: 'Pendirian & Legalitas Usaha',
      s1d: 'Pendampingan dalam mendirikan badan usaha dan menjaga legalitasnya tetap tertib seiring usaha berkembang.',
      s1b1: 'Pendirian PT dan CV',
      s1b2: 'Perizinan berusaha',
      s1b3: 'Perubahan anggaran dasar',
      s2t: 'Ekspansi Bisnis ke Asia',
      s2d: 'Bagi pelaku usaha yang ingin hadir di luar Indonesia, kami membantu menyiapkan langkah hukumnya bersama mitra setempat.',
      s2b1: 'Pendirian perusahaan di luar negeri, seperti Kamboja',
      s2b2: 'Koordinasi dengan agen pajak dan mitra lokal',
      s2b3: 'Pengurusan alamat domisili',
      s3t: 'Kepatuhan Pajak & Perizinan',
      s3d: 'Kami membantu klien memahami kewajiban perizinan dan pajaknya. Aspek perpajakan ditangani bersama mitra konsultan pajak.',
      s3b1: 'Pemetaan kewajiban perizinan',
      s3b2: 'Koordinasi dengan mitra konsultan pajak',
      s3b3: 'Peninjauan kepatuhan secara berkala',
      s4t: 'Hukum Keluarga',
      s4d: 'Pendampingan perkara keluarga yang ditangani dengan tenang dan dengan menjaga kerahasiaan.',
      s4b1: 'Isbat nikah',
      s4b2: 'Perceraian dan hak asuh anak',
      s4b3: 'Waris',
      s5t: 'Penyusunan & Review Dokumen Hukum',
      s5d: 'Dokumen yang disusun dengan cermat membantu mencegah perselisihan di kemudian hari.',
      s5b1: 'Kontrak dan perjanjian kerja sama',
      s5b2: 'Surat kuasa',
      s5b3: 'Somasi',
      s6t: 'Penyelesaian Sengketa',
      s6d: 'Kami mengupayakan penyelesaian yang proporsional, dari perundingan hingga pendampingan di pengadilan bila diperlukan.',
      s6b1: 'Negosiasi',
      s6b2: 'Mediasi',
      s6b3: 'Pendampingan litigasi',

      crossTitle: 'Dari Jakarta ke Asia',
      crossText: 'Semakin banyak pelaku usaha Indonesia yang membuka kegiatan di negara tetangga. Kami membantu menyiapkan struktur hukum, dokumen, dan koordinasi dengan mitra setempat agar kehadiran Anda di luar Indonesia tertata sejak awal.',
      c1t: 'Indonesia',
      c1d: 'Kantor kami di Jakarta Selatan',
      c2t: 'Kamboja',
      c2d: 'Pendirian perusahaan dan koordinasi dengan mitra lokal',
      c3t: 'Negara Asia lainnya',
      c3d: 'Melalui jaringan mitra',
      crossAlt: 'Foto ilustrasi lanskap dalam nada monokrom',

      stepsTitle: 'Cara Kami Bekerja',
      st1t: 'Konsultasi awal',
      st1d: 'Kami mendengarkan duduk perkara dan kebutuhan Anda, lalu menjelaskan pilihan yang tersedia.',
      st2t: 'Analisis & strategi',
      st2d: 'Kami menelaah dokumen dan fakta, kemudian menyusun langkah yang realistis beserta perkiraan waktunya.',
      st3t: 'Penyusunan dokumen & tindakan',
      st3d: 'Dokumen disiapkan dan tindakan hukum dijalankan sesuai strategi yang telah disepakati.',
      st4t: 'Pendampingan hingga selesai',
      st4d: 'Kami tetap mendampingi dan menyampaikan perkembangan sampai urusan Anda tuntas.',

      aboutTitle: 'Tentang Kami',
      aboutLead: 'Anggraini Mubarak and Affiliate adalah kantor advokat yang berkedudukan di Jakarta Selatan.',
      affTitle: 'Arti “& Affiliate”',
      affText: 'Nama ini mencerminkan cara kami bekerja. Kantor kami didukung jaringan advokat yang berafiliasi, sehingga setiap perkara dapat ditangani bersama rekan yang sesuai dengan bidangnya.',
      portraitAlt: 'Tempat foto Managing Partner',
      partnerRole: 'Managing Partner',
      partnerBio: 'Mutia Anggraini memimpin Anggraini Mubarak and Affiliate. Beliau menempuh pendidikan <span class="ph">[placeholder: pendidikan S.H. dan M.H.]</span>, berpraktik sebagai advokat selama <span class="ph">[placeholder: lama praktik]</span>, dan merupakan anggota <span class="ph">[placeholder: keanggotaan PERADI dan nomor KTA]</span>.',

      eduTitle: 'Edukasi Hukum',
      eduIntro: 'Tulisan singkat untuk membantu memahami persoalan hukum sehari-hari.',
      a1tag: 'Hukum Keluarga',
      a1t: 'Isbat nikah: syarat dan alur sidangnya',
      a1d: 'Gambaran umum dokumen yang biasanya diperlukan dan tahapan pemeriksaan di Pengadilan Agama.',
      a1alt: 'Foto ilustrasi dokumen di atas meja',
      a2tag: 'Lintas Negara',
      a2t: 'Mendirikan perusahaan di Kamboja: apa saja yang perlu disiapkan',
      a2d: 'Hal-hal dasar yang perlu dipertimbangkan sebelum memulai, dari struktur usaha hingga mitra setempat.',
      a2alt: 'Foto ilustrasi kawasan perkotaan',
      a3tag: 'Dokumen Hukum',
      a3t: 'Kenapa dokumen perlu ditandatangani tepat waktu',
      a3d: 'Penundaan tanda tangan dapat memengaruhi kepastian hak dan kewajiban para pihak.',
      a3alt: 'Foto ilustrasi ruang kerja',
      eduMore: 'Ikuti juga konten edukasi kami di',

      contactTitle: 'Kontak',
      contactIntro: 'Sampaikan kebutuhan Anda secara singkat. Kami akan menghubungi Anda kembali.',
      officeJkt: 'Kantor Jakarta',
      phone: 'Telepon',
      mapTitle: 'Peta lokasi kantor di Jalan Ciputat Raya, Pondok Pinang, Jakarta Selatan',
      formTitle: 'Kirim pesan',
      fName: 'Nama',
      fEmail: 'Email',
      fService: 'Layanan',
      fServiceNone: 'Pilih layanan',
      fServiceOther: 'Lainnya',
      fMsg: 'Pesan',
      formNote: 'Formulir ini membuka aplikasi email atau WhatsApp Anda dengan pesan yang sudah terisi. Tidak ada data yang disimpan di situs ini.',
      sendEmail: 'Kirim via Email',
      sendWa: 'Kirim via WhatsApp',
      errRequired: 'Mohon isi nama dan pesan terlebih dahulu.',
      msgGreeting: 'Halo Anggraini Mubarak and Affiliate,',
      msgName: 'Nama',
      msgEmail: 'Email',
      msgService: 'Layanan',
      msgBody: 'Pesan',
      msgSubject: 'Permintaan konsultasi',

      disclaimer: 'Informasi di situs ini bersifat umum dan bukan nasihat hukum. Menghubungi kami tidak dengan sendirinya menciptakan hubungan advokat dan klien.'
    },

    en: {
      metaTitle: 'Anggraini Mubarak and Affiliate | Law Office, South Jakarta',
      metaDesc: 'Anggraini Mubarak and Affiliate (AMA): legal counsel for individuals, families, and businesses, from business legality and expansion into Asia to family law. Concept preview.',
      skip: 'Skip to main content',
      preview: 'Concept preview only. Not the official website of Anggraini Mubarak and Affiliate.',
      menu: 'Menu',
      menuClose: 'Close',
      navLabel: 'Main navigation',
      footNavLabel: 'Footer navigation',
      langLabel: 'Choose language',
      navServices: 'Services',
      navCross: 'Cross-Border',
      navAbout: 'About',
      navEdu: 'Insights',
      navContact: 'Contact',
      ctaConsult: 'Consultation',

      heroEyebrow: 'Law Office · South Jakarta',
      heroTitle: 'Clear legal counsel, from Jakarta across Asia.',
      heroSub: 'We advise individuals, families, and businesses: from business legality and cross-border expansion to family matters.',
      ctaWa: 'Consult via WhatsApp',
      ctaServices: 'View Services',
      heroAlt: 'Illustrative monochrome photo of a city scene',

      servicesTitle: 'Services',
      servicesIntro: 'Six practice areas we handle, for personal and business needs.',
      s1t: 'Business Formation & Legality',
      s1d: 'Support in setting up a business entity and keeping its legal standing in order as the business grows.',
      s1b1: 'Establishing PT and CV entities',
      s1b2: 'Business licensing',
      s1b3: 'Amendments to articles of association',
      s2t: 'Business Expansion into Asia',
      s2d: 'For businesses planning a presence outside Indonesia, we help prepare the legal steps together with local partners.',
      s2b1: 'Company formation abroad, such as in Cambodia',
      s2b2: 'Coordination with tax agents and local partners',
      s2b3: 'Registered address arrangements',
      s3t: 'Tax Compliance & Licensing',
      s3d: 'We help clients understand their licensing and tax obligations. Tax matters are handled together with partner tax consultants.',
      s3b1: 'Mapping licensing obligations',
      s3b2: 'Coordination with partner tax consultants',
      s3b3: 'Periodic compliance review',
      s4t: 'Family Law',
      s4d: 'Family matters handled calmly and with confidentiality.',
      s4b1: 'Marriage legalisation (isbat nikah)',
      s4b2: 'Divorce and child custody',
      s4b3: 'Inheritance',
      s5t: 'Legal Document Drafting & Review',
      s5d: 'Carefully drafted documents help prevent disagreements later on.',
      s5b1: 'Contracts and cooperation agreements',
      s5b2: 'Powers of attorney',
      s5b3: 'Formal demand letters (somasi)',
      s6t: 'Dispute Resolution',
      s6d: 'We seek proportionate solutions, from negotiation to court representation where needed.',
      s6b1: 'Negotiation',
      s6b2: 'Mediation',
      s6b3: 'Litigation support',

      crossTitle: 'From Jakarta to Asia',
      crossText: 'More Indonesian businesses are opening operations in neighbouring countries. We help prepare the legal structure, documents, and coordination with local partners so that your presence outside Indonesia is well organised from the start.',
      c1t: 'Indonesia',
      c1d: 'Our office in South Jakarta',
      c2t: 'Cambodia',
      c2d: 'Company formation and coordination with local partners',
      c3t: 'Other Asian countries',
      c3d: 'Through our partner network',
      crossAlt: 'Illustrative monochrome landscape photo',

      stepsTitle: 'How We Work',
      st1t: 'Initial consultation',
      st1d: 'We listen to the facts and your needs, then explain the options available.',
      st2t: 'Analysis & strategy',
      st2d: 'We review the documents and facts, then set out realistic steps with an estimated timeline.',
      st3t: 'Documents & action',
      st3d: 'Documents are prepared and legal steps are taken according to the agreed strategy.',
      st4t: 'Support through completion',
      st4d: 'We stay with you and keep you updated until your matter is resolved.',

      aboutTitle: 'About Us',
      aboutLead: 'Anggraini Mubarak and Affiliate is a law office based in South Jakarta.',
      affTitle: 'What “& Affiliate” means',
      affText: 'The name reflects how we work. The office is supported by a network of affiliated advocates, so each matter can be handled together with colleagues suited to its field.',
      portraitAlt: 'Placeholder for Managing Partner photo',
      partnerRole: 'Managing Partner',
      partnerBio: 'Mutia Anggraini leads Anggraini Mubarak and Affiliate. She studied <span class="ph">[placeholder: S.H. and M.H. education]</span>, has practised as an advocate for <span class="ph">[placeholder: years of practice]</span>, and is a member of <span class="ph">[placeholder: PERADI membership and KTA number]</span>.',

      eduTitle: 'Legal Insights',
      eduIntro: 'Short pieces to help explain everyday legal questions.',
      a1tag: 'Family Law',
      a1t: 'Isbat nikah: requirements and the hearing process',
      a1d: 'An overview of the documents usually required and the stages of examination at the Religious Court.',
      a1alt: 'Illustrative photo of documents on a desk',
      a2tag: 'Cross-Border',
      a2t: 'Setting up a company in Cambodia: what to prepare',
      a2d: 'The basics to consider before you begin, from business structure to local partners.',
      a2alt: 'Illustrative photo of an urban area',
      a3tag: 'Legal Documents',
      a3t: 'Why documents should be signed on time',
      a3d: 'Delayed signatures can affect the certainty of each party’s rights and obligations.',
      a3alt: 'Illustrative photo of a workspace',
      eduMore: 'Follow our educational content on',

      contactTitle: 'Contact',
      contactIntro: 'Tell us briefly what you need. We will get back to you.',
      officeJkt: 'Jakarta Office',
      phone: 'Phone',
      mapTitle: 'Map of the office location on Jalan Ciputat Raya, Pondok Pinang, South Jakarta',
      formTitle: 'Send a message',
      fName: 'Name',
      fEmail: 'Email',
      fService: 'Service',
      fServiceNone: 'Choose a service',
      fServiceOther: 'Other',
      fMsg: 'Message',
      formNote: 'This form opens your email or WhatsApp app with a pre-filled message. No data is stored on this site.',
      sendEmail: 'Send via Email',
      sendWa: 'Send via WhatsApp',
      errRequired: 'Please fill in your name and message first.',
      msgGreeting: 'Hello Anggraini Mubarak and Affiliate,',
      msgName: 'Name',
      msgEmail: 'Email',
      msgService: 'Service',
      msgBody: 'Message',
      msgSubject: 'Consultation request',

      disclaimer: 'The information on this site is general and is not legal advice. Contacting us does not by itself create an advocate and client relationship.'
    }
  };

  var currentLang = 'id';

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.id[key] || '';
  }

  function readStoredLang() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function storeLang(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'id';
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-html'));
      if (v) el.innerHTML = v; // trusted strings from the dictionary above only
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });

    document.title = t('metaTitle');
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('metaDesc'));

    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });

    syncMenuLabel();
  }

  /* ---------- Language toggle ---------- */
  document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      applyLang(lang);
      storeLang(lang);
    });
  });

  /* ---------- Mobile nav disclosure ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.getElementById('site-nav');
  var toggleLabel = toggle ? toggle.querySelector('.nav-toggle-label') : null;

  function syncMenuLabel() {
    if (!toggle || !toggleLabel) return;
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggleLabel.textContent = open ? t('menuClose') : t('menu');
  }
  function setMenu(open) {
    if (!toggle || !panel) return;
    toggle.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('is-open', open);
    syncMenuLabel();
  }

  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* ---------- Contact form: mailto / wa.me ---------- */
  var form = document.getElementById('contact-form');
  var errorEl = document.getElementById('form-error');

  function collect() {
    var name = form.elements.nama;
    var msg = form.elements.pesan;
    var ok = true;
    [name, msg].forEach(function (f) {
      var empty = !f.value.trim();
      f.setAttribute('aria-invalid', String(empty));
      if (empty) ok = false;
    });
    if (!ok) {
      errorEl.textContent = t('errRequired');
      errorEl.hidden = false;
      (name.value.trim() ? msg : name).focus();
      return null;
    }
    errorEl.hidden = true;
    var sel = form.elements.layanan;
    return {
      name: name.value.trim(),
      email: form.elements.email.value.trim(),
      service: sel.value ? sel.options[sel.selectedIndex].text : '',
      message: msg.value.trim()
    };
  }

  function composeText(d) {
    var lines = [t('msgGreeting'), '', t('msgName') + ': ' + d.name];
    if (d.email) lines.push(t('msgEmail') + ': ' + d.email);
    if (d.service) lines.push(t('msgService') + ': ' + d.service);
    lines.push('', t('msgBody') + ':', d.message);
    return lines.join('\n');
  }

  if (form) {
    form.addEventListener('submit', function (e) { e.preventDefault(); });
    form.querySelectorAll('[data-send]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var d = collect();
        if (!d) return;
        var text = composeText(d);
        if (btn.getAttribute('data-send') === 'email') {
          var subject = t('msgSubject') + (d.service ? ': ' + d.service : '');
          window.location.href = 'mailto:' + EMAIL_TO +
            '?subject=' + encodeURIComponent(subject) +
            '&body=' + encodeURIComponent(text);
        } else {
          window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
        }
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Init ---------- */
  var stored = readStoredLang();
  applyLang(stored === 'en' ? 'en' : 'id');
})();
