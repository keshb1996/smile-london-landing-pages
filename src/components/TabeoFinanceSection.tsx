import { Check, Calculator, Clock, CreditCard } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TabeoFinanceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const financeFeatures = [
    "0% APR on loans up to £25,000",
    "Spread your treatment cost over 12-60 months", 
    "Quick online application - instant decision",
    "No hidden fees or charges"
  ];

  const steps = [
    {
      icon: Calculator,
      title: "Choose your treatment plan",
      description: "Select the perfect treatment for your needs"
    },
    {
      icon: CreditCard,
      title: "Apply online in under 5 minutes",
      description: "Quick and secure application process"
    },
    {
      icon: Clock,
      title: "Get instant decision and start treatment",
      description: "Immediate approval and begin your transformation"
    }
  ];

  return (
    <section 
      ref={ref}
      className={`bg-dental-gray ${
        isVisible 
          ? 'animate-fade-up' 
          : 'opacity-0 translate-y-[30px]'
      }`}
    >
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-heading mb-6">
            Flexible <span className="text-primary">Payment Options</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make your smile transformation affordable with 0% finance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Interest-Free Finance */}
          <div className="bg-white rounded-2xl p-8 shadow-dental-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Interest-Free Finance Available</h3>
            </div>
            
            <div className="space-y-4">
              {financeFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Representative Example */}
          <div className="bg-white rounded-2xl p-8 shadow-dental-lg border-2 border-primary">
            <div className="text-center mb-6">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
                Representative Example
              </div>
              <h3 className="text-2xl font-bold">Treatment Breakdown</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span>Treatment cost:</span>
                <span className="font-semibold">£9,500</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span>Deposit (10%):</span>
                <span className="font-semibold">£950</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span>Amount financed:</span>
                <span className="font-semibold">£8,550</span>
              </div>
              <div className="flex justify-between items-center py-2 text-lg font-bold text-primary">
                <span>36 monthly payments of:</span>
                <span>£237.50</span>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                0% APR Representative
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-2xl p-8 shadow-dental-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <p className="text-muted-foreground">Simple 3-step process</p>
            </div>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://lead.tabeo.co.uk/smile-london/finance?utm_source=landing_page&utm_medium=cta&utm_campaign=all_on_4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary bg-transparent text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Check Finance Options
          </a>
        </div>
      </div>
    </section>
  );
};

export default TabeoFinanceSection;