import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FolderOpen } from 'lucide-react';
import { useRef } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import WritingPreview from '../components/WritingPreview';
import ExperienceCarousel from '../components/ExperienceCarousel';
import { useLanguage } from '../hooks/useLanguage';

const Home = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const ctaRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Experience Carousel Section */}
      <ExperienceCarousel />

      {/* Writing Preview Section */}
      <WritingPreview />

      {/* CTA Section */}
      <section ref={ctaRef} className="h-screen flex items-center justify-center bg-cream dark:bg-dark-bg relative overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
          className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-dashed border-brick/30 dark:border-brick-light/30" />
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full border-2 border-dashed border-brown/20 dark:border-brown-light/20"
          />
        </motion.div>

        <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brown-dark dark:text-dark-text">
              {t.home.cta.title}
            </h2>

            <motion.button
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/projects')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-brick dark:bg-brick-light text-white text-lg font-bold rounded-card hover:shadow-editorial-lg transition-all duration-300"
            >
              <FolderOpen size={22} />
              {t.home.cta.button}
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
