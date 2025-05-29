
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Zap, Shield, Settings } from 'lucide-react';

export const TechnologySection = () => {
  const technologies = [
    {
      title: 'Robotic Cleaning Systems',
      description: 'Advanced autonomous robots for tank and pipeline cleaning with real-time monitoring and precise chemical application.',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      specs: ['360° Cleaning Coverage', 'Chemical Resistance', 'Remote Operation', 'Real-time Analytics']
    },
    {
      title: 'Hydroblasting Equipment',
      description: 'Ultra-high pressure water cleaning systems for removing the toughest industrial residues and coatings.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      specs: ['Up to 40,000 PSI', 'Precision Control', 'Safety Systems', 'Eco-Friendly']
    },
    {
      title: 'Chemical Analysis Lab',
      description: 'On-site laboratory testing for contamination analysis and cleaning solution optimization.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      specs: ['Real-time Testing', 'Custom Solutions', 'Quality Assurance', 'Compliance Reports']
    },
    {
      title: 'Automated Monitoring',
      description: 'IoT-enabled monitoring systems providing real-time data on cleaning progress and equipment status.',
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      specs: ['24/7 Monitoring', 'Predictive Maintenance', 'Data Analytics', 'Mobile Alerts']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="tech-grid opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-300 bg-clip-text text-transparent">
              Advanced Technology
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Cutting-edge equipment and systems for superior industrial cleaning results
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {technologies.map((tech, index) => (
            <AnimatedSection key={tech.title} delay={index * 200} animation="scale">
              <Card className="group relative h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 hover:border-blue-500/60 transition-all duration-700 overflow-hidden transform hover:scale-105 perspective-1000">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('${tech.image}')`
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative p-8 h-full flex flex-col z-10">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <tech.icon className="w-8 h-8 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 flex-grow">
                    {tech.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {tech.specs.map((spec, idx) => (
                      <li key={spec} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse" style={{ animationDelay: `${idx * 0.3}s` }} />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" className="w-full text-blue-400 hover:text-white hover:bg-blue-500/20 border border-blue-500/30">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
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
