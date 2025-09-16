import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PromotionalBanner = () => {
  const { ref, isVisible } = useScrollAnimation();
  return <section 
    ref={ref}
    className={`bg-dental-gold ${
      isVisible 
        ? 'animate-fade-up' 
        : 'opacity-0 translate-y-[30px]'
    }`}
  >
      <div className="dental-section py-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dental-black">Get your perfect smile in as little as 5 months</h2>
          <p className="text-xl text-dental-black mt-4 opacity-90">
            Professional Invisalign treatment with 0% interest-free finance options
          </p>
        </div>
      </div>
    </section>;
};
export default PromotionalBanner;