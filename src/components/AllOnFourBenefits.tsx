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
    <section className="bg-white">
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-heading mb-6">
            Why Choose All-on-Four at Smile London?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our All-on-Four treatment combines cutting-edge technology with exceptional care 
            to deliver results that exceed expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-dental transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-dental-gray p-6 rounded-xl">
            <div className="text-4xl font-bold text-primary">£150</div>
            <div className="text-left">
              <p className="font-semibold">FREE Consultation</p>
              <p className="text-sm text-muted-foreground">Normally £150 • Limited time offer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourBenefits;