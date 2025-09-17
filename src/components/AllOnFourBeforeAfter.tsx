import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ConsultationForm from './ConsultationForm';
const AllOnFourBeforeAfter = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const transformations = [{
    image: "/before-after-transformation-1.png",
    caption: "Complete smile transformation"
  }, {
    image: "/before-after-transformation-2.png",
    caption: "Natural looking results"
  }, {
    image: "/before-after-transformation-3.png",
    caption: "Restored function & aesthetics"
  }];
  return <section ref={ref} className={`bg-white ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-[30px]'}`}>
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-subheading text-dental-black mb-6">
            REAL ALL-ON-4 TRANSFORMATIONS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the incredible life-changing results our patients have achieved with All-on-4 dental implants. 
            These transformations showcase the power of full-mouth restoration in just one day.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-dental-lg hover:shadow-xl transition-all duration-300 group">
              {/* Square Before/After Image */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex flex-col gap-2">
                    
                    
                  </div>
                </div>
                <img src={transformation.image} alt={`All-on-4 transformation: ${transformation.caption}`} className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Caption */}
              <div className="p-6 text-center">
                <p className="text-lg font-medium text-dental-black">
                  {transformation.caption}
                </p>
              </div>
            </div>)}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            * Individual results may vary. Treatment outcomes depend on individual case complexity and healing.
          </p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="dental-cta">
                Book Your All-on-4 Consultation
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <ConsultationForm title="Book Your All-on-4 Consultation" subtitle="Free consultation worth £150" treatmentType="All-on-4" />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>;
};
export default AllOnFourBeforeAfter;