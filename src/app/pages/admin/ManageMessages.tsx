import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Mail, MailOpen, Trash2, Calendar, Reply } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../components/ui/button";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminSectionHeader from "../../components/admin/AdminSectionHeader";
import { ReplyDialog } from "../../components/admin/ReplyDialog";
import { useData } from "../../hooks/useData";
import { ContactMessage } from "../../types";

export default function ManageMessages() {
  const { data: messages, update, delete: remove } = useData<ContactMessage>("messages");
  const [selectedMessageId, setSelectedMessageId] = useState<number | null>(
    messages[0]?.id ?? null,
  );
  const [replyDialogOpen, setReplyDialogOpen] = useState(false);

  const selectedMessage = useMemo(
    () => messages.find((msg) => msg.id === selectedMessageId) ?? null,
    [messages, selectedMessageId],
  );

  const unreadCount = messages.filter((msg) => !msg.read).length;

  const handleSelectMessage = (id: number) => {
    const message = messages.find((m) => m.id === id);
    if (!message) return;

    setSelectedMessageId(id);

    if (!message.read) {
      update(id, { read: true });
      toast.success("Mensaje marcado como leído");
    }
  };

  const handleDelete = (id: number) => {
    remove(id);
    if (selectedMessageId === id) {
      setSelectedMessageId(
        messages.filter((msg) => msg.id !== id)[0]?.id ?? null,
      );
    }
    toast.success("Mensaje eliminado");
  };

  const handleReplySent = (replyContent: string) => {
    if (!selectedMessage) return;

    const newReplies = [
      ...(selectedMessage.replies || []),
      {
        date: new Date().toLocaleDateString("es-CO"),
        content: replyContent,
      },
    ];

    update(selectedMessageId!, { replies: newReplies });
  };

  return (
    <AdminLayout
      title="Mensajes de Contacto"
      subtitle="Responde y administra la comunicación"
      activeSection="messages"
      action={
        <Button variant="secondary" size="sm" disabled>
          Nuevos: {unreadCount}
        </Button>
      }
    >
      <AdminSectionHeader
        title="Bandeja de entrada"
        description={
          unreadCount > 0
            ? `${unreadCount} mensaje(s) sin leer`
            : "Todos los mensajes leídos"
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Lista */}
        <div className="lg:col-span-1 rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
          <div className="border-b border-border bg-muted p-5">
            <h3 className="text-base font-semibold">Mensajes</h3>
          </div>

          <div className="max-h-[650px] overflow-y-auto">
            {messages.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                <p>No hay mensajes</p>
              </div>
            ) : (
              messages.map((message, idx) => (
                <motion.button
                  key={message.id}
                  type="button"
                  onClick={() => handleSelectMessage(message.id)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className={`w-full text-left border-b border-border px-5 py-4 transition-colors ${
                    selectedMessageId === message.id ? "bg-muted" : "hover:bg-muted/80"
                  } ${!message.read ? "bg-accent/10" : ""}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium truncate ${!message.read ? "text-foreground" : "text-foreground/70"}`}>
                        {message.name}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {message.subject}
                      </p>
                    </div>
                    {!message.read && (
                      <div className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    )}
                  </div>
                </motion.button>
              ))
            )}
          </div>
        </div>

        {/* Detalle */}
        <div className="lg:col-span-2">
          {selectedMessage ? (
            <motion.div
              key={selectedMessage.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden flex flex-col h-full"
            >
              <div className="border-b border-border bg-muted p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{selectedMessage.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedMessage.email}</p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDelete(selectedMessage.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Asunto</h4>
                  <p className="text-foreground/80">{selectedMessage.subject}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Mensaje</h4>
                  <p className="text-foreground/80 whitespace-pre-wrap leading-relaxed">
                    {selectedMessage.message}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedMessage.date}</span>
                </div>

                {selectedMessage.replies && selectedMessage.replies.length > 0 && (
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4">Respuestas ({selectedMessage.replies.length})</h4>
                    <div className="space-y-4">
                      {selectedMessage.replies.map((reply, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="bg-muted/50 rounded-lg p-4 border border-border/50"
                        >
                          <p className="text-xs text-muted-foreground mb-2">📝 {reply.date}</p>
                          <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                            {reply.content}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-border p-6 bg-muted/30">
                <Button
                  onClick={() => setReplyDialogOpen(true)}
                  className="w-full"
                >
                  <Reply className="h-4 w-4 mr-2" />
                  Agregar Respuesta
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="rounded-3xl border border-border bg-card shadow-sm h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Selecciona un mensaje</p>
            </div>
          )}
        </div>
      </div>

      {selectedMessage && (
        <ReplyDialog
          isOpen={replyDialogOpen}
          onClose={() => setReplyDialogOpen(false)}
          recipientName={selectedMessage.name}
          messageSubject={selectedMessage.subject}
          onReplySent={handleReplySent}
        />
      )}
    </AdminLayout>
  );
}
