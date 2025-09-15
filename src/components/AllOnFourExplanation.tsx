import { Play } from "lucide-react";

const AllOnFourExplanation = () => {
  return (
    <section className="bg-white">
      <div className="dental-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h2 className="dental-heading mb-6">
                Same-Day <span className="text-primary">Full Jaw Solutions</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  All-on-Four is a revolutionary dental implant technique that provides a complete 
                  set of permanent teeth using just four strategically placed implants per jaw.
                </p>
                
                <p>
                  This innovative approach eliminates the need for individual implants for each tooth, 
                  significantly reducing treatment time, cost, and recovery period while providing 
                  superior stability and function.
                </p>
                
                <p>
                  Our experienced implant specialists use advanced 3D imaging and computer-guided 
                  surgery to ensure precise placement and optimal results for every patient.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Key Benefits of All-on-Four:</h3>
              <ul className="space-y-3">
                {[
                  "Immediate function - eat and speak normally from day one",
                  "Preserves jawbone structure and facial support",
                  "No removable dentures or adhesives required",
                  "Easy maintenance with regular brushing and flossing",
                  "Significant cost savings compared to individual implants"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right side - Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-dental-lg group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&h=600&q=80"
                alt="All-on-Four dental implant procedure explanation"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Video overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
              </div>
              
              {/* Video info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold text-lg mb-2">Watch: All-on-Four Procedure Explained</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn how our All-on-Four procedure works and what to expect during treatment
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">Duration: 3:45</div>
                </div>
              </div>
            </div>
            
            {/* Statistics */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-dental-gray rounded-lg">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-dental-gray rounded-lg">
                <div className="text-2xl font-bold text-primary">1 Day</div>
                <div className="text-sm text-muted-foreground">Treatment Time</div>
              </div>
              <div className="text-center p-4 bg-dental-gray rounded-lg">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourExplanation;