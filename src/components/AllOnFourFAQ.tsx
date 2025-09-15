import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AllOnFourFAQ = () => {
  const faqs = [
    {
      question: "What exactly is All-on-Four dental implant treatment?",
      answer: "All-on-Four is a revolutionary dental implant technique that replaces a full arch of teeth using just four strategically placed titanium implants. Unlike traditional methods that require an implant for each tooth, All-on-Four maximizes the use of available bone and provides immediate function with a full set of permanent teeth in just one day."
    },
    {
      question: "How long does the All-on-Four procedure take?",
      answer: "The entire All-on-Four procedure typically takes 2-4 hours per arch and can be completed in a single day. You'll leave our clinic with temporary teeth that allow you to eat and speak normally immediately. The final permanent teeth are usually fitted 3-6 months later once the implants have fully integrated with your jawbone."
    },
    {
      question: "Am I a suitable candidate for All-on-Four implants?",
      answer: "Most patients with significant tooth loss or failing teeth are good candidates for All-on-Four. During your free consultation, we'll perform a comprehensive examination including 3D scans to assess your bone density and overall oral health. Even patients with some bone loss may still be suitable, as the angled placement of implants often eliminates the need for bone grafting."
    },
    {
      question: "How much does All-on-Four treatment cost?",
      answer: "Our All-on-Four treatment is currently priced at £12,995 per arch (normally £18,000). We offer various financing options including 0% interest plans from £89/month. This price includes everything: consultation, surgery, immediate temporary teeth, final permanent teeth, and our 5-year comprehensive warranty."
    },
    {
      question: "What is the success rate of All-on-Four implants?",
      answer: "All-on-Four has an excellent success rate of over 98% when performed by experienced implant specialists. Our clinic has successfully completed over 1,000 All-on-Four procedures with exceptional outcomes. The key factors for success include proper patient selection, precise surgical technique, and following post-operative care instructions."
    },
    {
      question: "How do I care for my All-on-Four teeth?",
      answer: "Caring for All-on-Four teeth is simple and similar to natural teeth. You'll brush twice daily with a soft-bristled toothbrush, floss regularly (we'll show you special techniques), and attend regular check-ups. Unlike removable dentures, there are no adhesives, soaking solutions, or removal required."
    },
    {
      question: "Will I be able to eat normally with All-on-Four implants?",
      answer: "Yes! One of the major benefits of All-on-Four is the ability to eat virtually any food you enjoy. Initially, we recommend softer foods for the first few weeks, but once fully healed, you can eat steak, apples, nuts, and other foods that may have been difficult with dentures or missing teeth."
    },
    {
      question: "What happens if something goes wrong with my All-on-Four implants?",
      answer: "We provide a comprehensive 5-year warranty covering all aspects of your All-on-Four treatment. This includes the implants, prosthetic teeth, and any complications arising from the procedure. Additionally, we offer 24/7 emergency contact during your initial healing period and ongoing support throughout your treatment journey."
    }
  ];

  return (
    <section className="bg-white">
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-heading mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about All-on-Four dental implants. 
            Can't find what you're looking for? Contact us for personalized information.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-dental-gray rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-16 text-center">
            <div className="bg-dental-gray rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our treatment coordinators are here to help. Book a free consultation 
                to discuss your specific situation and get personalized answers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="dental-cta">
                  Book Free Consultation
                </button>
                
                <div className="text-center">
                  <p className="font-semibold">Call: 020 7183 4091</p>
                  <p className="text-sm text-muted-foreground">Mon-Sun: 8am-8pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourFAQ;