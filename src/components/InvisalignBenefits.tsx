import { EyeOff, Utensils, Heart, Clock } from 'lucide-react';
const InvisalignBenefits = () => {
  const benefits = [{
    icon: EyeOff,
    text: "Invisible, with no metal brackets or wires"
  }, {
    icon: Utensils,
    text: "Removable for eating & cleaning"
  }, {
    icon: Heart,
    text: "Comfortable custom fit"
  }, {
    icon: Clock,
    text: "Faster treatment than traditional braces"
  }];
  return <section className="bg-gray-50 py-0">
      <div className="dental-section">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return <div key={index} className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-dental-gold/10 rounded-full p-4">
                  <IconComponent className="h-8 w-8 text-dental-gold" />
                </div>
                <span className="text-sm font-medium text-gray-800">{benefit.text}</span>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default InvisalignBenefits;