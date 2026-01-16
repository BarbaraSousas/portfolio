import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/experience', label: t.nav.experience },
    { path: '/education', label: t.nav.education },
    { path: '/projects', label: t.nav.projects },
    { path: '/blog', label: t.nav.blog || 'Blog' },
    { path: '/contact', label: t.nav.contact },
  ];

  const isActive = (path: string) => {
    if (path === '/blog') {
      return location.pathname.startsWith('/blog');
    }
    return location.pathname === path;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-soft-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl font-display font-bold text-gradient"
            >
              BA
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-3 lg:px-4 py-2 text-sm lg:text-base transition-colors group"
              >
                <span
                  className={`${
                    isActive(item.path)
                      ? 'text-brick dark:text-brick-light'
                      : 'text-brown dark:text-dark-text-secondary hover:text-brown-dark dark:hover:text-dark-text'
                  } transition-colors duration-200`}
                >
                  {item.label}
                </span>
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brick dark:bg-brick-light"
                    initial={false}
                  />
                )}
              </Link>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="ml-4 p-2 text-brown dark:text-dark-text-secondary hover:text-brick dark:hover:text-brick-light transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="ml-2 px-3 py-1.5 text-sm font-medium rounded-lg border border-brick/30 dark:border-brick-light/30 text-brick dark:text-brick-light hover:bg-brick/10 dark:hover:bg-brick-light/10 transition-colors"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'PT' : 'EN'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-1.5 text-brown dark:text-dark-text-secondary"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>

            {/* Mobile Language Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-medium rounded-lg border border-brick/30 dark:border-brick-light/30 text-brick dark:text-brick-light"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'PT' : 'EN'}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brown-dark dark:text-dark-text hover:text-brick dark:hover:text-brick-light transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'bg-brick/10 dark:bg-brick-light/10 text-brick dark:text-brick-light'
                          : 'text-brown dark:text-dark-text-secondary hover:bg-beige dark:hover:bg-dark-surface hover:text-brown-dark dark:hover:text-dark-text'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
