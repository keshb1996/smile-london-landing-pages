import { useEffect } from 'react';
import Header from '@/components/Header';
import AllOnFourHero from '@/components/AllOnFourHero';
import AllOnFourBenefits from '@/components/AllOnFourBenefits';
import AllOnFourBeforeAfter from '@/components/AllOnFourBeforeAfter';
import AllOnFourExplanation from '@/components/AllOnFourExplanation';
import AllOnFourIncludes from '@/components/AllOnFourIncludes';
import AllOnFourTestimonials from '@/components/AllOnFourTestimonials';
import AllOnFourFinancing from '@/components/AllOnFourFinancing';
import AllOnFourPricing from '@/components/AllOnFourPricing';
import AllOnFourFAQ from '@/components/AllOnFourFAQ';
import AllOnFourConsultationForm from '@/components/AllOnFourConsultationForm';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const AllOnFour = () => {
  // Ensure page loads at the top, especially important for mobile
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set page title for SEO
    document.title = "All-on-4 Dental Implants London | Same Day Full Mouth Dentures | Smile London";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your smile in just one day with All-on-4 dental implants. Full mouth permanent dentures with 5-year guarantee. FREE consultation worth £150.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Transform your smile in just one day with All-on-4 dental implants. Full mouth permanent dentures with 5-year guarantee. FREE consultation worth £150.';
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
      <AllOnFourHero />
      <AllOnFourBenefits />
      <AllOnFourBeforeAfter />
      <AllOnFourExplanation />
      <AllOnFourIncludes />
      <AllOnFourTestimonials />
      <AllOnFourFinancing />
      <AllOnFourPricing />
      <AllOnFourFAQ />
      <AllOnFourConsultationForm />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default AllOnFour;