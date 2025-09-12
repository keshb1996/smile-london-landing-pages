import { Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ConsultationForm from './ConsultationForm';

const AllOnFourHero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="bg-gradient-to-br from-dental-gold to-dental-gold/90 min-h-screen flex items-center">
      <div className="dental-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-dental-black">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Complete Smile in 
              <span className="block">One Day</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Replace all your teeth with just 4 implants. Say goodbye to dentures forever with our revolutionary All-on-4 treatment.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-lg">
                <div className="bg-dental-black rounded-full p-1">
                  <span className="block w-2 h-2 bg-dental-gold rounded-full"></span>
                </div>
                <span className="font-medium">Permanent solution - no more dentures</span>
              </div>
              <div className="flex items-center space-x-3 text-lg">
                <div className="bg-dental-black rounded-full p-1">
                  <span className="block w-2 h-2 bg-dental-gold rounded-full"></span>
                </div>
                <span className="font-medium">Full mouth restoration in one day</span>
              </div>
              <div className="flex items-center space-x-3 text-lg">
                <div className="bg-dental-black rounded-full p-1">
                  <span className="block w-2 h-2 bg-dental-gold rounded-full"></span>
                </div>
                <span className="font-medium">Only 4 implants needed per arch</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-dental-black hover:bg-dental-black/90 text-dental-gold font-semibold">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Free Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Book Your Expert Consultation</DialogTitle>
                  </DialogHeader>
                  <ConsultationForm 
                    title=""
                    subtitle="Normally £150 - FREE for limited time"
                  />
                </DialogContent>
              </Dialog>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-dental-black text-dental-black hover:bg-dental-black hover:text-dental-gold"
                asChild
              >
                <a href="tel:02072240999">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: 020 7224 0999
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/dea669a7-81ef-43c0-b4e3-6288b4a58ee9.png"
                alt="All-on-4 dental implant before and after results"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-black/30 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-dental-black">5⭐</div>
                <div className="text-sm text-dental-black opacity-80">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourHero;