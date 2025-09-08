import { Button } from "@/components/ui/button";

const ProductRange = () => {
  const products = [
    {
      id: 'flatbed',
      name: 'Flatbed',
      title: 'The All-Rounder',
      description: 'Turn your bike into a cargo bike or multiply your capacity.',
      image: "/lovable-uploads/6201085f-1cba-4953-b9f2-4fe3130f99ac.png",
      link: '#flatbed'
    },
    {
      id: 'box',
      name: 'Box',
      title: 'A True Space Miracle',
      description: 'With 2.3 m³ and 500 kg payload.',
      image: "/lovable-uploads/95ac716d-de01-4c19-b0b4-9b381a05897a.png",
      link: '#box'
    },
    {
      id: 'swap-container',
      name: 'Swap Container',
      title: 'Ready for the Swap?',
      description: 'Up to 3 wheeled containers, tool-free, record times.',
      image: "/lovable-uploads/4767952c-fdf6-4f68-8b13-715cd936b332.png",
      link: '#swap-container',
      highlight: true
    }
  ];

  const navigateToProduct = (productId: string) => {
    // Navigate to product page with specific product selected
    let productKey = productId;
    if (productId === 'swap-container') {
      productKey = 'swap';
    }
    window.location.href = `/product?product=${productKey}#maximum-versatility`;
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-brand-green">Maximum Versatility</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modules for every purpose
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`product-card group cursor-pointer ${
                    product.highlight ? 'purple-card ring-0' : ''
                  }`}
                  onClick={() => navigateToProduct(product.id)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={product.image}
                      alt={`ally-mobility ${product.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {product.highlight && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-accent px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className={`text-2xl font-semibold transition-colors duration-300 ${
                        product.highlight 
                          ? 'text-white group-hover:text-white/90' 
                          : 'text-brand-green group-hover:text-primary'
                      }`}>
                        {product.title}
                      </h3>
                      <p className={`leading-relaxed ${
                        product.highlight 
                          ? 'text-white/90' 
                          : 'text-muted-foreground'
                      }`}>
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className={`text-sm font-medium uppercase tracking-wide ${
                        product.highlight 
                          ? 'text-white/80' 
                          : 'text-brand-aqua'
                      }`}>
                        {product.name}
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        product.highlight 
                          ? 'bg-white/20 text-white group-hover:bg-white group-hover:text-accent' 
                          : 'bg-primary/10 group-hover:bg-primary group-hover:text-white'
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;