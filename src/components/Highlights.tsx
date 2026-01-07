import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface CounterProps {
  value: string;
  duration?: number;
}

const Counter = ({ value, duration = 2 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const display = useTransform(springValue, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (isInView) {
      const numericPart = parseInt(value.replace(/\D/g, ''));
      motionValue.set(numericPart);
    }
  }, [isInView, value, motionValue]);

  // Handle percentage and plus signs
  const hasPercent = value.includes('%');
  const hasPlus = value.includes('+');

  return (
    <span ref={ref} className="inline-block">
      <motion.span>{isInView ? display : '0'}</motion.span>
      {hasPercent && '%'}
      {hasPlus && '+'}
    </span>
  );
};

const Highlights = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-section-title font-display font-bold text-text-primary mb-4">
            {t.home.highlights.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {t.home.highlights.metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative bg-gradient-to-br from-accent-neon/10 to-accent-blush/10 rounded-card p-8 text-center border border-accent-neon/20 hover:border-accent-neon/50 transition-all duration-300 overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 bg-gradient-to-br from-accent-neon/5 via-transparent to-accent-blush/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundSize: '200% 200%',
                }}
              />

              {/* Pulse Effect */}
              <div className="absolute inset-0 bg-accent-neon/5 opacity-0 group-hover:opacity-100 animate-pulse" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-3">
                  <Counter value={metric.value} />
                </h3>
                <p className="text-text-secondary text-sm sm:text-base font-medium">
                  {metric.label}
                </p>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-neon-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
