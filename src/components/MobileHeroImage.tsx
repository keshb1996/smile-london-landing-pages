import { AspectRatio } from '@/components/ui/aspect-ratio';
import heroPoster from '@/assets/hero-invisalign.jpg';

const MobileHeroImage = () => {
  return (
    <div className="block md:hidden w-full">
      <AspectRatio ratio={16 / 9}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroPoster}
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dvezevabk/video/upload/v1757686423/Invisalign_Landing_Page_Hero_Image_wzro4j.mp4" type="video/mp4" />
        </video>
      </AspectRatio>
    </div>
  );
};

export default MobileHeroImage;