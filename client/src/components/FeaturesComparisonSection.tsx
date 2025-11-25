import { Check, X, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    category: "Controle Básico",
    items: [
      { name: "Controle de abastecimento", free: true, basic: true, pro: true, enterprise: true },
      { name: "Controle de manutenção", free: true, basic: true, pro: true, enterprise: true },
      { name: "Controle de tanque", free: true, basic: true, pro: true, enterprise: true },
      { name: "Alertas de manutenção", free: true, basic: true, pro: true, enterprise: true },
      { name: "Relatórios básicos", free: true, basic: true, pro: true, enterprise: true },
    ],
  },
  {
    category: "GPS e Monitoramento",
    items: [
      { name: "GPS em tempo real", free: false, basic: false, pro: true, enterprise: true },
      { name: "Alertas de perímetro", free: false, basic: false, pro: true, enterprise: true },
      { name: "Alertas de velocidade", free: false, basic: false, pro: true, enterprise: true },
      { name: "Criação de áreas/talhões", free: false, basic: false, pro: true, enterprise: true },
      { name: "Importar arquivos KML", free: false, basic: false, pro: true, enterprise: true },
      { name: "Notificações push", free: false, basic: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Análise e Relatórios",
    items: [
      { name: "Dashboard com gráficos", free: false, basic: true, pro: true, enterprise: true },
      { name: "Relatórios avançados", free: false, basic: true, pro: true, enterprise: true },
      { name: "Exportação Excel/PDF", free: false, basic: true, pro: true, enterprise: true },
      { name: "Análise de consumo", free: false, basic: false, pro: true, enterprise: true },
      { name: "Custo por hectare", free: false, basic: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Gestão Avançada",
    items: [
      { name: "Gestão de operadores", free: false, basic: false, pro: true, enterprise: true },
      { name: "Múltiplas propriedades", free: false, basic: false, pro: true, enterprise: true },
      { name: "Múltiplos usuários", free: false, basic: false, pro: true, enterprise: true },
      { name: "Integração IoT", free: false, basic: false, pro: false, enterprise: true },
      { name: "API completa", free: false, basic: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Limites",
    items: [
      { name: "Máquinas", free: "3", basic: "10", pro: "50", enterprise: "Ilimitado" },
      { name: "Propriedades", free: "1", basic: "1", pro: "5", enterprise: "Ilimitado" },
      { name: "Usuários", free: "1", basic: "2", pro: "10", enterprise: "Ilimitado" },
    ],
  },
];

const plans = [
  { 
    id: "free", 
    name: "Gratuito", 
    price: "R$ 0",
    period: "/mês",
    description: "Para começar",
    popular: false,
  },
  { 
    id: "basic", 
    name: "Básico", 
    price: "R$ 79",
    period: "/mês",
    description: "Pequenos produtores",
    popular: false,
  },
  { 
    id: "pro", 
    name: "Pro", 
    price: "R$ 249",
    period: "/mês",
    description: "Médios produtores",
    popular: true,
    badge: { text: "Mais Popular", icon: Star },
  },
  { 
    id: "enterprise", 
    name: "Enterprise", 
    price: "R$ 599",
    period: "/mês",
    description: "Grandes operações",
    popular: false,
    badge: { text: "Completo", icon: Zap },
  },
];

export default function FeaturesComparisonSection() {
  const handleCTA = (planId: string) => {
    if (planId === "enterprise") {
      window.location.href = "https://wa.me/5517997497208?text=Olá! Quero saber mais sobre o plano Enterprise";
    } else {
      window.location.href = "https://app.controledemaquina.com.br/login?mode=register&plan=" + planId;
    }
  };

  return (
    <section id="comparacao" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Comparativo Completo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-lg text-muted-foreground">
            Compare todas as funcionalidades e encontre o plano perfeito para sua operação
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
            {/* Plan Headers */}
            <div className="grid grid-cols-5">
              <div className="p-6 bg-muted/50 border-b border-r border-border">
                <h3 className="font-bold text-lg text-foreground">Funcionalidades</h3>
                <p className="text-sm text-muted-foreground mt-1">Tudo que você precisa</p>
              </div>
              {plans.map((plan, idx) => (
                <div 
                  key={plan.id} 
                  className={`p-6 text-center relative border-b border-border ${idx < plans.length - 1 ? 'border-r' : ''} ${plan.popular ? 'bg-primary' : 'bg-muted/30'}`}
                >
                  {plan.badge && (
                    <div className={`absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md ${plan.popular ? 'bg-yellow-400 text-yellow-900' : 'bg-orange-400 text-white'}`}>
                      <plan.badge.icon className="w-3 h-3" />
                      {plan.badge.text}
                    </div>
                  )}
                  <h4 className={`font-bold text-xl ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.name}
                  </h4>
                  <div className={`text-3xl font-bold mt-2 ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.price}
                    <span className={`text-sm font-normal ${plan.popular ? 'text-white/70' : 'text-muted-foreground'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${plan.popular ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Features */}
            {features.map((category, catIdx) => (
              <div key={catIdx}>
                {/* Category Header */}
                <div className="grid grid-cols-5 bg-muted/70">
                  <div className="col-span-5 px-6 py-3 border-b border-border">
                    <h5 className="font-bold text-sm uppercase tracking-wider text-primary">
                      {category.category}
                    </h5>
                  </div>
                </div>
                
                {/* Category Items */}
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="grid grid-cols-5 border-b border-border hover:bg-muted/30 transition-colors"
                  >
                    <div className="p-4 flex items-center border-r border-border">
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    {plans.map((plan, planIdx) => {
                      const value = item[plan.id as keyof typeof item];
                      return (
                        <div 
                          key={plan.id} 
                          className={`p-4 flex items-center justify-center ${planIdx < plans.length - 1 ? 'border-r border-border' : ''} ${plan.popular ? 'bg-primary/5' : ''}`}
                        >
                          {typeof value === "boolean" ? (
                            value ? (
                              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
                                <Check className="w-4 h-4 text-green-600" />
                              </div>
                            ) : (
                              <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                                <X className="w-4 h-4 text-gray-400" />
                              </div>
                            )
                          ) : (
                            <span className="font-bold text-sm bg-primary/10 text-primary px-4 py-1.5 rounded-full">
                              {value}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}

            {/* CTA Row */}
            <div className="grid grid-cols-5 bg-muted/30">
              <div className="p-6 border-r border-border"></div>
              {plans.map((plan, idx) => (
                <div 
                  key={plan.id} 
                  className={`p-6 flex items-center justify-center ${idx < plans.length - 1 ? 'border-r border-border' : ''} ${plan.popular ? 'bg-primary/5' : ''}`}
                >
                  <Button
                    onClick={() => handleCTA(plan.id)}
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                    className={`w-full font-semibold ${plan.popular ? 'shadow-lg' : ''}`}
                  >
                    {plan.id === "enterprise" ? "Falar com Vendas" : "Começar Agora"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-card rounded-2xl border-2 ${plan.popular ? 'border-primary shadow-xl' : 'border-border shadow-md'} overflow-hidden`}
            >
              {/* Card Header */}
              <div className={`p-6 ${plan.popular ? 'bg-primary' : 'bg-muted/30'}`}>
                {plan.badge && (
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-3 ${plan.popular ? 'bg-yellow-400 text-yellow-900' : 'bg-orange-400 text-white'}`}>
                    <plan.badge.icon className="w-3 h-3" />
                    {plan.badge.text}
                  </span>
                )}
                <h3 className={`font-bold text-2xl ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-bold mt-2 ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                  {plan.price}
                  <span className={`text-base font-normal ${plan.popular ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.popular ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {features.map((category, catIdx) => (
                  <div key={catIdx} className="mb-6 last:mb-0">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-primary mb-3 pb-2 border-b border-border">
                      {category.category}
                    </h4>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIdx) => {
                        const value = item[plan.id as keyof typeof item];
                        return (
                          <li key={itemIdx} className="flex items-center justify-between">
                            <span className="text-sm">{item.name}</span>
                            {typeof value === "boolean" ? (
                              value ? (
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                  <Check className="w-3.5 h-3.5 text-green-600" />
                                </div>
                              ) : (
                                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                                  <X className="w-3.5 h-3.5 text-gray-400" />
                                </div>
                              )
                            ) : (
                              <span className="font-bold text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                                {value}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}

                <Button
                  onClick={() => handleCTA(plan.id)}
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full mt-6 font-semibold"
                >
                  {plan.id === "enterprise" ? "Falar com Vendas" : "Começar Agora"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Help Text */}
        <div className="text-center mt-12 p-6 bg-card rounded-xl border border-border">
          <p className="text-muted-foreground">
            Precisa de ajuda para escolher?{" "}
            <a 
              href="https://wa.me/5517997497208" 
              className="text-primary font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com nosso time pelo WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
