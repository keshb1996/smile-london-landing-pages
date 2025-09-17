import { useEffect } from 'react';
import Header from '@/components/Header';
import MobileHeroImage from '@/components/MobileHeroImage';
import HeroSection from '@/components/HeroSection';
import ConsultationIncludes from '@/components/ConsultationIncludes';
import InvisalignConsultationForm from '@/components/InvisalignConsultationForm';
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
      <InvisalignConsultationForm />
      
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