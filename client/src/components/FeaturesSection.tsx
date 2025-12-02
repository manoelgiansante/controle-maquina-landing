import { Bell, Droplet, Wrench, Smartphone, MapPin, Shield, ClipboardCheck, CircleDot, AlertTriangle, BarChart3, MessageCircle, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const FEATURE_KEYS = [
  { key: 'gps', icon: MapPin },
  { key: 'geofence', icon: Shield },
  { key: 'whatsapp', icon: MessageCircle },
  { key: 'anomaly', icon: AlertTriangle },
  { key: 'checklist', icon: ClipboardCheck },
  { key: 'tires', icon: CircleDot },
  { key: 'tank', icon: Droplet },
  { key: 'maintenance', icon: Wrench },
  { key: 'employees', icon: Users },
  { key: 'alerts', icon: Bell },
  { key: 'reports', icon: BarChart3 },
  { key: 'offline', icon: Smartphone },
];

export default function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section id="funcionalidades" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('featuresSection.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('featuresSection.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURE_KEYS.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.key}
                className="group space-y-4 p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">
                  {t(`featuresSection.items.${feature.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`featuresSection.items.${feature.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
