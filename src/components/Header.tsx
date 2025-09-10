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
              <img 
                src="/lovable-uploads/f6c782dd-e64e-4944-b5b2-7fb4b4d18d36.png" 
                alt="Smile London Logo"
                className="h-16 w-auto mb-2"
              />
              <div className="text-white text-sm">
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