import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import InteractiveMap from './InteractiveMap';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      info: "38 Queen Anne Street, Marylebone, London W1G 8HZ",
      extra: "Located in the prestigious medical district"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "020 7123 4567",
      extra: "Available 24/7 for emergencies"
    },
    {
      icon: Mail,
      title: "Email", 
      info: "info@smilelondon.co.uk",
      extra: "We respond within 2 hours"
    },
    {
      icon: Navigation,
      title: "Transport",
      info: "Oxford Circus Station (2 min walk)",
      extra: "Central, Circle, Elizabeth, Northern lines"
    }
  ];

  const openingHours = [
    { day: "Monday - Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Bank Holidays", hours: "Closed" }
  ];

  return (
    <section className="bg-white">
      <div className="dental-section">
        <div className="text-center mb-16">
          <h2 className="dental-subheading text-dental-black mb-6">
            VISIT OUR LONDON CLINIC
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conveniently located in the heart of London's medical district, 
            easily accessible by public transport with modern facilities.
          </p>
          <p className="text-sm text-dental-gold font-medium max-w-3xl mx-auto mt-3">
            Note: We are operating on Queen Anne Street while our Harley Street clinic is being refurbished
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-dental-gold rounded-full p-3 flex-shrink-0">
                    <detail.icon className="h-6 w-6 text-dental-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dental-black mb-2">{detail.title}</h3>
                    <p className="text-foreground font-medium mb-1">{detail.info}</p>
                    <p className="text-sm text-muted-foreground">{detail.extra}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Opening Hours */}
            <div className="bg-dental-gray rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-dental-gold rounded-full p-2">
                  <Clock className="h-5 w-5 text-dental-black" />
                </div>
                <h3 className="text-xl font-semibold text-dental-black">Opening Hours</h3>
              </div>
              
              <div className="space-y-3">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{schedule.day}</span>
                    <span className="text-dental-gold font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Directions */}
            <div className="bg-dental-gold/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-dental-black mb-4">Getting Here</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>By Tube:</strong> Oxford Circus Station - 2 minutes walk</p>
                <p><strong>By Bus:</strong> Routes 6, 7, 10, 25, 55, 98, 139, 189</p>
                <p><strong>By Car:</strong> Limited street parking, public car parks nearby</p>
                <p><strong>Accessibility:</strong> Wheelchair accessible with lift access</p>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="relative">
            <div className="bg-dental-gray rounded-2xl overflow-hidden shadow-dental-lg h-full min-h-96">
              <InteractiveMap />
            </div>
            
            {/* Overlay with key location info */}
            <div className="absolute top-6 left-6 bg-white rounded-lg p-4 shadow-dental">
              <div className="text-sm">
                <div className="font-semibold text-dental-black">Smile London</div>
                <div className="text-muted-foreground">38 Queen Anne Street</div>
                <div className="text-dental-gold font-medium">2 min from Oxford Circus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;