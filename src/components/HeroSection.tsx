import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-invisalign.jpg';

const HeroSection = () => {
  const benefits = [
    "Clear, virtually invisible aligners",
    "No metal brackets or wires",
    "Removable for eating & cleaning", 
    "Comfortable custom fit",
    "Faster treatment than traditional braces"
  ];

  return (
    <section className="bg-dental-black relative overflow-hidden">
      <div className="dental-section">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <div className="text-white space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Clear, discreet teeth alignment 
              <span className="text-dental-gold"> without traditional braces</span>
            </h1>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-dental-gold rounded-full p-1">
                    <Check className="h-4 w-4 text-dental-black" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="dental-cta text-xl px-12 py-6">
                Book Free Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dental-black text-xl px-12 py-6">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Clear Invisalign aligners being held professionally"
              className="rounded-2xl shadow-dental-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;