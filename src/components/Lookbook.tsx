import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';

export default function Lookbook() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="lookbook" className="layout-container py-24 md:py-32" ref={ref}>
      <div className="content-container border-t border-border-light pt-24 md:pt-32">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-small text-muted mb-6">02</p>
            <h2 className="text-h2 text-text-primary">
              The <span className="italic">Lookbook.</span>
            </h2>
          </div>
          <p className="text-body max-w-sm mb-2">
            A curated collection of signature cuts, dimensional colour, and refined beauty.
          </p>
        </motion.div>

        {/* Editorial Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8">
          
          {/* Large Image (Left) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full aspect-[3/4] lg:col-span-7 mb-8 lg:mb-0 relative group overflow-hidden cursor-pointer"
          >
            <img 
              src="/images/astra/hair-colour.jpg" 
              alt="Astra Salon Signature Look" 
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-500 flex items-center justify-center">
              <span className="text-small text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                View Look
              </span>
            </div>
          </motion.div>

          {/* Secondary Stack (Right) */}
          <div className="w-full lg:col-span-4 lg:col-start-9 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full aspect-square relative group overflow-hidden cursor-pointer"
            >
              <img 
                src="/images/astra/salon-interior.jpg" 
                alt="Astra Salon Studio" 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-500 flex items-center justify-center">
                <span className="text-small text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  View Space
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
