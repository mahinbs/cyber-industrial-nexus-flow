
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, Award } from 'lucide-react';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'Qatar LNG Terminal Cleaning',
      location: 'Doha, Qatar',
      year: '2024',
      client: 'Qatar Gas',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Complete tank farm cleaning and maintenance for Qatar\'s largest LNG facility.',
      stats: { duration: '45 Days', team: '120 Specialists', tanks: '24 Storage Tanks' },
      challenge: 'Zero downtime requirement during peak production season',
      solution: 'Phased cleaning approach with advanced robotic systems'
    },
    {
      title: 'Petrochemical Plant Overhaul',
      location: 'Abu Dhabi, UAE',
      year: '2024',
      client: 'ADNOC',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Comprehensive cleaning of reactor vessels and piping systems.',
      stats: { duration: '60 Days', team: '200 Specialists', reactors: '8 Reactor Vessels' },
      challenge: 'Hazardous chemical residue removal in confined spaces',
      solution: 'Custom chemical neutralization and robotic cleaning'
    },
    {
      title: 'Power Plant Turbine Service',
      location: 'Dubai, UAE',
      year: '2023',
      client: 'DEWA',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Gas turbine cleaning and cooling tower maintenance.',
      stats: { duration: '30 Days', team: '80 Specialists', turbines: '4 Gas Turbines' },
      challenge: 'Precision cleaning without damaging turbine blades',
      solution: 'Specialized foam cleaning with precision robotics'
    },
    {
      title: 'Marine Terminal Upgrade',
      location: 'Jebel Ali, UAE',
      year: '2023',
      client: 'DP World',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Port facility cleaning and underwater hull maintenance.',
      stats: { duration: '90 Days', team: '150 Specialists', vessels: '50 Vessels' },
      challenge: 'Underwater cleaning in busy port environment',
      solution: 'Advanced diving teams with eco-friendly cleaning agents'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.1),transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 bg-clip-text text-transparent">
              Global Projects
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Delivering excellence across the Middle East and beyond
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 100}>
                <Card 
                  className={`cursor-pointer transition-all duration-500 ${
                    selectedProject === index 
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/60 transform scale-105' 
                      : 'bg-gray-800/50 border-gray-700/50 hover:border-purple-500/30'
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                          selectedProject === index ? 'text-purple-300' : 'text-white'
                        }`}>
                          {project.title}
                        </h3>
                        <div className="flex items-center text-gray-400 text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          {project.location}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {project.year}
                        </div>
                      </div>
                      <div className="text-purple-400 font-semibold text-sm">
                        {project.client}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="relative">
            <AnimatedSection animation="scale">
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-purple-500/30 overflow-hidden">
                <div 
                  className="w-full h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${projects[selectedProject].image}')`
                  }}
                />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {projects[selectedProject].title}
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(projects[selectedProject].stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-purple-400 font-bold text-lg">{value}</div>
                        <div className="text-gray-400 text-xs uppercase">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-orange-400 font-semibold mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Challenge
                      </h4>
                      <p className="text-gray-300 text-sm">{projects[selectedProject].challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Solution
                      </h4>
                      <p className="text-gray-300 text-sm">{projects[selectedProject].solution}</p>
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
