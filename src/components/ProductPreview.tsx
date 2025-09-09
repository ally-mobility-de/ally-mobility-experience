import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Package } from "lucide-react";
import boxImage from "@/assets/product-box.jpg";
import swapImage from "@/assets/product-swap.jpg";
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
      description: 'Vielseitige Verzurrösen für sicheren Transport'
    }, {
      id: 'wheels',
      x: 15,
      y: 75,
      title: 'Schwerlast-Räder',
      description: 'Geländetaugliche Räder für Stadt- und Offroad-Einsatz'
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
      description: 'Fortschrittliche Federung für ruhige Fahrt und Ladungsschutz'
    }],
    data: [{
      label: "Zuladung",
      value: "500 kg"
    }, {
      label: "Ladefläche",
      value: "186 × 86 cm"
    }, {
      label: "Seitenwände",
      value: "25 cm"
    }, {
      label: "Ausstattung",
      value: "Vielseitige Verzurrösen"
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
      description: '2 Türen mit fortschrittlichen Sicherheitsfunktionen'
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
      description: 'Schwerlast-Bodenbelag mit rutschfester Oberfläche'
    }, {
      id: 'ventilation',
      x: 25,
      y: 35,
      title: 'Belüftungssystem',
      description: 'Optimale Luftzirkulation zum Schutz der Ladung'
    }, {
      id: 'loading',
      x: 70,
      y: 60,
      title: 'Einfache Beladung',
      description: 'Niedrige Ladehöhe für bequemen Zugang'
    }],
    data: [{
      label: "Zuladung",
      value: "500 kg"
    }, {
      label: "Ladefläche",
      value: "182 × 82 cm"
    }, {
      label: "Ladehöhe",
      value: "156 cm"
    }, {
      label: "Volumen",
      value: "2,3 m³"
    }, {
      label: "Türen",
      value: "2 Türen + schlüsselloses Schloss"
    }, {
      label: "Ausstattung",
      value: "Vielseitige Verzurrösen"
    }]
  },
  swap: {
    name: 'Wechselcontainer',
    image: "/lovable-uploads/4767952c-fdf6-4f68-8b13-715cd936b332.png",
    hotspots: [{
      id: 'container',
      x: 30,
      y: 35,
      title: 'Rollen, laden & fahren',
      description: 'Bis zu 3 Rollcontainer werkzeugfrei'
    }, {
      id: 'castors',
      x: 70,
      y: 80,
      title: '4 gebremste Rollen',
      description: 'Sanfte Mobilität und sicheres Parken'
    }, {
      id: 'mechanism',
      x: 50,
      y: 45,
      title: 'Schnellwechsel-System',
      description: 'Müheloser Container-Wechselmechanismus'
    }, {
      id: 'platform',
      x: 75,
      y: 55,
      title: 'Modulare Plattform',
      description: 'Stabile Basis für sichere Container-Befestigung'
    }, {
      id: 'guide',
      x: 35,
      y: 65,
      title: 'Container-Führungen',
      description: 'Präzise Ausrichtung für einfache Beladung'
    }],
    data: [{
      label: "Konzept",
      value: "Rollen, laden & fahren"
    }, {
      label: "Container",
      value: "Bis zu 3 Rollcontainer werkzeugfrei"
    }, {
      label: "Beladung",
      value: "Rekordzeit Be-/Entladung"
    }, {
      label: "Zuladung",
      value: "150 kg pro Container"
    }, {
      label: "Ladefläche",
      value: "74 × 56 cm"
    }, {
      label: "Ladehöhe",
      value: "156 cm"
    }, {
      label: "Volumen",
      value: "2,3 m³"
    }, {
      label: "Türen",
      value: "2 Türen + schlüsselloses Schloss"
    }, {
      label: "Ausstattung",
      value: "Vielseitige Verzurrösen"
    }, {
      label: "Mobilität",
      value: "4 gebremste Rollen"
    }]
  }
};
const ProductPreview = () => {
  const [activeProduct, setActiveProduct] = useState('flatbed');
  const [activeHotspot, setActiveHotspot] = useState<string | null>('frame'); // Start with first hotspot open

  // Auto-cycle through hotspots every 10 seconds
  useEffect(() => {
    const currentProduct = products[activeProduct as keyof typeof products];
    const hotspots = currentProduct.hotspots;
    const interval = setInterval(() => {
      setActiveHotspot(prevHotspot => {
        if (!prevHotspot) return hotspots[0].id;
        const currentIndex = hotspots.findIndex(h => h.id === prevHotspot);
        const nextIndex = (currentIndex + 1) % hotspots.length;
        return hotspots[nextIndex].id;
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [activeProduct]);

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
  useEffect(() => {
    const handleProductSwitch = (event: CustomEvent) => {
      const {
        productId
      } = event.detail;
      setActiveProduct(productId);
      // Set first hotspot of new product as active
      const newProduct = products[productId as keyof typeof products];
      setActiveHotspot(newProduct.hotspots[0].id);
    };
    window.addEventListener('switchProduct', handleProductSwitch as EventListener);
    return () => {
      window.removeEventListener('switchProduct', handleProductSwitch as EventListener);
    };
  }, []);
  const currentProduct = products[activeProduct as keyof typeof products];
  const toggleHotspot = (hotspotId: string) => {
    setActiveHotspot(activeHotspot === hotspotId ? null : hotspotId);
  };
  return <section id="product" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-primary">Maximale Einsatzvielfalt</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">Flexible Aufbauten für jeden Zweck. Ob Pritsche, Box oder Wechselcontainer. Wir bieten Ihnen die passende Lösung.
Die robuste Basis bildet unser Fahrrad-Schwerlastanhänger, welcher für Lasten über 500 kg entwickelt wurde. Dank unseres Schnellwechsel-Systems ist ein Tausch zwischen den Aufbauten problemlos möglich.

            </p>
            </div>

            {/* Product Switcher */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {Object.entries(products).map(([key, product]) => <Button key={key} onClick={() => {
                setActiveProduct(key);
                // Set first hotspot of new product as active
                const newProduct = products[key as keyof typeof products];
                setActiveHotspot(newProduct.hotspots[0].id);
              }} variant={activeProduct === key ? "default" : "outline"} className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeProduct === key ? 'bg-primary text-primary-foreground shadow-soft' : 'bg-background border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'}`}>
                    {product.name}
                    {key === 'swap' && <span className="ml-2 text-xs bg-brand-aqua text-white px-2 py-1 rounded">NEU</span>}
                  </Button>)}
              </div>
            </div>

          </div>

          {/* Interactive Product Image */}
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
                    <div className="absolute z-20 bg-background border-2 border-primary rounded-lg p-4 shadow-lg min-w-[340px] max-w-[380px] w-auto h-auto cursor-pointer hover:shadow-xl transition-all duration-300" style={{
                  left: `${calloutPos.x}%`,
                  top: `${calloutPos.y}%`,
                  transform: 'translate(-50%, -50%)'
                }} onClick={() => {
                  // Navigate to product page with product and hotspot state
                  window.location.href = `/product?product=${activeProduct}&hotspot=${activeHotspot}#maximum-versatility`;
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
                {currentProduct.name} Konfiguration
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        
      </div>
    </section>;
};
export default ProductPreview;