import { Play } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AllOnFourExplanation = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section 
      ref={ref}
      className={`bg-white ${
        isVisible 
          ? 'animate-fade-up' 
          : 'opacity-0 translate-y-[30px]'
      }`}
    >
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
            <div className="relative rounded-2xl overflow-hidden shadow-dental-lg">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/Ushnj78EvH4"
                title="All-on-Four dental implant procedure explanation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-[500px]"
              ></iframe>
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