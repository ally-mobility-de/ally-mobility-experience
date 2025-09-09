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
    <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Bereit, Ihren Transport zu transformieren?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Schließen Sie sich der nachhaltigen Transportrevolution mit unseren innovativen Lastenrädern an.
        </p>
        <Button 
          onClick={scrollToContact}
          variant="secondary"
          size="lg"
          className="bg-white text-primary hover:bg-white/90"
        >
          Jetzt loslegen
        </Button>
      </div>
    </section>
  );
};
export default CTABanner;