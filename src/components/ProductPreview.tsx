import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Package } from "lucide-react";
import flatbedImage from "@/assets/product-flatbed.jpg";
import boxImage from "@/assets/product-box.jpg";
import swapImage from "@/assets/product-swap.jpg";

const products = {
  flatbed: {
    name: 'Flatbed',
    image: flatbedImage,
    hotspots: [
      {
        id: 'frame',
        x: 25,
        y: 30,
        title: 'Reinforced Frame',
        description: 'Professional grade component for maximum durability'
      },
      {
        id: 'cargo',
        x: 60,
        y: 50,
        title: 'Cargo Area',
        description: 'Versatile lashing points for secure transport'
      },
      {
        id: 'wheels',
        x: 15,
        y: 75,
        title: 'Heavy-Duty Wheels',
        description: 'All-terrain wheels designed for urban and off-road use'
      },
      {
        id: 'hitch',
        x: 80,
        y: 65,
        title: 'Universal Hitch',
        description: 'Compatible with most bicycle types and e-bikes'
      },
      {
        id: 'suspension',
        x: 45,
        y: 80,
        title: 'Suspension System',
        description: 'Advanced suspension for smooth ride and cargo protection'
      }
    ],
    data: [
      { label: "Payload", value: "500 kg" },
      { label: "Cargo area", value: "186 × 86 cm" },
      { label: "Side walls", value: "25 cm" },
      { label: "Features", value: "Versatile lashing points" }
    ]
  },
  box: {
    name: 'Box',
    image: boxImage,
    hotspots: [
      {
        id: 'doors',
        x: 80,
        y: 40,
        title: 'Keyless Lock System',
        description: '2 doors with advanced security features'
      },
      {
        id: 'walls',
        x: 45,
        y: 25,
        title: 'Weatherproof Walls',
        description: 'Fully enclosed cargo protection from elements'
      },
      {
        id: 'floor',
        x: 55,
        y: 70,
        title: 'Reinforced Floor',
        description: 'Heavy-duty flooring with anti-slip surface'
      },
      {
        id: 'ventilation',
        x: 25,
        y: 35,
        title: 'Ventilation System',
        description: 'Optimal air circulation for cargo protection'
      },
      {
        id: 'loading',
        x: 70,
        y: 60,
        title: 'Easy Loading',
        description: 'Low loading height for convenient access'
      }
    ],
    data: [
      { label: "Payload", value: "500 kg" },
      { label: "Cargo area", value: "182 × 82 cm" },
      { label: "Cargo height", value: "156 cm" },
      { label: "Volume", value: "2.3 m³" },
      { label: "Doors", value: "2 doors + keyless lock" },
      { label: "Features", value: "Versatile lashing points" }
    ]
  },
  swap: {
    name: 'Swap Container',
    image: swapImage,
    hotspots: [
      {
        id: 'container',
        x: 30,
        y: 35,
        title: 'Roll, load & go',
        description: 'Up to 3 wheeled containers tool-free'
      },
      {
        id: 'castors',
        x: 70,
        y: 80,
        title: '4 Braked Castors',
        description: 'Smooth mobility and secure parking'
      },
      {
        id: 'mechanism',
        x: 50,
        y: 45,
        title: 'Quick-Release System',
        description: 'Effortless container swapping mechanism'
      },
      {
        id: 'platform',
        x: 75,
        y: 55,
        title: 'Modular Platform',
        description: 'Stable base for secure container mounting'
      },
      {
        id: 'guide',
        x: 35,
        y: 65,
        title: 'Container Guides',
        description: 'Precision alignment for easy loading'
      }
    ],
    data: [
      { label: "Concept", value: "Roll, load & go" },
      { label: "Containers", value: "Up to 3 wheeled containers tool-free" },
      { label: "Loading", value: "Record-time loading/unloading" },
      { label: "Payload", value: "150 kg per container" },
      { label: "Cargo area", value: "74 × 56 cm" },
      { label: "Cargo height", value: "156 cm" },
      { label: "Volume", value: "2.3 m³" },
      { label: "Doors", value: "2 doors + keyless lock" },
      { label: "Features", value: "Versatile lashing points" },
      { label: "Mobility", value: "4 braked castors" }
    ]
  }
};

