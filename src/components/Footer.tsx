import { useLanguage } from '../hooks/useLanguage';
import { contactInfo } from '../data/contact';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brown-light dark:border-dark-border">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-brown dark:text-dark-text-secondary">
        <p>
          © {currentYear} Barbara Sousa. {t.footer.rights}
        </p>
        <div className="flex gap-5">
          <a href={contactInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brick dark:hover:text-brick-light">
            LinkedIn
          </a>
          <a href={contactInfo.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-brick dark:hover:text-brick-light">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
