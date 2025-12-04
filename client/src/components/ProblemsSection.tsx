import { AlertCircle, Wrench, FileSpreadsheet, Calendar, MapPinOff, Gauge } from "lucide-react";
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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t(`problemsSection.items.${problem.key}.title`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`problemsSection.items.${problem.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-primary/10 border border-primary/20 rounded-xl p-6">
            <p className="text-lg font-semibold text-primary mb-2">
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
