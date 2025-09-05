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
    <section className="section-padding bg-gradient-to-r from-primary to-brand-aqua text-white">
      <div className="container-custom text-center">
        <div className="space-y-6">
          <h2 className="text-white">Ready to Transform Your Transport?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join the sustainable logistics revolution with ally-mobility
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CTABanner;