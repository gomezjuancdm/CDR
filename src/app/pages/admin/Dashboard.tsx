import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Calendar,
  FileText,
  MessageSquare,
  Newspaper,
  AlertCircle,
  Zap,
} from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminStatsCard from "../../components/admin/AdminStatsCard";
import ConnectedUsersPanel from "../../components/admin/ConnectedUsersPanel";
import {
  newsData,
  eventsData,
  documentsData,
  announcementsData,
  contactMessagesData,
  connectedUsersData,
} from "../../admin/data/adminMockData";

export default function Dashboard() {
  const stats = [
    {
      title: "Noticias",
      count: newsData.length,
      icon: Newspaper,
      color: "bg-primary",
      link: "/admin/news",
    },
    {
      title: "Eventos",
      count: eventsData.length,
      icon: Calendar,
      color: "bg-secondary",
      link: "/admin/events",
    },
    {
      title: "Documentos",
      count: documentsData.length,
      icon: FileText,
      color: "bg-accent",
      link: "/admin/documents",
    },
    {
      title: "Mensajes",
      count: contactMessagesData.filter((message) => !message.read).length,
      icon: MessageSquare,
      color: "bg-destructive",
      link: "/admin/messages",
      badge: `${contactMessagesData.filter((message) => !message.read).length} nuevos`,
    },
  ];

  const menuItems = [
    { title: "Gestión de Noticias", icon: Newspaper, link: "/admin/news" },
    { title: "Gestión de Eventos", icon: Calendar, link: "/admin/events" },
    {
      title: "Gestión de Documentos",
      icon: FileText,
      link: "/admin/documents",
    },
    {
      title: "Gestión de Avisos",
      icon: AlertCircle,
      link: "/admin/announcements",
    },
    {
      title: "Mensajes de Contacto",
      icon: MessageSquare,
      link: "/admin/messages",
    },
  ];

  return (
    <AdminLayout
      title="Dashboard"
      subtitle="Resumen rápido de las publicaciones y actividad administrativa"
      activeSection="dashboard"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
        className="grid gap-4 lg:grid-cols-4"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * idx }}
          >
            <AdminStatsCard
              title={stat.title}
              count={stat.count}
              icon={stat.icon}
              color={stat.color}
              link={stat.link}
              badge={stat.badge}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-5 xl:grid-cols-3"
      >
        {/* Panel de Usuarios Conectados */}
        <ConnectedUsersPanel users={connectedUsersData} />

        {/* Avisos activos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="xl:col-span-2 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 p-6 shadow-2xl backdrop-blur-xl"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-2">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Avisos activos
                </h3>
                <p className="text-sm text-cyan-300/70">
                  Revisa los avisos que requieren atención inmediata.
                </p>
              </div>
            </div>
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 border border-cyan-500/20"
            >
              {announcementsData.length} avisos
            </motion.span>
          </div>

          <div className="space-y-3">
            {announcementsData.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="group rounded-2xl border border-cyan-500/10 bg-gradient-to-r from-slate-800/50 to-cyan-900/30 p-4 backdrop-blur-md transition hover:border-cyan-500/30 hover:from-slate-800/80 hover:to-cyan-900/60"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-cyan-300">
                    {announcement.title}
                  </p>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold backdrop-blur-sm ${
                      announcement.priority === "high"
                        ? "bg-red-500/20 text-red-400 border border-red-500/30"
                        : announcement.priority === "medium"
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-green-500/20 text-green-400 border border-green-500/30"
                    }`}
                  >
                    {announcement.priority === "high"
                      ? "Alta"
                      : announcement.priority === "medium"
                        ? "Media"
                        : "Baja"}
                  </span>
                </div>
                <p className="mt-3 text-sm text-cyan-500/60">
                  {announcement.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 p-6 shadow-2xl backdrop-blur-xl"
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Mensajes recientes
              </h3>
              <p className="text-sm text-purple-300/70">
                Los mensajes más recientes de la bandeja de entrada.
              </p>
            </div>
          </div>
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400 border border-purple-500/20"
          >
            {contactMessagesData.length} mensajes
          </motion.span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {contactMessagesData.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              className={`group rounded-2xl border backdrop-blur-md p-4 transition ${
                message.read
                  ? "border-purple-500/10 bg-gradient-to-r from-slate-800/50 to-purple-900/30 hover:border-purple-500/30 hover:from-slate-800/80 hover:to-purple-900/60"
                  : "border-red-500/20 bg-gradient-to-r from-red-900/30 to-slate-800/50 hover:border-red-500/40 hover:from-red-900/50"
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <p className="font-semibold text-purple-300">{message.name}</p>
                {!message.read && (
                  <span className="rounded-full bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-1 text-xs font-semibold">
                    Nuevo
                  </span>
                )}
              </div>
              <p className="text-sm text-purple-500/70">{message.subject}</p>
              <p className="mt-2 text-xs text-purple-400/50">
                {new Date(message.date).toLocaleDateString("es-CO")}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 p-6 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-2">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
            Accesos rápidos
          </h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={item.link}
                className="block rounded-2xl border border-green-500/20 bg-gradient-to-br from-slate-800/50 to-green-900/30 px-5 py-4 transition hover:border-green-500/40 hover:from-slate-800/80 hover:to-green-900/60 group"
              >
                <div className="flex items-center gap-3 text-sm font-semibold text-green-300 group-hover:text-green-200">
                  <div className="rounded-full bg-green-500/20 p-2 group-hover:bg-green-500/30 transition">
                    <item.icon className="h-4 w-4 text-green-400" />
                  </div>
                  {item.title}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </AdminLayout>
  );
}
