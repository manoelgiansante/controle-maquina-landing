import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function HeroSection() {
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
    window.location.href = "https://controledemaquina.com.br/login?mode=register";
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

            {/* Social Proof */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">
                Mais de <span className="font-bold text-foreground">1.230 produtores</span> já economizam com a gente
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  4.9/5 de avaliação
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Video/Image Placeholder */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-background/90 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    Veja como funciona (2 min)
                  </p>
                </div>
              </div>
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
