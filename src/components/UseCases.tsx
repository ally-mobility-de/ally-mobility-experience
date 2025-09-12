const UseCases = () => {
  const useCases = [
    {
      title: "Pakete & Lieferdienste",
      description: "Mehr Volumen für weniger Geld - wir machen Touren effizient.",
      details: "Perfekt für die letzte Meile, E-Commerce-Fulfillment und urbane Logistik. Unser Schwerlast-Fahrradanhänger skaliert Ihre Kapazitäten exakt nach Bedarf. Durch flexieibles An & Abkoppeln nutzen Sie unterschiedliche Zugfahrzeuge oder sogar zu Fuß. In Fußgängerzonen oder Gebäuden wechseln Sie in den Handbetrieb. So beliefern Sie komplexe Routen, sparen Rückfahrten dank größerer Zuladung und holen Retouren direkt am Sammelpukt per vorbeladenem Hänger ab.",
      image: "/lovable-uploads/3e7d7e88-f834-4c1f-b376-207dfb71fc54.png",
      imagePosition: "right"
    },
    {
      title: "Logistik & Transport", 
      description: "Schnell, flexibel, kostenbewusst — die professionelle Lösung für mehr Tempo in der Inhouse- & urbanen Logistik.",
      details: "Optimieren Sie Ihre Lieferkette mit effizientem innerbetrieblichen Transport und flexiblen Routingmöglichkeiten, die sich an Verkehrsbedingungen anpassen.",
      image: "/lovable-uploads/3fd185e4-d956-4d4f-b43f-b3785ce1d31f.png",
      imagePosition: "left"
    },
    {
      title: "Handwerk & Dienstleister",
      description: "Das Multitool für flexiblen Einsatz. Bauen statt stauen — mehr Zeit für Ihr Handwerk.",
      details: "Transportieren Sie Werkzeuge, Materialien und Ausrüstung effizient. Erreichen Sie Baustellen und Servicestellen, die mit dem Transporter schwer zugänglich sind.",
      image: "/lovable-uploads/8fb94492-7fe2-4eae-9187-6ecec323bd8a.png",
      imagePosition: "right"
    },
    {
      title: "Städte & Kommunen",
      description: "Der heutige Handkarren — mit Rad, Lastenrad oder zu Fuß. Universeller Einsatz garantiert.",
      details: "Nachhaltige Stadtdienste einschließlich Parkpflege, Abfallwirtschaft und öffentliche Raumbetreuung bei gleichzeitiger Reduzierung des städtischen Verkehrsstaus.",
      image: "/lovable-uploads/08d6fb7d-e9df-42f7-894e-8d315e2c3e92.png",
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
            <h2 className="text-brand-green">Für jeden Anwendungsfall gebaut</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von urbaner Lieferung bis zu kommunalen Diensten passen sich ally-mobility Anhänger an Ihre spezifischen Bedürfnisse an
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
                    className={`inline-flex items-center gap-2 font-medium transition-colors duration-300 ${
                      index % 2 === 1 
                        ? 'text-accent hover:text-accent/80' 
                        : 'text-primary hover:text-brand-aqua'
                    }`}
                  >
                    Mehr über diesen Anwendungsfall erfahren
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
                  <div className={`absolute bottom-4 left-4 backdrop-blur-sm rounded-lg px-4 py-2 shadow-card ${
                    index % 2 === 1 
                      ? 'bg-accent/90 text-white' 
                      : 'bg-white/90 text-brand-green'
                  }`}>
                    <div className="text-sm font-medium">
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