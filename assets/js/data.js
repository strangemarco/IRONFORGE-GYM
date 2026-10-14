/**
 * IRONFORGE GYM - Central Data Store
 * Contains data for classes, trainers, schedule, plans, testimonials, and FAQs.
 */

const GYM_DATA = {
  // 1. Clases y Servicios
  classes: [
    {
      id: 'musculacion',
      title: 'Musculación & Hipertrofia',
      category: 'fuerza',
      categoryLabel: 'Fuerza',
      description: 'Zona de pesas libres de última generación, mancuernas hasta 60kg y máquinas biomecánicas para máxima ganancia muscular y fuerza pura.',
      duration: '60 min',
      intensity: 'Alta',
      calories: '450 - 650 kcal',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
      icon: 'bi-lightning-charge-fill'
    },
    {
      id: 'cross-training',
      title: 'Cross Training & WOD',
      category: 'funcional',
      categoryLabel: 'Funcional / WOD',
      description: 'Entrenamiento funcional de alta exigencia combinando levantamiento olímpico, calistenia y resistencia cardiovascular extrema.',
      duration: '50 min',
      intensity: 'Muy Alta',
      calories: '600 - 850 kcal',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      icon: 'bi-fire'
    },
    {
      id: 'spinning',
      title: 'Power Cycling & Spinning',
      category: 'cardio',
      categoryLabel: 'Cardio',
      description: 'Sesiones de ciclismo indoor con música de alto impacto, luces sincronizadas y métricas de potencia para quemar calorías sin impacto articular.',
      duration: '45 min',
      intensity: 'Alta',
      calories: '500 - 700 kcal',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80',
      icon: 'bi-bicycle'
    },
    {
      id: 'hiit-combate',
      title: 'Iron HIIT & Boxing',
      category: 'hiit',
      categoryLabel: 'HIIT / Combate',
      description: 'Intervalos explosivos con sacos de boxeo, golpeo técnico y ejercicios pliométricos para mejorar tu agilidad, reflejos y quema de grasa.',
      duration: '45 min',
      intensity: 'Muy Alta',
      calories: '550 - 800 kcal',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
      icon: 'bi-stopwatch-fill'
    },
    {
      id: 'funcional',
      title: 'Entrenamiento Funcional 360',
      category: 'funcional',
      categoryLabel: 'Funcional',
      description: 'Mejora tu movilidad, core, equilibrio y agilidad con kettlebells, battle ropes y bandas de resistencia adaptadas a todos los niveles.',
      duration: '50 min',
      intensity: 'Media-Alta',
      calories: '400 - 600 kcal',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
      icon: 'bi-gear-wide-connected'
    },
    {
      id: 'personal-training',
      title: 'Personal Training 1 a 1',
      category: 'fuerza',
      categoryLabel: 'Personalizado',
      description: 'Acompañamiento exclusivo con un coach certificado, evaluación antropométrica continua y programación adaptada a tus metas específicas.',
      duration: '60 min',
      intensity: 'Personalizada',
      calories: 'Varía según plan',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
      icon: 'bi-person-check-fill'
    }
  ],

  // 2. Entrenadores
  trainers: [
    {
      id: 'marcos-roca',
      name: 'Marcos "Titan" Roca',
      role: 'Head Coach & Levantamiento Olímpico',
      experience: '9 años de experiencia',
      certifications: 'CSCS® • Level 2 CrossFit Trainer',
      quote: '"La disciplina vence al talento cuando el talento no se esfuerza."',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=700&q=80',
      socials: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 'valeria-soliz',
      name: 'Valeria Solíz',
      role: 'Especialista en Hipertrofia & Nutrición',
      experience: '7 años de experiencia',
      certifications: 'Lic. Ciencias del Deporte • Certificada ISSA',
      quote: '"Construye un cuerpo fuerte y una mente inquebrantable."',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=700&q=80',
      socials: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 'diego-alvarez',
      name: 'Diego Álvarez',
      role: 'Master Trainer de HIIT & Cycling',
      experience: '6 años de experiencia',
      certifications: 'Schwinn Certified Master • ACE Trainer',
      quote: '"Cada gota de sudor te acerca un paso más a tu mejor versión."',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
      socials: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 'camila-torres',
      name: 'Camila Torres',
      role: 'Coach de Movilidad y Entrenamiento Funcional',
      experience: '5 años de experiencia',
      certifications: 'NASM-CPT • FMS Level 1 & 2',
      quote: '"Muévete mejor hoy para rendir al máximo mañana."',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=700&q=80',
      socials: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    }
  ],

  // 3. Horarios Semanales (Lunes a Sábado)
  schedule: [
    // Lunes
    { day: 'lunes', time: '06:00 - 07:00', title: 'Cross Training', trainer: 'Marcos Roca', category: 'funcional', room: 'Box Central' },
    { day: 'lunes', time: '07:30 - 08:30', title: 'Power Cycling', trainer: 'Diego Álvarez', category: 'cardio', room: 'Spin Studio' },
    { day: 'lunes', time: '09:00 - 10:00', title: 'Musculación Guiada', trainer: 'Valeria Solíz', category: 'fuerza', room: 'Sala Pesas' },
    { day: 'lunes', time: '18:00 - 19:00', title: 'Iron HIIT & Boxing', trainer: 'Diego Álvarez', category: 'hiit', room: 'Arena Combate' },
    { day: 'lunes', time: '19:30 - 20:30', title: 'Cross Training Pro', trainer: 'Marcos Roca', category: 'funcional', room: 'Box Central' },
    { day: 'lunes', time: '20:30 - 21:30', title: 'Funcional 360', trainer: 'Camila Torres', category: 'funcional', room: 'Zona Funcional' },

    // Martes
    { day: 'martes', time: '06:30 - 07:30', title: 'Funcional Core', trainer: 'Camila Torres', category: 'funcional', room: 'Zona Funcional' },
    { day: 'martes', time: '08:00 - 09:00', title: 'Power Cycling', trainer: 'Diego Álvarez', category: 'cardio', room: 'Spin Studio' },
    { day: 'martes', time: '10:00 - 11:00', title: 'Hipertrofia Piernas', trainer: 'Valeria Solíz', category: 'fuerza', room: 'Sala Pesas' },
    { day: 'martes', time: '18:30 - 19:30', title: 'Cross Training', trainer: 'Marcos Roca', category: 'funcional', room: 'Box Central' },
    { day: 'martes', time: '19:45 - 20:45', title: 'Spinning Nocturno', trainer: 'Diego Álvarez', category: 'cardio', room: 'Spin Studio' },

    // Miércoles
    { day: 'miercoles', time: '06:00 - 07:00', title: 'Cross Training', trainer: 'Marcos Roca', category: 'funcional', room: 'Box Central' },
    { day: 'miercoles', time: '07:30 - 08:30', title: 'Power Cycling', trainer: 'Diego Álvarez', category: 'cardio', room: 'Spin Studio' },
    { day: 'miercoles', time: '09:30 - 10:30', title: 'Movilidad & Core', trainer: 'Camila Torres', category: 'funcional', room: 'Zona Funcional' },
    { day: 'miercoles', time: '18:00 - 19:00', title: 'Iron HIIT & Boxing', trainer: 'Diego Álvarez', category: 'hiit', room: 'Arena Combate' },
    { day: 'miercoles', time: '19:30 - 20:30', title: 'Levantamiento Olímpico', trainer: 'Marcos Roca', category: 'fuerza', room: 'Box Central' },
    { day: 'miercoles', time: '20:30 - 21:30', title: 'Fuerza Superior', trainer: 'Valeria Solíz', category: 'fuerza', room: 'Sala Pesas' },

    // Jueves
    { day: 'jueves', time: '06:30 - 07:30', title: 'Funcional 360', trainer: 'Camila Torres', category: 'funcional', room: 'Zona Funcional' },
    { day: 'jueves', time: '08:00 - 09:00', title: 'Power Cycling', trainer: 'Diego Álvarez', category: 'cardio', room: 'Spin Studio' },
    { day: 'jueves', time: '17:30 - 18:30', title: 'Cross Training', trainer: 'Marcos Roca', category: 'funcional', room: 'Box Central' },
    { day: 'jueves', time: '19:00 - 20:00', title: 'Iron HIIT & Boxing', trainer: 'Diego Álvarez', category: 'hiit', room: 'Arena Combate' },
    { day: 'jueves', time: '20:15 - 21:15', title: 'Glúteos & Core', trainer: 'Valeria Solíz', category: 'fuerza', room: 'Sala Pesas' },

    // Viernes
    { day: 'viernes', time: '06:00 - 07:00', title: 'Cross Training Final WOD', trainer: 'Marcos Roca', category: 'funcional', room: 'Box Central' },
    { day: 'viernes', time: '07:30 - 08:30', title: 'Power Cycling Beat', trainer: 'Diego Álvarez', category: 'cardio', room: 'Spin Studio' },
    { day: 'viernes', time: '10:00 - 11:00', title: 'Musculación Full Body', trainer: 'Valeria Solíz', category: 'fuerza', room: 'Sala Pesas' },
    { day: 'viernes', time: '18:00 - 19:00', title: 'Cross Training Teams', trainer: 'Marcos Roca', category: 'funcional', room: 'Box Central' },
    { day: 'viernes', time: '19:30 - 20:30', title: 'Friday Night Fight HIIT', trainer: 'Diego Álvarez', category: 'hiit', room: 'Arena Combate' },

    // Sábado
    { day: 'sabado', time: '08:00 - 09:15', title: 'Super WOD Comunitario', trainer: 'Marcos & Valeria', category: 'funcional', room: 'Box Central' },
    { day: 'sabado', time: '09:30 - 10:30', title: 'Spinning Endurance', trainer: 'Diego Álvarez', category: 'cardio', room: 'Spin Studio' },
    { day: 'sabado', time: '11:00 - 12:00', title: 'Bootcamp & Calistenia', trainer: 'Camila Torres', category: 'hiit', room: 'Zona Funcional' },
    { day: 'sabado', time: '15:00 - 16:30', title: 'Open Gym & Asesoría', trainer: 'Staff IronForge', category: 'fuerza', room: 'Todas las áreas' }
  ],

  // 4. Planes de Membresía (Mensual y Anual con 20% descuento)
  plans: [
    {
      id: 'basico',
      name: 'Plan Básico',
      badge: 'Esencial',
      popular: false,
      monthlyPrice: 200,
      annualPrice: 160, // por mes facturado anualmente (1.920 Bs / año)
      description: 'Ideal para quienes inician y buscan acceso libre a zona de pesas y máquinas cardiovasculares.',
      features: [
        { text: 'Acceso ilimitado a Sala de Pesas y Máquinas', included: true },
        { text: 'Acceso a vestuarios y lockers', included: true },
        { text: 'App IronForge para registro de entrenamientos', included: true },
        { text: 'Clases grupales (Cross Training, Cycling)', included: false },
        { text: 'Evaluación antropométrica mensual', included: false },
        { text: 'Acceso a zona de Sauna & Spa', included: false },
        { text: 'Pase para un amigo 1 vez al mes', included: false }
      ]
    },
    {
      id: 'pro',
      name: 'Plan Pro',
      badge: 'Más Popular',
      popular: true,
      monthlyPrice: 350,
      annualPrice: 280, // por mes facturado anualmente (3.360 Bs / año)
      description: 'El plan definitivo para progresar rápido. Incluye todas las clases grupales guiadas.',
      features: [
        { text: 'Acceso ilimitado a Sala de Pesas y Máquinas', included: true },
        { text: 'Acceso a vestuarios y lockers premium', included: true },
        { text: 'App IronForge con planes de rutina', included: true },
        { text: 'Clases grupales ILIMITADAS (Cross, Spin, HIIT)', included: true },
        { text: '1 Evaluación antropométrica InBody por mes', included: true },
        { text: 'Acceso a zona de Sauna & Recuperación', included: false },
        { text: 'Pase para un amigo 1 vez al mes', included: true }
      ]
    },
    {
      id: 'elite',
      name: 'Plan Elite VIP',
      badge: 'Experiencia Total',
      popular: false,
      monthlyPrice: 550,
      annualPrice: 440, // por mes facturado anualmente (5.280 Bs / año)
      description: 'Acceso total sin restricciones, asesoría de nutrición deportiva y recuperación de alto rendimiento.',
      features: [
        { text: 'Acceso TOTAL a todas las instalaciones 24/7', included: true },
        { text: 'Locker privado con toalla incluida en cada visita', included: true },
        { text: 'App IronForge Pro con métricas avanzadas', included: true },
        { text: 'Clases grupales ilimitadas + Reserva prioritaria', included: true },
        { text: 'Evaluación y asesoría nutricional quincenal', included: true },
        { text: 'Zona de Recuperación (Sauna, Crioterapia)', included: true },
        { text: '2 Sesiones mensuales de Personal Training 1a1', included: true }
      ]
    }
  ],

  // 5. Testimonios
  testimonials: [
    {
      id: 1,
      name: 'Rodrigo Méndez',
      role: 'Socio hace 1 año • Perdió 14 kg',
      plan: 'Plan Pro',
      rating: 5,
      comment: 'Entrenar en IronForge cambió por completo mi estilo de vida. La vibra del lugar, la música y sobre todo los entrenadores te empujan a dar el 110%. Dejé de ver el gimnasio como una obligación y ahora es mi momento favorito del día.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Sofía Larrea',
      role: 'Atleta Amateur • Cross Training',
      plan: 'Plan Elite VIP',
      rating: 5,
      comment: 'Las instalaciones son de nivel olímpico. El box de cross training tiene barras Rogue, assault bikes y espacio real para levantar pesado. La comunidad es increíble, no hay egos, solo gente empujándose a superarse.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'Andrés Villagómez',
      role: 'Emprendedor • Ganó 8 kg de masa muscular',
      plan: 'Plan Pro',
      rating: 5,
      comment: 'Estuve en varios gimnasios donde pagabas y nadie te miraba. En IronForge desde el día 1 me armaron la rutina, corrigieron mi técnica en sentadillas y el seguimiento mensual con bioimpedancia me dio los mejores resultados de mi vida.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  ],

  // 6. Preguntas Frecuentes (FAQ)
  faqs: [
    {
      question: '¿Tienen costo de matrícula o inscripción?',
      answer: 'Actualmente contamos con una promoción especial: al inscribirte en plan Pro o Elite a través de la web, tu matrícula es 100% GRATIS.'
    },
    {
      question: '¿Puedo congelar mi membresía si viajo o por salud?',
      answer: 'Sí. Todos los planes permiten congelar tu membresía desde 7 hasta 30 días al año presentando tu aviso previo en recepción o por WhatsApp.'
    },
    {
      question: '¿Qué necesito llevar para mi primer día de entrenamiento?',
      answer: 'Ropa deportiva cómoda, calzado deportivo limpio, toalla de mano obligatoria para las máquinas y una botella de agua para hidratarte. Contamos con dispensadores de agua filtrada gratuitos.'
    },
    {
      question: '¿Es apto para principiantes que nunca han pisado un gimnasio?',
      answer: '¡Totalmente! Todos nuestros entrenadores están siempre en sala para guiarte en cada ejercicio y adaptar los movimientos a tu nivel inicial.'
    },
    {
      question: '¿Cuáles son los métodos de pago aceptados?',
      answer: 'Aceptamos transferencias bancarias en bolivianos (Bs.), tarjetas de crédito/débito (Visa, Mastercard), transferencias inmediatas por código QR y pagos en efectivo en recepción.'
    }
  ],

  // Estadísticas del Gimnasio
  stats: [
    { value: 1200, label: 'Socios Activos', suffix: '+' },
    { value: 15, label: 'Entrenadores Certificados', suffix: '+' },
    { value: 45, label: 'Clases Semanales', suffix: '+' },
    { value: 98, label: 'Satisfacción', suffix: '%' }
  ]
};
