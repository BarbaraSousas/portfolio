import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for smoother motion
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1], // Smooth cubic-bezier easing
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.34, 1.56, 0.64, 1], // Smooth spring-like easing without rotation
        delay: 0.2,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-0">
      {/* Animated Background Elements - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            repeatType: 'reverse',
          }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-accent-neon/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            repeatType: 'reverse',
            delay: 3,
          }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent-blush/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.p
              variants={itemVariants}
              className="text-accent-neon text-sm sm:text-base font-medium mb-2 sm:mb-4"
            >
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-hero font-display font-bold text-text-primary mb-3 sm:mb-6"
            >
              {t.hero.name}
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient mb-4 sm:mb-6"
            >
              {t.hero.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(255, 79, 154, 0.5)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => navigate('/projects')}
                style={{ willChange: 'transform' }}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-accent-neon text-white font-semibold rounded-card hover:bg-accent-neon/90 transition-colors duration-300 flex items-center justify-center gap-2 shadow-neon"
              >
                {t.hero.cta.projects}
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => navigate('/contact')}
                style={{ willChange: 'transform' }}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent-neon text-accent-neon font-semibold rounded-card hover:bg-accent-neon/10 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {t.hero.cta.contact}
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-accent-neon/20"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-1">
                  8+
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm">Years Exp.</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-1">
                  15+
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm">Projects</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-1">
                  7
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm">Companies</p>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Animated Glow Ring - Optimized */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ willChange: 'transform' }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-neon via-accent-blush to-accent-neon opacity-60 blur-xl"
              />

              {/* Inner Glow - Optimized */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-accent-neon to-accent-blush opacity-40 animate-pulse-glow" />

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent-neon/50 shadow-neon-lg">
                {/* Placeholder - Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-accent-neon/30 to-accent-blush/30 flex items-center justify-center">
                  {/* Uncomment when you add your photo */}
                  <img
                    src="/assets/profile-photo.png"
                    alt="Barbara Araújo"
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="text-center p-8">
                    <p className="text-text-secondary text-sm sm:text-base">
                      Add your photo to:
                    </p>
                    <p className="text-accent-neon font-mono text-xs sm:text-sm mt-2">
                      /src/assets/profile-photo.jpg
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Optimized */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
          style={{ willChange: 'transform' }}
          className="w-6 h-10 border-2 border-accent-neon/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-accent-neon rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
