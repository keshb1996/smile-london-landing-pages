import { Check } from 'lucide-react';

const AllOnFourInfo = () => {
  const benefits = [
    "No more dentures or partial plates",
    "Eat, speak, and smile with confidence",
    "Prevents bone loss in the jaw",
    "Easy to clean and maintain",
    "Long-lasting results with proper care",
    "Improved facial support and appearance"
  ];

  return (
    <section className="bg-white py-16">
      <div className="dental-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dental-black mb-6">
              Replace All Your Teeth with Just 4 Implants
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              All-on-4 is a revolutionary dental implant technique that allows us to replace an entire arch of teeth using just four strategically placed implants. This innovative approach provides a permanent, stable foundation for your new teeth.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Unlike traditional implants that require one implant per tooth, All-on-4 maximizes available bone and eliminates the need for bone grafting in most cases. You'll walk out with a beautiful, functional smile the same day.
            </p>
            
            {/* Video Section */}
            <div className="mb-8">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source 
                    src="https://res.cloudinary.com/dvezevabk/video/upload/v1757613705/All_on_4_Video_720_x_480_px_wg8gkm.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-dental-black">
              Benefits of All-on-4 Treatment
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-dental-gold rounded-full p-1 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourInfo;