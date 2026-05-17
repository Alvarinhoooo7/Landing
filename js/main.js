// =============================================
// I18N — TRADUCCIONES
// =============================================
const LANGS = {
  es: {
    'nav.about':      'Sobre mí',
    'nav.projects':   'Proyectos',
    'nav.channel':    'Canal',
    'nav.skills':     'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.contact':    'Contactar',

    'hero.eyebrow': 'Disponible para nuevas oportunidades',
    'hero.title1':  'Ing. Electrónica y Sistemas Inteligentes · INACAP',
    'hero.title2':  'Técnico Superior en Electrónica · Titulado 2025 · <span class="hero__badge-1">Nº1 de generación</span>',
    'hero.desc':    'Diseño y construyo desde el firmware hasta la interfaz.<br>PCB, ESP32, apps web y móviles que resuelven problemas reales.',
    'hero.cta1':    'Ver proyectos',
    'hero.cta2':    'Contactar',

    'about.title': 'Sobre mí',
    'about.p1':    'Titulado Técnico en Electrónica en INACAP logrando el <strong>primer lugar de mi generación</strong>, actualmente en el último año de Ingeniería Electrónica y Sistemas Inteligentes. Con más de 6 años de experiencia en electrónica automotriz y liderando el área de servicio técnico en SoyMomo.',
    'about.p2':    'Me apasiona el desarrollo de sistemas IoT y la automatización. Combino hardware y software: diseño PCBs, programo ESP32 y construyo las aplicaciones web y móviles que los controlan. Cuando algo me falta, lo aprendo y lo construyo.',
    'about.yt':    'Canal AFix — Reparación PCB en YouTube',
    'about.stat1': 'Años en electrónica automotriz',
    'about.stat2': 'Proyectos propios desarrollados',
    'about.stat3': 'App en producción activa',
    'about.stat4': 'Stacks tecnológicos dominados',

    'projects.title': 'Proyectos',
    'projects.p1.badge': 'En producción',
    'projects.p1.sub':   'App web interna para servicio técnico e inventario',
    'projects.p1.cta':   'Ver app',
    'projects.p1.f1':    'Panel de inventario con stock, movimientos y alertas de bajo stock. Exportación PDF/Excel.',
    'projects.p1.f2':    'Módulo de servicio técnico completo: órdenes, validaciones, diagnóstico y retiro en tienda.',
    'projects.p1.f3':    'Generación automática de informes Word y envío al cliente por Gmail via AppScript.',
    'projects.p1.f4':    'Métricas de producción, ingresos y fallas por período (solo administrador).',
    'projects.p1.f5':    'Sistema de envío masivo de correos y recuperación de contraseña con enlace Firebase.',
    'projects.p1.f6':    'Formulario público de recepción para agilizar cola de clientes en tienda.',

    'projects.p2.badge':    'En desarrollo · Proyecto de Título',
    'projects.p2.sub':      'Plataforma para verificación de medidores eléctricos monofásicos en terreno',
    'projects.p2.node1':    'Firmware ESP32',
    'projects.p2.node3':    'Panel Admin',
    'projects.p2.tag.tech': 'Técnicos',
    'projects.p2.tag.eq':   'Equipos',
    'projects.p2.f1':       'Firmware ESP32: sensor PZEM-004T, heartbeat a Firestore, sugerencia de medición automática.',
    'projects.p2.f2':       'App móvil Flutter: onboarding, Auth Firebase, pairing BLE, dashboard en tiempo real.',
    'projects.p2.f3':       'Panel admin React + Vite: gestión de técnicos, equipos y mediciones históricas.',
    'projects.p2.f4':       'Backend Node.js + Firebase Cloud Functions para lógica de negocio y validaciones.',

    'projects.p3.title': 'Diseños PCB',
    'projects.p3.sub':   'Esquemático y layout completo para equipos electrónicos propios',
    'projects.p3.sub1':  'Audiómetro con ESP32',
    'projects.p3.sub2':  'Control de Acceso v1 & v2',
    'projects.p3.desc1': 'Equipo médico básico con PCB custom. Exporta datos a Google Sheets via AppScript. Web app para graficar y exportar resultados a PDF.',
    'projects.p3.desc2': 'Dos versiones de sistema de control de acceso electrónico. Diseño completo de esquemático y PCB layout en KiCad.',

    'channel.title': 'Canal AFix',
    'channel.desc':  'Shorts de reparación de PCB, diagnóstico electrónico y proyectos hands-on.',
    'channel.cta':   'Ver canal completo en YouTube',

    'skills.title': 'Habilidades',
    'skills.g1': 'Electrónica & Hardware',
    'skills.g2': 'Firmware & Embedded',
    'skills.g3': 'Web & Cloud',
    'skills.g4': 'Diseño & Herramientas',
    'skills.s1.1': 'Reparación PCB SMD / THT',
    'skills.s1.2': 'Electrónica Automotriz',
    'skills.s1.3': 'ECU · BCM · BSI · TCM · IMMO',
    'skills.s1.4': 'Osciloscopio · Multímetro',
    'skills.s1.5': 'Estación de soldadura',
    'skills.s2.2': 'C++ · PlatformIO',
    'skills.s2.3': 'BLE · Wi-Fi',
    'skills.s2.4': 'UART · I²C · SPI',
    'skills.s3.3': 'Firebase (Auth, Firestore, Hosting)',
    'skills.s4.1': 'KiCad (PCB Design)',
    'skills.s4.2': 'Autodesk Inventor 3D',

    'exp.title':    'Experiencia',
    'exp.e1.date':  'Ene 2025 — Abr 2026',
    'exp.e1.dur':   '1 año 3 meses',
    'exp.e1.role':  'Líder Área Servicio Técnico',
    'exp.e1.role':  'Encargado de Servicio Técnico',
    'exp.e1.b1':    'Diagnóstico, análisis y reparación de PCB a nivel componente; instalación y actualización de APK, firmware y software en equipos de servicio técnico.',
    'exp.e1.b2':    'Desarrollé ecosistema web para gestión integral de ingreso/salida de productos, control de inventario y trazabilidad de equipos.',
    'exp.e1.b3':    'Scripts automatizados para envío masivo de correos y generación dinámica de documentos .docx (informes, devoluciones, documentación administrativa).',
    'exp.e1.b4':    'Optimización de flujos operativos: reduje el tiempo de atención promedio a <strong>1 día hábil por dispositivo</strong>.',
    'exp.e1.b5':    'Reparación integral de equipos electrónicos e integración de soluciones técnicas con mejora continua de procesos.',
    'exp.e2.date':  'Mar 2019 — Ene 2025',
    'exp.e2.dur':   '6 años',
    'exp.e2.role':  'Técnico Electrónico Automotriz',
    'exp.e2.company': 'Electricidad y Electrónica Automotriz · Chile',
    'exp.e2.b1':    'Programación y configuración de llaves automotrices, inmovilizadores, ECU, odómetros y sistemas electrónicos vehiculares.',
    'exp.e2.b2':    'Diagnóstico electrónico mediante escáner avanzado, codificación y adaptación de módulos; instalación y reparación de sistemas eléctricos automotrices.',
    'exp.e2.b3':    'Confección y duplicado de llaves (vehículos y domicilios), aperturas técnicas, ganzúas Lishi y maquinaria CNC Xhorse.',
    'exp.e2.b4':    'Reparación de PCB automotrices, módulos alzavidrios e instalación de GPS, alarmas, inmovilizadores y cerraduras eléctricas.',
    'exp.e2.b5':    'Instalaciones eléctricas domiciliarias y vehiculares; integración de soluciones técnicas para diagnóstico y automatización vehicular.',

    'edu.title':    'Formación',
    'edu.e1.badge': 'En curso',
    'edu.e1.name':  'Ingeniería en Electrónica y Sistemas Inteligentes',
    'edu.e2.badge': 'Titulado 2025',
    'edu.e2.name':  'Técnico de Nivel Superior en Electrónica',

    'contact.title':        '¿Hablamos?',
    'contact.desc':         'Disponible para nuevos proyectos, roles técnicos o colaboraciones.<br>Respondo siempre.',
    'contact.form.send':    'Enviar mensaje',
    'contact.or':           'o escríbeme directamente',
    'contact.app':          'App en producción',
    'footer.built':         'Hecho con HTML · CSS · JS puro',
  },

  en: {
    'nav.about':      'About',
    'nav.projects':   'Projects',
    'nav.channel':    'Channel',
    'nav.skills':     'Skills',
    'nav.experience': 'Experience',
    'nav.contact':    'Contact',

    'hero.eyebrow': 'Available for new opportunities',
    'hero.title1':  'Electronics & Intelligent Systems Engineering · INACAP',
    'hero.title2':  'Electronics Technician · Graduated 2025',
    'hero.desc':    'I design and build from firmware to interface.<br>PCBs, ESP32, web & mobile apps that solve real problems.',
    'hero.cta1':    'View projects',
    'hero.cta2':    'Contact me',

    'about.title': 'About me',
    'about.p1':    'Certified Electronics Technician from INACAP, graduating <strong>top of my class (Nº1)</strong>, currently in my final year of Electronics & Intelligent Systems Engineering. Over 6 years in automotive electronics and leading the technical service area at SoyMomo.',
    'about.p2':    'Passionate about IoT systems and automation. I combine hardware and software: PCB design, ESP32 firmware, and the web & mobile apps that control them. When I need a skill, I learn it and build with it.',
    'about.yt':    'AFix Channel — PCB Repair on YouTube',
    'about.stat1': 'Years in automotive electronics',
    'about.stat2': 'Personal projects built',
    'about.stat3': 'App live in production',
    'about.stat4': 'Technology stacks mastered',

    'projects.title': 'Projects',
    'projects.p1.badge': 'Live in production',
    'projects.p1.sub':   'Internal web app for technical service & inventory management',
    'projects.p1.cta':   'View app',
    'projects.p1.f1':    'Inventory dashboard with stock levels, movements, low-stock alerts and PDF/Excel export.',
    'projects.p1.f2':    'Full technical service module: work orders, validation, diagnosis and in-store pickup.',
    'projects.p1.f3':    'Automatic Word report generation and email delivery to customers via AppScript + Gmail.',
    'projects.p1.f4':    'Production metrics, revenue and failure analysis by period (admin only).',
    'projects.p1.f5':    'Bulk email system and password recovery with custom Firebase HTML email.',
    'projects.p1.f6':    'Public reception form to speed up the customer queue at the store.',

    'projects.p2.badge':    'In development · Final Degree Project',
    'projects.p2.sub':      'Full platform for field verification of single-phase electricity meters',
    'projects.p2.node1':    'ESP32 Firmware',
    'projects.p2.node3':    'Admin Panel',
    'projects.p2.tag.tech': 'Technicians',
    'projects.p2.tag.eq':   'Devices',
    'projects.p2.f1':       'ESP32 firmware: PZEM-004T sensor, Firestore heartbeat, NTP sync, auto measurement suggestion.',
    'projects.p2.f2':       'Flutter mobile app: onboarding, Firebase Auth, BLE pairing with ESP32, real-time dashboard.',
    'projects.p2.f3':       'React + Vite admin panel: technician management, device tracking, measurement history.',
    'projects.p2.f4':       'Node.js backend + Firebase Cloud Functions for business logic and validations.',

    'projects.p3.title': 'PCB Designs',
    'projects.p3.sub':   'Full schematic and layout for custom electronic devices',
    'projects.p3.sub1':  'ESP32 Audiometer',
    'projects.p3.sub2':  'Access Control v1 & v2',
    'projects.p3.desc1': 'Basic medical device with custom PCB. Exports data to Google Sheets via AppScript. Web app to chart results and export to PDF.',
    'projects.p3.desc2': 'Two versions of an electronic access control system. Complete schematic and PCB layout in KiCad.',

    'channel.title': 'AFix Channel',
    'channel.desc':  'PCB repair shorts, electronics diagnostics and hands-on projects.',
    'channel.cta':   'See full channel on YouTube',

    'skills.title': 'Skills',
    'skills.g1': 'Electronics & Hardware',
    'skills.g2': 'Firmware & Embedded',
    'skills.g3': 'Web & Cloud',
    'skills.g4': 'Design & Tools',
    'skills.s1.1': 'PCB Repair SMD / THT',
    'skills.s1.2': 'Automotive Electronics',
    'skills.s1.3': 'ECU · BCM · BSI · TCM · IMMO',
    'skills.s1.4': 'Oscilloscope · Multimeter',
    'skills.s1.5': 'Soldering station',
    'skills.s2.2': 'C++ · PlatformIO',
    'skills.s2.3': 'BLE · Wi-Fi',
    'skills.s2.4': 'UART · I²C · SPI',
    'skills.s3.3': 'Firebase (Auth, Firestore, Hosting)',
    'skills.s4.1': 'KiCad (PCB Design)',
    'skills.s4.2': 'Autodesk Inventor 3D',

    'exp.title':    'Experience',
    'exp.e1.date':  'Jan 2025 — Apr 2026',
    'exp.e1.dur':   '1 year 3 months',
    'exp.e1.role':  'Technical Service Area Lead',
    'exp.e1.role':  'Technical Service Manager',
    'exp.e1.b1':    'Component-level PCB diagnosis, analysis and repair; APK, firmware and software installation on service equipment.',
    'exp.e1.b2':    'Built a web ecosystem for full product intake/output management, inventory control and equipment traceability.',
    'exp.e1.b3':    'Automated bulk email scripts and dynamic .docx generation for technical reports, returns and admin documentation.',
    'exp.e1.b4':    'Operational flow optimization: reduced average service time to <strong>1 business day per device</strong>.',
    'exp.e1.b5':    'Full electronics repair and technical solution integration with continuous process improvement.',
    'exp.e2.date':  'Mar 2019 — Jan 2025',
    'exp.e2.dur':   '6 years',
    'exp.e2.role':  'Automotive Electronics Technician',
    'exp.e2.company': 'Automotive Electrical & Electronics · Chile',
    'exp.e2.b1':    'Programming and configuration of automotive keys, immobilizers, ECU, odometers and vehicle electronic systems.',
    'exp.e2.b2':    'Automotive electronic diagnosis with advanced scan tools, module coding and adaptation; electrical system installation and repair.',
    'exp.e2.b3':    'Key cutting and duplication (vehicles and residential), technical lockout openings, Lishi picks and Xhorse CNC machine.',
    'exp.e2.b4':    'Automotive PCB repair, window regulator modules and installation of GPS, alarms, immobilizers and electric locks.',
    'exp.e2.b5':    'Residential and vehicle electrical installations; integration of technical solutions for diagnosis and vehicle automation.',

    'edu.title':    'Education',
    'edu.e1.badge': 'In progress',
    'edu.e1.name':  'Electronics & Intelligent Systems Engineering',
    'edu.e2.badge': 'Graduated 2025',
    'edu.e2.name':  'Associate Degree in Electronics Technology',

    'contact.title':        'Let\'s talk',
    'contact.desc':         'Available for new projects, technical roles or collaborations.<br>I always reply.',
    'contact.form.send':    'Send message',
    'contact.or':           'or reach me directly',
    'contact.app':          'Live app',
    'footer.built':         'Built with pure HTML · CSS · JS',
  }
};

const ROLES = {
  es: ['Desarrollador Web','Firmware ESP32','Diseñador PCB','Flutter Developer','Técnico Automotriz'],
  en: ['Web Developer','ESP32 Firmware','PCB Designer','Flutter Developer','Automotive Technician']
};

let currentLang = 'es';

function applyLang(lang) {
  const dict = LANGS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  // Update html lang attr
  document.documentElement.lang = lang;
  // Update toggle labels
  document.getElementById('langLabel').textContent  = lang.toUpperCase();
  document.getElementById('langOther').textContent  = lang === 'es' ? 'EN' : 'ES';
  // Reset rotating roles
  roleIdx = 0;
  showRole(ROLES[lang][0]);
  currentLang = lang;
}

// Language toggle
document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

// =============================================
// HERO TEXT ROTATION
// =============================================
const rotateEl = document.getElementById('heroRotate');
let roleIdx = 0;

function showRole(text) {
  rotateEl.style.transition = 'none';
  rotateEl.style.opacity    = '0';
  rotateEl.style.transform  = 'translateY(8px)';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    rotateEl.textContent      = text;
    rotateEl.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    rotateEl.style.opacity    = '1';
    rotateEl.style.transform  = 'translateY(0)';
  }));
}

showRole(ROLES.es[0]);
setInterval(() => {
  roleIdx = (roleIdx + 1) % ROLES[currentLang].length;
  showRole(ROLES[currentLang][roleIdx]);
}, 2800);

// =============================================
// CAROUSELS
// =============================================
const CAROUSELS = {
  ecosistema: { count: 18, base: 'images/ecosistema-st/' },
  audiometro: { count: 7,  base: 'images/audiometro-esp32/' },
  control:    { count: 2,  base: 'images/control-acceso/' }
};

const carState = {};

function buildCarousel(id, count, base) {
  const track = document.getElementById(`track-${id}`);
  const dots  = document.getElementById(`dots-${id}`);
  if (!track || !dots) return;

  carState[id] = { current: 0, total: count };

  for (let i = 0; i < count; i++) {
    const num     = String(i + 1).padStart(2, '0');
    const picture = document.createElement('picture');
    const avif    = document.createElement('source');
    avif.srcset   = `${base}${num}.avif`;
    avif.type     = 'image/avif';
    const webp    = document.createElement('source');
    webp.srcset   = `${base}${num}.webp`;
    webp.type     = 'image/webp';
    const img     = document.createElement('img');
    img.src       = `${base}${num}.webp`;
    img.alt       = `Captura ${i + 1}`;
    img.loading   = i === 0 ? 'eager' : 'lazy';
    picture.append(avif, webp, img);
    track.appendChild(picture);

    const dot = document.createElement('button');
    dot.className = 'carousel__dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => carGoTo(id, i));
    dots.appendChild(dot);
  }
}

