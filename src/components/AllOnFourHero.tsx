import { Button } from "@/components/ui/button";
const AllOnFourHero = () => {
  return <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background Image - Desktop & Tablet */}
      <div className="absolute inset-0 w-full h-full hidden md:block">
        <img 
          src="/src/assets/dental-gold-background.jpg" 
          alt="Professional dental background in brand colors" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/30"></div>
      </div>
      
      {/* Video Background - Mobile */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover md:hidden">
        <source src="/mobile-hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="dental-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transform Your Smile in Just{" "}
                <span className="text-primary">One Day</span> with All-on-Four Implants
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">Experience the confidence of a complete smile with our revolutionary All-on-Four dental implants. </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Same-day permanent teeth
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    5-year guarantee included
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Flexible financing from £89/month
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Trusted by 1,000+ patients
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button size="lg" className="dental-cta text-xl px-12 py-6">
                Book Your Free Consultation
              </Button>
              <p className="text-sm text-muted-foreground">
                FREE consultation worth £150 • No obligation • Expert assessment
              </p>
            </div>
          </div>
          
          {/* Right side - Image (hidden on mobile) */}
          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-dental-lg">
              <img src="/all-on-4-maria-hero.png" alt="Happy patient with beautiful smile after All-on-Four dental implants" className="w-full h-[600px] object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating testimonial card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-dental-lg max-w-sm">
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=60&h=60&q=80" alt="Maria" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Maria</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-primary text-sm">★</span>)}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                "I came to Smile London and had the whole thing done in 1 day really, and I'm just really happy with it!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AllOnFourHero;