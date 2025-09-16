import { Gift, Calendar, CreditCard, Award, Users, Zap } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ConsultationForm from './ConsultationForm';
import dentistImage from '@/assets/dentist-portrait.jpg';
import clinicImage from '@/assets/clinic-interior.jpg';

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const benefits = [{
    icon: Calendar,
    title: "Open Weekends",
    description: "Saturday appointments available"
  }, {
    icon: Gift,
    title: "Your Consultation Includes:",
    description: "Free X-Ray, Hygiene, Whitening, and More!"
  }, {
    icon: CreditCard,
    title: "0% Finance Available",
    description: "We work with tabeo to provide 0% interest-free plans"
  }, {
    icon: Award,
    title: "Expert Team",
    description: "Certified Invisalign specialists with 15+ years experience"
  }, {
    icon: Users,
    title: "Patient-Focused",
    description: "Personalised care tailored to your unique needs"
  }, {
    icon: Zap,
    title: "Latest Technology",
    description: "3D imaging and digital treatment planning"
  }];

  return (
    <>
      <section className="bg-dental-black">
        <div className="dental-section">
          <div className="text-center mb-16">
            <h2 className="dental-heading text-white mb-6">Why Choose Smile London for Your Invisalign Treatment?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              <span className="text-dental-gold">Experience the difference</span>
              <span className="text-gray-300"> with London's premier Invisalign provider</span>
            </p>
          </div>
          
          {/* Benefits grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center text-white">
                <div className="bg-dental-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-dental-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team showcase - separate section */}
      <section className="bg-dental-gray">
        <div className="dental-section">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center text-white">
              <div className="relative mb-6">
                <img src="/lovable-uploads/02d62cc8-f83b-406c-a10b-b2adc96f859e.png" alt="Dr. Shruti Premsagar, Leading Invisalign Specialist" className="rounded-2xl mx-auto w-64 h-64 object-cover shadow-dental-lg" />
              </div>
              <h3 className="text-xl font-semibold text-dental-gold mb-2">Dr. Shruti Premsagar</h3>
              <p className="text-gray-700 mb-3">Leading Invisalign Specialist</p>
              <p className="text-sm text-gray-400">
                Award-winning Invisalign provider with extensive experience in complex orthodontic cases
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="relative mb-6">
                <img src="/lovable-uploads/28609ed5-650c-4d6c-bc43-5ee4fabfc4e6.png" alt="Harley Street W1 location sign" className="rounded-2xl mx-auto w-64 h-64 object-cover shadow-dental-lg" />
              </div>
              <h3 className="text-xl font-semibold text-dental-gold mb-2">Modern Clinic</h3>
              <p className="text-gray-700 mb-3">In a relaxed, discrete location</p>
              <p className="text-sm text-gray-400">
                Located in the heart of London with the latest dental technology and comfortable amenities
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="relative mb-6">
                <img src={clinicImage} alt="Elite Dental modern clinic interior" className="rounded-2xl mx-auto w-64 h-64 object-cover shadow-dental-lg" />
              </div>
              <h3 className="text-xl font-semibold text-dental-gold mb-2">Advanced Technology</h3>
              <p className="text-gray-700 mb-3">State-of-the-Art Facility</p>
              <p className="text-sm text-gray-400">
                We use cutting edge dental technology, which enables our dentists to give you the perfect smile.
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-dental-gold text-dental-black hover:bg-dental-gold/90 font-semibold px-12 py-4 text-lg">
                  Speak To An Expert
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md bg-white">
                <ConsultationForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;