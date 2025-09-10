const BeforeAfterGallery = () => {
  const beforeAfterImages = [
    {
      id: 1,
      src: "/lovable-uploads/c095f7d2-9b82-4761-acea-b064bf93cea7.png",
      alt: "Invisalign before and after transformation case 1"
    },
    {
      id: 2,
      src: "/lovable-uploads/89617672-6d3e-413c-97f5-350d677cb7f3.png",
      alt: "Invisalign before and after transformation case 2"
    },
    {
      id: 3,
      src: "/lovable-uploads/d3b1673e-2e49-4ebe-823d-707fab0acfd8.png",
      alt: "Invisalign before and after transformation case 3"
    }
  ];

  return (
    <section className="bg-white">
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-subheading text-dental-black mb-6">
            REAL PATIENT TRANSFORMATIONS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the incredible results our patients have achieved with Invisalign treatment. 
            These authentic before and after photos showcase the life-changing power of a straighter smile.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {beforeAfterImages.map((image) => (
            <div key={image.id} className="bg-white rounded-2xl overflow-hidden shadow-dental-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative group">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            * Individual results may vary. Treatment time depends on individual case complexity.
          </p>
          <button className="dental-cta">
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;