import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';

export default function Location() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="contact" className="layout-container py-24 md:py-32" ref={ref}>
      <div className="content-container border-t border-border-light pt-24 md:pt-32">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-16">
          
          {/* Left: Info (60%) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[60%]"
          >
            <p className="text-small text-muted mb-6">VISIT</p>
            <h2 className="text-h2 text-text-primary mb-12">
              Astra.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-small text-text-primary mb-4 border-b border-border-light pb-2 inline-block">Location</h4>
                <p className="text-body mb-2">1033 St Clair Ave W</p>
                <p className="text-body mb-2">Toronto, ON M6E 1A3</p>
                <p className="text-body">Canada</p>
              </div>
              <div>
                <h4 className="text-small text-text-primary mb-4 border-b border-border-light pb-2 inline-block">Contact</h4>
                <p className="text-body mb-2">+1 (416) 920-8091</p>
                <p className="text-body">hello@astrasalon.com</p>
              </div>
              <div>
                <h4 className="text-small text-text-primary mb-4 border-b border-border-light pb-2 inline-block">Hours</h4>
                <p className="text-body mb-2">Mon - Fri: 9am — 7pm</p>
                <p className="text-body mb-2">Sat: 10am — 5pm</p>
                <p className="text-body text-muted">Sun: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Map/Image (40%) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-[40%] aspect-square bg-[#E8E5DF] flex items-center justify-center p-8 text-center"
          >
             <p className="text-small text-muted tracking-widest">MAP INTEGRATION</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
