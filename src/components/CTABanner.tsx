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
  
  return (
    <div className="text-center">
      <Button onClick={scrollToContact} className="btn-aqua">
        Contact Us
      </Button>
    </div>
  );
};
export default CTABanner;