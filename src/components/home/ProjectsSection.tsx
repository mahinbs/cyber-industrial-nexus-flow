
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, Award, Clock, Target, Zap, Trophy } from 'lucide-react';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'Qatar LNG Mega Terminal Transformation',
      location: 'Ras Laffan, Qatar',
      year: '2024',
      client: 'Qatar Energy',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Revolutionary cleaning of the world\'s largest LNG facility using REFSOL1 Hydrokinetics™ technology.',
      stats: { duration: '60 Days', team: '150 Specialists', tanks: '32 Storage Tanks', capacity: '77 MTPA' },
      challenge: 'Zero downtime requirement during peak production with highest safety standards',
      solution: 'Phased Hydrokinetics™ cleaning with AI-powered robotic systems and real-time monitoring',
      innovation: 'First deployment of Fin Foam™ at this scale'
    },
    {
      title: 'SABIC Petrochemical Complex Overhaul',
      location: 'Jubail, Saudi Arabia',
      year: '2024',
      client: 'SABIC',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Complete reactor vessel cleaning using advanced composite repair and Fin Foam™ technology.',
      stats: { duration: '45 Days', team: '200 Specialists', reactors: '12 Reactor Vessels', capacity: '3.4M Tons/Year' },
      challenge: 'Hazardous chemical residue removal in confined spaces with zero environmental impact',
      solution: 'Custom Fin Foam™ formulation with robotic deployment and real-time contamination monitoring',
      innovation: 'Breakthrough in eco-friendly chemical cleaning'
    },
    {
      title: 'DEWA Power Station Efficiency Upgrade',
      location: 'Dubai, UAE',
      year: '2024',
      client: 'Dubai Electricity & Water Authority',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Advanced turbine cleaning and cooling system optimization for maximum efficiency.',
      stats: { duration: '35 Days', team: '120 Specialists', turbines: '6 Gas Turbines', efficiency: '+15% Output' },
      challenge: 'Precision cleaning of turbine blades without microscopic damage',
      solution: 'REFSOL1 specialized foam cleaning with precision robotics and digital twin technology',
      innovation: 'AI-optimized cleaning patterns for maximum efficiency'
    },
    {
      title: 'DP World Jebel Ali Marine Terminal',
      location: 'Dubai, UAE',
      year: '2023',
      client: 'DP World',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Complete port facility upgrade with underwater cleaning and marine protection systems.',
      stats: { duration: '120 Days', team: '180 Specialists', vessels: '85 Vessels', area: '134 Berths' },
      challenge: 'Underwater cleaning in active port environment with marine life protection',
      solution: 'Advanced diving teams with eco-certified cleaning agents and marine life monitoring',
      innovation: 'Zero-impact marine cleaning technology'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Industrial Project Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Purple Radial Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.15),transparent_70%)]" />
      </div>
      
      {/* Project Success Indicators */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          >
            <Trophy className="w-4 h-4 text-purple-400/40 animate-pulse" 
                   style={{ animationDelay: `${i * 0.5}s` }} />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-24">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 backdrop-blur-lg mb-8">
            <span className="text-purple-300 font-semibold tracking-wider">GLOBAL EXCELLENCE</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-12">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 bg-clip-text text-transparent">
              Landmark
            </span>
            <br />
            <span className="text-white">Project Portfolio</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Transforming the world's most critical industrial facilities with REFSOL1 innovation
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Project Selection Panel */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 100}>
                <Card 
                  className={`cursor-pointer transition-all duration-700 transform hover:scale-105 ${
                    selectedProject === index 
                      ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-purple-500/80 scale-105 shadow-2xl shadow-purple-500/25' 
                      : 'bg-gray-800/50 border-gray-700/50 hover:border-purple-500/30'
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                          selectedProject === index ? 'text-purple-300' : 'text-white'
                        }`}>
                          {project.title}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="font-medium">{project.location}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="font-medium">{project.year}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-2">
                          <span className="text-purple-300 font-bold text-sm">{project.client}</span>
                        </div>
                        {selectedProject === index && (
                          <div className="text-purple-400 text-xs font-semibold animate-pulse">ACTIVE</div>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    {selectedProject === index && (
                      <div className="mt-4 pt-4 border-t border-purple-500/30">
                        <div className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">Innovation Highlight</div>
                        <div className="text-purple-300 text-sm font-medium">{project.innovation}</div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Project Details Display */}
          <div className="relative lg:sticky lg:top-8">
            <AnimatedSection animation="scale">
              <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/40 overflow-hidden">
                {/* Project Hero Image */}
                <div 
                  className="w-full h-80 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${projects[selectedProject].image}')`
                  }}
                >
                  {/* Project Status Overlay */}
                  <div className="absolute top-6 left-6 flex space-x-3">
                    <div className="px-4 py-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full border border-green-400/50 backdrop-blur-lg">
                      <span className="text-green-300 font-bold text-sm flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        COMPLETED
                      </span>
                    </div>
                  </div>
                  
                  {/* Achievement Badge */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center border-2 border-purple-400/50 backdrop-blur-lg">
                    <Award className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {projects[selectedProject].title}
                  </h3>
                  
                  {/* Project Statistics */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {Object.entries(projects[selectedProject].stats).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
                        <div className="text-purple-400 font-bold text-xl mb-1">{value}</div>
                        <div className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-orange-400 font-bold mb-3 flex items-center text-lg">
                        <Zap className="w-5 h-5 mr-2" />
                        Challenge
                      </h4>
                      <p className="text-gray-300 leading-relaxed bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-xl border border-orange-400/20">
                        {projects[selectedProject].challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-green-400 font-bold mb-3 flex items-center text-lg">
                        <Users className="w-5 h-5 mr-2" />
                        REFSOL1 Solution
                      </h4>
                      <p className="text-gray-300 leading-relaxed bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-400/20">
                        {projects[selectedProject].solution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
