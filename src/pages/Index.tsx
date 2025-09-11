import { useEffect } from 'react';
import Header from '@/components/Header';
import MobileHeroImage from '@/components/MobileHeroImage';
import HeroSection from '@/components/HeroSection';
import ConsultationIncludes from '@/components/ConsultationIncludes';
import ConsultationForm from '@/components/ConsultationForm';
import InvisalignBenefits from '@/components/InvisalignBenefits';
import PromotionalBanner from '@/components/PromotionalBanner';
import WhyChooseUs from '@/components/WhyChooseUs';
import InvisalignInfo from '@/components/InvisalignInfo';
import TestimonialSection from '@/components/TestimonialSection';
import GoogleReviews from '@/components/GoogleReviews';

import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import DentalJourney from '@/components/DentalJourney';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Index = () => {
  // Ensure page loads at the top, especially important for mobile
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Additional scroll restoration after a brief delay for mobile
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <MobileHeroImage />
      <HeroSection />
      <ConsultationIncludes />
      
      {/* Mobile-only image above consultation section */}
      <div className="block md:hidden">
        <img 
          src="/lovable-uploads/e8a15ef0-8fe8-483c-b18e-c8473e899a28.png" 
          alt="Invisalign aligners" 
          className="w-full h-auto"
        />
      </div>

      {/* Consultation Form Section */}
      <section 
        className="relative min-h-[600px] bg-dental-gold md:bg-cover md:bg-center md:bg-no-repeat"
        style={{
          backgroundImage: window.innerWidth >= 768 
            ? "url('/lovable-uploads/66625a79-01c3-4a44-8581-efd2809ba38c.png')" 
            : "none"
        }}
      >
        <div className="dental-section">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white/90 p-8 rounded-lg">
              <ConsultationForm />
            </div>
            <div className="hidden lg:block">
              {/* Empty space to show background image */}
            </div>
          </div>
        </div>
      </section>
      
      <InvisalignBenefits />
      <PromotionalBanner />
      <BeforeAfterGallery />
      <WhyChooseUs />
      <InvisalignInfo />
      <TestimonialSection />
      <GoogleReviews />
      <FinalCTA />
      
      <DentalJourney />
      <FAQSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Index;