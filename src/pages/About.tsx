
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, Target, CheckCircle, Zap } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'CEO & Founder',
      experience: '25+ years',
      specialization: 'Oil & Gas Industry',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      certifications: ['PMP', 'HSE', 'API 653']
    },
    {
      name: 'Dr. Sarah Mitchell',
      position: 'Technical Director',
      experience: '20+ years',
      specialization: 'Composite Engineering',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      certifications: ['PhD Materials', 'NACE', 'ISO Lead']
    },
    {
      name: 'Mohammad Hassan',
      position: 'Operations Manager',
      experience: '18+ years',
      specialization: 'Marine & Offshore',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      certifications: ['IMCA', 'BOSIET', 'GWO']
    },
    {
      name: 'Elena Rodriguez',
      position: 'Quality Assurance Director',
      experience: '15+ years',
      specialization: 'Chemical Processing',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      certifications: ['Six Sigma', 'ISO 9001', 'OHSAS']
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management', icon: Award },
    { name: 'ISO 14001:2015', description: 'Environmental Management', icon: Globe },
    { name: 'ISO 45001:2018', description: 'Health & Safety', icon: CheckCircle },
    { name: 'API 653', description: 'Tank Inspection', icon: Target },
    { name: 'NACE International', description: 'Corrosion Control', icon: Zap },
    { name: 'SSPC Standards', description: 'Surface Preparation', icon: Users }
  ];

  const milestones = [
    { year: '1998', event: 'Company Founded', description: 'Started as a small composite repair specialist in Dubai' },
    { year: '2005', event: 'Regional Expansion', description: 'Expanded operations across Middle East and North Africa' },
    { year: '2010', event: 'Marine Division', description: 'Launched specialized marine and offshore services' },
    { year: '2015', event: 'Global Presence', description: 'Established offices in 15+ countries worldwide' },
    { year: '2020', event: 'Digital Innovation', description: 'Integrated IoT and AI for predictive maintenance' },
    { year: '2024', event: 'Industry Leader', description: 'Recognized as global leader in industrial cleaning solutions' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Leading the future of industrial maintenance with over 25 years of innovation, expertise, and unwavering commitment to excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <Card className="h-full glass border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500">
                <CardContent className="p-12">
                  <Target className="w-16 h-16 text-cyan-400 mb-8" />
                  <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    To revolutionize industrial maintenance through cutting-edge composite repair technologies, 
                    sustainable cleaning solutions, and unparalleled service excellence that ensures our clients' 
                    operations run safely, efficiently, and profitably.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="h-full glass border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500">
                <CardContent className="p-12">
                  <Globe className="w-16 h-16 text-cyan-400 mb-8" />
                  <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    To be the global leader in advanced industrial solutions, setting new standards for innovation, 
                    safety, and environmental stewardship while empowering industries to achieve their highest 
                    potential through our expertise and technology.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Two and a half decades of innovation, growth, and industry leadership
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            
            {milestones.map((milestone, index) => (
              <AnimatedSection key={milestone.year} delay={index * 200}>
                <div className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <Card className="glass border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105">
                      <CardContent className="p-8">
                        <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-4 py-2 mb-4">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-2xl font-bold text-white mb-4">{milestone.event}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-black z-10 flex-shrink-0"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry experts driving innovation and excellence in industrial solutions
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 150}>
                <Card className="group glass border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-cyan-400 font-medium mb-2">{member.position}</p>
                      <p className="text-gray-400 text-sm mb-4">{member.experience} • {member.specialization}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {member.certifications.map((cert) => (
                          <Badge key={cert} variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Certifications & Standards
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Committed to the highest standards of quality, safety, and environmental responsibility
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 100}>
                <Card className="group glass border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                        <cert.icon className="w-10 h-10 text-cyan-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                    <p className="text-gray-300">{cert.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
