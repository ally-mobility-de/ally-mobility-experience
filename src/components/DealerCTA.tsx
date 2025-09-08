import { Button } from "@/components/ui/button";

const DealerCTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img 
                src="/lovable-uploads/c6ca3796-a012-4b60-b80e-3a0a8f3f21bd.png"
                alt="Become an ally-mobility dealer"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-brand-aqua font-medium uppercase tracking-wide">
                  Empower your Business
                </p>
                <h2 className="text-brand-green">Become a Dealer</h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With Antric you expand your range with the perfect synthesis of e-bike and 
                professional transport solution. Unlock a new, attractive customer base of 
                dynamic entrepreneurs who value sustainability and whose fleet needs are 
                growing with their business.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-aqua rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-brand-green">Growing Market</h4>
                    <p className="text-sm text-muted-foreground">Urban logistics solutions in high demand</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-aqua rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-brand-green">Premium Products</h4>
                    <p className="text-sm text-muted-foreground">High-quality, proven technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-aqua rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-brand-green">Full Support</h4>
                    <p className="text-sm text-muted-foreground">Training, marketing, and technical support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-aqua rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-brand-green">Competitive Terms</h4>
                    <p className="text-sm text-muted-foreground">Attractive margins and flexible programs</p>
                  </div>
                </div>
              </div>

              <Button 
                asChild
                className="btn-contact text-lg px-8 py-4"
              >
                <a href="mailto:info@ally-mobility.de">Contact us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerCTA;