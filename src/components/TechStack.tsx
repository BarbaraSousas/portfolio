import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiJest,
  SiCypress,
  SiTailwindcss,
  SiNextdotjs,
  SiVuedotjs,
  SiGraphql,
} from 'react-icons/si';
import { useLanguage } from '../hooks/useLanguage';

interface TechItem {
  name: string;
  icon: React.ElementType;
  color: string;
  category: 'frontend' | 'backend' | 'mobile' | 'testing';
}

const TechStack = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technologies: TechItem[] = [
    // Frontend
    { name: 'React', icon: SiReact, color: '#61DAFB', category: 'frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'frontend' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', category: 'frontend' },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D', category: 'frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'frontend' },

    // Backend
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'backend' },
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'backend' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'backend' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'backend' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'backend' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'backend' },

    // Testing & Tools
    { name: 'Jest', icon: SiJest, color: '#C21325', category: 'testing' },
    { name: 'Cypress', icon: SiCypress, color: '#17202C', category: 'testing' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'testing' },
    { name: 'Git', icon: SiGit, color: '#F05032', category: 'testing' },
  ];

  const categories = [
    { key: 'frontend' as const, label: t.home.techStack.categories.frontend },
    { key: 'backend' as const, label: t.home.techStack.categories.backend },
    { key: 'testing' as const, label: t.home.techStack.categories.testing },
  ];

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
    <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-b from-bg-primary to-bg-primary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-section-title font-display font-bold text-text-primary mb-4">
            {t.home.techStack.title}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            {t.home.techStack.subtitle}
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <div key={category.key} className="mb-12 last:mb-0">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="text-xl sm:text-2xl font-semibold text-accent-neon mb-6 text-center sm:text-left"
            >
              {category.label}
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
            >
              {technologies
                .filter((tech) => tech.category === category.key)
                .map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="group relative bg-gradient-to-br from-accent-neon/5 to-accent-blush/5 rounded-card p-6 flex flex-col items-center justify-center gap-3 hover:shadow-neon transition-all duration-300 cursor-pointer border border-accent-neon/10 hover:border-accent-neon/30"
                  >
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-neon/0 to-accent-blush/0 group-hover:from-accent-neon/10 group-hover:to-accent-blush/10 rounded-card transition-all duration-300" />

                    <tech.icon
                      className="relative z-10 transition-all duration-300"
                      size={40}
                      style={{ color: tech.color }}
                    />
                    <span className="relative z-10 text-text-primary text-sm font-medium text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
