import { Stethoscope, Scan, Sparkles, ShieldCheck, Smile } from 'lucide-react';

const ConsultationIncludes = () => {
  const benefits = [
    {
      icon: Stethoscope,
      title: "Personalised Treatment Plan",
      value: ""
    },
    {
      icon: Scan,
      title: "FREE iTero scan",
      value: "worth £150"
    },
    {
      icon: Sparkles,
      title: "FREE Hygiene & Airflow",
      value: "worth £170+"
    },
    {
      icon: ShieldCheck,
      title: "FREE Vivera Retainers",
      value: "worth £500"
    },
    {
      icon: Smile,
      title: "FREE Teeth Whitening",
      value: "worth £450"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="dental-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            and what's included in the consultation?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-dental-gold/10 rounded-full p-4">
                  <IconComponent className="h-8 w-8 text-dental-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                  {benefit.value && (
                    <p className="text-sm text-gray-600">{benefit.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConsultationIncludes;