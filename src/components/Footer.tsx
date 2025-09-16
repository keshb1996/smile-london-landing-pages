import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <footer 
      ref={ref}
      className={`bg-black text-white py-16 ${
        isVisible 
          ? 'animate-fade-up' 
          : 'opacity-0 translate-y-[30px]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Logo and description */}
          <div className="space-y-8">
            <img 
              src="/lovable-uploads/a4e94840-c583-4032-9b0c-18600c1a83d6.png" 
              alt="Smile London" 
              className="h-12 object-contain"
            />
            
            <p className="text-gray-300 leading-relaxed max-w-lg">
              Smile London is a leading cosmetic dental practice located in the 
              heart of London's Harley Street area. With a team of world-class 
              dental professionals, cutting-edge technology, and dedicated 
              patient-centric care, Smile London provides the highest standards 
              of aesthetic dentistry.
            </p>

            <img 
              src="/lovable-uploads/dea669a7-81ef-43c0-b4e3-6288b4a58ee9.png" 
              alt="Registered with General Dental Council" 
              className="h-16 object-contain"
            />
          </div>
          
          {/* Right side - Contact info */}
          <div>
            <h3 className="text-2xl font-light mb-8 tracking-wider">CONTACT US</h3>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                We're open Monday to Saturday from 9.00am to 6.00pm.
              </p>
              
              <div className="space-y-2">
                <p className="font-medium text-white">Smile London</p>
                <p>38 Queen Anne Street</p>
                <p>Marylebone</p>
                <p>London</p>
                <p>W1G 8HZ</p>
                <a href="https://maps.app.goo.gl/6zgkSfpvZFuJZJ1h7" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">See Google Maps</a>
              </div>
              
              <div className="space-y-2">
                <p>Email: <span className="text-white">contact@smilelondon.co.uk</span></p>
                <p>Tel: <a href="tel:02045401566" className="text-yellow-400 hover:underline">020 4540 1566</a></p>
                <p>WhatsApp: <span className="text-white">07392212272</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;