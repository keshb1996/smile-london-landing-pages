import { Check } from 'lucide-react';
import ConsultationForm from './ConsultationForm';

const FinalCTA = () => {
  const benefits = [
    "Free comprehensive consultation (normally £150)",
    "3D digital smile preview",
    "Personalized treatment plan",
    "Flexible payment options available",
    "No obligation - just expert advice"
  ];

  return (
    <section className="bg-dental-gold">
      <div className="dental-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-dental-black">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Book Your Free Consultation Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards your perfect smile. Our expert team will assess your needs 
              and create a personalized treatment plan just for you.
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
            
            <div className="bg-dental-black/10 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">£150 VALUE</div>
                <div className="text-lg">FREE During Limited Time</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-dental-lg">
            <ConsultationForm 
              title="Book Your Free Consultation"
              subtitle="Normally £150 - Limited time offer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;