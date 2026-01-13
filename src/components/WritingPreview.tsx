import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Lightbulb, Code, Zap, ArrowRight } from 'lucide-react';

const WritingPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  const categories = [
    {
      id: 'tutorials',
      icon: BookOpen,
      label: 'Tutorials',
      description: 'Step-by-step guides and how-tos',
      color: 'text-brick dark:text-brick-light',
      bgColor: 'bg-brick/10 dark:bg-brick-light/10',
    },
    {
      id: 'case-studies',
      icon: Code,
      label: 'Case Studies',
      description: 'Deep dives into projects',
      color: 'text-brown dark:text-brown-light',
      bgColor: 'bg-brown/10 dark:bg-brown-light/10',
    },
    {
      id: 'thoughts',
      icon: Lightbulb,
      label: 'Thoughts',
      description: 'Reflections on tech and career',
      color: 'text-brick-light dark:text-brick',
      bgColor: 'bg-brick-light/10 dark:bg-brick/10',
    },
    {
      id: 'til',
      icon: Zap,
      label: 'TIL',
      description: 'Quick notes and snippets',
      color: 'text-brown-dark dark:text-brown-light',
      bgColor: 'bg-brown-dark/10 dark:bg-brown-light/10',
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-beige dark:bg-dark-surface/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -bottom-20 -right-20 text-9xl font-display font-black text-brick/30 dark:text-brick-light/30 rotate-12">
          BLOG
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <div className="inline-block relative mb-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-brown-dark dark:text-dark-text">
                Writing & Sharing
              </h2>
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-brick via-brown to-brick-light opacity-20" />
            </div>
            <p className="text-brown dark:text-dark-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              Thoughts, tutorials, and learnings about development and technology
            </p>
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`group relative p-6 ${category.bgColor} rounded-card border-2 border-brown/10 dark:border-dark-border hover:border-brick/30 dark:hover:border-brick-light/30 transition-all duration-300 cursor-pointer`}
              >
                <category.icon className={`w-8 h-8 ${category.color} mb-4`} />
                <h3 className="text-xl font-display font-bold text-brown-dark dark:text-dark-text mb-2">
                  {category.label}
                </h3>
                <p className="text-sm text-brown dark:text-dark-text-secondary">
                  {category.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-4 right-4"
                >
                  <ArrowRight className={`w-5 h-5 ${category.color}`} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Coming Soon Placeholder */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="inline-block p-6 sm:p-8 bg-cream dark:bg-dark-bg rounded-card border-2 border-dashed border-brown/20 dark:border-dark-border">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brick/10 dark:bg-brick-light/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-brick dark:text-brick-light" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-brown-dark dark:text-dark-text mb-2">
                    Coming Soon
                  </h3>
                  <p className="text-brown dark:text-dark-text-secondary">
                    Blog posts and articles are on their way. Stay tuned!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WritingPreview;
