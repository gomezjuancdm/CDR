# Sistema de Base de Datos - Institución Educativa C.D.R.

## 📋 Descripción General

El sistema de base de datos optimizado de la aplicación C.D.R. proporciona una gestión eficiente de datos con almacenamiento local y funciones CRUD completas.

## 🏗️ Arquitectura

### Componentes Principales

1. **`db.ts`** - Núcleo de la base de datos
   - Gestión de datos en localStorage
   - Operaciones CRUD
   - Búsquedas y filtros
   - Estadísticas

2. **`useData.ts`** - Hook React personalizado
   - Acceso fácil a datos desde componentes
   - Sincronización automática
   - Manejo de errores

3. **`dataInitializer.ts`** - Servicio de inicialización
   - Carga datos mockup la primera vez
   - Exportación/Importación de datos
   - Respaldo y recuperación

4. **`DatabaseManager.tsx`** - Panel de administración
   - Visualización de estadísticas
   - Exportar/Importar datos
   - Restablecer a valores iniciales

## 📊 Estructura de Datos

```typescript
DatabaseSchema {
  news: NewsItem[]           // Noticias publicadas
  events: Event[]            // Eventos escolares
  documents: Document[]      // Documentos institucionales
  announcements: Announcement[]  // Avisos importantes
  messages: ContactMessage[] // Mensajes de contacto
  users: ConnectedUser[]     // Usuarios conectados
}
```

## 🚀 Uso

### Inicializar la aplicación

```typescript
import { initializeDatabase } from "@/services/dataInitializer";

initializeDatabase(); // Se ejecuta automáticamente en main.tsx
```

### Usar el hook useData

```typescript
import { useData } from "@/hooks/useData";

function MyComponent() {
  const { data, loading, error, add, update, delete: remove, refetch } = useData("news");

  return (
    // Tu componente aquí
  );
}
```

### Acceder a la base de datos directamente

```typescript
import { getDatabase, addItem, updateItem, deleteItem } from "@/database/db";

// Obtener toda la base de datos
const db = getDatabase();

// Agregar un nuevo item
addItem("news", { title: "Noticia nueva", ... });

// Actualizar un item
updateItem("news", 1, { title: "Noticia actualizada" });

// Eliminar un item
deleteItem("news", 1);
```

### Exportar/Importar datos

```typescript
import { 
  exportDatabase, 
  importDatabase, 
  resetDatabaseToMockup 
} from "@/services/dataInitializer";

// Exportar
const json = exportDatabase();

// Importar
const success = importDatabase(jsonString);

// Restablecer
resetDatabaseToMockup();
```

## 📈 Operaciones Disponibles

### Base de datos (`db.ts`)

- `getDatabase()` - Obtiene la base de datos completa
- `saveDatabase(db)` - Guarda cambios en localStorage
- `getDataByType(type)` - Obtiene datos por tipo
- `addItem(type, item)` - Agrega un nuevo item
- `updateItem(type, id, updates)` - Actualiza un item
- `deleteItem(type, id)` - Elimina un item
- `getItemById(type, id)` - Obtiene un item por ID
- `searchItems(type, predicate)` - Busca items
- `getStatistics()` - Obtiene estadísticas

### Hook (`useData.ts`)

```typescript
interface UseDataReturn<T> {
  data: T[]                              // Array de items
  loading: boolean                       // Estado de carga
  error: null | string                   // Mensaje de error
  refetch: () => void                    // Recarga datos
  add: (item: Omit<T, "id">) => void    // Agregar
  update: (id: number, updates: Partial<T>) => void  // Actualizar
  delete: (id: number) => void           // Eliminar
  getById: (id: number) => T | undefined // Obtener por ID
  search: (predicate: (item: T) => boolean) => T[]   // Buscar
}
```

## 🔧 Panel de Administración

Accede a `/admin/database` para:

- **Ver estadísticas**: Total de noticias, eventos, documentos, etc.
- **Tamaño de BD**: Espacio ocupado en KB
- **Exportar**: Descargar base de datos como JSON
- **Importar**: Cargar datos desde un archivo JSON
- **Restablecer**: Volver a datos iniciales

## ⚠️ Consideraciones Importantes

1. **Almacenamiento local**: Los datos se guardan en el navegador (localStorage)
2. **Limitaciones**: máximo ~5-10MB por dominio (varía según navegador)
3. **Privacidad**: Los datos no se envían a ningún servidor
4. **Respaldos**: Se recomienda exportar datos regularmente
5. **Limpieza**: Si se limpia el caché del navegador, se pierden los datos

## 🔐 Seguridad

- ✅ Las credenciales de admin ya han sido configuradas
- ✅ El panel es accesible solo después de autenticarse
- ✅ Los datos se almacenan de forma segura en localStorage
- ⚠️ Para producción, considera implementar un backend real

## 📝 Ejemplo Completo

```typescript
import { useData } from "@/hooks/useData";
import { Button } from "@/components/ui/button";

export function NewsManager() {
  const { data: noticias, add, update, delete: remove, loading } = useData("news");

  const handleAddNews = () => {
    add({
      title: "Nueva noticia",
      description: "Descripción",
      content: "Contenido completo",
      image: "https://...",
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleUpdateNews = (id: number) => {
    update(id, { title: "Título actualizado" });
  };

  const handleDeleteNews = (id: number) => {
    remove(id);
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      <Button onClick={handleAddNews}>Agregar Noticia</Button>
      {noticias.map(noticia => (
        <div key={noticia.id}>
          <h3>{noticia.title}</h3>
          <button onClick={() => handleUpdateNews(noticia.id)}>Editar</button>
          <button onClick={() => handleDeleteNews(noticia.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
```

## 🆘 Solución de Problemas

**P: ¿Dónde se almacenan los datos?**  
R: En el localStorage del navegador. Accede a DevTools → Application → Local Storage

**P: ¿Los datos se pierden si cierro el navegador?**  
R: No, se guardan permanentemente en localStorage (hasta que se limpie)

**P: ¿Puedo usar esto en producción?**  
R: Para aplicaciones pequeñas sí, pero se recomienda un backend para aplicaciones grandes

**P: ¿Cómo respaldar los datos?**  
R: Usa el panel de Base de Datos para exportar como JSON

---

**Última actualización:** 2026-07-06  
**Versión:** 1.0.0
