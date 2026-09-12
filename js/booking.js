(function () {
  var WHATSAPP_NUMBER = '201097963216';

  var DEPT_DOCTORS = {
    pediatrics: ['doctors.d8Name'],
    physiotherapy: ['doctors.d10Name', 'doctors.d11Name', 'doctors.d12Name'],
    internalMedicine: ['doctors.d1Name', 'doctors.d2Name'],
    rheumatology: ['doctors.d14Name'],
    spineNeuro: ['doctors.d6Name'],
    obgyn: ['doctors.d7Name'],
    nutrition: ['doctors.d13Name'],
    dermatology: ['doctors.d9Name'],
    nephrology: ['doctors.d1Name'],
    generalSurgery: ['doctors.d3Name'],
    bariatricSurgery: ['doctors.d4Name'],
    orthopedics: ['doctors.d5Name'],
    nursing: ['booking.nursingTeam']
  };

  function t(key) {
    return (window.NabdI18n && window.NabdI18n.t(key)) || key;
  }

  var overlay = document.getElementById('bookingOverlay');
  var form = document.getElementById('bookingForm');
  var deptSelect = document.getElementById('bkDept');
  var doctorSelect = document.getElementById('bkDoctor');
  var nameInput = document.getElementById('bkName');
  var ageInput = document.getElementById('bkAge');
  var phoneInput = document.getElementById('bkPhone');
  var addressField = document.getElementById('bkAddressField');
  var addressInput = document.getElementById('bkAddress');
  var closeBtn = document.getElementById('bookingClose');
  var lastFocused = null;
  var lastCoords = null;

  function requestLocation() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        lastCoords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      },
      function () { lastCoords = null; },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }

  function updateAddressVisibility(deptKey) {
    var isNursing = deptKey === 'nursing';
    addressField.hidden = !isNursing;
    addressInput.required = isNursing;
    if (isNursing) {
      requestLocation();
    } else {
      lastCoords = null;
      addressInput.value = '';
    }
  }

  function populateDoctors(deptKey) {
    doctorSelect.innerHTML = '';
    var placeholder = document.createElement('option');
    placeholder.value = '';

    if (!deptKey || !DEPT_DOCTORS[deptKey]) {
      placeholder.textContent = t('booking.doctorPlaceholderLocked');
      doctorSelect.appendChild(placeholder);
      doctorSelect.disabled = true;
      return;
    }

    placeholder.textContent = t('booking.doctorPlaceholder');
    doctorSelect.appendChild(placeholder);

    DEPT_DOCTORS[deptKey].forEach(function (doctorKey) {
      var opt = document.createElement('option');
      opt.value = doctorKey;
      opt.textContent = t(doctorKey);
      doctorSelect.appendChild(opt);
    });
    doctorSelect.disabled = false;
  }

  deptSelect.addEventListener('change', function () {
    populateDoctors(deptSelect.value);
    updateAddressVisibility(deptSelect.value);
  });

  document.addEventListener('nabd:langchange', function () {
    populateDoctors(deptSelect.value);
  });

  function openModal() {
    lastFocused = document.activeElement;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    nameInput.focus();
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  document.querySelectorAll('.js-open-booking').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;

    var deptLabel = deptSelect.options[deptSelect.selectedIndex].textContent;
    var doctorLabel = doctorSelect.options[doctorSelect.selectedIndex].textContent;
    var isNursing = deptSelect.value === 'nursing';

    var lines = [
      t('booking.msgTitle'),
      t('booking.msgName') + ': ' + nameInput.value.trim(),
      t('booking.msgAge') + ': ' + ageInput.value.trim(),
      t('booking.msgPhone') + ': ' + phoneInput.value.trim(),
      t('booking.msgDept') + ': ' + deptLabel,
      t('booking.msgDoctor') + ': ' + doctorLabel
    ];

    if (isNursing) {
      lines.push(t('booking.msgAddress') + ': ' + addressInput.value.trim());
      if (lastCoords) {
        lines.push(t('booking.msgLocation') + ': https://www.google.com/maps?q=' + lastCoords.lat + ',' + lastCoords.lng);
      }
    }

    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank', 'noopener');

    closeModal();
    form.reset();
    populateDoctors('');
    updateAddressVisibility('');
  });

  populateDoctors('');
  updateAddressVisibility('');
})();
