
import React from 'react';
import { Wrench, Shield, Droplets, Zap, Factory, Cog, Beaker, Gauge } from 'lucide-react';

export const FloatingElements = ({ count = 12 }: { count?: number }) => {
  const icons = [Wrench, Shield, Droplets, Zap, Factory, Cog, Beaker, Gauge];
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => {
        const Icon = icons[i % icons.length];
        return (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              transform: `scale(${0.6 + Math.random() * 0.8})`
            }}
          >
            <Icon className="w-6 h-6 text-cyan-400/30 animate-pulse" />
          </div>
        );
      })}
    </div>
  );
};
