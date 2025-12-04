import { Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const TESTIMONIAL_KEYS = ['testimonial1', 'testimonial2', 'testimonial3'];

export default function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('testimonialsSection.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('testimonialsSection.subtitle')}
          </p>
        </div>

        {TESTIMONIAL_KEYS.length === 0 ? (
          <div className="text-center py-12 bg-background rounded-lg border border-border">
            <p className="text-lg font-semibold mb-2">
              {t('testimonialsSection.emptyTitle')}
            </p>
            <p className="text-muted-foreground">
              {t('testimonialsSection.emptySubtitle')}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIAL_KEYS.map((key, index) => (
            <div
              key={key}
              className="bg-card border border-border rounded-xl p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                "{t(`testimonialsSection.items.${key}.content`)}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">
                  {t(`testimonialsSection.items.${key}.name`)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t(`testimonialsSection.items.${key}.role`)}
                </p>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>
    </section>
  );
}
