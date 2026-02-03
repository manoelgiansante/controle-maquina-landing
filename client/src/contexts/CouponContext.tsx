import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CouponModal } from "@/components/CouponModal";

const STORAGE_KEY = "rumo_coupon_shown";
const APP_URL = "https://app.controledemaquina.com.br";

interface CouponContextType {
  handleCTAClick: (path?: string) => void;
}

const CouponContext = createContext<CouponContextType | undefined>(undefined);

export function CouponProvider({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState(false);
  const [pendingRedirect, setPendingRedirect] = useState<string>("/login?mode=register");
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem(STORAGE_KEY);
    setIsFirstVisit(!alreadyShown);
  }, []);

  const handleCTAClick = (path: string = "/login?mode=register") => {
    // Dispara eventos no Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Criar Conta - Teste Grátis',
        content_category: 'Signup',
        value: 0,
        currency: 'BRL'
      });

      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Teste Grátis - PIX',
        content_category: 'Subscription',
        value: 19.90,
        currency: 'BRL',
        payment_method: 'PIX'
      });
    }

    // Se é primeira visita, mostra o modal
    if (isFirstVisit) {
      setPendingRedirect(path);
      setShowModal(true);
    } else {
      window.location.href = `${APP_URL}${path}`;
    }
  };

  const handleContinue = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setShowModal(false);
    setIsFirstVisit(false);
    window.location.href = `${APP_URL}${pendingRedirect}`;
  };

  return (
    <CouponContext.Provider value={{ handleCTAClick }}>
      {children}
      <CouponModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onContinue={handleContinue}
      />
    </CouponContext.Provider>
  );
}

export function useCoupon() {
  const context = useContext(CouponContext);
  if (!context) {
    throw new Error("useCoupon must be used within CouponProvider");
  }
  return context;
}
