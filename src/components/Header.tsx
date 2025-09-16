import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo and location */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <img 
                src="/lovable-uploads/a4e94840-c583-4032-9b0c-18600c1a83d6.png" 
                alt="Smile London" 
                className="h-8 object-contain mb-2"
              />
              <p className="text-sm text-gray-300 font-light">
                Based in Central London's world<br />
                renowned Harley Street district
              </p>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="hidden md:flex flex-col items-end space-y-2">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-yellow-400" />
              <a href="tel:02045401566" className="font-medium hover:text-yellow-400 transition-colors">020 4540 1566</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-yellow-400" />
              <span className="font-medium">info@smilelondon.co.uk</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-yellow-400" />
              <span className="font-medium">Marylebone, London</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;