import {
  AnnouncementItem,
  ContactMessage,
  DocumentItem,
  EventItem,
  NewsItem,
} from "../types/admin";

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Inicio del Año Escolar 2026",
    image:
      "https://marandua.com.co/wp-content/uploads/2020/01/FACHADA-COLEGIO-CDR.jpeg",
    date: "2026-01-15",
    description:
      "Bienvenida a todos los estudiantes y familias para el nuevo año académico.",
    content:
      "El Colegio C.D.R. les da la bienvenida al año escolar 2026. Estamos comprometidos con brindar educación de calidad y formar ciudadanos íntegros.",
  },
  {
    id: 2,
    title: "Juegos intramorales 2025",
    image:
      "https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/526353409_122164070750470788_3075890120033551013_n.jpg?stp=dst-jpg_tt6&cstp=mx1020x762&ctp=s1020x762&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=q7_3VxwDy4oQ7kNvwF4CWeQ&_nc_oc=AdoxQNbCNFG94sF4XPdBUeCcBGWaWlz0YDHoVrwCPafofygZFjN5jwY3He9J8TC2Eck&_nc_zt=23&_nc_ht=scontent.fbog14-1.fna&_nc_gid=FovMZrbmbTW-2OIrWLQb1A&_nc_ss=7b289&oh=00_AQC1rzUeELFACKk1UTZgsdMXey1eMfBojtQd3Ql22114lw&oe=6A5F2816",
    date: "03/08/2025",
    description:
      "Estudiantes participan en actividades deportivas en su institucion edicativa en el Guaviare.",
    content:
      "Nuestra comunidad educativa participó activamente durante una semana en actividades recreactivas, mejorando la comunicacion entre los estudiantes mediante el deporte.",

  },
  {
    id: 3,
    title: "Reconocimiento a Mejores promedios del ICFES",
    image:
      "",
    date: "2026-04-10",
    description:
      "Ceremonia de premiación a estudiantes destacados por su puntaje en la prueba ICFES.",
    content:
      "Felicitamos a nuestros estudiantes que han demostrado excelencia académica y valores durante su estancia en la institucion.",
  },
];

export const eventsData: EventItem[] = [
  {
    id: 1,
    name: "Reunión de Padres de Familia",
    date: "2026-06-15",
    time: "8:00 AM",
    place: "Auditorio Principal",
    description:
      "Reunión informativa sobre el avance académico del segundo periodo.",
  },
  {
    id: 2,
    name: "Festival Cultural y Deportivo",
    date: "2026-07-20",
    time: "9:00 AM",
    place: "Canchas Deportivas",
    description:
      "Celebración del día del colegio con actividades culturales, deportivas y recreativas.",
  },
  {
    id: 3,
    name: "Feria de la Ciencia",
    date: "2026-08-10",
    time: "2:00 PM",
    place: "Salones de Clase",
    description:
      "Exposición de proyectos científicos realizados por los estudiantes de todos los grados.",
  },
  {
    id: 4,
    name: "Ceremonia de Graduación",
    date: "2026-11-25",
    time: "6:00 PM",
    place: "Auditorio Municipal",
    description: "Grado de estudiantes de Undécimo grado, promoción 2026.",
  },
];

export const documentsData: DocumentItem[] = [
  {
    id: 1,
    title: "Manual de Convivencia 2026",
    category: "Reglamentos",
    description: "Normas y lineamientos para la convivencia escolar.",
    url: "#",
  },
  {
    id: 2,
    title: "Calendario Académico 2026",
    category: "Académico",
    description: "Fechas importantes del año escolar.",
    url: "#",
  },
  {
    id: 3,
    title: "PEI - Proyecto Educativo Institucional",
    category: "Institucional",
    description: "Documento rector de la institución educativa.",
    url: "#",
  },
  {
    id: 4,
    title: "Sistema Institucional de Evaluación",
    category: "Académico",
    description: "Criterios y procedimientos de evaluación de estudiantes.",
    url: "#",
  },
  {
    id: 5,
    title: "Requisitos de Matrícula",
    category: "Trámites",
    description: "Documentos necesarios para el proceso de matrícula.",
    url: "#",
  },
];

export const announcementsData: AnnouncementItem[] = [
  {
    id: 1,
    title: "Matrícula Abierta 2026",
    content:
      "Están abiertas las matrículas para el año escolar 2026. Consulta los requisitos en la sección de Documentos y Trámites.",
    date: "2026-06-01",
    priority: "high",
  },
  {
    id: 2,
    title: "Horario de Atención al Público",
    content:
      "Lunes a Viernes: 7:00 AM - 3:00 PM. Favor presentarse con documento de identidad.",
    date: "2026-05-15",
    priority: "medium",
  },
  {
    id: 3,
    title: "Actualización de Datos",
    content:
      "Recordamos a los padres actualizar los datos de contacto en secretaría.",
    date: "2026-05-01",
    priority: "low",
  },
];

export const contactMessagesData: ContactMessage[] = [
  {
    id: 1,
    name: "María González",
    email: "maria.gonzalez@email.com",
    subject: "Consulta sobre matrícula",
    message:
      "Buenos días, quisiera información sobre el proceso de matrícula para mi hijo.",
    date: "2026-05-28",
    read: false,
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    email: "carlos.ramirez@email.com",
    subject: "Solicitud de certificado",
    message:
      "Necesito un certificado de estudio de mi hija que cursó 9° grado el año pasado.",
    date: "2026-05-27",
    read: true,
  },
];

export interface ConnectedUser {
  id: number;
  name: string;
  email: string;
  role: "Administrador" | "Docente" | "Estudiante";
  avatar: string;
  connectionTime: string;
  status: "online" | "idle" | "offline";
}

export const connectedUsersData: ConnectedUser[] = [
  {
    id: 1,
    name: "Juan Carlos López",
    email: "juan.lopez@cdr.edu.co",
    role: "Administrador",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=juan",
    connectionTime: "08:30 AM",
    status: "online",
  },
  {
    id: 2,
    name: "Ana María García",
    email: "ana.garcia@cdr.edu.co",
    role: "Docente",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana",
    connectionTime: "08:45 AM",
    status: "online",
  },
  {
    id: 3,
    name: "Miguel Rodríguez",
    email: "miguel.rodriguez@cdr.edu.co",
    role: "Docente",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=miguel",
    connectionTime: "09:00 AM",
    status: "online",
  },
  {
    id: 4,
    name: "Laura Fernández",
    email: "laura.fernandez@cdr.edu.co",
    role: "Administrador",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=laura",
    connectionTime: "09:15 AM",
    status: "online",
  },
  {
    id: 5,
    name: "Pablo Martínez",
    email: "pablo.martinez@cdr.edu.co",
    role: "Estudiante",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pablo",
    connectionTime: "09:30 AM",
    status: "idle",
  },
];
