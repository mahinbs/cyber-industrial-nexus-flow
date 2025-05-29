
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  size = 'md',
  showText = true
}) => {
  const sizes = {
    sm: 'w-10 h-8',
    md: 'w-16 h-12',
    lg: 'w-20 h-16',
    xl: 'w-32 h-24'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-3xl'
  };

  return (
    <div className={cn('flex items-center space-x-3', className)}>
      <div className={cn(sizes[size], 'relative flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg')}>
        <span className={cn(
          'font-black text-white text-center leading-none',
          size === 'sm' ? 'text-xs' : 
          size === 'md' ? 'text-sm' : 
          size === 'lg' ? 'text-base' : 'text-xl'
        )}>
          R1
        </span>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={cn(
            textSizes[size],
            'font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'
          )}>
            REFSOL1
          </span>
          <span className={cn(
            size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base',
            'text-gray-400 font-medium'
          )}>
            smart maintenance
          </span>
        </div>
      )}
    </div>
  );
};
