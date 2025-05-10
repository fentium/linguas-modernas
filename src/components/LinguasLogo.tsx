
import React from 'react';

interface LogoProps {
  className?: string;
}

const LinguasLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="border-4 border-lm-blue bg-white px-2 py-1">
        <span className="text-lm-red font-bold text-2xl md:text-3xl">Línguas</span>
        <span className="text-lm-blue font-bold text-2xl md:text-3xl">Modernas</span>
      </div>
    </div>
  );
};

export default LinguasLogo;
