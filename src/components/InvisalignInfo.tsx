import { Check } from 'lucide-react';

const InvisalignInfo = () => {
  const benefits = [
    "Nearly invisible clear aligners",
    "Removable for eating and brushing",
    "No dietary restrictions",
    "Comfortable with no metal parts",
    "Shorter treatment time than traditional braces",
    "Easy to maintain oral hygiene",
    "Professional and social confidence",
    "Predictable results with 3D planning"
  ];

  return (
    <section className="bg-white">
      <div className="dental-section">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="dental-heading mb-8">
              What is <span className="text-dental-gold">Invisalign?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Invisalign is a revolutionary orthodontic treatment that uses a series of custom-made, 
              clear plastic aligners to gradually straighten your teeth. Unlike traditional metal braces, 
              Invisalign aligners are virtually invisible and can be removed for eating, brushing, and special occasions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The treatment process involves wearing each set of aligners for about two weeks, 
              gradually moving your teeth into their ideal position. Most treatments are completed 
              in 12-18 months, significantly faster than traditional orthodontic methods.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-dental-black">
              Benefits of Invisalign Treatment
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-dental-gold rounded-full p-1 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-dental-black" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvisalignInfo;