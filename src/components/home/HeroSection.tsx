import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Wrench, Droplets, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { FloatingElements } from '@/components/ui/floating-elements';
import { ParticleSystem } from '@/components/ui/particle-system';
import { Logo } from '@/components/ui/logo';

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
        {/* Enhanced Industrial Background with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
          }}
        />

        {/* Secondary Layer - Hydroblasting Equipment */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translateY(${scrollY * 0.2}px) scale(1.05)`,
            mixBlendMode: 'multiply'
          }}
        />

        {/* Enhanced Particle Systems */}
        <ParticleSystem type="bubbles" count={20} color="blue" />
        <ParticleSystem type="steam" count={8} color="cyan" />
        <ParticleSystem type="sparks" count={15} color="blue" />

        {/* Floating Industrial Elements */}
        <FloatingElements count={25} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Enhanced REFSOL1 Logo and Branding */}
            <div className="space-y-8">
              {/* Large Logo Display */}
              <div className="flex justify-center mb-8">
                <div className="relative glass p-8 rounded-3xl border-2 border-blue-200/50 shadow-2xl">
                  <Logo 
                    size="xl" 
                    className="scale-150 md:scale-200 lg:scale-300"
                    showText={false}
                  />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  REFSOL1
                </span>
                <span className="block text-slate-800 mt-4">
                  Smart Maintenance
                </span>
                <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mt-4">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl md:text-3xl text-slate-700 max-w-5xl mx-auto leading-relaxed glass p-8 rounded-3xl border-2 border-blue-200/30 shadow-xl">
                Advanced <span className="text-blue-600 font-bold">AI-Powered</span> maintenance solutions, revolutionary <span className="text-cyan-600 font-bold">Predictive Analytics</span>, and next-generation industrial repair technologies for the world's most challenging environments.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-12 py-8 text-2xl font-bold transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-blue-500/60 rounded-3xl border-2 border-blue-400/40"
                >
                  Explore Products
                  <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" />
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group border-3 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-12 py-8 text-2xl font-bold transform hover:scale-110 transition-all duration-500 rounded-3xl glass"
                >
                  <Play className="mr-4 w-8 h-8 group-hover:scale-125 transition-transform duration-500" />
                  Our Services
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-24">
              <div className="group text-center space-y-6 p-10 rounded-3xl glass border-2 border-blue-300/40 hover:border-blue-400/80 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-slate-700 font-semibold text-lg">Smart Installations</div>
                <div className="text-blue-600 font-medium">Across 50+ Countries</div>
                <Wrench className="w-8 h-8 text-blue-500/60 mx-auto" />
              </div>
              
              <div className="group text-center space-y-6 p-10 rounded-3xl glass border-2 border-blue-500/40 hover:border-blue-400/80 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  30+
                </div>
                <div className="text-gray-200 font-semibold text-lg">Years Innovation</div>
                <div className="text-blue-400 font-medium">Industry Leadership</div>
                <Shield className="w-8 h-8 text-blue-400/60 mx-auto" />
              </div>
              
              <div className="group text-center space-y-6 p-10 rounded-3xl glass border-2 border-green-500/40 hover:border-green-400/80 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 backdrop-blur-xl">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-gray-200 font-semibold text-lg">Uptime Rate</div>
                <div className="text-green-400 font-medium">AI Monitoring</div>
                <Droplets className="w-8 h-8 text-green-400/60 mx-auto" />
              </div>
              
              <div className="group text-center space-y-6 p-10 rounded-3xl glass border-2 border-orange-500/40 hover:border-orange-400/80 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/30 backdrop-blur-xl">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-gray-200 font-semibold text-lg">Smart Response</div>
                <div className="text-orange-400 font-medium">Global Coverage</div>
                <Zap className="w-8 h-8 text-orange-400/60 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
