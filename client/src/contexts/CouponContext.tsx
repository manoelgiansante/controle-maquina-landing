import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CouponModal } from "@/components/CouponModal";

const STORAGE_KEY = "rumo_coupon_shown";
const APP_URL = "https://app.controledemaquina.com.br";

// Links externos (lojas de apps)
const EXTERNAL_LINKS = {
  ios: "https://apps.apple.com/br/app/controle-de-maquina/id6754709677",
  android: "https://play.google.com/store/apps/details?id=com.manoel.controledemaquina",
};

interface CouponContextType {
  handleCTAClick: (path?: string) => void;
  handleExternalClick: (url: string) => void;
  isFirstVisit: boolean;
}

const CouponContext = createContext<CouponContextType | undefined>(undefined);

export function CouponProvider({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState(false);
  const [pendingRedirect, setPendingRedirect] = useState<string>("");
  const [isExternalRedirect, setIsExternalRedirect] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem(STORAGE_KEY);
    setIsFirstVisit(!alreadyShown);
  }, []);

  // Para links internos do app (login, register, etc)
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
      setPendingRedirect(`${APP_URL}${path}`);
      setIsExternalRedirect(false);
      setShowModal(true);
    } else {
      window.location.href = `${APP_URL}${path}`;
    }
  };

  // Para links externos (App Store, Google Play)
  const handleExternalClick = (url: string) => {
    if (isFirstVisit) {
      setPendingRedirect(url);
      setIsExternalRedirect(true);
      setShowModal(true);
    } else {
      window.open(url, '_blank');
    }
  };

  const handleContinue = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setShowModal(false);
    setIsFirstVisit(false);
    
    if (isExternalRedirect) {
      window.open(pendingRedirect, '_blank');
    } else {
      window.location.href = pendingRedirect;
    }
  };

  return (
    <CouponContext.Provider value={{ handleCTAClick, handleExternalClick, isFirstVisit }}>
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
