import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Highlights from '../components/Highlights';
import { useLanguage } from '../hooks/useLanguage';

const Home = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Highlights Section */}
      <Highlights />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-bg-primary/50 to-bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
              {t.home.cta.title}
            </h2>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 79, 154, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/projects')}
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-accent-neon to-accent-blush text-white text-base sm:text-lg font-bold rounded-card hover:shadow-neon-lg transition-all duration-300"
            >
              {t.home.cta.button}
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform"
                size={24}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
