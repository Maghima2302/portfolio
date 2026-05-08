import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onDone }) => {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setHide(true);
            setTimeout(onDone, 500);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 18 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      data-testid="loading-screen"
      className="loading-screen"
      style={{
        opacity: hide ? 0 : 1,
        visibility: hide ? 'hidden' : 'visible',
        transition: 'opacity 0.5s ease, visibility 0.5s ease',
      }}
    >
      {/* Floating tropical elements */}
      <div className="absolute top-10 left-10 text-4xl animate-float-slow select-none">🌺</div>
      <div className="absolute top-20 right-16 text-3xl animate-float select-none">🌴</div>
      <div className="absolute bottom-20 left-20 text-2xl animate-float-rotate select-none">🌿</div>
      <div className="absolute bottom-16 right-12 text-3xl animate-float-fast select-none">🌸</div>

      {/* Logo */}
      <div className="flex flex-col items-center gap-6">
        {/* Animated ring */}
        <div className="relative">
          <div
            data-testid="loading-ring"
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,157,0.1), rgba(155,89,182,0.1))',
              border: '1px solid rgba(255,107,157,0.3)',
              boxShadow: '0 0 40px rgba(255,107,157,0.2)',
            }}
          >
            <div className="loader-ring absolute" />
            <span className="text-3xl font-black gradient-text font-outfit z-10">ML</span>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-black gradient-text font-outfit mb-1" data-testid="loading-name">
            Maghima Lakshmi A
          </h1>
          <p className="text-gray-500 text-sm" data-testid="loading-tagline">
            Data Science & AI Developer
          </p>
        </div>

        {/* Progress bar */}
        <div
          data-testid="loading-progress-bar"
          className="w-48 h-1 rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-200"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: 'linear-gradient(90deg, #FF6B9D, #9B59B6)',
              boxShadow: '0 0 10px rgba(255,107,157,0.5)',
            }}
            data-testid="loading-progress-fill"
          />
        </div>

        <p className="text-gray-600 text-xs" data-testid="loading-progress-text">
          {Math.min(Math.round(progress), 100)}% Loading Portfolio...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
