import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift, Copy, Check, PartyPopper } from "lucide-react";

interface CouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const COUPON_CODE = "RUMO20";
const STORAGE_KEY = "rumo_coupon_shown";

export function CouponModal({ isOpen, onClose, onContinue }: CouponModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COUPON_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback para browsers antigos
      const textArea = document.createElement("textarea");
      textArea.value = COUPON_CODE;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleContinue = () => {
    // Marcar que já mostrou o cupom
    localStorage.setItem(STORAGE_KEY, "true");
    onContinue();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <PartyPopper className="h-8 w-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            🎁 Presente de Boas-Vindas!
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Você ganhou <strong className="text-primary">20% de desconto</strong> no primeiro mês!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Cupom Box */}
          <div className="relative">
            <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-2 border-dashed border-primary/30 rounded-xl p-6">
              <Gift className="h-6 w-6 text-primary" />
              <span className="text-3xl font-bold tracking-widest text-primary">
                {COUPON_CODE}
              </span>
              <button
                onClick={handleCopy}
                className="ml-2 p-2 rounded-lg hover:bg-primary/10 transition-colors"
                title="Copiar cupom"
              >
                {copied ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <Copy className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-center text-sm text-green-600 mt-2 font-medium">
                ✓ Cupom copiado!
              </p>
            )}
          </div>

          {/* Instruções */}
          <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-2">Como usar:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Copie o cupom acima</li>
              <li>Crie sua conta grátis</li>
              <li>Cole o cupom na hora de assinar</li>
            </ol>
          </div>

          {/* CTA */}
          <Button
            size="lg"
            className="w-full text-lg py-6 shadow-lg"
            onClick={handleContinue}
          >
            Criar Minha Conta Grátis →
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Cupom válido para novos usuários. Desconto aplicado no primeiro mês.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Hook para verificar se deve mostrar o cupom
export function useCouponModal() {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem(STORAGE_KEY);
    setShouldShow(!alreadyShown);
  }, []);

  const markAsShown = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setShouldShow(false);
  };

  return { shouldShow, markAsShown };
}
