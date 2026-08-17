import React, { useState } from 'react';
import { LogoEmblem } from './LogoEmblem';
import { 
  Flame, 
  Award, 
  MapPin, 
  Heart, 
  Compass, 
  ShieldCheck, 
  Users, 
  ChefHat,
  Sparkles
} from 'lucide-react';

export const HistorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'origen' | 'chagra' | 'fogones'>('origen');

  const historyImages = [
    {
      title: "Pailas de Bronce Ancestrales",
      desc: "Nuestras pailas forjadas a mano distribuyen el calor de manera uniforme para una fritada inigualable.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "La Cultura del Chagra en Calacalí",
      desc: "Homenaje a los jinetes de los páramos andinos, su vestimenta de poncho y zamarro, y su nobleza.",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Leña de Eucalipto y Fuego Vivo",
      desc: "El aroma rústico de la madera seca impregna sutilmente cada cocción tradicional.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="historia" className="py-20 px-4 sm:px-6 bg-[#18110a] relative border-t border-[#c25e2e]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2d1b11] border border-[#c25e2e]/30 text-[#fde047] text-xs font-bold tracking-widest uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-[#d4a373]" />
            Nuestras Raíces & Cultura
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            La Historia de El Garaje Calacaleño
          </h2>
          <p className="font-serif-body text-stone-300 text-base sm:text-lg mt-3">
            Nacimos en 2019 con un propósito inquebrantable: rescatar las recetas secretas de las abuelas chagras y cocinarlas con la misma pasión, fuego de leña y generosidad de antaño.
          </p>
        </div>

        {/* Story Grid with Rich Rustic Card & Emblem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#221710] p-8 rounded-3xl border border-[#c25e2e]/30 shadow-2xl relative">
            <div className="absolute top-4 left-4 text-xs font-bold text-[#d4a373] uppercase tracking-widest">
              Identidad Calacaleña
            </div>
            
            <div className="my-6">
              <LogoEmblem size="lg" />
            </div>

            <div className="text-center space-y-2">
              <span className="font-heading text-xl font-bold text-white block">
                Comida Típica Tradicional del Ecuador
              </span>
              <p className="font-serif-body text-xs text-stone-300 italic">
                "Donde el jinete del páramo y la familia se encuentran alrededor del fogón"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 w-full grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <span className="font-heading font-extrabold text-[#fde047] text-base block">2019</span>
                <span className="text-stone-400 text-[10px] uppercase">Fundación</span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-[#fde047] text-base block">100%</span>
                <span className="text-stone-400 text-[10px] uppercase">A la Leña</span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-[#fde047] text-base block">4ta</span>
                <span className="text-stone-400 text-[10px] uppercase">Generación</span>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab switchers */}
            <div className="flex gap-2 border-b border-white/10 pb-3">
              <button
                onClick={() => setActiveTab('origen')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'origen'
                    ? 'bg-[#c25e2e] text-white shadow-md'
                    : 'text-stone-400 hover:text-white bg-white/5'
                }`}
              >
                El Origen del Garaje
              </button>
              <button
                onClick={() => setActiveTab('chagra')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'chagra'
                    ? 'bg-[#c25e2e] text-white shadow-md'
                    : 'text-stone-400 hover:text-white bg-white/5'
                }`}
              >
                La Cultura Chagra
              </button>
              <button
                onClick={() => setActiveTab('fogones')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'fogones'
                    ? 'bg-[#c25e2e] text-white shadow-md'
                    : 'text-stone-400 hover:text-white bg-white/5'
                }`}
              >
                El Fogón & Las Pailas
              </button>
            </div>

            {/* Tab 1: Origen */}
            {activeTab === 'origen' && (
              <div className="space-y-4 font-serif-body text-stone-300 text-sm sm:text-base leading-relaxed animate-in fade-in">
                <p>
                  Todo comenzó en el patio y garaje de una casa familiar en el centro histórico de <strong className="text-white">Calacalí</strong>. Los fines de semana, los vecinos y visitantes que regresaban del cráter del Pululahua eran atraídos por el irresistible aroma a leña de eucalipto, panela caliente y cerdo dorándose en paila de bronce.
                </p>
                <p>
                  Lo que empezó como un encuentro entre amigos jinetes para compartir un buen plato de fritada y un canelazo se transformó en <strong className="text-[#fde047]">El Garaje Calacaleño</strong>, un templo gastronómico que hoy recibe a cientos de familias que buscan el verdadero sabor criollo ecuatoriano.
                </p>
                <div className="bg-[#241710] p-4 rounded-2xl border-l-4 border-[#c25e2e] text-xs text-stone-200">
                  <span className="font-bold text-white block mb-1">El Compromiso con Nuestra Tierra:</span>
                  Compramos nuestros ingredientes directamente a agricultores de Calacalí, Yunguilla, Nieblí y San Antonio de Pichincha, garantizando frescura y apoyando a las familias campesinas.
                </div>
              </div>
            )}

            {/* Tab 2: Chagra */}
            {activeTab === 'chagra' && (
              <div className="space-y-4 font-serif-body text-stone-300 text-sm sm:text-base leading-relaxed animate-in fade-in">
                <p>
                  El <strong className="text-white">Chagra</strong> es el jinete de las cumbres andinas, el guardián del ganado de lidia en los páramos fríos. Su poncho de lana pesada, su zamarro de cuero curtido y su sombrero de paño son símbolos de valentía y hospitalidad.
                </p>
                <p>
                  En Calacalí, el rodeo chagra es una fiesta de hermandad. Nuestra decoración rústica —con riendas, estribos de madera, lazos de cuero y lámparas de hojalata— es un tributo viviente a esta cultura que mantiene vivo el espíritu del Ecuador profundo.
                </p>
                <div className="flex items-center gap-3 bg-[#241710] p-3.5 rounded-xl border border-white/5 text-xs text-[#fde047]">
                  <Sparkles className="w-5 h-5 shrink-0 text-[#ea580c]" />
                  <span>Cada comida en El Garaje es una fiesta campesina: platos generosos servidos con la hospitalidad de un verdadero anfitrión chagra.</span>
                </div>
              </div>
            )}

            {/* Tab 3: Fogones */}
            {activeTab === 'fogones' && (
              <div className="space-y-4 font-serif-body text-stone-300 text-sm sm:text-base leading-relaxed animate-in fade-in">
                <p>
                  En una época donde la cocina rápida y las estufas eléctricas dominan, en El Garaje Calacaleño nos mantenemos fieles al <strong className="text-white">fuego sagrado de la leña</strong>.
                </p>
                <p>
                  Utilizamos leña de eucalipto seco cortada en los bosques andinos. El humo aromatiza suavemente los caldos de gallina criolla que hierven durante horas en ollas de barro cocido, mientras que las pailas de bronce macizo logran la fritada más crocante y tierna de la provincia de Pichincha.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#140d08] p-3 rounded-xl border border-white/5">
                    <span className="font-bold text-[#fde047] block mb-1">Ollas de Barro</span>
                    <span className="text-stone-400">Concentran los nutrientes y el calor de los caldos y encebollados.</span>
                  </div>
                  <div className="bg-[#140d08] p-3 rounded-xl border border-white/5">
                    <span className="font-bold text-[#fde047] block mb-1">Pailas de Bronce</span>
                    <span className="text-stone-400">El secreto para dorar el cerdo con su propia manteca natural.</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {historyImages.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#201610] rounded-2xl border border-[#c25e2e]/20 overflow-hidden group shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201610] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h4 className="font-heading text-base font-bold text-white mb-1.5 group-hover:text-[#fde047] transition-colors">
                  {item.title}
                </h4>
                <p className="font-serif-body text-xs text-stone-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
