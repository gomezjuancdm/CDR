import { useState } from "react";
import { motion } from "motion/react";
import { Download, Upload, RotateCcw, Database, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import AdminLayout from "../../components/admin/AdminLayout";
import { Button } from "../../components/ui/button";
import {
  exportDatabase,
  importDatabase,
  resetDatabaseToMockup,
  getDatabaseSize,
} from "../../services/dataInitializer";
import { getStatistics } from "../../database/db";

export default function DatabaseManager() {
  const [importing, setImporting] = useState(false);
  const stats = getStatistics();
  const dbSizeKB = getDatabaseSize();

  const downloadJSON = (data: string, filename: string) => {
    const element = document.createElement("a");
    element.href = `data:text/plain;charset=utf-8,${encodeURIComponent(data)}`;
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleExport = () => {
    try {
      downloadJSON(exportDatabase(), `cdr-database-${Date.now()}.json`);
      toast.success("Base de datos exportada");
    } catch {
      toast.error("Error al exportar");
    }
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event: any) => {
        setImporting(true);
        try {
          if (importDatabase(event.target.result)) {
            toast.success("Base de datos importada");
            window.location.reload();
          } else {
            toast.error("Archivo inválido");
          }
        } catch {
          toast.error("Error al importar");
        } finally {
          setImporting(false);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const handleReset = () => {
    if (confirm("¿Restablecer BD a valores iniciales?")) {
      try {
        resetDatabaseToMockup();
        toast.success("BD restablecida");
        window.location.reload();
      } catch {
        toast.error("Error al restablecer");
      }
    }
  };

  const StatCard = ({ label, value }: { label: string; value: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 border border-cyan-500/10"
    >
      <p className="text-cyan-400/60 text-xs uppercase tracking-widest mb-1">{label}</p>
      <p className="text-2xl font-bold text-cyan-300">{value}</p>
    </motion.div>
  );

  return (
    <AdminLayout
      title="Gestor de Base de Datos"
      subtitle="Gestiona, respalda e importa datos"
      activeSection="database"
    >
      <div className="space-y-6">
        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          <StatCard label="Noticias" value={stats.totalNews} />
          <StatCard label="Eventos" value={stats.totalEvents} />
          <StatCard label="Documentos" value={stats.totalDocuments} />
          <StatCard label="Avisos" value={stats.totalAnnouncements} />
          <StatCard label="Mensajes" value={stats.unreadMessages} />
          <StatCard label="En línea" value={stats.onlineUsers} />
        </motion.div>

        {/* Tamaño */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-cyan-500/10 flex items-center gap-4"
        >
          <Database className="h-8 w-8 text-cyan-400" />
          <div>
            <p className="text-cyan-400/60 text-sm uppercase">Tamaño BD</p>
            <p className="text-3xl font-bold text-cyan-300">{dbSizeKB} KB</p>
          </div>
        </motion.div>

        {/* Acciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid gap-4 md:grid-cols-3"
        >
          <Button
            onClick={handleExport}
            className="bg-green-600 hover:bg-green-700 h-12"
          >
            <Download className="h-5 w-5 mr-2" />
            Exportar
          </Button>
          <Button
            onClick={handleImport}
            disabled={importing}
            className="bg-blue-600 hover:bg-blue-700 h-12"
          >
            <Upload className="h-5 w-5 mr-2" />
            {importing ? "Importando..." : "Importar"}
          </Button>
          <Button
            onClick={handleReset}
            className="bg-orange-600 hover:bg-orange-700 h-12"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Restablecer
          </Button>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-amber-900/20 border border-amber-600/30 rounded-lg p-6"
        >
          <div className="flex gap-4">
            <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
            <div className="space-y-1">
              <h3 className="font-semibold text-amber-200">Información</h3>
              <ul className="text-amber-100/80 text-sm space-y-1">
                <li>• Datos almacenados localmente</li>
                <li>• Exportar regularmente para respaldo</li>
                <li>• Cambios se guardan automáticamente</li>
                <li>• Si limpias caché, se pierden los datos</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  );
}
