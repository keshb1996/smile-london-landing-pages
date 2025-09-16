import { Check, Calculator, Clock, CreditCard } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const TabeoFinanceSection = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const financeFeatures = ["0% APR on loans up to £25,000", "Spread your treatment cost over 12-60 months", "Quick online application - instant decision", "No hidden fees or charges"];
  const steps = [{
    icon: Calculator,
    title: "Choose your treatment plan",
    description: "Select the perfect treatment for your needs"
  }, {
    icon: CreditCard,
    title: "Apply online in under 5 minutes",
    description: "Quick and secure application process"
  }, {
    icon: Clock,
    title: "Get instant decision and start treatment",
    description: "Immediate approval and begin your transformation"
  }];
  return (
    <section 
      ref={ref}
      className={`dental-section bg-gradient-to-r from-dental-primary to-dental-secondary text-white ${
        isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-[30px]'
      }`}
    >
      <div className="dental-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flexible Finance Options
          </h2>
          <p className="text-xl text-white/90">
            Make your dream smile affordable with Tabeo Finance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Finance Benefits</h3>
            <ul className="space-y-4">
              {financeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-dental-accent flex-shrink-0 mt-1" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">How It Works</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                    <p className="text-white/90">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TabeoFinanceSection;