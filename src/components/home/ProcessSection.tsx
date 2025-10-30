
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Clock, Shield, Wrench, Award, Search, Target } from 'lucide-react';

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      title: 'Site Assessment & Analysis',
      description: 'Comprehensive evaluation using advanced diagnostic tools and REFSOL1 proprietary analysis systems for optimal cleaning strategy.',
      icon: Search,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      duration: '1-2 Days',
      details: ['3D Site Mapping', 'Contamination Analysis', 'Equipment Selection', 'Risk Assessment'],
      technology: 'AI-Powered Diagnostics'
    },
    {
      title: 'Safety Protocol Implementation',
      description: 'Deployment of comprehensive safety systems and specialized equipment following international standards and REFSOL1 protocols.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      duration: '0.5-1 Day',
      details: ['Safety Barriers', 'Atmospheric Monitoring', 'Emergency Systems', 'Team Certification'],
      technology: 'Advanced Safety Systems'
    },
    {
      title: 'Precision Cleaning Operations',
      description: 'Execution using REFSOL1 Hydrokinetics™ and Fin Foam™ technologies with real-time monitoring and optimization.',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      duration: '2-5 Days',
      details: ['Hydrokinetics™ Deployment', 'Fin Foam™ Application', 'Robotic Systems', 'Real-time Monitoring'],
      technology: 'Proprietary REFSOL1 Tech'
    },
    {
      title: 'Quality Verification & Reporting',
      description: 'Comprehensive inspection using advanced testing methods and detailed documentation for compliance and optimization.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      duration: '1 Day',
      details: ['Spectroscopic Analysis', 'Performance Metrics', 'Compliance Documentation', 'Client Certification'],
      technology: 'Advanced Analytics Platform'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Industrial Process Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
      </div>
      
      {/* Flowing Process Lines */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"
            style={{
              top: `${20 + i * 15}%`,
              left: '0%',
              right: '0%',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-24">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 backdrop-blur-lg mb-8">
            <span className="text-blue-300 font-semibold tracking-wider">REFSOL1 PROCESS</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-12">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">
              Precision
            </span>
            <br />
            <span className="text-white">Engineering Process</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            A systematic approach ensuring safe, efficient, and thorough industrial transformation
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 150}>
                <Card 
                  className={`cursor-pointer transition-all duration-700 transform hover:scale-105 ${
                    activeStep === index 
                      ? 'bg-slate-800/50 scale-105 shadow-2xl shadow-blue-500/25' 
                      : '!bg-gray-800/50 border-gray-700/50 hover:border-blue-500/30'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mr-6 transition-all duration-500 ${
                        activeStep === index 
                          ? 'bg-blue-500/40 scale-110 rotate-12' 
                          : 'bg-gray-700/50'
                      }`}>
                        <step.icon className={`w-8 h-8 ${activeStep === index ? 'text-blue-300' : 'text-gray-400'} transition-colors duration-300`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                          activeStep === index ? 'text-blue-300' : 'text-white'
                        }`}>
                          {step.title}
                        </h3>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-gray-400 text-sm font-medium">{step.duration}</span>
                          </div>
                          <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30">
                            <span className="text-cyan-300 text-xs font-semibold">{step.technology}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">{step.description}</p>
                    
                    {activeStep === index && (
                      <div className="space-y-4 animate-fade-in">
                        <h4 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Process Details</h4>
                        <ul className="grid grid-cols-2 gap-3">
                          {step.details.map((detail, idx) => (
                            <li key={detail} className="flex items-center text-blue-300">
                              <div 
                                className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                              />
                              <span className="text-sm font-medium">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="relative lg:sticky lg:top-8">
            <AnimatedSection animation="scale">
              <div className="relative overflow-hidden rounded-3xl border-2 border-blue-500/30">
                {/* Dynamic Background Image */}
                <div 
                  className="w-full h-[600px] bg-cover bg-center transition-all duration-1000 relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${processSteps[activeStep].image}')`
                  }}
                >
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  
                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0">
                    <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" 
                         style={{ top: `${25 + activeStep * 20}%` }} />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="bg-gradient-to-r from-black/80 to-black/60 rounded-2xl p-6 backdrop-blur-lg border border-blue-400/30">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-3xl font-bold text-white">
                          Step {activeStep + 1}
                        </h4>
                        <div className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full">
                          <span className="text-blue-300 font-bold text-sm">{processSteps[activeStep].duration}</span>
                        </div>
                      </div>
                      <h5 className="text-2xl font-bold text-blue-300 mb-3">
                        {processSteps[activeStep].title}
                      </h5>
                      <p className="text-gray-200 text-lg leading-relaxed">
                        {processSteps[activeStep].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection className="text-center mt-20">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 rounded-2xl"
          >
            Start Your REFSOL1 Project
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};
