import { EyeOff, Utensils, Heart, Clock } from 'lucide-react';
const InvisalignBenefits = () => {
  const benefits = [{
    icon: EyeOff,
    text: "Invisible, with no metal brackets or wires"
  }, {
    icon: Utensils,
    text: "Removable for eating & cleaning"
  }, {
    icon: Heart,
    text: "Comfortable custom fit"
  }, {
    icon: Clock,
    text: "Faster treatment than traditional braces"
  }];
  return <section className="bg-gray-50 py-0">
      <div className="dental-section">
        <div className="text-center mb-12">
          <h2 className="dental-heading">Why Choose Invisalign?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return <div key={index} className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-dental-gold/10 rounded-full p-4">
                  <IconComponent className="h-8 w-8 text-dental-gold" />
                </div>
                <span className="text-sm font-medium text-gray-800">{benefit.text}</span>
              </div>;
        })}
        </div>
        
        {/* Video Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="dental-heading text-2xl mb-3">See How Easy Invisalign Really Is</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how simple it is to put on your invisible, discreet aligners that fit seamlessly into your daily routine.
            </p>
          </div>
          <video 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            controls
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
          >
            <source 
              src="https://res.cloudinary.com/dvezevabk/video/upload/v1757687723/Invisalign_Landing_Page_Video_juf8tv.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>;
};
export default InvisalignBenefits;