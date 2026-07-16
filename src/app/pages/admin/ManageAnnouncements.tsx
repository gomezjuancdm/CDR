import { useState } from "react";
import { motion } from "motion/react";
import { Plus, Edit, Trash2, Zap } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import AdminLayout from "../../components/admin/AdminLayout";
// AdminSectionHeader removed because not used in this view
import ConnectedUsersPanel from "../../components/admin/ConnectedUsersPanel";
import { useAdminResource } from "../../hooks/useAdminResource";
import {
  announcementsData,
  connectedUsersData,
} from "../../admin/data/adminMockData";
import { AnnouncementItem } from "../../admin/types/admin";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

const initialAnnouncementForm = {
  title: "",
  content: "",
  date: "",
  priority: "medium" as AnnouncementItem["priority"],
};

export default function ManageAnnouncements() {
  const {
    items: announcements,
    addItem,
    updateItem,
    removeItem,
  } = useAdminResource<AnnouncementItem>(announcementsData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formState, setFormState] = useState(initialAnnouncementForm);

  const handleOpenForm = () => {
    setEditingId(null);
    setFormState(initialAnnouncementForm);
    setIsFormOpen(true);
  };

  const handleEdit = (announcement: AnnouncementItem) => {
    setEditingId(announcement.id);
    setFormState({
      title: announcement.title,
      content: announcement.content,
      date: announcement.date,
      priority: announcement.priority,
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    removeItem(id);
    toast.success("Aviso eliminado correctamente");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (editingId) {
      updateItem(editingId, {
        title: formState.title,
        content: formState.content,
        date: formState.date,
        priority: formState.priority,
      });
      toast.success("Aviso actualizado correctamente");
    } else {
      addItem({
        title: formState.title,
        content: formState.content,
        date: formState.date,
        priority: formState.priority,
      });
      toast.success("Aviso creado correctamente");
    }

    setEditingId(null);
    setFormState(initialAnnouncementForm);
    setIsFormOpen(false);
  };

  return (
    <AdminLayout
      title="Gestión de Avisos"
      subtitle="Comparte información clave con la comunidad escolar a través de avisos institucionales."
      action={
        <Button variant="secondary" size="sm" onClick={handleOpenForm}>
          <Plus className="h-4 w-4" />
          Nuevo aviso
        </Button>
      }
      activeSection="announcements"
    >
      <div className="grid gap-6 lg:grid-cols-4">
        {/* Panel de Usuarios Conectados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <ConnectedUsersPanel users={connectedUsersData} />
        </motion.div>

        {/* Sección principal de avisos */}
        <div className="lg:col-span-3">
          {isFormOpen ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {editingId ? "Editar aviso" : "Nuevo aviso"}
                  </h3>
                  <p className="text-sm text-cyan-300/70">
                    Añade mensajes importantes que se mostrarán en el panel
                    administrativo.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsFormOpen(false)}
                  className="text-cyan-400 hover:bg-cyan-500/10"
                >
                  Cancelar
                </Button>
              </div>

              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="title"
                      className="mb-2 block text-sm font-medium text-cyan-300"
                    >
                      Título del aviso
                    </label>
                    <Input
                      id="title"
                      value={formState.title}
                      onChange={(event) =>
                        setFormState({
                          ...formState,
                          title: event.target.value,
                        })
                      }
                      placeholder="Título del aviso"
                      className="border-cyan-500/30 bg-slate-800/50 text-cyan-50 placeholder-cyan-600/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block text-sm font-medium text-cyan-300"
                    >
                      Fecha
                    </label>
                    <Input
                      id="date"
                      type="date"
                      value={formState.date}
                      onChange={(event) =>
                        setFormState({ ...formState, date: event.target.value })
                      }
                      className="border-cyan-500/30 bg-slate-800/50 text-cyan-50 placeholder-cyan-600/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="priority"
                      className="mb-2 block text-sm font-medium text-cyan-300"
                    >
                      Prioridad
                    </label>
                    <select
                      id="priority"
                      value={formState.priority}
                      onChange={(event) =>
                        setFormState({
                          ...formState,
                          priority: event.target
                            .value as AnnouncementItem["priority"],
                        })
                      }
                      className="w-full rounded-md border border-cyan-500/30 bg-slate-800/50 px-3 py-2 text-sm text-cyan-50 outline-none transition focus:border-cyan-400 focus:ring-cyan-400/20"
                    >
                      <option value="high">Alta</option>
                      <option value="medium">Media</option>
                      <option value="low">Baja</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="content"
                    className="mb-2 block text-sm font-medium text-cyan-300"
                  >
                    Contenido del aviso
                  </label>
                  <textarea
                    id="content"
                    value={formState.content}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        content: event.target.value,
                      })
                    }
                    rows={5}
                    className="w-full rounded-md border border-cyan-500/30 bg-slate-800/50 px-3 py-2 text-sm text-cyan-50 placeholder-cyan-600/50 outline-none transition focus:border-cyan-400 focus:ring-cyan-400/20"
                    placeholder="Texto del aviso"
                    required
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setIsFormOpen(false)}
                    className="text-cyan-400 hover:bg-cyan-500/10"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500"
                  >
                    {editingId ? "Guardar aviso" : "Crear aviso"}
                  </Button>
                </div>
              </form>
            </motion.div>
          ) : null}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-2">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    Avisos activos
                  </h3>
                  <p className="text-sm text-cyan-300/70">
                    Crea mensajes importantes para docentes, estudiantes y
                    padres de familia.
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 border border-cyan-500/20"
              >
                {announcements.length} avisos
              </motion.div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-cyan-500/20 hover:bg-transparent">
                    <TableHead className="text-cyan-400">Aviso</TableHead>
                    <TableHead className="text-cyan-400">Fecha</TableHead>
                    <TableHead className="text-cyan-400">Prioridad</TableHead>
                    <TableHead className="text-right text-cyan-400">
                      Acciones
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {announcements.map((item) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="group border-cyan-500/10 transition hover:border-cyan-500/30 hover:bg-gradient-to-r hover:from-cyan-500/5 hover:to-blue-500/5"
                    >
                      <TableCell className="text-cyan-50">
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold text-cyan-300">
                            {item.title}
                          </p>
                          <p className="text-sm text-cyan-500/60">
                            {item.content.slice(0, 60)}...
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="text-cyan-400/80">
                        {new Date(item.date).toLocaleDateString("es-CO")}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${
                            item.priority === "high"
                              ? "bg-red-500/20 text-red-400 border border-red-500/30"
                              : item.priority === "medium"
                                ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                                : "bg-green-500/20 text-green-400 border border-green-500/30"
                          }`}
                        >
                          {item.priority === "high"
                            ? "Alta"
                            : item.priority === "medium"
                              ? "Media"
                              : "Baja"}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="inline-flex items-center justify-end gap-2 opacity-0 transition group-hover:opacity-100">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full p-2 text-cyan-400 transition hover:bg-cyan-500/20"
                            onClick={() => handleEdit(item)}
                          >
                            <Edit className="h-4 w-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full p-2 text-red-400 transition hover:bg-red-500/20"
                            onClick={() => handleDelete(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </motion.button>
                        </div>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
}
