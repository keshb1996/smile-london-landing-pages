import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const AllOnFourBeforeAfter = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const transformations = [{
    before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&h=300&q=80",
    after: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&h=300&q=80",
    caption: "Complete smile transformation - Upper & Lower All-on-4"
  }, {
    before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=400&h=300&q=80",
    after: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&w=400&h=300&q=80",
    caption: "Single arch restoration - Natural looking results"
  }, {
    before: "https://images.unsplash.com/photo-1606811941337-7a4e891b7cba?auto=format&fit=crop&w=400&h=300&q=80",
    after: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&q=80",
    caption: "Full mouth rehabilitation - Restored function & aesthetics"
  }];
  return;
};
export default AllOnFourBeforeAfter;