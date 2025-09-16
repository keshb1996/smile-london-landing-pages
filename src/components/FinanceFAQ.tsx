import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FinanceFAQ = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is the finance really interest-free?",
      answer: "Yes, through our partner Tabeo Financial Services, we offer genuine 0% APR finance for eligible customers. This means you'll pay back exactly what you borrow with no interest charges, just spread over your chosen term."
    },
    {
      question: "What's the minimum and maximum I can borrow?",
      answer: "You can borrow from £1,000 up to £25,000 through Tabeo finance. This covers most dental treatments from single implants to full mouth rehabilitations like All-on-4."
    },
    {
      question: "How quickly can I get approved?",
      answer: "Tabeo provides instant decisions in most cases. The online application takes under 5 minutes to complete, and you'll typically get an immediate response about your eligibility and credit limit."
    },
    {
      question: "Will checking eligibility affect my credit score?",
      answer: "No, checking your eligibility with Tabeo uses a 'soft search' which won't impact your credit score. Only when you proceed with the full application will a credit check be performed."
    },
    {
      question: "What repayment terms are available?",
      answer: "Tabeo offers flexible repayment terms from 12 to 60 months, allowing you to choose monthly payments that fit your budget. The longer the term, the lower your monthly payments."
    },
    {
      question: "Are there any additional fees?",
      answer: "No, there are no hidden fees, setup costs, or early repayment charges with Tabeo finance. The amount you're quoted is exactly what you'll pay back."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section 
      ref={ref}
      className={`bg-white ${
        isVisible 
          ? 'animate-fade-up' 
          : 'opacity-0 translate-y-[30px]'
      }`}
    >
      <div className="dental-section">
        <div className="text-center mb-12">
          <h2 className="dental-heading mb-6">
            Finance <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Common questions about our 0% finance options through Tabeo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-dental-gray rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                    {index === 0 && (
                      <div className="mt-4">
                        <a 
                          href="https://lead.tabeo.co.uk/smile-london/finance?utm_source=landing_page&utm_medium=faq&utm_campaign=all_on_4"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                        >
                          Apply with Tabeo →
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Have more questions about finance options?
            </p>
            <a 
              href="https://lead.tabeo.co.uk/smile-london/finance?utm_source=landing_page&utm_medium=cta&utm_campaign=finance_faq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary bg-transparent text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Check Your Eligibility
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceFAQ;