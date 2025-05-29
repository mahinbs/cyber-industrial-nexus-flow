
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Wrench, Droplets, Factory, Ship, Zap, Beaker, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesSection = () => {
  const services = [
    {
      title: 'Hydrokinetics™ Technology',
      description: 'Revolutionary water-based cleaning system that delivers unparalleled results for tank and pipeline cleaning with minimal environmental impact.',
      icon: Waves,
      color: 'from-cyan-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Advanced Hydrokinetics', 'Eco-Friendly Process', 'Real-time Monitoring', 'Zero Waste Technology']
    },
    {
      title: 'Fin Foam™ Cleaning System',
      description: 'Patented foam technology that penetrates deep into industrial equipment, removing stubborn deposits and contaminants with precision.',
      icon: Beaker,
      color: 'from-blue-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Fin Foam™ Formula', 'Deep Penetration', 'Non-Corrosive', 'Rapid Deployment']
    },
    {
      title: 'Composite Repair Systems',
      description: 'Advanced carbon fiber and glass fiber composite repair solutions for pipelines, tanks, and structural components in harsh environments.',
      icon: Wrench,
      color: 'from-purple-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Carbon Fiber Wraps', 'Structural Reinforcement', 'Underwater Repairs', 'Hot Tap Solutions']
    },
    {
      title: 'Protective Coatings & Putties',
      description: 'High-performance epoxy putties and protective coatings designed to withstand extreme temperatures and chemical exposure.',
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Chemical Resistance', 'High Temperature', 'Anti-Corrosion', 'Fast Cure Systems']
    },
    {
      title: 'Industrial Tank Cleaning',
      description: 'Comprehensive tank cleaning solutions including automated systems, chemical cleaning, and waste management for all tank types.',
      icon: Droplets,
      color: 'from-teal-500 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Automated Cleaning', 'Chemical Processing', 'Waste Management', 'Safety Protocols']
    },
    {
      title: 'Marine & Offshore Services',
      description: 'Specialized marine-grade solutions for vessels, offshore platforms, and port facilities with underwater capabilities.',
      icon: Ship,
      color: 'from-yellow-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Underwater Services', 'Platform Maintenance', 'Vessel Cleaning', 'Port Solutions']
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Industrial Facility Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-24">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 backdrop-blur-lg mb-8">
            <span className="text-cyan-300 font-semibold tracking-wider">REFSOL1 SERVICES</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-12">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
              Advanced Industrial
            </span>
            <br />
            <span className="text-white">Cleaning Solutions</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Pioneering technologies for the world's most demanding industrial environments
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 150}>
              <Card className="group relative h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-cyan-500/60 transition-all duration-700 overflow-hidden backdrop-blur-lg transform hover:scale-105 hover:-translate-y-6 hover:rotate-1">
                {/* Animated Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('${service.image}')`
                  }}
                />
                
                {/* Dynamic Color Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
                
                {/* Steam/Bubble Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
                      style={{
                        left: `${20 + i * 15}%`,
                        bottom: `${10 + Math.random() * 20}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '4s'
                      }}
                    />
                  ))}
                </div>
                
                <CardContent className="relative p-10 h-full flex flex-col z-10">
                  {/* 3D Icon with Glow Effect */}
                  <div className="flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mb-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700 border-2 border-cyan-400/30 group-hover:border-cyan-400/60">
                    <service.icon className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 filter drop-shadow-lg" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-10 flex-grow leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Features with animated bullets */}
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={feature} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div 
                          className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-4 animate-pulse"
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button with 3D Effect */}
                  <Link to="/products" className="mt-auto">
                    <Button 
                      variant="ghost" 
                      className="w-full text-cyan-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-700 group/btn rounded-2xl py-4 transform hover:scale-105 hover:-translate-y-1"
                    >
                      <span className="font-bold text-lg">Explore Technology</span>
                      <ArrowRight className="ml-3 w-6 h-6 transform group-hover/btn:translate-x-3 group-hover/btn:scale-125 transition-transform duration-500" />
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
