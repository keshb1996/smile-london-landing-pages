import { Stethoscope, Scan, Sparkles, ShieldCheck, Smile } from 'lucide-react';
const ConsultationIncludes = () => {
  const benefits = [{
    icon: Stethoscope,
    title: "Personalised Treatment Plan",
    value: ""
  }, {
    icon: Scan,
    title: "FREE iTero scan",
    value: "worth £150"
  }, {
    icon: Sparkles,
    title: "FREE Hygiene & Airflow",
    value: "worth £170+"
  }, {
    icon: ShieldCheck,
    title: "FREE Vivera Retainers",
    value: "worth £500"
  }, {
    icon: Smile,
    title: "FREE Teeth Whitening",
    value: "worth £450"
  }];
  return <section className="bg-dental-gold/20 py-0">
      <div className="dental-section">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            and what's included in the consultation?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return <div key={index} className="flex flex-col items-center text-center space-y-2 md:space-y-3 p-3 md:p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-dental-gold/10 rounded-full p-2 md:p-3">
                  <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-dental-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">{benefit.title}</h3>
                  {benefit.value && <p className="text-xs md:text-sm text-gray-600">{benefit.value}</p>}
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default ConsultationIncludes;