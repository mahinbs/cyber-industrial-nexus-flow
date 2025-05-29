
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale' | 'bounce-in' | 'zoom-in' | 'zoom-out' | 'flip-x' | 'flip-y' | 'slide-up' | 'slide-down' | 'rotate-in' | 'elastic' | 'pulse-scale' | 'shake' | 'wobble' | 'swing' | 'fade-left' | 'fade-right' | 'fade-down' | 'perspective-left' | 'perspective-right' | 'typewriter' | 'glow' | 'float' | 'industrial-steam' | 'machinery-spin';
  delay?: number;
  duration?: number;
  easing?: 'ease-out' | 'ease-in' | 'ease-in-out' | 'bounce' | 'elastic';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  easing = 'ease-out'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const animations = {
    'fade-up': isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
    'fade-in': isVisible ? 'opacity-100' : 'opacity-0',
    'fade-down': isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0',
    'fade-left': isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0',
    'fade-right': isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0',
    'slide-left': isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0',
    'slide-right': isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0',
    'slide-up': isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0',
    'slide-down': isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0',
    'scale': isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
    'zoom-in': isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
    'zoom-out': isVisible ? 'scale-100 opacity-100' : 'scale-150 opacity-0',
    'bounce-in': isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
    'flip-x': isVisible ? 'rotateX-0 opacity-100' : 'rotateX-90 opacity-0',
    'flip-y': isVisible ? 'rotateY-0 opacity-100' : 'rotateY-90 opacity-0',
    'rotate-in': isVisible ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0',
    'elastic': isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0',
    'pulse-scale': isVisible ? 'scale-100 opacity-100 animate-pulse' : 'scale-90 opacity-0',
    'shake': isVisible ? 'translate-x-0 opacity-100 animate-shake' : 'translate-x-2 opacity-0',
    'wobble': isVisible ? 'rotate-0 opacity-100 animate-wobble' : 'rotate-12 opacity-0',
    'swing': isVisible ? 'rotate-0 opacity-100 animate-swing' : 'rotate-15 opacity-0',
    'perspective-left': isVisible ? 'perspective-1000 rotateY-0 opacity-100' : 'perspective-1000 rotateY-45 opacity-0',
    'perspective-right': isVisible ? 'perspective-1000 rotateY-0 opacity-100' : 'perspective-1000 -rotateY-45 opacity-0',
    'typewriter': isVisible ? 'w-full opacity-100' : 'w-0 opacity-0',
    'glow': isVisible ? 'opacity-100 shadow-2xl shadow-cyan-500/50' : 'opacity-0',
    'float': isVisible ? 'translate-y-0 opacity-100 animate-float' : 'translate-y-4 opacity-0',
    'industrial-steam': isVisible ? 'opacity-60 animate-float' : 'opacity-0 translate-y-8',
    'machinery-spin': isVisible ? 'rotate-0 opacity-100 animate-spin-slow' : 'rotate-45 opacity-0'
  };

  const easingClasses = {
    'ease-out': 'ease-out',
    'ease-in': 'ease-in',
    'ease-in-out': 'ease-in-out',
    'bounce': 'ease-bounce',
    'elastic': 'ease-elastic'
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        `duration-${duration}`,
        easingClasses[easing],
        animations[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};
