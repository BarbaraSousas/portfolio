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
  phone: '+55 (61) 99153-9659',
  location: 'Brasília, Brazil',
  socials: {
    linkedin: 'https://linkedin.com/in/barbara-sousa',
    github: 'https://github.com/BarbaraSousas',
  },
};

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
