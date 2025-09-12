import { Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsultationForm from './ConsultationForm';

const AllOnFourOffer = () => {
  const benefits = [
    "Free comprehensive consultation", 
    "3D imaging and treatment planning",
    "Expert assessment worth £150",
    "No obligation discussion",
    "Financing options available"
  ];

  return (
    <section className="bg-dental-gold py-16">
      <div className="dental-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-dental-black">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Get Your Free All-on-4 Consultation
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards your new smile. Our expert team will assess your suitability for All-on-4 treatment and create a personalized plan.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-dental-black rounded-full p-1">
                    <Check className="h-4 w-4 text-dental-gold" />
                  </div>
                  <span className="text-lg font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-dental-black/10 rounded-lg p-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">LIMITED TIME OFFER</div>
                <div className="text-lg opacity-90">Consultation normally £150 - Now FREE</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-dental-black hover:bg-dental-black/90 text-dental-gold font-semibold"
                asChild
              >
                <a href="tel:02072240999">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: 020 7224 0999
                </a>
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-dental-lg">
            <ConsultationForm 
              title="Book Your FREE Consultation" 
              subtitle="Usually £150 - FREE for limited time"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourOffer;