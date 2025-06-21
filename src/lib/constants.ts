export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string; // Changed from LucideIcon to string
  slug: string;
  image: string;

}


export const APP_NAME = 'LeadFlow';