import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does Invisalign work?",
      answer: "Invisalign uses a series of custom-made, clear aligners that gradually move your teeth into the desired position. Each aligner is worn for about two weeks before moving to the next one in the series. The aligners are made from a patented thermoplastic material that applies gentle, consistent pressure to move teeth."
    },
    {
      question: "Is Invisalign treatment painful?",
      answer: "Most patients experience mild discomfort for the first few days when starting a new aligner, which is normal and indicates the treatment is working. This discomfort is typically much less than what's experienced with traditional metal braces and can be managed with over-the-counter pain relief if needed."
    },
    {
      question: "Can I eat normally with Invisalign?",
      answer: "Yes! One of the biggest advantages of Invisalign is that the aligners are removable. You can take them out to eat and drink anything you want. We recommend removing aligners for all meals and snacks, then brushing your teeth before putting them back in."
    },
    {
      question: "How long does Invisalign treatment take?",
      answer: "Treatment time varies depending on the complexity of your case, but most treatments are completed in 12-18 months. Some minor corrections can be completed in as little as 6 months, while more complex cases may take up to 24 months. We'll provide you with a personalized timeline during your consultation."
    },
    {
      question: "How much does Invisalign cost?",
      answer: "The cost of Invisalign varies depending on the complexity of your case and length of treatment. We offer flexible payment plans and work with most insurance providers. During your expert consultation, we'll provide you with a detailed cost breakdown and discuss payment options that work for your budget."
    },
    {
      question: "Are the aligners really invisible?",
      answer: "Invisalign aligners are made from clear, medical-grade plastic that is virtually invisible when worn. Most people won't notice you're wearing them unless they look very closely. This makes them an excellent choice for adults and teens who want to straighten their teeth discreetly."
    },
    {
      question: "How often do I need to visit the dentist during treatment?",
      answer: "Typically, you'll visit our clinic every 6-8 weeks for progress checks and to receive your next sets of aligners. These appointments are usually quick (15-30 minutes) and allow us to monitor your progress and make any necessary adjustments to your treatment plan."
    },
    {
      question: "What happens after my Invisalign treatment is complete?",
      answer: "After completing your Invisalign treatment, you'll need to wear retainers to maintain your new smile. We'll provide you with custom retainers and instructions on how often to wear them. Initially, you may need to wear them full-time, then gradually reduce to nighttime only."
    }
  ];

  return (
    <section className="bg-dental-gray">
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-subheading text-dental-black mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about Invisalign treatment. 
            Still have questions? Contact us for a personalized consultation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-dental border-none"
              >
                <AccordionTrigger className="px-8 py-6 text-left font-semibold text-dental-black hover:text-dental-gold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Have more questions? We're here to help!
          </p>
          <button className="dental-cta">
            Call Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;