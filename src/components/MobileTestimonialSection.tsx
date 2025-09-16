import { Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const MobileTestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`md:hidden bg-slate-50 py-10 px-5 transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0 animate-fade-in' 
          : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="max-w-sm mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Real Patient Stories
        </h2>
        
        {/* Video Container */}
        <div className="relative mb-6">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <video
              controls
              poster="/maria-testimonial.png"
              className="w-full h-full object-cover"
              preload="metadata"
            >
              <source src="/mobile-hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        {/* Patient Name and Rating */}
        <div className="text-center mb-4">
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary fill-current" />
            ))}
          </div>
          <h3 className="font-semibold text-lg text-foreground">Maria</h3>
        </div>
        
        {/* Testimonial Text */}
        <blockquote className="text-center text-muted-foreground mb-4 leading-relaxed">
          "I came to Smile London and had the whole thing done in 1 day really, and I'm just really happy with it!"
        </blockquote>
        
        {/* Caption */}
        <p className="text-center text-sm text-muted-foreground opacity-75">
          Maria - All-on-4 Patient
        </p>
      </div>
    </section>
  );
};

export default MobileTestimonialSection;