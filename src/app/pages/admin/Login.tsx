import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Lock, User, LogIn, GraduationCap } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { authenticateAdmin, useAuth } from "../../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (authenticateAdmin(credentials.username, credentials.password)) {
      login();
      toast.success("Inicio de sesión exitoso");
      navigate("/admin/dashboard");
      return;
    }

    toast.error("Usuario o contraseña incorrectos");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-card rounded-3xl shadow-2xl overflow-hidden max-w-md w-full"
      >
        <div className="bg-primary text-primary-foreground p-8 text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-4" />
          <h1 className="mb-2 text-3xl font-semibold">Panel Administrativo</h1>
          <p className="opacity-90">Colegio C.D.R.</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium"
              >
                Usuario
              </label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                  className="pl-10"
                  placeholder="Ingresa tu usuario"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Contraseña
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  className="pl-10"
                  placeholder="Ingresa tu contraseña"
                />
              </div>
            </div>

            <Button type="submit" className="w-full justify-center">
              <LogIn className="h-5 w-5" />
              <span>Iniciar Sesión</span>
            </Button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-primary hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div className="mt-8 rounded-3xl bg-muted p-4 text-center text-sm text-muted-foreground">
            Demo: Usuario: <strong className="text-foreground">admin</strong> /
            Contraseña: <strong className="text-foreground">admin123</strong>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
