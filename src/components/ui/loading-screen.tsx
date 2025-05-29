
import React, { useEffect, useState } from 'react';
import { Logo } from './logo';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  duration = 3000
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="relative">
          <Logo size="xl" className="scale-150" />
        </div>
        
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-cyan-400 text-lg font-medium">
          Initializing Smart Maintenance Systems...
        </p>
      </div>
    </div>
  );
};
