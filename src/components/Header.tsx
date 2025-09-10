import { Phone, Mail, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <>
      {/* Main header */}
      <header className="bg-dental-black">
        <div className="dental-section py-6">
          <div className="flex items-center justify-between">
            {/* Logo and location */}
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-dental-gold tracking-wider">
                SMILE
              </div>
              <div className="text-4xl font-bold text-dental-gold tracking-wider -mt-2">
                LONDON
              </div>
              <div className="text-white text-sm mt-2">
                Based in Central London's world<br />
                renowned Harley Street district
              </div>
            </div>
            
            {/* Contact info - desktop */}
            <div className="hidden md:flex flex-col items-end space-y-2">
              <div className="flex items-center space-x-2 text-dental-gold">
                <Phone className="h-4 w-4" />
                <span className="font-medium text-xl">020 4540 1566</span>
              </div>
              <div className="flex items-center space-x-2 text-dental-gold">
                <Mail className="h-4 w-4" />
                <span className="font-medium">info@smilelondon.co.uk</span>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden text-dental-gold">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;