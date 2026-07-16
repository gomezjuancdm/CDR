import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  BookOpen,
  Calendar,
  FileText,
  Mail as MailIconLucide,
  Users,
  Award,
  ChevronRight,
  AlertCircle,
  Sparkles,
  MapPin,
  Phone,
} from "lucide-react";
import { collegeInfo, announcementsData, newsData } from "../data/mockData";

export default function Home() {
  const quickLinks = [
    {
      icon: Users,
      title: "Quiénes Somos",
      description: "Conoce nuestra historia y misión",
      path: "/about",
      gradient: "from-primary to-blue-600",
    },
    {
      icon: BookOpen,
      title: "Noticias",
      description: "Últimas novedades del colegio",
      path: "/news",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FileText,
      title: "Documentos",
      description: "Manuales y trámites",
      path: "/documents",
      gradient: "from-accent to-teal-500",
    },
    {
      icon: MailIconLucide,
      title: "Contacto",
      description: "Comunícate con nosotros",
      path: "/contact",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Hero Section con animación de fondo */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 -left-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 -right-40 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 left-40 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 9, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white border border-primary/20 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary">
                Institución educativa de calidad
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {collegeInfo.fullName}
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-3 font-light">
              {collegeInfo.municipality}, {collegeInfo.department}
            </p>

            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Formando generaciones de líderes comprometidos con la excelencia
              académica y el desarrollo integral de nuestro territorio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección de Avisos Destacados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {announcementsData.filter((a) => a.priority === "high").length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="space-y-4">
              {announcementsData
                .filter((a) => a.priority === "high")
                .map((announcement, idx) => (
                  <motion.div
                    key={announcement.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="group relative overflow-hidden rounded-xl p-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white shadow-xl hover:shadow-2xl transition-all"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity" />
                    <div className="relative flex items-start gap-4">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <AlertCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">
                          {announcement.title}
                        </h3>
                        <p className="opacity-90 text-sm">
                          {announcement.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}
      </section>

      {/* Sección de Accesos Rápidos con diseño único */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-3 text-slate-900">
            Explora nuestro portal
          </h2>
          <p className="text-slate-600 text-lg">
            Acceso rápido a información institucional
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link
                to={link.path}
                className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Animated accent line */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${link.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${link.gradient} text-white mb-4`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <link.icon className="h-7 w-7" />
                  </motion.div>

                  <h3
                    className="text-xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all"
                    style={{ backgroundImage: `var(--link-gradient)` }}
                  >
                    {link.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-6 group-hover:text-slate-700 transition-colors">
                    {link.description}
                  </p>

                  <motion.div className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:gap-3 transition-all">
                    <span>Acceder</span>
                    <ChevronRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de Noticias con layout creativo */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
          >
            <div className="text-center md:text-left flex-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-2">
                Centro de Noticias
              </h2>
              <p className="text-slate-600">
                Mantente informado de los últimos eventos del colegio
              </p>
            </div>
            <Link
              to="/news"
              className="group hidden md:flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:shadow-lg transition-all"
            >
              Ver todas
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {newsData.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {/* Featured News */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <Link
                  to={`/news/${newsData[0]?.id}`}
                  className="group block relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-96"
                >
                  <img
                    src={newsData[0]?.image}
                    alt={newsData[0]?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-2 text-sm mb-3">
                      <Calendar className="h-4 w-4" />
                      {new Date(newsData[0]?.date).toLocaleDateString("es-CO", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:line-clamp-2 transition-all">
                      {newsData[0]?.title}
                    </h3>
                    <p className="text-gray-100 line-clamp-2">
                      {newsData[0]?.description}
                    </p>
                  </div>
                </Link>
              </motion.div>

              {/* Grid de otras noticias */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {newsData.slice(1, 4).map((news, idx) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <Link
                      to={`/news/${news.id}`}
                      className="group block h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                    >
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                          <Calendar className="h-3 w-3" />
                          {new Date(news.date).toLocaleDateString("es-CO", {
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {news.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                          {news.description}
                        </p>
                        <motion.div
                          className="flex items-center gap-2 text-primary text-sm font-medium"
                          whileHover={{ gap: 8 }}
                        >
                          Leer más
                          <ChevronRight className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl p-8 md:p-12 border border-slate-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="h-14 w-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center"
              >
                <Award className="h-7 w-7 text-white" />
              </motion.div>
              <h3 className="font-bold text-2xl text-slate-900 mb-2">
                40+ Años
              </h3>
              <p className="text-slate-600 text-sm">de excelencia educativa</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="h-14 w-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
              >
                <Users className="h-7 w-7 text-white" />
              </motion.div>
              <h3 className="font-bold text-2xl text-slate-900 mb-2">
                500+ Estudiantes
              </h3>
              <p className="text-slate-600 text-sm">formados cada año</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="h-14 w-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-accent to-teal-500 flex items-center justify-center"
              >
                <BookOpen className="h-7 w-7 text-white" />
              </motion.div>
              <h3 className="font-bold text-2xl text-slate-900 mb-2">
                4 Niveles
              </h3>
              <p className="text-slate-600 text-sm">educativos completos</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Sección de Ubicación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/30"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Ubicación
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Nos encontramos en el Guaviare
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ubicados en la hermosa región del Guaviare, comprometidos con la
              educación de la comunidad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Información de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition"
                >
                  <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Dirección</p>
                    <p className="text-slate-600 text-sm mt-1">
                      {collegeInfo.address}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {collegeInfo.municipality}, {collegeInfo.department}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition"
                >
                  <div className="rounded-full bg-secondary/10 p-3 flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Teléfono</p>
                    <p className="text-slate-600 text-sm mt-1">
                      {collegeInfo.phone}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition"
                >
                  <div className="rounded-full bg-accent/10 p-3 flex-shrink-0">
                    <MailIconLucide className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="text-slate-600 text-sm mt-1">
                      {collegeInfo.email}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition"
                >
                  <div className="rounded-full bg-purple-500/10 p-3 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Horario</p>
                    <p className="text-slate-600 text-sm mt-1">
                      {collegeInfo.schedule}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-slate-100"
            >
              <div className="relative w-full h-96 bg-slate-100">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB41DYuid8f12345&q=${collegeInfo.location.lat},${collegeInfo.location.lng}&zoom=15`}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${collegeInfo.fullName} location`}
                />
                <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <p className="font-semibold text-slate-900 text-sm">
                    {collegeInfo.fullName}
                  </p>
                  <p className="text-xs text-slate-600">
                    {collegeInfo.municipality}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
