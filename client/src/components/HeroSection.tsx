import { Button } from "@/components/ui/button";
import { Check, MapPin, Shield, Zap, ArrowRight, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCoupon } from "@/contexts/CouponContext";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const { handleCTAClick } = useCoupon();

  const isSpanish = i18n.language?.startsWith('es');
  const videoId = isSpanish ? 'WPSSo9Qc3gY' : 'ooa6azIu1Qk';
  const videoTitle = isSpanish 
    ? 'Rumo Maquinas - ¡Deja de perder diésel!' 
    : 'Rumo Maquinas - Pare de perder diesel!';

  const benefits = [
    { icon: MapPin, textKey: "hero.benefits.gps" },
    { icon: Shield, textKey: "hero.benefits.alerts" },
    { icon: Zap, textKey: "hero.benefits.offline" },
    { icon: Check, textKey: "hero.benefits.platforms" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-16 md:pt-36 md:pb-28">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="section-label">
              <MapPin className="w-4 h-4" />
              <span>{t('hero.badge')}</span>
              <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full font-bold">{t('hero.year')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground">
              {t('hero.title')}{" "}
              <span className="gradient-text">{t('hero.titleHighlight')}</span>{" "}
              {t('hero.titleEnd')}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {t('hero.description')}{" "}
              <span className="font-bold text-foreground">{t('hero.descriptionHighlight')}</span>{" "}
              {t('hero.descriptionEnd')}
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.textKey} className="flex items-center gap-3 bg-card/60 backdrop-blur-sm rounded-lg p-2.5 border border-border/50">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{t(benefit.textKey)}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 gap-2"
                onClick={() => handleCTAClick()}
              >
                {t('hero.ctaStart')}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 hover:bg-muted/50 transition-all duration-200"
                onClick={() => {
                  document.getElementById("funcionalidades")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t('hero.ctaFeatures')}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-foreground ml-1">4.9/5</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span>✓ Sem cartão de crédito</span>
              <div className="h-4 w-px bg-border hidden sm:block" />
              <span className="hidden sm:inline">✓ Cancele quando quiser</span>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-xl opacity-60" />
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-border">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
