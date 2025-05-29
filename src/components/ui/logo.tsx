
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  showText?: boolean;
  variant?: 'default' | 'glow' | 'pulse' | 'rotate' | 'float';
}

export const Logo: React.FC<LogoProps> = ({
  className,
  size = 'md',
  animated = true,
  showText = true,
  variant = 'default'
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-3xl'
  };

  const variants = {
    default: animated ? 'hover:scale-110 transition-transform duration-300' : '',
    glow: 'animate-glow hover:scale-110 transition-all duration-300',
    pulse: 'animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300',
    rotate: 'hover:rotate-180 transition-transform duration-700',
    float: 'animate-float hover:scale-110 transition-transform duration-300'
  };

  return (
    <div className={cn('flex items-center space-x-3 group', className)}>
      <div className={cn(
        sizes[size],
        variants[variant],
        'relative overflow-hidden rounded-full'
      )}>
        <img
          src="/lovable-uploads/9eff5b8b-16e4-48bb-b29f-73b70e6b5b69.png"
          alt="REFSOL1 Logo"
          className="w-full h-full object-contain"
        />
        {animated && (
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={cn(
            textSizes[size],
            'font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent',
            animated && 'group-hover:animate-glow transition-all duration-300'
          )}>
            REFSOL1
          </span>
          <span className={cn(
            size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base',
            'text-gray-400 font-medium',
            animated && 'group-hover:text-cyan-400 transition-colors duration-300'
          )}>
            smart maintenance
          </span>
        </div>
      )}
    </div>
  );
};
