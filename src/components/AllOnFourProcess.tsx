const AllOnFourProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation & Planning",
      description: "Comprehensive examination, 3D imaging, and custom treatment planning"
    },
    {
      number: "02", 
      title: "Surgery Day",
      description: "Implant placement and immediate temporary teeth fitted the same day"
    },
    {
      number: "03",
      title: "Final Restoration",
      description: "Your permanent, custom-crafted teeth are fitted after healing"
    }
  ];

  return (
    <section className="bg-dental-gold py-16">
      <div className="dental-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dental-black mb-4">
            Your All-on-4 Journey
          </h2>
          <p className="text-xl text-dental-black opacity-90">
            Simple process, life-changing results
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="bg-dental-black text-dental-gold text-3xl font-bold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-dental-black/20"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-dental-black mb-3">
                {step.title}
              </h3>
              <p className="text-dental-black opacity-80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllOnFourProcess;