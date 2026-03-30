import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, FolderOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useRef } from 'react';

const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

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

  // Combinar stats do hero com highlights
  const stats = [
    { value: '8+', label: t.home.highlights.metrics[0].label },
    { value: '25%', label: t.home.highlights.metrics[1].label },
    { value: '40%', label: t.home.highlights.metrics[2].label },
    { value: '15+', label: t.home.highlights.metrics[3].label },
  ];

  return (
    <section ref={ref} className="h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20"
      >
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
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '60%']) }}
          className="absolute top-1/3 left-[15%] w-16 h-16 rounded-full bg-brick/10 dark:bg-brick-light/10"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '80%']) }}
          className="absolute bottom-1/4 right-[15%] w-20 h-20 rounded-full bg-brown/10 dark:bg-brown-light/10"
        />
      </motion.div>

      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-6xl mx-auto relative z-10 w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-4 sm:space-y-6"
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

          {/* Large Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-brown-dark dark:text-dark-text leading-none tracking-tight"
          >
            {t.hero.name}
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="relative inline-block"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-gradient mb-2">
              {t.hero.title}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-brown dark:text-dark-text-secondary leading-relaxed max-w-2xl mx-auto px-4"
          >
            {t.hero.description}
          </motion.p>

          {/* Stats Grid - Impact & Achievements integrados */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -4 }}
                className="relative p-3 sm:p-4 bg-beige/50 dark:bg-dark-surface/50 rounded-card border border-brown/10 dark:border-dark-border"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-brown dark:text-dark-text-secondary uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/projects')}
              className="group px-6 py-3 bg-brick dark:bg-brick-light text-white font-semibold rounded-card hover:shadow-editorial-lg transition-all duration-300 flex items-center gap-2"
            >
              <FolderOpen size={18} />
              {t.hero.cta.projects}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
              className="px-6 py-3 border-2 border-brick dark:border-brick-light text-brick dark:text-brick-light font-semibold rounded-card hover:bg-brick/10 dark:hover:bg-brick-light/10 transition-all duration-300"
            >
              {t.hero.cta.contact}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-brown/30 dark:border-dark-border rounded-full flex justify-center pt-1.5"
        >
          <motion.div className="w-1 h-1 bg-brick dark:bg-brick-light rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
