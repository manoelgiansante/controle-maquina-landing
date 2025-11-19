import { Button } from "@/components/ui/button";

export default function CTASection() {
  const handleCTA = () => {
    // Dispara evento de Lead no Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Criar Conta - Teste Grátis',
        content_category: 'Signup',
        value: 0,
        currency: 'BRL'
      });
    }
    window.location.href = "https://app.controledemaquina.com.br/login?mode=register";
  };

  return (
    <>
      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              Pronto para ter controle total da sua frota?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Comece seu teste grátis de 7 dias agora. Sem cartão. Sem burocracia. Cancele quando quiser.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                onClick={handleCTA}
              >
                Começar Teste Grátis de 7 Dias
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/80 pt-4">
              <span>✓ 7 dias grátis</span>
              <span>✓ Sem cartão</span>
              <span>✓ Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Controle de Máquina</h3>
              <p className="text-sm text-muted-foreground">
                Gestão inteligente de máquinas agrícolas
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#funcionalidades" className="hover:text-primary transition-colors">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#precos" className="hover:text-primary transition-colors">
                    Preços
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://controledemaquina.com.br" className="hover:text-primary transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="https://controledemaquina.com.br" className="hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://controledemaquina.com.br" className="hover:text-primary transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="https://controledemaquina.com.br" className="hover:text-primary transition-colors">
                    Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Controle de Máquina. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
