'use client';

import React from 'react';
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 pt-12 pb-6 rounded-xl transition-colors border-4 border-white dark:border-gray-700 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-extrabold text-xl mb-4 text-blue-800 dark:text-yellow-400"
            >
              <Briefcase className="h-6 w-6" />
              <span>LeadPoint</span>
            </Link>
            <p className="mb-4 font-medium text-gray-700 dark:text-gray-400">
              We help businesses generate high-quality leads through smart digital strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-600 dark:hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="font-medium">
            <h3 className="text-lg mb-4 text-blue-800 dark:text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              {['/', '/services', '/about', '/contact'].map((path, i) => (
                <li key={i}>
                  <Link href={path} className="hover:text-blue-700 dark:hover:text-yellow-300 transition-colors">
                    {path === '/' ? 'Home' : path.slice(1).replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          {/* <div className="font-medium">
            <h3 className="text-lg mb-4 text-blue-800 dark:text-yellow-400">Resources</h3>
            <ul className="space-y-2">
              {['/blog', '/case-studies', '/faq', '/privacy'].map((path, i) => (
                <li key={i}>
                  <Link href={path} className="hover:text-blue-700 dark:hover:text-yellow-300 transition-colors">
                    {path.slice(1).replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className="font-medium">
            <h3 className="text-lg mb-4 text-blue-800 dark:text-yellow-400">Contact Us</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-800 dark:text-yellow-400 mt-0.5" />
                <span>123 LeadPoint Avenue, Digital City, 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-800 dark:text-yellow-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-800 dark:text-yellow-400" />
                <span>support@leadpoint.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} LeadPoint. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                {['/terms', '/privacy', '/cookies'].map((path, i) => (
                  <li key={i}>
                    <Link href={path} className="hover:text-blue-700 dark:hover:text-yellow-300 transition-colors">
                      {path.slice(1).replace(/\b\w/g, l => l.toUpperCase())}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