const ProductPreview = () => {
  const [activeProduct, setActiveProduct] = useState('flatbed');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  // Calculate callout position based on hotspot location with horizontal/vertical lines
  const getCalloutPosition = (hotspot: any) => {
    const distance = 150; // Increased distance from hotspot
    
    // Determine which side to place callout based on hotspot position
    let calloutX = hotspot.x;
    let calloutY = hotspot.y;
    let lineType = 'horizontal'; // 'horizontal' or 'vertical'
    
    // Position callout with more distance and prefer horizontal/vertical placement
    if (hotspot.x < 50) {
      // Hotspot on left side - place callout to the right
      calloutX = hotspot.x + 40;
      calloutY = hotspot.y;
      lineType = 'horizontal';
    } else {
      // Hotspot on right side - place callout to the left  
      calloutX = hotspot.x - 40;
      calloutY = hotspot.y;
      lineType = 'horizontal';
    }
    
    // If horizontal placement would go too far out of bounds, use vertical
    if (calloutX < -20 || calloutX > 120) {
      calloutX = hotspot.x;
      if (hotspot.y < 50) {
        calloutY = hotspot.y + 30;
      } else {
        calloutY = hotspot.y - 30;
      }
      lineType = 'vertical';
    }
    
    // Allow callouts to go outside image bounds for better visibility
    calloutX = Math.max(-30, Math.min(130, calloutX));
    calloutY = Math.max(-20, Math.min(120, calloutY));
    
    return { 
      x: calloutX, 
      y: calloutY, 
      lineType,
      // Calculate intermediate point for L-shaped line
      midX: lineType === 'horizontal' ? (hotspot.x + calloutX) / 2 : hotspot.x,
      midY: lineType === 'vertical' ? (hotspot.y + calloutY) / 2 : hotspot.y
    };
  };

  useEffect(() => {
    const handleProductSwitch = (event: CustomEvent) => {
      const { productId } = event.detail;
      setActiveProduct(productId);
      setActiveHotspot(null);
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

  return (
    <section id="product" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-primary">Maximum Versatility</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Flexible modules for every purpose. Thanks to a modular concept and a robust, 
                high-quality platform, our heavy-duty bicycle trailers are ready for anything. 
                Whether Flatbed, Box, or Swap Container — we have the right solution. 
                Discover the possibilities.
              </p>
            </div>

            {/* Product Switcher */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {Object.entries(products).map(([key, product]) => (
                  <Button
                    key={key}
                    onClick={() => {
                      setActiveProduct(key);
                      setActiveHotspot(null);
                    }}
                    variant={activeProduct === key ? "default" : "outline"}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeProduct === key 
                        ? 'bg-primary text-primary-foreground shadow-soft' 
                        : 'bg-background border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'
                    }`}
                  >
                    {product.name}
                    {key === 'swap' && <span className="ml-2 text-xs bg-brand-aqua text-white px-2 py-1 rounded">NEW</span>}
                  </Button>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Product Image */}
          <div className="relative overflow-visible">
            <div className="relative rounded-2xl overflow-visible shadow-soft bg-gradient-subtle">
              <img 
                src={currentProduct.image} 
                alt={`ally-mobility ${currentProduct.name} cargo trailer`}
                className="w-full h-auto object-cover transition-opacity duration-500 rounded-2xl"
              />
              
              {/* Interactive Hotspots */}
              {currentProduct.hotspots.map((hotspot) => (
                <button
                  key={hotspot.id}
                  onClick={() => toggleHotspot(hotspot.id)}
                  className="absolute hotspot"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: 'translate(-50%, -50%)' }}
                  aria-label={`View ${hotspot.title} details`}
                >
                  <span className="text-primary font-bold text-lg">+</span>
                </button>
              ))}

              {/* Hotspot Callouts with Connecting Lines */}
              {activeHotspot && (() => {
                const hotspot = currentProduct.hotspots.find(h => h.id === activeHotspot);
                if (!hotspot) return null;
                
                const calloutPos = getCalloutPosition(hotspot);
                
                return (
                  <>
                    {/* SVG for connecting line */}
                    <svg 
                      className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                      style={{ zIndex: 10 }}
                    >
                      {/* Horizontal/Vertical line */}
                      {calloutPos.lineType === 'horizontal' ? (
                        <line
                          x1={`${hotspot.x > calloutPos.x ? hotspot.x - 1.5 : hotspot.x + 1.5}%`}
                          y1={`${hotspot.y}%`}
                          x2={`${calloutPos.x > hotspot.x ? calloutPos.x - 14 : calloutPos.x + 14}%`}
                          y2={`${calloutPos.y}%`}
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                          className="drop-shadow-sm"
                        />
                      ) : (
                        <line
                          x1={`${hotspot.x}%`}
                          y1={`${hotspot.y > calloutPos.y ? hotspot.y - 1.5 : hotspot.y + 1.5}%`}
                          x2={`${calloutPos.x}%`}
                          y2={`${calloutPos.y > hotspot.y ? calloutPos.y - 8 : calloutPos.y + 8}%`}
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                          className="drop-shadow-sm"
                        />
                      )}
                    </svg>
                    
                    {/* Callout */}
                    <div
                      className="absolute z-20 bg-background border-2 border-primary rounded-lg p-4 shadow-lg min-w-[320px] max-w-[360px] w-auto h-auto"
                      style={{ 
                        left: `${calloutPos.x}%`, 
                        top: `${calloutPos.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="space-y-2">
                        <h4 className="font-semibold text-primary text-sm leading-tight">
                          {hotspot.title}
                        </h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {hotspot.description}
                        </p>
                      </div>
                      
                      {/* Close button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHotspot(null);
                        }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold hover:bg-primary/80 transition-colors"
                        aria-label="Close callout"
                      >
                        ×
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>

            {/* Product indicator */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-card">
              <div className="text-sm font-medium text-primary">
                {currentProduct.name} Configuration
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-primary">Technical Specifications</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed technical data for our modular cargo platform
            </p>
          </div>

          <Tabs value={activeProduct} onValueChange={setActiveProduct} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted">
              <TabsTrigger 
                value="flatbed" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Flatbed
              </TabsTrigger>
              <TabsTrigger 
                value="box"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Box
              </TabsTrigger>
              <TabsTrigger 
                value="swap"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Swap Container
                <span className="ml-2 text-xs bg-brand-aqua text-white px-1.5 py-0.5 rounded">NEW</span>
              </TabsTrigger>
            </TabsList>
            
            {Object.entries(products).map(([key, product]) => (
              <TabsContent key={key} value={key} className="space-y-8">
                <div className="max-w-2xl mx-auto">
                  <div className="bg-card rounded-2xl p-6 border shadow-card">
                    <div className="flex items-center gap-3 mb-4">
                      <Package className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold text-primary">
                        {product.name} Specifications
                      </h3>
                    </div>
                    <Table>
                      <TableBody>
                        {product.data.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium text-foreground">
                              {item.label}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {item.value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;