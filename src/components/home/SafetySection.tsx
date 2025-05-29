
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Clock } from 'lucide-react';

export const SafetySection = () => {
  const certifications = [
    {
      title: 'ISO 45001',
      description: 'Occupational Health & Safety Management',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'ISO 14001',
      description: 'Environmental Management System',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'OSHA Certified',
      description: 'Workplace Safety Standards',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: '24/7 Response',
      description: 'Emergency Response Team',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Safety Record', color: 'text-green-400' },
    { value: '0', label: 'Lost Time Incidents', color: 'text-blue-400' },
    { value: '10,000+', label: 'Training Hours', color: 'text-purple-400' },
    { value: '500+', label: 'Certified Technicians', color: 'text-orange-400' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-green-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.1),transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-300 bg-clip-text text-transparent">
              Safety & Compliance
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Uncompromising commitment to safety, environment, and regulatory compliance
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 100} animation="scale">
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-green-500/60 transition-all duration-500 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`text-4xl font-bold mb-2 ${stat.color} animate-glow`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.title} delay={index * 150} animation="fade-up">
              <Card className="group relative h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-green-500/60 transition-all duration-700 overflow-hidden transform hover:scale-105 hover:-translate-y-2">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('${cert.image}')`
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative p-8 h-full flex flex-col z-10">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <cert.icon className="w-8 h-8 text-green-400 group-hover:text-emerald-300 transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm flex-grow">
                    {cert.description}
                  </p>

                  <div className="mt-6 text-green-400 text-xs uppercase tracking-wider font-semibold">
                    Certified ✓
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
