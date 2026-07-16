/**
 * Tipos centralizados de la aplicación
 */

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
  priority: "high" | "medium" | "low";
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
  replies?: Array<{
    date: string;
    content: string;
  }>;
}

export interface ConnectedUser {
  id: number;
  name: string;
  role: string;
  status: "online" | "offline";
  lastActive: string;
}

export interface CollegeInfo {
  name: string;
  fullName: string;
  municipality: string;
  department: string;
  country: string;
  phone: string;
  email: string;
  address: string;
  schedule: string;
  location: { lat: number; lng: number };
  mission: string;
  vision: string;
  history: string;
  rector: { name: string; title: string; message: string; image: string };
  educationLevels: string[];
  galleryImages: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
  }>;
}
