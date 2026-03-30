import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
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
}

const TechStack = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const technologies: TechItem[] = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
    { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'Apollo', icon: SiApollographql, color: '#311C87' },
    { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'Jest', icon: SiJest, color: '#C21325' },
    { name: 'Testing Library', icon: SiTestinglibrary, color: '#E33332' },
    { name: 'Cypress', icon: SiCypress, color: '#17202C' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
  ];

  const duplicatedTechs = [...technologies, ...technologies, ...technologies];
  const cardWidth = 140;
  const totalWidth = technologies.length * cardWidth;

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      if (!isPaused) {
        setTranslateX((prev) => {
          const newX = prev - deltaTime * 0.04;
          if (Math.abs(newX) >= totalWidth) {
            return newX + totalWidth;
          }
          return newX;
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, totalWidth]);

  return (
    <section ref={ref} className="h-screen flex flex-col justify-center relative overflow-hidden bg-beige dark:bg-dark-surface/30">
      {/* Parallax Background */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }}
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
      >
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full border-2 border-dashed border-brick/20 dark:border-brick-light/20" />
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-brown/10 dark:bg-brown-light/10" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4 justify-center">
              <div className="h-px w-12 bg-brown/20 dark:bg-dark-border" />
              <span className="text-xs text-brown dark:text-dark-text-secondary uppercase tracking-widest">Tech Stack</span>
              <div className="h-px w-12 bg-brown/20 dark:bg-dark-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brown-dark dark:text-dark-text mb-3">
              {t.home.techStack.title}
            </h2>
            <p className="text-brown dark:text-dark-text-secondary text-sm sm:text-base max-w-xl mx-auto">
              {t.home.techStack.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Tech Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-beige dark:from-dark-surface/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-beige dark:from-dark-surface/30 to-transparent z-10 pointer-events-none" />

          {/* Cards */}
          <div className="overflow-hidden py-4">
            <motion.div
              className="flex gap-4"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {duplicatedTechs.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -8 }}
                  className="flex-shrink-0 w-[120px] bg-cream dark:bg-dark-bg rounded-card p-4 flex flex-col items-center justify-center gap-2 border-2 border-brown/10 dark:border-dark-border hover:border-brick/30 dark:hover:border-brick-light/30 hover:shadow-editorial-lg transition-all duration-300 cursor-pointer"
                >
                  <tech.icon
                    className="transition-transform duration-300"
                    size={36}
                    style={{ color: tech.color }}
                  />
                  <span className="text-brown-dark dark:text-dark-text text-xs font-medium text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Category Labels */}
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <div className="flex flex-wrap justify-center gap-3">
            {['Frontend', 'Backend', 'Database', 'Testing & Tools'].map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-brick/10 dark:bg-brick-light/10 text-brick dark:text-brick-light rounded-full text-xs sm:text-sm font-medium"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
