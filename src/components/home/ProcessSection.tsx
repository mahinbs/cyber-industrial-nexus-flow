
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Clock, Shield, Wrench, Award } from 'lucide-react';

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      title: 'Assessment & Planning',
      description: 'Comprehensive site evaluation and customized cleaning strategy development',
      icon: CheckCircle,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      duration: '1-2 Days',
      details: ['Site inspection', 'Risk assessment', 'Equipment selection', 'Safety planning']
    },
    {
      title: 'Safety Setup',
      description: 'Implementation of comprehensive safety protocols and equipment deployment',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      duration: '0.5-1 Day',
      details: ['Safety barriers', 'Personal protective equipment', 'Emergency procedures', 'Team briefing']
    },
    {
      title: 'Cleaning Operations',
      description: 'Execution of cleaning operations using advanced equipment and techniques',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      duration: '2-5 Days',
      details: ['Pre-cleaning preparation', 'Chemical application', 'Mechanical cleaning', 'Real-time monitoring']
    },
    {
      title: 'Quality Assurance',
      description: 'Thorough inspection and testing to ensure cleaning standards are met',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      duration: '1 Day',
      details: ['Visual inspection', 'Chemical testing', 'Documentation', 'Client approval']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            A systematic approach ensuring safe, efficient, and thorough industrial cleaning
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 150}>
                <Card 
                  className={`cursor-pointer transition-all duration-500 ${
                    activeStep === index 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/60 transform scale-105' 
                      : 'bg-gray-800/50 border-gray-700/50 hover:border-blue-500/30'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 transition-colors duration-300 ${
                        activeStep === index ? 'bg-blue-500/30' : 'bg-gray-700/50'
                      }`}>
                        <step.icon className={`w-6 h-6 ${activeStep === index ? 'text-blue-300' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                          activeStep === index ? 'text-blue-300' : 'text-white'
                        }`}>
                          {step.title}
                        </h3>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-400 text-sm">{step.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    {activeStep === index && (
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={detail} className="flex items-center text-sm text-blue-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="relative">
            <AnimatedSection animation="scale">
              <div className="relative overflow-hidden rounded-2xl">
                <div 
                  className="w-full h-96 bg-cover bg-center transition-all duration-700"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('${processSteps[activeStep].image}')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Step {activeStep + 1}: {processSteps[activeStep].title}
                  </h4>
                  <p className="text-gray-200">
                    {processSteps[activeStep].description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};
