import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Lightbulb, Code, Zap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const WritingPreview = () => {
  const { t } = useLanguage();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const categories = [
    {
      id: 'tutorials',
      icon: BookOpen,
      label: t.writing.tutorials,
      description: t.writing.tutorialsDesc,
    },
    {
      id: 'case-studies',
      icon: Code,
      label: t.writing.caseStudies,
      description: t.writing.caseStudiesDesc,
    },
    {
      id: 'thoughts',
      icon: Lightbulb,
      label: t.writing.thoughts,
      description: t.writing.thoughtsDesc,
    },
    {
      id: 'til',
      icon: Zap,
      label: t.writing.til,
      description: t.writing.tilDesc,
    },
  ];

  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-beige dark:bg-dark-surface/30 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-10"
      >
        <div className="absolute -bottom-10 -right-10 text-8xl font-display font-black text-brick/30 dark:text-brick-light/30 rotate-12">
          BLOG
        </div>
        <div className="absolute top-20 left-20 w-24 h-24 rounded-full border-2 border-dashed border-brown/20 dark:border-brown-light/20" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brown-dark dark:text-dark-text mb-3">
            {t.writing.title}
          </h2>
          <p className="text-brown dark:text-dark-text-secondary text-sm sm:text-base max-w-xl mx-auto">
            {t.writing.subtitle}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="p-4 bg-cream dark:bg-dark-bg rounded-card border-2 border-brown/10 dark:border-dark-border hover:border-brick/30 dark:hover:border-brick-light/30 transition-all duration-300 cursor-pointer"
            >
              <category.icon className="w-6 h-6 text-brick dark:text-brick-light mb-2" />
              <h3 className="text-base font-display font-bold text-brown-dark dark:text-dark-text mb-1">
                {category.label}
              </h3>
              <p className="text-xs text-brown dark:text-dark-text-secondary">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block p-5 bg-cream dark:bg-dark-bg rounded-card border-2 border-dashed border-brown/20 dark:border-dark-border">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brick/10 dark:bg-brick-light/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-brick dark:text-brick-light" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-display font-bold text-brown-dark dark:text-dark-text">
                  {t.writing.comingSoon}
                </h3>
                <p className="text-xs text-brown dark:text-dark-text-secondary">
                  {t.writing.comingSoonDesc}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WritingPreview;
