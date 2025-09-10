import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ConsultationForm from '@/components/ConsultationForm';
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
      
      {/* Consultation Form Section */}
      <section className="bg-white">
        <div className="dental-section">
          <ConsultationForm />
        </div>
      </section>
      
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