import { Button } from "@/components/ui/button";
import { Check, X, Star, Zap } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCoupon } from "@/contexts/CouponContext";

// Stripe Payment Links - BRL (Português)
const STRIPE_PAYMENT_LINKS_BRL = {
  basic: {
    monthly: "https://buy.stripe.com/14AaEX3oVfOi7SYauO5Vu00",
    yearly: "https://buy.stripe.com/9B6bJ12kR8lQ3CIbyS5Vu01"
  },
  pro: {
    monthly: "https://buy.stripe.com/bIY7vjdR70ls5L6dQT",
    yearly: "https://buy.stripe.com/aEU9Dr3ct4BG6PaeUY"
  },
  enterprise: {
    monthly: "https://buy.stripe.com/28o5nbcN30ls4H2289",
    yearly: "https://buy.stripe.com/eVa02NcN35FKdds5ko"
  },
  service_provider: {
    monthly: "https://buy.stripe.com/00gdTH6oF0ls8Xm6os",
    yearly: "https://buy.stripe.com/8wMbLz6oFe8caZA8wB"
  }
};

// Stripe Payment Links - USD (Español) - TODO: Create USD links in Stripe
const STRIPE_PAYMENT_LINKS_USD = {
  basic: {
    monthly: "https://buy.stripe.com/14AaEX3oVfOi7SYauO5Vu00",
    yearly: "https://buy.stripe.com/9B6bJ12kR8lQ3CIbyS5Vu01"
  },
  pro: {
    monthly: "https://buy.stripe.com/bIY7vjdR70ls5L6dQT",
    yearly: "https://buy.stripe.com/aEU9Dr3ct4BG6PaeUY"
  },
  enterprise: {
    monthly: "https://buy.stripe.com/28o5nbcN30ls4H2289",
    yearly: "https://buy.stripe.com/eVa02NcN35FKdds5ko"
  },
  service_provider: {
    monthly: "https://buy.stripe.com/00gdTH6oF0ls8Xm6os",
    yearly: "https://buy.stripe.com/8wMbLz6oFe8caZA8wB"
  }
};

// Plan IDs
const PLAN_IDS = ['free', 'basic', 'pro', 'enterprise', 'serviceProvider'] as const;
type PlanId = typeof PLAN_IDS[number];

// Feature keys for each plan
const PLAN_FEATURES: Record<PlanId, { key: string; included: boolean }[]> = {
  free: [
    { key: 'upTo3Machines', included: true },
    { key: 'fuelControl', included: true },
    { key: 'maintenanceControl', included: true },
    { key: 'tankControl', included: true },
    { key: 'maintenanceAlerts', included: true },
    { key: 'whatsappAlerts', included: true },
    { key: 'basicReports', included: true },
    { key: 'offlineMode', included: true },
    { key: 'dashboard', included: false },
  ],
  basic: [
    { key: 'upTo10Machines', included: true },
    { key: 'allFromPrevious', included: true },
    { key: 'dashboard', included: true },
    { key: 'tireManagement', included: true },
    { key: 'machineChecklists', included: true },
    { key: 'exportExcelPdf', included: true },
    { key: 'advancedReports', included: true },
    { key: 'emailSupport', included: true },
    { key: 'operatorManagement', included: true },
    { key: 'gpsTracking', included: false },
  ],
  pro: [
    { key: 'upTo50Machines', included: true },
    { key: 'allFromPrevious', included: true },
    { key: 'gpsRealtime1', included: true },
    { key: 'geofencesAlerts', included: true },
    { key: 'pushNotifications', included: true },
    { key: 'whatsappEmailAlerts', included: true },
    { key: 'aiAnomalyDetection', included: true },
    { key: 'operatorCnhManagement', included: true },
    { key: 'workOrders', included: true },
    { key: 'costPerHectare', included: true },
    { key: 'multipleProperties5', included: true },
    { key: 'employeeLogin', included: true },
    { key: 'auditLog', included: true },
  ],
  enterprise: [
    { key: 'unlimitedMachines', included: true },
    { key: 'allFromPrevious', included: true },
    { key: 'gpsRealtime3', included: true },
    { key: 'unlimitedProperties', included: true },
    { key: 'unlimitedUsers', included: true },
    { key: 'unlimitedNotifications', included: true },
    { key: 'iotIntegration', included: true },
    { key: 'financialManagement', included: true },
    { key: 'fullApi', included: true },
    { key: 'customReports', included: true },
    { key: 'iotAlerts', included: true },
    { key: 'updatePriority', included: true },
  ],
  serviceProvider: [
    { key: 'unlimitedMachines', included: true },
    { key: 'unlimitedClients', included: true },
    { key: 'gpsRealtime2', included: true },
    { key: 'multiTenant', included: true },
    { key: 'advancedWorkOrders', included: true },
    { key: 'automatedBilling', included: true },
    { key: 'contractManagement', included: true },
    { key: 'clientReports', included: true },
    { key: 'clientPortal', included: true },
    { key: 'upTo20Users', included: true },
  ],
};

