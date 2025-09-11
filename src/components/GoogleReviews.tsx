import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GoogleReviews = () => {
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
    <section className="bg-white">
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-heading mb-6">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
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