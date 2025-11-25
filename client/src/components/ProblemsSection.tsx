import { AlertCircle, Wrench, FileSpreadsheet, Calendar, MapPinOff, Gauge } from "lucide-react";

const problems = [
  {
    icon: MapPinOff,
    title: "Cadê a máquina?",
    description: "Não sabe onde suas máquinas estão?",
  },
  {
    icon: AlertCircle,
    title: "Diesel sumindo?",
    description: "Não sabe onde foi o combustível?",
  },
  {
    icon: Wrench,
    title: "Trator parado?",
    description: "Quebrou na hora errada?",
  },
  {
    icon: Gauge,
    title: "Velocidade alta?",
    description: "Máquina correndo demais no campo?",
  },
  {
    icon: FileSpreadsheet,
    title: "Sem controle?",
    description: "Planilha bagunçada e desatualizada?",
  },
  {
    icon: Calendar,
    title: "Esqueceu a revisão?",
    description: "Manutenção vencida de novo?",
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Você reconhece esses problemas?
          </h2>
          <p className="text-lg text-muted-foreground">
            Esses são os desafios que todo produtor enfrenta no dia a dia
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-primary/10 border border-primary/20 rounded-xl p-6">
            <p className="text-lg font-semibold text-primary mb-2">
              ✅ Controle de Máquina resolve tudo isso
            </p>
            <p className="text-muted-foreground">
              Gestão completa em um único aplicativo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
