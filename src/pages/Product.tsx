import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ValuesBanner from "@/components/ValuesBanner";
import dealerPerson from "@/assets/dealer-person.jpg";
import { Package, Truck, Zap, Shield, Users } from "lucide-react";
const Product = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeProduct, setActiveProduct] = useState('flatbed');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  // Handle URL parameters on component mount
  useEffect(() => {
    const productParam = searchParams.get('product');
    const hotspotParam = searchParams.get('hotspot');
    if (productParam && ['flatbed', 'box', 'swap'].includes(productParam)) {
      setActiveProduct(productParam);
    }
    if (hotspotParam) {
      setActiveHotspot(hotspotParam);
    }
  }, [searchParams]);
  const toggleHotspot = (hotspotId: string) => {
    setActiveHotspot(activeHotspot === hotspotId ? null : hotspotId);
  };

  // Calculate callout position based on hotspot location - always away from center with L-shaped lines
  const getCalloutPosition = (hotspot: any) => {
    const imageCenter = {
      x: 50,
      y: 50
    }; // Image center in percentage
    const calloutDistance = 20; // Distance for positioning

    // Determine placement direction away from center
    const isLeft = hotspot.x < imageCenter.x;
    const isTop = hotspot.y < imageCenter.y;

    // Position callout away from center
    let calloutX = isLeft ? hotspot.x - calloutDistance - 5 : hotspot.x + calloutDistance + 5;
    let calloutY = isTop ? hotspot.y - 20 : hotspot.y + 20;

    // Add viewport boundary checking with margins (in percentage)
    const viewportMargin = 15; // Margin from viewport edges in percentage
    const maxX = 100 - viewportMargin;
    const minX = viewportMargin;
    const maxY = 100 - viewportMargin;
    const minY = viewportMargin;

    // Constrain callout within viewport bounds
    calloutX = Math.max(minX, Math.min(maxX, calloutX));
    calloutY = Math.max(minY, Math.min(maxY, calloutY));

    // Calculate L-shaped line coordinates from hotspot border to callout border
    const hotspotRadius = 1.5; // Visual hotspot radius in percentage
    const calloutBorderOffset = 17; // Distance to callout border in percentage

    // Start from hotspot border (edge of the + button)
    const startX = hotspot.x;
    const startY = hotspot.y;

    // Calculate actual callout border position
    const calloutBorderX = isLeft ? calloutX + calloutBorderOffset : calloutX - calloutBorderOffset;
    const calloutBorderY = isTop ? calloutY + 8 : calloutY - 8;

    // L-shaped line: vertical first, then horizontal
    const midX = startX;
    const midY = calloutBorderY;
    const endX = calloutBorderX;
    const endY = calloutBorderY;
    return {
      x: calloutX,
      y: calloutY,
      startX,
      startY,
      midX,
      midY,
      endX,
      endY,
      isLeft,
      isTop
    };
  };
  const products = {
    flatbed: {
      name: 'Pritsche',
      image: "/lovable-uploads/6201085f-1cba-4953-b9f2-4fe3130f99ac.png",
      hotspots: [{
        id: 'frame',
        x: 25,
        y: 30,
        title: 'Verstärkter Rahmen',
        description: 'Professionelle Komponente für maximale Haltbarkeit'
      }, {
        id: 'cargo',
        x: 60,
        y: 50,
        title: 'Ladefläche',
        description: 'Vielseitige Zurrösen für sicheren Transport'
      }, {
        id: 'wheels',
        x: 15,
        y: 75,
        title: 'Heavy-Duty Räder',
        description: 'Geländegängige Räder für urbane und Off-Road Nutzung'
      }, {
        id: 'hitch',
        x: 80,
        y: 65,
        title: 'Universal-Kupplung',
        description: 'Kompatibel mit den meisten Fahrrad- und E-Bike-Typen'
      }, {
        id: 'suspension',
        x: 45,
        y: 80,
        title: 'Federungssystem',
        description: 'Fortschrittliche Federung für sanfte Fahrt und Ladungsschutz'
      }],
      data: [{
        label: "Nutzlast",
        value: "500 kg"
      }, {
        label: "Ladefläche",
        value: "186 × 86 cm"
      }, {
        label: "Seitenwände",
        value: "25 cm"
      }, {
        label: "Ausstattung",
        value: "Vielseitige Zurrösen"
      }]
    },
    box: {
      name: 'Box',
      image: "/lovable-uploads/95ac716d-de01-4c19-b0b4-9b381a05897a.png",
      hotspots: [{
        id: 'doors',
        x: 80,
        y: 40,
        title: 'Schlüsselloses Schließsystem',
        description: '2 Türen mit erweiterten Sicherheitsfeatures'
      }, {
        id: 'walls',
        x: 45,
        y: 25,
        title: 'Wetterfeste Wände',
        description: 'Vollständig geschlossener Schutz vor Witterungseinflüssen'
      }, {
        id: 'floor',
        x: 55,
        y: 70,
        title: 'Verstärkter Boden',
        description: 'Robuster Boden mit rutschfester Oberfläche'
      }, {
        id: 'ventilation',
        x: 25,
        y: 35,
        title: 'Belüftungssystem',
        description: 'Optimale Luftzirkulation für Ladungsschutz'
      }, {
        id: 'loading',
        x: 70,
        y: 60,
        title: 'Einfache Beladung',
        description: 'Niedrige Ladehöhe für bequemen Zugang'
      }],
      data: [{
        label: "Nutzlast",
        value: "500 kg"
      }, {
        label: "Ladefläche",
        value: "182 × 82 cm"
      }, {
        label: "Ladehöhe",
        value: "156 cm"
      }, {
        label: "Volumen",
        value: "2.3 m³"
      }, {
        label: "Türen",
        value: "2 Türen + schlüsselloses Schloss"
      }, {
        label: "Ausstattung",
        value: "Vielseitige Zurrösen"
      }]
    },
    swap: {
      name: 'Wechselcontainer',
      image: "/lovable-uploads/4767952c-fdf6-4f68-8b13-715cd936b332.png",
      hotspots: [{
        id: 'container',
        x: 30,
        y: 35,
        title: 'Rollen, laden & los',
        description: 'Bis zu 3 Rollcontainer werkzeugfrei'
      }, {
        id: 'castors',
        x: 70,
        y: 80,
        title: '4 Bremsrollen',
        description: 'Geschmeidige Mobilität und sicheres Parken'
      }, {
        id: 'mechanism',
        x: 50,
        y: 45,
        title: 'Schnellwechselsystem',
        description: 'Müheloser Container-Wechselmechanismus'
      }, {
        id: 'platform',
        x: 75,
        y: 55,
        title: 'Modulare Plattform',
        description: 'Stabile Basis für sichere Container-Montage'
      }, {
        id: 'guide',
        x: 35,
        y: 65,
        title: 'Container-Führung',
        description: 'Präzise Ausrichtung für einfache Beladung'
      }],
      data: [{
        label: "Konzept",
        value: "Rollen, laden & los"
      }, {
        label: "Container",
        value: "Bis zu 3 Rollcontainer werkzeugfrei"
      }, {
        label: "Beladung",
        value: "Rekord-Be- und Entladung"
      }, {
        label: "Nutzlast",
        value: "150 kg pro Container"
      }, {
        label: "Ladefläche",
        value: "74 × 56 cm"
      }, {
        label: "Ladehöhe",
        value: "156 cm"
      }, {
        label: "Volumen",
        value: "2.3 m³"
      }, {
        label: "Türen",
        value: "2 Türen + schlüsselloses Schloss"
      }, {
        label: "Ausstattung",
        value: "Vielseitige Zurrösen"
      }, {
        label: "Mobilität",
        value: "4 Bremsrollen"
      }]
    }
  };
  const customerIcons = [{
    icon: Package,
    title: "Lieferdienste",
    description: "Lösungen für die letzte Meile"
  }, {
    icon: Truck,
    title: "Logistik",
    description: "Professionelle Transportlösungen"
  }, {
    icon: Zap,
    title: "Serviceanbieter",
    description: "Mobile Serviceoperationen"
  }, {
    icon: Shield,
    title: "Kommunen",
    description: "Öffentliche Dienstanwendungen"
  }, {
    icon: Users,
    title: "Gesundheitswesen",
    description: "Transport medizinischer Güter"
  }];
  const trailerBaseData = [{
    label: "Ladekantenhöhe",
    value: "45 cm"
  }, {
    label: "Ladefläche L × B",
    value: "187 × 87 cm"
  }, {
    label: "Auflaufbremse",
    value: "4-Wege hydraulisch"
  }, {
    label: "Zul. Gesamtgewicht",
    value: "600 kg"
  }, {
    label: "Eigengewicht",
    value: "90 kg"
  }, {
    label: "Handbremse",
    value: "Mit Parkfunktion"
  }, {
    label: "Kupplung",
    value: "Kugelkopf 50 mm / 18 mm"
  }, {
    label: "Zugfahrzeug",
    value: "1- und 2-spurige Lastenräder"
  }, {
    label: "Antrieb",
    value: "Optional, nachrüstbar"
  }, {
    label: "Handbetrieb",
    value: "Bis zu 6 km/h"
  }];
  const currentProduct = products[activeProduct as keyof typeof products];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Product Selection */}
      <section id="maximum-versatility" className="section-padding bg-gradient-subtle mt-16 lg:mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Product selection and text */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-primary">Maximale Vielseitigkeit</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Flexible Module für jeden Zweck. Unsere Heavy-Duty-Fahrradanhänger kombinieren eine stabile Plattform mit wechselbaren Modulen.
                  Pritsche, Box, Wechselcontainer – <strong>ein System für jeden Zweck</strong>.
                </p>
              </div>

              {/* Product Switcher */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {Object.entries(products).map(([key, product]) => <Button key={key} onClick={() => {
                  setActiveProduct(key);
                  setActiveHotspot(null);
                }} variant={activeProduct === key ? "default" : "outline"} className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeProduct === key ? 'bg-primary text-primary-foreground shadow-soft' : 'bg-background border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'}`}>
                      {product.name}
                      {key === 'swap' && <span className="ml-2 text-xs bg-brand-aqua text-white px-2 py-1 rounded">NEU</span>}
                    </Button>)}
                </div>
              </div>

            </div>
            
            {/* Right side - Interactive Product Image */}
            <div className="relative overflow-visible">
              <div className="relative rounded-2xl overflow-visible shadow-soft bg-gradient-subtle">
                <img src={currentProduct.image} alt={`ally-mobility ${currentProduct.name} cargo trailer`} className="w-full h-auto object-cover transition-opacity duration-500 rounded-2xl" />
                
                {/* Interactive Hotspots */}
                {currentProduct.hotspots.map(hotspot => <button key={hotspot.id} onClick={() => toggleHotspot(hotspot.id)} className={`absolute hotspot ${activeHotspot === hotspot.id ? 'bg-brand-aqua text-white' : 'bg-white text-primary'}`} style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
                transform: 'translate(-50%, -50%)'
              }} aria-label={`View ${hotspot.title} details`}>
                    <span className="font-bold text-lg">+</span>
                  </button>)}

                {/* Hotspot Callouts with Connecting Lines */}
                {activeHotspot && (() => {
                const hotspot = currentProduct.hotspots.find(h => h.id === activeHotspot);
                if (!hotspot) return null;
                const calloutPos = getCalloutPosition(hotspot);
                return <>
                      {/* SVG for L-shaped connecting line */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{
                    zIndex: 10
                  }}>
                        {/* L-shaped line: vertical then horizontal from hotspot border to callout border */}
                        <polyline points={`${calloutPos.startX}%,${calloutPos.startY}% ${calloutPos.midX}%,${calloutPos.midY}% ${calloutPos.endX}%,${calloutPos.endY}%`} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" className="drop-shadow-sm" />
                      </svg>
                      
                      {/* Callout */}
                      <div className="absolute z-20 bg-background border-2 border-primary rounded-lg p-4 shadow-lg min-w-[340px] max-w-[380px] w-auto h-auto" style={{
                    left: `${calloutPos.x}%`,
                    top: `${calloutPos.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-primary text-sm leading-tight">
                            {hotspot.title}
                          </h4>
                          <p className="text-muted-foreground text-xs leading-relaxed">
                            {hotspot.description}
                          </p>
                        </div>
                        
                        {/* Close button */}
                        <button onClick={e => {
                      e.stopPropagation();
                      setActiveHotspot(null);
                    }} className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold hover:bg-primary/80 transition-colors" aria-label="Close callout">
                          ×
                        </button>
                      </div>
                    </>;
              })()}
              </div>

              {/* Product indicator */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-card">
                <div className="text-sm font-medium text-primary">
                  {currentProduct.name}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications with Use Case */}
          <div className="space-y-8">
              <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Technische Details zum Produkt</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Detaillierte technische Details für unsere Cargo-Module
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Use Case Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">
                    {currentProduct.name === 'Pritsche' && 'Perfekt für Bau & Handwerk'}
                    {currentProduct.name === 'Box' && 'Maximales Volumen für die Letzte-Meile'}
                    {currentProduct.name === 'Wechselcontainer' && 'Revolutionieren Sie Ihre Logistik'}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentProduct.name === 'Pritsche' && 'Die Pritsche bietet unbegrenzte Vielseitigkeit für Baumaterialien, Werkzeuge und Ausrüstung. Ihr offenes Design mit verstärkten Zurrösen macht sie zum echten Allrounder perfekt für Handwerker, Landschaftsgärtner und andere Service-Dienstleistungen, die geräumige Ladung transportieren wollen.'}
                    {currentProduct.name === 'Box' && 'Das geschlossene Box-Design bietet Wetterschutz und Sicherheit für Ihre Ladung. Perfekt für Lieferdienste, Letzte-Meile und Unternehmen, die große Volumina empfindlicher Güter zuverlässig durch die Stadt transportieren.'}
                    {currentProduct.name === 'Wechselcontainer' && 'Unser innovatives Wechselsystem ermöglicht extrem schnelle Übergaben: Container werden vorbeladen, am Fahrzeug in Sekunden getauscht und am Zielort nahtlos integriert – abstellen, neuen Container aufnehmen, weiterfahren. Ideal für hochfrequente Lieferrouten, Logistikunternehmen und alle Betriebe, die Taktzeiten senken und Durchsatz steigern wollen.'}
                  </p>
                </div>
                
                <div className="bg-gradient-subtle rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#520589]/[0.38]">
                      {currentProduct.name === 'Flatbed' && <Package className="w-4 h-4 text-primary" />}
                      {currentProduct.name === 'Box' && <Shield className="w-4 h-4 text-primary" />}
                      {currentProduct.name === 'Swap Container' && <Zap className="w-4 h-4 text-primary" />}
                    </div>
                    <h5 className="font-medium text-primary">Wichtigste Vorteile</h5>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {currentProduct.name === 'Pritsche' && <>
                        <li>• Vielseitige Zurrösen für jeden Ladungstyp</li>
                        <li>• Niedrige Ladehöhe für einfaches Be und Entladen</li>
                        <li>• Hochwertiger verstärkter Rahmen</li>
                        <li>• Kompatibel mit allen Fahrradtypen</li>
                      </>}
                    {currentProduct.name === 'Box' && <>
                        <li>• Wetter & Diebstahlschutz</li>
                        <li>• Schlüsselloses Schließsystem</li>
                        <li>• 2,3 m³ geschlossener Lagerraum</li>
                        <li>• Schnelles Be- und Entladen</li>
                      </>}
                    {currentProduct.name === 'Wechselcontainer' && <>
                        <li>• Rekord-Be- und Entladung</li>
                        <li>• Bis zu 3 Wechselcontainer</li>
                        <li>• Rollbar mit Bremsfunktion</li>
                        <li>• Standartisiert & Herstellerübergreifend</li>
                      </>}
                  </ul>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-card rounded-2xl p-6 border shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">
                    {currentProduct.name} Spezifikationen
                  </h3>
                </div>
                <Table>
                  <TableBody>
                    {currentProduct.data.map((item, index) => <TableRow key={index}>
                        <TableCell className="font-medium text-foreground">
                          {item.label}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {item.value}
                        </TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValuesBanner />

      {/* Download & CTA */}
      <section className="section-padding bg-secondary-light">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-primary">Detaillierte Informationen erhalten</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Laden Sie unser umfassendes Produktdatenblatt herunter oder vereinbaren Sie 
            eine persönliche Beratung, um Ihre spezifischen Transportanforderungen zu besprechen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary-outline">
              📄 ally-mobility Produktdatenblatt (PDF, 1,25 MB)
            </Button>
            <Button className="btn-contact" onClick={() => navigate('/about-us#contact')}>
              Kontaktieren Sie uns
            </Button>
          </div>
        </div>
      </section>

      {/* Become a Dealer */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={dealerPerson} alt="Become a dealer" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
            <div className="space-y-6">
              <h2 className="text-primary">Werden Sie Vertriebspartner</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Händler:</strong> Treten Sie unserem Partnernetzwerk bei und bringen Sie nachhaltige Transportlösungen in Ihre Region.
                Unsere Heavy-Duty-Anhänger und Aufbauten sind <strong>modular, standardisiert und simpel</strong> – ideal für Beratung, Demo und Verkauf.
                </p>
              <p><strong>Partner:</strong> Erweitern Sie Ihre Variantenvielfalt - Unser modulares, standardisiertes System macht Ihr Lastenrad zur <strong>kapazitätsstarken Gesamtlösung</strong>. 
                Als Zugfahrzeug erschließen Sie neue Segmente und profitieren von <strong>gegenseitiger Promotion</strong>. 
                Werden Sie Teil eines einheitlichen Systems und nutzen Sie die Vorteile einer <strong>standardisierten Logistikplattform</strong>: kompatible Schnittstellen, schnelle Integration und effiziente Abläufe. 
              </p>
              <Button className="btn-aqua" onClick={() => navigate('/about-us#contact')}>
                Vertriebspartner werden
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Product;