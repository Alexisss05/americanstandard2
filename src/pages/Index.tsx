import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CourtsSection from "@/components/CourtsSection";
import PricingSection from "@/components/PricingSection";
import CoachesSection from "@/components/CoachesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CourtsSection />
      <PricingSection />
      <CoachesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
