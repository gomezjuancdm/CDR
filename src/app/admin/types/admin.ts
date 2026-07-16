export interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
  description: string;
  content: string;
}

export interface EventItem {
  id: number;
  name: string;
  date: string;
  time: string;
  place: string;
  description: string;
}

export interface DocumentItem {
  id: number;
  title: string;
  category: string;
  description: string;
  url: string;
}

export interface AnnouncementItem {
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
}
