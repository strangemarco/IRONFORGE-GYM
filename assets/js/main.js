/**
 * IRONFORGE GYM - Main Application Script
 * Global interactions, animations, counters, dynamic renderers (trainers, testimonials, faqs),
 * back-to-top button and navbar effects.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarBehavior();
  initStatsCounter();
  renderTrainers();
  renderTestimonials();
  renderFaqs();
  initBackToTop();
  initSmoothScroll();
});

/* ==========================================================================
   1. NAVBAR BEHAVIOR
   ========================================================================== */
function initNavbarBehavior() {
  const navbar = document.querySelector('.ironforge-navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const bsCollapse = navbarCollapse ? new bootstrap.Collapse(navbarCollapse, { toggle: false }) : null;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        bsCollapse?.hide();
      }
    });
  });

  // Active section spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  });
}

/* ==========================================================================
   2. ANIMATED NUMBER COUNTERS (Intersection Observer)
   ========================================================================== */
function initStatsCounter() {
  const statsContainer = document.getElementById('stats-section');
  if (!statsContainer || !GYM_DATA || !GYM_DATA.stats) return;

  // Render stats cards if container exists
  const statsRow = document.getElementById('stats-row');
  if (statsRow) {
    statsRow.innerHTML = GYM_DATA.stats.map(s => `
      <div class="col-6 col-md-3 mb-3 mb-md-0">
        <div class="card-forge stats-box text-center p-3 p-md-4">
          <div class="stat-number font-heading display-5 fw-bold text-lime mb-1">
            <span class="counter-val" data-target="${s.value}">0</span>${s.suffix}
          </div>
          <span class="stat-label small text-secondary text-uppercase fw-semibold">${s.label}</span>
        </div>
      </div>
    `).join('');
  }

  const counters = document.querySelectorAll('.counter-val');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1800; // ms
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const stepIncrement = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += stepIncrement;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsContainer);
}

/* ==========================================================================
   3. RENDER TRAINERS
   ========================================================================== */
function renderTrainers() {
  const container = document.getElementById('trainers-container');
  if (!container || !GYM_DATA || !GYM_DATA.trainers) return;

  container.innerHTML = GYM_DATA.trainers.map(t => `
    <div class="col-12 col-sm-6 col-lg-3 mb-4">
      <div class="card-forge trainer-card h-100 text-center">
        <div class="trainer-img-wrapper position-relative overflow-hidden">
          <img src="${t.image}" alt="${t.name}" class="trainer-img w-100" loading="lazy">
          <div class="trainer-socials-overlay position-absolute bottom-0 start-0 w-100 p-3 d-flex justify-content-center gap-2">
            <a href="${t.socials.instagram}" class="social-circle-btn" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="${t.socials.twitter}" class="social-circle-btn" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
            <a href="${t.socials.linkedin}" class="social-circle-btn" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="p-4">
          <h5 class="text-white mb-1 font-heading">${t.name}</h5>
          <p class="text-lime small fw-semibold mb-2">${t.role}</p>
          <span class="badge bg-secondary bg-opacity-25 text-white-50 border border-secondary border-opacity-25 mb-3 small">
            ${t.experience}
          </span>
          <p class="text-muted small fst-italic mb-3">"${t.quote}"</p>
          <div class="border-top border-secondary border-opacity-25 pt-2">
            <small class="text-secondary d-block"><i class="bi bi-award-fill text-lime me-1"></i>${t.certifications}</small>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. RENDER TESTIMONIALS (Carousel)
   ========================================================================== */
function renderTestimonials() {
  const container = document.getElementById('testimonials-carousel-inner');
  if (!container || !GYM_DATA || !GYM_DATA.testimonials) return;

  container.innerHTML = GYM_DATA.testimonials.map((test, index) => {
    const stars = Array(test.rating).fill('<i class="bi bi-star-fill text-warning me-1"></i>').join('');
    
    return `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8">
            <div class="card-forge testimonial-card p-4 p-md-5 text-center position-relative">
              <i class="bi bi-quote testimonial-watermark" aria-hidden="true"></i>
              <div class="testimonial-quote-badge mx-auto">
                <i class="bi bi-quote"></i>
              </div>
              <div class="mb-3">${stars}</div>
              <p class="fs-5 text-light fst-italic mb-4 px-md-4">
                "${test.comment}"
              </p>
              <div class="d-flex align-items-center justify-content-center gap-3">
                <img src="${test.avatar}" alt="${test.name}" class="rounded-circle border border-2 border-lime" width="60" height="60" style="object-fit:cover;">
                <div class="text-start">
                  <h5 class="text-white mb-0 font-heading">${test.name}</h5>
                  <small class="text-lime fw-semibold d-block">${test.plan}</small>
                  <small class="text-secondary">${test.role}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   5. RENDER FAQS (Bootstrap Accordion)
   ========================================================================== */
function renderFaqs() {
  const accordionContainer = document.getElementById('faqAccordion');
  if (!accordionContainer || !GYM_DATA || !GYM_DATA.faqs) return;

  accordionContainer.innerHTML = GYM_DATA.faqs.map((faq, index) => `
    <div class="accordion-item bg-card border-subtle mb-3 rounded overflow-hidden">
      <h2 class="accordion-header" id="heading-${index}">
        <button class="accordion-button collapsed bg-card text-white font-heading" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${index}" aria-expanded="false" aria-controls="collapse-${index}">
          <i class="bi bi-question-circle text-lime me-2"></i> ${faq.question}
        </button>
      </h2>
      <div id="collapse-${index}" class="accordion-collapse collapse" aria-labelledby="heading-${index}" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-secondary border-top border-secondary border-opacity-10">
          ${faq.answer}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   6. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   7. SMOOTH SCROLL FOR IN-PAGE ANCHORS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}
