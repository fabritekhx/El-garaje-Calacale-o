import React from 'react';

interface LogoEmblemProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showTagline?: boolean;
}

export const LOGO_IMAGE_URL = 'https://eyzcuxspypnnwzzatnzs.supabase.co/storage/v1/object/public/Imagen/LOGO-gareje.png';

export const LogoEmblem: React.FC<LogoEmblemProps> = ({
  size = 'md',
  className = '',
  showTagline = false
}) => {
  const sizeMap = {
    sm: 'w-11 h-11 sm:w-12 sm:h-12',
    md: 'w-20 h-20 sm:w-24 sm:h-24',
    lg: 'w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48',
    hero: 'w-56 h-56 sm:w-72 sm:h-72 md:w-84 md:h-84 lg:w-96 lg:h-96'
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <div className={`relative ${sizeMap[size]} transition-transform duration-300 hover:scale-105 group`}>
        {/* Subtle warm glow ring */}
        <div className="absolute inset-0 rounded-full bg-[#c25e2e]/25 blur-lg group-hover:bg-[#d97706]/40 transition-all duration-500 pointer-events-none" />
        
        {/* Official El Garaje Calacaleño Logo Image */}
        <img
          src={LOGO_IMAGE_URL}
          alt="El Garaje Calacaleño - Comida Típica Tradicional del Ecuador"
          referrerPolicy="no-referrer"
          className="relative z-10 w-full h-full object-contain drop-shadow-2xl select-none"
        />
      </div>

      {showTagline && (
        <div className="mt-3 text-center">
          <span className="block text-xs uppercase tracking-[0.3em] text-[#d4a373] font-semibold">
            Calacalí • Pichincha
          </span>
          <span className="block text-sm text-[#f5efe6]/80 font-serif-body italic">
            Sabor Auténtico a la Leña
          </span>
        </div>
      )}
    </div>
  );
};

