
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('en');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/refsol1', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/refsol1', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/refsol1', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/refsol1', label: 'Twitter' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-blue-200/50 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="group">
            <Logo 
              size={scrolled ? 'sm' : 'md'} 
              className="transition-all duration-500"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'relative px-4 py-2 text-slate-700 transition-all duration-300 hover:text-blue-600 font-medium',
                  location.pathname === item.href && 'text-blue-600'
                )}
              >
                {item.name}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 transition-transform duration-300',
                    location.pathname === item.href && 'scale-x-100'
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Social Media & Language Toggle */}
          <div className="flex items-center space-x-4">
            {/* Social Media Icons - Desktop Only */}
            <div className="hidden xl:flex items-center space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="hidden sm:flex items-center space-x-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-slate-600 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-xl rounded-lg mt-2 border border-blue-200/50',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-4 pt-4 border-t border-blue-200/50">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
