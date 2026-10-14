/**
 * IRONFORGE GYM - Pricing Module
 * Handles monthly/annual toggle, plan cards rendering, and selecting plan for registration.
 */

document.addEventListener('DOMContentLoaded', () => {
  initPricingSection();
});

function initPricingSection() {
  const container = document.getElementById('pricing-cards-container');
  const billingToggle = document.getElementById('billing-toggle');

  if (!container || !GYM_DATA || !GYM_DATA.plans) return;

  let isAnnual = false;

  function updateCards() {
    renderPricingCards(GYM_DATA.plans, container, isAnnual);
    updateSelectOptions(isAnnual);
  }

  if (billingToggle) {
    billingToggle.addEventListener('change', (e) => {
      isAnnual = e.target.checked;
      
      const labelMonthly = document.getElementById('billing-monthly-label');
      const labelAnnual = document.getElementById('billing-annual-label');

      if (labelMonthly && labelAnnual) {
        if (isAnnual) {
          labelMonthly.classList.remove('text-white', 'fw-bold');
          labelMonthly.classList.add('text-secondary');
          labelAnnual.classList.add('text-lime', 'fw-bold');
        } else {
          labelMonthly.classList.add('text-white', 'fw-bold');
          labelMonthly.classList.remove('text-secondary');
          labelAnnual.classList.remove('text-lime', 'fw-bold');
        }
      }

      updateCards();
    });
  }

  // Initial render
  updateCards();
}

function renderPricingCards(plans, container, isAnnual) {
  container.innerHTML = plans.map(plan => {
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    const billedNote = isAnnual ? 'Facturado anualmente (Ahorras 20%)' : 'Facturado mensualmente';
    const isPopular = plan.popular;

    return `
      <div class="col-12 col-lg-4 mb-4">
        <div class="card-forge pricing-card h-100 p-4 p-xl-5 d-flex flex-column ${isPopular ? 'popular-plan' : ''}">
          ${isPopular ? `
            <div class="popular-badge">
              <span class="badge-popular"><i class="bi bi-star-fill"></i> RECOMENDADO</span>
            </div>
          ` : ''}

          <div class="text-center mb-4">
            <span class="text-uppercase text-secondary fw-semibold small letter-spacing-1">${plan.badge}</span>
            <h3 class="font-heading text-white mt-1 mb-3">${plan.name}</h3>
            <div class="price-box my-3">
              <span class="fs-4 text-lime align-top me-1">Bs.</span>
              <span class="price-val font-heading display-4 fw-bold text-white">${price}</span>
              <span class="text-secondary small">/mes</span>
            </div>
            <p class="text-muted small mb-0">${billedNote}</p>
          </div>

          <p class="text-secondary small text-center mb-4">${plan.description}</p>

          <hr class="border-secondary border-opacity-25 my-2">

          <ul class="list-unstyled flex-grow-1 my-4 feature-list">
            ${plan.features.map(f => `
              <li class="d-flex align-items-start gap-2 mb-3 small ${f.included ? 'text-white' : 'text-muted text-decoration-line-through'}">
                <i class="bi ${f.included ? 'bi-check-circle-fill text-lime' : 'bi-x-circle text-secondary'} mt-1"></i>
                <span>${f.text}</span>
              </li>
            `).join('')}
          </ul>

          <button 
            type="button" 
            class="btn ${isPopular ? 'btn-forge-primary' : 'btn-forge-outline'} w-100 select-plan-btn mt-auto"
            data-plan-id="${plan.id}"
            data-plan-name="${plan.name}"
            data-billing="${isAnnual ? 'anual' : 'mensual'}">
            Elegir ${plan.name}
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Attach event handlers to "Elegir Plan" buttons
  const planButtons = container.querySelectorAll('.select-plan-btn');
  planButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const planId = btn.getAttribute('data-plan-id');
      const planName = btn.getAttribute('data-plan-name');
      const billing = btn.getAttribute('data-billing');
      selectPlanForRegistration(planId, planName, billing);
    });
  });
}

function selectPlanForRegistration(planId, planName, billing) {
  const planSelect = document.getElementById('reg-plan');
  const regSection = document.getElementById('inscripcion');

  if (planSelect) {
    planSelect.value = planId;

    // Trigger visual highlight on select input
    planSelect.classList.add('border-lime-pulse');
    setTimeout(() => {
      planSelect.classList.remove('border-lime-pulse');
    }, 2000);
  }

  // Smooth scroll to registration
  if (regSection) {
    regSection.scrollIntoView({ behavior: 'smooth' });
    
    // Toast notification or feedback banner
    const notice = document.getElementById('selected-plan-notice');
    if (notice) {
      notice.innerHTML = `<i class="bi bi-check2-circle text-lime me-2"></i>Has seleccionado: <strong>${planName} (${billing})</strong>. Completa tus datos para confirmar tu lugar.`;
      notice.classList.remove('d-none');
    }
  }
}

function updateSelectOptions(isAnnual) {
  const planSelect = document.getElementById('reg-plan');
  if (!planSelect || !GYM_DATA || !GYM_DATA.plans) return;

  const currentVal = planSelect.value;
  GYM_DATA.plans.forEach(plan => {
    const opt = planSelect.querySelector(`option[value="${plan.id}"]`);
    if (opt) {
      const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
      const rec = plan.popular ? ' - Recomendado' : '';
      const mode = isAnnual ? ' (Anual)' : '';
      opt.textContent = `${plan.name} (Bs. ${price}/mes${mode})${rec}`;
    }
  });

  if (currentVal) {
    planSelect.value = currentVal;
  }
}

