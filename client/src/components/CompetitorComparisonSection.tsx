import { Check, X, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const competitors = [
  {
    name: "Controle de Máquina",
    logo: "🚜",
    price: "R$ 249",
    priceValue: 249,
    features: {
      machines: "Até 50",
      fuelControl: true,
      maintenanceControl: true,
      tankControl: true,
      dashboard: true,
      anomalyDetection: true,
      operators: true,
      areas: true,
      gps: true,
      workOrders: true,
      excel: true,
      multiProperty: true,
      support: "Prioritário",
    },
    highlight: true,
  },
  {
    name: "Fleetio",
    logo: "🇺🇸",
    price: "~R$ 700",
    priceValue: 700,
    features: {
      machines: "Ilimitado",
      fuelControl: true,
      maintenanceControl: true,
      tankControl: false,
      dashboard: true,
      anomalyDetection: false,
      operators: true,
      areas: false,
      gps: true,
      workOrders: true,
      excel: true,
      multiProperty: true,
      support: "Email",
    },
    highlight: false,
  },
  {
    name: "Aegro",
    logo: "🇧🇷",
    price: "~R$ 529",
    priceValue: 529,
    features: {
      machines: "Limitado",
      fuelControl: true,
      maintenanceControl: true,
      tankControl: false,
      dashboard: true,
      anomalyDetection: false,
      operators: false,
      areas: true,
      gps: false,
      workOrders: false,
      excel: true,
      multiProperty: true,
      support: "Email",
    },
    highlight: false,
  },
  {
    name: "AGRIVI",
    logo: "🇪🇺",
    price: "~R$ 2.500",
    priceValue: 2500,
    features: {
      machines: "Ilimitado",
      fuelControl: true,
      maintenanceControl: true,
      tankControl: false,
      dashboard: true,
      anomalyDetection: false,
      operators: true,
      areas: true,
      gps: true,
      workOrders: true,
      excel: true,
      multiProperty: true,
      support: "Prioritário",
    },
    highlight: false,
  },
];

const featureLabels: Record<string, string> = {
  machines: "Máquinas",
  fuelControl: "Controle de combustível",
  maintenanceControl: "Controle de manutenção",
  tankControl: "Controle de tanque",
  dashboard: "Dashboard com gráficos",
  anomalyDetection: "Detecção de anomalias",
  operators: "Gestão de operadores",
  areas: "Gestão de áreas",
  gps: "GPS tracking",
  workOrders: "Ordens de serviço",
  excel: "Exportação Excel",
  multiProperty: "Múltiplas propriedades",
  support: "Suporte",
};

export default function CompetitorComparisonSection() {
  const handleCTA = () => {
    window.location.href = "https://app.controledemaquina.com.br/login?mode=register";
  };

  const calculateSavings = (competitorPrice: number) => {
    const ourPrice = 249;
    const savings = competitorPrice - ourPrice;
    const percentage = ((savings / competitorPrice) * 100).toFixed(0);
    return { savings, percentage };
  };

  return (
    <section id="comparacao-concorrentes" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher o Controle de Máquina?
          </h2>
          <p className="text-lg text-muted-foreground">
            Compare funcionalidades e preços com as principais soluções do mercado
          </p>
        </div>

        {/* Economia Destacada */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <TrendingDown className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Economize até R$ 5.412/ano</h3>
                  <p className="text-muted-foreground">Comparado com o Fleetio (plano equivalente)</p>
                </div>
              </div>
              <Button size="lg" onClick={handleCTA} className="whitespace-nowrap">
                Começar Agora
              </Button>
            </div>
          </div>
        </div>

        {/* Tabela de Comparação - Desktop */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left p-4 font-semibold">Funcionalidade</th>
                {competitors.map((comp, idx) => (
                  <th
                    key={idx}
                    className={`text-center p-4 ${
                      comp.highlight
                        ? "bg-primary/10 border-x-2 border-primary"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-3xl">{comp.logo}</span>
                      <span className="font-bold">{comp.name}</span>
                      <span className={`text-lg ${comp.highlight ? "text-primary font-bold" : "text-muted-foreground"}`}>
                        {comp.price}/mês
                      </span>
                      {comp.highlight && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                          Melhor Custo-Benefício
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(featureLabels).map(([key, label], idx) => (
                <tr
                  key={idx}
                  className={`border-b border-border hover:bg-muted/30 transition-colors ${
                    idx % 2 === 0 ? "bg-muted/10" : ""
                  }`}
                >
                  <td className="p-4 font-medium">{label}</td>
                  {competitors.map((comp, compIdx) => {
                    const value = comp.features[key as keyof typeof comp.features];
                    return (
                      <td
                        key={compIdx}
                        className={`p-4 text-center ${
                          comp.highlight ? "bg-primary/5" : ""
                        }`}
                      >
                        {typeof value === "boolean" ? (
                          value ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold">{value}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards - Mobile */}
        <div className="lg:hidden space-y-6">
          {competitors.map((comp, idx) => (
            <div
              key={idx}
              className={`bg-card border-2 rounded-xl p-6 ${
                comp.highlight
                  ? "border-primary shadow-xl"
                  : "border-border"
              }`}
            >
              <div className="text-center mb-6">
                <span className="text-4xl mb-2 block">{comp.logo}</span>
                <h3 className="text-xl font-bold mb-1">{comp.name}</h3>
                <p className={`text-2xl font-bold ${comp.highlight ? "text-primary" : ""}`}>
                  {comp.price}/mês
                </p>
                {comp.highlight && (
                  <span className="inline-block mt-2 text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    Melhor Custo-Benefício
                  </span>
                )}
                {!comp.highlight && comp.priceValue > 249 && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {calculateSavings(comp.priceValue).percentage}% mais caro
                  </p>
                )}
              </div>
              <ul className="space-y-3">
                {Object.entries(featureLabels).map(([key, label], featureIdx) => {
                  const value = comp.features[key as keyof typeof comp.features];
                  return (
                    <li key={featureIdx} className="flex items-center justify-between">
                      <span className="text-sm">{label}</span>
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

        {/* CTA Final */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Todas as funcionalidades que você precisa, pelo melhor preço do mercado
          </p>
          <Button size="lg" onClick={handleCTA} className="text-lg px-8">
            Começar Teste Grátis por 14 Dias
          </Button>
        </div>
      </div>
    </section>
  );
}
