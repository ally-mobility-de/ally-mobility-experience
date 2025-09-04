import { Button } from "@/components/ui/button";
import flatbedImage from "@/assets/product-flatbed.jpg";
import boxImage from "@/assets/product-box.jpg";
import swapImage from "@/assets/product-swap.jpg";

const ProductRange = () => {
  const products = [
    {
      id: 'flatbed',
      name: 'Flatbed',
      title: 'The All-Rounder',
      description: 'Turn your bike into a cargo bike or multiply your capacity.',
      image: flatbedImage,
      link: '#flatbed'
    },
    {
      id: 'box',
      name: 'Box',
      title: 'A True Space Miracle',
      description: 'With 2.3 m³ and 500 kg payload.',
      image: boxImage,
      link: '#box'
    },
    {
      id: 'swap-container',
      name: 'Swap Container',
      title: 'Ready for the Swap?',
      description: 'Up to 3 wheeled containers, tool-free, record times.',
      image: swapImage,
      link: '#swap-container',
      highlight: true
    }
  ];

  const scrollToProduct = (productId: string) => {
    const element = document.getElementById('product');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Trigger product switcher after scroll
      setTimeout(() => {
        const event = new CustomEvent('switchProduct', { detail: { productId } });
        window.dispatchEvent(event);
      }, 800);
    }
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
                  product.highlight ? 'ring-2 ring-brand-aqua ring-offset-4' : ''
                }`}
                onClick={() => scrollToProduct(product.id)}
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
                      <span className="bg-brand-aqua text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-brand-green group-hover:text-primary transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-sm font-medium text-brand-aqua uppercase tracking-wide">
                      {product.name}
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
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