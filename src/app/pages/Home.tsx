import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  BookOpen,
  Calendar,
  FileText,
  Mail,
  Users,
  Award,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { collegeInfo, announcementsData, newsData } from '../data/mockData';

export default function Home() {
  const quickLinks = [
    {
      icon: Users,
      title: 'Quiénes Somos',
      description: 'Conoce nuestra historia y misión',
      path: '/about',
      color: 'bg-primary'
    },
    {
      icon: BookOpen,
      title: 'Noticias',
      description: 'Últimas novedades del colegio',
      path: '/news',
      color: 'bg-secondary'
    },
    {
      icon: FileText,
      title: 'Documentos',
      description: 'Manuales y trámites',
      path: '/documents',
      color: 'bg-accent'
    },
    {
      icon: Mail,
      title: 'Contacto',
      description: 'Comunícate con nosotros',
      path: '/contact',
      color: 'bg-primary'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-4">Bienvenidos al {collegeInfo.fullName}</h1>
            <p className="text-xl md:text-2xl mb-2 opacity-90">
              {collegeInfo.municipality}, {collegeInfo.department}
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Formando personas íntegras comprometidas con el desarrollo sostenible de nuestra región
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {announcementsData.filter(a => a.priority === 'high').length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            {announcementsData
              .filter(a => a.priority === 'high')
              .map(announcement => (
                <div
                  key={announcement.id}
                  className="bg-accent text-accent-foreground p-4 rounded-lg shadow-md flex items-start space-x-3"
                >
                  <AlertCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="mb-1">{announcement.title}</h3>
                    <p className="text-sm opacity-90">{announcement.content}</p>
                  </div>
                </div>
              ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="group bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className={`${link.color} text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <link.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2">{link.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{link.description}</p>
                <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                  <span className="text-sm">Ver más</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2>Últimas Noticias</h2>
            <Link to="/news" className="text-primary hover:underline flex items-center">
              Ver todas
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsData.slice(0, 3).map((news) => (
              <div
                key={news.id}
                className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(news.date).toLocaleDateString('es-CO', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="mb-2">{news.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {news.description}
                  </p>
                  <Link
                    to={`/news/${news.id}`}
                    className="text-primary hover:underline text-sm flex items-center"
                  >
                    Leer más
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-muted rounded-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="mb-2">40+ Años</h3>
              <p className="text-muted-foreground">de excelencia educativa</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="mb-2">500+ Estudiantes</h3>
              <p className="text-muted-foreground">formados cada año</p>
            </div>
            <div>
              <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="mb-2">4 Niveles</h3>
              <p className="text-muted-foreground">educativos completos</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
