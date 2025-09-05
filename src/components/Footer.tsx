

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-brand-dark-purple text-white bg-[#043a43]">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">ally-mobility</div>
            <p className="text-white/80 leading-relaxed">
              Moving big things sustainably.
            </p>
            <div className="text-white/80">
              <p>contact@ally-mobility.com</p>
            </div>
          </div>

          {/* Essential Links */}
          <div className="space-y-4">
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('product')} className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Product
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                About us
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-white/80 hover:text-brand-aqua transition-colors duration-300">
                Contact
              </button>
            </nav>
          </div>

          {/* Social & Funding */}
          <div className="space-y-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-aqua transition-colors duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Funding Acknowledgment */}
            <div className="mt-6">
              <img 
                src="/lovable-uploads/560702d5-a110-4909-93b1-350dea6928c6.png" 
                alt="Supported by the German Federal Ministry for Economic Affairs and Climate Action and co-financed by the European Union through the EXIST program"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-white/60">
              © 2024 ally-mobility. All rights reserved.
            </div>
            
            <nav className="flex items-center gap-4">
              <a href="#privacy" className="text-white/60 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#legal-notice" className="text-white/60 hover:text-white transition-colors duration-300">
                Legal Notice
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;