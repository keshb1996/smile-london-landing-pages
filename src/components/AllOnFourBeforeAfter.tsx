const AllOnFourBeforeAfter = () => {
  const beforeAfterImages = [
    {
      id: 1,
      src: "/lovable-uploads/02d62cc8-f83b-406c-a10b-b2adc96f859e.png",
      alt: "All-on-4 patient before and after transformation 1"
    },
    {
      id: 2,
      src: "/lovable-uploads/0b2abc10-f11d-4c69-96eb-8cd7ed7f4358.png", 
      alt: "All-on-4 patient before and after transformation 2"
    },
    {
      id: 3,
      src: "/lovable-uploads/28609ed5-650c-4d6c-bc43-5ee4fabfc4e6.png",
      alt: "All-on-4 patient before and after transformation 3"
    },
    {
      id: 4,
      src: "/lovable-uploads/66625a79-01c3-4a44-8581-efd2809ba38c.png",
      alt: "All-on-4 patient before and after transformation 4"
    },
    {
      id: 5,
      src: "/lovable-uploads/672b8e8c-f891-49e3-a5b5-d551197b55cc.png",
      alt: "All-on-4 patient before and after transformation 5"
    },
    {
      id: 6,
      src: "/lovable-uploads/89617672-6d3e-413c-97f5-350d677cb7f3.png",
      alt: "All-on-4 patient before and after transformation 6"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="dental-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dental-black mb-4">
            REAL PATIENT TRANSFORMATIONS
          </h2>
          <p className="text-xl text-gray-600">
            See the life-changing results our All-on-4 patients have achieved
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {beforeAfterImages.map((image) => (
            <div key={image.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-6">
            Individual results may vary. All treatments are performed by qualified professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AllOnFourBeforeAfter;