import { Check } from "lucide-react";

const AllOnFourPricing = () => {
  const packageIncludes = [
    "Initial consultation and comprehensive examination",
    "Advanced 3D CBCT imaging and digital treatment planning",
    "Four premium titanium dental implants per arch",
    "Immediate temporary teeth fitted same day",
    "Final custom-made permanent prosthetic teeth",
    "All surgical procedures and materials",
    "Local anaesthesia and sedation options",
    "Post-operative care and follow-up appointments",
    "5-year comprehensive warranty on treatment",
    "Detailed aftercare instructions and support",
    "24/7 emergency contact during healing period",
    "Professional cleaning and maintenance guidance"
  ];

  return (
    <section className="bg-dental-gold text-dental-gold-foreground">
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-heading mb-6 text-dental-gold-foreground">
            Complete All-on-Four Package
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Transparent pricing with everything included. No hidden costs, no surprises - 
            just comprehensive treatment that transforms your smile in one day.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Pricing card */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4">All-on-Four Treatment</h3>
                <p className="opacity-90 mb-6">Complete smile transformation in one day</p>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm opacity-75 line-through">Regular Price: £18,000</div>
                    <div className="text-5xl font-bold mb-2">£12,995</div>
                    <div className="text-lg opacity-90">per arch</div>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">Save £5,005</div>
                    <div className="text-sm opacity-75">Limited time offer</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="text-lg font-semibold">Financing Options:</div>
                <div className="space-y-2">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-bold">From £89/month</div>
                    <div className="text-sm opacity-75">0% interest • 36 months</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-bold">From £149/month</div>
                    <div className="text-sm opacity-75">Extended terms • 60 months</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-white text-dental-gold-foreground py-4 rounded-lg font-bold text-xl hover:bg-white/90 transition-colors shadow-lg">
                Book Free Consultation
              </button>
              
              <p className="text-sm opacity-75 mt-4">
                FREE consultation worth £150 • No obligation
              </p>
            </div>
            
            {/* What's included */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Everything Included:</h3>
              
              <div className="space-y-4">
                {packageIncludes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-dental-gold-foreground" />
                    </div>
                    <span className="text-lg leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">5-Year Comprehensive Warranty</h4>
                <p className="opacity-90 leading-relaxed">
                  We stand behind our work with a comprehensive 5-year warranty covering 
                  all aspects of your All-on-Four treatment. This includes implants, 
                  prosthetic teeth, and any complications arising from the procedure.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-8 opacity-90">
                Take advantage of our limited-time offer and transform your smile today. 
                Book your FREE consultation to discuss your treatment plan and financing options.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-dental-gold-foreground px-12 py-4 rounded-lg font-bold text-xl hover:bg-white/90 transition-all duration-300 shadow-lg">
                  Schedule Consultation
                </button>
                
                <div className="text-center">
                  <p className="text-lg font-semibold">Call: 020 7183 4091</p>
                  <p className="text-sm opacity-75">Speak to our treatment coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourPricing;