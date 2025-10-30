
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, Shield, Target, Heart, Lightbulb, Rocket } from 'lucide-react';
import { FloatingElements } from '@/components/ui/floating-elements';
import { ParticleSystem } from '@/components/ui/particle-system';

const About = () => {
  const milestones = [
    { year: '1994', title: 'Foundation', description: 'REFSOL1 established with vision for industrial innovation', icon: Rocket },
    { year: '2000', title: 'First Major Project', description: 'Breakthrough cleaning of largest petrochemical facility', icon: Award },
    { year: '2010', title: 'Hydrokinetics™ Patent', description: 'Revolutionary water-based cleaning technology patented', icon: Lightbulb },
    { year: '2018', title: 'Global Expansion', description: 'Operations extended to 50+ countries worldwide', icon: Globe },
    { year: '2024', title: 'Fin Foam™ Innovation', description: 'Next-generation foam technology introduced', icon: Target }
  ];

  const team = [
    {
      name: 'Ahmed Al-Mansouri',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: '25+ years in industrial cleaning and petrochemical operations'
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b047?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Leading innovation in chemical engineering and automation'
    },
    {
      name: 'Omar Hassan',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Expert in large-scale industrial project management'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Safety Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'International safety standards and compliance specialist'
    }
  ];

  const certifications = [
    { name: 'ISO 45001:2018', description: 'Occupational Health & Safety', color: 'bg-green-500' },
    { name: 'ISO 14001:2015', description: 'Environmental Management', color: 'bg-blue-500' },
    { name: 'API Standards', description: 'American Petroleum Institute', color: 'bg-orange-500' },
    { name: 'OSHA Certified', description: 'Workplace Safety Excellence', color: 'bg-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Industrial Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      <FloatingElements count={15} />
      <ParticleSystem type="industrial" count={20} color="cyan" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="typewriter" className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                  About REFSOL1
                </span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of industrial cleaning with three decades of innovation, 
                safety excellence, and unwavering commitment to environmental responsibility.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <AnimatedSection animation="slide-right" delay={200}>
                <Card className="h-full bg-cyan-500/10 border-cyan-500/30 backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-cyan-400 flex items-center">
                      <Target className="w-10 h-10 mr-4 animate-pulse" />
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      To revolutionize industrial cleaning through innovative technologies, 
                      ensuring the highest standards of safety, efficiency, and environmental 
                      protection while empowering our clients to achieve operational excellence.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-left" delay={400}>
                <Card className="h-full bg-pink-500/10 border-purple-500/30 backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-purple-400 flex items-center">
                      <Heart className="w-10 h-10 mr-4 animate-pulse" />
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      To be the global leader in sustainable industrial solutions, 
                      setting new standards for innovation, safety, and environmental 
                      stewardship in every project we undertake worldwide.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="bounce-in" className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-8">Our Journey</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Three decades of continuous innovation and industrial excellence
              </p>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400"></div>
              
              {milestones.map((milestone, index) => (
                <AnimatedSection 
                  key={milestone.year} 
                  animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                  delay={index * 200}
                >
                  <div className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-cyan-500/60 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2">
                        <CardContent className="p-8">
                          <div className="flex items-center justify-between mb-4">
                            <Badge variant="outline" className="text-cyan-400 border-cyan-400/50 text-lg px-4 py-2">
                              {milestone.year}
                            </Badge>
                            <milestone.icon className="w-8 h-8 text-cyan-400 animate-bounce" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="zoom-in" className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-8">Leadership Team</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Visionary leaders driving innovation and excellence across all operations
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <AnimatedSection 
                  key={member.name} 
                  animation="flip-y" 
                  delay={index * 150}
                >
                  <Card className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-cyan-500/60 transition-all duration-700 transform hover:scale-110 hover:-translate-y-4 hover:rotate-2 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="glow" className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-8">Certifications & Standards</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Maintaining the highest international standards for quality, safety, and environmental protection
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <AnimatedSection 
                  key={cert.name} 
                  animation="elastic" 
                  delay={index * 100}
                >
                  <Card className="group text-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-cyan-500/60 transition-all duration-700 transform hover:scale-105 hover:-translate-y-3">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce`}>
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {cert.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{cert.description}</p>
                      <div className="mt-4 text-green-400 font-semibold text-sm animate-pulse">
                        ✓ CERTIFIED
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
