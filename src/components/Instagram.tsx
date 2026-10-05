import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';

const instaImages = [
  { src: '/images/astra/salon-exterior.jpg', alt: 'Astra exterior' },
  { src: '/images/astra/salon-interior.jpg', alt: 'Astra interior' },
  { src: '/images/astra/hair-colour.jpg', alt: 'Hair colour' },
  { src: '/images/astra/salon-exterior.jpg', alt: 'Astra storefront' },
  { src: '/images/astra/salon-interior.jpg', alt: 'Styling station' },
  { src: '/images/astra/hair-colour.jpg', alt: 'Hair styling' },
];

export default function Instagram() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section className="py-24 md:py-32 bg-card border-t border-border" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-2 tracking-tight">
            Follow the Astra World
          </h2>
          <a
            href="https://instagram.com/astrasalon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold text-sm font-light hover:text-charcoal transition-colors"
          >
            @astrasalon
          </a>
        </motion.div>

        {/* Instagram grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {instaImages.map((img, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/astrasalon"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className="relative aspect-square overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-400 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/astrasalon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-[0.65rem] font-medium tracking-[0.2em] uppercase border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-400"
          >
            Follow @astrasalon
          </a>
        </motion.div>
      </div>
    </section>
  );
}
