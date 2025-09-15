import { CreditCard, Clock, Shield, Users } from "lucide-react";

const AllOnFourBenefits = () => {
  const benefits = [
    {
      icon: CreditCard,
      title: "Affordable Financing",
      description: "Flexible payment plans from £89/month with 0% interest options available"
    },
    {
      icon: Clock,
      title: "Same Day Smile",
      description: "Walk out with permanent teeth the same day as your procedure"
    },
    {
      icon: Shield,
      title: "5-Year Guarantee",
      description: "Comprehensive warranty covering all aspects of your treatment"
    },
    {
      icon: Users,
      title: "1,000+ Happy Patients",
      description: "Trusted by over 1,000 patients who transformed their smiles"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dvezevabk/video/upload/v1757960738/20250915_1922_Radiant_Dental_Transformation_simple_compose_01k579tw9mfxcs8qqst9ymyytq_on4t1f.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for content readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="dental-section relative z-10">
        <div className="text-center mb-16">
          <h2 className="dental-heading mb-6 text-white">
            Why Choose All-on-Four at Smile London?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our All-on-Four treatment combines cutting-edge technology with exceptional care 
            to deliver results that exceed expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-dental transition-all duration-300 group bg-white/10 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
              <p className="text-white/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-4xl font-bold text-primary">£150</div>
            <div className="text-left">
              <p className="font-semibold text-white">FREE Consultation</p>
              <p className="text-sm text-white/80">Normally £150 • Limited time offer</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourBenefits;