import { Clock, Shield, Smile, Utensils } from 'lucide-react';

const AllOnFourBenefits = () => {
  const benefits = [
    {
      icon: Clock,
      text: "Complete treatment in one day"
    },
    {
      icon: Shield,
      text: "Permanent, secure solution"
    },
    {
      icon: Smile,
      text: "Natural-looking, beautiful smile"
    },
    {
      icon: Utensils,
      text: "Eat all your favorite foods again"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="dental-section">
        <div className="text-center mb-12">
          <h2 className="dental-heading">Why Choose All-on-4?</h2>
          <p className="text-xl text-gray-600 mt-4">Revolutionary dental implant solution</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-dental-gold/10 rounded-full p-4">
                  <IconComponent className="h-8 w-8 text-dental-gold" />
                </div>
                <span className="text-sm font-medium text-gray-800">{benefit.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllOnFourBenefits;