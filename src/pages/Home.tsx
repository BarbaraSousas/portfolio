import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FolderOpen } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import WritingPreview from '../components/WritingPreview';
import Highlights from '../components/Highlights';
import { useLanguage } from '../hooks/useLanguage';

const Home = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Highlights Section */}
      <Highlights />

      {/* Writing Preview Section */}
      <WritingPreview />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-cream dark:bg-dark-bg relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-dashed border-brick/30 dark:border-brick-light/30" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brown-dark dark:text-dark-text mb-4">
                {t.home.cta.title}
              </h2>
              <p className="text-brown dark:text-dark-text-secondary text-lg max-w-2xl mx-auto">
                Let's build something amazing together
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/projects')}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-brick dark:bg-brick-light text-white text-lg font-bold rounded-card hover:shadow-editorial-lg transition-all duration-300"
            >
              <FolderOpen size={24} />
              {t.home.cta.button}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
