import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AllOnFourConsultationForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section 
      ref={ref}
      className={`bg-dental-gold text-dental-gold-foreground ${
        isVisible 
          ? 'animate-fade-up' 
          : 'opacity-0 translate-y-[30px]'
      }`}
    >
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-heading mb-6 text-dental-gold-foreground">
            Book Your Free Consultation Today
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Take the first step towards your new smile. Our comprehensive consultation 
            includes 3D imaging, treatment planning, and a complete assessment worth £150 - absolutely free.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Schedule Your Appointment</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-dental-gold-foreground font-semibold">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/90 border-white/20"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName" className="text-dental-gold-foreground font-semibold">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/90 border-white/20"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-dental-gold-foreground font-semibold">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 bg-white/90 border-white/20"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-dental-gold-foreground font-semibold">
                  Contact Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-2 bg-white/90 border-white/20"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-dental-gold-foreground font-semibold">
                    Preferred Date
                  </Label>
                  <Input
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/90 border-white/20"
                  />
                </div>
                
                <div>
                  <Label className="text-dental-gold-foreground font-semibold">
                    Preferred Time
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange('preferredTime', value)}>
                    <SelectTrigger className="mt-2 bg-white/90 border-white/20">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9am">9:00 AM</SelectItem>
                      <SelectItem value="10am">10:00 AM</SelectItem>
                      <SelectItem value="11am">11:00 AM</SelectItem>
                      <SelectItem value="12pm">12:00 PM</SelectItem>
                      <SelectItem value="2pm">2:00 PM</SelectItem>
                      <SelectItem value="3pm">3:00 PM</SelectItem>
                      <SelectItem value="4pm">4:00 PM</SelectItem>
                      <SelectItem value="5pm">5:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-dental-gold-foreground font-semibold">
                  Tell us about your dental concerns (optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 bg-white/90 border-white/20 min-h-[100px]"
                  placeholder="Describe any specific concerns or questions you have about All-on-Four treatment..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-white text-dental-gold-foreground py-4 text-lg font-bold hover:bg-white/90 transition-colors"
              >
                Book My Free Consultation
              </Button>
              
              <p className="text-center text-sm opacity-75">
                By submitting this form, you consent to be contacted about our services.
              </p>
            </form>
          </div>
          
          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Visit Our Clinic</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Smile London Dental Clinic</p>
                    <p className="opacity-90">123 Harley Street</p>
                    <p className="opacity-90">London W1G 6AN</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">020 7183 4091</p>
                    <p className="text-sm opacity-75">Available 7 days a week</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">info@smilelondon.co.uk</p>
                    <p className="text-sm opacity-75">We respond within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-2">Opening Hours</p>
                    <div className="space-y-1 text-sm opacity-90">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Find Us</h3>
              
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=800&h=450&q=80"
                  alt="Map location of Smile London Dental Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4 text-sm opacity-90">
                <p>Conveniently located in the heart of Marylebone, just 2 minutes walk from Bond Street Station.</p>
                <p className="mt-2">Free parking available on Sundays and after 6:30 PM on weekdays.</p>
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-bold mb-3">24/7 Emergency Support</h4>
              <p className="text-sm opacity-90 mb-3">
                We provide round-the-clock support during your treatment and recovery period.
              </p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold transition-colors">
                Emergency Contact: 07700 123456
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourConsultationForm;