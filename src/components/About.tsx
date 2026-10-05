import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';

export default function About() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="about" className="layout-container py-24 md:py-32" ref={ref}>
      <div className="content-container border-t border-border-light pt-24 md:pt-32">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:col-span-5 lg:col-start-1 mb-16 lg:mb-0"
          >
            <p className="text-small text-muted mb-8">
              EST. 1992
            </p>
            <h2 className="text-h2 text-text-primary mb-8">
              Three decades<br />
              <span className="italic">of beauty.</span>
            </h2>
            <div className="max-w-[520px]">
              <p className="text-body mb-6">
                Since 1992, Astra Salon has been part of Toronto's beauty community, bringing
                together artistry, personal service and a distinctive sense of style.
              </p>
              <p className="text-body">
                What began as a neighbourhood salon on St. Clair Avenue West has grown into a
                trusted destination for hair, beauty, and personal care — evolving with the times
                while staying true to the craft.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full aspect-[4/5] lg:aspect-[3/4] lg:col-span-6 lg:col-start-7 overflow-hidden"
          >
            <img 
              src="/images/astra/salon-interior.jpg" 
              alt="Astra Salon Interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
