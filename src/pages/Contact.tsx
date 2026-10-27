import { useState } from 'react';
import NotebookEntry, { MarginLabel, MarginNote } from '../components/notebook/NotebookEntry';
import { pageShell, rule, inkRule, muted, penText, monoLabel } from '../components/notebook/styles';
import { useLanguage } from '../hooks/useLanguage';
import { contactInfo, FORMSPREE_ENDPOINT } from '../data/contact';

// Inputs written on the notebook lines: no box, only a rule underneath.
const field = `w-full bg-transparent border-0 border-b ${rule} px-0 py-2.5 text-brown-dark dark:text-dark-text placeholder:text-brown/60 dark:placeholder:text-dark-text-secondary/60 focus:outline-none focus:border-brick dark:focus:border-brick-light transition-colors`;

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailCopied, setEmailCopied] = useState(false);

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
    navigator.clipboard.writeText(contactInfo.email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  const details = [
    { label: t.contact.info.email, value: contactInfo.email },
    { label: t.contact.info.location, value: t.contact.info.locationValue },
    { label: 'LinkedIn', value: contactInfo.socials.linkedin.replace('https://', ''), href: contactInfo.socials.linkedin },
    { label: 'GitHub', value: contactInfo.socials.github.replace('https://', ''), href: contactInfo.socials.github },
  ];

  return (
    <div className={pageShell}>
      <NotebookEntry
        margin={
          <>
            <MarginLabel>{language === 'pt' ? 'última página' : 'last page'}</MarginLabel>
            <span>{t.nav.contact.toLowerCase()}</span>
            {/* Photo taped into the margin */}
            <figure className="hidden md:block relative w-[118px] mt-4 -rotate-2 bg-beige dark:bg-dark-surface p-1.5 pb-6 shadow-soft">
              <span
                aria-hidden="true"
                className="absolute -top-2.5 left-1/2 -translate-x-1/2 rotate-3 w-14 h-5 bg-brown-light/60 dark:bg-dark-border/80"
              />
              <img src="/portfolio/assets/profile-photo.png" alt="Barbara Sousa" className="w-full aspect-square object-cover" />
              <figcaption className="absolute bottom-1 left-0 right-0 text-center text-[10px] text-brown dark:text-dark-text-secondary">
                Brasília
              </figcaption>
            </figure>
          </>
        }
      >
        <div className="flex items-start gap-5">
          <img
            src="/portfolio/assets/profile-photo.png"
            alt=""
            className={`md:hidden w-16 h-16 object-cover border ${rule} -rotate-2`}
          />
          <div>
            <h1 className="font-display text-[clamp(36px,5.4vw,60px)] leading-[1.05] tracking-[-0.025em] max-w-[16ch]">
              {t.contact.title}
            </h1>
            <p className={`text-lg ${muted} max-w-[58ch] mt-5`}>{t.contact.subtitle}</p>
          </div>
        </div>
      </NotebookEntry>

      <NotebookEntry
        margin={
          <>
            <MarginLabel>{language === 'pt' ? 'onde me achar' : 'where to find me'}</MarginLabel>
            <MarginNote>{language === 'pt' ? '↳ aberta a vagas\nremotas' : '↳ open to remote\nroles'}</MarginNote>
          </>
        }
      >
        <dl className={`border-t ${inkRule}`}>
          {details.map((d) => (
            <div key={d.label} className={`grid grid-cols-1 sm:grid-cols-[140px_minmax(0,1fr)_auto] gap-x-4 gap-y-0.5 items-baseline py-3 border-b ${rule}`}>
              <dt className={`${monoLabel} ${muted}`}>{d.label}</dt>
              <dd className="font-mono text-sm break-all">
                {d.href ? (
                  <a href={d.href} target="_blank" rel="noopener noreferrer" className="underline decoration-brick underline-offset-4">
                    {d.value}
                  </a>
                ) : (
                  d.value
                )}
              </dd>
              {d.value === contactInfo.email && (
                <button type="button" onClick={copyEmail} className={`justify-self-start font-mono text-xs ${penText} hover:underline underline-offset-4`}>
                  {emailCopied ? t.contact.emailCopied : t.contact.copyEmail}
                </button>
              )}
            </div>
          ))}
        </dl>
      </NotebookEntry>

      <NotebookEntry margin={<MarginLabel>{language === 'pt' ? 'deixe um recado' : 'leave a note'}</MarginLabel>}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[620px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <label className="block">
              <span className={`${monoLabel} ${muted}`}>{t.contact.form.name}</span>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={field} />
            </label>
            <label className="block">
              <span className={`${monoLabel} ${muted}`}>{t.contact.form.email}</span>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={field} />
            </label>
          </div>
          <label className="block">
            <span className={`${monoLabel} ${muted}`}>{t.contact.form.message}</span>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className={`${field} resize-none leading-[2.2rem] bg-[linear-gradient(transparent_calc(2.2rem-1px),theme(colors.brown-light)_calc(2.2rem-1px))] dark:bg-[linear-gradient(transparent_calc(2.2rem-1px),theme(colors.dark-border)_calc(2.2rem-1px))] bg-[length:100%_2.2rem] py-0`}
            />
          </label>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-brick dark:bg-brick-light text-cream dark:text-dark-bg font-mono text-sm hover:bg-brown-dark dark:hover:bg-dark-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t.contact.form.sending : `${t.contact.form.send} →`}
            </button>
            {submitStatus === 'success' && <p className="font-mono text-sm text-ok dark:text-ok-light" role="status">{t.contact.form.success}</p>}
            {submitStatus === 'error' && <p className={`font-mono text-sm ${penText}`} role="alert">{t.contact.form.error}</p>}
          </div>
        </form>
      </NotebookEntry>
    </div>
  );
};

export default Contact;
