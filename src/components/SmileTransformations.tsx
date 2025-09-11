import beforeAfterImage from '@/assets/before-after-1.jpg';

const SmileTransformations = () => {
  const transformations = [
    {
      id: 1,
      image: beforeAfterImage,
      duration: "12 months",
      age: "28 years old",
      description: "Corrected crowding and alignment"
    },
    {
      id: 2, 
      image: beforeAfterImage,
      duration: "16 months",
      age: "35 years old",
      description: "Fixed overbite and gaps"
    },
    {
      id: 3,
      image: beforeAfterImage, 
      duration: "14 months",
      age: "42 years old",
      description: "Straightened crooked teeth"
    }
  ];

  return (
    <section className="bg-dental-gray">
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-subheading text-dental-black mb-6">
            SMILE TRANSFORMATIONS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the incredible results our patients have achieved with Invisalign treatment. 
            Each transformation represents a journey to renewed confidence and improved oral health.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {transformations.map((transformation) => (
            <div key={transformation.id} className="bg-white rounded-2xl overflow-hidden shadow-dental-lg">
              <div className="relative">
                <img 
                  src={transformation.image} 
                  alt={`Before and after smile transformation case ${transformation.id}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-dental-gold text-dental-black px-3 py-1 rounded-full text-sm font-semibold">
                  Before & After
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-dental-gold font-semibold">{transformation.duration}</span>
                  <span className="text-muted-foreground">{transformation.age}</span>
                </div>
                <p className="text-foreground font-medium">{transformation.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            * Individual results may vary. Treatment time depends on individual case complexity.
          </p>
          <button className="dental-cta">
            See More Transformations
          </button>
        </div>
      </div>
    </section>
  );
};

export default SmileTransformations;