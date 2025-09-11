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
    <section className="bg-gray-50 py-16">
      <div className="dental-section">
        <h2 className="text-4xl font-bold text-center mb-12">Real Smile Transformations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((transformation) => (
            <div key={transformation.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={transformation.image} 
                alt={`Transformation ${transformation.id}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">{transformation.duration} • {transformation.age}</p>
                <p className="font-medium">{transformation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SmileTransformations;