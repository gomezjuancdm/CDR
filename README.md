# Sitio Web Institucional - Colegio C.D.R.

Sitio web oficial del Colegio Departamental Rural de San José del Guaviare, Colombia.

## 🚀 Tecnologías

- React 18.3.1
- TypeScript
- React Router DOM 7.16
- Tailwind CSS 4
- Motion (Framer Motion) para animaciones
- Lucide React para iconos
- Sonner para notificaciones

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── ProtectedRoute.tsx
│   ├── data/               # Datos mock
│   │   └── mockData.ts
│   ├── pages/              # Páginas del sitio
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── News.tsx
│   │   ├── Documents.tsx
│   │   ├── Contact.tsx
│   │   └── admin/          # Panel administrativo
│   │       ├── Login.tsx
│   │       ├── Dashboard.tsx
│   │       ├── ManageNews.tsx
│   │       ├── ManageEvents.tsx
│   │       ├── ManageDocuments.tsx
│   │       ├── ManageAnnouncements.tsx
│   │       └── ManageMessages.tsx
│   └── App.tsx
└── styles/
    ├── theme.css           # Variables de tema personalizadas
    └── fonts.css
```

## 🎨 Características

### Sitio Público

1. **Inicio**: Página principal con banner, avisos importantes, enlaces rápidos y noticias destacadas
2. **Quiénes Somos**: Historia, misión, visión, niveles educativos y mensaje del rector
3. **Noticias y Eventos**: Sistema de tabs para ver noticias publicadas y calendario de eventos
4. **Documentos y Trámites**: Información de matrícula, búsqueda y descarga de documentos
5. **Contacto**: Formulario de contacto, información institucional y mapa de ubicación

### Panel Administrativo

1. **Login**: Sistema de autenticación (Demo: usuario `admin` / contraseña `admin123`)
2. **Dashboard**: Vista general con estadísticas y acceso rápido a módulos de gestión
3. **Gestión de Noticias**: CRUD de noticias institucionales
4. **Gestión de Eventos**: Administración del calendario de eventos
5. **Gestión de Documentos**: Carga y administración de archivos PDF
6. **Gestión de Avisos**: Administración de avisos importantes
7. **Mensajes de Contacto**: Bandeja de entrada de mensajes del formulario de contacto

## 🎨 Paleta de Colores Institucional

- **Primary (Verde)**: `#2d5016` - Color principal del colegio
- **Secondary (Azul Oscuro)**: `#1e3a8a` - Color secundario
- **Accent (Verde Claro)**: `#10b981` - Color de acento

## 🔐 Acceso Administrativo

**Credenciales de demostración:**
- Usuario: `admin`
- Contraseña: `admin123`

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktop (1280px+)

## 🚀 Desarrollo Futuro

El sitio está preparado para integración con backend:

### Sugerencias para Producción

1. **Base de datos**: Conectar con Supabase, Firebase o backend personalizado
2. **Autenticación**: Implementar sistema de autenticación robusto
3. **Carga de imágenes**: Sistema de upload de imágenes para noticias y eventos
4. **Editor de contenido**: Integrar editor WYSIWYG para noticias
5. **Envío de emails**: Notificaciones automáticas de formulario de contacto
6. **Analytics**: Integrar Google Analytics o similar
7. **SEO**: Optimizar metadatos para buscadores
8. **Performance**: Optimización de imágenes con Next.js Image o similar

## 📝 Notas de Implementación

- Las imágenes actuales provienen de Unsplash
- Los datos son mock y están en `src/app/data/mockData.ts`
- El sistema de autenticación usa localStorage (solo para demo)
- Los formularios muestran notificaciones pero no envían datos reales

## 🛠️ Personalización

Para personalizar colores y estilos, editar:
- `src/styles/theme.css` - Variables de color y tema
- `src/app/data/mockData.ts` - Información institucional y contenido

## ✨ Características Técnicas

- ✅ Animaciones suaves con Motion
- ✅ Navegación con React Router
- ✅ Notificaciones toast con Sonner
- ✅ Diseño moderno con Tailwind CSS v4
- ✅ Iconos con Lucide React
- ✅ Componentes reutilizables
- ✅ TypeScript para type safety
- ✅ Botón de scroll to top
- ✅ Rutas protegidas para admin
