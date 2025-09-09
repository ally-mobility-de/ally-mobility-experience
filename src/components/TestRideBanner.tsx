import { Button } from "@/components/ui/button";
import testRideImage from "/lovable-uploads/17af3fa0-85f3-4ef2-a676-a056b6303dc2.png";
const TestRideBanner = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={testRideImage} alt="Test ride ally-mobility cargo bike" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative section-padding">
        <div className="container-custom">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold">
                Book a Test Ride Now!
              </h2>
              <p className="text-white/90 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                Experience the power and versatility of ally-mobility trailers firsthand. 
                Feel the difference sustainable transport can make for your business.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={scrollToContact} className="btn-contact px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                Contact us
              </Button>
              
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-brand-yellow">500kg</div>
                <div className="text-white/80">Maximum payload capacity</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-brand-yellow">50km</div>
                <div className="text-white/80">Electric range with 2 batteries</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-brand-yellow">2.3m³</div>
                <div className="text-white/80">Cargo volume capacity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestRideBanner;