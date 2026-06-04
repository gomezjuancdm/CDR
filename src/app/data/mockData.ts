export interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
  description: string;
  content: string;
}

export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  place: string;
  description: string;
}

export interface Document {
  id: number;
  title: string;
  category: string;
  description: string;
  url: string;
}

export interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Inicio del Año Escolar 2026",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    date: "2026-01-15",
    description: "Bienvenida a todos los estudiantes y familias para el nuevo año académico.",
    content: "El Colegio C.D.R. les da la bienvenida al año escolar 2026. Estamos comprometidos con brindar educación de calidad y formar ciudadanos íntegros."
  },
  {
    id: 2,
    title: "Jornada de Limpieza Ambiental",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    date: "2026-03-20",
    description: "Estudiantes participan en actividad de conservación ambiental en el Guaviare.",
    content: "Nuestra comunidad educativa participó activamente en la jornada de limpieza del entorno natural, reafirmando nuestro compromiso con el medio ambiente."
  },
  {
    id: 3,
    title: "Reconocimiento a Mejores Estudiantes",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    date: "2026-04-10",
    description: "Ceremonia de premiación a estudiantes destacados del primer periodo.",
    content: "Felicitamos a nuestros estudiantes que han demostrado excelencia académica y valores durante el primer periodo académico."
  }
];

export const eventsData: Event[] = [
  {
    id: 1,
    name: "Reunión de Padres de Familia",
    date: "2026-06-15",
    time: "8:00 AM",
    place: "Auditorio Principal",
    description: "Reunión informativa sobre el avance académico del segundo periodo."
  },
  {
    id: 2,
    name: "Festival Cultural y Deportivo",
    date: "2026-07-20",
    time: "9:00 AM",
    place: "Canchas Deportivas",
    description: "Celebración del día del colegio con actividades culturales, deportivas y recreativas."
  },
  {
    id: 3,
    name: "Feria de la Ciencia",
    date: "2026-08-10",
    time: "2:00 PM",
    place: "Salones de Clase",
    description: "Exposición de proyectos científicos realizados por los estudiantes de todos los grados."
  },
  {
    id: 4,
    name: "Ceremonia de Graduación",
    date: "2026-11-25",
    time: "6:00 PM",
    place: "Auditorio Municipal",
    description: "Grado de estudiantes de Undécimo grado, promoción 2026."
  }
];

export const documentsData: Document[] = [
  {
    id: 1,
    title: "Manual de Convivencia 2026",
    category: "Reglamentos",
    description: "Normas y lineamientos para la convivencia escolar.",
    url: "#"
  },
  {
    id: 2,
    title: "Calendario Académico 2026",
    category: "Académico",
    description: "Fechas importantes del año escolar.",
    url: "#"
  },
  {
    id: 3,
    title: "PEI - Proyecto Educativo Institucional",
    category: "Institucional",
    description: "Documento rector de la institución educativa.",
    url: "#"
  },
  {
    id: 4,
    title: "Sistema Institucional de Evaluación",
    category: "Académico",
    description: "Criterios y procedimientos de evaluación de estudiantes.",
    url: "#"
  },
  {
    id: 5,
    title: "Requisitos de Matrícula",
    category: "Trámites",
    description: "Documentos necesarios para el proceso de matrícula.",
    url: "#"
  }
];

export const announcementsData: Announcement[] = [
  {
    id: 1,
    title: "Matrícula Abierta 2026",
    content: "Están abiertas las matrículas para el año escolar 2026. Consulta los requisitos en la sección de Documentos y Trámites.",
    date: "2026-06-01",
    priority: 'high'
  },
  {
    id: 2,
    title: "Horario de Atención al Público",
    content: "Lunes a Viernes: 7:00 AM - 3:00 PM. Favor presentarse con documento de identidad.",
    date: "2026-05-15",
    priority: 'medium'
  },
  {
    id: 3,
    title: "Actualización de Datos",
    content: "Recordamos a los padres actualizar los datos de contacto en secretaría.",
    date: "2026-05-01",
    priority: 'low'
  }
];

export const contactMessagesData: ContactMessage[] = [
  {
    id: 1,
    name: "María González",
    email: "maria.gonzalez@email.com",
    subject: "Consulta sobre matrícula",
    message: "Buenos días, quisiera información sobre el proceso de matrícula para mi hijo.",
    date: "2026-05-28",
    read: false
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    email: "carlos.ramirez@email.com",
    subject: "Solicitud de certificado",
    message: "Necesito un certificado de estudio de mi hija que cursó 9° grado el año pasado.",
    date: "2026-05-27",
    read: true
  }
];

export const collegeInfo = {
  name: "Colegio C.D.R.",
  fullName: "Colegio Departamental Rural",
  municipality: "San José del Guaviare",
  department: "Guaviare",
  country: "Colombia",
  phone: "+57 (098) 584-XXXX",
  email: "colegio.cdr@guaviare.edu.co",
  address: "Vereda El Raudal, San José del Guaviare",
  schedule: "Lunes a Viernes: 7:00 AM - 3:00 PM",
  location: {
    lat: 2.5649,
    lng: -72.6388
  },
  mission: "Formar personas íntegras, competentes y comprometidas con el desarrollo sostenible de su región, a través de una educación de calidad que promueva los valores, el respeto por la naturaleza y la construcción de una sociedad más justa y equitativa.",
  vision: "Para el año 2030, ser reconocidos como la institución educativa líder en la región del Guaviare, caracterizada por la excelencia académica, la innovación pedagógica y el compromiso con la preservación ambiental y el desarrollo comunitario.",
  history: "El Colegio Departamental Rural de San José del Guaviare fue fundado en 1985 con el objetivo de brindar educación de calidad a las comunidades rurales de la región. A lo largo de más de 40 años, hemos formado a miles de estudiantes que hoy contribuyen al desarrollo de nuestro departamento y del país.",
  rector: {
    name: "Dr. Luis Alberto Mendoza",
    title: "Rector",
    message: "Es un honor dar la bienvenida a nuestra comunidad educativa. En el Colegio C.D.R. estamos comprometidos con la formación integral de nuestros estudiantes, brindándoles las herramientas necesarias para enfrentar los retos del futuro.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
  },
  educationLevels: [
    "Preescolar",
    "Básica Primaria (1° a 5°)",
    "Básica Secundaria (6° a 9°)",
    "Media Académica (10° y 11°)"
  ]
};
