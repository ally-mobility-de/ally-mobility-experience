import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productFlatbed from "@/assets/product-flatbed.jpg";
import productBox from "@/assets/product-box.jpg";
import productSwap from "@/assets/product-swap.jpg";
import dealerPerson from "@/assets/dealer-person.jpg";
import { Package, Truck, Zap, Shield, Users } from "lucide-react";

const Product = () => {
  const navigate = useNavigate();
  const [activeProduct, setActiveProduct] = useState('flatbed');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const toggleHotspot = (hotspotId: string) => {
    setActiveHotspot(activeHotspot === hotspotId ? null : hotspotId);
  };

  // Calculate callout position based on hotspot location - always away from center with L-shaped lines
  const getCalloutPosition = (hotspot: any) => {
    const imageCenter = { x: 50, y: 50 }; // Image center in percentage
    const calloutDistance = 45; // Distance from hotspot to callout
    
    // Determine placement direction away from center
    const isLeft = hotspot.x < imageCenter.x;
    const isTop = hotspot.y < imageCenter.y;
    
    // Position callout away from center
    let calloutX = isLeft ? hotspot.x - calloutDistance : hotspot.x + calloutDistance;
    let calloutY = isTop ? hotspot.y - 25 : hotspot.y + 25;
    
    // Allow callouts to extend beyond image boundaries for visibility
    calloutX = Math.max(-35, Math.min(135, calloutX));
    calloutY = Math.max(-25, Math.min(125, calloutY));
    
    // Calculate L-shaped line coordinates (horizontal then vertical)
    const midX = calloutX;
    const midY = hotspot.y;
    
    return { 
      x: calloutX, 
      y: calloutY,
      midX,
      midY,
      isLeft,
      isTop
    };
  };

  const products = {
    flatbed: {
      name: 'Flatbed',
      image: productFlatbed,
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
      image: productBox,
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
      image: productSwap,
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

  const customerIcons = [
    { icon: Package, title: "Delivery Services", description: "Last-mile delivery solutions" },
    { icon: Truck, title: "Logistics", description: "Professional transport solutions" },
    { icon: Zap, title: "Service Providers", description: "Mobile service operations" },
    { icon: Shield, title: "Municipalities", description: "Public service applications" },
    { icon: Users, title: "Healthcare", description: "Medical supply transport" }
  ];

  const trailerBaseData = [
    { label: "Load edge height", value: "45 cm" },
    { label: "Load area L × W", value: "187 × 87 cm" },
    { label: "Overrun brake", value: "4-way hydraulic" },
    { label: "Perm. total weight", value: "600 kg" },
    { label: "Curb weight", value: "90 kg" },
    { label: "Handbrake", value: "With parking function" },
    { label: "Hitch", value: "Ball head 50 mm / 18 mm" },
    { label: "Towing vehicle", value: "1- and 2-track cargo bikes" },
    { label: "Drive", value: "Optional, retrofittable" },
    { label: "Hand operation", value: "Up to 6 km/h" }
  ];

  const currentProduct = products[activeProduct as keyof typeof products];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Product Selection */}
      <section className="section-padding bg-gradient-subtle mt-16 lg:mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Product selection and text */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-primary">Maximum Versatility</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Flexible modules for every purpose. Thanks to a modular concept and a robust, 
                  high-quality platform, our heavy-duty bicycle trailers are ready for anything. 
                  Whether Flatbed, Box, or Swap Container — we have the right solution.
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

              {/* Active Hotspot Info */}
              {activeHotspot && (
                <div className="hotspot-info">
                  {(() => {
                    const hotspot = currentProduct.hotspots.find(h => h.id === activeHotspot);
                    if (!hotspot) return null;
                    
                    return (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">{hotspot.title}</h4>
                        <p className="text-muted-foreground">{hotspot.description}</p>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
            
            {/* Right side - Interactive Product Image */}
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
                      {/* SVG for L-shaped connecting line */}
                      <svg 
                        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                        style={{ zIndex: 10 }}
                      >
                        {/* L-shaped line: horizontal first, then vertical */}
                        <polyline
                          points={`${hotspot.x + (calloutPos.isLeft ? -1.5 : 1.5)},${hotspot.y} ${calloutPos.midX + (calloutPos.isLeft ? 14 : -14)},${calloutPos.midY} ${calloutPos.midX + (calloutPos.isLeft ? 14 : -14)},${calloutPos.y + (calloutPos.isTop ? 8 : -8)}`}
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                          className="drop-shadow-sm"
                        />
                      </svg>
                      
                      {/* Callout */}
                      <div
                        className="absolute z-20 bg-background border-2 border-primary rounded-lg p-4 shadow-lg min-w-[340px] max-w-[380px] w-auto h-auto"
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
        </div>
      </section>

      {/* Customer Icons Navigation */}
      <section className="section-padding bg-brand-aqua">
        <div className="container-custom text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-white">The Smart Alternative</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Fast, quiet and efficient — right into the heart of the city
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {customerIcons.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate('/customers')}
                className="flex flex-col items-center space-y-4 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-white/80 mt-1">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-6">
              <h2 className="text-primary">Technical Specifications</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Detailed technical data for our modular cargo platform. Each configuration is 
                engineered for maximum performance, reliability, and versatility in professional 
                applications.
              </p>
            </div>
            <div className="lg:pl-8">
              <div className="relative">
                <img 
                  src={currentProduct.image} 
                  alt="Technical specifications" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-brand-aqua/20 backdrop-blur-sm rounded-lg p-2">
                  <Package className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  
                  <div className="bg-card rounded-2xl p-6 border shadow-card">
                    <h3 className="text-xl font-semibold text-primary mb-6">Trailer Base Data</h3>
                    <Table>
                      <TableBody>
                        {trailerBaseData.slice(0, 8).map((item, index) => (
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
      </section>

      {/* Download & CTA */}
      <section className="section-padding bg-secondary-light">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-primary">Get Detailed Information</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download our comprehensive product datasheet or schedule a personal 
            consultation to discuss your specific transport requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary-outline">
              📄 ally-mobility product datasheet (PDF, 1.25 MB)
            </Button>
            <Button 
              className="btn-aqua"
              onClick={() => navigate('/about-us#contact')}
            >
              📅 Schedule appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Become a Dealer */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={dealerPerson} 
                alt="Become a dealer" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-primary">Become a Dealer</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join our growing network of partners and bring sustainable mobility 
                solutions to your region. We support you with comprehensive training, 
                marketing materials, and ongoing technical support.
              </p>
              <Button 
                className="btn-aqua"
                onClick={() => navigate('/about-us#contact')}
              >
                Become a dealer
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;