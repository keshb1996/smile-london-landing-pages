import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const AllOnFourTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Mitchell",
      age: 58,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "After years of struggling with dentures, All-on-Four changed my life completely. I can eat anything I want and smile with confidence again. The team at Smile London made the whole process comfortable and stress-free.",
      procedure: "Upper & Lower All-on-4",
      timeframe: "Completed in 1 day"
    },
    {
      name: "James Robertson", 
      age: 62,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "I was amazed by how quickly the procedure was completed. Same day teeth that look and feel completely natural. The financing options made it affordable, and the 5-year guarantee gives me peace of mind.",
      procedure: "Upper All-on-4",
      timeframe: "Same day completion"
    },
    {
      name: "Maria Gonzalez",
      age: 54,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80", 
      rating: 5,
      text: "Best decision I ever made! The consultation was thorough, the treatment was painless, and the results exceeded my expectations. I look 10 years younger and feel so much more confident.",
      procedure: "Full mouth All-on-4",
      timeframe: "Immediate results"
    },
    {
      name: "David Chen",
      age: 67,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "The technology they use is incredible. 3D scans, computer-guided surgery - everything was precise and professional. Recovery was much easier than I expected, and my new teeth feel completely natural.",
      procedure: "Lower All-on-4",
      timeframe: "Quick recovery"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-dental-black text-dental-black-foreground">
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-heading mb-6 text-dental-black-foreground">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
          <p className="text-xl text-dental-black-foreground/80 max-w-3xl mx-auto">
            Read real stories from patients who transformed their lives with All-on-Four dental implants at Smile London.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-dental-lg">
            <div className="grid md:grid-cols-4 gap-8 items-center">
              {/* Patient photo and info */}
              <div className="text-center">
                <img 
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="font-bold text-lg text-dental-gold-foreground">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-muted-foreground">Age {testimonials[currentSlide].age}</p>
                
                {/* Star rating */}
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              
              {/* Testimonial content */}
              <div className="md:col-span-3">
                <blockquote className="text-xl leading-relaxed text-dental-gold-foreground mb-6">
                  "{testimonials[currentSlide].text}"
                </blockquote>
                
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-dental-gray p-4 rounded-lg">
                    <p className="font-semibold text-dental-gold-foreground">Treatment:</p>
                    <p className="text-muted-foreground">{testimonials[currentSlide].procedure}</p>
                  </div>
                  <div className="bg-dental-gray p-4 rounded-lg">
                    <p className="font-semibold text-dental-gold-foreground">Timeline:</p>
                    <p className="text-muted-foreground">{testimonials[currentSlide].timeframe}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-white border-white text-dental-gold-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-primary' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-white border-white text-dental-gold-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
            <p className="text-dental-black-foreground/80">Successful Treatments</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-dental-black-foreground/80">Patient Satisfaction</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <p className="text-dental-black-foreground/80">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourTestimonials;