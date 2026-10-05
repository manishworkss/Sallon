import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';

const servicesList = [
  {
    category: 'HAIR',
    items: [
      { id: '01', name: 'Haircuts', desc: 'Precision cuts tailored to your face shape and lifestyle.' },
      { id: '02', name: 'Styling', desc: 'From effortless waves to structured updos.' },
      { id: '03', name: 'Colour', desc: 'Dimensional colour, balayage, and full transformations.' },
      { id: '04', name: 'Treatments', desc: 'Restorative and nourishing treatments for healthy hair.' }
    ],
    image: '/images/astra/hair-colour.jpg'
  },
  {
    category: 'BEAUTY',
    items: [
      { id: '01', name: 'Makeup', desc: 'Professional artistry for special events.' },
      { id: '02', name: 'Bridal', desc: 'Exceptional attention for your most beautiful day.' },
      { id: '03', name: 'Facials', desc: 'Customized treatments for radiant skin.' },
      { id: '04', name: 'Skincare', desc: 'Expert consultations and clinical treatments.' }
    ],
    image: '/images/astra/salon-interior.jpg'
  }
];

export default function Services() {
  const { ref, isInView } = useInView(0.1);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <section id="services" className="layout-container py-24 md:py-32" ref={ref}>
      <div className="content-container border-t border-border-light pt-24 md:pt-32 relative">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-24"
        >
          <p className="text-small text-muted mb-6">01</p>
          <h2 className="text-h2 text-text-primary">
            The Astra<br />
            <span className="italic">Experience.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 relative">
          
          {/* Lists */}
          <div className="w-full lg:col-span-6 lg:col-start-1 space-y-24">
            {servicesList.map((section, idx) => (
              <motion.div 
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + (idx * 0.2) }}
              >
                <h3 className="text-small text-text-primary border-b border-border-light pb-4 mb-8">
                  {section.category}
                </h3>
                <ul className="space-y-6">
                  {section.items.map((item) => (
                    <li 
                      key={item.id}
                      className="group flex flex-col md:flex-row md:items-baseline md:gap-8 cursor-default"
                      onMouseEnter={() => setHoveredImage(section.image)}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <span className="text-small text-muted mb-2 md:mb-0 w-8 flex-shrink-0">
                        {item.id}
                      </span>
                      <div>
                        <h4 className="text-h3 text-text-primary mb-2 transition-colors group-hover:text-accent">
                          {item.name}
                        </h4>
                        <p className="text-body max-w-sm">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Hover Image (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 lg:col-start-8 relative h-[600px] sticky top-32">
            <AnimatePresence>
              {hoveredImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 overflow-hidden"
                >
                  <img 
                    src={hoveredImage} 
                    alt="Astra Service" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            {!hoveredImage && (
              <div className="absolute inset-0 border border-border-light flex items-center justify-center bg-bg-base/50">
                 <p className="text-small text-muted italic">Hover to view</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
