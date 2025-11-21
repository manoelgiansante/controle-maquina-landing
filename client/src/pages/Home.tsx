import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSectionNew from "@/components/PricingSectionNew";
import FeaturesComparisonSection from "@/components/FeaturesComparisonSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSectionNew />
      <FeaturesComparisonSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <WhatsAppButton />
    </div>
  );
}
