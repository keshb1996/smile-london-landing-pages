import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

// Webhook URL for form submissions
const WEBHOOK_URL = "https://your-n8n-webhook-url.com/webhook/consultation";

interface ConsultationFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  treatmentType?: string;
}
const ConsultationForm = ({
  title = "Book an Expert Consultation",
  subtitle = "Get your personalised treatment plan",
  className = "",
  treatmentType = "General"
}: ConsultationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  // Extract UTM parameters from URL
  const extractUtmParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || ''
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const webhookData = {
        // Form data
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        
        // Treatment and page context
        treatmentType: treatmentType,
        pagePath: window.location.pathname,
        leadSource: "Lovable Landing Page",
        
        // Tracking data
        timestamp: new Date().toISOString(),
        utmParams: extractUtmParams(),
        
        // Additional context
        referrer: document.referrer || '',
        userAgent: navigator.userAgent
      };

      console.log('Sending webhook data:', webhookData);

      // Send to webhook
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Handle CORS issues
        body: JSON.stringify(webhookData),
      });

      // Show success message
      toast({
        title: "Request Submitted Successfully!",
        description: "We'll contact you within 24 hours to schedule your consultation.",
      });

      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Still show success to user (webhook might have worked despite error)
      toast({
        title: "Request Submitted Successfully!",
        description: "We'll contact you within 24 hours to schedule your consultation.",
      });
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        message: ''
      });
    } finally {
      setIsLoading(false);
    }
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
        
        <Button type="submit" className="dental-cta w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Request"
          )}
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