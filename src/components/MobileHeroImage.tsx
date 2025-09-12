const MobileHeroImage = () => {
  return (
    <div className="block md:hidden w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-auto object-cover"
        poster="/lovable-uploads/672b8e8c-f891-49e3-a5b5-d551197b55cc.png"
      >
        <source src="https://res.cloudinary.com/dvezevabk/video/upload/v1757686423/Invisalign_Landing_Page_Hero_Image_wzro4j.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default MobileHeroImage;