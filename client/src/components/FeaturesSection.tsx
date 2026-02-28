import { Bell, Droplet, Wrench, Smartphone, MapPin, Shield, ClipboardCheck, CircleDot, AlertTriangle, BarChart3, MessageCircle, Users, Bot, Wheat } from "lucide-react";
import { useTranslation } from "react-i18next";

const FEATURE_KEYS = [
  { key: 'gps', icon: MapPin },
  { key: 'geofence', icon: Shield },
  { key: 'whatsapp', icon: MessageCircle },
  { key: 'anomaly', icon: AlertTriangle },
  { key: 'chatbot', icon: Bot },
  { key: 'activityCost', icon: Wheat },
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
    <section id="funcionalidades" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label mb-4 inline-flex">Funcionalidades</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4">
            {t('featuresSection.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('featuresSection.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURE_KEYS.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.key}
                className="group relative space-y-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold">
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
