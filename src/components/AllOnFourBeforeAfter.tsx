const AllOnFourBeforeAfter = () => {
  const transformations = [
    {
      before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&h=300&q=80",
      after: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&h=300&q=80",
      caption: "Complete smile transformation - Upper & Lower All-on-4"
    },
    {
      before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=400&h=300&q=80",
      after: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&w=400&h=300&q=80", 
      caption: "Single arch restoration - Natural looking results"
    },
    {
      before: "https://images.unsplash.com/photo-1606811941337-7a4e891b7cba?auto=format&fit=crop&w=400&h=300&q=80",
      after: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&q=80",
      caption: "Full mouth rehabilitation - Restored function & aesthetics"
    }
  ];

  return (
    <section className="bg-dental-gray">
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-heading mb-6">
            Real Patient <span className="text-primary">Transformations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the life-changing results our patients achieve with All-on-Four dental implants. 
            Each transformation represents a renewed confidence and improved quality of life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-dental hover:shadow-dental-lg transition-all duration-300">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img 
                    src={transformation.before}
                    alt="Before All-on-Four treatment"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src={transformation.after}
                    alt="After All-on-Four treatment"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    After
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-center text-muted-foreground">{transformation.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-dental max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Transformation?</h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of patients who have already transformed their lives with All-on-Four dental implants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="dental-cta">
                Book Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                View More Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourBeforeAfter;