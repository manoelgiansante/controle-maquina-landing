import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Apple, Play, Globe } from "lucide-react";
import { useCoupon } from "@/contexts/CouponContext";

// Links das lojas de aplicativos
const APP_LINKS = {
  ios: "https://apps.apple.com/br/app/controle-de-maquina/id6754709677",
  android: "https://play.google.com/store/apps/details?id=com.manoel.controledemaquina",
  web: "https://app.controledemaquina.com.br",
};

export default function CTASection() {
  const { t } = useTranslation();
  const { handleCTAClick, handleExternalClick } = useCoupon();

  return (
    <>
      {/* Download Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="section-label mb-4 inline-flex">Download</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('downloadSection.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('downloadSection.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
              {/* iOS */}
              <button
                onClick={() => handleExternalClick(APP_LINKS.ios)}
                className="flex items-center gap-4 bg-black text-white p-5 rounded-2xl hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Apple className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-60 font-medium">Download</div>
                  <div className="text-lg font-bold">{t('downloadSection.ios.label')}</div>
                  <div className="text-xs opacity-60">{t('downloadSection.ios.description')}</div>
                </div>
              </button>
              
              {/* Android */}
              <button
                onClick={() => handleExternalClick(APP_LINKS.android)}
                className="flex items-center gap-4 bg-black text-white p-5 rounded-2xl hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Play className="w-7 h-7 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-60 font-medium">Download</div>
                  <div className="text-lg font-bold">{t('downloadSection.android.label')}</div>
                  <div className="text-xs opacity-60">{t('downloadSection.android.description')}</div>
                </div>
              </button>
              
              {/* Web */}
              <button
                onClick={() => handleCTAClick("/login?mode=register")}
                className="flex items-center gap-4 bg-primary text-primary-foreground p-5 rounded-2xl hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-60 font-medium">Acessar</div>
                  <div className="text-lg font-bold">{t('downloadSection.web.label')}</div>
                  <div className="text-xs opacity-60">{t('downloadSection.web.description')}</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight">
              {t('ctaSection.title')}
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              {t('ctaSection.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-10 py-7 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 font-bold"
                onClick={() => handleCTAClick()}
              >
                {t('ctaSection.button')}
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80 pt-4">
              <span className="flex items-center gap-1.5">✓ {t('ctaSection.benefits.free')}</span>
              <span className="flex items-center gap-1.5">✓ {t('ctaSection.benefits.noCard')}</span>
              <span className="flex items-center gap-1.5">✓ {t('ctaSection.benefits.cancel')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Rumo Maquinas" className="w-8 h-8 rounded-lg" />
                <h3 className="font-extrabold text-lg tracking-tight">{t('app.name', { defaultValue: 'Rumo Maquinas' })}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('footerSection.description')}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">{t('footerSection.product')}</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#funcionalidades" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t('footerSection.features')}
                  </a>
                </li>
                <li>
                  <a href="#precos" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t('footerSection.prices')}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">{t('footerSection.company')}</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://controledemaquina.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t('footerSection.about')}
                  </a>
                </li>
                <li>
                  <a href="https://controledemaquina.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t('footerSection.contact')}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">{t('footerSection.legal')}</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://controledemaquina.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t('footerSection.terms')}
                  </a>
                </li>
                <li>
                  <a href="https://controledemaquina.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
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
