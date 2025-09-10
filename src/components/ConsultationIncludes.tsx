import { Check } from 'lucide-react';

const ConsultationIncludes = () => {
  const benefits = [
    "Personalised Treatment Plan",
    "FREE iTero scan (worth £150)",
    "FREE Hygiene & Airflow (worth £170+)",
    "FREE Vivera Retainers (worth £500)",
    "FREE Teeth Whitening (worth £450)"
  ];

  return (
    <section className="bg-dental-gold/5 py-16">
      <div className="dental-section">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dental-black mb-12">
            and what's included in the consultation?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-dental-gold rounded-full p-3">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-dental-black leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationIncludes;