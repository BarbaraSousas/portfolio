import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { experiences } from '../data/experiences';
import { useLanguage } from '../hooks/useLanguage';

interface ExperienceCardProps {
  experience: typeof experiences[0];
  isSelected: boolean;
  onClick: () => void;
}

const ExperienceCard = ({ experience, isSelected, onClick }: ExperienceCardProps) => {
  const { language } = useLanguage();

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      className={`flex-shrink-0 w-[280px] sm:w-[320px] cursor-pointer transition-all duration-300 ${
        isSelected ? 'z-10' : ''
      }`}
    >
      <div
        className={`h-full bg-gradient-to-br from-brick/5 to-brown/5 dark:from-brick-light/10 dark:to-brown/10 rounded-card p-5 border transition-all duration-300 ${
          isSelected
            ? 'border-brick dark:border-brick-light shadow-editorial-lg scale-105'
            : 'border-brown/20 dark:border-dark-border hover:border-brick/50 dark:hover:border-brick-light/50'
        }`}
      >
        <div
          className="w-12 h-12 rounded-lg mb-3 flex items-center justify-center font-bold text-white text-sm"
          style={{ backgroundColor: experience.logoColor }}
        >
          {experience.company.substring(0, 2).toUpperCase()}
        </div>

        <h3 className="text-base font-bold text-brown-dark dark:text-dark-text mb-1 line-clamp-1">
          {experience.role[language]}
        </h3>
        <h4 className="text-sm font-semibold text-brick dark:text-brick-light mb-2">
          {experience.company}
        </h4>

        <div className="flex flex-wrap gap-2 mb-3 text-brown dark:text-dark-text-secondary text-xs">
          <div className="flex items-center gap-1">
            <Calendar size={12} className="text-brick-light dark:text-brick" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} className="text-brick-light dark:text-brick" />
            <span>{experience.location}</span>
          </div>
        </div>

        {isSelected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-1.5 mb-3">
              {experience.description[language].slice(0, 2).map((item, i) => (
                <li key={i} className="flex gap-2 text-brown dark:text-dark-text-secondary text-xs">
                  <span className="text-brick dark:text-brick-light mt-0.5 flex-shrink-0">•</span>
                  <span className="line-clamp-2">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <div className="flex flex-wrap gap-1">
          {experience.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-brick/10 dark:bg-brick-light/10 border border-brick/30 dark:border-brick-light/30 text-brick dark:text-brick-light rounded-full text-[10px] font-medium"
            >
              {tech}
            </span>
          ))}
          {experience.technologies.length > 3 && (
            <span className="px-2 py-0.5 bg-brick/10 dark:bg-brick-light/10 border border-brick/30 dark:border-brick-light/30 text-brick dark:text-brick-light rounded-full text-[10px] font-medium">
              +{experience.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceCarousel = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const duplicatedExperiences = [...experiences, ...experiences, ...experiences];
  const cardWidth = 336;
  const totalWidth = experiences.length * cardWidth;

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      if (!isPaused && !selectedId) {
        setTranslateX((prev) => {
          const newX = prev - deltaTime * 0.03;
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
  }, [isPaused, selectedId, totalWidth]);

  const handleCardClick = (id: string) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const scroll = (direction: 'left' | 'right') => {
    setTranslateX((prev) => {
      const delta = direction === 'left' ? cardWidth : -cardWidth;
      let newX = prev + delta;
      if (newX > 0) newX = -totalWidth + cardWidth;
      if (newX < -totalWidth * 2) newX = -totalWidth;
      return newX;
    });
  };

  return (
    <section ref={ref} className="h-screen flex flex-col justify-center overflow-hidden bg-cream dark:bg-dark-bg relative">
      {/* Parallax Background */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
      >
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full border-2 border-dashed border-brick/20 dark:border-brick-light/20" />
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-brown/10 dark:bg-brown-light/10" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-3 justify-center">
              <div className="h-px w-12 bg-brown/20 dark:bg-dark-border" />
              <span className="text-xs text-brown dark:text-dark-text-secondary uppercase tracking-widest">Experience</span>
              <div className="h-px w-12 bg-brown/20 dark:bg-dark-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brown-dark dark:text-dark-text mb-2">
              {t.experience.title}
            </h2>
            <p className="text-brown dark:text-dark-text-secondary text-sm sm:text-base max-w-xl mx-auto">
              {t.experience.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            if (!selectedId) setSelectedId(null);
          }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-cream/80 dark:bg-dark-surface/80 hover:bg-cream dark:hover:bg-dark-surface border border-brown/30 dark:border-dark-border hover:border-brick dark:hover:border-brick-light rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft size={20} className="text-brick dark:text-brick-light" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-cream/80 dark:bg-dark-surface/80 hover:bg-cream dark:hover:bg-dark-surface border border-brown/30 dark:border-dark-border hover:border-brick dark:hover:border-brick-light rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight size={20} className="text-brick dark:text-brick-light" />
          </button>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream dark:from-dark-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream dark:from-dark-bg to-transparent z-10 pointer-events-none" />

          {/* Cards Container */}
          <div className="overflow-hidden py-4">
            <motion.div
              className="flex gap-4"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {duplicatedExperiences.map((experience, index) => (
                <ExperienceCard
                  key={`${experience.id}-${index}`}
                  experience={experience}
                  isSelected={selectedId === `${experience.id}-${index}`}
                  onClick={() => handleCardClick(`${experience.id}-${index}`)}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Pause Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isPaused ? 1 : 0 }}
          className="text-center mt-3 text-brown dark:text-dark-text-secondary text-xs"
        >
          {language === 'pt' ? 'Carrossel pausado - clique para detalhes' : 'Carousel paused - click for details'}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceCarousel;
