import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Clock, Newspaper } from "lucide-react";
import { newsData, eventsData } from "../data/mockData";

export default function News() {
  const [activeTab, setActiveTab] = useState<"news" | "events">("news");

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4">Noticias y Eventos</h1>
            <p className="text-xl opacity-90">
              Mantente informado sobre las actividades de nuestra institución
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex space-x-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("news")}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === "news"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex items-center space-x-2">
              <Newspaper className="h-5 w-5" />
              <span>Noticias</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === "events"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Eventos</span>
            </div>
          </button>
        </div>

        {activeTab === "news" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {newsData.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="md:col-span-1">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(news.date).toLocaleDateString("es-CO", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h2 className="mb-4">{news.title}</h2>
                    <p className="text-muted-foreground mb-4">
                      {news.description}
                    </p>
                    <p className="text-foreground leading-relaxed">
                      {news.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "events" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {eventsData.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="flex-1">{event.name}</h3>
                  <Calendar className="h-6 w-6 text-primary flex-shrink-0 ml-4" />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString("es-CO", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{event.place}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
