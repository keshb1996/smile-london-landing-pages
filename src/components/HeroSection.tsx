import { Check, Award, Users, Shield, Camera, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import ConsultationForm from './ConsultationForm';

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const benefits = [
    "Harley Street Centre of Excellence",
    "World-Renowned Dentists",
    "5 year guarantee",
    "FREE X-ray",
    "0% Finance Available"
  ];

  return (
    <section 
      className="relative overflow-hidden bg-white md:bg-cover md:bg-center md:bg-no-repeat"
      style={{
        backgroundImage: window.innerWidth >= 768 ? `url('/lovable-uploads/0cd9cb82-1271-48c5-825f-c273ffe34760.png')` : 'none'
      }}
    >
      <div className="dental-section pt-0 md:pt-2">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-black space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Clear, discreet teeth alignment 
              <span className="text-dental-gold"> without traditional braces</span>
            </h1>
            <p className="text-2xl md:text-3xl text-black font-medium">
              ...in Marylebone, London
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-dental-gold rounded-full p-1">
                    <Check className="h-4 w-4 text-dental-black" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="dental-cta text-xl px-12 py-6">
                    Book Expert Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md bg-white">
                  <ConsultationForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Empty space where image was */}
          <div className="relative">
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;