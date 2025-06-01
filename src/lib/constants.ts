
import type { LucideIcon } from 'lucide-react';
import { Mail, Users, FileText, Youtube, Linkedin, Twitter, Github, Search } from 'lucide-react';

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
  icon: LucideIcon;
  slug: string;
  image: string;
  dataAiHint: string;
}

export const services: Service[] = [
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    shortDescription: 'Engage your audience with targeted email campaigns that convert.',
    longDescription: 'Our email marketing services help you build strong customer relationships, nurture leads, and drive sales. We design, implement, and manage effective email campaigns tailored to your business goals, from newsletters to automated sequences.',
    icon: Mail,
    slug: '/services/email-marketing',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'email marketing'
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    shortDescription: 'Fuel your sales pipeline with high-quality, qualified leads.',
    longDescription: 'We specialize in creating and executing lead generation strategies that deliver measurable results. Using a mix of digital channels and proven techniques, we help you identify and attract potential customers interested in your offerings.',
    icon: Users,
    slug: '/services/lead-generation',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'lead generation'
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    shortDescription: 'Attract and retain customers with valuable, relevant content.',
    longDescription: 'Our content marketing services focus on creating and distributing compelling content that resonates with your target audience. From blog posts and articles to infographics and case studies, we help you establish thought leadership and drive engagement.',
    icon: FileText,
    slug: '/services/content-marketing',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'content strategy'
  },
  {
    id: 'youtube-marketing',
    title: 'YouTube Marketing',
    shortDescription: 'Grow your brand and reach new audiences with strategic video content.',
    longDescription: 'Leverage the power of video with our YouTube marketing expertise. We help you create engaging video content, optimize your channel, and run effective advertising campaigns to boost visibility, subscribers, and conversions.',
    icon: Youtube,
    slug: '/services/youtube-marketing',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'video marketing'
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  dataAiHint: string;
  socials: {
    icon: LucideIcon;
    href: string;
  }[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Email Marketing Specialist',
    bio: 'Sarah crafts compelling email campaigns that nurture leads and drive conversions, leveraging data analytics for optimal performance.',
    avatar: 'https://placehold.co/200x200.png',
    dataAiHint: 'woman professional',
    socials: [
      { icon: Linkedin, href: '#' },
      { icon: Twitter, href: '#' },
    ],
  },
  {
    id: 'michael-brown',
    name: 'Michael Brown',
    role: 'Lead Generation Expert',
    bio: 'Michael is a master at identifying and attracting high-quality leads, ensuring a steady pipeline for business growth using various digital strategies.',
    avatar: 'https://placehold.co/200x200.png',
    dataAiHint: 'man smiling',
    socials: [
      { icon: Linkedin, href: '#' },
      { icon: Github, href: '#' }, // Example, can be changed
    ],
  },
  {
    id: 'emily-white',
    name: 'Emily White',
    role: 'Head of Content Marketing',
    bio: 'Emily leads our content strategy, producing engaging and valuable articles, blog posts, and social media content that builds brands.',
    avatar: 'https://placehold.co/200x200.png',
    dataAiHint: 'woman creative',
    socials: [
      { icon: Linkedin, href: '#' },
      { icon: Twitter, href: '#' },
    ],
  },
  {
    id: 'david-lee',
    name: 'David Lee',
    role: 'YouTube Marketing Strategist',
    bio: 'David specializes in growing brands on YouTube, from video production and channel optimization to audience engagement strategies.',
    avatar: 'https://placehold.co/200x200.png',
    dataAiHint: 'man media',
    socials: [
      { icon: Linkedin, href: '#' },
      { icon: Youtube, href: '#' },
    ],
  },
  {
    id: 'olivia-green',
    name: 'Olivia Green',
    role: 'SEO & Digital Ads Manager',
    bio: 'Olivia boosts online visibility through expert SEO strategies and targeted digital advertising campaigns, maximizing reach and ROI.',
    avatar: 'https://placehold.co/200x200.png',
    dataAiHint: 'woman analytics',
    socials: [
      { icon: Linkedin, href: '#' },
      { icon: Search, href: '#' }, // Using Search as a generic 'web' or 'SEO' icon
    ],
  },
];

export const APP_NAME = 'LeadFlow';