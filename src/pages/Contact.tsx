import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Copy, Check, Send } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { contactInfo, FORMSPREE_ENDPOINT } from '../data/contact';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailCopied, setEmailCopied] = useState(false);

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.info.email,
      value: contactInfo.email,
      action: copyEmail,
      actionLabel: emailCopied ? t.contact.emailCopied : t.contact.copyEmail,
    },
    {
      icon: MapPin,
      label: t.contact.info.location,
      value: t.contact.info.locationValue,
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: contactInfo.socials.linkedin,
      icon: Linkedin,
      color: '#0A66C2',
    },
    {
      name: 'GitHub',
      url: contactInfo.socials.github,
      icon: Github,
      color: '#FFFFFF',
    },
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-accent-neon/20 to-accent-blush/20 rounded-full">
              <Mail size={40} className="text-accent-neon" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6">
            {t.contact.title}
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-gradient-to-br from-accent-neon/5 to-accent-blush/5 rounded-card p-6 border border-accent-neon/20 hover:border-accent-neon/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent-neon/10 rounded-lg text-accent-neon group-hover:bg-accent-neon group-hover:text-white transition-colors">
                        <method.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-text-secondary text-sm font-medium mb-1">
                          {method.label}
                        </h3>
                        <p className="text-text-primary font-semibold">{method.value}</p>
                        {method.action && (
                          <button
                            onClick={method.action}
                            className="mt-2 flex items-center gap-2 text-accent-neon hover:text-accent-blush transition-colors text-sm"
                          >
                            {emailCopied ? <Check size={16} /> : <Copy size={16} />}
                            {method.actionLabel}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {t.contact.info.socials}
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-gradient-to-br from-accent-neon/10 to-accent-blush/10 rounded-card border border-accent-neon/20 hover:border-accent-neon/50 hover:shadow-neon transition-all duration-300"
                    style={{ color: social.color }}
                  >
                    <social.icon size={28} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-primary border border-accent-neon/30 rounded-card text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-neon focus:shadow-neon transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-primary border border-accent-neon/30 rounded-card text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-neon focus:shadow-neon transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-bg-primary border border-accent-neon/30 rounded-card text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-neon focus:shadow-neon transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-accent-neon to-accent-blush text-white font-bold rounded-card hover:shadow-neon-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {t.contact.form.send}
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-card text-green-500 text-center"
                >
                  {t.contact.form.success}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-card text-red-500 text-center"
                >
                  {t.contact.form.error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
