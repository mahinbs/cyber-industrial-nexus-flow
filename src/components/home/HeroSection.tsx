
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Wrench, Droplets, Zap, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { FloatingElements } from '@/components/ui/floating-elements';
import { ParticleSystem } from '@/components/ui/particle-system';

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
    <>
      <ScrollProgress />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Industrial Background with Parallax */}
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

        {/* Enhanced Particle Systems */}
        <ParticleSystem type="bubbles" count={20} color="cyan" />
        <ParticleSystem type="steam" count={8} color="blue" />
        <ParticleSystem type="sparks" count={15} color="orange" />

        {/* Floating Industrial Elements */}
        <FloatingElements count={25} />

        {/* Advanced Grid Pattern with Animation */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2306b6d4' stroke-width='1'%3E%3Cpath d='M0 40h80M40 0v80M20 0v80M60 0v80M0 20h80M0 60h80'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'pulse 6s ease-in-out infinite, float 4s ease-in-out infinite'
        }} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Enhanced REFSOL1 Branding with Typewriter Effect */}
            <div className="space-y-8">
              <div className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 backdrop-blur-lg mb-6 animate-glow">
                <span className="text-cyan-300 font-bold text-lg tracking-wider">REFSOL1 INNOVATIONS</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-tight transform perspective-1000">
                <span 
                  className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent animate-glow"
                  style={{ 
                    textShadow: '0 0 60px rgba(6, 182, 212, 0.6)',
                    transform: `rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
                    animation: 'typewriter 3s steps(12) 1s both, glow 2s ease-in-out infinite alternate'
                  }}
                >
                  Revolutionary
                </span>
                <span 
                  className="block text-white mt-4 transform"
                  style={{ 
                    textShadow: '0 0 40px rgba(255, 255, 255, 0.4)',
                    transform: `translateZ(50px) rotateX(${-mousePosition.y * 0.005}deg)`,
                    animation: 'slide-up 1s ease-out 1.5s both'
                  }}
                >
                  Industrial Solutions
                </span>
                <span 
                  className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-4"
                  style={{ animation: 'bounce-in 1s ease-out 2s both' }}
                >
                  for Tomorrow
                </span>
              </h1>
              
              <p 
                className="text-xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed glass p-8 rounded-3xl backdrop-blur-xl border border-cyan-400/20"
                style={{ animation: 'fade-up 1s ease-out 2.5s both' }}
              >
                Advanced <span className="text-cyan-400 font-bold animate-pulse">Hydrokinetics</span>, revolutionary <span className="text-blue-400 font-bold animate-pulse">Fin Foam™</span> technology, and next-generation composite repair solutions for the world's most challenging industrial environments.
              </p>
            </div>

            {/* Enhanced CTA Buttons with 3D Effects */}
            <div 
              className="flex flex-col sm:flex-row gap-8 justify-center items-center"
              style={{ animation: 'slide-up 1s ease-out 3s both' }}
            >
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-12 py-8 text-2xl font-bold transform hover:scale-110 hover:-translate-y-4 hover:rotate-1 transition-all duration-700 shadow-2xl hover:shadow-cyan-500/60 rounded-3xl border-2 border-cyan-400/40 animate-float"
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
                  className="group border-3 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-12 py-8 text-2xl font-bold transform hover:scale-110 hover:-translate-y-4 hover:-rotate-1 transition-all duration-700 rounded-3xl glass backdrop-blur-xl animate-pulse"
                  style={{ transform: `perspective(1000px) rotateX(-5deg)` }}
                >
                  <Play className="mr-4 w-8 h-8 group-hover:scale-125 group-hover:rotate-180 transition-transform duration-700" />
                  Watch Technology Demo
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats with Advanced Animations */}
            <div 
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-24"
              style={{ animation: 'stagger-fade-up 1s ease-out 3.5s both' }}
            >
              <div className="group text-center space-y-6 p-10 rounded-3xl glass border-2 border-cyan-500/40 hover:border-cyan-400/80 transform hover:scale-110 hover:-translate-y-6 hover:rotate-2 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/30 backdrop-blur-xl animate-bounce-in">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow">
                  1000+
                </div>
                <div className="text-gray-200 font-semibold text-lg">Industrial Projects</div>
                <div className="text-cyan-400 font-medium">Across 50+ Countries</div>
                <Wrench className="w-8 h-8 text-cyan-400/60 mx-auto group-hover:rotate-180 transition-transform duration-700 animate-float" />
              </div>
              
              <div className="group text-center space-y-6 p-10 rounded-3xl glass border-2 border-blue-500/40 hover:border-blue-400/80 transform hover:scale-110 hover:-translate-y-6 hover:-rotate-2 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/30 backdrop-blur-xl animate-zoom-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-glow">
                  30+
                </div>
                <div className="text-gray-200 font-semibold text-lg">Years Innovation</div>
                <div className="text-blue-400 font-medium">Industry Leadership</div>
                <Shield className="w-8 h-8 text-blue-400/60 mx-auto group-hover:scale-125 transition-transform duration-700 animate-pulse" />
              </div>
              
              <div className="group text-center space-y-6 p-10 rounded-3xl glass border-2 border-green-500/40 hover:border-green-400/80 transform hover:scale-110 hover:-translate-y-6 hover:rotate-2 transition-all duration-700 hover:shadow-2xl hover:shadow-green-500/30 backdrop-blur-xl animate-slide-left" style={{ animationDelay: '0.4s' }}>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent animate-glow">
                  99.9%
                </div>
                <div className="text-gray-200 font-semibold text-lg">Safety Record</div>
                <div className="text-green-400 font-medium">Zero Lost Time</div>
                <Droplets className="w-8 h-8 text-green-400/60 mx-auto group-hover:bounce transition-transform duration-700 animate-shake" />
              </div>
              
              <div className="group text-center space-y-6 p-10 rounded-3xl glass border-2 border-orange-500/40 hover:border-orange-400/80 transform hover:scale-110 hover:-translate-y-6 hover:-rotate-2 transition-all duration-700 hover:shadow-2xl hover:shadow-orange-500/30 backdrop-blur-xl animate-flip-x" style={{ animationDelay: '0.6s' }}>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent animate-glow">
                  24/7
                </div>
                <div className="text-gray-200 font-semibold text-lg">Emergency Response</div>
                <div className="text-orange-400 font-medium">Global Coverage</div>
                <Zap className="w-8 h-8 text-orange-400/60 mx-auto group-hover:animate-pulse transition-transform duration-700 animate-swing" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
