import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Newspaper,
  Calendar,
  FileText,
  MessageSquare,
  LogOut,
  Users,
  BarChart3,
  AlertCircle
} from 'lucide-react';
import { newsData, eventsData, documentsData, contactMessagesData, announcementsData } from '../../data/mockData';
import { toast } from 'sonner';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    toast.success('Sesión cerrada correctamente');
    navigate('/admin');
  };

  const stats = [
    {
      title: 'Noticias',
      count: newsData.length,
      icon: Newspaper,
      color: 'bg-primary',
      link: '/admin/news'
    },
    {
      title: 'Eventos',
      count: eventsData.length,
      icon: Calendar,
      color: 'bg-secondary',
      link: '/admin/events'
    },
    {
      title: 'Documentos',
      count: documentsData.length,
      icon: FileText,
      color: 'bg-accent',
      link: '/admin/documents'
    },
    {
      title: 'Mensajes',
      count: contactMessagesData.filter(m => !m.read).length,
      icon: MessageSquare,
      color: 'bg-destructive',
      link: '/admin/messages'
    }
  ];

  const menuItems = [
    { title: 'Gestión de Noticias', icon: Newspaper, link: '/admin/news' },
    { title: 'Gestión de Eventos', icon: Calendar, link: '/admin/events' },
    { title: 'Gestión de Documentos', icon: FileText, link: '/admin/documents' },
    { title: 'Gestión de Avisos', icon: AlertCircle, link: '/admin/announcements' },
    { title: 'Mensajes de Contacto', icon: MessageSquare, link: '/admin/messages' }
  ];

  return (
    <div className="min-h-screen bg-muted">
      <nav className="bg-primary text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h2>Panel Administrativo</h2>
              <p className="text-sm opacity-90">Colegio C.D.R.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                Ver Sitio
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-destructive rounded-md hover:bg-destructive/90 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Salir</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="mb-2">Bienvenido al Panel de Administración</h1>
          <p className="text-muted-foreground">
            Gestiona el contenido del sitio web institucional
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <Link
              key={index}
              to={stat.link}
              className="bg-card rounded-lg shadow-md hover:shadow-xl transition-all p-6 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} text-white w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                {stat.title === 'Mensajes' && stat.count > 0 && (
                  <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full">
                    {stat.count} nuevos
                  </span>
                )}
              </div>
              <h3>{stat.count}</h3>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-lg shadow-lg p-8"
        >
          <h2 className="mb-6">Menú de Gestión</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-muted hover:border-primary transition-all group"
              >
                <item.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="bg-card rounded-lg shadow-lg p-6">
            <h3 className="mb-4">Avisos Activos</h3>
            <div className="space-y-3">
              {announcementsData.slice(0, 3).map((announcement) => (
                <div
                  key={announcement.id}
                  className="p-3 bg-muted rounded-lg"
                >
                  <div className="flex items-start justify-between">
                    <p className="flex-1">{announcement.title}</p>
                    <span className={`text-xs px-2 py-1 rounded ${
                      announcement.priority === 'high' ? 'bg-destructive text-destructive-foreground' :
                      announcement.priority === 'medium' ? 'bg-secondary text-secondary-foreground' :
                      'bg-muted-foreground text-white'
                    }`}>
                      {announcement.priority}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {announcement.content.substring(0, 100)}...
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-6">
            <h3 className="mb-4">Mensajes Recientes</h3>
            <div className="space-y-3">
              {contactMessagesData.slice(0, 3).map((message) => (
                <div
                  key={message.id}
                  className={`p-3 rounded-lg ${message.read ? 'bg-muted' : 'bg-accent/20'}`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <p>{message.name}</p>
                    {!message.read && (
                      <span className="text-xs bg-destructive text-destructive-foreground px-2 py-1 rounded">
                        Nuevo
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {message.subject}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
