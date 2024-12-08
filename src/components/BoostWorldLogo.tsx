import React from 'react';

interface BoostWorldLogoProps {
  className?: string;
}

export function BoostWorldLogo({ className = '' }: BoostWorldLogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src="/assets/logo.png" alt="Boost World" className="h-12" />
    </div>
  );
}
