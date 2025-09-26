import { useState, createElement, useEffect, useRef } from 'react';
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const customerIcons = [{
    icon: Package,
    title: "Günstig & Praktisch",
    subtitle: "Mehr Volumen für weniger Geld",
    description: <div>
      <p> Sie senken Ihre Gesamtbetriebskosten durch <strong>geringere Anschaffungs-, Betriebs-, Wartungs- und Parkkosten</strong> im Vergleich zu motorisierten Fahrzeugen. Gleichzeitig sparen Sie Zeit, weil Sie näher ans Ziel kommen und Abläufe planbarer werden – auf dem Werksgelände, im Quartier oder bei Events. Weniger Standzeiten und eine höhere Stoppdichte <strong>steigern die Produktivität in Service, Logistik und kommunalen Einsätzen</strong>. Ergebnis: mehr Leistung pro Euro – in jedem Einsatzbereich.
      </p>
      </div>,
    isActive: false
  }, {
    icon: Truck,
    title: "Robust & Zuverlässig",
    subtitle: "Bewährte Komponenten & Materialien",
    description: <div>
      <p> Mit bewährten Komponenten und robusten Materialien sorgen wir <strong>langlebigen Dauereinsatz</strong> - von Handwerk bis zur Letzte-Meile. Gleichzeitig leisten Sie einen sichtbaren Beitrag zur Nachhaltigkeit: <strong>weniger CO₂ und Schadstoffe und geringere Lärmbelastung</strong>. Ihr Betrieb profiliert sich als innovativ und umweltbewusst – <strong>ein klarer Imagegewinn.</strong>
      </p>
      </div>,
    isActive: false
  }, {
    icon: Zap,
    title: "Mehr Flexibilität",
    subtitle: "Modular & vielseitig, per Rad oder zu Fuß",
    description: <div>
      <p> Modulare Aufbauten und der Wechsel zwischen <strong>Rad- und Handbetrieb</strong> lassen sich exakt auf Auftrag, Strecke und Tagesform zuschneiden. Sie können Mitarbeitende <strong>ohne Führerschein</strong> einsetzen, kurzfristig umplanen und verschiedene Zugfahrzeuge nutzen – vom zweispurigen Cargobike bis zum konventionellen Fahrrad. </p>
      </div>,
    isActive: false
  }, {
    icon: Shield,
    title: "Barrierefreie Mobilität",
    subtitle: "Am Verkehr vorbei, durch Poller, direkt vor die Haustür",
    description: <div>
      <p> Vorbei am Stau, über Radwege und – wo freigegeben – durch Fußgängerzonen erreichen Sie Ziele <strong>zuverlässig und pünktlich</strong>. Poller, verkehrsberuhigte Bereiche und Innenhöfe werden zugänglich, <strong>die Parkplatzsuche entfällt komplett</strong>. Besonders auf kurzen bis mittleren Distanzen in dicht besiedelten Gebieten ist das unschlagbar - <strong>direkte Anfahrt und flexible Routenwahl</strong>.</p>
      </div>,
    isActive: false
  }, {
    icon: Users,
    title: "Einfach & Zugänglich",
    subtitle: "Kein Führerschein, kein Stress",
    description: <div>
      <p> Der Einstieg ist niedrigschwellig: <strong>kein Führerschein, schnelle Einarbeitung</strong>, weniger Verkehrs- und Parkstress. Mehr Bewegung und frische Luft <strong>fördern Gesundheit und Motivation</strong>; das kann Ausfalltage senken und die Teamzufriedenheit erhöhen. Gleichzeitig wird Ihr Unternehmen für Bewerbende attraktiver – <strong>moderne, umweltfreundliche Mobilität überzeugt</strong>.
      </p>
      </div>,
    isActive: false
  }];
  const headerUseCases = [{
    title: "Verkehrsinfarkt",
    subtitle: "Rund 36% mehr Lieferfahrzeuge erwartet",
    description: <div>
      <p>Transport- und Lieferdienste in urbanen Gebieten stehen vor verschiedenen herausforderungen wie <strong>Staus, hohem Verkehrsaufkommen, nappen Parkplätzen</strong> und zeitlichen <strong>Einschränkungen durch Lärm- und Verkehrsschutzregelungen.</strong> Dies führt zu Verzögerung und Zeitdruck bei Lieferungen, besonders während der Stoßzeiten. </p>
      <p>Zudem gibt es immer <strong>weniger Park und Haltemögllichkeiten</strong>, was die Be- und Entladung möhsam und zeitintensiv macht. Des Weiteren steigen die Kosten für Fahrzeuge, Kraftstoff und Wartung während <strong>strengere Co2-Vorgaben</strong> den Druck auf umweltfreundlichere Lösungen erhöhen.</p>
      <p>Eine Studie von McKinsey zeigt, dass die zunehmende <strong>Lezte-Meile-Dienste</strong> in Großstädten bis 2030 zu einem Anstieg der Lieferfahrzeuge um <strong>35%</strong> führen könnten.</p>
      </div>,
    image: "/lovable-uploads/6e69389e-d4b4-4013-bb8c-c3a39015b30e.png",
    imageLeft: false
  }, {
    title: "Die Lösung: Radlogistik",
    subtitle: "Schnell, flexibel, kostenbewusst",
    description: <div>
      <p> Die Radlogistik bietet dazu eine <strong>flexible und umweltfreundliche Alternative</strong>. Fahrräder können <strong>Staus umgehen, verkehrsberuhigte Zonen vefahren</strong> und <strong>direkt bis vor die Haustür</strong> liefern, ohne dabei von Park oder halteverboten betroffen zu sein. Di Implementierung von E-Antrieben ermöglicht den Transport geößerer lasten. Da für Fahrräder <strong>kein Führerschein</strong> erforderlich ist, vergrößert sich der Pool potentieller Arbeitskräfte.</p>
      <p> Es besteht <strong>kaum noch ein Nachteil zu den deutlich größeren Transportern</strong>, obwohl <strong>Anschaffungs- und Betriebskosten</strong> deutlich geringer sind.</p>
      </div>,
    image: "/lovable-uploads/5c14c775-2f2c-43f4-ab3c-44ca8511b32a.png",
    imageLeft: true
  }];
  const detailedUseCases = [{
    title: "Post & Paketzustellung",
    subtitle: "Hohe Sendungsvolumen, viele Stopps & enge Zeitfenster",
    description: <div>
      <p> Sie liefern die letzte Meile schneller: Unser Schwerlast-Fahrradanhänger <strong>skaliert Ihre Tourenkapazität exakt nach Bedarf</strong> – ideal bei Peaks und schwankenden Volumina. Per An- & Abkoppeln wechseln Sie flexibel zwischen <strong>E-Bike, Cargobike oder Handbetrieb</strong> und erreichen so Fußgängerzonen, Innenhöfe und Gebäude ohne Umwege.</p>
      <p> Vorbeladene Hänger übernehmen Sie direkt am Sammelpunkt, Retouren nehmen Sie im selben Lauf mit. Die höhere Zuladung reduziert Rückfahrten und macht Ihre Routen planbarer, dichter und wirtschaftlicher.</p>
      </div>,
    image: "/lovable-uploads/274bf0dd-8d84-44ec-85ba-d17b9dd855a9.png",
    features: ["Skalierbar", "Park & Haltemöglichkeiten", "Geringe Anschaffungskosten", "Optimierte Routenführung"]
  }, {
    title: "Innerbetriebliche Logistik & Transport",
    subtitle: "Der moderne Handwagen — per Rad, Lastenrad oder zu Fuß",
    description: <div>
      <p> Auf Werksgeländen, in Messehallen oder auf dem Campus arbeitet unser Handwagen nahtlos mit Fahrrädern oder im Handbetrieb zusammen. Er verbindet Außen- und Innenlogistik ohne Umladen: <strong>standardisierte Maße</strong> erleichtern das Vorpacken und die Nutzung von Euro-Wechselbehältern.</p>
      <p> Der robuste Rahmen bewegt bis zu <strong>500 kg</strong> im Dauerbetrieb und lässt sich platzsparend senkrecht abstellen.</p>
      </div>,
    image: "/lovable-uploads/274bf0dd-8d84-44ec-85ba-d17b9dd855a9.png",
    features: ["Flexible Anwenungen", "Ergonomie & Motivation", "Robust & Zuverlässig", "Standartisiert"]
  }, {
    title: "Mobiles Handwerk & Dienstleistungen",
    subtitle: "Die mobile Plattform für Ihre Ideen",
    description: <div>
      <p> Ob mobiler <strong></strong>Werkzeugwagen, Marktstand oder Street-Food: Der Schwerlast-Anhänger bringt Ihr Werkzeug, Material und Ausrüstung zuverlässig dorthin, wo Sie arbeiten. Mit <strong>standardisierten Montagepunkten</strong> und modularen Aufbauten konfigurieren Sie Ihr Setup im Handumdrehen.</p>
      <p> Die City-taugliche Plattform bleibt <strong>geräumig, intuitiv und flexibel</strong> – wie die wahl des Zugfahrzeuges. </p>
      </div>,
    image: "/lovable-uploads/8ec38ff0-c003-4bdb-a181-986f630b322e.png",
    features: ["Robust & tragfähig", "Imagegewinn", "Echter Allrounder", "Nachhaltig"]
  }, {
    title: "Städte & Kommunen",
    subtitle: "Mit positivem Image im öffentlichen Raum",
    description: <div>
      <p> <strong>Universell einsetzbar</strong> für kommunale Dienste und den öffentlichen Raum: Unser Fahrradanhänger lässt sich mühelos durch <strong>Parks, Campusareale und Fußgängerzonen</strong> manövrieren. Vor Ort arbeiten Sie komfortabel im Handbetrieb; anschließend koppeln Sie ans Rad an und sind zügig im nächsten Bezirk.</p>
      <p>  So werden Stadtreinigung, Werbeanbringung, Parkpflege etc. leiser, bürgernäher und effizienter – mit positivem Vorbildcharakter. </p>
      </div>,
    image: "/lovable-uploads/274bf0dd-8d84-44ec-85ba-d17b9dd855a9.png",
    features: ["Modulare Aufbauten", "Lärmreduzierung", "Emissionsfreier Transport", "Universeller Einsatz"]
  }];

  // Handle navigation from ValuesBanner
  useEffect(() => {
    if (location.state?.activeIcon !== undefined) {
      setActiveIcon(parseInt(location.state.activeIcon));
    }
  }, [location.state]);

  // Function to start/restart the timer
  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIcon(current => {
        if (current === null) return 0;
        return (current + 1) % customerIcons.length;
      });
    }, 20000); // 20 seconds
  };

  // Function to handle icon click and reset timer
  const handleIconClick = (index: number) => {
    setActiveIcon(index);
    startTimer(); // Reset the timer
  };

  // Auto-rotate functionality
  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
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
                <button onClick={() => handleIconClick(index)} className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all duration-300 cursor-pointer group ${activeIcon === index ? 'bg-white text-brand-aqua shadow-lg scale-110' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                  <item.icon className={`w-10 h-10 transition-transform duration-300 ${activeIcon === index ? 'scale-110' : 'group-hover:scale-110'}`} />
                </button>
                <div className="text-center">
                  <h3 className={`font-semibold text-lg transition-colors duration-300 ${activeIcon === index ? 'text-white' : 'text-white/90'}`}>{item.title}</h3>
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
          <h2 className="text-white">Jetzt anfragen & Probefahrt sichern</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Überzeugen Sie sich selbst & erleben Sie unser Sytem auf Ihrer Strecke. Ob <strong>Pritsche, Box oder Wechselconatiner</strong>, nutzen Sie die Vorteile der Radlogistik.
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