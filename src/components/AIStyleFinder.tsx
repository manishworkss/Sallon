import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';

export default function AIStyleFinder() {
  const { ref, isInView } = useInView(0.1);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  
  const handleOpen = () => {
    setIsOpen(true);
    setStep(1);
    document.body.style.overflow = 'hidden';
  };
  
  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <section className="layout-container py-24 md:py-32" ref={ref}>
        <div className="content-container border-t border-border-light pt-24 md:pt-32">
          
          <div className="flex flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-small text-muted flex items-center justify-center gap-2 mb-6"
            >
              <Sparkles size={14} className="text-accent" />
              ASTRA AI
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-h2 text-text-primary mb-6"
            >
              Not sure what<br />
              <span className="italic">to book?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-body max-w-md mx-auto mb-10"
            >
              Tell Astra what you're looking for, and receive a personalized recommendation in seconds.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              onClick={handleOpen}
              className="btn-primary"
            >
              Find My Look
            </motion.button>
          </div>

        </div>
      </section>

      {/* Elegant Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex justify-end bg-dark/20 backdrop-blur-sm"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-lg h-full bg-bg-base overflow-y-auto flex flex-col"
            >
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-border-light">
                <span className="text-small text-text-primary">Astra AI Consultation</span>
                <button onClick={handleClose} className="bg-transparent border-none cursor-pointer">
                  <X size={24} className="text-text-primary" />
                </button>
              </div>

              <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <h3 className="text-h3 text-text-primary">What are you looking for?</h3>
                    <div className="flex flex-col gap-4">
                      {['Hair', 'Colour', 'Makeup', 'Bridal', 'Beauty'].map((opt) => (
                        <button key={opt} onClick={() => setStep(2)} className="btn-secondary text-left justify-start w-full">
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <h3 className="text-h3 text-text-primary">What is your preferred style?</h3>
                    <div className="flex flex-col gap-4">
                      {['Classic', 'Modern', 'Natural', 'Bold', 'Romantic'].map((opt) => (
                        <button key={opt} onClick={() => setStep(3)} className="btn-secondary text-left justify-start w-full">
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <p className="text-small text-accent mb-4">YOUR RECOMMENDED LOOK</p>
                    <h3 className="text-h2 text-text-primary mb-4">Signature Balayage & Cut</h3>
                    <p className="text-body mb-8">
                      Based on your preferences, this low-maintenance style provides natural dimension 
                      while maintaining a modern, effortless appearance. Perfect for your lifestyle.
                    </p>
                    <button 
                      onClick={() => {
                        handleClose();
                        document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn-primary w-full"
                    >
                      Book This Look
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
