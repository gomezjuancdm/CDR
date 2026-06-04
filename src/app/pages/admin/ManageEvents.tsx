import { Link } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';

export default function ManageEvents() {
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
            <h1 className="mb-2">Gestión de Eventos</h1>
            <p className="text-muted-foreground">
              Administra los eventos del calendario
            </p>
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Nuevo Evento</span>
          </button>
        </div>
        <div className="bg-card rounded-lg shadow-lg p-8 text-center">
          <p className="text-muted-foreground">Página de gestión de eventos en desarrollo</p>
        </div>
      </div>
    </div>
  );
}
