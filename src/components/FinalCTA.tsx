import { Check } from 'lucide-react';
import ConsultationForm from './ConsultationForm';
const FinalCTA = () => {
const benefits = [
    "Harley Street Centre of Excellence",
    "World-Renowned Dentists",
    "5 year guarantee", 
    "FREE X-ray",
    "0% Finance Available"
  ];
  return <section className="bg-dental-gold">
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
            
            <div className="bg-dental-black/10 rounded-2xl p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Our FREE Invisalign® Offer</h3>
                <div className="text-3xl font-bold text-dental-gold mb-4">Save £1,000+</div>
                <div className="text-left space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-dental-gold rounded-full"></div>
                    <span className="text-sm">FREE iTero scan (worth £150)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-dental-gold rounded-full"></div>
                    <span className="text-sm">FREE Hygiene & Airflow (worth £170+)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-dental-gold rounded-full"></div>
                    <span className="text-sm">Free In-Clinic Consultation (worth £350)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-dental-gold rounded-full"></div>
                    <span className="text-sm">FREE Vivera Retainers (worth £500)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-dental-gold rounded-full"></div>
                    <span className="text-sm">Treatment Plan + 0% APR Finance Option</span>
                  </div>
                </div>
                <div className="bg-dental-gold/20 rounded-lg p-3">
                  <div className="text-dental-black font-semibold text-sm">UK&apos;S PREMIER INVISALIGN PROVIDER</div>
                </div>
              </div>
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