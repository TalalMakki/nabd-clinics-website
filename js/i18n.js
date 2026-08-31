(function () {
  var STORAGE_KEY = 'nabd-lang';

  var translations = {
    ar: {
      'page.title': 'عيادات نبض التخصصية | رعاية صحية متكاملة في مكان واحد',
      'page.description': 'عيادات نبض التخصصية بالرحاب - نخبة من الأطباء المختصين لتقديم رعاية صحية شاملة: أطفال، باطنية، نسائية وتوليد، جلدية، عمود فقري وأعصاب، وأكثر.',

      'brand.homeAria': 'عيادات نبض التخصصية - الصفحة الرئيسية',
      'brand.logoAlt': 'شعار عيادات نبض التخصصية',

      'nav.ariaMain': 'التنقل الرئيسي',
      'nav.home': 'الرئيسية',
      'nav.about': 'عن العيادة',
      'nav.departments': 'الأقسام',
      'nav.doctors': 'أطباؤنا',
      'nav.location': 'الموقع',
      'nav.contact': 'تواصل معنا',
      'nav.bookAppointment': 'احجز موعدك',
      'nav.toggleMenu': 'فتح/إغلاق القائمة',

      'hero.eyebrow': 'عيادات نبض التخصصية الشاملة',
      'hero.titleLine1': 'مرحباً بكم في',
      'hero.titleBrand': 'نبض',
      'hero.subtitle': 'نخبة من الأطباء المختصين لتقديم رعاية صحية متكاملة في مكان واحد — لأن نبضكم يستحق أفضل رعاية.',
      'hero.exploreDepartments': 'تصفّح الأقسام',
      'hero.clinicLocation': 'موقع العيادة',
      'hero.stat1Label': 'تخصصات طبية',
      'hero.stat2Label': 'مكان واحد شامل',
      'hero.stat3Label': 'رعاية بلا توقف',
      'hero.scrollDown': 'التمرير للأسفل',

      'about.eyebrow': 'لماذا نبض',
      'about.title': 'رعاية صحية شاملة بمعايير موثوقة',
      'about.desc': 'نجمع لكم نخبة من الاستشاريين والأخصائيين تحت سقف واحد، لتوفير الوقت والجهد وضمان استمرارية المتابعة الطبية.',
      'about.f1Title': 'رعاية متكاملة',
      'about.f1Desc': 'تخصصات متعددة تتكامل معاً لمتابعة حالتكم الصحية من كل الجوانب.',
      'about.f2Title': 'نخبة من الأطباء',
      'about.f2Desc': 'استشاريون وأخصائيون في تسعة تخصصات طبية مختلفة بخبرات موثوقة.',
      'about.f3Title': 'سهولة الحجز والمتابعة',
      'about.f3Desc': 'مكان واحد لجميع زياراتكم الطبية، لمتابعة سلسة دون تنقل بين العيادات.',
      'about.f4Title': 'ثقة وخصوصية',
      'about.f4Desc': 'بيئة طبية مريحة وآمنة تضع راحة المريض وخصوصيته في المقام الأول.',

      'dept.eyebrow': 'الأقسام المتوفرة',
      'dept.title': 'تخصصاتنا الطبية',
      'dept.desc': 'تسعة أقسام طبية متخصصة يقدمها فريق طبي مؤهل لخدمتكم في مكان واحد.',
      'dept.d1Title': 'طب الأطفال',
      'dept.d1Desc': 'متابعة نمو وتطور الأطفال والرعاية الصحية الشاملة لهم.',
      'dept.d2Title': 'العلاج الطبيعي',
      'dept.d2Desc': 'برامج تأهيل وعلاج طبيعي مخصصة لاستعادة الحركة والوظيفة.',
      'dept.d3Title': 'الأمراض الباطنية',
      'dept.d3Desc': 'تشخيص ومتابعة الأمراض الداخلية والحالات الصحية العامة.',
      'dept.d4Title': 'الروماتيزم',
      'dept.d4Desc': 'علاج التهابات المفاصل والأمراض الروماتيزمية المزمنة.',
      'dept.d5Title': 'العمود الفقري والأعصاب',
      'dept.d5Desc': 'تشخيص وعلاج مشاكل العمود الفقري والجهاز العصبي.',
      'dept.d6Title': 'النسائية والتوليد',
      'dept.d6Desc': 'متابعة صحة المرأة خلال جميع المراحل بما فيها الحمل والولادة.',
      'dept.d7Title': 'التغذية العلاجية',
      'dept.d7Desc': 'خطط غذائية علاجية مخصصة تدعم الشفاء وتحسّن الصحة العامة.',
      'dept.d8Title': 'الجلدية والتناسلية',
      'dept.d8Desc': 'تشخيص وعلاج أمراض الجلد والشعر والأمراض التناسلية.',
      'dept.d9Title': 'الكلى والمسالك البولية',
      'dept.d9Desc': 'تشخيص وعلاج أمراض الكلى والجهاز البولي بمتابعة دقيقة.',

      'doctors.eyebrow': 'فريقنا الطبي',
      'doctors.title': 'أطباء كل تخصص',
      'doctors.desc': 'مقعد بانتظار كل استشاري — بيانات الأطباء وصورهم قيد الإضافة حالياً وسيتم تحديثها قريباً.',
      'doctors.badge': 'قريباً',
      'doctors.d1Title': 'استشارية طب الأطفال',
      'doctors.d1Dept': 'قسم طب الأطفال',
      'doctors.d2Title': 'أخصائية العلاج الطبيعي',
      'doctors.d2Dept': 'قسم العلاج الطبيعي',
      'doctors.d3Title': 'استشاري الباطنية',
      'doctors.d3Dept': 'قسم الأمراض الباطنية',
      'doctors.d4Title': 'استشاري الروماتيزم',
      'doctors.d4Dept': 'قسم الروماتيزم',
      'doctors.d5Title': 'استشاري العمود الفقري والأعصاب',
      'doctors.d5Dept': 'قسم العمود الفقري والأعصاب',
      'doctors.d6Title': 'استشارية النسائية والتوليد',
      'doctors.d6Dept': 'قسم النسائية والتوليد',
      'doctors.d7Title': 'أخصائية التغذية العلاجية',
      'doctors.d7Dept': 'قسم التغذية العلاجية',
      'doctors.d8Title': 'استشاري الجلدية والتناسلية',
      'doctors.d8Dept': 'قسم الجلدية والتناسلية',
      'doctors.d9Title': 'استشاري الكلى والمسالك البولية',
      'doctors.d9Dept': 'قسم الكلى والمسالك البولية',

      'location.eyebrow': 'موقعنا',
      'location.title': 'زورونا في عيادات نبض',
      'location.desc': 'نستقبلكم في موقع مميز يسهل الوصول إليه، مجهز لتقديم أفضل رعاية صحية لكم ولعائلتكم.',
      'location.addressLabel': 'العنوان',
      'location.addressText': 'الرحاب – المركز الطبي الأول – الطابق الثاني – عيادة 203',
      'location.getDirections': 'احصل على الاتجاهات',
      'location.mapTitle': 'خريطة موقع عيادات نبض التخصصية',
      'location.mapAria': 'فتح موقع عيادات نبض على خرائط جوجل',
      'location.badgeAlt': 'عيادات نبض التخصصية',

      'contact.eyebrow': 'تواصل معنا',
      'contact.title': 'نحن هنا لخدمتكم',
      'contact.desc': 'تواصلوا معنا عبر الهاتف أو واتساب أو البريد الإلكتروني، وسيسعدنا الرد على استفساراتكم وحجز موعدكم.',
      'contact.call': 'اتصل بنا',
      'contact.whatsapp': 'واتساب',
      'contact.email': 'البريد الإلكتروني',
      'contact.whatsappFloatAria': 'تواصل معنا عبر واتساب',

      'footer.tagline': 'رعاية صحية متكاملة في مكان واحد.',
      'footer.navAria': 'روابط الفوتر',
      'footer.rights': 'عيادات نبض التخصصية. جميع الحقوق محفوظة.',
      'footer.madeBy': 'صُنع بواسطة',

      'backToTop.aria': 'العودة للأعلى'
    },
    en: {
      'page.title': 'Nabd Specialized Clinics | Complete Healthcare in One Place',
      'page.description': 'Nabd Specialized Clinics in Al Rehab - a select team of specialist doctors providing comprehensive healthcare: pediatrics, internal medicine, OB-GYN, dermatology, spine & neurology, and more.',

      'brand.homeAria': 'Nabd Specialized Clinics - Home',
      'brand.logoAlt': 'Nabd Specialized Clinics logo',

      'nav.ariaMain': 'Main navigation',
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.departments': 'Departments',
      'nav.doctors': 'Our Doctors',
      'nav.location': 'Location',
      'nav.contact': 'Contact Us',
      'nav.bookAppointment': 'Book Appointment',
      'nav.toggleMenu': 'Toggle menu',

      'hero.eyebrow': 'Nabd Specialized Clinics',
      'hero.titleLine1': 'Welcome to',
      'hero.titleBrand': 'Nabd',
      'hero.subtitle': 'A select team of specialist doctors delivering complete healthcare under one roof — because your pulse deserves the best care.',
      'hero.exploreDepartments': 'Explore Departments',
      'hero.clinicLocation': 'Clinic Location',
      'hero.stat1Label': 'Medical Specialties',
      'hero.stat2Label': 'All-in-One Location',
      'hero.stat3Label': 'Care Without Pause',
      'hero.scrollDown': 'Scroll down',

      'about.eyebrow': 'Why Nabd',
      'about.title': 'Comprehensive Healthcare, Trusted Standards',
      'about.desc': 'We bring together leading consultants and specialists under one roof, saving you time and effort while ensuring continuity of care.',
      'about.f1Title': 'Integrated Care',
      'about.f1Desc': 'Multiple specialties working together to look after every side of your health.',
      'about.f2Title': 'Leading Doctors',
      'about.f2Desc': 'Consultants and specialists across nine medical fields, with proven expertise.',
      'about.f3Title': 'Easy Booking & Follow-up',
      'about.f3Desc': 'One location for all your visits, for seamless follow-up without moving between clinics.',
      'about.f4Title': 'Trust & Privacy',
      'about.f4Desc': 'A comfortable, secure medical environment that puts patient comfort and privacy first.',

      'dept.eyebrow': 'Available Departments',
      'dept.title': 'Our Medical Specialties',
      'dept.desc': 'Nine specialized medical departments, staffed by a qualified team, all under one roof.',
      'dept.d1Title': 'Pediatrics',
      'dept.d1Desc': "Monitoring children's growth and development with complete healthcare.",
      'dept.d2Title': 'Physical Therapy',
      'dept.d2Desc': 'Tailored rehabilitation and physiotherapy programs to restore movement and function.',
      'dept.d3Title': 'Internal Medicine',
      'dept.d3Desc': 'Diagnosis and management of internal conditions and general health issues.',
      'dept.d4Title': 'Rheumatology',
      'dept.d4Desc': 'Treatment for joint inflammation and chronic rheumatic diseases.',
      'dept.d5Title': 'Spine & Neurology',
      'dept.d5Desc': 'Diagnosis and treatment of spine and nervous system disorders.',
      'dept.d6Title': 'Obstetrics & Gynecology',
      'dept.d6Desc': "Women's health care through every stage, including pregnancy and childbirth.",
      'dept.d7Title': 'Clinical Nutrition',
      'dept.d7Desc': 'Personalized therapeutic nutrition plans that support recovery and overall health.',
      'dept.d8Title': 'Dermatology & Venereology',
      'dept.d8Desc': 'Diagnosis and treatment of skin, hair, and venereal conditions.',
      'dept.d9Title': 'Nephrology & Urology',
      'dept.d9Desc': 'Careful diagnosis and treatment of kidney and urinary tract conditions.',

      'doctors.eyebrow': 'Our Medical Team',
      'doctors.title': 'Doctors for Every Specialty',
      'doctors.desc': 'A place reserved for every consultant — doctor profiles and photos are being added and will be updated soon.',
      'doctors.badge': 'Coming Soon',
      'doctors.d1Title': 'Pediatrics Consultant',
      'doctors.d1Dept': 'Pediatrics Department',
      'doctors.d2Title': 'Physical Therapy Specialist',
      'doctors.d2Dept': 'Physical Therapy Department',
      'doctors.d3Title': 'Internal Medicine Consultant',
      'doctors.d3Dept': 'Internal Medicine Department',
      'doctors.d4Title': 'Rheumatology Consultant',
      'doctors.d4Dept': 'Rheumatology Department',
      'doctors.d5Title': 'Spine & Neurology Consultant',
      'doctors.d5Dept': 'Spine & Neurology Department',
      'doctors.d6Title': 'OB-GYN Consultant',
      'doctors.d6Dept': 'OB-GYN Department',
      'doctors.d7Title': 'Clinical Nutrition Specialist',
      'doctors.d7Dept': 'Clinical Nutrition Department',
      'doctors.d8Title': 'Dermatology Consultant',
      'doctors.d8Dept': 'Dermatology Department',
      'doctors.d9Title': 'Nephrology & Urology Consultant',
      'doctors.d9Dept': 'Nephrology & Urology Department',

      'location.eyebrow': 'Our Location',
      'location.title': 'Visit Us at Nabd Clinics',
      'location.desc': 'We welcome you at an easily accessible location, equipped to provide the best healthcare for you and your family.',
      'location.addressLabel': 'Address',
      'location.addressText': 'Al Rehab – First Medical Center – 2nd Floor – Clinic 203',
      'location.getDirections': 'Get Directions',
      'location.mapTitle': 'Map of Nabd Specialized Clinics location',
      'location.mapAria': 'Open Nabd Clinics location on Google Maps',
      'location.badgeAlt': 'Nabd Specialized Clinics',

      'contact.eyebrow': 'Contact Us',
      'contact.title': "We're Here to Help",
      'contact.desc': "Reach us by phone, WhatsApp, or email — we're happy to answer your questions and book your appointment.",
      'contact.call': 'Call Us',
      'contact.whatsapp': 'WhatsApp',
      'contact.email': 'Email',
      'contact.whatsappFloatAria': 'Chat with us on WhatsApp',

      'footer.tagline': 'Complete healthcare, all in one place.',
      'footer.navAria': 'Footer links',
      'footer.rights': 'Nabd Specialized Clinics. All rights reserved.',
      'footer.madeBy': 'Made by',

      'backToTop.aria': 'Back to top'
    }
  };

  var ATTR_MAP = ['aria-label', 'alt', 'title', 'content'];

  function t(lang, key) {
    var dict = translations[lang] || translations.ar;
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : null;
  }

  function updateLangToggle(lang) {
    var btn = document.getElementById('langToggle');
    if (!btn) return;
    var label = btn.querySelector('.lang-toggle-label');
    if (lang === 'ar') {
      if (label) label.textContent = 'English';
      btn.setAttribute('lang', 'en');
      btn.setAttribute('aria-label', 'Switch to English');
    } else {
      if (label) label.textContent = 'العربية';
      btn.setAttribute('lang', 'ar');
      btn.setAttribute('aria-label', 'التبديل إلى العربية');
    }
  }

  function applyLanguage(lang, persist) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = t(lang, el.getAttribute('data-i18n'));
      if (val !== null) el.textContent = val;
    });

    ATTR_MAP.forEach(function (attr) {
      document.querySelectorAll('[data-i18n-' + attr + ']').forEach(function (el) {
        var val = t(lang, el.getAttribute('data-i18n-' + attr));
        if (val !== null) el.setAttribute(attr, val);
      });
    });

    updateLangToggle(lang);

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    }

    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh();
    }
  }

  function getInitialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'ar' || saved === 'en') return saved;
    } catch (e) { /* ignore */ }
    return 'ar';
  }

  var currentLang = getInitialLang();
  applyLanguage(currentLang, false);

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        applyLanguage(currentLang, true);
      });
    }
  });

  window.NabdI18n = { apply: applyLanguage, t: function (key) { return t(currentLang, key); } };
})();
