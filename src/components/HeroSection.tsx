import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cargo-bike.jpg";
import heroBikeStreet from "@/assets/hero-bike-street.jpg";
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center pt-20 abstract-bg" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(/lovable-uploads/f7493efb-03fe-4db9-b0d9-59f495b9cfbb.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-background leading-tight">Nachhaltig Großes Bewegen</h1>
              <p className="text-xl lg:text-2xl text-background/90 leading-relaxed max-w-2xl">Mit einem robusten Schwerlast-Fahrradanhänger bietet ally-mobility eine langlebige Lösung für effizienten nd umweltfreundlichen Transport von Lasten über 500kg. </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('product')} className="btn-hero">
                Go to Product
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')} className="btn-secondary-outline">
                Get in Touch
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 space-y-4">
              <p className="text-sm font-medium text-background uppercase tracking-wide">
                The Smart Alternative
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-background/80">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-aqua rounded-full"></div>
                  Fast, quiet and efficient
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-aqua rounded-full"></div>
                  Right into the heart of the city
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-aqua rounded-full"></div>
                  Up to 500kg payload
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img src="/lovable-uploads/4cff0e77-29e8-4430-a0ff-b601aa5d12e7.png" alt="ally-mobility heavy-duty cargo bicycle trailer" className="w-full h-auto object-cover" loading="eager" />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-card hidden lg:block">
              <div className="text-2xl font-bold text-brand-green">500kg</div>
              <div className="text-sm text-muted-foreground">Max Payload</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-card hidden lg:block">
              <div className="text-2xl font-bold text-brand-green">2.3m³</div>
              <div className="text-sm text-muted-foreground">Cargo Volume</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;