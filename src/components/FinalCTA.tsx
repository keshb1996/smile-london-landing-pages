import { Check } from 'lucide-react';
import ConsultationForm from './ConsultationForm';
const FinalCTA = () => {
  const benefits = ["Free comprehensive consultation (normally £150)", "3D digital smile preview", "Personalized treatment plan", "Flexible payment options available", "No obligation - just expert advice"];
  return <section className="bg-dental-gold">
      <div className="dental-section">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-dental-black">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              Book Your Expert Consultation Today
            </h2>
            <p className="text-lg sm:text-xl mb-6 md:mb-8 opacity-90">Take the first step towards your perfect smile. Our expert team will assess your needs and create a personalised treatment plan just for you.</p>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {benefits.map((benefit, index) => <div key={index} className="flex items-center space-x-3">
                  
                  <span className="text-base md:text-lg font-medium">{benefit}</span>
                </div>)}
            </div>
            
            <div className="bg-dental-black/10 rounded-2xl p-4 md:p-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">£150 VALUE</div>
                <div className="text-base md:text-lg">FREE During Limited Time</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-dental-lg">
            <ConsultationForm title="Book Your Expert Consultation" subtitle="Normally £150 - Limited time offer" />
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTA;