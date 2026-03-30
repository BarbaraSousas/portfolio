import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Briefcase, MapPin, Calendar, ChevronDown } from 'lucide-react';
import { experiences } from '../data/experiences';
import { useLanguage } from '../hooks/useLanguage';

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      style={{ willChange: 'transform, opacity' }}
      className="h-full"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        style={{ willChange: 'transform' }}
        className="group bg-gradient-to-br from-brick/5 to-brown/5 dark:from-brick-light/10 dark:to-brown/10 rounded-card p-6 sm:p-8 border border-brown/20 dark:border-dark-border hover:border-brick/50 dark:hover:border-brick-light/50 hover:shadow-editorial-lg transition-all duration-300 h-full flex flex-col"
      >
            <div
              className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center font-bold text-white text-xl"
              style={{ backgroundColor: experience.logoColor }}
            >
              {experience.company.substring(0, 2).toUpperCase()}
            </div>

            {/* Role and Company */}
            <h3 className="text-card-title font-bold text-brown-dark dark:text-dark-text mb-2">
              {experience.role[language]}
            </h3>
            <h4 className="text-lg sm:text-xl font-semibold text-brick dark:text-brick-light mb-4">
              {experience.company}
            </h4>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 mb-6 text-brown dark:text-dark-text-secondary text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-brick-light dark:text-brick" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-brick-light dark:text-brick" />
                <span>{experience.location}</span>
              </div>
            </div>

            {/* Description */}
            <ul className="space-y-3 mb-6">
              {experience.description[language].map((item, i) => (
                <li key={i} className="flex gap-3 text-brown dark:text-dark-text-secondary text-sm sm:text-base">
                  <span className="text-brick dark:text-brick-light mt-1.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-brick/10 dark:bg-brick-light/10 border border-brick/30 dark:border-brick-light/30 text-brick dark:text-brick-light rounded-full text-xs sm:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const { t, language } = useLanguage();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setShowScrollIndicator(!scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 bg-cream dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-brick/20 to-brown/20 dark:from-brick-light/20 dark:to-brown/20 rounded-full">
              <Briefcase size={40} className="text-brick dark:text-brick-light" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brown-dark dark:text-dark-text mb-6">
            {t.experience.title}
          </h1>
          <p className="text-brown dark:text-dark-text-secondary text-lg sm:text-xl max-w-3xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-40"
          >
            <span className="text-sm font-medium text-brick dark:text-brick-light">
              {language === 'pt' ? 'Role para ver mais' : 'Scroll to see more'}
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <ChevronDown size={24} className="text-brick dark:text-brick-light" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Experience;
