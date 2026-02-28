import { FileText, Fuel, TrendingUp, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const STEP_KEYS = [
  { key: 'register', icon: FileText },
  { key: 'areas', icon: MapPin },
  { key: 'operations', icon: Fuel },
  { key: 'control', icon: TrendingUp },
];

export default function HowItWorksSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex">Como funciona</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4">
            {t('howItWorksSection.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('howItWorksSection.subtitle')}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEP_KEYS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.key}
                  className="relative bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                >
                  {/* Step number */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shadow-md">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">
                    {t(`howItWorksSection.steps.${step.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {t(`howItWorksSection.steps.${step.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
