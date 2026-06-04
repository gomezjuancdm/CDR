import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, MailOpen, Trash2, Calendar } from 'lucide-react';
import { contactMessagesData } from '../../data/mockData';
import { toast } from 'sonner';

export default function ManageMessages() {
  const [messages, setMessages] = useState(contactMessagesData);
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);

  const handleMarkAsRead = (id: number) => {
    setMessages(messages.map(msg =>
      msg.id === id ? { ...msg, read: true } : msg
    ));
    toast.success('Mensaje marcado como leído');
  };

  const handleDelete = (id: number) => {
    setMessages(messages.filter(msg => msg.id !== id));
    setSelectedMessage(null);
    toast.success('Mensaje eliminado correctamente');
  };

  const unreadCount = messages.filter(m => !m.read).length;

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
        <div className="mb-8">
          <h1 className="mb-2">Mensajes de Contacto</h1>
          <p className="text-muted-foreground">
            {unreadCount > 0 ? `${unreadCount} mensajes sin leer` : 'Todos los mensajes leídos'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-muted border-b border-border">
              <h3>Bandeja de Entrada</h3>
            </div>
            <div className="divide-y divide-border max-h-[600px] overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setSelectedMessage(message.id);
                    if (!message.read) {
                      handleMarkAsRead(message.id);
                    }
                  }}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedMessage === message.id ? 'bg-muted' : 'hover:bg-muted/50'
                  } ${!message.read ? 'bg-accent/10' : ''}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {message.read ? (
                        <MailOpen className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Mail className="h-4 w-4 text-primary" />
                      )}
                      <p className={message.read ? '' : 'font-semibold'}>
                        {message.name}
                      </p>
                    </div>
                    {!message.read && (
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                    )}
                  </div>
                  <p className="text-sm mb-1">{message.subject}</p>
                  <p className="text-xs text-muted-foreground">
                    {message.message.substring(0, 50)}...
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground mt-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(message.date).toLocaleDateString('es-CO')}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-card rounded-lg shadow-lg">
            {selectedMessage ? (
              <div className="h-full flex flex-col">
                {(() => {
                  const message = messages.find(m => m.id === selectedMessage);
                  if (!message) return null;

                  return (
                    <>
                      <div className="p-6 border-b border-border">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h2 className="mb-2">{message.subject}</h2>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>De: {message.name}</span>
                              <span>{message.email}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleDelete(message.id)}
                            className="p-2 hover:bg-muted rounded transition-colors"
                          >
                            <Trash2 className="h-5 w-5 text-destructive" />
                          </button>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(message.date).toLocaleDateString('es-CO', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      </div>

                      <div className="flex-1 p-6">
                        <p className="leading-relaxed">{message.message}</p>
                      </div>

                      <div className="p-6 border-t border-border">
                        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                          Responder
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center p-12 text-center">
                <div>
                  <Mail className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Selecciona un mensaje para ver su contenido
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
