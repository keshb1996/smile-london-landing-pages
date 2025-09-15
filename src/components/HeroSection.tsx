import { Check, Award, Users, Shield, Camera, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import ConsultationForm from './ConsultationForm';
const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const benefits = ["Harley Street Centre of Excellence", "World-Renowned Dentists", "5 year guarantee", "FREE X-ray", "0% Finance Available"];
  return <section className="relative overflow-hidden bg-white">
      {/* Gradient Background - Desktop and Tablet only */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <img src="/src/assets/hero-gradient-background.jpg" alt="Luxurious gradient background" className="w-full h-full object-cover" />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Light grey gradient background for mobile */}
      <div className="block md:hidden absolute inset-0 w-full h-full bg-gradient-to-b from-gray-200 to-gray-300"></div>
      <div className="dental-section pt-6 md:pt-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-black md:text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Clear, discreet teeth alignment 
              <span className="text-dental-gold"> without traditional braces</span>
            </h1>
            <p className="text-2xl md:text-3xl text-black md:text-white font-medium">
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
                  <ConsultationForm />
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