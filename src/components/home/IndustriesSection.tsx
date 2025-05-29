
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Factory, Ship, Zap, Building, Droplets, Flame } from 'lucide-react';

export const IndustriesSection = () => {
  const industries = [
    {
      title: 'Oil & Gas',
      description: 'Comprehensive cleaning for refineries, petrochemical plants, and offshore platforms',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stats: ['500+ Projects', '99.9% Safety Record', '24/7 Operations']
    },
    {
      title: 'Chemical Processing',
      description: 'Specialized cleaning for chemical plants and processing facilities',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stats: ['300+ Facilities', 'Zero Incidents', 'Custom Solutions']
    },
    {
      title: 'Marine & Ports',
      description: 'Marine vessel cleaning, port maintenance, and underwater services',
      icon: Ship,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stats: ['1000+ Vessels', 'Global Coverage', 'Eco-Friendly']
    },
    {
      title: 'Power Generation',
      description: 'Power plant maintenance, turbine cleaning, and cooling systems',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stats: ['200+ Plants', '100MW+ Capacity', 'Minimal Downtime']
    },
    {
      title: 'Manufacturing',
      description: 'Industrial facility cleaning and equipment maintenance',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stats: ['800+ Facilities', 'ISO Certified', 'Lean Operations']
    },
    {
      title: 'Infrastructure',
      description: 'Water treatment plants, waste facilities, and public infrastructure',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stats: ['150+ Projects', 'Public Safety', 'Compliance+']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-800 to-black relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-300 bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Trusted by leading companies across critical industries worldwide
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.title} delay={index * 150} animation="slide-left">
              <Card className="group relative h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-orange-500/60 transition-all duration-700 overflow-hidden transform hover:scale-105 hover:rotate-1">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('${industry.image}')`
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative p-8 h-full flex flex-col z-10">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <industry.icon className="w-8 h-8 text-orange-400 group-hover:text-red-300 transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-8 flex-grow">
                    {industry.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {industry.stats.map((stat, idx) => (
                      <div key={stat} className="text-center">
                        <div className="text-orange-400 font-bold text-sm mb-1">{stat.split(' ')[0]}</div>
                        <div className="text-gray-400 text-xs">{stat.split(' ').slice(1).join(' ')}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
