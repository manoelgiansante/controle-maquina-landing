import { FileText, Fuel, TrendingUp } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: FileText,
      title: "1. Cadastre suas Máquinas",
      description: "Adicione suas máquinas com nome, tipo e horímetro atual. Leva apenas 2 minutos."
    },
    {
      icon: Fuel,
      title: "2. Registre Abastecimentos",
      description: "Toda vez que abastecer ou fazer manutenção, registre no app. Leva 30 segundos."
    },
    {
      icon: TrendingUp,
      title: "3. Economize e Controle",
      description: "Veja consumo, receba alertas de manutenção e identifique onde economizar."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Funciona em 3 Passos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simples, rápido e eficiente. Comece a economizar hoje mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
