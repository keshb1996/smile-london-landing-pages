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
  title = "Book an Expert Consultation",
  subtitle = "Get your personalised treatment plan",
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
  return <div className={`max-w-md mx-auto ${className}`}>
      <div className="text-center mb-4">
        <h2 className="dental-subheading mb-3">{title}</h2>
        
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="dental-form-input" required />
        </div>
        
        <div>
          <Input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="dental-form-input" required />
        </div>
        
        <div>
          <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="dental-form-input" required />
        </div>
        
        <div>
          
        </div>
        
        <Button type="submit" className="dental-cta w-full">
          Submit Request
        </Button>
        
        <div className="mt-6 p-4 bg-dental-gray rounded-lg">
          <h4 className="font-semibold mb-2">Flexible Payment Plans Available</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Worried about cost? We offer 0% interest-free finance options through our partner Tabeo.
          </p>
          <a 
            href="https://lead.tabeo.co.uk/smile-london/finance?utm_source=landing_page&utm_medium=consultation_form&utm_campaign=finance_check"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 border border-primary bg-transparent text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
          >
            Check Your Eligibility
          </a>
          <p className="text-xs text-muted-foreground mt-2">
            No impact on your credit score for eligibility check
          </p>
        </div>
        
        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to our privacy policy and consent to be contacted about our services.
        </p>
        
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground mb-3">Or call us directly</p>
          <Button variant="outline" className="w-full" asChild>
            <a href="tel:02045401566">
              Call Now: 020 4540 1566
            </a>
          </Button>
        </div>
      </form>
    </div>;
};
export default ConsultationForm;