import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useCaseDelivery from "@/assets/use-case-delivery.jpg";
import useCaseTrades from "@/assets/use-case-trades.jpg";
import useCaseMunicipal from "@/assets/use-case-municipal.jpg";
import heroCargoBike from "@/assets/hero-cargo-bike.jpg";

const Customers = () => {
  const useCases = [
    {
      id: 1,
      title: "Parcels & Delivery Services",
      subtitle: "More volume for less money",
      description: "Extend your capacity and capabilities with our efficient cargo solutions. Perfect for last-mile delivery in urban environments where traditional vehicles face restrictions.",
      image: useCaseDelivery,
      features: ["500kg payload capacity", "Weather-resistant cargo area", "Quick loading system", "Urban access advantages"],
      imageLeft: false
    },
    {
      id: 2,
      title: "Logistics & Transport",
      subtitle: "Fast, flexible, cost-conscious",
      description: "The professional solution for more speed in in-house & urban logistics. Streamline your operations with our modular cargo system.",
      image: useCaseTrades,
      features: ["Modular design", "Professional reliability", "Cost-effective operation", "Flexible deployment"],
      imageLeft: true
    },
    {
      id: 3,
      title: "Trades & Service Providers",
      subtitle: "The multitool for flexible deployment",
      description: "Build instead of jam — more time for your craft. Our cargo solutions help tradespeople reach job sites efficiently with all necessary tools and materials.",
      image: useCaseMunicipal,
      features: ["Tool organization", "Material transport", "Site accessibility", "Professional appearance"],
      imageLeft: false
    },
    {
      id: 4,
      title: "Cities & Municipalities",
      subtitle: "Today's handcart — by bike, cargo bike, or on foot",
      description: "Universal use guaranteed for municipal services, maintenance, and public space management. Sustainable and efficient urban operations.",
      image: useCaseDelivery,
      features: ["Sustainable operations", "Noise reduction", "Emission-free transport", "Flexible applications"],
      imageLeft: true
    },
    {
      id: 5,
      title: "Food & Catering Services",
      subtitle: "Fresh delivery, every time",
      description: "Keep your products fresh and secure during transport. Ideal for restaurants, caterers, and food delivery services.",
      image: useCaseTrades,
      features: ["Temperature control options", "Hygiene compliance", "Secure transport", "Professional presentation"],
      imageLeft: false
    },
    {
      id: 6,
      title: "Healthcare & Medical",
      subtitle: "Reliable medical transport",
      description: "Safe and secure transport of medical supplies, equipment, and sensitive materials. Perfect for hospitals, pharmacies, and medical services.",
      image: useCaseMunicipal,
      features: ["Secure compartments", "Climate control ready", "Medical compliance", "Emergency accessibility"],
      imageLeft: true
    },
    {
      id: 7,
      title: "Retail & E-commerce",
      subtitle: "Smart retail solutions",
      description: "Enhance your retail operations with flexible cargo solutions for inventory transport, customer deliveries, and mobile sales.",
      image: useCaseDelivery,
      features: ["Inventory management", "Customer service", "Mobile retail", "Brand visibility"],
      imageLeft: false
    },
    {
      id: 8,
      title: "Events & Entertainment",
      subtitle: "Mobile event solutions",
      description: "Transport equipment, supplies, and materials for events efficiently. Perfect for event organizers, caterers, and entertainment services.",
      image: useCaseTrades,
      features: ["Equipment transport", "Setup efficiency", "Venue accessibility", "Professional service"],
      imageLeft: true
    },
    {
      id: 9,
      title: "Education & Training",
      subtitle: "Learning on the move",
      description: "Mobile educational solutions for schools, training centers, and educational services. Transport materials and equipment safely.",
      image: useCaseMunicipal,
      features: ["Educational materials", "Equipment safety", "Accessibility", "Sustainable transport"],
      imageLeft: false
    },
    {
      id: 10,
      title: "Waste Management",
      subtitle: "Sustainable waste solutions",
      description: "Efficient waste collection and recycling transport. Perfect for small-scale operations and specialized waste management services.",
      image: useCaseDelivery,
      features: ["Waste segregation", "Efficient collection", "Environmental compliance", "Urban access"],
      imageLeft: true
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle mt-16 lg:mt-20">
        <div className="container-custom text-center space-y-8">
          <div className="relative mx-auto max-w-4xl">
            <img 
              src={heroCargoBike} 
              alt="Customer success stories" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Built for Every Use Case
                </h1>
                <p className="text-xl opacity-90">
                  Discover how ally-mobility solutions transform businesses across industries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="section-padding">
        <div className="container-custom space-y-16">
          {useCases.map((useCase, index) => (
            <div key={useCase.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              useCase.imageLeft ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={useCase.imageLeft ? 'lg:col-start-1' : 'lg:col-start-2'}>
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              
              {/* Content */}
              <div className={`space-y-6 ${useCase.imageLeft ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                <div className="space-y-3">
                  <h2 className="text-primary">{useCase.title}</h2>
                  <h3 className="text-xl font-semibold text-secondary">{useCase.subtitle}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-brand-aqua rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  onClick={() => scrollToSection('product')}
                  className="btn-secondary-outline"
                >
                  Learn More About Our Solutions
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Test Ride CTA */}
      <section className="section-padding bg-brand-aqua">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-white">Book a Test Ride Now!</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Experience the ally-mobility difference firsthand. Schedule your test ride 
            and discover how our cargo solutions can transform your business.
          </p>
          <Button className="btn-secondary-outline text-brand-aqua border-white hover:bg-white hover:text-brand-aqua">
            Schedule Appointment
          </Button>
        </div>
      </section>

      {/* Large closing image */}
      <section className="h-[400px] relative">
        <img 
          src={heroCargoBike} 
          alt="ally-mobility in action" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </section>

      <Footer />
    </div>
  );
};

export default Customers;