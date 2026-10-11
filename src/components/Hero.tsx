import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="layout-container pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="content-container">
        
        {/* Mobile-first Layout: Image -> Metadata -> Heading -> CTA */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Main Image (Order 1 on mobile, spans cols 6-12 on desktop) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-auto lg:h-[70vh] lg:col-span-7 lg:col-start-6 order-1 lg:order-2 mb-12 lg:mb-0 relative overflow-hidden"
          >
            <img 
              src="/images/astra/salon-exterior.jpg" 
              alt="Astra Salon Exterior" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Typography Content (Order 2 on mobile, spans cols 1-5 on desktop) */}
          <div className="w-full lg:col-span-5 lg:col-start-1 lg:row-start-1 order-2 lg:order-1 flex flex-col justify-center lg:pt-16 lg:pr-8">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-small text-muted mb-6"
            >
              EST. 1992 · TORONTO
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-display text-text-primary mb-8"
            >
              Hair, Colour<br />
              <span className="italic">&amp; Makeup Studio.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-body max-w-md mb-12"
            >
              Serving Toronto's St. Clair West neighbourhood since 1992. Cuts, colour, styling, bridal, skincare and more.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button onClick={scrollToBooking} className="btn-primary">
                Book an Appointment
              </button>
              <button onClick={scrollToServices} className="btn-secondary">
                Explore Services
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