export default function PricingSectionNew() {
  const { t, i18n } = useTranslation();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  
  // Detect language for currency
  const isSpanish = i18n.language?.startsWith('es');
  const currency = isSpanish ? '$' : 'R$';
  const paymentLinks = isSpanish ? STRIPE_PAYMENT_LINKS_USD : STRIPE_PAYMENT_LINKS_BRL;
  const { handleCTAClick } = useCoupon();

  const handleCTA = (planId: string) => {
    // Facebook Pixel events
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: `Plano ${planId}`,
        content_category: 'Signup',
        value: 0,
        currency: isSpanish ? 'USD' : 'BRL'
      });

      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: `Plano ${planId}`,
        content_category: 'Subscription',
        value: parseFloat(t(`pricingSection.plans.${planId}.price`)) || 0,
        currency: isSpanish ? 'USD' : 'BRL'
      });
    }

    // Google Analytics Event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'begin_checkout', {
        currency: isSpanish ? 'USD' : 'BRL',
        value: parseFloat(t(`pricingSection.plans.${planId}.price`)) || 0,
        items: [{
          item_id: planId,
          item_name: `Plano ${planId}`,
          price: parseFloat(t(`pricingSection.plans.${planId}.price`)) || 0,
          quantity: 1
        }]
      });
    }

    // Free plan - go directly to app (with coupon modal)
    if (planId === "free") {
      handleCTAClick();
      return;
    }

    // Paid plans - open Stripe Payment Link
    const stripeKey = planId === 'serviceProvider' ? 'service_provider' : planId;
    const links = paymentLinks[stripeKey as keyof typeof paymentLinks];
    if (links) {
      const link = billingPeriod === "monthly" ? links.monthly : links.yearly;
      window.open(link, '_blank');
    } else {
      // Fallback: redirect to app with selected plan
      window.location.href = `https://app.controledemaquina.com.br/login?mode=register&plan=${planId}&billing=${billingPeriod}`;
    }
  };

  const calculateSavings = (planKey: string): number => {
    const monthlyPrice = parseFloat(t(`pricingSection.plans.${planKey}.price`)) || 0;
    const yearlyPrice = parseFloat(t(`pricingSection.plans.${planKey}.priceAnnual`)) || 0;
    return Math.round(monthlyPrice * 12 - yearlyPrice);
  };

  return (
    <section id="precos" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('pricingSection.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('pricingSection.subtitle')}
          </p>

          {/* Toggle Mensal/Anual */}
          <div className="inline-flex items-center gap-4 bg-background border-2 border-border rounded-full p-2">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t('pricingSection.monthly')}
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingPeriod === "yearly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t('pricingSection.yearly')}
              <span className="ml-2 text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full">
                {t('pricingSection.yearlySavings')}
              </span>
            </button>
          </div>
        </div>

        {/* Grid de Planos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[1400px] mx-auto">
          {PLAN_IDS.map((planId) => {
            const planKey = planId;
            const price = t(`pricingSection.plans.${planKey}.price`);
            const priceAnnual = t(`pricingSection.plans.${planKey}.priceAnnual`);
            const badge = t(`pricingSection.plans.${planKey}.badge`, { defaultValue: '' });
            const isPopular = planId === 'pro';
            const isNew = planId === 'serviceProvider';
            const features = PLAN_FEATURES[planId];

            return (
              <div
                key={planId}
                className={`relative bg-card border-2 rounded-2xl p-6 flex flex-col ${
                  isPopular
                    ? "border-primary shadow-2xl lg:scale-105 z-10"
                    : "border-border"
                }`}
              >
                {/* Badge */}
                {badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      {isPopular && <Star className="w-3 h-3" />}
                      {isNew && <Zap className="w-3 h-3" />}
                      {badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">
                    {t(`pricingSection.plans.${planKey}.name`)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t(`pricingSection.plans.${planKey}.description`)}
                  </p>
                  
                  {/* Preço */}
                  <div className="mb-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-muted-foreground">{currency}</span>
                      <span className="text-4xl font-bold text-foreground">
                        {billingPeriod === "monthly" ? price : priceAnnual}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        /{billingPeriod === "monthly" ? t('pricingSection.perMonth') : t('pricingSection.perYear')}
                      </span>
                    </div>
                    
                    {/* Economia no plano anual */}
                    {billingPeriod === "yearly" && price !== "0" && (
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        {t('pricingSection.savingsText', { amount: calculateSavings(planKey) })}
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      {feature.included ? (
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-muted flex items-center justify-center mt-0.5">
                          <X className="w-3 h-3 text-muted-foreground" />
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {t(`pricing.features.${feature.key}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  size="lg"
                  variant={isPopular ? "default" : "outline"}
                  className="w-full"
                  onClick={() => handleCTA(planId)}
                >
                  {t(`pricingSection.plans.${planKey}.cta`)}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Nota de segurança */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            {t('pricingSection.securityNote')}
          </p>
        </div>
      </div>
    </section>
  );
}
