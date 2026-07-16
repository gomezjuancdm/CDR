import { motion } from "motion/react";
import { Target, Eye, History, Award, Images } from "lucide-react";
import { collegeInfo } from "../data/mockData";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4">Quiénes Somos</h1>
            <p className="text-xl opacity-90">
              Conoce nuestra institución, historia y compromiso educativo
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-card rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <History className="h-8 w-8 text-primary mr-4" />
              <h2>Nuestra Historia</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {collegeInfo.history}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-primary mr-4" />
              <h2>Misión</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {collegeInfo.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-secondary mr-4" />
              <h2>Visión</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {collegeInfo.vision}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="bg-card rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-accent mr-4" />
              <h2>Niveles Educativos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {collegeInfo.educationLevels.map((level, index) => (
                <div
                  key={index}
                  className="bg-muted rounded-lg p-4 text-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <p>{level}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="md:col-span-1">
              <img
                src={collegeInfo.rector.image}
                alt={collegeInfo.rector.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2 p-8">
              <h2 className="mb-2">{collegeInfo.rector.name}</h2>
              <p className="text-lg opacity-90 mb-6">
                {collegeInfo.rector.title}
              </p>
              <p className="leading-relaxed opacity-90">
                &ldquo;{collegeInfo.rector.message}&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <Images className="h-8 w-8 text-accent mr-4" />
            <h2>Galería del Colegio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collegeInfo.galleryImages.map((image) => (
              <div
                key={image.id}
                className="bg-card rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={image.image}
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-muted rounded-lg p-8"
        >
          <h2 className="mb-6 text-center">Información de Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-muted-foreground mb-2">Teléfono</p>
              <p>{collegeInfo.phone}</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">Correo Electrónico</p>
              <p>{collegeInfo.email}</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">Dirección</p>
              <p>{collegeInfo.address}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
