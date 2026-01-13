import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, Github, X, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { useLanguage } from '../hooks/useLanguage';

const ImageCarousel = ({ images, projectTitle, isMobile }: { images: string[]; projectTitle: string; isMobile: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Main Image Container */}
      <div className={`relative ${isMobile ? 'h-[500px] sm:h-[600px]' : 'h-[400px] sm:h-[500px]'} bg-gradient-to-br from-accent-neon/10 to-accent-blush/10 rounded-lg overflow-hidden flex items-center justify-center`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${projectTitle} screenshot ${currentIndex + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="max-w-full max-h-full object-contain"
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-bg-primary/80 backdrop-blur-sm border border-accent-neon/30 text-accent-neon rounded-full hover:bg-accent-neon/20 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-bg-primary/80 backdrop-blur-sm border border-accent-neon/30 text-accent-neon rounded-full hover:bg-accent-neon/20 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-bg-primary/80 backdrop-blur-sm border border-accent-neon/30 text-text-primary rounded-full text-sm z-10">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Indicators */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-accent-neon shadow-neon'
                  : 'border-accent-neon/20 hover:border-accent-neon/50'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const { language, t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Reset scroll to top when modal opens
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-bg-primary via-bg-primary to-bg-primary/95 border-2 border-accent-neon/40 rounded-card max-w-4xl w-full max-h-[75vh] shadow-neon-lg flex flex-col overflow-hidden"
      >
          {/* Header */}
          <div className="flex-shrink-0 bg-bg-primary/95 backdrop-blur-sm border-b-2 border-accent-neon/30 p-6 flex items-start justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-neon/20 text-accent-neon rounded-full text-sm font-medium">
                  {project.type}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-accent-neon to-accent-blush text-white rounded-full text-sm font-medium">
                    {t.projects.tags.featured}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-accent-neon/10 rounded-lg transition-colors"
            >
              <X size={24} className="text-text-secondary hover:text-accent-neon" />
            </button>
          </div>

          {/* Content */}
          <div ref={contentRef} className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Image Carousel */}
          {project.images.length > 0 && (
            <ImageCarousel
              images={project.images}
              projectTitle={project.title}
              isMobile={project.type === 'mobile'}
            />
          )}

          {/* Long Description */}
          {project.longDescription && (
            <div>
              <p className="text-text-secondary leading-relaxed">
                {project.longDescription[language]}
              </p>
            </div>
          )}

          {/* Features */}
          {project.features && (
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {t.projects.modal.features}
              </h3>
              <ul className="space-y-2">
                {project.features[language].map((feature, index) => (
                  <li key={index} className="flex gap-3 text-text-secondary">
                    <span className="text-accent-neon mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-4">
              {t.projects.modal.technologies}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-accent-neon/10 border border-accent-neon/30 text-accent-neon rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Note */}
          {project.type === 'mobile' && (
            <div className="bg-accent-blush/10 border border-accent-blush/30 rounded-lg p-4">
              <p className="text-text-secondary text-sm">{t.projects.modal.note}</p>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-accent-neon text-white rounded-card hover:bg-accent-neon/90 transition-colors font-semibold"
            >
              <Github size={20} />
              {t.projects.buttons.viewCode}
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-accent-neon text-accent-neon rounded-card hover:bg-accent-neon/10 transition-colors font-semibold"
              >
                <ExternalLink size={20} />
                {t.projects.buttons.viewDemo}
              </a>
            )}
          </div>
          </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { language, t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -8 }}
        onClick={() => setIsModalOpen(true)}
        className="group relative bg-gradient-to-br from-accent-neon/5 to-accent-blush/5 rounded-card border border-accent-neon/20 hover:border-accent-neon/50 hover:shadow-neon transition-all duration-300 cursor-pointer"
      >
        {/* Featured Ribbon - Outside overflow container */}
        {project.featured && (
          <div className="absolute top-0 right-0 w-0 h-0 overflow-visible z-10">
            <div className="relative">
              <div className="absolute top-0 right-0 w-20 h-20 transform origin-top-right rotate-45 bg-gradient-to-br from-accent-neon to-accent-blush shadow-lg translate-x-[28px] translate-y-[-28px]"></div>
              <div className="absolute top-[14px] right-[-10px] transform rotate-45 text-center">
                <span className="text-white font-bold text-[10px] uppercase tracking-wider drop-shadow-lg whitespace-nowrap">
                  {t.projects.tags.featured}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className={`relative ${
          project.type === 'mobile' ? 'aspect-[16/9]' : 'aspect-video'
        } bg-gradient-to-br from-accent-neon/20 to-accent-blush/20 overflow-hidden flex items-center justify-center rounded-t-card`}>
          {project.images.length > 0 ? (
            <img
              src={project.images[0]}
              alt={project.title}
              className={`w-full h-full ${
                project.type === 'mobile' ? 'object-contain' : 'object-cover'
              } object-center`}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Code2 size={48} className="text-accent-neon/50" />
            </div>
          )}

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-accent-neon font-semibold flex items-center gap-2">
              {t.projects.buttons.viewDetails}
              <ExternalLink size={18} />
            </span>
          </div>

          {/* Mobile Tag */}
          {project.type === 'mobile' && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-bg-primary/80 backdrop-blur-sm border border-accent-neon/30 text-accent-neon rounded-full text-xs font-medium flex items-center gap-1">
                <Smartphone size={14} />
                {t.projects.tags.mobile}
              </span>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2 group-hover:text-gradient transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm sm:text-base mb-4 line-clamp-2">
            {project.description[language]}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-accent-neon/10 text-accent-neon rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-accent-neon/10 text-accent-neon rounded text-xs">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-text-secondary hover:text-accent-neon transition-colors text-sm"
            >
              <Github size={16} />
              Code
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-text-secondary hover:text-accent-neon transition-colors text-sm"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'fullstack'>('all');
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.type === filter);

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-accent-neon/20 to-accent-blush/20 rounded-full">
              <Code2 size={40} className="text-accent-neon" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6">
            {t.projects.title}
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-2 bg-accent-neon/10 rounded-card">
            {(['all', 'web', 'mobile', 'fullstack'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === type
                    ? 'bg-accent-neon text-white shadow-neon'
                    : 'text-text-secondary hover:text-accent-neon'
                }`}
              >
                {t.projects.types[type]}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-text-secondary text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
