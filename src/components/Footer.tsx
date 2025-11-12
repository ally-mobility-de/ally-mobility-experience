import { Link } from "react-router-dom";
const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-brand-dark-purple text-white bg-[#043a43]">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Brand & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-white">ally-mobility</div>
              <p className="text-white/80 leading-relaxed max-w-md">
                Nachhaltig Großes Bewegen. Schnelle, leise und effiziente Transportlösungen 
                für das urbane Umfeld.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Kontakt</h4>
              <div className="space-y-2 text-white/80">
                <p>info@ally-mobility.com</p>
                <p>+49 (0) 30 123 456 789</p>
                <p>Treben, Deutschland























                <br />Innovation District</p>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Produkt</h4>
            <nav className="space-y-2">
              <Link to="/product" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Übersicht
              </Link>
              <Link to="/product#flatbed" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Pritsche
              </Link>
              <Link to="/product#box" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Box
              </Link>
              <Link to="/product#swap" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Wechselcontainer
              </Link>
            </nav>
          </div>

          {/* Customer Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Kunden</h4>
            <nav className="space-y-2">
              <Link to="/customers" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Anwendungsfälle
              </Link>
              <Link to="/customers#delivery" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Lieferdienste
              </Link>
              <Link to="/customers#logistics" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Logistik
              </Link>
              <Link to="/customers#trades" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Handwerk & Dienstleistungen
              </Link>
              <Link to="/customers#municipal" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Kommunen
              </Link>
            </nav>
          </div>

          {/* Company & Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Unternehmen</h4>
            <nav className="space-y-2">
              <Link to="/about-us" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Über uns
              </Link>
              <Link to="/about-us#contact" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Kontakt
              </Link>
              <Link to="/product#dealer" className="block text-brand-aqua font-medium hover:text-brand-purple transition-colors duration-300">
                Händler werden
              </Link>
              <Link to="/about-us#events" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Veranstaltungskalender
              </Link>
            </nav>
          </div>

          {/* Funding Acknowledgment */}
          <div className="col-span-full mt-6">
            <div className="flex flex-col items-center text-center gap-3">
              <img src="/lovable-uploads/adefa6cc-8b89-4cb0-a294-6db863b29fe1.png" alt="Gefördert durch das Bundesministerium für Wirtschaft und Klimaschutz, kofinanziert von der Europäischen Union, EXIST Existenzgründungen aus der Wissenschaft" className="max-w-full h-auto max-h-24 w-auto" />
              <div className="flex justify-center w-full">
                <p className="text-white/80 text-sm" style={{
                maxWidth: 'min(100%, 600px)'
              }}>
                  Ally-mobility wird im Rahmen des EXIST-Programms durch das Bundesministerium für Wirtschaft und Klimaschutz
                  und den Europäischen Sozialfonds Plus (ESF Plus) gefördert.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 ally-mobility. All rights reserved.
            </div>
            
            <nav className="flex flex-wrap items-center gap-6 text-sm">
              <Link to="/impressum" className="text-white/60 hover:text-white transition-colors duration-300">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-white/60 hover:text-white transition-colors duration-300">
                Datenschutz
              </Link>
              
              
            </nav>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;