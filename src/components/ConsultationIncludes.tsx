import { Scan, Sparkles, Shield, Smile } from 'lucide-react';

const ConsultationIncludes = () => {
  const benefits = [
    {
      icon: Scan,
      title: "Full personalised FREE iTero scan",
      value: "worth £150"
    },
    {
      icon: Sparkles,
      title: "FREE Hygiene & Airflow",
      value: "worth £170+"
    },
    {
      icon: Shield,
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
          <h2 className="text-3xl md:text-4xl font-bold text-dental-black mb-4">
            and what's included in the consultation?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100">
                <div className="bg-dental-gold/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-dental-gold" />
                </div>
                <h3 className="font-semibold text-dental-black mb-2 text-sm leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-dental-gold font-medium text-sm">
                  {benefit.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConsultationIncludes;