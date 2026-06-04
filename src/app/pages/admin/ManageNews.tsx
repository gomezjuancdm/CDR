import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Plus, Edit, Trash2, ArrowLeft, Calendar, Eye } from 'lucide-react';
import { newsData } from '../../data/mockData';
import { toast } from 'sonner';

export default function ManageNews() {
  const [news] = useState(newsData);

  const handleDelete = (id: number) => {
    toast.success('Noticia eliminada correctamente');
  };

  return (
    <div className="min-h-screen bg-muted">
      <nav className="bg-primary text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/admin/dashboard"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Volver al Dashboard</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="mb-2">Gestión de Noticias</h1>
            <p className="text-muted-foreground">
              Administra las noticias del sitio web
            </p>
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Nueva Noticia</span>
          </button>
        </div>

        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left">Imagen</th>
                  <th className="px-6 py-4 text-left">Título</th>
                  <th className="px-6 py-4 text-left">Fecha</th>
                  <th className="px-6 py-4 text-left">Estado</th>
                  <th className="px-6 py-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {news.map((item, index) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <p>{item.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description.substring(0, 60)}...
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(item.date).toLocaleDateString('es-CO')}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full">
                        Publicado
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="p-2 hover:bg-muted rounded transition-colors">
                          <Eye className="h-5 w-5 text-muted-foreground" />
                        </button>
                        <button className="p-2 hover:bg-muted rounded transition-colors">
                          <Edit className="h-5 w-5 text-primary" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 hover:bg-muted rounded transition-colors"
                        >
                          <Trash2 className="h-5 w-5 text-destructive" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
