import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dental-black text-white">
      <div className="dental-section py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-6">
              Elite<span className="text-dental-gold">Dental</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              London's premier Invisalign specialist clinic. We're committed to providing 
              exceptional dental care and helping you achieve the confident smile you deserve.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-dental-gold" />
                <span>020 7123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-dental-gold" />
                <span>info@elitedental.london</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-dental-gold" />
                <span>123 Harley Street, London W1G 7JU</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-dental-gold">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Invisalign Treatment</li>
              <li>Teeth Whitening</li>
              <li>General Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Dental Hygiene</li>
              <li>Emergency Care</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-dental-gold">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>About Us</li>
              <li>Book Consultation</li>
              <li>Patient Reviews</li>
              <li>Before & After</li>
              <li>Payment Plans</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Elite Dental London. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-dental-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-dental-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-dental-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;