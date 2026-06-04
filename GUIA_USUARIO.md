# 📘 Guía de Usuario - Colegio C.D.R.

## 🌐 Sitio Público

### 🏠 Página de Inicio (`/`)

La página principal incluye:
- **Banner institucional** con nombre del colegio y ubicación
- **Avisos importantes** destacados en color verde
- **Tarjetas de acceso rápido** a las principales secciones
- **Últimas noticias** con imágenes y enlaces
- **Estadísticas** del colegio (años de experiencia, estudiantes, niveles)

### 👥 Quiénes Somos (`/about`)

Información institucional:
- Historia del colegio desde 1985
- Misión y Visión institucional
- Niveles educativos ofrecidos (Preescolar a Media)
- Mensaje del Rector con foto
- Información de contacto

### 📰 Noticias y Eventos (`/news`)

Sistema de pestañas con:
- **Tab Noticias**: Artículos con imagen, fecha y descripción completa
- **Tab Eventos**: Calendario de actividades con fecha, hora y lugar

### 📄 Documentos y Trámites (`/documents`)

- **Información de Matrícula**: Requisitos y fechas importantes
- **Buscador de documentos** con filtro por categoría
- **Documentos disponibles**: Manual de Convivencia, PEI, Calendario Académico, etc.
- **Botón de descarga** para cada documento (PDF)

### 📧 Contacto (`/contact`)

- **Formulario de contacto** con validación
- **Información institucional**: Dirección, teléfono, email, horarios
- **Mapa de Google Maps** con ubicación del colegio
- Notificación al enviar mensaje

## 🔐 Panel Administrativo

### 🔑 Acceso (`/admin`)

**Credenciales de demostración:**
```
Usuario: admin
Contraseña: admin123
```

Características:
- Validación de credenciales
- Mensaje de error si los datos son incorrectos
- Redirección automática al Dashboard tras login exitoso
- Opción de "¿Olvidaste tu contraseña?"

### 📊 Dashboard (`/admin/dashboard`)

Vista principal del administrador con:

**Estadísticas principales:**
- Número total de noticias
- Número total de eventos
- Número total de documentos
- Mensajes sin leer (resaltados en rojo)

**Menú de gestión:**
- Gestión de Noticias
- Gestión de Eventos
- Gestión de Documentos
- Gestión de Avisos
- Mensajes de Contacto

**Widgets informativos:**
- Avisos activos con nivel de prioridad
- Mensajes recientes con estado de lectura

**Navegación:**
- Botón "Ver Sitio" para volver al sitio público
- Botón "Salir" para cerrar sesión

### 📝 Gestión de Noticias (`/admin/news`)

Funcionalidades:
- **Tabla completa** con todas las noticias
- Columnas: Imagen, Título, Fecha, Estado, Acciones
- **Botones de acción**: Ver, Editar, Eliminar
- **Botón "Nueva Noticia"** para agregar contenido
- Estados visuales (Publicado/Borrador)

### 📅 Gestión de Eventos (`/admin/events`)

- Crear nuevos eventos
- Editar eventos existentes
- Eliminar eventos
- Vista de calendario

### 📁 Gestión de Documentos (`/admin/documents`)

- Subir nuevos documentos PDF
- Organizar por categorías
- Editar información de documentos
- Eliminar documentos

### 🔔 Gestión de Avisos (`/admin/announcements`)

- Crear avisos importantes
- Establecer prioridad (Alta/Media/Baja)
- Editar y eliminar avisos
- Los avisos de prioridad alta aparecen en la página de inicio

### 💬 Mensajes de Contacto (`/admin/messages`)

Sistema de bandeja de entrada:

**Panel izquierdo:**
- Lista de mensajes recibidos
- Indicador visual de mensajes no leídos
- Fecha de recepción
- Vista previa del contenido

**Panel derecho:**
- Contenido completo del mensaje seleccionado
- Información del remitente (nombre, email)
- Botón para responder
- Botón para eliminar mensaje

**Características:**
- Marcar automáticamente como leído al abrir
- Contador de mensajes sin leer
- Diseño tipo email client

## 🎨 Características de Diseño

### Colores Institucionales
- **Verde oscuro** (#2d5016): Color principal
- **Azul oscuro** (#1e3a8a): Color secundario
- **Verde claro** (#10b981): Color de acento

### Elementos Visuales
- ✨ Animaciones suaves al cargar contenido
- 📱 Diseño responsive para todos los dispositivos
- 🔼 Botón flotante "Volver arriba" (aparece al hacer scroll)
- 🎯 Efectos hover en botones y tarjetas
- 🌊 Navegación sticky (se mantiene visible al hacer scroll)

## 🚀 Navegación Rápida

### Menú Principal (Sitio Público)
```
Inicio → Quiénes Somos → Noticias → Documentos → Contacto → Admin
```

### Menú Administrativo
```
Dashboard → Noticias → Eventos → Documentos → Avisos → Mensajes
```

## 📱 Menú Móvil

En dispositivos móviles:
- Icono de hamburguesa (☰) en la esquina superior derecha
- Menú desplegable con todas las opciones
- Cierre automático al seleccionar una opción

## 🔒 Seguridad

- Rutas administrativas protegidas
- Redirección automática al login si no está autenticado
- Sesión guardada en localStorage (para demostración)
- Cierre de sesión con confirmación

## 💡 Consejos de Uso

1. **Noticias**: Las imágenes son importantes, usar fotos de alta calidad
2. **Eventos**: Incluir toda la información (fecha, hora, lugar)
3. **Documentos**: Categorizar correctamente para facilitar búsqueda
4. **Avisos prioritarios**: Solo para información urgente
5. **Mensajes**: Revisar regularmente la bandeja de entrada

## 🎯 Próximos Pasos Sugeridos

Para poner el sitio en producción:

1. **Conectar base de datos** (Supabase, Firebase, etc.)
2. **Sistema de autenticación real** (JWT, OAuth)
3. **Upload de imágenes** para noticias y eventos
4. **Editor de texto enriquecido** (Quill, TinyMCE)
5. **Sistema de emails** para formulario de contacto
6. **Backup automático** de contenido
7. **Analytics** para seguimiento de visitas
8. **SEO optimization** para mejor posicionamiento

---

**Desarrollado con ❤️ para el Colegio C.D.R.**
