import deliveryImage from "@/assets/use-case-delivery.jpg";
import tradesImage from "@/assets/use-case-trades.jpg";
import municipalImage from "@/assets/use-case-municipal.jpg";

const UseCases = () => {
  const useCases = [
    {
      title: "Parcels & Delivery Services",
      description: "More volume for less money. Extend your capacity and capabilities.",
      details: "Perfect for last-mile delivery, e-commerce fulfillment, and urban logistics. Navigate narrow streets and reach customers directly at their doorstep.",
      image: deliveryImage,
      imagePosition: "right"
    },
    {
      title: "Logistics & Transport", 
      description: "Fast, flexible, cost-conscious — the professional solution for more speed in in-house & urban logistics.",
      details: "Streamline your supply chain with efficient inter-warehouse transport and flexible routing capabilities that adapt to traffic conditions.",
      image: municipalImage,
      imagePosition: "left"
    },
    {
      title: "Trades & Service Providers",
      description: "The multitool for flexible deployment. Build instead of jam — more time for your craft.",
      details: "Transport tools, materials, and equipment efficiently. Access construction sites and service locations that are difficult to reach by van.",
      image: tradesImage,
      imagePosition: "right"
    },
    {
      title: "Cities & Municipalities",
      description: "Today's handcart — by bike, cargo bike, or on foot. Universal use guaranteed.",
      details: "Sustainable city services including park maintenance, waste management, and public space care while reducing urban traffic congestion.",
      image: municipalImage,
      imagePosition: "left"
    }
  ];

  const scrollToCustomers = () => {
    const element = document.getElementById('customers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="customers" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-brand-green">Built for Every Use Case</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From urban delivery to municipal services, ally-mobility trailers adapt to your specific needs
            </p>
          </div>

          {/* Use Cases */}
          <div className="space-y-24">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  useCase.imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${
                  useCase.imagePosition === 'left' ? 'lg:col-start-2' : ''
                }`}>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-semibold text-brand-green">
                      {useCase.title}
                    </h3>
                    <p className="text-xl text-brand-aqua font-medium">
                      {useCase.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.details}
                    </p>
                  </div>

                  <button
                    onClick={scrollToCustomers}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-brand-aqua transition-colors duration-300"
                  >
                    Learn more about this use case
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Image */}
                <div className={`relative ${
                  useCase.imagePosition === 'left' ? 'lg:col-start-1' : ''
                }`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-soft aspect-[4/3]">
                    <img 
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Overlay badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-card">
                    <div className="text-sm font-medium text-brand-green">
                      {useCase.title}
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

export default UseCases;