import { IconURL } from 'next/dist/lib/metadata/types/metadata-types';

declare type Locale = string;

interface Meta {
  URL: string | URL;
  siteName: string;
  title?: string;
  description?: string;
  themeColor?: string;
  backgroundColor?: string;
  og: {
    locale?: Locale;
    type?: 'website';
    ogImage: string | URL;
    width?: number;
    height?: number;
  };
  twitter: {
    card?: string;
    site?: string;
  };
}

export const meta: Meta = {
  URL: 'https://www.doqett.com',
  siteName: 'Doqett',
  title: 'Doqett',
  description:
    "Empowering Learners Through Innovation and Collaboration. Dive into Doqett's most popular programs, get ready for in-demand career options.",
  themeColor: '#000000',
  backgroundColor: '#FFFFFF',
  og: {
    locale: 'en-US',
    type: 'website',
    ogImage: '/opengraph-image.png',
    width: 1200,
    height: 630,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@doqett',
  },
};

export const menuItems = [
  { path: '/', name: 'Home', new: false },
  { path: '/about', name: 'About', new: false },
  { path: '/blog', name: 'Blog', new: true },
];

export const footerItems = {
  company: [
    { path: "/about", name: "About", internal: true },
    { path: "/services", name: "What We Offer", internal: true },
    { path: "/team", name: "Team", internal: true },
    { path: "/careers", name: "Careers", internal: true },
    { path: "/for-campus", name: "For Campus", internal: true },
    { path: "/become-an-educator", name: "Become an Educator", internal: true },
    // { path: "/free-courses", name: "Free Courses", internal: true },
    { path: "/enterprise", name: "Enterprise (SDK)", internal: true },
  ],
  legal: [
    { path: "/blog", name: "Blog", internal: true, new: false },
    { path: "/forums", name: "Communities", internal: true, new: false },
    { path: "/contact", name: "Contact Us", internal: true, new: false },
    { path: "/privacy-policy", name: "Privacy Policy", internal: true, new: false },
    { path: "/terms-and-conditions", name: "Terms and Conditions", internal: true, new: false },
    { path: "/cookie-policy", name: "Cookies Policy", internal: true, new: false },
    { path: "/support", name: "Help Center", internal: true, new: false },
    { path: "/faqs", name: "FAQs", internal: true, new: false },
  ],
};
