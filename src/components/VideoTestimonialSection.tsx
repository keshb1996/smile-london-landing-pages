import { Star, Play, Loader2 } from 'lucide-react';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const VideoTestimonialSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isWaitingToPlay, setIsWaitingToPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCustomControls, setShowCustomControls] = useState(true);
  const [isFadingAudio, setIsFadingAudio] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const fadeInAudio = useCallback(() => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    const targetVolume = 1;
    const fadeDuration = 1500; // 1.5 seconds
    const steps = 30; // 30 steps for smooth fade
    const stepDuration = fadeDuration / steps;
    const volumeStep = targetVolume / steps;
    
    let currentStep = 0;
    video.volume = 0;
    setIsFadingAudio(true);
    
    fadeIntervalRef.current = setInterval(() => {
      if (!video || currentStep >= steps) {
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }
        setIsFadingAudio(false);
        if (video) video.volume = targetVolume;
        return;
      }
      
      currentStep++;
      video.volume = Math.min(volumeStep * currentStep, targetVolume);
    }, stepDuration);
  }, []);

  const handlePlayClick = () => {
    if (!videoRef.current || isWaitingToPlay) return;
    
    setIsWaitingToPlay(true);
    
    // Brief pause before starting video
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsWaitingToPlay(false);
        // Start audio fade-in after video begins
        fadeInAudio();
      }
    }, 900);
  };

  // Cleanup fade interval on unmount or pause
  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
      }
    };
  }, []);

  const handlePause = () => {
    setIsPlaying(false);
    // Stop audio fade if video is paused
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
      setIsFadingAudio(false);
    }
  };

  return (
    <section 
      ref={ref}
      className={`hidden md:block bg-slate-50 py-16 px-6 ${
        isVisible 
          ? 'animate-fade-up' 
          : 'opacity-0 translate-y-[30px]'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
          Real Patient Stories
        </h2>
        
        {/* Desktop Layout: Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video Container - Left Side */}
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                controls={!showCustomControls}
                poster="/maria-testimonial.png"
                className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
                  isPlaying ? 'opacity-100' : 'opacity-95'
                }`}
                preload="metadata"
                onPlay={() => {
                  setIsPlaying(true);
                  setShowCustomControls(false);
                }}
                onPause={handlePause}
              >
                <source src="https://res.cloudinary.com/dvezevabk/video/upload/v1758043243/VID-20250916-WA0019_1_ks8ly4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Play Button Overlay */}
              {showCustomControls && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
                  <button
                    onClick={handlePlayClick}
                    disabled={isWaitingToPlay}
                    className="group relative flex items-center justify-center w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {isWaitingToPlay ? (
                      <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    ) : (
                      <Play className="w-8 h-8 text-primary ml-0.5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Testimonial Content - Right Side */}
          <div className="space-y-6">
            {/* Patient Name and Rating */}
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-current" />
                ))}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Maria</h3>
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              "I came to Smile London and had the whole thing{" "}
              <span className="text-primary font-bold relative">
                <span className={`${isVisible ? 'after:scale-x-100' : 'after:scale-x-0'} relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary after:via-yellow-400 after:to-primary after:shadow-sm after:origin-left after:transition-transform after:duration-700 after:ease-out after:delay-500`}>
                  done in 1 day
                </span>
              </span>{" "}
              really, and I'm just really happy with it!"
            </blockquote>
            
            {/* Caption */}
            <p className="text-muted-foreground text-base">
              Maria - All-on-4 Patient
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;