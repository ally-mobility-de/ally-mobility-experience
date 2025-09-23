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
    title: "Günstig & Praktisch",
    subtitle: "Mehr Volumen für weniger Geld",
    description: "Navigieren Sie durch enge Straßen, Radwege und Fußgängerzonen, die größere Fahrzeuge nicht erreichen können. Liefern Sie direkt vor die Haustür ohne Parkbeschränkungen oder Verkehrsstaus.",
    isActive: false
  }, {
    icon: Truck,
    title: "Robust & Zuverlässig",
    subtitle: "Bewährte Komponenten & Materialien",
    description: "Gebaut mit professionellen Materialien und Komponenten, die für maximale Haltbarkeit in anspruchsvollen urbanen Umgebungen getestet wurden.",
    isActive: false
  }, {
    icon: Zap,
    title: "Mehr Flexibilität",
    subtitle: "Modular & vielseitig, per Rad oder zu Fuß",
    description: "Wechseln Sie zwischen Fahrradantrieb und manueller Bedienung. Modulares Design passt sich verschiedenen Ladungsanforderungen sofort an.",
    isActive: false
  }, {
    icon: Shield,
    title: "Barrierefreie Mobilität",
    subtitle: "Am Verkehr vorbei, durch Poller, direkt vor die Haustür",
    description: "Navigieren Sie durch enge Straßen, Radwege und Fußgängerzonen, die größere Fahrzeuge nicht erreichen können. Liefern Sie direkt vor die Haustür ohne Parkbeschränkungen oder Verkehrsstaus.",
    isActive: false
  }, {
    icon: Users,
    title: "Einfach & Zugänglich",
    subtitle: "Kein Führerschein, kein Stress",
    description: "Jeder kann unsere Cargo-Lösungen ohne spezielle Lizenz oder Schulung bedienen. Einfaches, intuitives Design macht urbane Logistik für jeden zugänglich.",
    isActive: false
  }];
  const headerUseCases = [{
    title: "Verkehrsinfarkt",
    subtitle: "Rund 36% mehr Lieferfahrzeuge erwartet",
    description: (
      <div>
        <p>Transport- und Lieferdienste in urbanen Gebieten stehen vor verschiedenen herausforderungen wie <strong>Staus, hohem Verkehrsaufkommen, nappen Parkplätzen</strong> und zeitlichen <strong>Einschränkungen durch Lärm- und Verkehrsschutzregelungen.</strong> Dies führt zu Verzögerung und Zeitdruck bei Lieferungen, besonders während der Stoßzeiten. Zudem gibt es immer <strong>weniger Park und Haltemögllichkeiten</strong>, was die Be- und Entladung möhsam und zeitintensiv macht. Des Weiteren steigen die Kosten für Fahrzeuge, Kraftstoff und Wartung während <strong>strengere Co2-Vorgaben</strong> den Druck auf umweltfreundlichere Lösungen erhöhen.</p>
        <p> </p>
        <p>Eine Studie von McKinsey zeigt, dass die zunehmende <strong>Lezte-Meile-Dienste</strong> in Großstädten bis 2030 zu einem Anstieg der Lieferfahrzeuge um <strong>35%</strong> führen könnten.</p>
      </div>
    ),
    image: "/lovable-uploads/6e69389e-d4b4-4013-bb8c-c3a39015b30e.png",
    imageLeft: false
  }, {
    title: "Die Lösung: Radlogistik",
    subtitle: "Schnell, flexibel, kostenbewusst",
    description: (
      <div>
      <p> Die Radlogistik bietet dazu eine <strong>flexible und umweltfreundliche Alternative</strong>. Fahrräder können <strong>Staus umgehen, verkehrsberuhigte Zonen vefahren</strong> und <strong>direkt bis vor die Haustür</strong> liefern, ohne dabei von Park oder halteverboten betroffen zu sein. Di Implementierung von E-Antrieben ermöglicht den Transport geößerer lasten. Da für Fahrräder <strong>kein Führerschein</strong> erforderlich ist, vergrößert sich der Pool potentieller Arbeitskräfte.</p>
      <p> Es besteht <strong>kaum noch ein Nachteil zu den deutlich größeren Transportern</strong>, obwohl <strong>Anschaffungs- und Betriebskosten</strong> deutlich geringer sind.</p>
      </div>
      ),
    image: "/lovable-uploads/5c14c775-2f2c-43f4-ab3c-44ca8511b32a.png",
    imageLeft: true
  }];
  const detailedUseCases = [{
    title: "Städte & Kommunen",
    subtitle: "Der heutige Handwagen — per Rad, Lastenrad oder zu Fuß",
    description: "Universeller Einsatz garantiert für kommunale Dienste, Wartung und öffentliche Raumverwaltung. Nachhaltige Lösungen für moderne Stadtoperationen.",
    image: "/lovable-uploads/274bf0dd-8d84-44ec-85ba-d17b9dd855a9.png",
    features: ["Nachhaltige Operationen", "Lärmreduzierung", "Emissionsfreier Transport", "Flexible Anwendungen"]
  }, {
    title: "Food & Catering",
    subtitle: "Frische Lieferung, null Emissionen",
    description: "Transport von frischen Lebensmitteln und Catering-Bedarf mit temperaturkontrollierten Optionen. Perfekt für Restaurants, Caterer und Food-Lieferdienste, die zuverlässigen Transport benötigen.",
    image: "/lovable-uploads/7a660477-c3ed-49dd-81a6-12488352bc7a.png",
    features: ["Temperaturkontrolloptionen", "Hygiene-Compliance", "Sicherer Transport", "Professionelle Präsentation"]
  }, {
    title: "Gesundheitswesen & Medizin",
    subtitle: "Zuverlässiger Medizintransport",
    description: "Sicherer und geschützter Transport von medizinischen Gütern, Ausrüstung und empfindlichen Materialien. Entwickelt für Krankenhäuser, Apotheken und medizinische Dienste, die zuverlässige Logistik benötigen.",
    image: "/lovable-uploads/77f80531-a6af-4684-8050-4933f562c6b1.png",
    features: ["Sichere Abteile", "Klimakontrolle bereit", "Medizinische Compliance", "Notfall-Zugänglichkeit"]
  }, {
    title: "E-Commerce & Einzelhandel",
    subtitle: "Exzellenz bei der letzten Meile",
    description: "Perfekt für Online-Händler und lokale Geschäfte, die effiziente, umweltfreundliche Lieferlösungen benötigen. Erreichen Sie Kunden schneller bei reduzierten Betriebskosten.",
    image: "/lovable-uploads/e4ed336e-42e5-410a-83ae-c4c356bea959.png",
    features: ["Same-Day-Lieferung", "Reduzierte Treibstoffkosten", "Kundenzufriedenheit", "Markensichtbarkeit"]
  }, {
    title: "Bau & Handwerk", 
    subtitle: "Werkzeuge und Materialien unterwegs",
    description: "Effizienter Transport von Bauwerkzeugen, Materialien und Ausrüstung über Baustellen hinweg. Robust gebaut für die Anforderungen professioneller Handwerker.",
    image: "/lovable-uploads/8ec38ff0-c003-4bdb-a181-986f630b322e.png",
    features: ["Robuste Konstruktion", "Wetterfest", "Sicherer Stauraum", "Mobilität auf der Baustelle"]
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
                
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  {useCase.description}
                </div>
                
                <Button onClick={() => navigate('/product')} className="btn-secondary-outline">
                  Mehr erfahren →
                </Button>
              </div>
            </div>)}
        </div>
      </section>

      {/* Interactive Icons Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-brand-aqua">
        <div className="container-custom text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-white">Die smarte Alternative</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Schnell, leise und effizient — direkt ins Herz der Stadt
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
                  <h4 className="font-semibold text-foreground">Wichtigste Vorteile:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {useCase.features.map((feature, idx) => <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-brand-aqua rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                </div>
                
                <Button onClick={() => navigate('/product')} className="btn-secondary-outline">
                  Lösungen erkunden →
                </Button>
              </div>
            </div>)}
        </div>
      </section>

      {/* Test Ride CTA */}
      <section className="section-padding bg-gradient-to-br from-brand-purple via-accent to-brand-aqua">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-white">Jetzt eine Testfahrt buchen!</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Erleben Sie den ally-mobility Unterschied aus erster Hand. Vereinbaren Sie Ihre Testfahrt 
            und entdecken Sie, wie unsere Cargo-Lösungen Ihr Geschäft transformieren können.
          </p>
          <Button className="btn-secondary-outline text-white border-white hover:bg-white hover:text-brand-purple" onClick={() => navigate('/about-us#contact')}>
            Termin vereinbaren
          </Button>
        </div>
      </section>

      {/* Large closing image */}
      <section className="h-[400px] relative">
        <img src="/lovable-uploads/c6f797a4-0a09-4b30-b973-9abf93d3fae5.png" alt="Aerial view of town square" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </section>

      <Footer />
    </div>;
};
export default Customers;