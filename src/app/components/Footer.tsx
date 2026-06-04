import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { collegeInfo } from '../data/mockData';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4">Contacto</h3>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>{collegeInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>{collegeInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>{collegeInfo.email}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2 text-sm opacity-90">
              <Link to="/about" className="block hover:opacity-100 transition-opacity">
                Quiénes Somos
              </Link>
              <Link to="/news" className="block hover:opacity-100 transition-opacity">
                Noticias y Eventos
              </Link>
              <Link to="/documents" className="block hover:opacity-100 transition-opacity">
                Documentos
              </Link>
              <Link to="/contact" className="block hover:opacity-100 transition-opacity">
                Contacto
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4 text-sm opacity-90">
              <p>Horario de Atención:</p>
              <p>{collegeInfo.schedule}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2026 {collegeInfo.fullName}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
