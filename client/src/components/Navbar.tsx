import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import { Apple, Play } from "lucide-react";
import { useCoupon } from "@/contexts/CouponContext";

// Links das lojas de aplicativos
const APP_STORE_LINKS = {
  ios: "https://apps.apple.com/br/app/controle-de-maquina/id6754709677",
  android: "https://play.google.com/store/apps/details?id=com.manoel.controledemaquina",
};

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { handleCTAClick, handleExternalClick } = useCoupon();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Rumo Maquinas" className="w-10 h-10 rounded-xl shadow-sm" />
            <span className="font-extrabold text-lg tracking-tight">Rumo Maquinas</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {/* App Store Download Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleExternalClick(APP_STORE_LINKS.ios)}
                className="inline-flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-200"
              >
                <Apple className="w-4 h-4" />
                <div className="text-left leading-tight">
                  <div className="text-[8px] opacity-70">Download</div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </button>
              <button
                onClick={() => handleExternalClick(APP_STORE_LINKS.android)}
                className="inline-flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-200"
              >
                <Play className="w-4 h-4 fill-current" />
                <div className="text-left leading-tight">
                  <div className="text-[8px] opacity-70">Download</div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            <div className="h-6 w-px bg-border/60" />

            <a
              href="#funcionalidades"
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {t('navbar.features')}
            </a>
            <a
              href="#precos"
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {t('navbar.pricing')}
            </a>
            <LanguageSelector />
            <Button variant="outline" size="sm" className="hover:bg-muted/50" onClick={() => handleCTAClick("/login")}>
              {t('navbar.enterApp')}
            </Button>
            <Button size="sm" className="shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200" onClick={() => handleCTAClick()}>
              {t('navbar.freeTrial')}
            </Button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => handleExternalClick(APP_STORE_LINKS.ios)}
              className="inline-flex items-center justify-center bg-black text-white p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Download iOS"
            >
              <Apple className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleExternalClick(APP_STORE_LINKS.android)}
              className="inline-flex items-center justify-center bg-black text-white p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Download Android"
            >
              <Play className="w-5 h-5 fill-current" />
            </button>
            <Button size="sm" className="shadow-md" onClick={() => handleCTAClick()}>
              {t('navbar.freeTrial')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
