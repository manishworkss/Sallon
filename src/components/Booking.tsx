import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';

export default function Booking() {
  const { ref, isInView } = useInView(0.1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="layout-container py-24 md:py-32" ref={ref}>
      <div className="content-container border-t border-border-light pt-24 md:pt-32">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16">
          
          {/* Left: Heading & Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:col-span-5 mb-16 lg:mb-0"
          >
            <h2 className="text-h2 text-text-primary mb-6">
              Your next look<br />
              <span className="italic">starts here.</span>
            </h2>
            <p className="text-body max-w-sm mb-12">
              Request an appointment below. Our team will contact you shortly to confirm your booking and ensure we prepare for your visit.
            </p>
            <div className="hidden lg:block w-full aspect-[4/5] overflow-hidden">
              <img 
                src="/images/astra/salon-exterior.jpg" 
                alt="Astra Salon Booking" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Form or Confirmation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:col-span-7 lg:pt-4"
          >
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full py-16">
                <h3 className="text-h3 text-text-primary mb-6">Request received.</h3>
                <p className="text-body max-w-md mb-4">
                  Thank you for your booking request. A member of our team will contact you
                  within one business day to confirm your appointment.
                </p>
                <p className="text-body max-w-md mb-10">
                  If you need to reach us sooner, call{' '}
                  <a href="tel:+14169208091" className="text-text-primary underline">+1 (416) 920-8091</a>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-small text-text-primary mb-2">Name</label>
                    <input type="text" id="name" required className="w-full h-12 bg-transparent border-b border-border-light text-body focus:border-text-primary outline-none transition-colors" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-small text-text-primary mb-2">Phone</label>
                    <input type="tel" id="phone" required className="w-full h-12 bg-transparent border-b border-border-light text-body focus:border-text-primary outline-none transition-colors" placeholder="+1 (416) 000-0000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-small text-text-primary mb-2">Email</label>
                  <input type="email" id="email" required className="w-full h-12 bg-transparent border-b border-border-light text-body focus:border-text-primary outline-none transition-colors" placeholder="jane@example.com" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-small text-text-primary mb-2">Service</label>
                  <select id="service" required className="w-full h-12 bg-transparent border-b border-border-light text-body focus:border-text-primary outline-none transition-colors cursor-pointer appearance-none rounded-none">
                    <option value="">Select a service...</option>
                    <option value="haircut">Haircut & Style</option>
                    <option value="colour">Colour / Balayage</option>
                    <option value="bridal">Bridal Styling</option>
                    <option value="makeup">Professional Makeup</option>
                    <option value="facial">Facial / Skincare</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-small text-text-primary mb-2">Preferred Date</label>
                    <input type="date" id="date" className="w-full h-12 bg-transparent border-b border-border-light text-body focus:border-text-primary outline-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-small text-text-primary mb-2">Preferred Time</label>
                    <select id="time" className="w-full h-12 bg-transparent border-b border-border-light text-body focus:border-text-primary outline-none transition-colors cursor-pointer appearance-none rounded-none">
                      <option value="">Select time...</option>
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 4pm)</option>
                      <option value="evening">Evening (4pm - 7pm)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-small text-text-primary mb-2">Message (optional)</label>
                  <textarea id="message" rows={3} className="w-full bg-transparent border-b border-border-light text-body focus:border-text-primary outline-none transition-colors resize-none py-2" placeholder="Any specific requests?" />
                </div>

                <div className="pt-8">
                  <button type="submit" className="btn-primary w-full md:w-auto">
                    Request Appointment
                  </button>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
