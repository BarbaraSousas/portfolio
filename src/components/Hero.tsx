import { motion } from 'framer-motion';
import { Sparkles, FolderOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
        {/* Decorative circles */}
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border-2 border-dashed border-brick/20 dark:border-brick-light/20"
        />
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full border-2 border-brown/20 dark:border-brown-light/20"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6 sm:space-y-8"
        >
          {/* Top Label with Icon */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-brick dark:text-brick-light" />
            <span className="text-sm sm:text-base text-brown dark:text-dark-text-secondary font-medium uppercase tracking-wider">
              {t.hero.greeting}
            </span>
          </motion.div>

          {/* Large Title - Editorial Style */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-brown-dark dark:text-dark-text leading-none tracking-tight"
          >
            {t.hero.name}
          </motion.h1>

          {/* Subtitle with Decorative Elements */}
          <motion.div
            variants={itemVariants}
            className="relative inline-block"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-gradient mb-2">
              {t.hero.title}
            </h2>
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute -bottom-2 left-0 w-full h-3"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,5 Q50,0 100,5 T200,5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-brick dark:text-brick-light opacity-50"
              />
            </motion.svg>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-brown dark:text-dark-text-secondary leading-relaxed max-w-3xl mx-auto px-4"
          >
            {t.hero.description}
          </motion.p>

          {/* Stats Row - Editorial Style */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 pt-8 sm:pt-12"
          >
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-dashed border-brown/20 dark:border-dark-border rounded-lg" />
              <div className="relative text-center p-4">
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-1">8+</div>
                <div className="text-xs sm:text-sm text-brown dark:text-dark-text-secondary uppercase tracking-wider">Years Exp.</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border-2 border-dashed border-brown/20 dark:border-dark-border rounded-lg" />
              <div className="relative text-center p-4">
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-1">15+</div>
                <div className="text-xs sm:text-sm text-brown dark:text-dark-text-secondary uppercase tracking-wider">Projects</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border-2 border-dashed border-brown/20 dark:border-dark-border rounded-lg" />
              <div className="relative text-center p-4">
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-1">7</div>
                <div className="text-xs sm:text-sm text-brown dark:text-dark-text-secondary uppercase tracking-wider">Companies</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/projects')}
              className="group px-8 py-4 bg-brick dark:bg-brick-light text-white font-semibold rounded-card hover:shadow-editorial-lg transition-all duration-300 flex items-center gap-2"
            >
              <FolderOpen size={20} />
              {t.hero.cta.projects}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border-2 border-brick dark:border-brick-light text-brick dark:text-brick-light font-semibold rounded-card hover:bg-brick/10 dark:hover:bg-brick-light/10 transition-all duration-300"
            >
              {t.hero.cta.contact}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
