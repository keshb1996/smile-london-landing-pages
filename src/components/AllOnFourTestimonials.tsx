import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const AllOnFourTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "James Dore",
      rating: 5,
      text: "Great staff who were warm and welcoming and made the kids' first trip to the dentist lovely. Dr Gupta was excellent. Very pleased that this is our new dentist surgery!",
      platform: "Google",
      date: "2 months ago"
    },
    {
      name: "Millie Demachen", 
      rating: 5,
      text: "Had the most amazing experience here! My teeth look unbelievable and all the staff are so kind and attentive. My teeth look exactly how i wanted them. i cant recommend this place enough!",
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
      name: "Phillip A.",
      rating: 5,
      text: "They are the best. Very punctual, was confident and happy with the work Nikita did. It was my first time and I was very comfortable and she answered all of my questions. Thank you Smile :)",
      platform: "Google", 
      date: "a year ago"
    },
    {
      name: "Nekel Tatt",
      rating: 5,
      text: "Best dental experience I have had! So professional and painless. I have already booked another consultation for composite bonding, I can't wait to start my straight teeth journey!",
      platform: "Google",
      date: "2 years ago"
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
      date: "9 months ago"
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
              {/* Patient info */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-dental-gold flex items-center justify-center">
                  <span className="text-2xl font-bold text-dental-black">
                    {testimonials[currentSlide].name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-lg text-dental-gold-foreground">
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
                <blockquote className="text-xl leading-relaxed text-dental-gold-foreground mb-6">
                  "{testimonials[currentSlide].text}"
                </blockquote>
                
                <div className="bg-dental-gray p-4 rounded-lg">
                  <p className="font-semibold text-dental-gold-foreground">Review from:</p>
                  <p className="text-muted-foreground">{testimonials[currentSlide].platform} • {testimonials[currentSlide].date}</p>
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