function carGoTo(id, index) {
  const s = carState[id];
  if (!s) return;
  s.current = ((index % s.total) + s.total) % s.total;
  const track = document.getElementById(`track-${id}`);
  if (track) track.style.transform = `translateX(-${s.current * 100}%)`;
  document.querySelectorAll(`#dots-${id} .carousel__dot`).forEach((d, i) =>
    d.classList.toggle('active', i === s.current)
  );
}

document.querySelectorAll('.carousel__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const id  = btn.dataset.target;
    const dir = btn.classList.contains('carousel__btn--prev') ? -1 : 1;
    if (carState[id]) carGoTo(id, carState[id].current + dir);
  });
});

Object.entries(CAROUSELS).forEach(([id, cfg]) => buildCarousel(id, cfg.count, cfg.base));

// Auto-advance main carousel
setInterval(() => {
  if (carState.ecosistema) carGoTo('ecosistema', carState.ecosistema.current + 1);
}, 4200);

// =============================================
// NAV
// =============================================
const nav       = document.getElementById('nav');
const navBurger = document.getElementById('navBurger');
const navMobile = document.getElementById('navMobile');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

navBurger.addEventListener('click', () => navMobile.classList.toggle('open'));
navMobile.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navMobile.classList.remove('open'))
);

const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
document.querySelectorAll('section[id]').forEach(s =>
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
    });
  }, { threshold: 0.35 }).observe(s)
);

// =============================================
// SCROLL REVEAL
// =============================================
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
