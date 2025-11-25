import { Button } from "@/components/ui/button";
import { Check, X, Star, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    id: "free",
    name: "Gratuito",
    price: "0",
    priceAnnual: "0",
    description: "Para começar e testar",
    badge: null,
    features: [
      { text: "Até 3 máquinas", included: true },
      { text: "Controle de abastecimento", included: true },
      { text: "Controle de manutenção", included: true },
      { text: "Controle de tanque", included: true },
      { text: "Relatórios básicos", included: true },
      { text: "Dashboard com gráficos", included: false },
      { text: "Exportação Excel", included: false },
      { text: "Gestão de operadores", included: false },
      { text: "Detecção de anomalias", included: false },
    ],
    popular: false,
    cta: "Começar Grátis",
  },
  {
    id: "basic",
    name: "Básico",
    price: "79",
    priceAnnual: "787",
    description: "Para pequenos produtores",
    badge: null,
    features: [
      { text: "Até 10 máquinas", included: true },
      { text: "Tudo do Gratuito +", included: true },
      { text: "Dashboard com gráficos", included: true },
      { text: "Exportação Excel", included: true },
      { text: "Relatórios avançados", included: true },
      { text: "Suporte por email", included: true },
      { text: "Gestão de operadores", included: false },
      { text: "Detecção de anomalias", included: false },
      { text: "GPS tracking", included: false },
    ],
    popular: false,
    cta: "Começar Teste Grátis",
  },
  {
    id: "pro",
    name: "Pro",
    price: "249",
    priceAnnual: "2480",
    description: "Para médios e grandes produtores",
    badge: { text: "Mais Popular", icon: Star },
    features: [
      { text: "Até 50 máquinas", included: true },
      { text: "Tudo do Básico +", included: true },
      { text: "GPS Controle de Máquina", included: true },
      { text: "Alertas de perímetro", included: true },
      { text: "Alertas de velocidade", included: true },
      { text: "Criação de áreas/talhões", included: true },
      { text: "Importar arquivos KML", included: true },
      { text: "Gestão de operadores", included: true },
      { text: "Notificações push e email", included: true },
      { text: "Múltiplas propriedades (até 5)", included: true },
    ],
    popular: true,
    cta: "Começar Teste Grátis",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "599",
    priceAnnual: "5966",
    description: "Para grandes operações",
    badge: null,
    features: [
      { text: "Máquinas ILIMITADAS", included: true },
      { text: "Tudo do Pro +", included: true },
      { text: "Propriedades ilimitadas", included: true },
      { text: "Usuários ilimitados", included: true },
      { text: "Integração IoT", included: true },
      { text: "Gestão financeira", included: true },
      { text: "API completa", included: true },
      { text: "Relatórios customizados", included: true },
      { text: "Backup automático", included: true },
      { text: "Prioridade em atualizações", included: true },
    ],
    popular: false,
    cta: "Começar Teste Grátis",
  },
  {
    id: "service_provider",
    name: "Prestador Pro",
    price: "399",
    priceAnnual: "3974",
    description: "Para prestadores de serviço",
    badge: { text: "Novo", icon: Zap },
    features: [
      { text: "Máquinas ilimitadas", included: true },
      { text: "Clientes ilimitados", included: true },
      { text: "GPS Controle completo", included: true },
      { text: "Multi-cliente (multi-tenant)", included: true },
      { text: "Ordens de serviço avançadas", included: true },
      { text: "Faturamento automatizado", included: true },
      { text: "Gestão de contratos", included: true },
      { text: "Relatórios para clientes", included: true },
      { text: "Portal do cliente (web)", included: true },
      { text: "Até 20 usuários", included: true },
    ],
    popular: false,
    cta: "Começar Teste Grátis",
  },
];

export default function PricingSectionNew() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const handleCTA = (planId: string) => {
    // Dispara eventos no Facebook Pixel para otimização de campanhas
    if (typeof window !== 'undefined' && (window as any).fbq) {
      // Evento de Lead
      (window as any).fbq('track', 'Lead', {
        content_name: `Plano ${planId}`,
        content_category: 'Signup',
        value: 0,
        currency: 'BRL'
      });

      // Evento de InitiateCheckout com PIX para conversões
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: `Plano ${planId} - PIX`,
        content_category: 'Subscription',
        value: plans.find(p => p.id === planId)?.price || 0,
        currency: 'BRL',
        payment_method: 'PIX'
      });
    }

    if (planId === "free") {
      window.location.href = "https://app.controledemaquina.com.br/login?mode=register";
    } else {
      window.location.href = "https://app.controledemaquina.com.br/login?mode=register&plan=" + planId;
    }
  };

  const calculateSavings = (monthly: string, yearly: string) => {
    const monthlyCost = parseFloat(monthly) * 12;
    const yearlyCost = parseFloat(yearly);
    const savings = monthlyCost - yearlyCost;
    return savings.toFixed(0);
  };

  return (
    <section id="precos" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Escolha o plano ideal para o tamanho da sua operação. Sem surpresas, sem taxas escondidas.
          </p>

          {/* Toggle Mensal/Anual */}
          <div className="inline-flex items-center gap-4 bg-background border-2 border-border rounded-full p-2">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingPeriod === "yearly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Anual
              <span className="ml-2 text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full">
                Economize 17%
              </span>
            </button>
          </div>
        </div>

        {/* Grid de Planos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[1400px] mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-card border-2 rounded-2xl p-6 flex flex-col ${
                plan.popular
                  ? "border-primary shadow-2xl lg:scale-105 z-10"
                  : "border-border"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    {plan.badge.icon && <plan.badge.icon className="w-3 h-3" />}
                    {plan.badge.text}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                
                {/* Preço */}
                <div className="mb-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className="text-4xl font-bold text-foreground">
                      {billingPeriod === "monthly" ? plan.price : plan.priceAnnual}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      /{billingPeriod === "monthly" ? "mês" : "ano"}
                    </span>
                  </div>
                  
                  {/* Economia no plano anual */}
                  {billingPeriod === "yearly" && plan.price !== "0" && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Economize R$ {calculateSavings(plan.price, plan.priceAnnual)} por ano
                    </p>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {feature.included ? (
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-muted flex items-center justify-center mt-0.5">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                size="lg"
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                onClick={() => handleCTA(plan.id)}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
