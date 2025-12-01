import { Fuel, Bell, Mail, Droplet, Wrench, Building2, Smartphone, TrendingDown, FileText, MapPin, Shield, Gauge, FileUp, MessageCircle, Users, ClipboardCheck, CircleDot, AlertTriangle, Zap, BarChart3, DollarSign } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "GPS em Tempo Real",
    description:
      "Visualize suas máquinas no mapa em tempo real. Histórico de trajetos, velocidade e ignição. Rastreadores em comodato sem fidelidade!",
  },
  {
    icon: Shield,
    title: "Geocercas e Alertas",
    description:
      "Crie áreas permitidas no mapa. Receba alertas quando máquina sair do perímetro. Proteja sua frota contra uso não autorizado!",
  },
  {
    icon: MessageCircle,
    title: "Alertas via WhatsApp",
    description:
      "Receba notificações de manutenção, CNH e anomalias direto no WhatsApp. Configure múltiplos contatos e horários de silêncio!",
  },
  {
    icon: AlertTriangle,
    title: "Detecção de Anomalias",
    description:
      "IA identifica consumo suspeito automaticamente. Detecte erros de lançamento, possível furto ou problemas mecânicos!",
  },
  {
    icon: ClipboardCheck,
    title: "Checklists de Máquinas",
    description:
      "Verificação diária antes de operar. Itens obrigatórios, fotos de evidência. Bloqueie máquina se checklist reprovado!",
  },
  {
    icon: CircleDot,
    title: "Gestão de Pneus",
    description:
      "Controle vida útil, rodízio e inspeções. Alertas de desgaste. Histórico completo de cada pneu. Reduza custos de manutenção!",
  },
  {
    icon: Fuel,
    title: "Tanque Fazenda Inteligente",
    description:
      "Monitore nível em tempo real. Preço médio automático. Alertas de nível baixo. Múltiplos tanques por propriedade!",
  },
  {
    icon: Wrench,
    title: "Manutenção Completa",
    description:
      "Custos detalhados por item: peças, óleo, mão de obra. Alertas por horímetro e data. Vincule com empresas de manutenção!",
  },
  {
    icon: Users,
    title: "Login de Funcionários",
    description:
      "Funcionário acessa sem ver dados financeiros. Auditoria de ações. Controle quem fez o quê e quando!",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description:
      "Alertas visuais: verde, amarelo, vermelho. Push no celular, e-mail e WhatsApp. Nunca perca uma manutenção!",
  },
  {
    icon: BarChart3,
    title: "Relatórios Avançados",
    description:
      "Relatórios customizados, agendados por e-mail. Exportação PDF/Excel. Custo por hectare (TCO). Dados para decidir melhor!",
  },
  {
    icon: Smartphone,
    title: "Funciona 100% Offline",
    description:
      "Registre tudo sem internet. Sincroniza automaticamente. Disponível para Web, iOS e Android. Use em qualquer lugar!",
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
