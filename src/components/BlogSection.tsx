import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/restaurantData';
import { BlogPost } from '../types';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  ChevronRight, 
  X, 
  Share2,
  Sparkles
} from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#150f0a] relative border-t border-[#c25e2e]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2d1b11] border border-[#c25e2e]/30 text-[#fde047] text-xs font-bold tracking-widest uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#d4a373]" />
            Historias & Tradición
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Crónicas del Fogón & Calacalí
          </h2>
          <p className="font-serif-body text-stone-300 text-base sm:text-lg mt-3">
            Artículos y relatos sobre la cultura chagra, los secretos de la gastronomía de los Andes y guías para tu visita de fin de semana.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-[#20150d] rounded-3xl border border-[#c25e2e]/20 hover:border-[#f59e0b]/50 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-xl"
            >
              <div className="relative h-52 overflow-hidden bg-stone-900">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20150d] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#c25e2e] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-stone-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#d4a373]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#fde047] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="font-serif-body text-xs text-stone-300 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#fde047] font-semibold">
                  <span className="text-stone-400 text-[11px]">Por: {post.author}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Leer crónica <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#1e130b] border border-[#c25e2e]/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-stone-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e130b] via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 bg-[#c25e2e] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                {selectedPost.category}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-400 mb-2">
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
              <span>•</span>
              <span className="text-[#d4a373]">Escrito por: {selectedPost.author}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
              {selectedPost.title}
            </h2>

            <div className="space-y-4 font-serif-body text-stone-300 text-sm sm:text-base leading-relaxed">
              {selectedPost.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="text-xs text-stone-400">
                El Garaje Calacaleño • Tradición Viva
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 rounded-xl bg-[#c25e2e] text-white text-xs font-bold"
              >
                Cerrar Lectura
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
