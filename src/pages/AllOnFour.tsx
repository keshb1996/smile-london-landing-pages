import { useEffect } from 'react';
import Header from '@/components/Header';
import AllOnFourHero from '@/components/AllOnFourHero';
import MobileTestimonialSection from '@/components/MobileTestimonialSection';
import AllOnFourBenefits from '@/components/AllOnFourBenefits';
import AllOnFourBeforeAfter from '@/components/AllOnFourBeforeAfter';
import AllOnFourExplanation from '@/components/AllOnFourExplanation';
import AllOnFourIncludes from '@/components/AllOnFourIncludes';
import AllOnFourTestimonials from '@/components/AllOnFourTestimonials';
import AllOnFourFinancing from '@/components/AllOnFourFinancing';
import TabeoFinanceSection from '@/components/TabeoFinanceSection';
import FinanceFAQ from '@/components/FinanceFAQ';
import AllOnFourPricing from '@/components/AllOnFourPricing';
import AllOnFourFAQ from '@/components/AllOnFourFAQ';
import AllOnFourConsultationForm from '@/components/AllOnFourConsultationForm';
import AllOnFourConsultationBooking from '@/components/AllOnFourConsultationBooking';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const AllOnFour = () => {
  // Ensure page loads at the top, especially important for mobile
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta tags for SEO
    document.title = "All-on-4 Dental Implants London | Same Day Full Mouth Dentures | Smile London";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your smile in just one day with All-on-4 dental implants. Full mouth permanent dentures with 5-year guarantee. FREE consultation worth £150.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Transform your smile in just one day with All-on-4 dental implants. Full mouth permanent dentures with 5-year guarantee. FREE consultation worth £150.';
      document.head.appendChild(newMetaDescription);
    }
    
    // Robots meta tag
    const robotsMeta = document.querySelector('meta[name="robots"]') || document.createElement('meta');
    robotsMeta.setAttribute('name', 'robots');
    robotsMeta.setAttribute('content', 'noindex, nofollow, noarchive');
    if (!document.querySelector('meta[name="robots"]')) {
      document.head.appendChild(robotsMeta);
    }
    
    // Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://smilelondon.co.uk/all-on-4');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }
    
    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'All-on-4 Dental Implants London | Same Day Full Mouth Dentures | Smile London');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://smilelondon.co.uk/all-on-4');
    if (!document.querySelector('meta[property="og:url"]')) {
      document.head.appendChild(ogUrl);
    }
    
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <AllOnFourHero />
      <MobileTestimonialSection />
      <AllOnFourConsultationBooking />
      <AllOnFourBenefits />
      <TabeoFinanceSection />
      <AllOnFourBeforeAfter />
      <AllOnFourExplanation />
      <AllOnFourIncludes />
      <AllOnFourTestimonials />
      <AllOnFourFinancing />
      <AllOnFourPricing />
      <FinanceFAQ />
      <AllOnFourFAQ />
      <AllOnFourConsultationForm />
      <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AllOnFour;