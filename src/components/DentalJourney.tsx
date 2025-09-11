import { Calendar, Scan, Search, Play } from 'lucide-react';

const DentalJourney = () => {
  const steps = [
    {
      icon: Calendar,
      title: "1. Expert Consultation",
      description: "Comprehensive examination and treatment planning discussion",
      duration: "45 minutes"
    },
    {
      icon: Search,
      title: "2. Smile Assessment", 
      description: "Detailed analysis of your teeth alignment and bite",
      duration: "30 minutes"
    },
    {
      icon: Scan,
      title: "3. 3D Scanning",
      description: "Precise digital impressions using iTero 3D technology",
      duration: "20 minutes" 
    },
    {
      icon: Play,
      title: "4. Treatment Begins",
      description: "Receive your first set of custom aligners and instructions",
      duration: "Ongoing"
    }
  ];

  return (
    <section className="bg-white">
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-subheading text-dental-black mb-6">
            YOUR DENTAL JOURNEY
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From consultation to your new smile, we'll guide you through every step 
            of your Invisalign transformation journey.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-dental-gold/30"></div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-dental-gold rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="bg-dental-gray rounded-2xl p-8 hover:shadow-dental-lg transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <div className="bg-dental-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-dental-black" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-dental-black mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-dental-gold/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-dental-black mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book your expert consultation today and take the first step towards your perfect smile.
            </p>
            <button className="dental-cta">
              Schedule Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalJourney;