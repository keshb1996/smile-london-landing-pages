import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AllOnFourTestimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Salman Saeed",
      rating: 5,
      text: "Had my teeth done with Dr. Tinashe. Amazing results I'm so happy with my teeth. I was very skeptical as I have never liked going to the dentist but smile London and the people working there put me at ease from start to finish. I would highly recommend as I can't stop smiling.",
      platform: "Google",
      date: "7 months ago"
    },
    {
      name: "Millie Demachen", 
      rating: 5,
      text: "Had the most amazing experience here! My teeth look unbelievable and all the staff are so kind and attentive. My teeth look exactly how i wanted them. i cant recommend this place enough!",
      platform: "Google",
      date: "7 months ago"
    },
    {
      name: "Raul",
      rating: 5, 
      text: "I think it is an incredible place and a pretty good technique, the staff is very friendly from the reception to the retired girl, Siobhan I think is her name is she's very professional, the dentist Tinashe is an artist, I am very satisfied, totally recommended.",
      platform: "Google",
      date: "7 months ago"
    },
    {
      name: "Callum Leyton",
      rating: 5,
      text: "Love this place! The service was excellent and the staff were polite. My teeth look amazing and I highly recommend Dr Stevie when you visit this place.",
      platform: "Google", 
      date: "8 months ago"
    },
    {
      name: "Ozan",
      rating: 5,
      text: "Just walked out with a new set of chompers from Smile London! Extremely happy with the result they don't stop until you get them how you want. Special shout out to Tinashe for working his magic",
      platform: "Google",
      date: "7 months ago"
    },
    {
      name: "Olya Nogovitsyna",
      rating: 5,
      text: "Thanks to Dr. Nhova and Smile London, I have my confidence back! My teeth look fantastic, and I am genuinely impressed with the level of care I received.",
      platform: "Google",
      date: "10 months ago"
    },
    {
      name: "Amy Barrett",
      rating: 5,
      text: "Amazing experience from start to finish. Such an understanding and patient team that aim to reach your every expectation. Could not be happier with my experience with Smile London! I highly recommend",
      platform: "Google",
      date: "a year ago"
    },
    {
      name: "Ruby Whish",
      rating: 5,
      text: "Everything was perfect ! From the consultation to the finished result I was so well taken care of and so happy with the results. I would recommend 100%",
      platform: "Google",
      date: "10 months ago"
    },
    {
      name: "GUL Cifci",
      rating: 5,
      text: "I had a beautiful smile as a result of very good team work. Thank you Melissa for organizing this study and Dr Kolade for creating the miracle.",
      platform: "Google",
      date: "a year ago"
    },
    {
      name: "Tania Tuzizila",
      rating: 5,
      text: "Second time using their services and it's always a pleasure, staff always go the extra mile and very friendly. Very happy with my treatment thankyou so much.",
      platform: "Google",
      date: "a year ago"
    },
    {
      name: "Zoe Coates",
      rating: 5,
      text: "Extremely happy with the service, staff and communication. We was made to feel comfortable by the friendly staff and was surprised how affordable the treatment was. Would highly recommend 😊",
      platform: "Google",
      date: "a year ago"
    },
    {
      name: "GW The Producer",
      rating: 5,
      text: "Needed my teeth sorted out for ages! Excellent service and thanks so much to Melissa for making it happen and making the process so smooth!",
      platform: "Google",
      date: "a year ago"
    },
    {
      name: "Bree Morris",
      rating: 5,
      text: "Amazing customer service. Very professional friendly staff, transparent and the prices are good. A pleasant atmosphere and the results are amazing. Highly recommended.",
      platform: "Google",
      date: "2 years ago"
    },
    {
      name: "vishal kavri",
      rating: 5,
      text: "Wonderful results, fast responses via WhatsApp & great after care service. Would highly recommend",
      platform: "Google",
      date: "a year ago"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={ref}
      className={`bg-dental-black text-dental-black-foreground ${
        isVisible 
          ? 'animate-fade-up' 
          : 'opacity-0 translate-y-[30px]'
      }`}
    >
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
              {/* Patient info */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-dental-gold flex items-center justify-center">
                  <span className="text-2xl font-bold text-dental-black">
                    {testimonials[currentSlide].name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-lg text-foreground">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-muted-foreground">{testimonials[currentSlide].platform} • {testimonials[currentSlide].date}</p>
                
                {/* Star rating */}
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              
              {/* Testimonial content */}
              <div className="md:col-span-3">
                <blockquote className="text-xl leading-relaxed text-foreground mb-6">
                  "{testimonials[currentSlide].text}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <img 
                    src="/google-logo.svg" 
                    alt="Google" 
                    className="w-8 h-8"
                  />
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
              className="rounded-full bg-white border-white text-foreground hover:bg-primary hover:text-primary-foreground"
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
              className="rounded-full bg-white border-white text-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4.6★</div>
            <p className="text-dental-black-foreground/80">Google Rating</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <p className="text-dental-black-foreground/80">5-Star Reviews</p>
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