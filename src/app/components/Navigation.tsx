import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Quiénes Somos", path: "/about" },
    { name: "Noticias", path: "/news" },
    { name: "Documentos", path: "/documents" },
    { name: "Contacto", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <GraduationCap className="h-8 w-8" />
            <div>
              <div className="font-semibold">Colegio C.D.R.</div>
              <div className="text-xs opacity-90">San José del Guaviare</div>
            </div>
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive(item.path) ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className="px-4 py-2 rounded-md bg-secondary hover:bg-secondary/90 transition-colors ml-2"
            >
              Admin
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-white/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md ${
                  isActive(item.path) ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md bg-secondary hover:bg-secondary/90"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
