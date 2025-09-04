import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductPreview from "@/components/ProductPreview";
import ValuesBanner from "@/components/ValuesBanner";
import ProductRange from "@/components/ProductRange";
import CTABanner from "@/components/CTABanner";
import Community from "@/components/Community";
import UseCases from "@/components/UseCases";
import TestRideBanner from "@/components/TestRideBanner";
import DealerCTA from "@/components/DealerCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValuesBanner />
        <CTABanner />
        <ProductPreview />
        <TestRideBanner />
        <ProductRange />
        <UseCases />
        <Community />
        <DealerCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
