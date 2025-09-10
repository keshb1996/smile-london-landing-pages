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
      <section 
        className="bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/lovable-uploads/66625a79-01c3-4a44-8581-efd2809ba38c.png')"
        }}
      >
        <div className="bg-white/80">
          <div className="dental-section">
            <ConsultationForm />
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