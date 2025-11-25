import { FileText, Fuel, TrendingUp, MapPin } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: FileText,
      title: "1. Cadastre suas Máquinas",
      description: "Adicione suas máquinas com nome, tipo e horímetro atual. Leva apenas 2 minutos."
    },
    {
      icon: MapPin,
      title: "2. Crie suas Áreas",
      description: "Desenhe os perímetros no mapa ou importe arquivos KML. Configure alertas de saída."
    },
    {
      icon: Fuel,
      title: "3. Registre Operações",
      description: "Abastecimentos e manutenções em 30 segundos. Funciona offline!"
    },
    {
      icon: TrendingUp,
      title: "4. Economize e Controle",
      description: "Veja tudo em tempo real: localização, consumo, alertas e relatórios."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Funciona em 4 Passos Simples
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece a monitorar sua frota em minutos. Simples assim.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
