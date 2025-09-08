import { useState, createElement, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useCaseDelivery from "@/assets/use-case-delivery.jpg";
import useCaseTrades from "@/assets/use-case-trades.jpg";
import useCaseMunicipal from "@/assets/use-case-municipal.jpg";
import heroCargoBike from "@/assets/hero-cargo-bike.jpg";
import { Package, Truck, Zap, Shield, Users } from "lucide-react";
const Customers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState<number | null>(0); // Default to first item
  const customerIcons = [{
    icon: Package,
    title: "Affordable & Practical",
    subtitle: "More volume for less money",
    description: "Navigate narrow streets, bike lanes, and pedestrian areas that larger vehicles can't access. Deliver directly to customers' doors without parking restrictions or traffic delays.",
    isActive: false
  }, {
    icon: Truck,
    title: "Robust & Reliable",
    subtitle: "Proven components & materials",
    description: "Built with professional-grade materials and components tested for maximum durability in demanding urban environments.",
    isActive: false
  }, {
    icon: Zap,
    title: "More Flexibility",
    subtitle: "Modular & versatile, by bike or on foot",
    description: "Switch between bike-powered transport and manual operation. Modular design adapts to different cargo needs instantly.",
    isActive: false
  }, {
    icon: Shield,
    title: "Barrier-Free Mobility",
    subtitle: "Past traffic, through bollards, right to the doorstep",
    description: "Navigate narrow streets, bike lanes, and pedestrian areas that larger vehicles can't access. Deliver directly to customers' doors without parking restrictions or traffic delays.",
    isActive: false
  }, {
    icon: Users,
    title: "Simple & Accessible",
    subtitle: "No driver's license, no stress",
    description: "Anyone can operate our cargo solutions without special licensing or training. Simple, intuitive design makes urban logistics accessible to everyone.",
    isActive: false
  }];
  const headerUseCases = [{
    title: "Parcels & Delivery Services",
    subtitle: "More volume for less money",
    description: "Extend your capacity and capabilities with our modular trailer system. Perfect for last-mile delivery operations that need flexibility and efficiency.",
    image: useCaseDelivery,
    imageLeft: false
  }, {
    title: "Logistics & Transport",
    subtitle: "Fast, flexible, cost-conscious",
    description: "The professional solution for more speed in in-house & urban logistics. Streamline your operations with our modular cargo system.",
    image: useCaseTrades,
    imageLeft: true
  }];
  const detailedUseCases = [{
    title: "Cities & Municipalities",
    subtitle: "Today's handcart — by bike, cargo bike, or on foot",
    description: "Universal use guaranteed for municipal services, maintenance, and public space management. Sustainable solutions for modern city operations.",
    image: useCaseMunicipal,
    features: ["Sustainable operations", "Noise reduction", "Emission-free transport", "Flexible applications"]
  }, {
    title: "Food & Catering",
    subtitle: "Fresh delivery, zero emissions",
    description: "Transport fresh food and catering supplies with temperature-controlled options. Perfect for restaurants, caterers, and food delivery services needing reliable transport.",
    image: useCaseDelivery,
    features: ["Temperature control options", "Hygiene compliance", "Secure transport", "Professional presentation"]
  }, {
    title: "Healthcare & Medical",
    subtitle: "Reliable medical transport",
    description: "Safe and secure transport of medical supplies, equipment, and sensitive materials. Built for hospitals, pharmacies, and medical services requiring dependable logistics.",
    image: useCaseTrades,
    features: ["Secure compartments", "Climate control ready", "Medical compliance", "Emergency accessibility"]
  }, {
    title: "E-commerce & Retail",
    subtitle: "Last-mile delivery excellence",
    description: "Perfect for online retailers and local shops needing efficient, eco-friendly delivery solutions. Reach customers faster while reducing operational costs.",
    image: useCaseDelivery,
    features: ["Same-day delivery", "Reduced fuel costs", "Customer satisfaction", "Brand visibility"]
  }, {
    title: "Construction & Trades", 
    subtitle: "Tools and materials on the move",
    description: "Transport construction tools, materials, and equipment efficiently across job sites. Built tough for the demands of professional tradespeople.",
    image: useCaseTrades,
    features: ["Heavy-duty construction", "Weather resistant", "Secure storage", "Job site mobility"]
  }];

  // Handle navigation from ValuesBanner
  useEffect(() => {
    if (location.state?.activeIcon !== undefined) {
      setActiveIcon(parseInt(location.state.activeIcon));
    }
  }, [location.state]);

  // Auto-rotate functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((current) => {
        if (current === null) return 0;
        return (current + 1) % customerIcons.length;
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [customerIcons.length]);
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding mt-16 lg:mt-20 relative" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/lovable-uploads/2b358355-333a-4b95-a477-1d4caff1b7c6.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container-custom text-center space-y-8">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Warum Radlogistik
            </h1>
            <p className="text-2xl lg:text-3xl opacity-90">
              Die smarte Lösung für nachhaltige urbane Mobilität
            </p>
          </div>
        </div>
      </section>

      {/* Header Use Cases */}
      <section className="section-padding">
        <div className="container-custom space-y-16">
          {headerUseCases.map((useCase, index) => <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className={`order-2 ${useCase.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                <img src={useCase.image} alt={useCase.title} className="w-full h-[400px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
              </div>
              
              {/* Content */}
              <div className={`order-1 space-y-6 ${useCase.imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-3">
                  <h2 className="text-[#043a43] text-[188_93%_33%]">{useCase.title}</h2>
                  <h3 className="text-xl font-semibold text-[#43b28d]">{useCase.subtitle}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
                
                <Button onClick={() => navigate('/product')} className="btn-secondary-outline">
                  Learn More →
                </Button>
              </div>
            </div>)}
        </div>
      </section>

      {/* Interactive Icons Section */}
      <section className="section-padding bg-gradient-to-br from-brand-aqua to-brand-teal">
        <div className="container-custom text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-white">The Smart Alternative</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Fast, quiet and efficient — right into the heart of the city
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {customerIcons.map((item, index) => <div key={index} className="space-y-4">
                <button 
                  onClick={() => setActiveIcon(index)} 
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all duration-300 cursor-pointer group ${
                    activeIcon === index 
                      ? 'bg-white text-brand-aqua shadow-lg scale-110' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <item.icon className={`w-10 h-10 transition-transform duration-300 ${
                    activeIcon === index ? 'scale-110' : 'group-hover:scale-110'
                  }`} />
                </button>
                <div className="text-center">
                  <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                    activeIcon === index ? 'text-white' : 'text-white/90'
                  }`}>{item.title}</h3>
                  <p className="text-sm text-white/80 mt-1">{item.subtitle}</p>
                </div>
              </div>)}
          </div>

          {/* Active Icon Description */}
          {activeIcon !== null && <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  {createElement(customerIcons[activeIcon].icon, {
                className: "w-6 h-6 text-white"
              })}
                </div>
                <h3 className="text-2xl font-bold text-white">{customerIcons[activeIcon].title}</h3>
              </div>
              <p className="text-white/90 text-left leading-relaxed">
                {customerIcons[activeIcon].description}
              </p>
            </div>}
        </div>
      </section>

      {/* Additional Use Cases */}
      <section className="section-padding">
        <div className="container-custom space-y-16">
          {detailedUseCases.map((useCase, index) => <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <img src={useCase.image} alt={useCase.title} className="w-full h-[400px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
              </div>
              
              {/* Content */}
              <div className={`order-1 space-y-6 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
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
                    {useCase.features.map((feature, idx) => <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-brand-aqua rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                </div>
                
                <Button onClick={() => navigate('/product')} className="btn-secondary-outline">
                  Explore Solutions →
                </Button>
              </div>
            </div>)}
        </div>
      </section>

      {/* Test Ride CTA */}
      <section className="section-padding bg-gradient-to-br from-brand-purple via-accent to-brand-aqua">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-white">Book a Test Ride Now!</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Experience the ally-mobility difference firsthand. Schedule your test ride 
            and discover how our cargo solutions can transform your business.
          </p>
          <Button className="btn-secondary-outline text-white border-white hover:bg-white hover:text-brand-purple" onClick={() => navigate('/about-us#contact')}>
            Schedule Appointment
          </Button>
        </div>
      </section>

      {/* Large closing image */}
      <section className="h-[400px] relative">
        <img src={heroCargoBike} alt="ally-mobility in action" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </section>

      <Footer />
    </div>;
};
export default Customers;