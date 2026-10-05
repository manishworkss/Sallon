import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { reviews } from '../data/reviews';
import { useInView } from '../hooks/useAnimations';

export default function Testimonials() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="py-24 md:py-36 bg-cream border-t border-border" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="section-number">05</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mt-4 mb-4 tracking-tight">
            What Our <span className="italic text-gold">Guests</span> Say
          </h2>
          <p className="text-warm-gray text-xs tracking-[0.15em] uppercase">
            Demo testimonials · Replace with actual reviews
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-card border border-border p-8 md:p-10 relative"
            >
              <Quote size={24} className="text-gold/20 mb-6" strokeWidth={1} />
              <p className="font-serif text-lg md:text-xl font-light text-charcoal leading-relaxed mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-gold" />
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-warm-gray">
                  {review.author}
                </p>
              </div>
              {review.isDemo && (
                <span className="absolute top-4 right-4 text-[0.55rem] tracking-[0.1em] uppercase text-warm-gray/50">
                  Demo
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
