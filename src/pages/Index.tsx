import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Smile London | Expert Dental Treatments | Invisalign & All-on-4";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert dental treatments in London. Invisalign clear aligners and All-on-4 dental implants. FREE consultations available.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Expert dental treatments in London. Invisalign clear aligners and All-on-4 dental implants. FREE consultations available.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-dental-gold to-dental-gold/90 flex items-center justify-center">
      <div className="dental-section text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-dental-black mb-8">
          Transform Your Smile
        </h1>
        <p className="text-xl text-dental-black opacity-90 mb-12 max-w-2xl mx-auto">
          Choose from our expert dental treatments. Book your FREE consultation today.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-dental-black mb-4">Invisalign</h2>
            <p className="text-gray-600 mb-6">Clear, removable aligners for straighter teeth</p>
            <Button asChild className="w-full bg-dental-black hover:bg-dental-black/90 text-dental-gold">
              <Link to="/invisalign">Learn About Invisalign</Link>
            </Button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-dental-black mb-4">All-on-4</h2>
            <p className="text-gray-600 mb-6">Complete smile restoration in one day</p>
            <Button asChild className="w-full bg-dental-black hover:bg-dental-black/90 text-dental-gold">
              <Link to="/all-on-4">Learn About All-on-4</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;