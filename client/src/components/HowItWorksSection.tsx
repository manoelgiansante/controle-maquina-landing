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
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('howItWorksSection.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('howItWorksSection.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {STEP_KEYS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.key}
                className="bg-background rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {t(`howItWorksSection.steps.${step.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-center">
                  {t(`howItWorksSection.steps.${step.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
