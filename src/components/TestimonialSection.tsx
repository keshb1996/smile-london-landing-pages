import { Star } from 'lucide-react';
import testimonialImage from '@/assets/testimonial-patient.jpg';

const TestimonialSection = () => {
  return (
    <section className="bg-dental-gold">
      <div className="dental-section">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-dental-black fill-current" />
            ))}
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-dental-black mb-8 leading-relaxed">
            "I was initially hesitant about getting my teeth straightened as an adult, but the Invisalign 
            treatment at Elite Dental exceeded all my expectations. The aligners were comfortable, 
            virtually invisible, and the results were amazing. I now have the confident smile I've always wanted!"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <img 
              src={testimonialImage} 
              alt="Emma Thompson - Happy Invisalign Patient"
              className="w-16 h-16 rounded-full object-cover border-2 border-dental-black"
            />
            <div className="text-left">
              <div className="font-semibold text-dental-black text-lg">Emma Thompson</div>
              <div className="text-dental-black opacity-80">Marketing Executive, London</div>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-dental-black opacity-75">
            Treatment completed in 14 months • Age 32
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;