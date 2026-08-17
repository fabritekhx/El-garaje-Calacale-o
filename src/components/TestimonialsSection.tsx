import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/restaurantData';
import { TestimonialItem } from '../types';
import { 
  Star, 
  MessageSquare, 
  CheckCircle2, 
  Heart, 
  Sparkles,
  Plus,
  X
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<TestimonialItem[]>(TESTIMONIALS_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [authorLocation, setAuthorLocation] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [favoriteDish, setFavoriteDish] = useState('Fritada Chagra Completa');
  const [commentText, setCommentText] = useState('');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !commentText) return;

    const newRev: TestimonialItem = {
      id: `rev-${Date.now()}`,
      author: authorName,
      location: authorLocation || 'Quito, Ecuador',
      rating: userRating,
      date: 'Reciente',
      dishFavorite: favoriteDish,
      comment: commentText,
      verifiedVisit: true,
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
    };

    setReviews([newRev, ...reviews]);
    setIsModalOpen(false);
    setAuthorName('');
    setCommentText('');
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#181009] relative border-t border-[#c25e2e]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2d1b11] border border-[#c25e2e]/30 text-[#fde047] text-xs font-bold tracking-widest uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-[#fde047]" />
            Experiencias Reales
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Lo que Dicen Nuestros Comensales
          </h2>
          <p className="font-serif-body text-stone-300 text-base sm:text-lg mt-3">
            Familias de Quito, turistas nacionales y extranjeros comparten su amor por nuestra comida típica a la leña.
          </p>
        </div>

        {/* Global Rating Score Banner */}
        <div className="bg-[#221710] border border-[#c25e2e]/30 rounded-3xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="text-center md:text-left">
              <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#fde047] block">
                4.9 / 5.0
              </span>
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#fde047] my-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[#fde047]" />
                ))}
              </div>
              <span className="text-xs text-stone-400">Basado en más de 850 reseñas verificadas</span>
            </div>

            <div className="hidden lg:block border-l border-white/10 pl-6 text-xs text-stone-300 space-y-1">
              <div className="flex items-center gap-2">
                <span>⭐ Sabor tradicional a la leña:</span>
                <strong className="text-white">99% satisfacción</strong>
              </div>
              <div className="flex items-center gap-2">
                <span>🐎 Ambiente rústico y acogedor:</span>
                <strong className="text-white">98% satisfacción</strong>
              </div>
              <div className="flex items-center gap-2">
                <span>🍲 Porciones generosas:</span>
                <strong className="text-white">100% recomendación</strong>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-[#c25e2e] hover:bg-[#d9703d] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Dejar mi Opinión</span>
          </button>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#20150d] rounded-2xl border border-[#c25e2e]/20 p-5 flex flex-col justify-between shadow-lg hover:border-[#f59e0b]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#fde047]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#fde047]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-500">{rev.date}</span>
                </div>

                <p className="font-serif-body text-xs text-stone-300 leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  {rev.avatarUrl && (
                    <img
                      src={rev.avatarUrl}
                      alt={rev.author}
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full object-cover border border-[#c25e2e]/40"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <span className="font-heading text-xs font-bold text-white block truncate">
                      {rev.author}
                    </span>
                    <span className="text-[10px] text-stone-400 block truncate">
                      {rev.location}
                    </span>
                  </div>
                </div>

                <div className="mt-2 text-[10px] text-[#d4a373] font-semibold truncate">
                  Plato favorito: {rev.dishFavorite}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Leave Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#1e130b] border border-[#c25e2e]/40 rounded-3xl max-w-md w-full p-6 shadow-2xl relative text-left">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 text-stone-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading text-xl font-bold text-white mb-1">
              Tu Experiencia en El Garaje
            </h3>
            <p className="text-xs text-stone-400 mb-4">
              Cuéntanos qué tal estuvo la comida, la atención y el ambiente campestre.
            </p>

            <form onSubmit={handleAddReview} className="space-y-3.5">
              
              <div>
                <label className="block text-xs font-bold text-white uppercase mb-1">Calificación</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setUserRating(star)}
                      className={`p-1.5 rounded-lg border text-xs font-bold transition-all ${
                        userRating >= star
                          ? 'bg-[#c25e2e] border-[#c25e2e] text-[#fde047]'
                          : 'bg-[#140d08] border-white/10 text-stone-500'
                      }`}
                    >
                      <Star className={`w-4 h-4 ${userRating >= star ? 'fill-[#fde047]' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white uppercase mb-1">Tu Nombre *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Daniel Viteri"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#140d08] border border-white/10 text-white text-xs focus:outline-none focus:border-[#c25e2e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white uppercase mb-1">Ciudad / Procedencia</label>
                <input
                  type="text"
                  placeholder="Ej: Quito, Valle de los Chillos, etc."
                  value={authorLocation}
                  onChange={(e) => setAuthorLocation(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#140d08] border border-white/10 text-white text-xs focus:outline-none focus:border-[#c25e2e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white uppercase mb-1">Plato que más te gustó</label>
                <select
                  value={favoriteDish}
                  onChange={(e) => setFavoriteDish(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#140d08] border border-white/10 text-white text-xs focus:outline-none focus:border-[#c25e2e]"
                >
                  <option value="Fritada Chagra Completa">Fritada Chagra Completa</option>
                  <option value="Caldo de Gallina Criolla en Olla de Barro">Caldo de Gallina Criolla en Olla de Barro</option>
                  <option value="Encebollado Tradicional de Albacora">Encebollado Tradicional de Albacora</option>
                  <option value="Trucha Andina al Ajillo">Trucha Andina al Ajillo</option>
                  <option value="Hornado Calacaleño con Agrio">Hornado Calacaleño con Agrio</option>
                  <option value="Empanadas de Viento & Canelazo">Empanadas de Viento & Canelazo</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-white uppercase mb-1">Comentario *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe el sabor, la textura y tu momento favorito..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#140d08] border border-white/10 text-white text-xs focus:outline-none focus:border-[#c25e2e]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#c25e2e] hover:bg-[#d9703d] text-white font-bold text-xs shadow-md cursor-pointer"
              >
                Publicar Opinión
              </button>
            </form>

          </div>
        </div>
      )}

    </section>
  );
};
