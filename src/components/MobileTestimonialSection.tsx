import { Star } from 'lucide-react';
import { useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const MobileTestimonialSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsLoading(false);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  return (
    <section 
      ref={ref}
      className={`md:hidden bg-slate-50 py-10 px-5 ${
        isVisible 
          ? 'animate-fade-up' 
          : 'opacity-0 translate-y-[30px]'
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
              ref={videoRef}
              controls
              poster="/maria-testimonial.png"
              className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
                isPlaying ? 'opacity-100' : 'opacity-30'
              } ${isLoading ? 'opacity-50' : ''}`}
              preload="metadata"
              onPlay={handlePlay}
              onPause={handlePause}
              onLoadStart={handleLoadStart}
              onCanPlay={handleCanPlay}
            >
              <source src="https://res.cloudinary.com/dvezevabk/video/upload/v1758043243/VID-20250916-WA0019_1_ks8ly4.mp4" type="video/mp4" />
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
          "I came to Smile London and had the whole thing{" "}
          <span className="text-primary font-bold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary after:via-yellow-400 after:to-primary after:shadow-sm after:scale-x-0 after:origin-left after:transition-transform after:duration-700 after:ease-out" style={{
            '--after-scale-x': isVisible ? '1' : '0'
          } as React.CSSProperties & { '--after-scale-x': string }}>
            <span className={`${isVisible ? 'after:scale-x-100' : 'after:scale-x-0'} relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary after:via-yellow-400 after:to-primary after:shadow-sm after:origin-left after:transition-transform after:duration-700 after:ease-out after:delay-500`}>
              done in 1 day
            </span>
          </span>{" "}
          really, and I'm just really happy with it!"
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