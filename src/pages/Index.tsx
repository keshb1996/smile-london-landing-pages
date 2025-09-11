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
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
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
      <section 
        className="bg-cover bg-center bg-no-repeat relative min-h-[600px]"
        style={{
          backgroundImage: "url('/lovable-uploads/66625a79-01c3-4a44-8581-efd2809ba38c.png')"
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
      <SmileTransformations />
      <DentalJourney />
      <FAQSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Index;