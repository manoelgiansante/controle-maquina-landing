import { Button } from "@/components/ui/button";
import { Check, MapPin, Shield, Zap } from "lucide-react";

export default function HeroSection() {
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
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge de Novidade */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">NOVO: GPS Controle de Máquina</span>
              <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">2025</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Saiba onde suas máquinas estão{" "}
              <span className="text-primary">agora mesmo</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              GPS em tempo real + alertas de perímetro + controle de combustível. 
              Economize até{" "}
              <span className="font-bold text-accent">30% em diesel</span> e proteja sua frota contra uso não autorizado.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: MapPin, text: "GPS em tempo real" },
                { icon: Shield, text: "Alertas de perímetro" },
                { icon: Zap, text: "7 dias grátis" },
                { icon: Check, text: "Sem cartão" },
              ].map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                onClick={handleCTA}
              >
                Começar Teste Grátis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById("funcionalidades")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver Funcionalidades
              </Button>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-border">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-vF6aiTApWI"
                title="Controle de Máquina - Pare de perder diesel!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg hidden md:block">
              <p className="text-sm text-muted-foreground">Economia Média</p>
              <p className="text-2xl font-bold text-primary">30%</p>
              <p className="text-xs text-muted-foreground">em combustível</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg hidden md:block">
              <p className="text-sm text-muted-foreground">Máquinas</p>
              <p className="text-2xl font-bold text-accent">10.000+</p>
              <p className="text-xs text-muted-foreground">monitoradas</p>
            </div>
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-green-500 text-white rounded-lg px-3 py-2 shadow-lg hidden lg:block">
              <p className="text-xs font-bold">🛡️ Alerta de Perímetro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
