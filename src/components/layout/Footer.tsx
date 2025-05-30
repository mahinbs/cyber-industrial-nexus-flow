
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Careers', href: '/careers' },
  ];

  const products = [
    { name: 'Composite Repair', href: '/products?category=composite-repair' },
    { name: 'Epoxy Putties', href: '/products?category=epoxy-putties' },
    { name: 'Coatings', href: '/products?category=coatings' },
    { name: 'Maintenance Products', href: '/products?category=maintenance' },
  ];

  const services = [
    { name: 'Quick Sealing', href: '/services?category=repair' },
    { name: 'Predictive Maintenance', href: '/services?category=maintenance' },
    { name: 'Industrial Cleaning', href: '/services?category=maintenance' },
    { name: 'NDT Inspection', href: '/services?category=inspection' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/refsol1', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/refsol1', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/refsol1', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/refsol1', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white border-t border-blue-200/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo />
            <p className="text-slate-600 leading-relaxed max-w-md">
              Leading provider of advanced smart maintenance solutions, composite repairs, and industrial products for the future.
            </p>
            
            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-800">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-blue-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
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
            </div>

            {/* Company Profile Download */}
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
            >
              <a href="/company-profile.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Company Profile
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Contact */}
          <div className="space-y-6">
            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-slate-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-600 text-sm">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>+971 (4) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600 text-sm">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>info@refsol1.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600 text-sm">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-200/50 mt-12 pt-8 text-center">
          <p className="text-slate-500">
            © 2024 REFSOL1. All rights reserved. Smart maintenance for the future.
          </p>
        </div>
      </div>
    </footer>
  );
};
