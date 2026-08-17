import React, { useState } from 'react';
import { MenuItem, DaySpecial } from '../types';
import { 
  WEEKLY_SPECIALS_SCHEDULE, 
  MENU_ITEMS 
} from '../data/restaurantData';
import { 
  Flame, 
  Fish, 
  Soup, 
  Calendar, 
  Star, 
  Clock, 
  ShoppingBag, 
  Info, 
  Sparkles, 
  CheckCircle2,
  ChefHat
} from 'lucide-react';

interface WeeklySpecialsProps {
  onSelectDish: (dish: MenuItem) => void;
  onAddToCart: (dish: MenuItem) => void;
  onOpenReservation: () => void;
}

export const WeeklySpecials: React.FC<WeeklySpecialsProps> = ({
  onSelectDish,
  onAddToCart,
  onOpenReservation
}) => {
  // Current real day to auto-highlight or default
  const todayDayNum = new Date().getDay();
  let defaultTab: DaySpecial = 'sabado';
  if (todayDayNum === 5) defaultTab = 'viernes';
  else if (todayDayNum === 0) defaultTab = 'domingo';
  else defaultTab = 'sabado'; // default to famous saturday fritada

  const [activeDay, setActiveDay] = useState<DaySpecial>(defaultTab);

  const activeSchedule = WEEKLY_SPECIALS_SCHEDULE.find(s => s.dayId === activeDay) || WEEKLY_SPECIALS_SCHEDULE[1];
  const dayDishes = MENU_ITEMS.filter(item => item.daySpecial === activeDay);

  const getDayIcon = (dayId: string) => {
    switch (dayId) {
      case 'viernes': return <Fish className="w-5 h-5" />;
      case 'sabado': return <Flame className="w-5 h-5 text-[#ea580c]" />;
      case 'domingo': return <Soup className="w-5 h-5 text-[#38bdf8]" />;
      default: return <Flame className="w-5 h-5" />;
    }
  };

  return (
    <section id="especiales" className="py-20 px-4 sm:px-6 bg-[#160f0a] relative overflow-hidden border-t border-[#c25e2e]/20">
      
      {/* Decorative background rustic accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#c25e2e]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2d4a22]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2d1b11] border border-[#c25e2e]/30 text-[#fde047] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Tradición Culinaria Diaria
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            El Menú Especial de la Semana
          </h2>
          <p className="font-serif-body text-stone-300 text-base sm:text-lg mt-3">
            Cada día tiene su propia fiesta de sabor en Calacalí. Cocinamos recetas ancestrales con ingredientes frescos de la serranía y la costa ecuatoriana.
          </p>
        </div>

        {/* Day Selector Tabs with Distinct Rustic Styling */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          
          {/* Viernes Tab */}
          <button
            onClick={() => setActiveDay('viernes')}
            className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-bold transition-all text-sm sm:text-base cursor-pointer ${
              activeDay === 'viernes'
                ? 'bg-gradient-to-r from-[#0369a1] to-[#0284c7] text-white shadow-xl shadow-sky-900/40 ring-2 ring-[#38bdf8]'
                : 'bg-[#221711] text-stone-300 hover:text-white hover:bg-[#2d1f17] border border-white/5'
            }`}
          >
            {getDayIcon('viernes')}
            <div className="text-left leading-tight">
              <span className="block text-xs uppercase tracking-wider opacity-80">Viernes</span>
              <span className="font-heading text-sm sm:text-base">Pescados & Mariscos</span>
            </div>
            {todayDayNum === 5 && (
              <span className="ml-1 px-2 py-0.5 rounded-full bg-[#fde047] text-[#0c4a6e] text-[10px] font-extrabold uppercase">
                Hoy
              </span>
            )}
          </button>

          {/* Sábado Tab */}
          <button
            onClick={() => setActiveDay('sabado')}
            className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-bold transition-all text-sm sm:text-base cursor-pointer ${
              activeDay === 'sabado'
                ? 'bg-gradient-to-r from-[#c25e2e] to-[#ea580c] text-white shadow-xl shadow-orange-950/50 ring-2 ring-[#fde047]'
                : 'bg-[#221711] text-stone-300 hover:text-white hover:bg-[#2d1f17] border border-white/5'
            }`}
          >
            {getDayIcon('sabado')}
            <div className="text-left leading-tight">
              <span className="block text-xs uppercase tracking-wider opacity-80">Sábado Chagra</span>
              <span className="font-heading text-sm sm:text-base">Fritada & Caldo Gallina</span>
            </div>
            {todayDayNum === 6 && (
              <span className="ml-1 px-2 py-0.5 rounded-full bg-[#fde047] text-[#7c2d12] text-[10px] font-extrabold uppercase">
                Hoy
              </span>
            )}
          </button>

          {/* Domingo Tab */}
          <button
            onClick={() => setActiveDay('domingo')}
            className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-bold transition-all text-sm sm:text-base cursor-pointer ${
              activeDay === 'domingo'
                ? 'bg-gradient-to-r from-[#15803d] to-[#16a34a] text-white shadow-xl shadow-green-950/50 ring-2 ring-[#4ade80]'
                : 'bg-[#221711] text-stone-300 hover:text-white hover:bg-[#2d1f17] border border-white/5'
            }`}
          >
            {getDayIcon('domingo')}
            <div className="text-left leading-tight">
              <span className="block text-xs uppercase tracking-wider opacity-80">Domingo Familiar</span>
              <span className="font-heading text-sm sm:text-base">Encebollado & Hornado</span>
            </div>
            {todayDayNum === 0 && (
              <span className="ml-1 px-2 py-0.5 rounded-full bg-[#fde047] text-[#14532d] text-[10px] font-extrabold uppercase">
                Hoy
              </span>
            )}
          </button>

        </div>

        {/* Day Story Banner Card */}
        <div className="bg-[#241912] border border-[#c25e2e]/30 rounded-3xl p-6 sm:p-8 mb-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#c25e2e]/20 text-[#fde047] text-xs font-bold uppercase tracking-wider border border-[#c25e2e]/40">
                  {activeSchedule.badgeText}
                </span>
                <span className="text-stone-400 text-xs font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#d4a373]" />
                  Servido desde las {activeDay === 'domingo' ? '08:00 AM' : activeDay === 'sabado' ? '08:30 AM' : '10:00 AM'}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                {activeSchedule.title}
              </h3>
              
              <p className="font-serif-body text-stone-300 text-sm sm:text-base mb-4 leading-relaxed">
                {activeSchedule.description}
              </p>

              {/* Chef Notes & Secret of the Day */}
              <div className="flex items-start gap-3 bg-[#1a120c] p-3.5 rounded-xl border border-white/5 text-xs text-stone-300">
                <ChefHat className="w-5 h-5 text-[#fde047] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#fde047] block mb-0.5">Secreto del Fogón Calacaleño:</span>
                  <span>{activeSchedule.chefNote}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 justify-center items-center lg:items-end border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6">
              <div className="text-center lg:text-right">
                <span className="text-xs text-stone-400 block">Rango de Precios</span>
                <span className="font-heading text-2xl font-bold text-[#fde047]">{activeSchedule.priceRange}</span>
              </div>

              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#c25e2e] hover:bg-[#d9703d] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar Mesa para {activeSchedule.dayName}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Dish Grid for Active Day */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dayDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-[#201610] rounded-2xl border border-[#c25e2e]/25 hover:border-[#f59e0b]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:-translate-y-1"
            >
              {/* Dish Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-stone-900">
                <img
                  src={dish.image}
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201610] via-transparent to-black/40" />

                {/* Badge top-left */}
                {dish.specialBadge && (
                  <div className="absolute top-3 left-3 bg-[#c25e2e] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider flex items-center gap-1">
                    <Flame className="w-3 h-3 text-[#fde047]" />
                    {dish.specialBadge}
                  </div>
                )}

                {/* Wood fired badge */}
                {dish.isWoodFired && (
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-[#fde047] text-[10px] font-semibold px-2 py-0.5 rounded border border-[#fde047]/30">
                    A la Leña
                  </div>
                )}

                {/* Price tag bottom-right */}
                <div className="absolute bottom-3 right-3 bg-[#140d08]/95 backdrop-blur-md px-3 py-1 rounded-lg border border-[#c25e2e]/50 font-heading text-lg font-extrabold text-[#fde047]">
                  ${dish.price.toFixed(2)}
                </div>

                {/* Portion indicator */}
                <div className="absolute bottom-3 left-3 text-[11px] text-stone-300 font-medium bg-black/60 px-2 py-0.5 rounded">
                  {dish.portion}
                </div>
              </div>

              {/* Dish Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1 text-xs text-[#fde047]">
                      <Star className="w-3.5 h-3.5 fill-[#fde047] text-[#fde047]" />
                      <span className="font-bold">{dish.rating.toFixed(1)}</span>
                      <span className="text-stone-400">({dish.reviewsCount})</span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-stone-400">
                      <Clock className="w-3 h-3" />
                      <span>{dish.prepTimeMinutes} min</span>
                    </div>
                  </div>

                  <h4 className="font-heading text-lg font-bold text-white group-hover:text-[#fde047] transition-colors leading-snug mb-2">
                    {dish.name}
                  </h4>

                  <p className="font-serif-body text-xs text-stone-300 line-clamp-3 leading-relaxed mb-4">
                    {dish.description}
                  </p>

                  {/* Key Ingredients tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dish.ingredients.slice(0, 4).map((ing, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#2b1f17] text-stone-300 border border-white/5">
                        {ing}
                      </span>
                    ))}
                    {dish.ingredients.length > 4 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#2b1f17] text-stone-400">
                        +{dish.ingredients.length - 4} más
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                  <button
                    onClick={() => onSelectDish(dish)}
                    className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Ver Detalles</span>
                  </button>

                  <button
                    onClick={() => onAddToCart(dish)}
                    className="flex-1 py-2 px-3 rounded-xl bg-[#c25e2e] hover:bg-[#d9703d] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#fde047]" />
                    <span>Pedir (${dish.price.toFixed(2)})</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner with Delivery and Reservation guarantee */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1c120a] border border-[#d4a373]/30 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-stone-300">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0" />
            <div>
              <span className="font-bold text-white block">Servicio para Servirse en Calacalí o para Llevar</span>
              <span>Preparamos su pedido al momento en empaques ecológicos térmicos.</span>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <span className="text-[#fde047] font-semibold">¿Grupo grande o paseo familiar?</span>
            <button
              onClick={onOpenReservation}
              className="px-4 py-2 rounded-lg bg-[#2d1b11] border border-[#c25e2e] text-white hover:bg-[#c25e2e] transition-colors font-bold text-xs"
            >
              Reservar Mesa Anticipada
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
