
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesSection = () => {
  const services = [
    {
      title: 'Composite Repair',
      description: 'Advanced composite repair solutions for critical infrastructure and industrial equipment.',
      icon: '🔧',
      color: 'from-cyan-500 to-blue-600',
      features: ['Carbon Fiber', 'Glass Fiber', 'Aramid Solutions']
    },
    {
      title: 'Epoxy Putties & Coatings',
      description: 'High-performance protective coatings and repair putties for extreme environments.',
      icon: '🛡️',
      color: 'from-blue-500 to-purple-600',
      features: ['Corrosion Protection', 'Chemical Resistance', 'Temperature Resistant']
    },
    {
      title: 'Maintenance Products',
      description: 'Comprehensive maintenance solutions to keep your operations running smoothly.',
      icon: '⚙️',
      color: 'from-purple-500 to-pink-600',
      features: ['Preventive Care', 'Emergency Repairs', '24/7 Support']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge solutions designed for the challenges of tomorrow's industrial landscape.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 200}>
              <Card className="group relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardContent className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to="/products" className="mt-auto">
                    <Button 
                      variant="ghost" 
                      className="w-full text-cyan-400 hover:text-white hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group/btn"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
