import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
    const imageCenter = { x: 50, y: 50 }; // Image center in percentage
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
      <section id="maximum-versatility" className="section-padding bg-gradient-subtle mt-16 lg:mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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
                        {/* L-shaped line: vertical then horizontal from hotspot border to callout border */}
                        <polyline
                          points={`${calloutPos.startX}%,${calloutPos.startY}% ${calloutPos.midX}%,${calloutPos.midY}% ${calloutPos.endX}%,${calloutPos.endY}%`}
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

          {/* Technical Specifications with Use Case */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Technical Specifications</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Detailed technical data for our modular cargo platform
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Use Case Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">
                    {currentProduct.name === 'Flatbed' && 'Perfect for Construction & Trades'}
                    {currentProduct.name === 'Box' && 'Ideal for Secure Delivery Services'}
                    {currentProduct.name === 'Swap Container' && 'Revolutionize Your Logistics'}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentProduct.name === 'Flatbed' && 'The flatbed configuration offers unlimited versatility for construction materials, tools, and equipment. Its open design with reinforced lashing points makes it perfect for contractors, landscapers, and service technicians who need to transport diverse cargo efficiently.'}
                    {currentProduct.name === 'Box' && 'The enclosed box design provides weather protection and security for valuable cargo. Perfect for delivery services, e-commerce logistics, and businesses requiring secure transport of sensitive goods in urban environments.'}
                    {currentProduct.name === 'Swap Container' && 'The innovative swap container system enables record-time loading and unloading. Ideal for high-frequency delivery routes, logistics companies, and businesses that need maximum efficiency in cargo handling operations.'}
                  </p>
                </div>
                
                <div className="bg-gradient-subtle rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      {currentProduct.name === 'Flatbed' && <Package className="w-4 h-4 text-primary" />}
                      {currentProduct.name === 'Box' && <Shield className="w-4 h-4 text-primary" />}
                      {currentProduct.name === 'Swap Container' && <Zap className="w-4 h-4 text-primary" />}
                    </div>
                    <h5 className="font-medium text-primary">Key Benefits</h5>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {currentProduct.name === 'Flatbed' && (
                      <>
                        <li>• Versatile lashing points for any cargo type</li>
                        <li>• Low loading height for easy access</li>
                        <li>• Professional-grade reinforced frame</li>
                        <li>• Compatible with all bike types</li>
                      </>
                    )}
                    {currentProduct.name === 'Box' && (
                      <>
                        <li>• Weather-protected cargo compartment</li>
                        <li>• Keyless lock system for security</li>
                        <li>• 2.3 m³ of enclosed storage space</li>
                        <li>• Ideal for valuable or sensitive goods</li>
                      </>
                    )}
                    {currentProduct.name === 'Swap Container' && (
                      <>
                        <li>• Record-time loading/unloading</li>
                        <li>• Up to 3 containers without tools</li>
                        <li>• 4 braked castors for mobility</li>
                        <li>• Perfect for high-frequency routes</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-card rounded-2xl p-6 border shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">
                    {currentProduct.name} Specifications
                  </h3>
                </div>
                <Table>
                  <TableBody>
                    {currentProduct.data.map((item, index) => (
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
          </div>
        </div>
      </section>

      {/* Customer Icons Navigation */}
      <section className="section-padding bg-gradient-to-r from-primary to-brand-aqua">
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
              className="btn-contact"
              onClick={() => navigate('/about-us#contact')}
            >
              Contact us
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