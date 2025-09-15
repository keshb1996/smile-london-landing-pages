import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AllOnFourQuickConsultation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="bg-white">
      <div className="dental-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                BOOK AN EXPERT CONSULTATION
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="h-14 text-lg border-gray-200 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="h-14 text-lg border-gray-200 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-14 text-lg border-gray-200 focus:border-primary"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Submit Request
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and consent to be contacted about our services.
              </p>
            </form>
            
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-lg text-muted-foreground mb-2">Or call us directly</p>
              <div className="inline-flex items-center justify-center bg-gray-100 rounded-lg px-6 py-3">
                <span className="text-lg font-bold text-foreground">Call Now: 020 4540 1566</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            <img 
              src="/all-on-4-maria-hero.png" 
              alt="All-on-4 dental implants consultation"
              className="w-full h-[600px] object-cover object-center rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourQuickConsultation;