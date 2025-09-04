import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-brand-aqua to-secondary">
      <div className="container-custom">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              Book a Test Ride Now!
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Experience the power and versatility of ally-mobility trailers firsthand. 
              See how they can transform your transport capabilities.
            </p>
          </div>
          
          <Button 
            onClick={scrollToContact}
            className="bg-white text-brand-aqua hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;