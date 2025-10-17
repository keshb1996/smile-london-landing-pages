const MobileHeroImage = () => {
  return (
    <div className="block md:hidden w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-auto object-cover"
      >
        <source src="https://res.cloudinary.com/dvezevabk/video/upload/v1757686423/Invisalign_Landing_Page_Hero_Image_wzro4j.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default MobileHeroImage;