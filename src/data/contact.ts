export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socials: {
    linkedin: string;
    github: string;
    twitter?: string;
  };
}

export const contactInfo: ContactInfo = {
  email: 'barbarasousaas@gmail.com',
  phone: '+55 (61) 99999-9999', // UPDATE: Add your actual phone/WhatsApp number
  location: 'Brasília, Brazil',
  socials: {
    linkedin: 'https://linkedin.com/in/barbara-sousa',
    github: 'https://github.com/BarbaraSousas',
    // twitter: 'https://twitter.com/yourhandle', // Optional
  },
};

/**
 * FORMSPREE CONFIGURATION
 *
 * To enable the contact form, sign up at https://formspree.io/ (free tier available)
 *
 * Steps:
 * 1. Create an account at https://formspree.io/
 * 2. Create a new form and get your form endpoint
 * 3. Replace the placeholder below with your actual endpoint
 *
 * Alternative: EmailJS (https://www.emailjs.com/)
 */
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'; // REPLACE WITH YOUR FORMSPREE ENDPOINT
