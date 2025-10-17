import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
// Supabase import removed - will be reconnected after enabling Lovable Cloud


// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
});

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
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
    },
  });
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

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    // TODO: Reconnect to Lovable Cloud database after remix
    console.log('Form submission (temporarily disabled):', {
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      treatmentType,
      utmParams: extractUtmParams()
    });

    toast({
      title: "Form Temporarily Disabled",
      description: "Please call us directly at 020 4540 1566 to book your consultation.",
      variant: "default"
    });

    form.reset();
  };
  return <div className={`max-w-md mx-auto ${className}`}>
      <div className="text-center mb-4">
        <h2 className="dental-subheading mb-3">{title}</h2>
        
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full Name" className="dental-form-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="tel" placeholder="Phone Number" className="dental-form-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email Address" className="dental-form-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="dental-cta w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>
        </form>
      </Form>
        
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
    </div>;
};
export default ConsultationForm;