import React from 'react';

interface LogoEmblemProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showTagline?: boolean;
}

export const LogoEmblem: React.FC<LogoEmblemProps> = ({
  size = 'md',
  className = '',
  showTagline = false
}) => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32 md:w-40 md:h-40',
    hero: 'w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72'
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <div className={`relative ${sizeMap[size]} transition-transform duration-300 hover:scale-105 group`}>
        {/* Subtle glow/shadow ring */}
        <div className="absolute inset-0 rounded-full bg-[#c25e2e]/20 blur-md group-hover:bg-[#d97706]/30 transition-all duration-500 pointer-events-none" />
        
        {/* SVG Rustic Circular Badge with the Chagra Motif */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-2xl select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients for Wood, Metal, and Nature */}
            <radialGradient id="woodBorder" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="#4a2e1b" />
              <stop offset="90%" stopColor="#2c1a0e" />
              <stop offset="100%" stopColor="#190e07" />
            </radialGradient>
            
            <linearGradient id="ropeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4a373" />
              <stop offset="50%" stopColor="#a3704c" />
              <stop offset="100%" stopColor="#6f4528" />
            </linearGradient>

            <linearGradient id="emeraldDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3f20" />
              <stop offset="50%" stopColor="#132a15" />
              <stop offset="100%" stopColor="#0c1d0e" />
            </linearGradient>

            <linearGradient id="goldText" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>

            <linearGradient id="skyAndes" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="60%" stopColor="#dbeafe" />
              <stop offset="100%" stopColor="#fef3c7" />
            </linearGradient>

            <filter id="rusticShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="1" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.8"/>
            </filter>

            {/* Circular Path for Text */}
            <path id="topCurve" d="M 60,200 A 140,140 0 0,1 340,200" fill="none" />
            <path id="bottomCurve" d="M 65,225 A 135,135 0 0,0 335,225" fill="none" />
          </defs>

          {/* Outer Riveted Metal / Wood Rim */}
          <circle cx="200" cy="200" r="195" fill="url(#woodBorder)" stroke="#8c5836" strokeWidth="5" />
          
          {/* Rivets around circumference */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 200 + 184 * Math.cos(rad);
            const cy = 200 + 184 * Math.sin(rad);
            return (
              <circle key={idx} cx={cx} cy={cy} r="4.5" fill="#d4a373" stroke="#2c1a0e" strokeWidth="1.5" />
            );
          })}

          {/* Twisted Rope Inner Ring */}
          <circle cx="200" cy="200" r="172" fill="none" stroke="url(#ropeGrad)" strokeWidth="9" strokeDasharray="6 3" />
          
          {/* Dark Forest Green Andean Field */}
          <circle cx="200" cy="200" r="162" fill="url(#emeraldDark)" stroke="#d4a373" strokeWidth="2" />

          {/* Central Artwork Circle: Sky & Andes Mountain Backdrop */}
          <circle cx="200" cy="190" r="115" fill="url(#skyAndes)" stroke="#a3704c" strokeWidth="3" />

          {/* Andes Mountain Silhouettes */}
          <polygon points="100,240 160,135 210,240" fill="#64748b" opacity="0.8" />
          <polygon points="140,165 160,135 180,165 170,175 160,160 150,175" fill="#f8fafc" />
          <polygon points="180,240 240,115 300,240" fill="#475569" opacity="0.9" />
          <polygon points="215,150 240,115 265,150 250,160 240,145 230,160" fill="#ffffff" />
          <polygon points="270,240 310,160 340,240" fill="#334155" opacity="0.75" />

          {/* Green Rolling Hills of Calacalí */}
          <path d="M 85,240 Q 150,200 200,230 T 315,240 L 315,270 L 85,270 Z" fill="#2d5a27" />

          {/* Traditional Chagra Jinete on Horse (Stylized Iconic Silhouette) */}
          <g filter="url(#rusticShadow)">
            {/* Horse body & rider */}
            <path d="M165,190 Q175,170 190,165 Q205,160 215,175 Q210,195 195,205 Q180,215 165,190 Z" fill="#78350f" />
            {/* Horse head & neck */}
            <path d="M155,165 Q160,150 168,142 Q175,145 172,158 Q165,175 160,185 Z" fill="#542407" />
            {/* Chagra with Poncho & Hat */}
            <path d="M185,150 Q195,135 205,140 Q215,148 210,165 Q195,170 185,150 Z" fill="#15803d" />
            {/* Chagra Sombrero */}
            <ellipse cx="198" cy="138" rx="14" ry="4" fill="#b45309" stroke="#78350f" strokeWidth="1" />
            <path d="M193,138 Q198,128 203,138 Z" fill="#92400e" />
            {/* Lasso in hand spinning above */}
            <ellipse cx="210" cy="118" rx="18" ry="8" fill="none" stroke="#fef08a" strokeWidth="2.5" strokeDasharray="3 1" transform="rotate(-15 210 118)" />
            <path d="M205,145 Q212,130 210,122" fill="none" stroke="#fef08a" strokeWidth="2" />
            {/* Charging Bull right side */}
            <path d="M235,210 Q255,190 275,200 Q285,210 270,225 Q250,230 235,210 Z" fill="#6b2710" />
            <path d="M230,205 Q220,202 218,208 Q222,216 232,215 Z" fill="#451a0b" />
            {/* Horns */}
            <path d="M225,203 Q220,195 215,196 Q220,200 223,205" fill="#fef3c7" stroke="#92400e" strokeWidth="1" />
          </g>

          {/* Wood Fire & Iron Cauldron (Paila / Olla de Barro) at the Center Base */}
          <g transform="translate(145, 222)">
            {/* Logs of wood */}
            <rect x="15" y="42" width="80" height="10" rx="3" fill="#582f0e" stroke="#271302" strokeWidth="1.5" />
            <rect x="25" y="48" width="60" height="8" rx="3" fill="#7f4f24" stroke="#271302" strokeWidth="1.5" />
            {/* Flames */}
            <path d="M35,42 Q45,22 55,42 Q65,15 75,42 Q80,28 85,42 Z" fill="#f97316" opacity="0.9" />
            <path d="M42,42 Q55,26 65,42 Q70,30 75,42 Z" fill="#facc15" />
            {/* Heavy Iron Cauldron */}
            <path d="M25,22 Q20,38 55,38 Q90,38 85,22 Q55,20 25,22 Z" fill="#1e1e1e" stroke="#4b5563" strokeWidth="2" />
            <ellipse cx="55" cy="22" rx="30" ry="6" fill="#ca8a04" stroke="#4b5563" strokeWidth="1" />
            <circle cx="55" cy="22" r="3" fill="#ea580c" />
          </g>

          {/* Decorative Andean Golden Wheat / Laurel Sprigs on sides */}
          <path d="M 65,170 Q 55,210 70,250" fill="none" stroke="#d4a373" strokeWidth="2" />
          <path d="M 335,170 Q 345,210 330,250" fill="none" stroke="#d4a373" strokeWidth="2" />

          {/* Top Arc Text: EL GARAJE */}
          <text fill="url(#goldText)" filter="url(#rusticShadow)" className="font-bold tracking-widest text-[34px]" style={{ fontFamily: 'Cinzel, serif', fontWeight: 900 }}>
            <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
              EL GARAJE
            </textPath>
          </text>

          {/* Vintage "SINCE 2019" Banner Ribbon */}
          <g transform="translate(130, 275)">
            <rect x="0" y="0" width="140" height="24" rx="4" fill="#854d0e" stroke="#fef08a" strokeWidth="1.5" />
            <text x="70" y="16" fill="#fef9c3" textAnchor="middle" fontSize="12" fontWeight="bold" letterSpacing="2" style={{ fontFamily: 'Cinzel, serif' }}>
              DESDE 2019
            </text>
          </g>

          {/* Bottom Arc Text: CALACALEÑO */}
          <text fill="url(#goldText)" filter="url(#rusticShadow)" className="font-bold tracking-widest text-[28px]" style={{ fontFamily: 'Cinzel, serif', fontWeight: 900 }}>
            <textPath href="#bottomCurve" startOffset="50%" textAnchor="middle">
              CALACALEÑO
            </textPath>
          </text>

          {/* Bottom Tagline Subtext */}
          <text x="200" y="375" fill="#fde68a" textAnchor="middle" fontSize="11" fontWeight="600" letterSpacing="1" style={{ fontFamily: 'Lora, serif', fontStyle: 'italic' }}>
            Comida Típica Tradicional del Ecuador
          </text>
        </svg>
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
