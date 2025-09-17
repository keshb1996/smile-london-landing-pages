import { useState } from 'react';
import { Check, MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ConsultationForm from './ConsultationForm';
import InteractiveMap from './InteractiveMap';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AllOnFourConsultationForm = () => {
  const { ref: goldSectionRef, isVisible: goldSectionVisible } = useScrollAnimation();
  const { ref: clinicSectionRef, isVisible: clinicSectionVisible } = useScrollAnimation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const benefits = [
    "Harley Street Centre of Excellence",
    "World-Renowned Dentists", 
    "5 year guarantee",
    "FREE X-ray",
    "0% interest-free finance available"
  ];

  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      info: ["Smile London", "38 Queen Anne Street", "Marylebone", "London W1G 8HZ"]
    },
    {
      icon: Phone,
      title: "Phone",
      info: ["020 4540 1566"]
    },
    {
      icon: Mail,
      title: "Email",
      info: ["info@smilelondon.co.uk"]
    },
    {
      icon: Navigation,
      title: "Transport",
      info: ["Oxford Circus Station", "(2 min walk)"]
    }
  ];

  const openingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <>
      {/* Golden Consultation Section */}
      <section 
        ref={goldSectionRef}
        className={`bg-dental-gold ${
          goldSectionVisible 
            ? 'animate-fade-up' 
            : 'opacity-0 translate-y-[30px]'
        }`}
      >
        <div className="dental-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-dental-black">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Book Your Expert Consultation Today
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Take the first step towards your perfect smile. Our expert team will assess your needs and create a personalised treatment plan just for you.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-dental-black rounded-full p-1">
                      <Check className="h-4 w-4 text-dental-gold" />
                    </div>
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-dental-lg">
              <ConsultationForm 
                title="Book Your Expert Consultation" 
                subtitle="Normally £150 - Limited time offer"
                treatmentType="All-on-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* White Clinic Visit Section */}
      <section 
        ref={clinicSectionRef}
        className={`bg-white ${
          clinicSectionVisible 
            ? 'animate-fade-up' 
            : 'opacity-0 translate-y-[30px]'
        }`}
      >
        <div className="dental-section">
          <div className="text-center mb-16">
            <h2 className="dental-heading mb-6">
              VISIT OUR LONDON CLINIC
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Located in the prestigious Harley Street medical district
            </p>
            <p className="text-lg text-muted-foreground">
              Our Queen Anne Street practice combines cutting-edge technology with luxurious comfort
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Details */}
            <div className="space-y-12">
              {/* Contact Information Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <detail.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{detail.title}</h3>
                    {detail.info.map((line, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Opening Hours */}
              <div className="bg-muted/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Opening Hours</h3>
                </div>
                <div className="space-y-2">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Getting Here */}
              <div>
                <h3 className="font-semibold mb-4">Getting Here</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong>By Underground:</strong> Bond Street, Oxford Circus, Regent's Park & Baker Street (Central, Bakerloo, Victoria, Hammersmith & City, Central and Jubilee line) - 2 minute walk
                  </p>
                  <p>
                    <strong>By Bus:</strong> Routes 7, 94, 98, 113, 139, 159, 390, 88 and 453
                  </p>
                  <p>
                    <strong>By Car:</strong> Limited street parking available. Nearest car parks: Q-Park Oxford Street and NCP Cavendish Square
                  </p>
                </div>
              </div>

              {/* Book Consultation Button */}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full">
                    Book Your Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <ConsultationForm 
                    title="Book Your Consultation" 
                    subtitle="Free initial consultation worth £150"
                    treatmentType="All-on-4"
                  />
                </DialogContent>
              </Dialog>
            </div>

            {/* Right Column - Map */}
            <div className="relative">
              <div className="bg-muted rounded-2xl overflow-hidden shadow-lg h-full min-h-96">
                <InteractiveMap />
                
                {/* Map Overlay */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                  <h4 className="font-semibold mb-2">Smile London</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    38 Queen Anne Street<br />
                    Marylebone, London W1G 8HZ
                  </p>
                  <p className="text-xs text-primary font-medium">
                    2 minutes from Oxford Circus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllOnFourConsultationForm;