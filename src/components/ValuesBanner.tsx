import { useNavigate } from 'react-router-dom';

const ValuesBanner = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    navigate('/customers', { state: { scrollToSection: id, activeIcon: id } });
  };
  const values = [{
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>,
    title: "Erschwinglich & Praktisch",
    description: "Mehr Volumen für weniger Geld"
  }, {
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>,
    title: "Robust & Zuverlässig",
    description: "Bewährte Komponenten & Materialien"
  }, {
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>,
    title: "Mehr Flexibilität",
    description: "Modular & vielseitig, mit Rad oder zu Fuß"
  }, {
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>,
    title: "Barrierefreie Mobilität",
    description: "Am Stau vorbei, durch Poller, bis zur Haustür"
  }, {
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>,
    title: "Einfach & Zugänglich",
    description: "Kein Führerschein, kein Stress"
  }];
  return <section className="section-padding bg-gradient-to-r from-primary to-brand-aqua text-white">
      <div className="container-custom">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-white">Die Smart Alternative</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Schnell, leise und effizient — mitten ins Herz der Stadt
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((value, index) => <button key={index} onClick={() => scrollToSection(index.toString())} className="group text-center space-y-4 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                {/* Icon Circle */}
                <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-dark-aqua group-hover:bg-dark-aqua group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-white group-hover:text-dark-aqua transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-sm text-brand-dark-aqua leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </button>)}
          </div>

          {/* Bottom CTA */}
          <div className="pt-8">
            
          </div>
        </div>
      </div>
    </section>;
};
export default ValuesBanner;