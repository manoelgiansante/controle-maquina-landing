import { Button } from "@/components/ui/button";
import { Check, MapPin, Shield, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCoupon } from "@/contexts/CouponContext";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const { handleCTAClick } = useCoupon();

  // Vídeo diferente para cada idioma
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
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge de Novidade */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">{t('hero.badge')}</span>
              <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">{t('hero.year')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              {t('hero.title')}{" "}
              <span className="text-primary">{t('hero.titleHighlight')}</span>{" "}
              {t('hero.titleEnd')}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('hero.description')}{" "}
              <span className="font-bold text-accent">{t('hero.descriptionHighlight')}</span>{" "}
              {t('hero.descriptionEnd')}
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <div key={benefit.textKey} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{t(benefit.textKey)}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => handleCTAClick()}
              >
                {t('hero.ctaStart')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById("funcionalidades")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t('hero.ctaFeatures')}
              </Button>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-border">
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
