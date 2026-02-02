import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import { Apple, Play } from "lucide-react";

// Links das lojas de aplicativos
const APP_STORE_LINKS = {
  ios: "https://apps.apple.com/br/app/controle-de-maquina/id6754709677",
  android: "https://play.google.com/store/apps/details?id=com.manoel.controledemaquina",
};

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTA = () => {
    // Dispara eventos no Facebook Pixel para otimização de campanhas
    if (typeof window !== 'undefined' && window.fbq) {
      // Evento de Lead
      window.fbq('track', 'Lead', {
        content_name: 'Criar Conta - Teste Grátis',
        content_category: 'Signup',
        value: 0,
        currency: 'BRL'
      });

      // Evento de InitiateCheckout com PIX para conversões
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Teste Grátis - PIX',
        content_category: 'Subscription',
        value: 19.90,
        currency: 'BRL',
        payment_method: 'PIX'
      });
    }
    window.location.href = "https://app.controledemaquina.com.br/login?mode=register";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Rumo Maquinas" className="w-10 h-10 rounded-lg" />
            <span className="font-bold text-lg">Rumo Maquinas</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* App Store Download Buttons */}
            <div className="flex items-center gap-2">
              <a
                href={APP_STORE_LINKS.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Apple className="w-5 h-5" />
                <div className="text-left leading-tight">
                  <div className="text-[8px] opacity-70">Download</div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </a>
              <a
                href={APP_STORE_LINKS.android}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-lg transition-colors ${APP_STORE_LINKS.android === "#" ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
                onClick={(e) => {
                  if (APP_STORE_LINKS.android === "#") {
                    e.preventDefault();
                  }
                }}
              >
                <Play className="w-5 h-5 fill-current" />
                <div className="text-left leading-tight">
                  <div className="text-[8px] opacity-70">{APP_STORE_LINKS.android === "#" ? "Em breve" : "Download"}</div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            <div className="h-6 w-px bg-border" />

            <a
              href="#funcionalidades"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t('navbar.features')}
            </a>
            <a
              href="#precos"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t('navbar.pricing')}
            </a>
            <LanguageSelector />
            <Button variant="outline" size="sm" onClick={() => {
              window.location.href = "https://app.controledemaquina.com.br/login";
            }}>
              {t('navbar.enterApp')}
            </Button>
            <Button size="sm" onClick={handleCTA}>
              {t('navbar.freeTrial')}
            </Button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center gap-2">
            {/* App Store Download Buttons - Mobile */}
            <a
              href={APP_STORE_LINKS.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black text-white p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Download iOS"
            >
              <Apple className="w-5 h-5" />
            </a>
            <a
              href={APP_STORE_LINKS.android}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black text-white p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Download Android"
            >
              <Play className="w-5 h-5 fill-current" />
            </a>
            <Button size="sm" onClick={handleCTA}>
              {t('navbar.freeTrial')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
