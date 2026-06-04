import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Search, Filter } from 'lucide-react';
import { documentsData } from '../data/mockData';

export default function Documents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', ...Array.from(new Set(documentsData.map(doc => doc.category)))];

  const filteredDocuments = documentsData.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4">Documentos y Trámites</h1>
            <p className="text-xl opacity-90">
              Accede a la documentación institucional y requisitos para trámites
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-muted rounded-lg p-6 mb-8">
          <h2 className="mb-4">Información sobre Matrícula</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-3">Requisitos</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Registro civil de nacimiento (original)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fotocopia del documento de identidad del estudiante</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fotocopia de documentos de identidad de los padres</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Certificados de estudios años anteriores</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Certificado de afiliación a salud (EPS)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Carné de vacunación (para preescolar y primaria)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">Fechas Importantes</h3>
              <div className="space-y-3">
                <div className="bg-card rounded p-3">
                  <p className="mb-1">Pre-matrícula</p>
                  <p className="text-sm text-muted-foreground">
                    Noviembre 15 - Diciembre 15, 2026
                  </p>
                </div>
                <div className="bg-card rounded p-3">
                  <p className="mb-1">Matrícula Ordinaria</p>
                  <p className="text-sm text-muted-foreground">
                    Diciembre 16, 2026 - Enero 15, 2027
                  </p>
                </div>
                <div className="bg-card rounded p-3">
                  <p className="mb-1">Inicio de Clases</p>
                  <p className="text-sm text-muted-foreground">
                    Enero 20, 2027
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar documentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="relative min-w-[200px]">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  {doc.category}
                </span>
              </div>

              <h3 className="mb-2">{doc.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {doc.description}
              </p>

              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Descargar PDF</span>
              </button>
            </motion.div>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              No se encontraron documentos con los criterios de búsqueda.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
