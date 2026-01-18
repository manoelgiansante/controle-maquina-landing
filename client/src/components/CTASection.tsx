import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function CTASection() {
  const { t } = useTranslation();

  const handleCTA = () => {
    // Dispara eventos no Facebook Pixel para otimização de campanhas
    if (typeof window !== 'undefined' && (window as any).fbq) {
      // Evento de Lead
      (window as any).fbq('track', 'Lead', {
        content_name: 'Criar Conta - Teste Grátis',
        content_category: 'Signup',
        value: 0,
        currency: 'BRL'
      });

      // Evento de InitiateCheckout com PIX para conversões
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Teste Grátis - PIX',
        content_category: 'Subscription',
        value: 19.90,
        currency: 'BRL',
        payment_method: 'PIX'
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
              {t('ctaSection.title')}
            </h2>
            <p className="text-xl text-primary-foreground/90">
              {t('ctaSection.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                onClick={handleCTA}
              >
                {t('ctaSection.button')}
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/80 pt-4">
              <span>✓ {t('ctaSection.benefits.free')}</span>
              <span>✓ {t('ctaSection.benefits.noCard')}</span>
              <span>✓ {t('ctaSection.benefits.cancel')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">{t('app.name', { defaultValue: 'Rumo Máquinas' })}</h3>
              <p className="text-sm text-muted-foreground">
                {t('footerSection.description')}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">{t('footerSection.product')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#funcionalidades" className="hover:text-primary transition-colors">
                    {t('footerSection.features')}
                  </a>
                </li>
                <li>
                  <a href="#precos" className="hover:text-primary transition-colors">
                    {t('footerSection.prices')}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">{t('footerSection.company')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://controledemaquina.com.br" className="hover:text-primary transition-colors">
                    {t('footerSection.about')}
                  </a>
                </li>
                <li>
                  <a href="https://controledemaquina.com.br" className="hover:text-primary transition-colors">
                    {t('footerSection.contact')}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">{t('footerSection.legal')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://controledemaquina.com.br" className="hover:text-primary transition-colors">
                    {t('footerSection.terms')}
                  </a>
                </li>
                <li>
                  <a href="https://controledemaquina.com.br" className="hover:text-primary transition-colors">
                    {t('footerSection.privacy')}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>{t('footerSection.copyright')}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
