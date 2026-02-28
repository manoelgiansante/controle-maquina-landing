import { AlertCircle, Wrench, FileSpreadsheet, Calendar, MapPinOff, Gauge, ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const PROBLEM_KEYS = [
  { key: 'location', icon: MapPinOff },
  { key: 'fuel', icon: AlertCircle },
  { key: 'breakdown', icon: Wrench },
  { key: 'speed', icon: Gauge },
  { key: 'control', icon: FileSpreadsheet },
  { key: 'maintenance', icon: Calendar },
];

export default function ProblemsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label mb-4 inline-flex">Problemas comuns</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4">
            {t('problemsSection.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('problemsSection.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_KEYS.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.key}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-destructive/60 to-destructive/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/15 group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {t(`problemsSection.items.${problem.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`problemsSection.items.${problem.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>

        <div className="text-center mt-6">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 rounded-2xl px-8 py-6">
            <p className="text-xl font-bold gradient-text mb-1">
              {t('problemsSection.solution.title')}
            </p>
            <p className="text-muted-foreground">
              {t('problemsSection.solution.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
