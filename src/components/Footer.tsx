import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { SiReact, SiTypescript } from 'react-icons/si';
import { useLanguage } from '../hooks/useLanguage';
import { contactInfo } from '../data/contact';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: contactInfo.socials.linkedin,
      icon: FaLinkedin,
    },
    {
      name: 'GitHub',
      url: contactInfo.socials.github,
      icon: FaGithub,
    },
  ];

  return (
    <footer className="bg-bg-primary border-t border-accent-neon/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-display font-bold text-gradient mb-2"
            >
              Barbara Araújo
            </motion.h3>
            <p className="text-text-secondary text-sm text-center md:text-left">
              Senior Full-Stack Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            {/* <h4 className="text-text-primary font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-wrap justify-center gap-4">
              <a
                href="/"
                className="text-text-secondary hover:text-accent-neon transition-colors text-sm"
              >
                {t.nav.home}
              </a>
              <a
                href="/experience"
                className="text-text-secondary hover:text-accent-neon transition-colors text-sm"
              >
                {t.nav.experience}
              </a>
              <a
                href="/projects"
                className="text-text-secondary hover:text-accent-neon transition-colors text-sm"
              >
                {t.nav.projects}
              </a>
              <a
                href="/contact"
                className="text-text-secondary hover:text-accent-neon transition-colors text-sm"
              >
                {t.nav.contact}
              </a>
            </nav> */}
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-text-primary font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-accent-neon/10 text-accent-neon hover:bg-accent-neon hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-neon/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-text-secondary text-sm text-center sm:text-left">
              © {currentYear} Barbara Araújo. {t.footer.rights}
            </p>

            {/* Built With */}
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <span>{t.footer.built}</span>
              <FaHeart className="text-accent-neon" size={14} />
              <span>{t.footer.and}</span>
              <SiReact className="text-[#61DAFB]" size={16} />
              <SiTypescript className="text-[#3178C6]" size={16} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
