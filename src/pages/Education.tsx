import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { education } from '../data/education';
import { useLanguage } from '../hooks/useLanguage';

const EducationCard = ({ edu, index }: { edu: typeof education[0]; index: number }) => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -8 }}
      className="group bg-gradient-to-br from-accent-neon/5 to-accent-blush/5 rounded-card p-6 sm:p-8 border border-accent-neon/20 hover:border-accent-neon/50 hover:shadow-neon transition-all duration-300"
    >
      {/* Institution Logo/Color */}
      <div className="flex items-start gap-6 mb-6">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center font-bold text-white text-xl sm:text-2xl"
          style={{ backgroundColor: edu.logoColor }}
        >
          {edu.institution.substring(0, 1)}
        </motion.div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
              {edu.degree[language]}
            </h3>
            <div className="flex items-center gap-2 text-accent-neon flex-shrink-0">
              <Calendar size={18} />
              <span className="font-semibold">{edu.year}</span>
            </div>
          </div>

          <h4 className="text-lg sm:text-xl font-semibold text-accent-blush mb-2">
            {edu.field[language]}
          </h4>

          <p className="text-text-secondary text-sm sm:text-base mb-4">
            {edu.institution}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="flex gap-3">
        <BookOpen size={20} className="text-accent-neon mt-1 flex-shrink-0" />
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          {edu.description[language]}
        </p>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-neon/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

const Education = () => {
  const { t } = useLanguage();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="p-4 bg-gradient-to-br from-accent-neon/20 to-accent-blush/20 rounded-full"
            >
              <GraduationCap size={40} className="text-accent-neon" />
            </motion.div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6">
            {t.education.title}
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-3xl mx-auto">
            {t.education.subtitle}
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8 relative">
          {/* Connecting Line */}
          <div className="hidden sm:block absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-accent-neon via-accent-blush to-accent-neon opacity-20" />

          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>

        {/* Additional Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24 p-8 bg-gradient-to-r from-accent-neon/10 to-accent-blush/10 rounded-card border border-accent-neon/20 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Continuous Learning
          </h3>
          <p className="text-text-secondary text-base sm:text-lg mb-6 max-w-2xl mx-auto">
            Beyond formal education, I continuously expand my knowledge through online courses,
            technical documentation, open-source contributions, and staying current with the latest
            web development trends and best practices.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'TypeScript',
              'React Advanced Patterns',
              'System Design',
              'Performance Optimization',
              'Web Accessibility',
              'Cloud Architecture',
            ].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-accent-neon/10 border border-accent-neon/30 text-accent-neon rounded-full text-sm font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
