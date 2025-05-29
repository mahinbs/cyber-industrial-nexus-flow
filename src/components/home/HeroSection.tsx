
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Wrench, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Industrial Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Animated Overlay Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 transform transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) scale(1.1)`
          }}
        />
        
        {/* Industrial Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2306b6d4' stroke-width='1'%3E%3Cpath d='M0 50h100M50 0v100'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'pulse 4s ease-in-out infinite'
        }} />
      </div>

      {/* Floating Industrial Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            {i % 3 === 0 && <Wrench className="w-4 h-4 text-cyan-400/30" />}
            {i % 3 === 1 && <Shield className="w-4 h-4 text-blue-400/30" />}
            {i % 3 === 2 && <Droplets className="w-4 h-4 text-cyan-300/30" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Main Heading with 3D Effect */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight transform perspective-1000">
              <span 
                className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent animate-glow"
                style={{ textShadow: '0 0 40px rgba(6, 182, 212, 0.5)' }}
              >
                Advanced Industrial
              </span>
              <span 
                className="block text-white mt-4"
                style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
              >
                Cleaning Solutions
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-4">
                for the Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in glass p-6 rounded-2xl" style={{ animationDelay: '0.3s' }}>
              Revolutionary composite repairs, cutting-edge protective coatings, and next-generation maintenance solutions for oil & gas, petrochemical, marine, and manufacturing industries worldwide.
            </p>
          </div>

          {/* Enhanced CTA Buttons with 3D Effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/products">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-6 text-xl font-bold transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50 rounded-2xl border border-cyan-400/30"
                style={{ boxShadow: '0 10px 40px rgba(6, 182, 212, 0.3)' }}
              >
                Explore Solutions
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-10 py-6 text-xl font-bold transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 rounded-2xl glass"
            >
              <Play className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Stats with 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="group text-center space-y-4 p-8 rounded-3xl glass border border-cyan-500/30 hover:border-cyan-400/60 transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-gray-300 font-medium">Projects Completed</div>
              <div className="text-sm text-cyan-400">Worldwide Operations</div>
            </div>
            
            <div className="group text-center space-y-4 p-8 rounded-3xl glass border border-cyan-500/30 hover:border-cyan-400/60 transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-gray-300 font-medium">Countries Served</div>
              <div className="text-sm text-cyan-400">Global Presence</div>
            </div>
            
            <div className="group text-center space-y-4 p-8 rounded-3xl glass border border-cyan-500/30 hover:border-cyan-400/60 transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                25+
              </div>
              <div className="text-gray-300 font-medium">Years Experience</div>
              <div className="text-sm text-cyan-400">Industry Leadership</div>
            </div>
            
            <div className="group text-center space-y-4 p-8 rounded-3xl glass border border-cyan-500/30 hover:border-cyan-400/60 transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-gray-300 font-medium">Emergency Service</div>
              <div className="text-sm text-cyan-400">Always Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
