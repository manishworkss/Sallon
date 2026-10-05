export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-base border-t border-border-light pt-24 pb-12 mt-24">
      <div className="layout-container">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          {/* Brand */}
          <div className="w-full lg:w-1/3">
            <button 
              onClick={scrollToTop}
              className="font-serif text-h3 tracking-[0.2em] uppercase text-text-primary bg-transparent border-none cursor-pointer mb-6 block text-left"
            >
              ASTRA
            </button>
            <p className="text-body max-w-xs">
              A modern expression of hair, beauty and artistry in the heart of Toronto.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16 md:gap-32">
            <div className="flex flex-col gap-4">
              <h4 className="text-small text-muted mb-2">Explore</h4>
              {['Services', 'About', 'Lookbook'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                  className="text-body text-left text-text-primary hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-small text-muted mb-2">Connect</h4>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-body text-text-primary hover:text-accent transition-colors no-underline">
                Instagram
              </a>
              <a href="mailto:hello@astrasalon.com" className="text-body text-text-primary hover:text-accent transition-colors no-underline">
                Email
              </a>
              <a href="tel:+14169208091" className="text-body text-text-primary hover:text-accent transition-colors no-underline">
                +1 416-920-8091
              </a>
            </div>
          </div>
          
          {/* Action */}
          <div>
            <button 
              onClick={() => scrollToSection('#booking')}
              className="btn-primary"
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-small text-muted normal-case tracking-normal font-normal">
            &copy; {new Date().getFullYear()} Astra Salon. All rights reserved.
          </p>
          <div className="flex gap-6">
             <button className="text-small text-muted bg-transparent border-none cursor-pointer hover:text-text-primary transition-colors">Privacy</button>
             <button className="text-small text-muted bg-transparent border-none cursor-pointer hover:text-text-primary transition-colors">Terms</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
