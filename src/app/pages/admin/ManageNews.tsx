import { useState } from "react";
import { Edit, Trash2, Eye, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminSectionHeader from "../../components/admin/AdminSectionHeader";
import { useAdminResource } from "../../hooks/useAdminResource";
import { newsData } from "../../admin/data/adminMockData";
import { NewsItem } from "../../admin/types/admin";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

const initialNewsForm = {
  title: "",
  image: "",
  date: "",
  description: "",
  content: "",
};

export default function ManageNews() {
  const {
    items: news,
    addItem,
    updateItem,
    removeItem,
  } = useAdminResource<NewsItem>(newsData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formState, setFormState] = useState(initialNewsForm);

  // activeItem removed because not used

  const handleOpenForm = () => {
    setEditingId(null);
    setFormState(initialNewsForm);
    setIsFormOpen(true);
  };

  const handleEdit = (item: NewsItem) => {
    setEditingId(item.id);
    setFormState({
      title: item.title,
      image: item.image,
      date: item.date,
      description: item.description,
      content: item.content,
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    removeItem(id);
    toast.success("Noticia eliminada correctamente");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (editingId) {
      updateItem(editingId, {
        title: formState.title,
        image: formState.image,
        date: formState.date,
        description: formState.description,
        content: formState.content,
      });
      toast.success("Noticia actualizada correctamente");
    } else {
      addItem({
        title: formState.title,
        image: formState.image,
        date: formState.date,
        description: formState.description,
        content: formState.content,
      });
      toast.success("Noticia creada correctamente");
    }

    setEditingId(null);
    setFormState(initialNewsForm);
    setIsFormOpen(false);
  };

  return (
    <AdminLayout
      title="Gestión de Noticias"
      subtitle="Crea, edita y publica noticias institucionales con contenido simulado mientras llega el backend."
      action={
        <Button variant="secondary" size="sm" onClick={handleOpenForm}>
          <Plus className="h-4 w-4" />
          Nueva noticia
        </Button>
      }
      activeSection="news"
    >
      {isFormOpen ? (
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                {editingId ? "Editar noticia" : "Nueva noticia"}
              </h3>
              <p className="text-sm text-muted-foreground">
                Rellena la información para actualizar el listado de noticias.
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
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium"
                >
                  Título
                </label>
                <Input
                  id="title"
                  value={formState.title}
                  onChange={(event) =>
                    setFormState({ ...formState, title: event.target.value })
                  }
                  placeholder="Título de la noticia"
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
                  htmlFor="image"
                  className="mb-2 block text-sm font-medium"
                >
                  URL de imagen
                </label>
                <Input
                  id="image"
                  value={formState.image}
                  onChange={(event) =>
                    setFormState({ ...formState, image: event.target.value })
                  }
                  placeholder="https://..."
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium"
                >
                  Descripción corta
                </label>
                <Input
                  id="description"
                  value={formState.description}
                  onChange={(event) =>
                    setFormState({
                      ...formState,
                      description: event.target.value,
                    })
                  }
                  placeholder="Resumen breve"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="content"
                className="mb-2 block text-sm font-medium"
              >
                Contenido completo
              </label>
              <textarea
                id="content"
                value={formState.content}
                onChange={(event) =>
                  setFormState({ ...formState, content: event.target.value })
                }
                rows={5}
                className="w-full rounded-md border border-border bg-input-background px-3 py-2 text-sm outline-none transition focus:border-ring focus:ring-ring/50"
                placeholder="Descripción detallada de la noticia"
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
                {editingId ? "Guardar cambios" : "Crear noticia"}
              </Button>
            </div>
          </form>
        </div>
      ) : null}

      <div className="rounded-3xl bg-card p-6 shadow-sm">
        <AdminSectionHeader
          title="Lista de noticias"
          description="Administra las noticias vigentes y actualiza fechas, descripciones e imágenes para cada publicación."
        />

        <div className="mt-6 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Imagen</TableHead>
                <TableHead>Título</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {news.map((item) => (
                <TableRow
                  key={item.id}
                  className="transition-colors hover:bg-muted/70"
                >
                  <TableCell>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-24 rounded-xl object-cover"
                    />
                  </TableCell>
                  <TableCell className="space-y-1">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.description.slice(0, 60)}...
                    </p>
                  </TableCell>
                  <TableCell>
                    {new Date(item.date).toLocaleDateString("es-CO")}
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      Publicado
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="inline-flex items-center justify-end gap-2">
                      <button className="rounded-full p-2 text-muted-foreground transition hover:bg-muted">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        className="rounded-full p-2 text-secondary transition hover:bg-muted"
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
