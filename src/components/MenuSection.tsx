import React, { useState, useMemo } from 'react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_ITEMS } from '../data/restaurantData';
import { 
  Search, 
  Flame, 
  Star, 
  ShoppingBag, 
  Info, 
  Filter, 
  Sparkles,
  Clock,
  Check,
  UtensilsCrossed
} from 'lucide-react';

interface MenuSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onAddToCart: (dish: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectDish,
  onAddToCart
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyWoodFired, setOnlyWoodFired] = useState(false);
  const [onlyPopular, setOnlyPopular] = useState(false);

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'todos', label: 'Toda la Carta' },
    { id: 'especiales-semana', label: 'Especiales Semanales' },
    { id: 'tradicion-leña', label: 'A la Leña & Paila' },
    { id: 'pescados-mariscos', label: 'Pescados & Mariscos' },
    { id: 'sopas-caldos', label: 'Sopas & Caldos' },
    { id: 'platos-fuertes', label: 'Platos Fuertes' },
    { id: 'bebidas', label: 'Bebidas & Canelazos' },
    { id: 'postres', label: 'Postres & Empanadas' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory === 'especiales-semana') {
        if (!item.daySpecial || item.daySpecial === 'todos') return false;
      } else if (selectedCategory !== 'todos') {
        if (item.category !== selectedCategory) return false;
      }

      // Wood fired toggle
      if (onlyWoodFired && !item.isWoodFired) return false;

      // Popular toggle
      if (onlyPopular && !item.isPopular) return false;

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIng = item.ingredients.some(ing => ing.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesIng) return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, onlyWoodFired, onlyPopular]);

  return (
    <section id="menu-completo" className="py-20 px-4 sm:px-6 bg-[#140e08] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2d1b11] border border-[#c25e2e]/30 text-[#fde047] text-xs font-bold tracking-widest uppercase mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            Nuestra Propuesta Gastronómica
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Carta & Tradición Calacaleña
          </h2>
          <p className="font-serif-body text-stone-300 text-base sm:text-lg mt-3">
            Platos generosos cocinados al fuego con amor andino. Seleccione sus favoritos para consumir en nuestro local rústico o para llevar a casa.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#20150d] border border-[#c25e2e]/30 rounded-2xl p-4 sm:p-5 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por plato, mote, trucha, fritada..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#140d08] border border-white/10 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-[#c25e2e] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Filter Toggles */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => setOnlyWoodFired(!onlyWoodFired)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  onlyWoodFired
                    ? 'bg-[#ea580c] text-white shadow-md'
                    : 'bg-[#140d08] text-stone-300 hover:text-white border border-white/10'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Solo a la Leña</span>
                {onlyWoodFired && <Check className="w-3 h-3" />}
              </button>

              <button
                onClick={() => setOnlyPopular(!onlyPopular)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  onlyPopular
                    ? 'bg-[#fde047] text-[#140d08] shadow-md'
                    : 'bg-[#140d08] text-stone-300 hover:text-white border border-white/10'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#ca8a04]" />
                <span>Más Populares</span>
                {onlyPopular && <Check className="w-3 h-3" />}
              </button>

              {(searchQuery || onlyWoodFired || onlyPopular || selectedCategory !== 'todos') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setOnlyWoodFired(false);
                    setOnlyPopular(false);
                    setSelectedCategory('todos');
                  }}
                  className="text-xs text-stone-400 hover:text-[#fde047] underline underline-offset-4 px-2 py-1"
                >
                  Restablecer
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Category Pills (Single line scrollable on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#c25e2e] text-white shadow-md shadow-[#c25e2e]/30'
                    : 'bg-[#221710] text-stone-300 hover:text-white hover:bg-[#2b1f16] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#20150d] rounded-3xl border border-white/5 p-8">
            <UtensilsCrossed className="w-12 h-12 text-stone-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No se encontraron platos</h3>
            <p className="text-stone-400 text-sm max-w-md mx-auto mb-4">
              No hay preparaciones que coincidan con los filtros seleccionados. Intenta buscar otra palabra o limpiar los filtros.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setOnlyWoodFired(false);
                setOnlyPopular(false);
                setSelectedCategory('todos');
              }}
              className="px-4 py-2 bg-[#c25e2e] text-white text-xs font-bold rounded-lg"
            >
              Ver Toda la Carta
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="bg-[#201610] rounded-2xl border border-[#c25e2e]/25 hover:border-[#f59e0b]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
              >
                {/* Dish Image */}
                <div className="relative h-48 w-full overflow-hidden bg-stone-900">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201610] via-transparent to-black/30" />

                  {dish.specialBadge && (
                    <div className="absolute top-2.5 left-2.5 bg-[#c25e2e] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      {dish.specialBadge}
                    </div>
                  )}

                  {dish.isWoodFired && (
                    <div className="absolute top-2.5 right-2.5 bg-black/75 text-[#fde047] text-[10px] font-medium px-2 py-0.5 rounded border border-[#fde047]/30 flex items-center gap-1">
                      <Flame className="w-3 h-3 text-[#ea580c]" />
                      Leña
                    </div>
                  )}

                  <div className="absolute bottom-2.5 right-2.5 bg-[#140d08]/95 px-2.5 py-0.5 rounded border border-[#c25e2e]/50 font-heading text-base font-bold text-[#fde047]">
                    ${dish.price.toFixed(2)}
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-400 mb-1.5">
                      <div className="flex items-center gap-1 text-[#fde047]">
                        <Star className="w-3 h-3 fill-[#fde047]" />
                        <span className="font-bold text-[11px]">{dish.rating.toFixed(1)}</span>
                      </div>
                      <span className="text-[11px]">{dish.portion}</span>
                    </div>

                    <h4 className="font-heading text-base font-bold text-white group-hover:text-[#fde047] transition-colors leading-snug mb-1.5">
                      {dish.name}
                    </h4>

                    <p className="font-serif-body text-xs text-stone-300 line-clamp-2 leading-relaxed mb-3">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
                      title="Ver Detalles y Receta"
                    >
                      <Info className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onAddToCart(dish)}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#c25e2e] hover:bg-[#d9703d] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#fde047]" />
                      <span>Agregar al Pedido</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
