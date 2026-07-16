import { useState } from "react";
import { Plus, Edit, Trash2, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminSectionHeader from "../../components/admin/AdminSectionHeader";
import { useAdminResource } from "../../hooks/useAdminResource";
import { eventsData } from "../../admin/data/adminMockData";
import { EventItem } from "../../admin/types/admin";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

const initialEventForm = {
  name: "",
  date: "",
  time: "",
  place: "",
  description: "",
};

export default function ManageEvents() {
  const {
    items: events,
    addItem,
    updateItem,
    removeItem,
  } = useAdminResource<EventItem>(eventsData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formState, setFormState] = useState(initialEventForm);

  const handleOpenForm = () => {
    setEditingId(null);
    setFormState(initialEventForm);
    setIsFormOpen(true);
  };

  const handleEdit = (event: EventItem) => {
    setEditingId(event.id);
    setFormState({
      name: event.name,
      date: event.date,
      time: event.time,
      place: event.place,
      description: event.description,
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    removeItem(id);
    toast.success("Evento eliminado correctamente");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (editingId) {
      updateItem(editingId, {
        name: formState.name,
        date: formState.date,
        time: formState.time,
        place: formState.place,
        description: formState.description,
      });
      toast.success("Evento actualizado correctamente");
    } else {
      addItem({
        name: formState.name,
        date: formState.date,
        time: formState.time,
        place: formState.place,
        description: formState.description,
      });
      toast.success("Evento creado correctamente");
    }

    setEditingId(null);
    setFormState(initialEventForm);
    setIsFormOpen(false);
  };

  return (
    <AdminLayout
      title="Gestión de Eventos"
      subtitle="Administra el calendario escolar y la programación de actividades con datos mock."
      action={
        <Button variant="secondary" size="sm" onClick={handleOpenForm}>
          <Plus className="h-4 w-4" />
          Nuevo evento
        </Button>
      }
      activeSection="events"
    >
      {isFormOpen ? (
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                {editingId ? "Editar evento" : "Nuevo evento"}
              </h3>
              <p className="text-sm text-muted-foreground">
                Agrega o actualiza información del próximo evento.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFormOpen(false)}
            >
              Cancelar
            </Button>
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Nombre del evento
                </label>
                <Input
                  id="name"
                  value={formState.name}
                  onChange={(event) =>
                    setFormState({ ...formState, name: event.target.value })
                  }
                  placeholder="Nombre del evento"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-medium"
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
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="time"
                  className="mb-2 block text-sm font-medium"
                >
                  Hora
                </label>
                <Input
                  id="time"
                  type="time"
                  value={formState.time}
                  onChange={(event) =>
                    setFormState({ ...formState, time: event.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="place"
                  className="mb-2 block text-sm font-medium"
                >
                  Lugar
                </label>
                <Input
                  id="place"
                  value={formState.place}
                  onChange={(event) =>
                    setFormState({ ...formState, place: event.target.value })
                  }
                  placeholder="Ubicación del evento"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium"
              >
                Descripción
              </label>
              <textarea
                id="description"
                value={formState.description}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    description: event.target.value,
                  })
                }
                rows={4}
                className="w-full rounded-md border border-border bg-input-background px-3 py-2 text-sm outline-none transition focus:border-ring focus:ring-ring/50"
                placeholder="Detalles del evento"
                required
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setIsFormOpen(false)}
              >
                Cancelar
              </Button>
              <Button type="submit">
                {editingId ? "Guardar evento" : "Crear evento"}
              </Button>
            </div>
          </form>
        </div>
      ) : null}

      <div className="rounded-3xl bg-card p-6 shadow-sm">
        <AdminSectionHeader
          title="Eventos programados"
          description="Gestiona el calendario de actividades escolares y revisa el estado de cada evento."
        />

        <div className="mt-6 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Evento</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Hora</TableHead>
                <TableHead>Lugar</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((item) => (
                <TableRow
                  key={item.id}
                  className="transition-colors hover:bg-muted/70"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-primary" />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.description.slice(0, 45)}...
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(item.date).toLocaleDateString("es-CO")}
                  </TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.place}</TableCell>
                  <TableCell className="text-right">
                    <div className="inline-flex items-center justify-end gap-2">
                      <button
                        className="rounded-full p-2 text-muted-foreground transition hover:bg-muted"
                        onClick={() => handleEdit(item)}
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        className="rounded-full p-2 text-destructive transition hover:bg-muted"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}
