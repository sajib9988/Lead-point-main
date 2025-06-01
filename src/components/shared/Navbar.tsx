'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Info, Phone, Hammer } from 'lucide-react';
import { ModeToggle } from '@/components/theme/ModeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home', icon: <Home size={18} /> },
  { href: '/about', label: 'About Us', icon: <Info size={18} /> },
  { href: '/services', label: 'Services', icon: <Hammer size={18} /> },

  { href: '/contact', label: 'Contact', icon: <Phone size={18} /> },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 m-4"
    >
      <div className="relative backdrop-blur-xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 dark:from-gray-900/40 dark:via-gray-800/20 dark:to-gray-900/40 border border-white/20 dark:border-gray-700/30 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-cyan-500/10 animate-pulse"></div>
        
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent dark:from-white/5"></div>
        
        <div className="relative container mx-auto px-6 py-1 flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl px-3 py-2 rounded-lg shadow-lg">
                  L
                </div>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                LeadPoint
              </span>
            </Link>
          </motion.div>

          {/* Enhanced Center Menu for Desktop */}
          <div className="hidden md:flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map(({ href, label, icon }, index) => {
              const isActive = pathname === href && href !== '/';
              return (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <Link
                    href={href}
                    title={label}
                    className={`relative flex items-center gap-2 px-3 py-1.5 rounded-xl font-medium transition-all duration-300 group overflow-hidden
                      ${isActive
                        ? 'text-white shadow-lg transform scale-105'
                        : 'text-foreground hover:text-white'
                      }
                    `}
                  >
                    {/* Active state background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {icon}
                      </motion.div>
                      <span className="relative">
                        {label}
                        {/* Underline animation */}
                        <motion.div
                          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Right Side Icons */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ModeToggle />
            </motion.div>
            
            {/* Enhanced Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-foreground md:hidden rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 backdrop-blur-sm hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden overflow-hidden"
            >
                              <div className="relative px-6 py-2 border-t border-white/10 dark:border-gray-700/30 bg-gradient-to-b from-white/5 to-white/10 dark:from-gray-900/20 dark:to-gray-900/40 backdrop-blur-sm">
                <div className="flex flex-col space-y-2">
                  {navLinks.map(({ href, label, icon }, index) => {
                    const isActive = pathname === href && href !== '/';
                    return (
                      <motion.div
                        key={href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={href}
                          className={`group relative flex items-center gap-3 py-2 px-4 rounded-xl transition-all duration-300 overflow-hidden
                            ${isActive 
                              ? 'text-white shadow-lg' 
                              : 'text-foreground hover:text-white'
                            }
                          `}
                          onClick={() => setIsOpen(false)}
                          title={label}
                        >
                          {/* Background effects */}
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"></div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Content */}
                          <div className="relative flex items-center gap-3">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              {icon}
                            </motion.div>
                            <span className="font-medium">{label}</span>
                          </div>
                          
                          {/* Slide indicator */}
                          <motion.div
                            className="absolute right-2 w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;