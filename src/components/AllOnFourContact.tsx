import { Phone, MapPin, Clock } from 'lucide-react';

const AllOnFourContact = () => {
  return (
    <section className="bg-dental-black text-white py-12">
      <div className="dental-section">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dental-gold">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg opacity-90">
            Contact us today to discuss your All-on-4 treatment options
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-dental-gold rounded-full p-4 mb-4">
              <Phone className="h-6 w-6 text-dental-black" />
            </div>
            <h3 className="font-semibold mb-2 text-dental-gold">Call Us</h3>
            <p className="opacity-90">020 7224 0999</p>
            <p className="text-sm opacity-75">Available 9AM - 6PM</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-dental-gold rounded-full p-4 mb-4">
              <MapPin className="h-6 w-6 text-dental-black" />
            </div>
            <h3 className="font-semibold mb-2 text-dental-gold">Visit Us</h3>
            <p className="opacity-90">Harley Street, London</p>
            <p className="text-sm opacity-75">Premium dental clinic</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-dental-gold rounded-full p-4 mb-4">
              <Clock className="h-6 w-6 text-dental-black" />
            </div>
            <h3 className="font-semibold mb-2 text-dental-gold">Quick Response</h3>
            <p className="opacity-90">Same day consultation</p>
            <p className="text-sm opacity-75">Book online or call</p>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm opacity-75">
            © 2024 Smile London. All rights reserved. | Expert All-on-4 dental implant specialists
          </p>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourContact;