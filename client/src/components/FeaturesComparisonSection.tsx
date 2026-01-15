import { Check, X, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

type PlanId = 'free' | 'basic' | 'pro' | 'enterprise';

interface FeatureItem {
  key: string;
  free: boolean | string;
  basic: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

interface FeatureCategory {
  categoryKey: string;
  items: FeatureItem[];
}

const features: FeatureCategory[] = [
  {
    categoryKey: "basicControl",
    items: [
      { key: "fuelControl", free: true, basic: true, pro: true, enterprise: true },
      { key: "maintenanceControl", free: true, basic: true, pro: true, enterprise: true },
      { key: "tankControl", free: true, basic: true, pro: true, enterprise: true },
      { key: "maintenanceAlerts", free: true, basic: true, pro: true, enterprise: true },
      { key: "basicReports", free: true, basic: true, pro: true, enterprise: true },
      { key: "offlineMode", free: true, basic: true, pro: true, enterprise: true },
    ],
  },
  {
    categoryKey: "fleetManagement",
    items: [
      { key: "tireManagement", free: false, basic: true, pro: true, enterprise: true },
      { key: "machineChecklists", free: false, basic: true, pro: true, enterprise: true },
      { key: "dashboardCharts", free: false, basic: true, pro: true, enterprise: true },
      { key: "exportExcelPdf", free: false, basic: true, pro: true, enterprise: true },
      { key: "advancedReports", free: false, basic: true, pro: true, enterprise: true },
    ],
  },
  {
    categoryKey: "gpsMonitoring",
    items: [
      { key: "gpsRealtime", free: false, basic: false, pro: true, enterprise: true },
      { key: "routeHistory", free: false, basic: false, pro: true, enterprise: true },
      { key: "geofences", free: false, basic: false, pro: true, enterprise: true },
      { key: "speedAlerts", free: false, basic: false, pro: true, enterprise: true },
      { key: "iotAlerts", free: false, basic: false, pro: true, enterprise: true },
      { key: "importKml", free: false, basic: false, pro: true, enterprise: true },
    ],
  },
  {
    categoryKey: "notifications",
    items: [
      { key: "pushNotifications", free: false, basic: false, pro: true, enterprise: true },
      { key: "emailAlerts", free: false, basic: false, pro: true, enterprise: true },
      { key: "whatsappAlerts", free: false, basic: false, pro: true, enterprise: true },
      { key: "scheduledReports", free: false, basic: false, pro: true, enterprise: true },
    ],
  },
  {
    categoryKey: "advancedManagement",
    items: [
      { key: "operatorManagement", free: false, basic: false, pro: true, enterprise: true },
      { key: "cnhControl", free: false, basic: false, pro: true, enterprise: true },
      { key: "workOrders", free: false, basic: false, pro: true, enterprise: true },
      { key: "anomalyDetection", free: false, basic: false, pro: true, enterprise: true },
      { key: "areaManagement", free: false, basic: false, pro: true, enterprise: true },
      { key: "costPerHectare", free: false, basic: false, pro: true, enterprise: true },
      { key: "activityCost", free: false, basic: false, pro: true, enterprise: true },
      { key: "multipleProperties", free: false, basic: false, pro: true, enterprise: true },
      { key: "chatbotAI", free: true, basic: true, pro: true, enterprise: true },
    ],
  },
  {
    categoryKey: "collaborators",
    items: [
      { key: "employeeLogin", free: false, basic: false, pro: true, enterprise: true },
      { key: "auditLog", free: false, basic: false, pro: true, enterprise: true },
      { key: "limitedPermissions", free: false, basic: false, pro: true, enterprise: true },
    ],
  },
  {
    categoryKey: "enterprise",
    items: [
      { key: "unlimitedMachines", free: false, basic: false, pro: false, enterprise: true },
      { key: "unlimitedProperties", free: false, basic: false, pro: false, enterprise: true },
      { key: "unlimitedUsers", free: false, basic: false, pro: false, enterprise: true },
      { key: "iotIntegration", free: false, basic: false, pro: false, enterprise: true },
      { key: "financialManagement", free: false, basic: false, pro: false, enterprise: true },
      { key: "fullApi", free: false, basic: false, pro: false, enterprise: true },
      { key: "customReports", free: false, basic: false, pro: false, enterprise: true },
    ],
  },
  {
    categoryKey: "limits",
    items: [
      { key: "machines", free: "3", basic: "10", pro: "50", enterprise: "unlimited" },
      { key: "gpsIncluded", free: "0", basic: "0", pro: "1", enterprise: "3" },
      { key: "properties", free: "1", basic: "1", pro: "5", enterprise: "unlimited" },
      { key: "users", free: "1", basic: "2", pro: "10", enterprise: "unlimited" },
    ],
  },
];

const PLAN_IDS: PlanId[] = ['free', 'basic', 'pro', 'enterprise'];

export default function FeaturesComparisonSection() {
  const { t } = useTranslation();

  const handleCTA = (planId: string) => {
    if (planId === "enterprise") {
      const message = t('whatsapp.message');
      window.location.href = `https://wa.me/5517997497208?text=${encodeURIComponent(message)}`;
    } else {
      window.location.href = "https://app.controledemaquina.com.br/login?mode=register&plan=" + planId;
    }
  };

  const getPlanBadge = (planId: PlanId) => {
    if (planId === 'pro') return { text: t('comparisonSection.plans.pro.badge'), icon: Star, popular: true };
    if (planId === 'enterprise') return { text: t('comparisonSection.plans.enterprise.badge'), icon: Zap, popular: false };
    return null;
  };

  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
          <Check className="w-4 h-4 text-green-600" />
        </div>
      ) : (
        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
          <X className="w-4 h-4 text-gray-400" />
        </div>
      );
    }
    return (
      <span className="font-bold text-sm bg-primary/10 text-primary px-4 py-1.5 rounded-full">
        {value === "unlimited" ? t('comparisonSection.features.unlimited') : value}
      </span>
    );
  };

  return (
    <section id="comparacao" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            {t('comparisonSection.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('comparisonSection.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('comparisonSection.subtitle')}
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
            {/* Plan Headers */}
            <div className="grid grid-cols-5">
              <div className="p-6 bg-muted/50 border-b border-r border-border">
                <h3 className="font-bold text-lg text-foreground">{t('comparisonSection.allFeatures')}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t('comparisonSection.allFeaturesSubtitle')}</p>
              </div>
              {PLAN_IDS.map((planId, idx) => {
                const badge = getPlanBadge(planId);
                const isPopular = planId === 'pro';
                return (
                  <div 
                    key={planId} 
                    className={`p-6 text-center border-b border-border ${idx < PLAN_IDS.length - 1 ? 'border-r' : ''} ${isPopular ? 'bg-primary' : 'bg-muted/30'}`}
                  >
                    {badge && (
                      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-3 ${badge.popular ? 'bg-yellow-400 text-yellow-900' : 'bg-orange-400 text-white'}`}>
                        <badge.icon className="w-3 h-3" />
                        {badge.text}
                      </div>
                    )}
                    <h4 className={`font-bold text-xl ${isPopular ? 'text-white' : 'text-foreground'}`}>
                      {t(`comparisonSection.plans.${planId}.name`)}
                    </h4>
                    <div className={`text-3xl font-bold mt-2 ${isPopular ? 'text-white' : 'text-foreground'}`}>
                      {t(`comparisonSection.plans.${planId}.price`)}
                      <span className={`text-sm font-normal ${isPopular ? 'text-white/70' : 'text-muted-foreground'}`}>
                        {t(`comparisonSection.plans.${planId}.period`)}
                      </span>
                    </div>
                    <p className={`text-sm mt-1 ${isPopular ? 'text-white/70' : 'text-muted-foreground'}`}>
                      {t(`comparisonSection.plans.${planId}.description`)}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Features */}
            {features.map((category, catIdx) => (
              <div key={catIdx}>
                {/* Category Header */}
                <div className="grid grid-cols-5 bg-muted/70">
                  <div className="col-span-5 px-6 py-3 border-b border-border">
                    <h5 className="font-bold text-sm uppercase tracking-wider text-primary">
                      {t(`comparisonSection.categories.${category.categoryKey}`)}
                    </h5>
                  </div>
                </div>
                
                {/* Category Items */}
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="grid grid-cols-5 border-b border-border hover:bg-muted/30 transition-colors"
                  >
                    <div className="p-4 flex items-center border-r border-border">
                      <span className="text-sm font-medium">{t(`comparisonSection.features.${item.key}`)}</span>
                    </div>
                    {PLAN_IDS.map((planId, planIdx) => {
                      const value = item[planId];
                      const isPopular = planId === 'pro';
                      return (
                        <div 
                          key={planId} 
                          className={`p-4 flex items-center justify-center ${planIdx < PLAN_IDS.length - 1 ? 'border-r border-border' : ''} ${isPopular ? 'bg-primary/5' : ''}`}
                        >
                          {renderValue(value)}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}

            {/* CTA Row */}
            <div className="grid grid-cols-5 bg-muted/30">
              <div className="p-6 border-r border-border"></div>
              {PLAN_IDS.map((planId, idx) => {
                const isPopular = planId === 'pro';
                return (
                  <div 
                    key={planId} 
                    className={`p-6 flex items-center justify-center ${idx < PLAN_IDS.length - 1 ? 'border-r border-border' : ''} ${isPopular ? 'bg-primary/5' : ''}`}
                  >
                    <Button
                      onClick={() => handleCTA(planId)}
                      size="lg"
                      variant={isPopular ? "default" : "outline"}
                      className={`w-full font-semibold ${isPopular ? 'shadow-lg' : ''}`}
                    >
                      {planId === "enterprise" ? t('comparisonSection.ctaEnterprise') : t('comparisonSection.ctaButton')}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {PLAN_IDS.map((planId) => {
            const badge = getPlanBadge(planId);
            const isPopular = planId === 'pro';
            return (
              <div 
                key={planId} 
                className={`bg-card rounded-2xl border-2 ${isPopular ? 'border-primary shadow-xl' : 'border-border shadow-md'} overflow-hidden`}
              >
                {/* Card Header */}
                <div className={`p-6 ${isPopular ? 'bg-primary' : 'bg-muted/30'}`}>
                  {badge && (
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-3 ${badge.popular ? 'bg-yellow-400 text-yellow-900' : 'bg-orange-400 text-white'}`}>
                      <badge.icon className="w-3 h-3" />
                      {badge.text}
                    </span>
                  )}
                  <h3 className={`font-bold text-2xl ${isPopular ? 'text-white' : 'text-foreground'}`}>
                    {t(`comparisonSection.plans.${planId}.name`)}
                  </h3>
                  <div className={`text-4xl font-bold mt-2 ${isPopular ? 'text-white' : 'text-foreground'}`}>
                    {t(`comparisonSection.plans.${planId}.price`)}
                    <span className={`text-base font-normal ${isPopular ? 'text-white/70' : 'text-muted-foreground'}`}>
                      {t(`comparisonSection.plans.${planId}.period`)}
                    </span>
                  </div>
                  <p className={`text-sm mt-2 ${isPopular ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {t(`comparisonSection.plans.${planId}.description`)}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {features.map((category, catIdx) => (
                    <div key={catIdx} className="mb-6 last:mb-0">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-primary mb-3 pb-2 border-b border-border">
                        {t(`comparisonSection.categories.${category.categoryKey}`)}
                      </h4>
                      <ul className="space-y-3">
                        {category.items.map((item, itemIdx) => {
                          const value = item[planId];
                          return (
                            <li key={itemIdx} className="flex items-center justify-between">
                              <span className="text-sm">{t(`comparisonSection.features.${item.key}`)}</span>
                              {typeof value === "boolean" ? (
                                value ? (
                                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-green-600" />
                                  </div>
                                ) : (
                                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                                    <X className="w-3.5 h-3.5 text-gray-400" />
                                  </div>
                                )
                              ) : (
                                <span className="font-bold text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                                  {value === "unlimited" ? t('comparisonSection.features.unlimited') : value}
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}

                  <Button
                    onClick={() => handleCTA(planId)}
                    size="lg"
                    variant={isPopular ? "default" : "outline"}
                    className="w-full mt-6 font-semibold"
                  >
                    {planId === "enterprise" ? t('comparisonSection.ctaEnterprise') : t('comparisonSection.ctaButton')}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Text */}
        <div className="text-center mt-12 p-6 bg-card rounded-xl border border-border">
          <p className="text-muted-foreground">
            {t('comparisonSection.helpText')}{" "}
            <a 
              href="https://wa.me/5517997497208" 
              className="text-primary font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('comparisonSection.helpLink')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
