/**
 * IRONFORGE GYM - Schedule Module
 * Handles weekly class schedule rendering, day tabs, and category filtering.
 */

document.addEventListener('DOMContentLoaded', () => {
  initScheduleSection();
});

function initScheduleSection() {
  const tableBody = document.getElementById('schedule-table-body');
  const dayTabs = document.querySelectorAll('.schedule-day-tab');
  const categoryFilter = document.getElementById('schedule-category-filter');

  if (!tableBody || !GYM_DATA || !GYM_DATA.schedule) return;

  let currentDay = 'lunes';
  let currentCategory = 'all';

  function updateView() {
    let filtered = GYM_DATA.schedule.filter(item => item.day === currentDay);

    if (currentCategory !== 'all') {
      filtered = filtered.filter(item => item.category === currentCategory);
    }

    renderSchedule(filtered, tableBody);
  }

  // Day tabs click handler
  dayTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      dayTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentDay = tab.getAttribute('data-day');
      updateView();
    });
  });

  // Category select change handler
  if (categoryFilter) {
    categoryFilter.addEventListener('change', (e) => {
      currentCategory = e.target.value;
      updateView();
    });
  }

  // Initial load
  updateView();
}

function renderSchedule(items, container) {
  if (items.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="5" class="text-center py-4 text-secondary">
          <i class="bi bi-calendar-x fs-2 d-block mb-2 text-muted"></i>
          No hay clases programadas para este filtro o día.
        </td>
      </tr>
    `;
    return;
  }

  const categoryBadges = {
    'fuerza': '<span class="badge bg-danger bg-opacity-25 text-danger border border-danger border-opacity-50 px-2 py-1">Fuerza</span>',
    'funcional': '<span class="badge bg-warning bg-opacity-25 text-warning border border-warning border-opacity-50 px-2 py-1">Funcional</span>',
    'cardio': '<span class="badge bg-info bg-opacity-25 text-info border border-info border-opacity-50 px-2 py-1">Cardio</span>',
    'hiit': '<span class="badge bg-success bg-opacity-25 text-lime border border-success border-opacity-50 px-2 py-1">HIIT</span>'
  };

  container.innerHTML = items.map(item => `
    <tr class="schedule-row">
      <td class="time-col">
        <span class="schedule-time-badge">
          <i class="bi bi-clock-fill"></i> ${item.time}
        </span>
      </td>
      <td class="class-title-col">
        <span class="fw-bold text-white fs-6 d-block mb-1">${item.title}</span>
        <span class="text-secondary small d-md-none"><i class="bi bi-geo-alt text-lime me-1"></i>${item.room}</span>
      </td>
      <td class="trainer-col">
        <div class="d-flex align-items-center gap-2">
          <i class="bi bi-person-badge-fill text-lime fs-5"></i>
          <span class="text-white fw-medium">${item.trainer}</span>
        </div>
      </td>
      <td class="d-none d-md-table-cell">
        <span class="text-light small"><i class="bi bi-door-open-fill text-lime me-1"></i>${item.room}</span>
      </td>
      <td class="category-col text-end">
        ${categoryBadges[item.category] || '<span class="badge bg-secondary">General</span>'}
      </td>
    </tr>
  `).join('');
}
