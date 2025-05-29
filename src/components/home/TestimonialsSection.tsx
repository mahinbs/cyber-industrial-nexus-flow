
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Award, CheckCircle } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'Operations Director',
      company: 'Qatar Energy',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'REFSOL1\'s Hydrokinetics™ technology delivered unprecedented results for our LNG terminal. The efficiency gains and environmental protection exceeded all expectations.',
      rating: 5,
      project: 'Qatar LNG Mega Terminal',
      savings: '$2.3M Saved',
      efficiency: '+23% Efficiency'
    },
    {
      name: 'Dr. Sarah Mitchell',
      position: 'Chief Technical Officer',
      company: 'SABIC',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'The Fin Foam™ technology revolutionized our reactor cleaning process. REFSOL1 completed the project 30% faster than any previous vendor with zero safety incidents.',
      rating: 5,
      project: 'Petrochemical Complex Overhaul',
      savings: '$1.8M Saved',
      efficiency: '+30% Faster'
    },
    {
      name: 'Captain Hassan Omar',
      position: 'Port Operations Manager',
      company: 'DP World',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'Their marine cleaning innovations are unmatched. The eco-friendly approach and underwater capabilities align perfectly with our sustainability and operational goals.',
      rating: 5,
      project: 'Jebel Ali Marine Terminal',
      savings: '$3.1M Saved',
      efficiency: '+40% Uptime'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-indigo-900 to-black relative overflow-hidden">
      {/* Client Facility Backgrounds */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Radial Glow Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_70%)]" />
      </div>
      
      {/* Success Indicators */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${25 + Math.random() * 50}%`,
            }}
          >
            <CheckCircle className="w-3 h-3 text-indigo-400/40 animate-pulse" 
                        style={{ animationDelay: `${i * 0.6}s` }} />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-24">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full border border-indigo-400/30 backdrop-blur-lg mb-8">
            <span className="text-indigo-300 font-semibold tracking-wider">CLIENT SUCCESS</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-12">
            <span className="bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-300 bg-clip-text text-transparent">
              Industry Leaders
            </span>
            <br />
            <span className="text-white">Choose REFSOL1</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Trusted partnerships delivering exceptional results across the globe
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 200} animation="fade-up">
              <Card className="group relative h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-indigo-500/60 transition-all duration-700 overflow-hidden transform hover:scale-105 hover:-translate-y-6 hover:rotate-1">
                {/* Success Metrics Overlay */}
                <div className="absolute top-4 right-4 space-y-2">
                  <div className="px-3 py-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full border border-green-400/50 backdrop-blur-lg">
                    <span className="text-green-300 text-xs font-bold">{testimonial.savings}</span>
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full border border-blue-400/50 backdrop-blur-lg">
                    <span className="text-blue-300 text-xs font-bold">{testimonial.efficiency}</span>
                  </div>
                </div>
                
                {/* Company Pattern Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote Animation */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-indigo-400 rounded-full animate-float"
                      style={{
                        left: `${30 + i * 20}%`,
                        top: `${40 + Math.random() * 20}%`,
                        animationDelay: `${i * 0.4}s`,
                        animationDuration: '4s'
                      }}
                    />
                  ))}
                </div>
                
                <CardContent className="relative p-10 h-full flex flex-col z-10">
                  {/* Quote Icon with 3D Effect */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-blue-500/20 mb-8 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700 border-2 border-indigo-400/30">
                    <Quote className="w-8 h-8 text-indigo-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-6 h-6 text-yellow-400 fill-current mx-1 transform group-hover:scale-125 transition-transform duration-300" 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-gray-300 mb-10 flex-grow text-center italic text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client Information */}
                  <div className="text-center">
                    {/* Professional Photo */}
                    <div 
                      className="w-20 h-20 rounded-full bg-cover bg-center mx-auto mb-6 border-3 border-indigo-400/50 group-hover:border-indigo-300/80 transition-colors duration-500 group-hover:scale-110 transform duration-300"
                      style={{ backgroundImage: `url('${testimonial.image}')` }}
                    />
                    
                    <h4 className="text-white font-bold text-xl mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3 font-semibold">
                      {testimonial.position}
                    </p>
                    <p className="text-indigo-400 font-bold text-lg mb-4">
                      {testimonial.company}
                    </p>
                    
                    {/* Project Badge */}
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full border border-indigo-400/30 backdrop-blur-lg">
                      <div className="text-indigo-300 text-sm font-semibold flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        {testimonial.project}
                      </div>
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
