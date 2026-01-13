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
  SiNestjs,
  SiExpress,
  SiDjango,
  SiFastapi,
  SiApollographql,
  SiTestinglibrary,
  SiPrisma,
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
    { name: 'NestJS', icon: SiNestjs, color: '#E0234E', category: 'backend' },
    { name: 'Express', icon: SiExpress, color: '#FFFFFF', category: 'backend' },
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'backend' },
    { name: 'Django', icon: SiDjango, color: '#092E20', category: 'backend' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688', category: 'backend' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'backend' },
    { name: 'Apollo', icon: SiApollographql, color: '#311C87', category: 'backend' },
    { name: 'Prisma', icon: SiPrisma, color: '#2D3748', category: 'backend' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'backend' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'backend' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'backend' },

    // Testing & Tools
    { name: 'Jest', icon: SiJest, color: '#C21325', category: 'testing' },
    { name: 'React Testing Library', icon: SiTestinglibrary, color: '#E33332', category: 'testing' },
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
    <section ref={ref} className="py-16 sm:py-24 bg-beige dark:bg-dark-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-grow bg-brown/20 dark:bg-dark-border" />
            <span className="text-xs text-brown dark:text-dark-text-secondary uppercase tracking-widest">Tech Stack</span>
            <div className="h-px flex-grow bg-brown/20 dark:bg-dark-border" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-brown-dark dark:text-dark-text text-center mb-4">
            {t.home.techStack.title}
          </h2>
          <p className="text-brown dark:text-dark-text-secondary text-base sm:text-lg max-w-2xl mx-auto text-center">
            {t.home.techStack.subtitle}
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <div key={category.key} className="mb-16 last:mb-0">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-8"
            >
              <div className="inline-block relative">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-brick dark:text-brick-light">
                  {category.label}
                </h3>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-brick/20 dark:bg-brick-light/20" />
              </div>
            </motion.div>

            {/* Technologies Grid - Editorial Style */}
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
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="group relative bg-cream dark:bg-dark-bg rounded-card p-6 flex flex-col items-center justify-center gap-3 hover:shadow-editorial-lg transition-all duration-300 cursor-pointer border-2 border-brown/10 dark:border-dark-border hover:border-brick/30 dark:hover:border-brick-light/30"
                  >
                    <tech.icon
                      className="relative z-10 transition-all duration-300 group-hover:scale-110"
                      size={40}
                      style={{ color: tech.color }}
                    />
                    <span className="relative z-10 text-brown-dark dark:text-dark-text text-sm font-medium text-center">
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
