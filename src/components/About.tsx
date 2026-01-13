import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Coffee, Heart, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();
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

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-cream dark:bg-dark-bg relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 text-9xl font-display font-black text-brick/5 dark:text-brick-light/5">
          WHO IS
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-block relative">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-brown-dark dark:text-dark-text">
                Who is <span className="text-gradient">SHE</span>?
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-2 bg-brick/20 dark:bg-brick-light/20"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative p-6 sm:p-8 bg-beige dark:bg-dark-surface rounded-card border-2 border-dashed border-brown/20 dark:border-dark-border">
                {/* Decorative Arrow */}
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute -top-8 -right-8 w-24 h-24 text-brick dark:text-brick-light"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <motion.path
                    d="M10 50 Q 30 20, 50 50 T 90 50"
                    stroke="currentColor"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                  />
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="10"
                      refX="5"
                      refY="5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 5, 0 10" fill="currentColor" />
                    </marker>
                  </defs>
                </motion.svg>

                <h3 className="text-2xl font-display font-bold text-brick dark:text-brick-light mb-4">
                  About me
                </h3>
                <div className="space-y-3 text-brown dark:text-dark-text-secondary">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-brick dark:text-brick-light flex-shrink-0 mt-0.5" fill="currentColor" />
                    <p>{t.hero.description}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 text-brick dark:text-brick-light flex-shrink-0 mt-0.5" />
                    <p>Full-stack developer with passion for creating elegant solutions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Coffee className="w-5 h-5 text-brick dark:text-brick-light flex-shrink-0 mt-0.5" />
                    <p>Powered by coffee and curiosity</p>
                  </div>
                </div>
              </div>

              {/* Motto/Quote */}
              <motion.div
                variants={itemVariants}
                className="relative p-6 bg-brick/10 dark:bg-brick-light/10 rounded-card border-l-4 border-brick dark:border-brick-light"
              >
                <p className="font-serif italic text-lg text-brown-dark dark:text-dark-text mb-2">
                  "Clean code always looks like it was written by someone who cares."
                </p>
                <p className="text-sm text-brown dark:text-dark-text-secondary text-right">
                  — Robert C. Martin, Clean Code
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Fun Facts / Interests */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative p-6 sm:p-8 bg-beige dark:bg-dark-surface rounded-card border-2 border-brown/20 dark:border-dark-border">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-5 h-5 text-brick dark:text-brick-light" fill="currentColor" />
                  <h3 className="text-2xl font-display font-bold text-brick dark:text-brick-light">
                    Current Focus
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-brick dark:bg-brick-light" />
                    <p className="text-brown-dark dark:text-dark-text font-medium">Building scalable web applications</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-brick dark:bg-brick-light" />
                    <p className="text-brown-dark dark:text-dark-text font-medium">Exploring modern frontend architectures</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-brick dark:bg-brick-light" />
                    <p className="text-brown-dark dark:text-dark-text font-medium">Learning and sharing knowledge</p>
                  </div>
                </div>
              </div>

              {/* Skills Highlight */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-cream dark:bg-dark-bg rounded-card border-2 border-dashed border-brown/20 dark:border-dark-border text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">React</div>
                  <div className="text-xs text-brown dark:text-dark-text-secondary uppercase tracking-wider">Specialist</div>
                </div>
                <div className="p-4 bg-cream dark:bg-dark-bg rounded-card border-2 border-dashed border-brown/20 dark:border-dark-border text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">Node.js</div>
                  <div className="text-xs text-brown dark:text-dark-text-secondary uppercase tracking-wider">Expert</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
