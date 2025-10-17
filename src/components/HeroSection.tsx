import { Check, Award, Users, Shield, Camera, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import ConsultationForm from './ConsultationForm';
const HeroSection = ({ treatmentType }: { treatmentType?: string }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const benefits = ["Harley Street Centre of Excellence", "World-Renowned Dentists", "5 year guarantee", "FREE X-ray", "0% interest-free finance available"];
  return <section className="relative overflow-hidden bg-white">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dvezevabk/video/upload/v1757686423/Invisalign_Landing_Page_Hero_Image_wzro4j.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      {/* Mobile grey gradient background */}
      <div className="absolute inset-0 w-full h-full md:hidden bg-gradient-to-b from-muted/90 via-muted/95 to-background/90"></div>
      
      <div className="dental-section pt-6 md:pt-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-foreground md:text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Clear, discreet teeth alignment 
              <span className="text-dental-gold"> without traditional braces</span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground md:text-white font-medium">
              ...in Marylebone, London
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-center space-x-3">
                  <div className="bg-dental-gold rounded-full p-1">
                    <Check className="h-4 w-4 text-dental-black" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>)}
            </div>
            
            <div>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="dental-cta text-xl px-12 py-6">
                    Book Expert Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md bg-white">
                  <ConsultationForm treatmentType={treatmentType} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-dental-lg">
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;