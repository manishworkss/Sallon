import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Lookbook from './components/Lookbook';
import About from './components/About';
import Booking from './components/Booking';
import Location from './components/Location';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';

type Page = 'home' | 'privacy' | 'terms';

function getPageFromHash(): Page {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'privacy') return 'privacy';
  if (hash === 'terms') return 'terms';
  return 'home';
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-bg-base flex flex-col items-center justify-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-h3 tracking-[0.2em] uppercase text-text-primary mb-4"
            >
              ASTRA
            </motion.p>
            <motion.div
              className="w-12 h-[1px] bg-border-light overflow-hidden relative"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
                className="absolute inset-0 bg-text-primary"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          {page === 'home' && (
            <main>
              <Hero />
              <About />
              <Services />
              <Lookbook />
              <Booking />
              <Location />
            </main>
          )}
          {page === 'privacy' && (
            <main>
              <PrivacyPolicy />
            </main>
          )}
          {page === 'terms' && (
            <main>
              <Terms />
            </main>
          )}
          <Footer />
        </>
      )}
    </>
  );
}
