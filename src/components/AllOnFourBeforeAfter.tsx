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
    <section ref={ref} className={`bg-white ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-[30px]'}`}>
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-subheading text-dental-black mb-6">
            REAL ALL-ON-4 TRANSFORMATIONS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the incredible life-changing results our patients have achieved with All-on-4 dental implants. 
            These authentic transformations showcase the power of full-mouth restoration in just one day.
          </p>
        </div>
        
        <div className="grid gap-12">
          {transformations.map((transformation, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-dental-lg hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Before Image */}
                <div className="relative group">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </span>
                  </div>
                  <img 
                    src={transformation.before} 
                    alt="Before All-on-4 treatment"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* After Image */}
                <div className="relative group">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </span>
                  </div>
                  <img 
                    src={transformation.after} 
                    alt="After All-on-4 treatment"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              {/* Caption */}
              <div className="p-6 text-center">
                <p className="text-lg font-medium text-dental-black">
                  {transformation.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            * Individual results may vary. Treatment outcomes depend on individual case complexity and healing.
          </p>
          <button className="dental-cta">
            Book Your All-on-4 Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
export default AllOnFourBeforeAfter;