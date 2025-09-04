import { Button } from "@/components/ui/button";
const CTABanner = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="py-16 bg-gradient-to-r from-brand-aqua to-secondary">
      <div className="container-custom">
        
      </div>
    </section>;
};
export default CTABanner;