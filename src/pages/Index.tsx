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
            <div className="order-1 lg:order-2">
              <img 
                src="/lovable-uploads/1504bfc1-6241-4489-a851-012e24ca6203.png" 
                alt="Hands holding Invisalign clear aligners" 
                className="w-full h-auto rounded-lg"
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