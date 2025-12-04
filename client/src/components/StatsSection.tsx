import { Fuel, MapPin, Users, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

const STAT_KEYS = [
  { key: 'machines', icon: MapPin },
  { key: 'fuel', icon: Fuel },
  { key: 'platforms', icon: Smartphone },
  { key: 'producers', icon: Users },
];

export default function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-primary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STAT_KEYS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.key} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {t(`statsSection.items.${stat.key}.value`)}
                </p>
                <p className="text-sm font-semibold text-white/90">
                  {t(`statsSection.items.${stat.key}.label`)}
                </p>
                <p className="text-xs text-white/70">
                  {t(`statsSection.items.${stat.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
