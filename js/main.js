(function () {
  document.documentElement.classList.add('js');

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- Loader ---------------- */
  var loader = document.getElementById('loader');
  window.addEventListener('load', function () {
    setTimeout(function () {
      if (loader) loader.classList.add('is-hidden');
    }, 450);
  });

  /* ---------------- Sticky header ---------------- */
  var header = document.getElementById('siteHeader');
  var backToTop = document.getElementById('backToTop');
  function onScroll() {
    var scrolled = window.scrollY > 40;
    header.classList.toggle('is-scrolled', scrolled);
    backToTop.classList.toggle('is-visible', window.scrollY > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Mobile nav ---------------- */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', function () {
    var isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
  });
  mainNav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------------- Active nav link on scroll ---------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var sections = navLinks
    .map(function (l) { return document.querySelector(l.getAttribute('href')); })
    .filter(Boolean);

  function setActiveLink() {
    var scrollPos = window.scrollY + window.innerHeight * 0.35;
    var current = sections[0];
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) current = sec;
    });
    navLinks.forEach(function (link) {
      var target = document.querySelector(link.getAttribute('href'));
      link.classList.toggle('active-link', target === current);
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* ---------------- Count-up stats ---------------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    if (prefersReducedMotion) { el.textContent = target; return; }
    var obj = { val: 0 };
    if (window.gsap) {
      gsap.to(obj, {
        val: target,
        duration: 1.2,
        ease: 'power2.out',
        onUpdate: function () { el.textContent = Math.round(obj.val); }
      });
    } else {
      el.textContent = target;
    }
  }

  /* ---------------- GSAP animations ---------------- */
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    /* Web fonts (Cairo/Tajawal) swap in after ScrollTrigger's first measurement,
       reflowing section heights — refresh once they're actually ready so later
       sections don't get stuck at their initial (offscreen) trigger position. */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
    window.addEventListener('load', function () { ScrollTrigger.refresh(); });

    if (prefersReducedMotion) {
      gsap.set('.hero-reveal, .reveal-up', { opacity: 1, y: 0, clearProps: 'transform' });
      document.querySelectorAll('.stat-num[data-count]').forEach(animateCount);
    } else {
      /* Hero entrance */
      var heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl
        .fromTo('.hero-reveal', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 })
        .fromTo('.hero-blob', { opacity: 0, scale: 0.7 }, { opacity: 0.25, scale: 1, duration: 1.2 }, 0)
        .fromTo('.hero-dot', { opacity: 0, scale: 0 }, { opacity: 0.6, scale: 1, duration: 0.6, stagger: 0.1 }, 0.3);

      ScrollTrigger.create({
        trigger: '.hero-stats',
        start: 'top 85%',
        once: true,
        onEnter: function () {
          document.querySelectorAll('.stat-num[data-count]').forEach(animateCount);
        }
      });

      /* Section heads */
      gsap.utils.toArray('.section-head').forEach(function (el) {
        gsap.fromTo(el, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' }
        });
      });

      /* Feature cards */
      gsap.fromTo('.feature-card', { opacity: 0, y: 40, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.5)',
        stagger: { each: 0.08, grid: 'auto', from: 'start' },
        scrollTrigger: { trigger: '.features-grid', start: 'top 85%' }
      });

      /* Department cards */
      gsap.fromTo('.dept-card', { opacity: 0, y: 46, scale: 0.94 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'back.out(1.4)',
        stagger: { each: 0.08, grid: 'auto', from: 'start' },
        scrollTrigger: { trigger: '.dept-grid', start: 'top 85%' }
      });

      /* Doctor cards */
      gsap.fromTo('.doctor-card', { opacity: 0, y: 40, scale: 0.94 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.4)',
        stagger: { each: 0.07, grid: 'auto', from: 'start' },
        scrollTrigger: { trigger: '.doctors-grid', start: 'top 85%' }
      });

      /* Location */
      gsap.fromTo('.location-info', { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.location-inner', start: 'top 80%' }
      });
      gsap.fromTo('.location-visual', { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.location-inner', start: 'top 80%' }
      });

      /* Contact cards */
      gsap.fromTo('.contact-card', { opacity: 0, y: 40, scale: 0.94 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.4)',
        stagger: { each: 0.08, grid: 'auto', from: 'start' },
        scrollTrigger: { trigger: '.contact-grid', start: 'top 85%' }
      });

      /* Generic reveal-up fallback for any remaining */
      gsap.utils.toArray('.reveal-up').forEach(function (el) {
        if (el.closest('.features-grid, .dept-grid, .doctors-grid, .contact-grid, .location-inner, .section-head')) return;
        gsap.fromTo(el, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        });
      });
    }
  } else {
    /* GSAP failed to load (offline) — ensure content is visible */
    document.querySelectorAll('.hero-reveal, .reveal-up').forEach(function (el) {
      el.style.opacity = 1;
    });
    document.querySelectorAll('.stat-num[data-count]').forEach(function (el) {
      el.textContent = el.getAttribute('data-count');
    });
  }

  /* ---------------- Footer year ---------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
