import React from 'react';
import { LogoEmblem } from './LogoEmblem';
import { 
  Flame, 
  Calendar, 
  Utensils, 
  MapPin, 
  Award, 
  Clock, 
  ArrowDown, 
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onNavigateToSpecials: () => void;
  onOpenReservation: () => void;
  onNavigateToMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateToSpecials,
  onOpenReservation,
  onNavigateToMenu
}) => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 overflow-hidden bg-rustic-wood">
      {/* Background rustic atmospheric overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(194,94,46,0.15)_0%,_transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(24,18,12,0.6)_0%,_#150f0a_100%)] pointer-events-none" />

      {/* Decorative Andean rope borders and wood texture lines */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#d4a373] to-transparent opacity-30" />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2d1b11] border border-[#c25e2e]/40 shadow-inner mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
          <Flame className="w-4 h-4 text-[#ea580c]" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#fde047] uppercase">
            Auténtica Tradición Chagra & Leña
          </span>
          <span className="text-stone-400">•</span>
          <span className="text-xs text-stone-300 font-medium">Calacalí - Ecuador</span>
        </div>

        {/* Central Logo Emblem - The Focal Point requested by the user */}
        <div className="mb-6 transform hover:scale-[1.02] transition-transform duration-500">
          <LogoEmblem size="hero" />
        </div>

        {/* Display Typography */}
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.15] mb-4">
          El Sabor Rústico & Tradicional del <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fde047] via-[#fbbf24] to-[#c25e2e]">Páramo Ecuatoriano</span>
        </h1>

        <p className="font-serif-body text-base sm:text-lg md:text-xl text-[#e8dfd5] max-w-2xl leading-relaxed mb-8">
          En el corazón patrimonial de Calacalí, cocinamos a fuego lento de leña de eucalipto en ancestrales pailas de bronce y ollas de barro. Una experiencia culinaria chagra que celebra las raíces de nuestra tierra.
        </p>

        {/* Call-To-Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 w-full max-w-md sm:max-w-none">
          <button
            onClick={onNavigateToSpecials}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#c25e2e] hover:bg-[#d9703d] text-white font-bold text-base shadow-lg shadow-[#c25e2e]/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            <Utensils className="w-5 h-5 text-[#fde047]" />
            <span>Ver Menú de la Semana</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#2b1c14] hover:bg-[#38251b] border border-[#d4a373]/50 text-[#fde047] hover:text-white font-bold text-base shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#d4a373]"
          >
            <Calendar className="w-5 h-5 text-[#22c55e]" />
            <span>Reservar mi Mesa</span>
          </button>

          <button
            onClick={onNavigateToMenu}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 hover:text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Carta Completa</span>
          </button>
        </div>

        {/* Highlights: 3 Distinct Day Pillars of El Garaje Calacaleño */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          
          {/* Viernes Pillar */}
          <div 
            onClick={onNavigateToSpecials}
            className="bg-[#24170f]/90 border border-[#c25e2e]/25 hover:border-[#c25e2e]/60 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 cursor-pointer group shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] bg-[#0c2436] px-2.5 py-1 rounded-md border border-[#38bdf8]/30">
                Viernes
              </span>
              <span className="text-xs text-stone-400">10:00 - 19:00</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#fde047] transition-colors">
              Pescados & Truchas
            </h3>
            <p className="text-xs text-stone-300 mt-1 leading-relaxed">
              Trucha andina al ajillo montañés, corvina a la leña, ceviches criollos y sopas marineras.
            </p>
          </div>

          {/* Sábado Pillar */}
          <div 
            onClick={onNavigateToSpecials}
            className="bg-[#24170f]/90 border border-[#d97706]/40 hover:border-[#f59e0b] rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 cursor-pointer group shadow-lg ring-1 ring-[#d97706]/30"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#fde047] bg-[#451a03] px-2.5 py-1 rounded-md border border-[#fde047]/40">
                Sábado Chagra
              </span>
              <span className="text-xs text-stone-400">08:30 - 20:30</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#fde047] transition-colors flex items-center gap-1.5">
              Fritadas & Caldo de Gallina
            </h3>
            <p className="text-xs text-stone-300 mt-1 leading-relaxed">
              Fritada en paila de bronce con mote y llapingachos, más caldo de gallina criolla en olla de barro.
            </p>
          </div>

          {/* Domingo Pillar */}
          <div 
            onClick={onNavigateToSpecials}
            className="bg-[#24170f]/90 border border-[#c25e2e]/25 hover:border-[#c25e2e]/60 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 cursor-pointer group shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4ade80] bg-[#052e16] px-2.5 py-1 rounded-md border border-[#4ade80]/30">
                Domingo Familiar
              </span>
              <span className="text-xs text-stone-400">08:00 - 19:00</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#fde047] transition-colors">
              Encebollado & Hornado
            </h3>
            <p className="text-xs text-stone-300 mt-1 leading-relaxed">
              Encebollado de albacora con chifles y tostado, seco de chivo y hornado con agrio calacaleño.
            </p>
          </div>

        </div>

        {/* Heritage Trust Badges */}
        <div className="mt-10 pt-6 border-t border-white/10 w-full flex flex-wrap items-center justify-around gap-4 text-stone-300 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#22c55e]" />
            <span>Ingredientes 100% Criollos de Campo</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#ea580c]" />
            <span>Leña de Eucalipto & Pailas de Bronce</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#fde047]" />
            <span>Tradición Calacaleña Desde 2019</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#38bdf8]" />
            <span>A 15 min de la Mitad del Mundo</span>
          </div>
        </div>

      </div>
    </section>
  );
};
