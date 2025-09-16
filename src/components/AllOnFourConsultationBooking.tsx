import { Clock, Shield, Users, MapPin, Zap, CreditCard } from 'lucide-react';
import ConsultationForm from './ConsultationForm';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AllOnFourConsultationBooking = () => {
  const { ref: whyChooseRef, isVisible: whyChooseVisible } = useScrollAnimation();
  const { ref: consultationRef, isVisible: consultationVisible } = useScrollAnimation();
  const benefits = [{
    icon: Clock,
    title: "Same Day Treatment",
    description: "Complete your All-on-4 procedure in just one day"
  }, {
    icon: Shield,
    title: "5-Year Guarantee",
    description: "Complete peace of mind with our comprehensive warranty"
  }, {
    icon: Users,
    title: "Expert Surgeons",
    description: "Harley Street specialists with 20+ years experience"
  }, {
    icon: MapPin,
    title: "Central London",
    description: "Convenient location near Oxford Circus"
  }, {
    icon: Zap,
    title: "Advanced Technology",
    description: "State-of-the-art imaging and surgical equipment"
  }, {
    icon: CreditCard,
    title: "0% Interest-Free Finance",
    description: "Spread costs over 12-60 months with Tabeo"
  }];
  return (
    <>
      {/* Why Choose Section */}
      <section 
        ref={whyChooseRef}
        className={`bg-dental-black ${
          whyChooseVisible 
            ? 'animate-fade-up' 
            : 'opacity-0 translate-y-[30px]'
        }`}
      >
        <div className="dental-section">
          <div className="text-center mb-16">
            <h2 className="dental-heading text-white mb-6">Why Choose Smile London for Your All-on-4 Treatment?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              <span className="text-dental-gold">Experience the difference</span>
              <span className="text-gray-300"> with London's premier All-on-4 specialists</span>
            </p>
          </div>
          
          {/* Benefits grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center text-white">
                <div className="bg-dental-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-dental-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Booking Section */}
      <section 
        ref={consultationRef}
        className={`bg-background pt-8 pb-8 lg:pt-12 lg:pb-12 ${
          consultationVisible 
            ? 'animate-fade-up' 
            : 'opacity-0 translate-y-[30px]'
        }`}
      >
        <div className="dental-section">
          <div className="text-center mb-12">
            <h2 className="dental-heading mb-4">
              Book Your FREE All-on-4 Consultation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards your new smile. Our experts will assess your needs and create a personalized treatment plan.
            </p>
            <div className="mt-4 text-lg font-semibold text-primary">
              Normally £150 - FREE for limited time
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">

              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="font-semibold mb-3">What's Included in Your Consultation:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Comprehensive oral examination</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>FREE digital X-rays (worth £150)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Personalized treatment plan</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>0% finance eligibility check</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>No obligation consultation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <ConsultationForm title="Book Your FREE Consultation" subtitle="Normally £150 - Limited time offer" />
            </div>
          </div>
        </div>
      </section>
    </>);
};
export default AllOnFourConsultationBooking;