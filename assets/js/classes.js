/**
 * IRONFORGE GYM - Classes Module
 * Handles class cards rendering and category filtering.
 */

document.addEventListener('DOMContentLoaded', () => {
  initClassesSection();
});

function initClassesSection() {
  const container = document.getElementById('classes-container');
  const filterButtons = document.querySelectorAll('.class-filter-btn');

  if (!container || !GYM_DATA || !GYM_DATA.classes) return;

  // Render all classes initially
  renderClasses(GYM_DATA.classes, container);

  // Filter button events
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      const filtered = (filterValue === 'all')
        ? GYM_DATA.classes
        : GYM_DATA.classes.filter(item => item.category === filterValue);

      // Simple fade out and in
      container.style.opacity = '0';
      container.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        renderClasses(filtered, container);
        container.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
      }, 200);
    });
  });
}

function renderClasses(classesList, container) {
  if (classesList.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-secondary fs-5">No se encontraron clases en esta categoría.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = classesList.map(item => `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card-forge class-card h-100 d-flex flex-column">
        <div class="class-img-wrapper position-relative overflow-hidden">
          <img src="${item.image}" alt="${item.title}" class="class-img w-100" loading="lazy">
          <span class="badge-lime position-absolute top-0 end-0 m-3">
            <i class="bi ${item.icon}"></i> ${item.categoryLabel}
          </span>
          <div class="class-meta-bar position-absolute bottom-0 start-0 w-100 p-2 d-flex justify-content-between text-white-50 px-3">
            <span class="small"><i class="bi bi-clock-fill text-lime me-1"></i> ${item.duration}</span>
            <span class="small"><i class="bi bi-speedometer2 text-lime me-1"></i> ${item.intensity}</span>
          </div>
        </div>
        <div class="p-4 d-flex flex-column flex-grow-1">
          <h4 class="text-white mb-2">${item.title}</h4>
          <p class="small text-secondary mb-3 flex-grow-1">${item.description}</p>
          <div class="d-flex align-items-center justify-content-between pt-3 border-top border-secondary border-opacity-25 mt-auto">
            <span class="small text-muted"><i class="bi bi-fire text-lime me-1"></i> ${item.calories}</span>
            <a href="#horarios" class="btn btn-sm btn-forge-outline py-1 px-3">Ver Horarios</a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}
