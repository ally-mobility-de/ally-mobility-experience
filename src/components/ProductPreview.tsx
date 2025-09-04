import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import flatbedImage from "@/assets/product-flatbed.jpg";
import boxImage from "@/assets/product-box.jpg";
import swapImage from "@/assets/product-swap.jpg";

interface HotspotInfo {
  id: string;
  title: string;
  specs: string[];
  features: string[];
}

interface ProductData {
  id: string;
  name: string;
  image: string;
  hotspots: Array<{
    id: string;
    x: number;
    y: number;
    info: HotspotInfo;
  }>;
}

const products: ProductData[] = [
  {
    id: 'flatbed',
    name: 'Flatbed',
    image: flatbedImage,
    hotspots: [
      {
        id: 'payload',
        x: 30,
        y: 40,
        info: {
          id: 'payload',
          title: 'Flatbed Specifications',
          specs: ['Payload: 500 kg', 'Cargo area: 186 × 86 cm', 'Side walls: 25 cm'],
          features: ['Versatile lashing points', 'Weather resistant', 'Tool-free assembly']
        }
      },
      {
        id: 'wheels',
        x: 70,
        y: 80,
        info: {
          id: 'wheels',
          title: 'Drive System',
          specs: ['Electric 5-gang support', 'Range: 50 km with 2 batteries', 'Speed: up to 25 km/h'],
          features: ['Regenerative braking', 'All-weather performance']
        }
      }
    ]
  },
  {
    id: 'box',
    name: 'Box',
    image: boxImage,
    hotspots: [
      {
        id: 'cargo',
        x: 25,
        y: 35,
        info: {
          id: 'cargo',
          title: 'Box Specifications',
          specs: ['Payload: 500 kg', 'Cargo area: 182 × 82 cm', 'Cargo height: 156 cm', 'Volume: 2.3 m³'],
          features: ['2 doors + keyless lock', 'Versatile lashing points', 'Weatherproof']
        }
      }
    ]
  },
  {
    id: 'swap-container',
    name: 'Swap Container',
    image: swapImage,
    hotspots: [
      {
        id: 'container',
        x: 20,
        y: 30,
        info: {
          id: 'container',
          title: 'Swap Container System',
          specs: ['Load up to 3 wheeled containers', 'Tool-free operation', 'Payload: 150 kg per container'],
          features: ['Record-time loading/unloading', '4 braked castors', 'Modular system']
        }
      }
    ]
  }
];

const ProductPreview = () => {
  const [activeProduct, setActiveProduct] = useState('flatbed');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

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

  const currentProduct = products.find(p => p.id === activeProduct)!;

  const toggleHotspot = (hotspotId: string) => {
    setActiveHotspot(activeHotspot === hotspotId ? null : hotspotId);
  };

  return (
    <section id="product" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-brand-green">Maximum Versatility</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Flexible modules for every purpose. Thanks to a modular concept and a robust, 
                high-quality platform, our heavy-duty bicycle trailers are ready for anything. 
                Whether Flatbed, Box, or Swap Container — we have the right solution. 
                Discover the possibilities.
              </p>
            </div>

            {/* Product Switcher */}
            <div className="flex flex-wrap gap-3">
              {products.map((product) => (
                <Button
                  key={product.id}
                  onClick={() => {
                    setActiveProduct(product.id);
                    setActiveHotspot(null);
                  }}
                  variant={activeProduct === product.id ? "default" : "outline"}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeProduct === product.id 
                      ? 'bg-primary text-primary-foreground shadow-soft' 
                      : 'bg-background border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'
                  }`}
                >
                  {product.name}
                </Button>
              ))}
            </div>

            {/* Active Hotspot Info */}
            {activeHotspot && (
              <div className="hotspot-info">
                {(() => {
                  const hotspot = currentProduct.hotspots.find(h => h.id === activeHotspot);
                  if (!hotspot) return null;
                  
                  return (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-brand-green">{hotspot.info.title}</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-2">
                            Specifications
                          </h5>
                          <ul className="space-y-1">
                            {hotspot.info.specs.map((spec, index) => (
                              <li key={index} className="text-sm flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-brand-aqua rounded-full flex-shrink-0"></div>
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-2">
                            Features
                          </h5>
                          <ul className="space-y-1">
                            {hotspot.info.features.map((feature, index) => (
                              <li key={index} className="text-sm flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Interactive Product Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={currentProduct.image} 
                alt={`ally-mobility ${currentProduct.name} cargo trailer`}
                className="w-full h-auto object-cover transition-opacity duration-500"
              />
              
              {/* Interactive Hotspots */}
              {currentProduct.hotspots.map((hotspot) => (
                <button
                  key={hotspot.id}
                  onClick={() => toggleHotspot(hotspot.id)}
                  className="absolute hotspot"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  aria-label={`View ${hotspot.info.title} details`}
                >
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Product indicator */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-card">
              <div className="text-sm font-medium text-brand-green">
                {currentProduct.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;