# 📋 Notas Técnicas - Colegio C.D.R.

## 🏗️ Arquitectura del Proyecto

### Estructura de Componentes

```
App.tsx (Router principal)
├── Layout (Páginas públicas)
│   ├── Navigation
│   ├── Outlet (Contenido de cada página)
│   ├── Footer
│   └── ScrollToTop
│
├── Login (Página de admin sin layout)
│
└── ProtectedRoute (Páginas admin protegidas)
    └── Páginas administrativas
```

### Flujo de Navegación

1. **Sitio Público**: Layout envuelve todas las páginas públicas
2. **Login**: Página standalone sin header/footer
3. **Panel Admin**: Páginas protegidas con su propia navegación

## 🎨 Sistema de Diseño

### Colores Personalizados (theme.css)

```css
--primary: #2d5016       /* Verde institucional */
--secondary: #1e3a8a     /* Azul oscuro */
--accent: #10b981        /* Verde claro */
--destructive: #dc2626   /* Rojo para alertas */
```

### Tailwind CSS v4

- Utiliza CSS custom properties
- Variables definidas en `theme.css`
- Preflight incluido automáticamente
- Clases utility disponibles

## 📊 Gestión de Estado

### Autenticación
```typescript
// localStorage simple para demo
localStorage.setItem('isAuthenticated', 'true')
localStorage.getItem('isAuthenticated')
localStorage.removeItem('isAuthenticated')
```

**Para producción, reemplazar con:**
- JWT tokens
- Refresh tokens
- Context API o Zustand
- Cookies httpOnly

### Datos Mock

Ubicación: `src/app/data/mockData.ts`

Interfaces TypeScript:
- `NewsItem` - Noticias
- `Event` - Eventos
- `Document` - Documentos
- `Announcement` - Avisos
- `ContactMessage` - Mensajes de contacto

**Para producción:**
- Reemplazar con API calls
- Usar React Query o SWR
- Implementar cache strategies

## 🔐 Rutas Protegidas

```typescript
// ProtectedRoute.tsx
const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

if (!isAuthenticated) {
  return <Navigate to="/admin" replace />;
}
```

**Mejoras sugeridas:**
- Verificar token en servidor
- Implementar refresh token
- Manejar expiración de sesión
- Agregar roles de usuario

## 🚀 Optimizaciones Pendientes

### Imágenes

**Estado actual:**
- Imágenes de Unsplash vía URL directa
- Sin lazy loading explícito
- Sin optimización de tamaño

**Mejoras:**
```typescript
// Usar lazy loading
<img loading="lazy" ... />

// Implementar srcset para responsive
<img 
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w"
  sizes="(max-width: 600px) 400px, 800px"
/>

// Considerar Next.js Image o similar
```

### Rendimiento

**Code Splitting:**
```typescript
// Lazy load de páginas
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

// Wrap en Suspense
<Suspense fallback={<Loading />}>
  <Routes>...</Routes>
</Suspense>
```

**Bundle size:**
- Analizar con `pnpm build` y bundle analyzer
- Considerar tree-shaking
- Eliminar dependencias no usadas

### SEO

**Meta tags dinámicos:**
```typescript
// Usar react-helmet-async
<Helmet>
  <title>{pageTitle} - Colegio C.D.R.</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:title" content={pageTitle} />
</Helmet>
```

## 📱 Responsive Breakpoints

Tailwind CSS defaults:
```
sm: 640px   // Tablets pequeñas
md: 768px   // Tablets
lg: 1024px  // Laptops
xl: 1280px  // Desktop
```

## 🔄 Integración Backend

### Endpoints Sugeridos

```typescript
// API Structure
/api/v1/
  ├── /news
  │   ├── GET    /         (listar)
  │   ├── GET    /:id      (obtener)
  │   ├── POST   /         (crear)
  │   ├── PUT    /:id      (actualizar)
  │   └── DELETE /:id      (eliminar)
  │
  ├── /events (igual estructura)
  ├── /documents (igual estructura)
  ├── /announcements (igual estructura)
  ├── /messages
  │   ├── GET    /         (listar)
  │   ├── POST   /         (crear desde contacto)
  │   └── PATCH  /:id/read (marcar como leído)
  │
  └── /auth
      ├── POST /login
      ├── POST /logout
      └── POST /refresh
```

### Ejemplo de Service

```typescript
// services/newsService.ts
export const newsService = {
  getAll: async () => {
    const response = await fetch('/api/v1/news');
    return response.json();
  },
  
  getById: async (id: number) => {
    const response = await fetch(`/api/v1/news/${id}`);
    return response.json();
  },
  
  create: async (data: NewsItem) => {
    const response = await fetch('/api/v1/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};
```

## 📦 Dependencias Clave

```json
{
  "react-router-dom": "^7.16.0",  // Navegación
  "motion": "^12.23.24",          // Animaciones
  "sonner": "^2.0.3",             // Toasts
  "lucide-react": "^0.487.0",     // Iconos
  "@mui/material": "^7.3.5"       // Componentes UI
}
```

## 🧪 Testing (Por implementar)

### Sugerencias:

```bash
pnpm add -D vitest @testing-library/react @testing-library/jest-dom
```

**Tests recomendados:**
- Navegación entre rutas
- Formularios (validación)
- Autenticación (login/logout)
- Renderizado de componentes
- Integración de API

## 🔧 Scripts Útiles

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "type-check": "tsc --noEmit"
  }
}
```

## 📝 Convenciones de Código

### Naming:
- Componentes: PascalCase (`Navigation.tsx`)
- Funciones: camelCase (`handleSubmit`)
- Constantes: UPPER_CASE (`API_URL`)
- Archivos: kebab-case para páginas, PascalCase para componentes

### Estructura de Componentes:
```typescript
// 1. Imports
import { useState } from 'react';
import { Component } from './component';

// 2. Types/Interfaces
interface Props {
  title: string;
}

// 3. Component
export default function MyComponent({ title }: Props) {
  // 3.1 Hooks
  const [state, setState] = useState();
  
  // 3.2 Handlers
  const handleClick = () => {};
  
  // 3.3 Render
  return <div>...</div>;
}
```

## 🚨 Errores Comunes

### 1. Router debe envolver toda la app
```typescript
// ❌ Incorrecto
<Layout>
  <Router>...</Router>
</Layout>

// ✅ Correcto
<Router>
  <Layout>...</Layout>
</Router>
```

### 2. Rutas protegidas sin Navigate
```typescript
// ❌ Sin redirección
if (!auth) return null;

// ✅ Con redirección
if (!auth) return <Navigate to="/admin" />;
```

### 3. Olvidar key en listas
```typescript
// ❌ Sin key
{items.map(item => <div>{item.name}</div>)}

// ✅ Con key única
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

## 🎯 Próximas Mejoras Sugeridas

1. **Editor WYSIWYG** para noticias (TinyMCE, Quill)
2. **Upload de imágenes** con preview y crop
3. **Búsqueda global** en el sitio
4. **Paginación** para noticias y eventos
5. **Categorías** para noticias
6. **Roles de usuario** (Admin, Editor, Viewer)
7. **Logs de auditoría** (quién modificó qué)
8. **Versioning** de documentos
9. **Notificaciones push** para nuevos mensajes
10. **Export a PDF** de reportes

## 📚 Recursos Adicionales

- [React Router v6 Docs](https://reactrouter.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion (Framer Motion)](https://motion.dev/)
- [Sonner Toast](https://sonner.emilkowal.ski/)
- [Lucide Icons](https://lucide.dev/)

---

**Última actualización:** 2026-06-01
