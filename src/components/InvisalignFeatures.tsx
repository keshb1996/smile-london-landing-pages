import { Eye, Wrench, Utensils, Heart, Clock } from 'lucide-react';

const InvisalignFeatures = () => {
  const features = [
    {
      icon: Eye,
      title: "Clear, virtually invisible aligners",
      description: "Discreet treatment that doesn't interfere with your lifestyle"
    },
    {
      icon: Wrench,
      title: "No metal brackets or wires",
      description: "Comfortable treatment without the discomfort of traditional braces"
    },
    {
      icon: Utensils,
      title: "Removable for eating & cleaning",
      description: "Maintain your oral hygiene and enjoy all your favorite foods"
    },
    {
      icon: Heart,
      title: "Comfortable custom fit",
      description: "Tailored specifically to your teeth for optimal comfort"
    },
    {
      icon: Clock,
      title: "Faster treatment than traditional braces",
      description: "Achieve your perfect smile in less time with advanced technology"
    }
  ];

  return (
    <section className="bg-white">
      <div className="dental-section">
        <div className="text-center mb-12">
          <h2 className="dental-heading text-dental-black mb-4">
            Why Choose Invisalign?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of orthodontics with clear, comfortable, and convenient treatment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center space-y-4 p-6 rounded-lg hover:shadow-dental-lg transition-all duration-300">
                <div className="mx-auto w-16 h-16 bg-dental-gold rounded-full flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-dental-black" />
                </div>
                <h3 className="text-xl font-semibold text-dental-black">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvisalignFeatures;