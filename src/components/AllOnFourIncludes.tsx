import { Check } from "lucide-react";

const AllOnFourIncludes = () => {
  const consultationIncludes = [
    "Comprehensive oral examination and medical history review",
    "Advanced 3D CBCT scan for precise treatment planning",
    "Digital impressions using the latest intraoral scanners",
    "Detailed treatment plan with all costs clearly outlined",
    "Virtual smile design to preview your new smile",
    "Discussion of financing options and payment plans",
    "Meet your dedicated implant specialist",
    "No obligation - complete transparency about your options"
  ];

  const treatmentIncludes = [
    "All-on-Four implant placement surgery",
    "Immediate temporary teeth (same day)",
    "All surgical fees and materials",
    "Final permanent prosthetic teeth",
    "5-year comprehensive warranty",
    "Follow-up appointments for first year",
    "Detailed aftercare instructions and support",
    "24/7 emergency contact for peace of mind"
  ];

  return (
    <section className="bg-dental-gold text-dental-gold-foreground">
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-heading mb-6 text-dental-gold-foreground">
            What's Included in Your All-on-Four Treatment?
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We believe in complete transparency. Here's everything included in your 
            consultation and treatment with no hidden costs or surprises.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Free Consultation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">FREE Consultation</h3>
              <div className="text-2xl font-bold mb-2">Worth £150</div>
              <p className="opacity-90">Comprehensive assessment and treatment planning</p>
            </div>
            
            <div className="space-y-4">
              {consultationIncludes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-dental-gold-foreground" />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Complete Treatment */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Complete Treatment</h3>
              <div className="text-2xl font-bold mb-2">All-Inclusive Package</div>
              <p className="opacity-90">Everything needed for your new smile</p>
            </div>
            
            <div className="space-y-4">
              {treatmentIncludes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-dental-gold-foreground" />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Smile?</h3>
            <p className="text-lg mb-8 opacity-90">
              Book your FREE consultation today and take the first step towards a confident, 
              beautiful smile that lasts a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-dental-gold-foreground px-12 py-4 rounded-lg font-bold text-xl hover:bg-white/90 transition-all duration-300 shadow-lg">
                Book Free Consultation
              </button>
              
              <div className="text-center">
                <p className="text-lg font-semibold">Call Now: 020 7183 4091</p>
                <p className="text-sm opacity-75">Available 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourIncludes;