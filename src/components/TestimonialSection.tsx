import { Star } from 'lucide-react';
import testimonialImage from '@/assets/testimonial-patient.jpg';
const TestimonialSection = () => {
  return <section className="bg-dental-gold">
      <div className="dental-section">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-4 md:mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 md:h-8 md:w-8 text-dental-black fill-current" />)}
          </div>
          
          <blockquote className="text-lg sm:text-xl md:text-3xl font-medium text-dental-black mb-6 md:mb-8 leading-relaxed">
            "I am delighted to share my outstanding experience with Invisalign, a game-changer in orthodontic treatment. From the start, the process was seamless, with custom-made, virtually invisible aligners allowing me to undergo the treatment without any self-consciousness. The flexibility of removing the aligners for oral care and special occasions made the journey convenient, and the speed of progress was impressive"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-3 md:space-x-4">
            <img src="/lovable-uploads/66b23212-9510-4b5b-8cce-76957148a66c.png" alt="Harry Bradley - Happy Invisalign Patient" className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-dental-black" />
            <div className="text-left">
              <div className="font-semibold text-dental-black text-base md:text-lg">Harry Bradley</div>
              <div className="text-dental-black opacity-80 text-sm md:text-base">Legal Practice Manager</div>
            </div>
          </div>
          
          <div className="mt-6 md:mt-8 text-xs md:text-sm text-dental-black opacity-75">Treatment completed in 8 months • Age 32</div>
        </div>
      </div>
    </section>;
};
export default TestimonialSection;