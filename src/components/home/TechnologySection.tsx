
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Zap, Shield, Settings, Microscope, Gauge, Database } from 'lucide-react';

export const TechnologySection = () => {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const technologies = [
    {
      title: 'AI-Powered Robotic Systems',
      description: 'Advanced autonomous robots equipped with machine learning algorithms for precision tank and pipeline cleaning with real-time optimization.',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      specs: ['360° Cleaning Coverage', 'AI Path Optimization', 'Remote Operation', 'Predictive Analytics'],
      innovation: 'REFSOL1 Exclusive'
    },
    {
      title: 'Ultra-High Pressure Systems',
      description: 'Revolutionary hydroblasting equipment delivering up to 50,000 PSI for removing the most challenging industrial residues and coatings.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      specs: ['Up to 50,000 PSI', 'Precision Control', 'Safety Interlocks', 'Water Recycling'],
      innovation: 'Industry Leading'
    },
    {
      title: 'Advanced Chemical Analysis',
      description: 'Mobile laboratory units with spectroscopic analysis for real-time contamination assessment and cleaning solution optimization.',
      icon: Microscope,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      specs: ['Real-time Analysis', 'Custom Formulations', 'Quality Assurance', 'Compliance Reports'],
      innovation: 'Patented Technology'
    },
    {
      title: 'IoT Monitoring Platform',
      description: 'Comprehensive IoT ecosystem providing real-time monitoring, predictive maintenance, and performance analytics across all operations.',
      icon: Database,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      specs: ['24/7 Monitoring', 'Predictive AI', 'Cloud Analytics', 'Mobile Alerts'],
      innovation: 'Next Generation'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Industrial Equipment Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Tech Grid Animation */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Floating Tech Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-24">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30 backdrop-blur-lg mb-8">
            <span className="text-blue-300 font-semibold tracking-wider">ADVANCED TECHNOLOGY</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-12">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-300 bg-clip-text text-transparent">
              Cutting-Edge
            </span>
            <br />
            <span className="text-white">Innovation</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Revolutionary equipment and systems engineered for superior results
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {technologies.map((tech, index) => (
            <AnimatedSection key={tech.title} delay={index * 200} animation="scale">
              <Card 
                className="group relative h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 hover:border-blue-500/60 transition-all duration-700 overflow-hidden transform hover:scale-105 hover:-translate-y-6 perspective-1000"
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Dynamic Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('${tech.image}')`
                  }}
                />
                
                {/* Holographic Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 transition-opacity duration-700 ${hoveredTech === index ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Scan Line Effect */}
                <div className={`absolute inset-0 transition-all duration-2000 ${hoveredTech === index ? 'bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent' : ''}`} style={{
                  transform: hoveredTech === index ? 'translateY(100%)' : 'translateY(-100%)'
                }} />
                
                <CardContent className="relative p-10 h-full flex flex-col z-10">
                  {/* Innovation Badge */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full border border-cyan-400/50 backdrop-blur-lg">
                    <span className="text-cyan-300 text-xs font-bold">{tech.innovation}</span>
                  </div>

                  {/* 3D Icon */}
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 mb-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700 border-2 border-blue-400/30">
                    <tech.icon className="w-10 h-10 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300 filter drop-shadow-lg" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-8 flex-grow text-lg leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Technical Specifications */}
                  <div className="space-y-3 mb-8">
                    <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Technical Specifications</h4>
                    <ul className="space-y-3">
                      {tech.specs.map((spec, idx) => (
                        <li key={spec} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          <div 
                            className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"
                            style={{ animationDelay: `${idx * 0.3}s` }}
                          />
                          <span className="font-medium">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="ghost" 
                    className="w-full text-blue-400 hover:text-white hover:bg-blue-500/20 border-2 border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 rounded-2xl py-4 transform hover:scale-105"
                  >
                    <span className="font-bold">Learn More</span>
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
