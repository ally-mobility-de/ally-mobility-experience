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
    <section className="section-padding bg-gradient-to-r from-brand-teal to-brand-purple">
      <div className="container-custom">
        <div className="text-center space-y-6">
          <h2 className="text-white">Ready to Transform Your Transport?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join the sustainable mobility revolution with ally-mobility's heavy-duty bicycle trailers.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-white text-brand-teal hover:bg-white/90"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CTABanner;