/**
 * Servicio de Inicialización de Base de Datos
 * Carga y gestiona datos persistentes de la aplicación
 */

import { getDatabase, saveDatabase } from "../database/db";
import {
  newsData,
  eventsData,
  documentsData,
  announcementsData,
  contactMessagesData,
  connectedUsersData,
} from "../data/mockData";

const INIT_KEY = "CDR_DB_INITIALIZED";

/** Inicializa la BD con datos mockup en la primera carga */
export function initializeDatabase(): void {
  if (localStorage.getItem(INIT_KEY) === "true") return;

  try {
    const db = getDatabase();

    if (db.news.length === 0) db.news = newsData;
    if (db.events.length === 0) db.events = eventsData;
    if (db.documents.length === 0) db.documents = documentsData;
    if (db.announcements.length === 0) db.announcements = announcementsData;
    if (db.messages.length === 0) db.messages = contactMessagesData;
    if (db.users.length === 0) db.users = connectedUsersData;

    saveDatabase(db);
    localStorage.setItem(INIT_KEY, "true");

    console.log("✓ Base de datos inicializada");
  } catch (error) {
    console.error("Error al inicializar BD:", error);
  }
}

/** Exporta la BD a JSON */
export function exportDatabase(): string {
  return JSON.stringify(getDatabase(), null, 2);
}

/** Importa BD desde JSON */
export function importDatabase(jsonString: string): boolean {
  try {
    const db = JSON.parse(jsonString);
    if (!db.news || !db.events || !db.documents || !db.announcements)
      throw new Error("Estructura inválida");
    saveDatabase(db);
    return true;
  } catch (error) {
    console.error("Error al importar BD:", error);
    return false;
  }
}

/** Reinicia BD a valores iniciales */
export function resetDatabaseToMockup(): void {
  try {
    const db = getDatabase();
    db.news = newsData;
    db.events = eventsData;
    db.documents = documentsData;
    db.announcements = announcementsData;
    db.messages = contactMessagesData;
    db.users = connectedUsersData;
    saveDatabase(db);
    console.log("✓ BD restablecida");
  } catch (error) {
    console.error("Error al restablecer BD:", error);
  }
}

/** Obtiene el tamaño de la BD en KB */
export function getDatabaseSize(): number {
  const json = JSON.stringify(getDatabase());
  return Math.round((new Blob([json]).size / 1024) * 100) / 100;
}
