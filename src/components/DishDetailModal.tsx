import React, { useState } from 'react';
import { MenuItem } from '../types';
import { 
  X, 
  Flame, 
  Star, 
  Clock, 
  ShoppingBag, 
  Check, 
  Plus, 
  Minus, 
  Sparkles,
  Heart,
  Wine,
  ChefHat
} from 'lucide-react';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToCart: (dish: MenuItem, quantity: number, extraSides: string[], notes?: string) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSides, setSelectedSides] = useState<string[]>([]);
  const [specialNotes, setSpecialNotes] = useState('');

  if (!dish) return null;

  const extraOptions = [
    { name: 'Porción Extra de Llapingachos (2u)', price: 1.50 },
    { name: 'Porción Extra de Mote Caliente', price: 1.00 },
    { name: 'Ají de Chochos Especial de la Casa', price: 0.75 },
    { name: 'Porción de Chifles Artesanales', price: 1.00 },
    { name: 'Maduro Frito Caramelizado', price: 1.25 },
  ];

  const toggleSide = (sideName: string) => {
    if (selectedSides.includes(sideName)) {
      setSelectedSides(selectedSides.filter(s => s !== sideName));
    } else {
      setSelectedSides([...selectedSides, sideName]);
    }
  };

  const handleAdd = () => {
    onAddToCart(dish, quantity, selectedSides, specialNotes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#1e140d] border border-[#c25e2e]/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-stone-300 hover:text-white hover:bg-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-stone-900">
          <img
            src={dish.image}
            alt={dish.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e140d] via-transparent to-black/40" />

          {dish.specialBadge && (
            <div className="absolute top-4 left-4 bg-[#c25e2e] text-white text-xs font-bold px-3 py-1 rounded-md shadow-md uppercase tracking-wider flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#fde047]" />
              {dish.specialBadge}
            </div>
          )}

          <div className="absolute bottom-4 right-4 bg-[#140d08]/95 px-4 py-1.5 rounded-xl border border-[#c25e2e] font-heading text-2xl font-extrabold text-[#fde047]">
            ${dish.price.toFixed(2)}
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <div className="flex items-center gap-3 text-xs text-stone-400 mb-2">
              <span className="flex items-center gap-1 text-[#fde047] font-bold">
                <Star className="w-4 h-4 fill-[#fde047]" />
                {dish.rating.toFixed(1)} ({dish.reviewsCount} opiniones)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {dish.prepTimeMinutes} min de preparación
              </span>
              <span>•</span>
              <span className="text-[#d4a373] font-semibold">{dish.portion}</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {dish.name}
            </h3>

            <p className="font-serif-body text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Cultural Heritage & Origin */}
          <div className="bg-[#2a1c13] p-4 rounded-2xl border border-[#c25e2e]/20 text-xs text-stone-300 flex items-start gap-3">
            <ChefHat className="w-5 h-5 text-[#fde047] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#fde047] block mb-0.5">Tradición del Campo:</span>
              <p>{dish.culturalOrigin}</p>
            </div>
          </div>

          {/* Ingredients list */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-2.5">
              Ingredientes Principales
            </h4>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ing, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-lg bg-[#2b1f17] text-[#f5efe6] border border-white/10 font-medium"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Pairing Recommendation */}
          {dish.pairing && (
            <div className="flex items-center gap-3 bg-[#150e09] p-3 rounded-xl border border-amber-900/30 text-xs text-stone-300">
              <Wine className="w-4 h-4 text-[#ea580c] shrink-0" />
              <span><strong className="text-[#fde047]">Maridaje Chagra sugerido:</strong> {dish.pairing}</span>
            </div>
          )}

          {/* Extra sides customization */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-2.5">
              Acompañamientos Adicionales (Opcional)
            </h4>
            <div className="space-y-2">
              {extraOptions.map((opt, idx) => {
                const isSelected = selectedSides.includes(opt.name);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleSide(opt.name)}
                    className={`w-full p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#c25e2e]/20 border-[#c25e2e] text-white font-medium'
                        : 'bg-[#140d08] border-white/5 text-stone-300 hover:bg-[#251910]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${isSelected ? 'bg-[#c25e2e] border-[#c25e2e]' : 'border-stone-500'}`}>
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span>{opt.name}</span>
                    </div>
                    <span className="font-bold text-[#fde047]">+${opt.price.toFixed(2)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special instructions */}
          <div>
            <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
              Instrucciones Especiales
            </label>
            <input
              type="text"
              placeholder="Ej: Ají aparte, sin cebolla, maduro bien dorado..."
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#140d08] border border-white/10 text-white placeholder-stone-400 text-xs focus:outline-none focus:border-[#c25e2e]"
            />
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            
            {/* Quantity Selector */}
            <div className="flex items-center gap-2 bg-[#140d08] p-1.5 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center font-bold text-white text-sm">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Submit add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 py-3.5 px-6 rounded-xl bg-[#c25e2e] hover:bg-[#d9703d] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#c25e2e]/30 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#fde047]" />
              <span>Añadir al Pedido • ${(dish.price * quantity).toFixed(2)}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
