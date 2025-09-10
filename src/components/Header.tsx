import { Phone, Mail, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <>
      {/* Top promotional bar */}
      <div className="bg-dental-gold text-dental-black py-2 text-center text-sm font-medium">
        LIMITED TIME: FREE CONSULTATION (NORMALLY £150) - BOOK TODAY
      </div>
      
      {/* Main header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="dental-section py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-dental-black">
                Elite<span className="text-dental-gold">Dental</span>
              </div>
            </div>
            
            {/* Contact info - desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-foreground">
                <Phone className="h-4 w-4 text-dental-gold" />
                <span className="font-medium">020 7123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <Mail className="h-4 w-4 text-dental-gold" />
                <span className="font-medium">info@elitedental.london</span>
              </div>
              <Button className="dental-cta">
                Book Consultation
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;