import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const GoogleReviews = () => {
  const { ref, isVisible } = useScrollAnimation();
  const reviews = [
    {
      name: "James Dore",
      rating: 5,
      review: "Great staff who were warm and welcoming and made the kids' first trip to the dentist lovely. Dr Gupta was excellent. Very pleased that this is our new dentist surgery!",
      platform: "Google",
      date: "2 months ago"
    },
    {
      name: "Millie Demachen", 
      rating: 5,
      review: "Had the most amazing experience here! My teeth look unbelievable and all the staff are so kind and attentive. My teeth look exactly how i wanted them. i cant recommend this place enough!",
      platform: "Google",
      date: "7 months ago"
    },
    {
      name: "Olya Nogovitsyna",
      rating: 5, 
      review: "Thanks to Dr. Nhova and Smile London, I have my confidence back! My teeth look fantastic, and I am genuinely impressed with the level of care I received.",
      platform: "Google",
      date: "10 months ago"
    },
    {
      name: "Phillip A.",
      rating: 5,
      review: "They are the best. Very punctual, was confident and happy with the work Nikita did. It was my first time and I was very comfortable and she answered all of my questions. Thank you Smile :)",
      platform: "Google", 
      date: "a year ago"
    },
    {
      name: "Nekel Tatt",
      rating: 5,
      review: "Best dental experience I have had! So professional and painless. I have already booked another consultation for composite bonding, I can't wait to start my straight teeth journey!",
      platform: "Google",
      date: "2 years ago"
    },
    {
      name: "Amy Barrett",
      rating: 5,
      review: "Amazing experience from start to finish. Such an understanding and patient team that aim to reach your every expectation. Could not be happier with my experience with Smile London! I highly recommend",
      platform: "Google",
      date: "a year ago"
    },
    {
      name: "Ruby Whish",
      rating: 5,
      review: "Everything was perfect ! From the consultation to the finished result I was so well taken care of and so happy with the results. I would recommend 100%",
      platform: "Google",
      date: "9 months ago"
    }
  ];

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
        <div className="text-center mb-16">
          <h2 className="dental-heading mb-6">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <span className="text-lg font-medium text-foreground">Google</span>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-dental-gold fill-current" />
              ))}
            </div>
            <span className="text-xl font-semibold">4.6/5</span>
            
          </div>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card border border-border rounded-lg p-6 shadow-dental h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-dental-gold fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.platform}</span>
                  </div>
                  
                  <p className="text-foreground mb-4 leading-relaxed">
                    "{review.review}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            See more reviews on Google
          </p>
          <div className="flex justify-center">
            <div className="bg-dental-gold text-dental-black px-6 py-2 rounded-full font-semibold">
              Google: 4.6★
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;