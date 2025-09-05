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
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-white">ally-mobility</div>
              <p className="text-white/80 leading-relaxed max-w-md">
                Moving big things sustainably. Fast, quiet and efficient transport solutions 
                for the urban environment.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Contact</h4>
              <div className="space-y-2 text-white/80">
                <p>info@ally-mobility.com</p>
                <p>+49 (0) 30 123 456 789</p>
                <p>Berlin, Germany<br />Innovation District</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-aqua transition-colors duration-300" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-aqua transition-colors duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Product</h4>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('product')} className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Overview
              </button>
              <button onClick={() => scrollToSection('product')} className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Flatbed
              </button>
              <button onClick={() => scrollToSection('product')} className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Box
              </button>
              <button onClick={() => scrollToSection('product')} className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Swap Container
              </button>
            </nav>
          </div>

          {/* Customer Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Customers</h4>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('customers')} className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Use Cases
              </button>
              <a href="#delivery" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Delivery Services
              </a>
              <a href="#logistics" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Logistics
              </a>
              <a href="#trades" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Trades & Services
              </a>
              <a href="#municipal" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Municipalities
              </a>
            </nav>
          </div>

          {/* Company & Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('about')} className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                About us
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Contact
              </button>
              <a href="#dealer" className="block text-brand-aqua font-medium hover:text-white transition-colors duration-300">
                Become a Dealer
              </a>
              <a href="#events" className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Event Calendar
              </a>
            </nav>
          </div>

     {/* Funding Acknowledgment (inline unter den Link-Blöcken) */}
<div className="col-span-full mt-6">
  <div className="flex flex-col items-center text-center gap-3">
    <img
      src="/lovable-uploads/cde7af16-d889-43da-929b-7d51be96a45c.png"
      alt="Gefördert durch das Bundesministerium und den ESF Plus"
      className="max-w-full h-auto max-h-24"
    />
    <p className="text-white/80 text-sm max-w-3xl">
      Ally-mobility wird im Rahmen des EXIST-Programms durch das Bundesministerium für Wirtschaft und Energie
      und den Europäischen Sozialfonds Plus (ESF Plus) gefördert.
    </p>
  </div>
</div>


        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 ally-mobility. All rights reserved.
            </div>
            
            <nav className="flex flex-wrap items-center gap-6 text-sm">
              <a href="#legal-notice" className="text-white/60 hover:text-white transition-colors duration-300">
                Legal Notice
              </a>
              <a href="#privacy" className="text-white/60 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/60 hover:text-white transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#cookies" className="text-white/60 hover:text-white transition-colors duration-300">
                Cookie Settings
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;