import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ConsultationIncludes from '@/components/ConsultationIncludes';
import ConsultationForm from '@/components/ConsultationForm';
import InvisalignBenefits from '@/components/InvisalignBenefits';
import PromotionalBanner from '@/components/PromotionalBanner';
import WhyChooseUs from '@/components/WhyChooseUs';
import InvisalignInfo from '@/components/InvisalignInfo';
import TestimonialSection from '@/components/TestimonialSection';
import GoogleReviews from '@/components/GoogleReviews';
import SmileTransformations from '@/components/SmileTransformations';
import DentalJourney from '@/components/DentalJourney';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ConsultationIncludes />
      
      {/* Consultation Form Section */}
      <section className="bg-white">
        <div className="dental-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <ConsultationForm />
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <img 
                src="/lovable-uploads/d082ca74-03b5-49c1-922b-2c0317d249e0.png" 
                alt="Invisalign clear aligners in hand with case"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      
      <InvisalignBenefits />
      <PromotionalBanner />
      <WhyChooseUs />
      <InvisalignInfo />
      <TestimonialSection />
      <GoogleReviews />
      <SmileTransformations />
      <DentalJourney />
      <FAQSection />
      <FinalCTA />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Index;