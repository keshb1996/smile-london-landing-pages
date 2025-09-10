import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

interface ConsultationFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ConsultationForm = ({ 
  title = "Book a Free Consultation", 
  subtitle = "Get your personalized treatment plan",
  className = ""
}: ConsultationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      <div className="text-center mb-8">
        <h2 className="dental-subheading mb-3">{title}</h2>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="dental-form-input"
            required
          />
        </div>
        
        <div>
          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="dental-form-input"
            required
          />
        </div>
        
        <div>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="dental-form-input"
            required
          />
        </div>
        
        <div>
          <Textarea
            name="message"
            placeholder="Tell us about your dental concerns or questions..."
            value={formData.message}
            onChange={handleChange}
            className="dental-form-input min-h-24"
            rows={4}
          />
        </div>
        
        <Button type="submit" className="dental-cta w-full">
          Submit Request
        </Button>
        
        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to our privacy policy and consent to be contacted about our services.
        </p>
      </form>
    </div>
  );
};

export default ConsultationForm;