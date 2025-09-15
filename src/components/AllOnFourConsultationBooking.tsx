import { Clock, Phone, MapPin, Star } from 'lucide-react';
import ConsultationForm from './ConsultationForm';

const AllOnFourConsultationBooking = () => {
  const features = [
    {
      icon: Clock,
      title: "Same Day Consultation",
      description: "Get your assessment and treatment plan in one visit"
    },
    {
      icon: Star,
      title: "5-Year Guarantee",
      description: "Complete peace of mind with our comprehensive warranty"
    },
    {
      icon: Phone,
      title: "Expert Team",
      description: "Harley Street specialists with 20+ years experience"
    },
    {
      icon: MapPin,
      title: "Central London",
      description: "Convenient location near Oxford Circus"
    }
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
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
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

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
                  <span>Finance options discussion</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>No obligation consultation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <ConsultationForm 
              title="Book Your FREE Consultation"
              subtitle="Normally £150 - Limited time offer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourConsultationBooking;