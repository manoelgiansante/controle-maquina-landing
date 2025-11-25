import { Check, X } from "lucide-react";

const features = [
  {
    category: "Controle Básico",
    items: [
      { name: "Controle de abastecimento", free: true, basic: true, pro: true, enterprise: true, provider: true },
      { name: "Controle de manutenção", free: true, basic: true, pro: true, enterprise: true, provider: true },
      { name: "Controle de tanque", free: true, basic: true, pro: true, enterprise: true, provider: true },
      { name: "Alertas de manutenção", free: true, basic: true, pro: true, enterprise: true, provider: true },
      { name: "Relatórios básicos", free: true, basic: true, pro: true, enterprise: true, provider: true },
    ],
  },
  {
    category: "GPS e Monitoramento",
    items: [
      { name: "GPS Controle de Máquina", free: false, basic: false, pro: true, enterprise: true, provider: true },
      { name: "Alertas de perímetro", free: false, basic: false, pro: true, enterprise: true, provider: true },
      { name: "Alertas de velocidade", free: false, basic: false, pro: true, enterprise: true, provider: true },
      { name: "Criação de áreas/talhões", free: false, basic: false, pro: true, enterprise: true, provider: true },
      { name: "Importar arquivos KML", free: false, basic: false, pro: true, enterprise: true, provider: true },
      { name: "Notificações push", free: false, basic: false, pro: true, enterprise: true, provider: true },
    ],
  },
  {
    category: "Inteligência e Análise",
    items: [
      { name: "Dashboard com gráficos", free: false, basic: true, pro: true, enterprise: true, provider: true },
      { name: "Relatórios avançados", free: false, basic: true, pro: true, enterprise: true, provider: true },
      { name: "Exportação Excel/CSV", free: false, basic: true, pro: true, enterprise: true, provider: true },
      { name: "Detecção de anomalias", free: false, basic: false, pro: true, enterprise: true, provider: true },
      { name: "Análise de custos detalhada", free: false, basic: false, pro: true, enterprise: true, provider: true },
      { name: "Custo por hectare", free: false, basic: false, pro: true, enterprise: true, provider: true },
    ],
  },
  {
    category: "Gestão",
    items: [
      { name: "Gestão de operadores", free: false, basic: false, pro: true, enterprise: true, provider: true },
      { name: "Gestão de áreas/talhões", free: false, basic: false, pro: true, enterprise: true, provider: true },
      { name: "Ordens de serviço", free: false, basic: false, pro: true, enterprise: true, provider: true },
      { name: "Múltiplas propriedades", free: false, basic: false, pro: true, enterprise: true, provider: true },
      { name: "Múltiplos usuários", free: false, basic: false, pro: true, enterprise: true, provider: true },
    ],
  },
  {
    category: "Avançado",
    items: [
      { name: "Integração IoT", free: false, basic: false, pro: false, enterprise: true, provider: false },
      { name: "Gestão financeira", free: false, basic: false, pro: false, enterprise: true, provider: false },
      { name: "API completa", free: false, basic: false, pro: false, enterprise: true, provider: false },
      { name: "Relatórios customizados", free: false, basic: false, pro: false, enterprise: true, provider: false },
    ],
  },
  {
    category: "Prestadores de Serviço",
    items: [
      { name: "Multi-cliente (multi-tenant)", free: false, basic: false, pro: false, enterprise: false, provider: true },
      { name: "Faturamento automatizado", free: false, basic: false, pro: false, enterprise: false, provider: true },
      { name: "Gestão de contratos", free: false, basic: false, pro: false, enterprise: false, provider: true },
      { name: "Relatórios para clientes", free: false, basic: false, pro: false, enterprise: false, provider: true },
      { name: "Portal do cliente", free: false, basic: false, pro: false, enterprise: false, provider: true },
    ],
  },
  {
    category: "Suporte",
    items: [
      { name: "Suporte por email", free: false, basic: true, pro: true, enterprise: true, provider: true },
      { name: "Suporte prioritário", free: false, basic: false, pro: true, enterprise: true, provider: true },
      { name: "Suporte 24/7", free: false, basic: false, pro: false, enterprise: true, provider: false },
      { name: "Gerente de conta dedicado", free: false, basic: false, pro: false, enterprise: true, provider: false },
    ],
  },
  {
    category: "Limites",
    items: [
      { name: "Máquinas", free: "3", basic: "10", pro: "50", enterprise: "∞", provider: "∞" },
      { name: "Propriedades", free: "1", basic: "1", pro: "5", enterprise: "∞", provider: "∞" },
      { name: "Usuários", free: "1", basic: "2", pro: "10", enterprise: "∞", provider: "20" },
    ],
  },
];

const plans = [
  { id: "free", name: "Gratuito", color: "text-gray-600" },
  { id: "basic", name: "Básico", color: "text-blue-600" },
  { id: "pro", name: "Pro", color: "text-purple-600" },
  { id: "enterprise", name: "Enterprise", color: "text-orange-600" },
  { id: "provider", name: "Prestador", color: "text-green-600" },
];

export default function FeaturesComparisonSection() {
  return (
    <section id="comparacao" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compare todos os planos
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja em detalhes o que cada plano oferece e escolha o ideal para você
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left p-4 font-semibold">Funcionalidade</th>
                {plans.map((plan) => (
                  <th key={plan.id} className={`text-center p-4 font-semibold ${plan.color}`}>
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((category, catIdx) => (
                <>
                  <tr key={`cat-${catIdx}`} className="bg-muted/50">
                    <td colSpan={6} className="p-4 font-bold text-sm uppercase tracking-wide">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((item, itemIdx) => (
                    <tr key={`item-${catIdx}-${itemIdx}`} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="p-4">{item.name}</td>
                      <td className="p-4 text-center">
                        {typeof item.free === "boolean" ? (
                          item.free ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold">{item.free}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof item.basic === "boolean" ? (
                          item.basic ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold">{item.basic}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof item.pro === "boolean" ? (
                          item.pro ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold">{item.pro}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof item.enterprise === "boolean" ? (
                          item.enterprise ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold">{item.enterprise}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof item.provider === "boolean" ? (
                          item.provider ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold">{item.provider}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {plans.map((plan) => (
            <div key={plan.id} className="bg-card border-2 border-border rounded-xl p-6">
              <h3 className={`text-2xl font-bold mb-6 ${plan.color}`}>{plan.name}</h3>
              {features.map((category, catIdx) => (
                <div key={catIdx} className="mb-6">
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-3 text-muted-foreground">
                    {category.category}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIdx) => {
                      const value = item[plan.id as keyof typeof item];
                      return (
                        <li key={itemIdx} className="flex items-center justify-between">
                          <span className="text-sm">{item.name}</span>
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            ) : (
                              <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            )
                          ) : (
                            <span className="font-semibold text-sm">{value}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
