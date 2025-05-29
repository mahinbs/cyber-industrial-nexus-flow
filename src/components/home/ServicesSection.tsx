
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Wrench, Droplets, Factory, Ship, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesSection = () => {
  const services = [
    {
      title: 'Composite Repair Systems',
      description: 'Advanced carbon fiber and glass fiber composite repair solutions for pipelines, tanks, and structural components in harsh industrial environments.',
      icon: Wrench,
      color: 'from-cyan-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Carbon Fiber Wraps', 'Structural Reinforcement', 'Underwater Repairs', 'Hot Tap Solutions']
    },
    {
      title: 'Protective Coatings & Putties',
      description: 'High-performance epoxy putties and protective coatings designed to withstand extreme temperatures, chemicals, and corrosive environments.',
      icon: Shield,
      color: 'from-blue-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Chemical Resistance', 'High Temperature', 'Anti-Corrosion', 'Fast Cure Systems']
    },
    {
      title: 'Industrial Cleaning Services',
      description: 'Comprehensive cleaning solutions including tank cleaning, hydroblasting, chemical cleaning, and decontamination services for industrial facilities.',
      icon: Droplets,
      color: 'from-purple-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Tank Cleaning', 'Hydroblasting', 'Chemical Cleaning', 'Waste Management']
    },
    {
      title: 'Oil & Gas Solutions',
      description: 'Specialized maintenance and repair solutions for offshore platforms, refineries, and petrochemical facilities with 24/7 emergency response.',
      icon: Factory,
      color: 'from-orange-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Offshore Repairs', 'Pipeline Maintenance', 'Emergency Response', 'HSE Compliance']
    },
    {
      title: 'Marine & Shipyard Services',
      description: 'Marine-grade repair and maintenance solutions for vessels, dry docks, and port facilities with specialized underwater capabilities.',
      icon: Ship,
      color: 'from-teal-500 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Hull Repairs', 'Underwater Services', 'Port Maintenance', 'Vessel Cleaning']
    },
    {
      title: 'Power & Utilities',
      description: 'Maintenance solutions for power plants, water treatment facilities, and utility infrastructure with focus on safety and efficiency.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Power Plant Maintenance', 'Turbine Services', 'Cooling Tower Cleaning', 'Safety Systems']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
              Industrial Services
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive solutions for the world's most demanding industrial environments
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 150}>
              <Card className="group relative h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-cyan-500/60 transition-all duration-700 overflow-hidden backdrop-blur-lg transform hover:scale-105 hover:-translate-y-4">
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('${service.image}')`
                  }}
                />
                
                {/* Animated Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                
                <CardContent className="relative p-8 h-full flex flex-col z-10">
                  {/* Icon with 3D Effect */}
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mb-6 group-hover:scale-110 transition-transform duration-500 border border-cyan-400/30">
                    <service.icon className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features with animated bullets */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div 
                          className="w-2 h-2 bg-cyan-400 rounded-full mr-4 animate-pulse"
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button with 3D Effect */}
                  <Link to="/products" className="mt-auto">
                    <Button 
                      variant="ghost" 
                      className="w-full text-cyan-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 group/btn rounded-xl py-3 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
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
