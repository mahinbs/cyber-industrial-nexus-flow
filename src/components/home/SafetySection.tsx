
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Clock, CheckCircle, AlertTriangle, Zap, Heart } from 'lucide-react';

export const SafetySection = () => {
  const certifications = [
    {
      title: 'ISO 45001:2018',
      description: 'Occupational Health & Safety Management Excellence',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      grade: 'Certified',
      year: '2024'
    },
    {
      title: 'ISO 14001:2015',
      description: 'Environmental Management System Leadership',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      grade: 'Gold Standard',
      year: '2024'
    },
    {
      title: 'OSHA Excellence',
      description: 'Workplace Safety Standards & Training',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      grade: 'VPP Member',
      year: '2024'
    },
    {
      title: '24/7 Emergency Response',
      description: 'Global Emergency Response Network',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      grade: 'Active',
      year: 'Always'
    }
  ];

  const stats = [
    { value: '99.95%', label: 'Safety Excellence Rate', color: 'text-green-400', icon: CheckCircle },
    { value: '0', label: 'Lost Time Incidents (2024)', color: 'text-blue-400', icon: Shield },
    { value: '25,000+', label: 'Safety Training Hours', color: 'text-purple-400', icon: Users },
    { value: '1,200+', label: 'Certified Technicians', color: 'text-orange-400', icon: Award }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-green-900 to-black relative overflow-hidden">
      {/* Safety Equipment Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Safety Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.15),transparent_70%)]" />
      </div>
      
      {/* Safety Beacon Effects */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-green-400/60 rounded-full animate-ping"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + Math.random() * 40}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-24">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 backdrop-blur-lg mb-8">
            <span className="text-green-300 font-semibold tracking-wider">SAFETY FIRST</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-12">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-300 bg-clip-text text-transparent">
              Uncompromising
            </span>
            <br />
            <span className="text-white">Safety Standards</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Leading the industry in safety innovation, environmental protection, and regulatory excellence
          </p>
        </AnimatedSection>

        {/* Safety Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 100} animation="scale">
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-green-500/60 transition-all duration-700 transform hover:scale-110 hover:-translate-y-4">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 mb-6 mx-auto">
                    <stat.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <div className={`text-5xl font-bold mb-4 ${stat.color} animate-glow`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide font-semibold">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.title} delay={index * 150} animation="fade-up">
              <Card className="group relative h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-green-500/60 transition-all duration-700 overflow-hidden transform hover:scale-105 hover:-translate-y-4 hover:rotate-2">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('${cert.image}')`
                  }}
                />
                
                {/* Certification Badge Effect */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full flex items-center justify-center border-2 border-green-400/50">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                
                {/* Safety Warning Stripe */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative p-8 h-full flex flex-col z-10">
                  {/* 3D Icon */}
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 mb-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700 border-2 border-green-400/30">
                    <cert.icon className="w-10 h-10 text-green-400 group-hover:text-emerald-300 transition-colors duration-300 filter drop-shadow-lg" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Certification Details */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 text-xs uppercase tracking-wider font-bold">Status</span>
                      <span className="text-green-300 font-semibold">{cert.grade}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 text-xs uppercase tracking-wider font-bold">Valid</span>
                      <span className="text-green-300 font-semibold">{cert.year}</span>
                    </div>
                  </div>

                  {/* Certification Verified Badge */}
                  <div className="mt-6 flex items-center justify-center py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30">
                    <Shield className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Verified ✓</span>
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
