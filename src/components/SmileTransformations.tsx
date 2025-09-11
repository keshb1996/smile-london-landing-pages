import beforeAfterImage from '@/assets/before-after-1.jpg';
const SmileTransformations = () => {
  const transformations = [{
    id: 1,
    image: beforeAfterImage,
    duration: "12 months",
    age: "28 years old",
    description: "Corrected crowding and alignment"
  }, {
    id: 2,
    image: beforeAfterImage,
    duration: "16 months",
    age: "35 years old",
    description: "Fixed overbite and gaps"
  }, {
    id: 3,
    image: beforeAfterImage,
    duration: "14 months",
    age: "42 years old",
    description: "Straightened crooked teeth"
  }];
  return (
    <section className="dental-section bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Real Patient Transformations</h2>
        <p className="text-xl text-gray-600">See the amazing results our patients have achieved</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {transformations.map((transformation) => (
          <div key={transformation.id} className="bg-white rounded-2xl shadow-dental-lg overflow-hidden">
            <img 
              src={transformation.image} 
              alt={`Transformation case ${transformation.id}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-dental-gold font-semibold">{transformation.duration}</span>
                <span className="text-gray-600">{transformation.age}</span>
              </div>
              <p className="text-gray-700">{transformation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SmileTransformations;