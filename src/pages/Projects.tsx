import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import NotebookEntry, { MarginLabel, MarginNote } from '../components/notebook/NotebookEntry';
import PageHeader from '../components/notebook/PageHeader';
import { pageShell, rule, inkRule, muted, penText, monoLabel, textLink } from '../components/notebook/styles';
import { projects, Project } from '../data/projects';
import { useLanguage } from '../hooks/useLanguage';

type Filter = 'all' | Project['type'];

const ImageCarousel = ({ images, projectTitle, isMobile }: { images: string[]; projectTitle: string; isMobile: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  const goTo = (index: number) => setCurrentIndex((index + images.length) % images.length);
  const navButton = `absolute top-1/2 -translate-y-1/2 p-1.5 bg-cream/90 dark:bg-dark-bg/90 border ${rule} hover:border-brick`;

  return (
    <figure>
      <div className={`relative ${isMobile ? 'h-[460px] sm:h-[560px]' : 'h-[300px] sm:h-[440px]'} bg-beige dark:bg-dark-surface border ${rule} flex items-center justify-center overflow-hidden`}>
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${projectTitle} screenshot ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
        {images.length > 1 && (
          <>
            <button type="button" onClick={() => goTo(currentIndex - 1)} className={`${navButton} left-3`} aria-label="Previous image">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={() => goTo(currentIndex + 1)} className={`${navButton} right-3`} aria-label="Next image">
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
      <figcaption className={`flex justify-between items-center gap-4 mt-2 font-mono text-xs ${muted}`}>
        <span>{projectTitle}</span>
        <span className="tabular-nums">
          {currentIndex + 1} / {images.length}
        </span>
      </figcaption>
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show image ${index + 1}`}
              className={`flex-shrink-0 w-14 h-14 border ${index === currentIndex ? 'border-brick dark:border-brick-light' : rule} overflow-hidden`}
            >
              <img src={image} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </figure>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const { language, t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    contentRef.current?.scrollTo(0, 0);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-brown-dark/60 dark:bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6"
    >
      <motion.div
        initial={{ y: 16 }}
        animate={{ y: 0 }}
        exit={{ y: 16 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className={`bg-cream dark:bg-dark-bg border ${rule} max-w-4xl w-full max-h-[85vh] flex flex-col`}
      >
        <div className={`flex items-start justify-between gap-4 p-5 sm:p-6 border-b ${rule}`}>
          <div>
            <span className={`${monoLabel} ${penText}`}>{t.projects.types[project.type]}</span>
            <h2 className="font-display text-3xl leading-tight mt-1">{project.title}</h2>
          </div>
          <button type="button" onClick={onClose} className={`p-1.5 ${muted} hover:text-brick`} aria-label={t.projects.buttons.close}>
            <X size={22} />
          </button>
        </div>

        <div ref={contentRef} className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col gap-7">
          <ImageCarousel images={project.images} projectTitle={project.title} isMobile={project.type === 'mobile'} />

          {project.longDescription && <p className="max-w-[64ch]">{project.longDescription[language]}</p>}

          {project.features && (
            <div>
              <h3 className={`${monoLabel} ${muted} pb-2 border-b ${inkRule}`}>{t.projects.modal.features}</h3>
              <ul>
                {project.features[language].map((feature) => (
                  <li key={feature} className={`grid grid-cols-[18px_minmax(0,1fr)] py-2 border-b ${rule}`}>
                    <span className={penText}>–</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className={`${monoLabel} ${muted} pb-2 border-b ${inkRule}`}>{t.projects.modal.technologies}</h3>
            <p className="font-mono text-[13px] leading-relaxed pt-2.5">{project.technologies.join(' · ')}</p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
              {t.projects.buttons.viewCode} ↗
            </a>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
                {t.projects.buttons.viewDemo} ↗
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setOpenProject(null), []);

  const filters: Filter[] = ['all', 'web', 'mobile', 'fullstack'];
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.type === filter);

  return (
    <div className={pageShell}>
      <PageHeader
        page="p. 04"
        label={t.nav.projects.toLowerCase()}
        note={language === 'pt' ? '↳ projetos pessoais,\ncódigo aberto' : '↳ personal projects,\nopen source'}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <NotebookEntry margin={<MarginLabel>{language === 'pt' ? 'filtro' : 'filter'}</MarginLabel>}>
        <div role="group" aria-label={language === 'pt' ? 'Filtrar projetos' : 'Filter projects'} className={`flex flex-wrap gap-x-6 gap-y-2 border-b ${rule} pb-3`}>
          {filters.map((type) => (
            <button
              key={type}
              type="button"
              aria-pressed={filter === type}
              onClick={() => setFilter(type)}
              className={`font-mono text-[13px] lowercase pb-1 border-b-2 -mb-[14px] ${
                filter === type ? 'border-brick dark:border-brick-light text-brown-dark dark:text-dark-text' : `border-transparent ${muted} hover:text-brown-dark dark:hover:text-dark-text`
              }`}
            >
              {t.projects.types[type]}
            </button>
          ))}
        </div>
      </NotebookEntry>

      {filtered.length === 0 && (
        <NotebookEntry margin={null}>
          <p className={muted}>{language === 'pt' ? 'Nenhum projeto nessa categoria ainda.' : 'No projects in this category yet.'}</p>
        </NotebookEntry>
      )}

      {filtered.map((project, i) => (
        <NotebookEntry
          key={project.id}
          margin={
            <>
              <MarginLabel>fig. {i + 1}</MarginLabel>
              <span>{t.projects.types[project.type]}</span>
              {project.featured && <MarginNote>↳ {t.projects.tags.featured.toLowerCase()}</MarginNote>}
            </>
          }
        >
          <article className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-start">
            <button
              type="button"
              onClick={() => setOpenProject(project)}
              className={`group block border ${rule} bg-beige dark:bg-dark-surface aspect-video overflow-hidden hover:border-brick dark:hover:border-brick-light transition-colors`}
              aria-label={`${t.projects.buttons.viewDetails}: ${project.title}`}
            >
              {project.images[0] && (
                <img
                  src={project.images[0]}
                  alt=""
                  className={`w-full h-full ${project.type === 'mobile' ? 'object-contain' : 'object-cover object-top'} group-hover:scale-[1.02] transition-transform duration-300`}
                />
              )}
            </button>
            <div className={`border-t ${inkRule} pt-3`}>
              <h2 className="font-display text-[30px] leading-tight">{project.title}</h2>
              <p className={`mt-2 ${muted}`}>{project.description[language]}</p>
              <p className="mt-4 font-mono text-xs leading-relaxed">{project.technologies.join(' · ')}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
                <button type="button" onClick={() => setOpenProject(project)} className={textLink}>
                  {t.projects.buttons.viewDetails} →
                </button>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
                  {t.projects.buttons.viewCode} ↗
                </a>
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
                    {t.projects.buttons.viewDemo} ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        </NotebookEntry>
      ))}

      <AnimatePresence>{openProject && <ProjectModal project={openProject} onClose={closeProject} />}</AnimatePresence>
    </div>
  );
};

export default Projects;
