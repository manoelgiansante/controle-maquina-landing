import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTA = () => {
    // Dispara evento de Lead no Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Criar Conta - Teste Grátis',
        content_category: 'Signup',
        value: 0,
        currency: 'BRL'
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
            <img src="/logo.png" alt="Controle de Máquina" className="w-10 h-10 rounded-lg" />
            <span className="font-bold text-lg">Controle de Máquina</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#funcionalidades"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Funcionalidades
            </a>
            <a
              href="#precos"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Preços
            </a>
            <Button variant="outline" size="sm" onClick={() => {
              window.location.href = "https://app.controledemaquina.com.br/login";
            }}>
              Entrar App
            </Button>
            <Button size="sm" onClick={handleCTA}>
              Teste Grátis
            </Button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <Button size="sm" onClick={handleCTA}>
              Teste Grátis
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
