
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'Operations Director',
      company: 'Qatar Gas',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'Industrial Solutions delivered exceptional results for our LNG terminal cleaning. Their attention to safety and efficiency is unmatched.',
      rating: 5,
      project: 'LNG Terminal Cleaning'
    },
    {
      name: 'Sarah Mitchell',
      position: 'Plant Manager',
      company: 'ADNOC',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'The petrochemical plant overhaul was completed ahead of schedule with zero safety incidents. Outstanding professional service.',
      rating: 5,
      project: 'Petrochemical Plant Overhaul'
    },
    {
      name: 'Captain Hassan Omar',
      position: 'Port Operations Manager',
      company: 'DP World',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'Their marine cleaning services exceeded expectations. The eco-friendly approach aligns perfectly with our sustainability goals.',
      rating: 5,
      project: 'Marine Terminal Services'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-indigo-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-300 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Trusted by industry leaders across the region
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 200} animation="fade-up">
              <Card className="group relative h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-indigo-500/60 transition-all duration-700 overflow-hidden transform hover:scale-105 hover:-translate-y-4">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative p-8 h-full flex flex-col z-10">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20 mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                    <Quote className="w-6 h-6 text-indigo-400" />
                  </div>

                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-gray-300 mb-8 flex-grow text-center italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full bg-cover bg-center mx-auto mb-4 border-2 border-indigo-400/30"
                      style={{ backgroundImage: `url('${testimonial.image}')` }}
                    />
                    <h4 className="text-white font-bold text-lg group-hover:text-indigo-300 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">
                      {testimonial.position}
                    </p>
                    <p className="text-indigo-400 font-semibold text-sm mb-2">
                      {testimonial.company}
                    </p>
                    <div className="text-gray-500 text-xs">
                      {testimonial.project}
                    </div>
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
