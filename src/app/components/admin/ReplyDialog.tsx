import { useState } from "react";
import { Send, X } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface ReplyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  recipientName: string;
  messageSubject: string;
  onReplySent: (content: string) => void;
}

export function ReplyDialog({
  isOpen,
  onClose,
  recipientName,
  messageSubject,
  onReplySent,
}: ReplyDialogProps) {
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (!content.trim()) {
      toast.error("Escribe una respuesta");
      return;
    }

    onReplySent(content);
    toast.success("Respuesta guardada");
    setContent("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Responder a {recipientName}</DialogTitle>
          <DialogDescription>
            <div className="space-y-2 mt-4">
              <p className="text-sm">
                <span className="font-semibold">Asunto:</span> Re: {messageSubject}
              </p>
              <p className="text-xs text-muted-foreground">
                La respuesta se guardará localmente en el panel
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Textarea
            placeholder="Escribe tu respuesta aquí..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className="resize-none"
          />

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={onClose}>
              <X className="h-4 w-4 mr-2" />
              Cancelar
            </Button>
            <Button onClick={handleSave} disabled={!content.trim()}>
              <Send className="h-4 w-4 mr-2" />
              Guardar Respuesta
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
