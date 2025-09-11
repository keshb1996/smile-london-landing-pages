const HeroImage = () => {
  return (
    <section 
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/0cd9cb82-1271-48c5-825f-c273ffe34760.png')`
      }}
    >
      {/* Optional overlay if needed */}
      <div className="absolute inset-0 bg-black/10"></div>
    </section>
  );
};

export default HeroImage;