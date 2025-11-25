import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Funciona no iOS e Android?",
    answer:
      "Sim! O Controle de Máquina está disponível para Web, iOS e Android com sincronização automática entre todos os dispositivos.",
  },
  {
    question: "Preciso de internet?",
    answer:
      "Não! O app funciona offline e sincroniza automaticamente quando a conexão voltar. Você pode registrar abastecimentos e manutenções mesmo sem internet.",
  },
  {
    question: "Como funciona o GPS Controle de Máquina?",
    answer:
      "No plano Pro, você visualiza suas máquinas no mapa em tempo real, cria áreas/talhões, configura alertas de perímetro (quando a máquina sai da área) e alertas de velocidade. Também pode importar arquivos KML se já tiver suas áreas mapeadas!",
  },
  {
    question: "O que são alertas de perímetro?",
    answer:
      "Alertas de perímetro avisam você por notificação push quando uma máquina sai ou entra em uma área definida. Perfeito para evitar uso não autorizado e monitorar onde suas máquinas estão trabalhando!",
  },
  {
    question: "Quantas máquinas posso cadastrar?",
    answer:
      "No Plano Básico você pode cadastrar até 10 máquinas. No Plano Pro até 50 máquinas. No Enterprise, o número é ILIMITADO!",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Você pode cancelar em 1 clique durante os 7 dias grátis, sem burocracia e sem precisar falar com ninguém. Não pedimos cartão de crédito no teste.",
  },
  {
    question: "Como funcionam os alertas de manutenção?",
    answer:
      "Alertas amarelos quando faltam 10% para revisão, vermelhos quando vence. Você recebe notificações por email e push no celular. Além disso, recebe um email diário às 21h com resumo completo!",
  },
  {
    question: "Posso importar áreas de arquivos KML?",
    answer:
      "Sim! Se você já tem suas áreas/talhões mapeados em arquivos KML (do Google Earth ou outros sistemas), pode importar diretamente no app. O sistema cria as áreas automaticamente sem precisar desenhar no mapa!",
  },
  {
    question: "Posso registrar custos de manutenção?",
    answer:
      "Sim! Você pode registrar cada item da manutenção separadamente (óleo, filtros, peças, mão de obra) com quantidade e preço. O sistema calcula o total automaticamente!",
  },
  {
    question: "Como funciona o controle de tanque?",
    answer:
      "Você registra as entradas de combustível no tanque com preço por litro. O sistema calcula automaticamente o preço médio ponderado e desconta quando você abastece as máquinas. Alertas automáticos quando o nível ficar baixo!",
  },
  {
    question: "Posso exportar relatórios?",
    answer:
      "Sim! Você pode exportar relatórios de manutenções, abastecimentos e custos em PDF (todos os planos) ou Excel/CSV (planos pagos). Filtre por período e máquina!",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o Controle de Máquina
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
