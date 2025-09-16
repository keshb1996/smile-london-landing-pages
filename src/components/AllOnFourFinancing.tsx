import { CreditCard, Calculator, Clock } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AllOnFourFinancing = () => {
  const { ref: mainRef, isVisible: mainVisible } = useScrollAnimation();
  const { ref: checkRef, isVisible: checkVisible } = useScrollAnimation();
  const financingOptions = [
    {
      icon: CreditCard,
      title: "0% Interest Finance",
      monthly: "From £89",
      period: "36 months",
      features: [
        "No interest charges",
        "Fixed monthly payments",
        "Quick approval process",
        "No early payment fees"
      ],
      highlight: "Most Popular"
    },
    {
      icon: Calculator,
      title: "Extended Payment Plans",
      monthly: "From £149",
      period: "60 months",
      features: [
        "Longer repayment terms",
        "Lower monthly payments",
        "Flexible deposit options",
        "Budget-friendly solution"
      ],
      highlight: "Lowest Monthly"
    },
    {
      icon: Clock,
      title: "Same Day Treatment",
      monthly: "Pay in Full",
      period: "Immediate",
      features: [
        "10% discount for full payment",
        "No financing required",
        "Immediate treatment start",
        "Complete in single visit"
      ],
      highlight: "Best Value"
    }
  ];

  return (
    <div>
      <section 
        ref={mainRef}
        className={`bg-white ${
          mainVisible 
            ? 'animate-fade-up' 
            : 'opacity-0 translate-y-[30px]'
        }`}
      >
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-heading mb-6">
            Flexible <span className="text-primary">Financing Options</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe everyone deserves a beautiful smile. Choose from our range of 
            financing options designed to make All-on-Four treatment accessible and affordable.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {financingOptions.map((option, index) => (
            <div 
              key={index}
              className="relative bg-dental-gray rounded-2xl p-8 hover:shadow-dental-lg transition-all duration-300 group"
            >
              {/* Highlight badge */}
              {option.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {option.highlight}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary">{option.monthly}</div>
                  <div className="text-muted-foreground">{option.period}</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {option.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-dental-gray rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Quick Finance Check</h3>
              <p className="text-muted-foreground mb-6">
                Get an instant decision on your financing application. Our simple online 
                process takes just 2 minutes with no impact on your credit score.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Instant online decision</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>No impact on credit score</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Secure application process</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&h=300&q=80"
                alt="Finance application on mobile device"
                className="w-full max-w-md mx-auto rounded-lg shadow-dental mb-6"
              />
              
              <button className="dental-cta">
                Check Finance Options
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section 
      ref={checkRef}
      className={`bg-gray-50 ${
        checkVisible 
          ? 'animate-fade-up' 
          : 'opacity-0 translate-y-[30px]'
      }`}
    >
      <div className="dental-section">
        <div className="bg-dental-gray rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Quick Finance Check</h3>
              <p className="text-muted-foreground mb-6">
                Get an instant decision on your financing application. Our simple online 
                process takes just 2 minutes with no impact on your credit score.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Instant online decision</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>No impact on credit score</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Secure application process</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&h=300&q=80"
                alt="Finance application on mobile device"
                className="w-full max-w-md mx-auto rounded-lg shadow-dental mb-6"
              />
              
              <button className="dental-cta">
                Check Finance Options
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AllOnFourFinancing;