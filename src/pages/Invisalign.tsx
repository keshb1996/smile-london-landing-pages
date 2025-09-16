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
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Invisalign = () => {
  const { ref: consultationFormRef, isVisible: consultationFormVisible } = useScrollAnimation();
  // Ensure page loads at the top, especially important for mobile
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set page title for SEO
    document.title = "Invisalign London | Clear Aligners Treatment | Smile London";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert Invisalign treatment in London. Clear, removable aligners for a perfect smile. FREE consultation worth £150. Harley Street clinic.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Expert Invisalign treatment in London. Clear, removable aligners for a perfect smile. FREE consultation worth £150. Harley Street clinic.';
      document.head.appendChild(newMetaDescription);
    }
    
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
      
      {/* Consultation Form Section */}
      <section 
        ref={consultationFormRef}
        className={`bg-cover bg-center bg-no-repeat relative min-h-[600px] md:bg-[url('/lovable-uploads/66625a79-01c3-4a44-8581-efd2809ba38c.png')] bg-[url('/lovable-uploads/20b5cbf2-8d51-4d9b-aaea-63c02baa661c.png')] ${
          consultationFormVisible 
            ? 'animate-fade-up' 
            : 'opacity-0 translate-y-[30px]'
        }`}
      >
        <div className="dental-section">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white/80 p-8 rounded-lg">
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

export default Invisalign;