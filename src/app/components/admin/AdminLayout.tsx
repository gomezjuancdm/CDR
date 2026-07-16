import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  AlertCircle,
  Calendar,
  Database,
  FileText,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Newspaper,
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../ui/utils";
import { useAuth } from "../../hooks/useAuth";

interface AdminLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  activeSection?: string;
}

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    to: "/admin/dashboard",
    key: "dashboard",
  },
  { label: "Noticias", icon: Newspaper, to: "/admin/news", key: "news" },
  { label: "Eventos", icon: Calendar, to: "/admin/events", key: "events" },
  {
    label: "Documentos",
    icon: FileText,
    to: "/admin/documents",
    key: "documents",
  },
  {
    label: "Avisos",
    icon: AlertCircle,
    to: "/admin/announcements",
    key: "announcements",
  },
  {
    label: "Mensajes",
    icon: MessageSquare,
    to: "/admin/messages",
    key: "messages",
  },
  {
    label: "Base de Datos",
    icon: Database,
    to: "/admin/database",
    key: "database",
  },
];

export default function AdminLayout({
  title,
  subtitle,
  children,
  action,
}: AdminLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="lg:flex lg:min-h-screen">
        <aside className="hidden lg:flex lg:w-80 lg:flex-col bg-gradient-to-b from-slate-900 to-slate-950 border-r border-cyan-500/10 text-sm sticky top-0 h-screen">
          <div className="flex flex-col h-full">
            <div className="px-6 py-6 border-b border-cyan-500/10">
              <div className="mb-3">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/60">
                  Administración
                </p>
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-1">
                  Colegio C.D.R.
                </h1>
              </div>
              <p className="text-xs text-cyan-400/40">
                Panel de gestión institucional
              </p>
            </div>

            <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                const ItemIcon = item.icon;

                return (
                  <Link
                    key={item.key}
                    to={item.to}
                    className={cn(
                      "group flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-all duration-200",
                      isActive
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                        : "text-cyan-300/70 hover:text-cyan-300 hover:bg-cyan-500/10",
                    )}
                  >
                    <ItemIcon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="px-6 py-6 border-t border-cyan-500/10">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="w-full text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <LogOut className="h-4 w-4" />
                Cerrar sesión
              </Button>
            </div>
          </div>
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="border-b border-cyan-500/10 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-md lg:px-8 px-4 py-6">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/60">
                  Panel administrativo
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-cyan-300/60">
                  {subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-wrap gap-3 items-center justify-start md:justify-end flex-shrink-0"
              >
                {action && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {action}
                  </motion.div>
                )}
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                >
                  <Link to="/">Ver sitio</Link>
                </Button>
              </motion.div>
            </div>
          </header>

          <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {children}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
