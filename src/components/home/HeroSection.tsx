
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Wrench, Droplets, Zap, Factory } from 'lucide-react';
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
      {/* Industrial Tank Cleaning Background with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
        }}
      />

      {/* Secondary Layer - Hydroblasting Equipment */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.1), rgba(59,130,246,0.1)), url('https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          transform: `translateY(${scrollY * 0.2}px) scale(1.05)`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Animated Industrial Particle Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 transform transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${mousePosition.x * 0.01}deg)`
          }}
        />
        
        {/* Advanced Grid Pattern with Animation */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2306b6d4' stroke-width='1'%3E%3Cpath d='M0 40h80M40 0v80M20 0v80M60 0v80M0 20h80M0 60h80'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'pulse 6s ease-in-out infinite, float 4s ease-in-out infinite'
        }} />
      </div>

      {/* Floating Industrial Equipment Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              transform: `scale(${0.8 + Math.random() * 0.4})`
            }}
          >
            {i % 5 === 0 && <Wrench className="w-6 h-6 text-cyan-400/40 animate-pulse" />}
            {i % 5 === 1 && <Shield className="w-6 h-6 text-blue-400/40 animate-pulse" />}
            {i % 5 === 2 && <Droplets className="w-6 h-6 text-cyan-300/40 animate-pulse" />}
            {i % 5 === 3 && <Zap className="w-6 h-6 text-yellow-400/40 animate-pulse" />}
            {i % 5 === 4 && <Factory className="w-6 h-6 text-orange-400/40 animate-pulse" />}
          </div>
        ))}
      </div>

      {/* Bubbling Effect Animation */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              bottom: '10%',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '8s'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Enhanced REFSOL1 Branding */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 backdrop-blur-lg mb-6">
              <span className="text-cyan-300 font-bold text-lg tracking-wider">REFSOL1 INNOVATIONS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-tight transform perspective-1000">
              <span 
                className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent animate-glow"
                style={{ 
                  textShadow: '0 0 60px rgba(6, 182, 212, 0.6)',
                  transform: `rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`
                }}
              >
                Revolutionary
              </span>
              <span 
                className="block text-white mt-4 transform"
                style={{ 
                  textShadow: '0 0 40px rgba(255, 255, 255, 0.4)',
                  transform: `translateZ(50px) rotateX(${-mousePosition.y * 0.005}deg)`
                }}
              >
                Industrial Solutions
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-4">
                for Tomorrow
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed animate-fade-in glass p-8 rounded-3xl backdrop-blur-xl border border-cyan-400/20" style={{ animationDelay: '0.3s' }}>
              Advanced <span className="text-cyan-400 font-bold">Hydrokinetics</span>, revolutionary <span className="text-blue-400 font-bold">Fin Foam™</span> technology, and next-generation composite repair solutions for the world's most challenging industrial environments.
            </p>
          </div>

          {/* Enhanced CTA Buttons with 3D Effects */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/products">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-12 py-8 text-2xl font-bold transform hover:scale-110 hover:-translate-y-4 hover:rotate-1 transition-all duration-700 shadow-2xl hover:shadow-cyan-500/60 rounded-3xl border-2 border-cyan-400/40"
                style={{ 
                  boxShadow: '0 20px 60px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)',
                  transform: `perspective(1000px) rotateX(5deg)`
                }}
              >
                Explore REFSOL1 Products
                <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-3 group-hover:scale-125 transition-transform duration-500" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-3 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-12 py-8 text-2xl font-bold transform hover:scale-110 hover:-translate-y-4 hover:-rotate-1 transition-all duration-700 rounded-3xl glass backdrop-blur-xl"
                style={{ transform: `perspective(1000px) rotateX(-5deg)` }}
              >
                <Play className="mr-4 w-8 h-8 group-hover:scale-125 group-hover:rotate-180 transition-transform duration-700" />
                Watch Technology Demo
              </Button>
            </Link>
          </div>

          {/* Enhanced Stats with 3D Industrial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-24 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="group text-center space-y-6 p-10 rounded-3xl glass border-2 border-cyan-500/40 hover:border-cyan-400/80 transform hover:scale-110 hover:-translate-y-6 hover:rotate-2 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/30 backdrop-blur-xl">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow">
                1000+
              </div>
              <div className="text-gray-200 font-semibold text-lg">Industrial Projects</div>
              <div className="text-cyan-400 font-medium">Across 50+ Countries</div>
              <Wrench className="w-8 h-8 text-cyan-400/60 mx-auto group-hover:rotate-180 transition-transform duration-700" />
            </div>
            
            <div className="group text-center space-y-6 p-10 rounded-3xl glass border-2 border-blue-500/40 hover:border-blue-400/80 transform hover:scale-110 hover:-translate-y-6 hover:-rotate-2 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/30 backdrop-blur-xl">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-glow">
                30+
              </div>
              <div className="text-gray-200 font-semibold text-lg">Years Innovation</div>
              <div className="text-blue-400 font-medium">Industry Leadership</div>
              <Shield className="w-8 h-8 text-blue-400/60 mx-auto group-hover:scale-125 transition-transform duration-700" />
            </div>
            
            <div className="group text-center space-y-6 p-10 rounded-3xl glass border-2 border-green-500/40 hover:border-green-400/80 transform hover:scale-110 hover:-translate-y-6 hover:rotate-2 transition-all duration-700 hover:shadow-2xl hover:shadow-green-500/30 backdrop-blur-xl">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent animate-glow">
                99.9%
              </div>
              <div className="text-gray-200 font-semibold text-lg">Safety Record</div>
              <div className="text-green-400 font-medium">Zero Lost Time</div>
              <Droplets className="w-8 h-8 text-green-400/60 mx-auto group-hover:bounce transition-transform duration-700" />
            </div>
            
            <div className="group text-center space-y-6 p-10 rounded-3xl glass border-2 border-orange-500/40 hover:border-orange-400/80 transform hover:scale-110 hover:-translate-y-6 hover:-rotate-2 transition-all duration-700 hover:shadow-2xl hover:shadow-orange-500/30 backdrop-blur-xl">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent animate-glow">
                24/7
              </div>
              <div className="text-gray-200 font-semibold text-lg">Emergency Response</div>
              <div className="text-orange-400 font-medium">Global Coverage</div>
              <Zap className="w-8 h-8 text-orange-400/60 mx-auto group-hover:animate-pulse transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
