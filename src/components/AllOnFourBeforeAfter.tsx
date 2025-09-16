import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const AllOnFourBeforeAfter = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const transformations = [{
    before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&h=300&q=80",
    after: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&h=300&q=80",
    caption: "Complete smile transformation - Upper & Lower All-on-4"
  }, {
    before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=400&h=300&q=80",
    after: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&w=400&h=300&q=80",
    caption: "Single arch restoration - Natural looking results"
  }, {
    before: "https://images.unsplash.com/photo-1606811941337-7a4e891b7cba?auto=format&fit=crop&w=400&h=300&q=80",
    after: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&q=80",
    caption: "Full mouth rehabilitation - Restored function & aesthetics"
  }];
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
        <div className="text-center mb-16">
          <h2 className="dental-subheading text-dental-black mb-6">
            ALL-ON-4 TRANSFORMATIONS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the incredible results our patients have achieved with All-on-4 dental implants. 
            These transformations showcase the life-changing power of full mouth restoration.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-dental-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative group">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img 
                      src={transformation.before} 
                      alt={`Before ${transformation.caption}`}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={transformation.after} 
                      alt={`After ${transformation.caption}`}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {transformation.caption}
                  </p>
                </div>
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
export default AllOnFourBeforeAfter;