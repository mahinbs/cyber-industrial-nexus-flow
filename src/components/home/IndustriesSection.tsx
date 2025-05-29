
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Factory, Ship, Zap, Building, Droplets, Flame, Gauge, Cpu } from 'lucide-react';

export const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);

  const industries = [
    {
      title: 'Oil & Gas Facilities',
      description: 'Comprehensive cleaning solutions for refineries, petrochemical plants, and offshore platforms with zero-downtime operations.',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stats: ['1000+ Projects', '99.9% Safety', '50+ Countries'],
      specialties: ['Crude Oil Tank Cleaning', 'Catalyst Regeneration', 'Pipeline Maintenance', 'Emergency Response']
    },
    {
      title: 'Chemical Processing',
      description: 'Specialized cleaning for chemical plants and processing facilities with advanced contamination removal techniques.',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stats: ['500+ Facilities', 'Zero Incidents', 'Custom Solutions'],
      specialties: ['Reactor Cleaning', 'Chemical Decontamination', 'Solvent Recovery', 'Waste Processing']
    },
    {
      title: 'Marine & Shipyards',
      description: 'Marine-grade solutions for vessels, dry docks, and port facilities with specialized underwater capabilities.',
      icon: Ship,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stats: ['2000+ Vessels', 'Global Ports', 'Eco-Certified'],
      specialties: ['Hull Cleaning', 'Ballast Tank Service', 'Port Maintenance', 'Underwater Repairs']
    },
    {
      title: 'Power Generation',
      description: 'Maintenance solutions for power plants, turbine cleaning, and cooling systems with minimal downtime requirements.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stats: ['300+ Plants', '150GW Capacity', 'Efficiency+'],
      specialties: ['Turbine Cleaning', 'Boiler Maintenance', 'Cooling Tower Service', 'Generator Overhaul']
    },
    {
      title: 'Manufacturing Plants',
      description: 'Industrial facility cleaning and equipment maintenance for automotive, aerospace, and heavy manufacturing sectors.',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stats: ['1200+ Facilities', 'ISO Certified', 'Lean Operations'],
      specialties: ['Equipment Cleaning', 'Production Line Service', 'Quality Control', 'Preventive Maintenance']
    },
    {
      title: 'Infrastructure & Utilities',
      description: 'Water treatment plants, waste facilities, and critical infrastructure maintenance with regulatory compliance focus.',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stats: ['200+ Projects', 'Public Safety', 'Compliance+'],
      specialties: ['Water Treatment', 'Waste Management', 'Infrastructure Repair', 'Emergency Services']
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-800 to-black relative overflow-hidden">
      {/* Industrial Skyline Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Animated Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Industrial Steam Effect */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-t from-gray-600/30 to-transparent rounded-full animate-float blur-sm" 
                 style={{ animationDelay: `${i * 0.8}s`, animationDuration: '6s' }} />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-24">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-400/30 backdrop-blur-lg mb-8">
            <span className="text-orange-300 font-semibold tracking-wider">GLOBAL INDUSTRIES</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-12">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-300 bg-clip-text text-transparent">
              Industries We
            </span>
            <br />
            <span className="text-white">Transform</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Trusted by the world's leading companies across critical industrial sectors
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.title} delay={index * 150} animation="slide-left">
              <Card 
                className="group relative h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-orange-500/60 transition-all duration-700 overflow-hidden transform hover:scale-105 hover:-translate-y-4 hover:rotate-1"
                onMouseEnter={() => setActiveIndustry(index)}
                onMouseLeave={() => setActiveIndustry(null)}
              >
                {/* Dynamic Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('${industry.image}')`
                  }}
                />
                
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Industrial Sparks Effect */}
                {activeIndustry === index && (
                  <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-orange-400 rounded-full animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.3}s`
                        }}
                      />
                    ))}
                  </div>
                )}
                
                <CardContent className="relative p-10 h-full flex flex-col z-10">
                  {/* 3D Icon with Industrial Glow */}
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 mb-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700 border-2 border-orange-400/30">
                    <industry.icon className="w-10 h-10 text-orange-400 group-hover:text-red-300 transition-colors duration-300 filter drop-shadow-lg" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-orange-300 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-8 flex-grow text-lg leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Industry Statistics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {industry.stats.map((stat, idx) => (
                      <div key={stat} className="text-center">
                        <div className="text-orange-400 font-bold text-lg mb-1">
                          {stat.split(' ')[0]}
                        </div>
                        <div className="text-gray-400 text-xs uppercase tracking-wide">
                          {stat.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Specialties */}
                  <div className="space-y-3">
                    <h4 className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Specialties</h4>
                    <ul className="space-y-2">
                      {industry.specialties.slice(0, 2).map((specialty, idx) => (
                        <li key={specialty} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          <div 
                            className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"
                            style={{ animationDelay: `${idx * 0.2}s` }}
                          />
                          <span className="text-sm font-medium">{specialty}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-orange-400/70 text-xs">+{industry.specialties.length - 2} more services</div>
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
