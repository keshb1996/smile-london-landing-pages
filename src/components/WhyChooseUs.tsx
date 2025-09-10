import { Clock, Calendar, Shield, Award, Users, Zap } from 'lucide-react';
import dentistImage from '@/assets/dentist-portrait.jpg';
import clinicImage from '@/assets/clinic-interior.jpg';
const WhyChooseUs = () => {
  const benefits = [{
    icon: Calendar,
    title: "Open Weekends",
    description: "Saturday and Sunday appointments available"
  }, {
    icon: Clock,
    title: "Evening Hours",
    description: "Convenient appointments until 8pm weekdays"
  }, {
    icon: Shield,
    title: "Insurance Accepted",
    description: "We work with most dental insurance plans"
  }, {
    icon: Award,
    title: "Expert Team",
    description: "Certified Invisalign specialists with 15+ years experience"
  }, {
    icon: Users,
    title: "Patient-Focused",
    description: "Personalized care tailored to your unique needs"
  }, {
    icon: Zap,
    title: "Latest Technology",
    description: "3D imaging and digital treatment planning"
  }];
  return <section className="bg-dental-black">
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-heading text-white mb-6">Why Choose Smile London for Your Invisalign Treatment?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference with London's premier Invisalign provider
          </p>
        </div>
        
        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => <div key={index} className="text-center text-white">
              <div className="bg-dental-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-dental-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>)}
        </div>
        
        {/* Team showcase */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center text-white">
            <div className="relative mb-6">
              <img src="/lovable-uploads/02d62cc8-f83b-406c-a10b-b2adc96f859e.png" alt="Dr. Shruti Premsagar, Leading Invisalign Specialist" className="rounded-2xl mx-auto w-64 h-64 object-cover shadow-dental-lg" />
            </div>
            <h3 className="text-xl font-semibold text-dental-gold mb-2">Dr. Shruti Premsagar</h3>
            <p className="text-gray-300 mb-3">Leading Invisalign Specialist</p>
            <p className="text-sm text-gray-400">
              Award-winning Invisalign provider with extensive experience in complex orthodontic cases
            </p>
          </div>
          
          <div className="text-center text-white">
            <div className="relative mb-6 bg-dental-gold rounded-2xl w-64 h-64 mx-auto flex items-center justify-center">
              <Zap className="h-24 w-24 text-dental-black" />
            </div>
            <h3 className="text-xl font-semibold text-dental-gold mb-2">Advanced Technology</h3>
            <p className="text-gray-300 mb-3">3D Digital Scanning</p>
            <p className="text-sm text-gray-400">
              Precise treatment planning with iTero digital impressions for optimal results
            </p>
          </div>
          
          <div className="text-center text-white">
            <div className="relative mb-6">
              <img src={clinicImage} alt="Elite Dental modern clinic interior" className="rounded-2xl mx-auto w-64 h-64 object-cover shadow-dental-lg" />
            </div>
            <h3 className="text-xl font-semibold text-dental-gold mb-2">Modern Clinic</h3>
            <p className="text-gray-300 mb-3">State-of-the-Art Facility</p>
            <p className="text-sm text-gray-400">
              Located in the heart of London with the latest dental technology and comfortable amenities
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;