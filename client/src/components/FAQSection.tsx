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
      "Sim! O Controle de Máquina está disponível para Web, iOS e Android com sincronização automática entre todos os dispositivos. Você recebe notificações Push diretamente no celular!",
  },
  {
    question: "Preciso de internet?",
    answer:
      "Não! O app funciona offline e sincroniza automaticamente quando a conexão voltar. Você pode registrar abastecimentos, manutenções e checklists mesmo sem internet.",
  },
  {
    question: "Quantos GPS estão incluídos em cada plano?",
    answer:
      "No Plano Pro você tem 1 rastreador GPS incluso, no Enterprise 3 GPS inclusos, e no Prestador Pro 2 GPS inclusos. Se precisar de mais GPS, pode contratar adicional: Pro R$20/mês, Enterprise R$15/mês, Prestador R$18/mês por máquina.",
  },
  {
    question: "Como funciona o GPS Controle de Máquina?",
    answer:
      "Oferecemos rastreadores GPS em modelo de comodato com R$300 de caução reembolsável. Cada plano já inclui GPS: Pro (1), Enterprise (3), Prestador (2). GPS extras variam de R$15 a R$20/mês por máquina conforme o plano. Visualize em tempo real no mapa, histórico de trajetos e alertas!",
  },
  {
    question: "O que são alertas de perímetro?",
    answer:
      "Alertas de perímetro avisam você por Push, WhatsApp ou Email quando uma máquina sai ou entra em uma área definida. Perfeito para evitar uso não autorizado e monitorar onde suas máquinas estão trabalhando!",
  },
  {
    question: "Quais tipos de notificação vocês enviam?",
    answer:
      "Você pode receber alertas por 3 canais: Push Notification direto no celular (iOS e Android), WhatsApp e Email. Configure quais alertas quer receber em cada canal e defina horários de silêncio!",
  },
  {
    question: "O que é a detecção de anomalias?",
    answer:
      "O sistema usa inteligência artificial para detectar automaticamente consumos de combustível fora do padrão. Se uma máquina que normalmente consome 10L/h aparece com 25L/h, você recebe um alerta para investigar possível furto ou problema mecânico!",
  },
  {
    question: "Como funcionam os alertas por WhatsApp?",
    answer:
      "No plano Pro, você pode configurar alertas para chegarem via WhatsApp além de email e push. Manutenção vencida, anomalia detectada, máquina saindo do perímetro - tudo direto no seu WhatsApp!",
  },
  {
    question: "O que são checklists de máquinas?",
    answer:
      "Checklists permitem que operadores façam inspeções diárias padronizadas antes de ligar a máquina: nível de óleo, pressão dos pneus, condição do equipamento, etc. Tudo registrado com fotos e assinatura!",
  },
  {
    question: "Como funciona a gestão de pneus?",
    answer:
      "Você cadastra cada pneu da máquina com modelo, medida, sulcagem e data de instalação. O sistema alerta quando está na hora de rodízio, calibragem ou substituição. Controle total do custo por km rodado!",
  },
  {
    question: "O que é controle de CNH?",
    answer:
      "Você cadastra a CNH de cada operador com data de validade. O sistema alerta quando a CNH está vencendo e bloqueia o operador de ser vinculado a máquinas com CNH vencida. Evite multas e problemas!",
  },
  {
    question: "Quantas máquinas posso cadastrar?",
    answer:
      "No Plano Gratuito até 3 máquinas. No Básico até 10, no Pro até 50 e no Enterprise ILIMITADO!",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Você pode cancelar em 1 clique durante os 7 dias grátis, sem burocracia e sem precisar falar com ninguém. Não pedimos cartão de crédito no teste.",
  },
  {
    question: "Como funcionam os alertas de manutenção?",
    answer:
      "Alertas amarelos quando faltam 10% para revisão, vermelhos quando vence. Você recebe notificações por email, push e WhatsApp. Além disso, recebe um email diário às 21h com resumo completo!",
  },
  {
    question: "Posso importar áreas de arquivos KML?",
    answer:
      "Sim! Se você já tem suas áreas/talhões mapeados em arquivos KML (do Google Earth ou outros sistemas), pode importar diretamente no app. O sistema cria as áreas automaticamente sem precisar desenhar no mapa!",
  },
  {
    question: "Posso registrar custos de manutenção?",
    answer:
      "Sim! Você pode registrar cada item da manutenção separadamente (óleo, filtros, peças, mão de obra) com quantidade e preço. O sistema calcula o total automaticamente e mostra o TCO (custo total de propriedade) e custo por hectare!",
  },
  {
    question: "Como funciona o controle de tanque?",
    answer:
      "Você registra as entradas de combustível no tanque com preço por litro. O sistema calcula automaticamente o preço médio ponderado e desconta quando você abastece as máquinas. Alertas automáticos quando o nível ficar baixo!",
  },
  {
    question: "Posso exportar relatórios?",
    answer:
      "Sim! Você pode exportar relatórios de manutenções, abastecimentos, custos, checklists e anomalias em PDF ou Excel/CSV. Crie relatórios customizados e agende envio automático por email!",
  },
  {
    question: "Posso dar acesso para meus funcionários?",
    answer:
      "Sim! No plano Pro você pode criar login para até 10 funcionários com permissões limitadas. Eles podem registrar abastecimentos e manutenções, mas não veem relatórios financeiros. Todas as ações ficam registradas na auditoria!",
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
