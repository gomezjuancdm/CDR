/**
 * Sistema de Base de Datos Local Optimizado
 * Gestiona datos con persistencia en localStorage
 */

import {
  NewsItem,
  Event,
  Document,
  Announcement,
  ContactMessage,
  ConnectedUser,
} from "../types";

type DataType = "news" | "events" | "documents" | "announcements" | "messages" | "users";

interface DatabaseSchema {
  news: NewsItem[];
  events: Event[];
  documents: Document[];
  announcements: Announcement[];
  messages: ContactMessage[];
  users: ConnectedUser[];
}

const DB_KEY = "CDR_DATABASE";

/** Obtiene la BD completa */
export function getDatabase(): DatabaseSchema {
  try {
    const stored = localStorage.getItem(DB_KEY);
    return stored ? JSON.parse(stored) : getDefaultDatabase();
  } catch {
    return getDefaultDatabase();
  }
}

/** Guarda la BD */
export function saveDatabase(db: DatabaseSchema): void {
  try {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  } catch (error) {
    console.error("Error guardando BD:", error);
  }
}

/** Obtiene datos por tipo */
export function getDataByType<T extends DataType>(type: T): DatabaseSchema[T] {
  return getDatabase()[type];
}

/** Agrega un nuevo item */
export function addItem<T extends DataType>(
  type: T,
  item: any
): void {
  const db = getDatabase();
  const collection = db[type] as any[];
  const maxId = Math.max(...collection.map(i => i.id || 0), 0);
  collection.push({ ...item, id: maxId + 1 });
  saveDatabase(db);
}

/** Actualiza un item */
export function updateItem<T extends DataType>(
  type: T,
  id: number,
  updates: any
): void {
  const db = getDatabase();
  const collection = db[type] as any[];
  const index = collection.findIndex(i => i.id === id);
  if (index !== -1) {
    collection[index] = { ...collection[index], ...updates };
    saveDatabase(db);
  }
}

/** Elimina un item */
export function deleteItem<T extends DataType>(type: T, id: number): void {
  const db = getDatabase();
  const collection = db[type] as any[];
  const idx = collection.findIndex(i => i.id === id);
  if (idx !== -1) {
    collection.splice(idx, 1);
    saveDatabase(db);
  }
}

/** Obtiene un item por ID */
export function getItemById<T extends DataType>(
  type: T,
  id: number
): any {
  return getDataByType(type).find(i => i.id === id);
}

/** Busca items por criterio */
export function searchItems<T extends DataType>(
  type: T,
  predicate: (item: any) => boolean
): any[] {
  return getDataByType(type).filter(predicate);
}

/** Obtiene estadísticas */
export function getStatistics() {
  const db = getDatabase();
  return {
    totalNews: db.news.length,
    totalEvents: db.events.length,
    totalDocuments: db.documents.length,
    totalAnnouncements: db.announcements.length,
    unreadMessages: db.messages.filter(m => !m.read).length,
    onlineUsers: db.users.filter(u => u.status === "online").length,
  };
}

/** BD por defecto */
function getDefaultDatabase(): DatabaseSchema {
  return {
    news: [],
    events: [],
    documents: [],
    announcements: [],
    messages: [],
    users: [],
  };
}
