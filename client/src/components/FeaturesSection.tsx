import { Fuel, Bell, Mail, Droplet, Wrench, Building2, Smartphone, TrendingDown, FileText } from "lucide-react";

const features = [
  {
    icon: Fuel,
    title: "Gestão Completa de Tanque",
    description:
      "Monitore seu tanque em tempo real com preço médio automático. Alertas quando o nível ficar baixo. Controle total do combustível!",
  },
  {
    icon: Wrench,
    title: "Custos por Item em Manutenções",
    description:
      "Registre cada item da manutenção separadamente: óleo, filtros, peças, mão de obra. Saiba exatamente quanto gastou em cada serviço!",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description:
      "Alertas amarelos quando faltam 10% para revisão, vermelhos quando vence. Notificações por email e push no celular!",
  },
  {
    icon: Mail,
    title: "Email Diário às 21h",
    description:
      "Receba automaticamente um resumo completo todos os dias: status de máquinas, alertas, consumo e custos. Sem precisar abrir o app!",
  },
  {
    icon: Droplet,
    title: "Consumo por Máquina",
    description:
      "Veja consumo médio em L/h de cada máquina. Compare eficiência, identifique desperdícios e otimize sua frota!",
  },
  {
    icon: Building2,
    title: "Múltiplas Propriedades",
    description:
      "Gerencie várias fazendas com dados 100% isolados. Cada propriedade tem suas próprias máquinas, tanque e relatórios!",
  },
  {
    icon: Smartphone,
    title: "Funciona Offline",
    description:
      "Registre abastecimentos e manutenções sem internet. Sincroniza automaticamente quando a conexão voltar. Web, iOS e Android!",
  },
  {
    icon: TrendingDown,
    title: "Relatórios em PDF/Excel",
    description:
      "Exporte relatórios completos de manutenções, abastecimentos e custos. Filtre por período e máquina. Perfeito para contabilidade!",
  },
];

export default function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-muted-foreground">
            Funcionalidades pensadas para facilitar o seu dia a dia no campo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group space-y-4 p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
