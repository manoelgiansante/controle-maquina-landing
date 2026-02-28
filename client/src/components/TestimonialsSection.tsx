import { Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const TESTIMONIAL_KEYS = ['testimonial1', 'testimonial2', 'testimonial3'];

export default function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label mb-4 inline-flex">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4">
            {t('testimonialsSection.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('testimonialsSection.subtitle')}
          </p>
        </div>

        {TESTIMONIAL_KEYS.length === 0 ? (
          <div className="text-center py-12 bg-background rounded-2xl border border-border">
            <p className="text-lg font-semibold mb-2">
              {t('testimonialsSection.emptyTitle')}
            </p>
            <p className="text-muted-foreground">
              {t('testimonialsSection.emptySubtitle')}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIAL_KEYS.map((key, index) => {
            const name = t(`testimonialsSection.items.${key}.name`);
            const initials = name.split(' ').map((w: string) => w[0]).join('').slice(0, 2).toUpperCase();
            return (
              <div
                key={key}
                className="group bg-card border border-border rounded-2xl p-8 relative hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="flex gap-0.5 mb-4 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{t(`testimonialsSection.items.${key}.content`)}"
                </p>

                <div className="border-t border-border pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">
                      {name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t(`testimonialsSection.items.${key}.role`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        )}
      </div>
    </section>
  );
}
