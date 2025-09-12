import { useEffect } from 'react';
import AllOnFourHero from '@/components/AllOnFourHero';
import AllOnFourBenefits from '@/components/AllOnFourBenefits';
import AllOnFourInfo from '@/components/AllOnFourInfo';
import AllOnFourProcess from '@/components/AllOnFourProcess';
import AllOnFourBeforeAfter from '@/components/AllOnFourBeforeAfter';
import AllOnFourOffer from '@/components/AllOnFourOffer';
import AllOnFourContact from '@/components/AllOnFourContact';

const AllOnFour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set page title for SEO
    document.title = "All-on-4 Dental Implants London | Complete Smile in One Day | Smile London";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Replace all teeth with just 4 implants. Expert All-on-4 treatment in London. FREE consultation worth £150. Same day results, permanent solution.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Replace all teeth with just 4 implants. Expert All-on-4 treatment in London. FREE consultation worth £150. Same day results, permanent solution.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  return (
    <main>
      <AllOnFourHero />
      <AllOnFourBenefits />
      <AllOnFourInfo />
      <AllOnFourProcess />
      <AllOnFourBeforeAfter />
      <AllOnFourOffer />
      <AllOnFourContact />
    </main>
  );
};

export default AllOnFour;