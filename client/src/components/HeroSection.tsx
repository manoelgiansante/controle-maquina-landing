import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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

            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Quanto diesel você está{" "}
              <span className="text-primary">perdendo</span> SEM saber?
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Controle total da sua frota agrícola em tempo real. Economize até{" "}
              <span className="font-bold text-accent">30% em combustível</span> e nunca mais perca uma manutenção.
            </p>

            {/* Benefits List */}
            <div className="space-y-3">
              {[
                "7 dias grátis",
                "Sem cartão de crédito",
                "Cancele quando quiser",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
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
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <p className="text-sm text-muted-foreground">Economia Média</p>
              <p className="text-2xl font-bold text-primary">30%</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <p className="text-sm text-muted-foreground">Máquinas</p>
              <p className="text-2xl font-bold text-accent">10.000+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
