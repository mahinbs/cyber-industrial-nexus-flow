
import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TechnologySection } from '@/components/home/TechnologySection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { SafetySection } from '@/components/home/SafetySection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <TechnologySection />
      <IndustriesSection />
      <ProcessSection />
      <SafetySection />
      <ProjectsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
