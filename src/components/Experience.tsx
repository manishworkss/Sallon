import { motion } from 'framer-motion';
import { Sparkles, Heart, Users, Palette } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';

const features = [
  {
    icon: Users,
    title: 'Personalized Consultations',
    description: 'Every visit begins with understanding your vision, style and lifestyle.',
  },
  {
    icon: Palette,
    title: 'Experienced Artistry',
    description: 'Over three decades of craft, skill and creative expression.',
  },
  {
    icon: Heart,
    title: 'Relaxed Atmosphere',
    description: 'A calm, welcoming space where you can truly unwind.',
  },
  {
    icon: Sparkles,
    title: 'Beauty Under One Roof',
    description: 'Hair, colour, makeup, skincare and bridal — all in one place.',
  },
];

export default function Experience() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="experience" className="py-24 md:py-36 bg-charcoal text-white relative overflow-hidden" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="/images/astra/salon-interior.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="section-number">04</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-4 tracking-tight">
            Step Into <span className="italic text-gold-light">Astra</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg font-light max-w-lg mx-auto">
            An experience designed around you.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 border border-gold/30 mb-6 group-hover:border-gold/60 transition-colors duration-400">
                <feature.icon size={22} className="text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-light mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider image strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 md:mt-28 grid grid-cols-3 gap-2 md:gap-3 h-40 md:h-56 overflow-hidden"
        >
          <div className="overflow-hidden">
            <img
              src="/images/astra/salon-exterior.jpg"
              alt="Astra Salon"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/images/astra/hair-colour.jpg"
              alt="Hair styling at Astra"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/images/astra/salon-interior.jpg"
              alt="Inside Astra Salon"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
