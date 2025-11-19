import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "19,90",
    priceAnnual: "190,00",
    description: "Perfeito para pequenos produtores",
    features: [
      { text: "Até 10 máquinas", included: true },
      { text: "Controle de tanque", included: true },
      { text: "Manutenções ilimitadas", included: true },
      { text: "Abastecimentos ilimitados", included: true },
      { text: "Alertas de manutenção", included: true },
      { text: "Exportação PDF", included: true },
      { text: "Múltiplas propriedades", included: false },
      { text: "Relatórios avançados", included: false },
      { text: "Exportação Excel/CSV", included: false },
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "49,90",
    priceAnnual: "490,00",
    description: "Para grandes produtores e empresas",
    features: [
      { text: "Máquinas ILIMITADAS", included: true },
      { text: "Todas as funcionalidades do Básico", included: true },
      { text: "Múltiplas propriedades", included: true },
      { text: "Relatórios avançados", included: true },
      { text: "Análise de custos detalhada", included: true },
      { text: "Exportação Excel/CSV", included: true },
      { text: "Gráficos e dashboards", included: true },
      { text: "Notificações push", included: true },
      { text: "Suporte prioritário", included: true },
    ],
    popular: true,
  },
];

export default function PricingSection() {
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
    <section id="precos" className="py-16 md:py-24 bg-background">
      <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quanto custa economizar milhares?
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o plano ideal para o tamanho da sua operação. Planos anuais com 2 meses grátis!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border-2 rounded-2xl p-8 ${
                plan.popular
                  ? "border-primary shadow-xl scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-muted flex items-center justify-center mt-0.5">
                        <X className="w-3.5 h-3.5 text-muted-foreground" />
                      </div>
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={plan.popular ? "default" : "outline"}
                className="w-full text-lg"
                onClick={handleCTA}
              >
                {plan.popular ? "Começar Agora" : "Testar Grátis 7 Dias"}
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
