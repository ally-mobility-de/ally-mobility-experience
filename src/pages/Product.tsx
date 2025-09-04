import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ValuesBanner from "@/components/ValuesBanner";
import productFlatbed from "@/assets/product-flatbed.jpg";
import productBox from "@/assets/product-box.jpg";
import productSwap from "@/assets/product-swap.jpg";
import dealerPerson from "@/assets/dealer-person.jpg";

const Product = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const toggleHotspot = (hotspotId: number) => {
    setActiveHotspot(activeHotspot === hotspotId ? null : hotspotId);
  };

  const productSpecs = {
    flatbed: {
      image: productFlatbed,
      data: [
        { label: "Payload", value: "500 kg" },
        { label: "Cargo area", value: "186 × 86 cm" },
        { label: "Side walls", value: "25 cm" },
        { label: "Features", value: "Versatile lashing points" }
      ]
    },
    box: {
      image: productBox,
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
      image: productSwap,
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

  const hotspots = [
    {
      id: 1,
      x: 25,
      y: 30,
      title: "Robust Frame",
      description: "Heavy-duty steel construction for maximum durability"
    },
    {
      id: 2,
      x: 70,
      y: 45,
      title: "Modular System",
      description: "Quick-change system for different cargo modules"
    },
    {
      id: 3,
      x: 40,
      y: 70,
      title: "Premium Wheels",
      description: "High-quality wheels with excellent road grip"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Product Intro with Hotspots */}
      <section className="section-padding bg-secondary-light mt-16 lg:mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-primary">The Cargo Platform</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Thanks to a modular concept and a robust, high-quality platform, 
                our heavy-duty bicycle trailers are ready for anything. Whether 
                Flatbed, Box, or Swap Container — we have the right solution.
              </p>
              <Button className="btn-aqua">
                Discover the possibilities
              </Button>
            </div>
            
            {/* Interactive Product Image */}
            <div className="relative">
              <img 
                src={productFlatbed} 
                alt="ally-mobility cargo platform" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Hotspots */}
              {hotspots.map((hotspot) => (
                <div key={hotspot.id} className="relative">
                  <button
                    onClick={() => toggleHotspot(hotspot.id)}
                    className="absolute w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 z-10"
                    style={{
                      left: `${hotspot.x}%`,
                      top: `${hotspot.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <span className="text-primary font-bold text-lg">+</span>
                  </button>
                  
                  {/* Hotspot Info Card */}
                  {activeHotspot === hotspot.id && (
                    <div 
                      className="absolute bg-background border border-border rounded-xl p-4 shadow-lg z-20 min-w-[200px]"
                      style={{
                        left: `${hotspot.x}%`,
                        top: `${hotspot.y + 10}%`,
                        transform: 'translateX(-50%)'
                      }}
                    >
                      <h4 className="font-semibold text-foreground mb-2">{hotspot.title}</h4>
                      <p className="text-sm text-muted-foreground">{hotspot.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Banner */}
      <ValuesBanner />

      {/* Specifications */}
      <section id="specifications" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-6">
              <h2 className="text-primary">Technical Specifications</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Built for maximum versatility and professional use. Our cargo platform 
                adapts to your specific needs with interchangeable modules and 
                robust construction.
              </p>
            </div>
            <div className="lg:pl-8">
              <img 
                src={productFlatbed} 
                alt="Technical specifications" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <Tabs defaultValue="flatbed" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="flatbed" className="text-sm font-medium">Flatbed</TabsTrigger>
              <TabsTrigger value="box" className="text-sm font-medium">Box</TabsTrigger>
              <TabsTrigger value="swap" className="text-sm font-medium">Swap Container</TabsTrigger>
            </TabsList>
            
            {Object.entries(productSpecs).map(([key, spec]) => (
              <TabsContent key={key} value={key} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-card rounded-2xl p-6 border">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      {key === 'flatbed' ? 'Flatbed Module' : 
                       key === 'box' ? 'Box Module' : 
                       'Swap Container Module'}
                    </h3>
                    <Table>
                      <TableBody>
                        {spec.data.map((item, index) => (
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
                  
                  <div>
                    <img 
                      src={spec.image} 
                      alt={`${key} module`}
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Trailer Base Data */}
          <div className="mt-12 bg-secondary-light rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-primary mb-6">Trailer Base Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Table>
                <TableBody>
                  {trailerBaseData.slice(0, 5).map((item, index) => (
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
              <Table>
                <TableBody>
                  {trailerBaseData.slice(5).map((item, index) => (
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
      </section>

      {/* Download & CTA */}
      <section className="section-padding bg-secondary-light">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-primary">Get Detailed Information</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary-outline">
              Download Product Datasheet (PDF, 1.25 MB)
            </Button>
            <Button className="btn-aqua">
              Schedule Appointment
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
              <Button className="btn-aqua">
                Learn More About Partnership
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