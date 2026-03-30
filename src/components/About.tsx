import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Coffee, Heart, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const focusItems = [
    { icon: Heart, text: t.about.focus1 },
    { icon: Code2, text: t.about.focus2 },
    { icon: Coffee, text: t.about.focus3 },
  ];

  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-cream dark:bg-dark-bg relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
      >
        <div className="absolute top-10 right-10 text-8xl font-display font-black text-brick/5 dark:text-brick-light/5">
          {t.about.title.toUpperCase()}
        </div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-32 h-32 rounded-full border-2 border-dashed border-brown/20 dark:border-brown-light/20"
        />
      </motion.div>

      <motion.div style={{ y, opacity }} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brown-dark dark:text-dark-text">
              {t.about.title} <span className="text-gradient">{t.about.titleHighlight}</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants}>
              <div className="p-5 sm:p-6 bg-beige dark:bg-dark-surface rounded-card border-2 border-dashed border-brown/20 dark:border-dark-border h-full">
                <h3 className="text-xl font-display font-bold text-brick dark:text-brick-light mb-3">
                  {t.about.aboutMe}
                </h3>
                <p className="text-brown dark:text-dark-text-secondary text-sm leading-relaxed mb-4">
                  {t.hero.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brown dark:text-dark-text-secondary text-sm">
                    <Code2 className="w-4 h-4 text-brick dark:text-brick-light flex-shrink-0" />
                    <span>{t.about.bio1}</span>
                  </div>
                  <div className="flex items-center gap-2 text-brown dark:text-dark-text-secondary text-sm">
                    <Coffee className="w-4 h-4 text-brick dark:text-brick-light flex-shrink-0" />
                    <span>{t.about.bio2}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Focus & Skills */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="p-5 sm:p-6 bg-beige dark:bg-dark-surface rounded-card border-2 border-brown/20 dark:border-dark-border">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-brick dark:text-brick-light" fill="currentColor" />
                  <h3 className="text-xl font-display font-bold text-brick dark:text-brick-light">
                    {t.about.currentFocus}
                  </h3>
                </div>
                <div className="space-y-2">
                  {focusItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brick dark:bg-brick-light" />
                      <span className="text-brown-dark dark:text-dark-text text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Highlight */}
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="p-3 bg-cream dark:bg-dark-bg rounded-card border-2 border-dashed border-brown/20 dark:border-dark-border text-center"
                >
                  <div className="text-2xl font-bold text-gradient mb-0.5">React</div>
                  <div className="text-[10px] text-brown dark:text-dark-text-secondary uppercase tracking-wider">{t.about.specialist}</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="p-3 bg-cream dark:bg-dark-bg rounded-card border-2 border-dashed border-brown/20 dark:border-dark-border text-center"
                >
                  <div className="text-2xl font-bold text-gradient mb-0.5">Node.js</div>
                  <div className="text-[10px] text-brown dark:text-dark-text-secondary uppercase tracking-wider">{t.about.expert}</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            variants={itemVariants}
            className="mt-6 p-4 bg-brick/10 dark:bg-brick-light/10 rounded-card border-l-4 border-brick dark:border-brick-light max-w-2xl mx-auto"
          >
            <p className="font-serif italic text-sm text-brown-dark dark:text-dark-text">
              {t.about.quote}
            </p>
            <p className="text-xs text-brown dark:text-dark-text-secondary text-right mt-1">
              {t.about.quoteAuthor}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
