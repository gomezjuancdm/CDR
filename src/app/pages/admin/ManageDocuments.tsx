import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminSectionHeader from "../../components/admin/AdminSectionHeader";
import { useAdminResource } from "../../hooks/useAdminResource";
import { documentsData } from "../../admin/data/adminMockData";
import { DocumentItem } from "../../admin/types/admin";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

const initialDocumentForm = {
  title: "",
  category: "",
  description: "",
  url: "",
};

export default function ManageDocuments() {
  const {
    items: documents,
    addItem,
    updateItem,
    removeItem,
  } = useAdminResource<DocumentItem>(documentsData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formState, setFormState] = useState(initialDocumentForm);

  const handleOpenForm = () => {
    setEditingId(null);
    setFormState(initialDocumentForm);
    setIsFormOpen(true);
  };

  const handleEdit = (document: DocumentItem) => {
    setEditingId(document.id);
    setFormState({
      title: document.title,
      category: document.category,
      description: document.description,
      url: document.url,
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    removeItem(id);
    toast.success("Documento eliminado correctamente");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (editingId) {
      updateItem(editingId, {
        title: formState.title,
        category: formState.category,
        description: formState.description,
        url: formState.url,
      });
      toast.success("Documento actualizado correctamente");
    } else {
      addItem({
        title: formState.title,
        category: formState.category,
        description: formState.description,
        url: formState.url,
      });
      toast.success("Documento agregado correctamente");
    }

    setEditingId(null);
    setFormState(initialDocumentForm);
    setIsFormOpen(false);
  };

  return (
    <AdminLayout
      title="Gestión de Documentos"
      subtitle="Organiza los archivos institucionales y comparte recursos útiles para la comunidad."
      action={
        <Button variant="secondary" size="sm" onClick={handleOpenForm}>
          <Plus className="h-4 w-4" />
          Nuevo documento
        </Button>
      }
      activeSection="documents"
    >
      {isFormOpen ? (
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                {editingId ? "Editar documento" : "Nuevo documento"}
              </h3>
              <p className="text-sm text-muted-foreground">
                Sube y gestiona enlaces a documentos relevantes para la
                institución.
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
                  Título del documento
                </label>
                <Input
                  id="title"
                  value={formState.title}
                  onChange={(event) =>
                    setFormState({ ...formState, title: event.target.value })
                  }
                  placeholder="Nombre del documento"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium"
                >
                  Categoría
                </label>
                <Input
                  id="category"
                  value={formState.category}
                  onChange={(event) =>
                    setFormState({ ...formState, category: event.target.value })
                  }
                  placeholder="Académico, Reglamentos, Trámites"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="url" className="mb-2 block text-sm font-medium">
                Enlace de descarga
              </label>
              <Input
                id="url"
                type="url"
                value={formState.url}
                onChange={(event) =>
                  setFormState({ ...formState, url: event.target.value })
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
                placeholder="Resumen del contenido del documento"
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
                {editingId ? "Guardar documento" : "Agregar documento"}
              </Button>
            </div>
          </form>
        </div>
      ) : null}

      <div className="rounded-3xl bg-card p-6 shadow-sm">
        <AdminSectionHeader
          title="Documentos disponibles"
          description="Actualiza y controla los recursos académicos y administrativos del colegio."
        />

        <div className="mt-6 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Documento</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Enlace</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((item) => (
                <TableRow
                  key={item.id}
                  className="transition-colors hover:bg-muted/70"
                >
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.description.slice(0, 50)}...
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      Ver documento
                    </a>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="inline-flex items-center justify-end gap-2">
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
