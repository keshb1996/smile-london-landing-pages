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
      name: "James Wilson",
      rating: 5,
      review: "Exceptional service from start to finish. The team made the Invisalign process seamless and comfortable.",
      platform: "Google",
      date: "2 weeks ago"
    },
    {
      name: "Sarah Mitchell", 
      rating: 5,
      review: "Dr. Johnson and her team are absolutely fantastic. My Invisalign treatment exceeded all expectations!",
      platform: "Trustpilot",
      date: "1 month ago"
    },
    {
      name: "Michael Chen",
      rating: 5, 
      review: "Professional, friendly, and highly skilled. The clinic is modern and the results speak for themselves.",
      platform: "Google",
      date: "3 weeks ago"
    },
    {
      name: "Lisa Rodriguez",
      rating: 5,
      review: "Amazing transformation! The clear aligners were so convenient and the staff was incredibly supportive.",
      platform: "Google", 
      date: "1 week ago"
    },
    {
      name: "David Thompson",
      rating: 5,
      review: "Couldn't be happier with my new smile. The entire process was smooth and professional.",
      platform: "Trustpilot",
      date: "2 months ago"
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
            <span className="text-xl font-semibold">4.9/5</span>
            <span className="text-muted-foreground">Based on 200+ reviews</span>
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
            See more reviews on Google and Trustpilot
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-dental-gold text-dental-black px-6 py-2 rounded-full font-semibold">
              Google: 4.9★
            </div>
            <div className="bg-dental-gold text-dental-black px-6 py-2 rounded-full font-semibold">
              Trustpilot: 4.8★
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;