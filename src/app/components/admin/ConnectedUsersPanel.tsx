import { motion } from "motion/react";
import { Users, Clock } from "lucide-react";
import { ConnectedUser } from "../../admin/data/adminMockData";

interface ConnectedUsersPanelProps {
  users: ConnectedUser[];
}

export default function ConnectedUsersPanel({
  users,
}: ConnectedUsersPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/80 via-cyan-900/40 to-slate-900/80 p-6 shadow-2xl backdrop-blur-xl"
    >
      {/* Efecto de brillo animado de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 blur-xl animate-pulse" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-2">
          <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-2">
            <Users className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            En Línea
          </h3>
        </div>
        <div className="mb-4 flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-semibold text-green-400">
            {users.length} conectados
          </span>
        </div>

        <div className="space-y-3">
          {users.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
              className="group rounded-2xl border border-cyan-500/10 bg-gradient-to-r from-slate-800/50 to-cyan-900/30 p-3 backdrop-blur-md transition hover:border-cyan-500/30 hover:from-slate-800/80 hover:to-cyan-900/60"
            >
              <div className="flex items-start gap-2">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full border border-cyan-500/50 group-hover:border-cyan-400"
                  />
                  <div
                    className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-slate-900 ${
                      user.status === "online"
                        ? "bg-green-400 animate-pulse"
                        : user.status === "idle"
                          ? "bg-yellow-400"
                          : "bg-gray-400"
                    }`}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-cyan-300">
                    {user.name}
                  </p>
                  <p className="truncate text-xs text-cyan-500/70">
                    {user.role}
                  </p>
                  <div className="mt-1 flex items-center gap-1 text-xs text-cyan-600/70">
                    <Clock className="h-3 w-3" />
                    {user.connectionTime}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3 text-center">
          <p className="text-xs font-semibold text-cyan-400">
            Actividad en Tiempo Real
          </p>
        </div>
      </div>
    </motion.div>
  );
}
