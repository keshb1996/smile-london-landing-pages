import { Button } from "@/components/ui/button";

const AllOnFourHero = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Video Background - Desktop */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[75%_center] hidden md:block"
      >
        <source src="https://res.cloudinary.com/dvezevabk/video/upload/v1757960738/20250915_1922_Radiant_Dental_Transformation_simple_compose_01k579tw9mfxcs8qqst9ymyytq_on4t1f.mp4" type="video/mp4" />
      </video>
      
      {/* Video Background - Mobile */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      >
        <source src="/mobile-hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="dental-section relative z-10">
        <div className="max-w-3xl">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transform Your Smile in Just{" "}
                <span className="text-primary">One Day</span> with All-on-Four Implants
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience the confidence of a complete smile with our revolutionary All-on-Four dental implants. 
                Trust, affordability, and tailored financing options make your dream smile accessible today.
              </p>
              
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
              <Button 
                size="lg" 
                className="dental-cta text-xl px-12 py-6"
              >
                Book Your Free Consultation
              </Button>
              <p className="text-sm text-muted-foreground">
                FREE consultation worth £150 • No obligation • Expert assessment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourHero;