import { Check, Calculator, Clock, CreditCard } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const TabeoFinanceSection = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const financeFeatures = ["0% APR on loans up to £25,000", "Spread your treatment cost over 12-60 months", "Quick online application - instant decision", "No hidden fees or charges"];
  const steps = [{
    icon: Calculator,
    title: "Choose your treatment plan",
    description: "Select the perfect treatment for your needs"
  }, {
    icon: CreditCard,
    title: "Apply online in under 5 minutes",
    description: "Quick and secure application process"
  }, {
    icon: Clock,
    title: "Get instant decision and start treatment",
    description: "Immediate approval and begin your transformation"
  }];
  return;
};
export default TabeoFinanceSection;