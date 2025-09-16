import { Check } from 'lucide-react';
import ConsultationForm from './ConsultationForm';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation();
  const benefits = ["Harley Street Centre of Excellence", "World-Renowned Dentists", "5 year guarantee", "FREE X-ray", "0% Finance Available"];
  return <section 
    ref={ref}
    className={`bg-dental-gold ${
      isVisible 
        ? 'animate-fade-up' 
        : 'opacity-0 translate-y-[30px]'
    }`}
  >
      <div className="dental-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-dental-black">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Book Your Expert Consultation Today
            </h2>
            <p className="text-xl mb-8 opacity-90">Take the first step towards your perfect smile. Our expert team will assess your needs and create a personalised treatment plan just for you.</p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => <div key={index} className="flex items-center space-x-3">
                  <div className="bg-dental-black rounded-full p-1">
                    <Check className="h-4 w-4 text-dental-gold" />
                  </div>
                  <span className="text-lg font-medium">{benefit}</span>
                </div>)}
            </div>
            
            
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-dental-lg">
            <ConsultationForm title="Book Your Expert Consultation" subtitle="Normally £150 - Limited time offer" />
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTA;