/**
 * IRONFORGE GYM - Registration Module
 * Form validations, LocalStorage demo saving, and direct WhatsApp pre-registration dispatch.
 */

document.addEventListener('DOMContentLoaded', () => {
  initRegistrationForm();
});

function initRegistrationForm() {
  const form = document.getElementById('registration-form');
  const whatsappDirectBtn = document.getElementById('whatsapp-direct-btn');

  if (!form) return;

  // Real-time input clearing of errors
  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
    });
  });

  // Form submit handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm(form)) {
      return;
    }

    const formData = {
      name: document.getElementById('reg-name').value.trim(),
      email: document.getElementById('reg-email').value.trim(),
      phone: document.getElementById('reg-phone').value.trim(),
      plan: document.getElementById('reg-plan').value,
      planLabel: document.getElementById('reg-plan').options[document.getElementById('reg-plan').selectedIndex].text,
      message: document.getElementById('reg-message').value.trim(),
      date: new Date().toLocaleString()
    };

    // Save to LocalStorage for testing / demo review
    saveToLocalStorage(formData);

    // Show visual confirmation modal
    showSuccessModal(formData);

    // Reset form after submission
    form.reset();
  });

  // Direct WhatsApp contact click from form
  if (whatsappDirectBtn) {
    whatsappDirectBtn.addEventListener('click', () => {
      const name = document.getElementById('reg-name')?.value.trim() || 'un futuro socio';
      const plan = document.getElementById('reg-plan')?.options[document.getElementById('reg-plan').selectedIndex]?.text || 'Información General';
      
      const phoneGym = '59170000000'; // Número demostrativo de atención
      const message = encodeURIComponent(`¡Hola IRONFORGE GYM! 💪 Mi nombre es ${name} y me gustaría recibir información personalizada sobre el ${plan}.`);
      window.open(`https://wa.me/${phoneGym}?text=${message}`, '_blank');
    });
  }
}

function validateForm(form) {
  let isValid = true;

  const nameInput = document.getElementById('reg-name');
  const emailInput = document.getElementById('reg-email');
  const phoneInput = document.getElementById('reg-phone');
  const planSelect = document.getElementById('reg-plan');

  // Name check
  if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
    nameInput.classList.add('is-invalid');
    isValid = false;
  } else {
    nameInput.classList.remove('is-invalid');
  }

  // Email check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.classList.add('is-invalid');
    isValid = false;
  } else {
    emailInput.classList.remove('is-invalid');
  }

  // Phone check
  if (!phoneInput.value.trim() || phoneInput.value.trim().length < 7) {
    phoneInput.classList.add('is-invalid');
    isValid = false;
  } else {
    phoneInput.classList.remove('is-invalid');
  }

  // Plan select check
  if (!planSelect.value) {
    planSelect.classList.add('is-invalid');
    isValid = false;
  } else {
    planSelect.classList.remove('is-invalid');
  }

  return isValid;
}

function saveToLocalStorage(data) {
  try {
    let savedList = JSON.parse(localStorage.getItem('ironforge_registrations')) || [];
    savedList.push(data);
    localStorage.setItem('ironforge_registrations', JSON.stringify(savedList));
  } catch (err) {
    console.warn('LocalStorage no disponible:', err);
  }
}

function showSuccessModal(data) {
  const modalEl = document.getElementById('registrationSuccessModal');
  if (!modalEl) return;

  const summaryEl = document.getElementById('modal-data-summary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="p-3 bg-dark-surface rounded border border-subtle text-start">
        <p class="mb-1 text-white"><strong>Nombre:</strong> ${data.name}</p>
        <p class="mb-1 text-white"><strong>Correo:</strong> ${data.email}</p>
        <p class="mb-1 text-white"><strong>Teléfono:</strong> ${data.phone}</p>
        <p class="mb-1 text-lime"><strong>Plan Seleccionado:</strong> ${data.planLabel}</p>
        ${data.message ? `<p class="mb-0 text-secondary"><strong>Mensaje:</strong> "${data.message}"</p>` : ''}
      </div>
    `;
  }

  // Set WhatsApp button inside modal
  const modalWaBtn = document.getElementById('modal-whatsapp-action');
  if (modalWaBtn) {
    const phoneGym = '59170000000';
    const waText = encodeURIComponent(`¡Hola IRONFORGE GYM! 🔥 Acabo de solicitar mi inscripción en la web.\n\n👤 *Nombre:* ${data.name}\n📱 *Teléfono:* ${data.phone}\n🏆 *Plan:* ${data.planLabel}\n\n¿Cuáles son los pasos para comenzar hoy mismo?`);
    modalWaBtn.href = `https://wa.me/${phoneGym}?text=${waText}`;
  }

  const modalInstance = new bootstrap.Modal(modalEl);
  modalInstance.show();
}
