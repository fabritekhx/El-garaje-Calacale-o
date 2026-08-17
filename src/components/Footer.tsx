import React from 'react';
import { LogoEmblem } from './LogoEmblem';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  Flame, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Heart,
  ChevronUp
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f0a06] text-[#e8dfd5] border-t-2 border-[#78350f] relative overflow-hidden">
      
      {/* Decorative top wooden strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#78350f] via-[#d97706] to-[#78350f]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Emblem (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12">
                <LogoEmblem size="sm" />
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-[#fde047] block">
                  EL GARAJE CALACALEÑO
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#d4a373]">
                  Comida Típica Tradicional del Ecuador
                </span>
              </div>
            </div>

            <p className="font-serif-body text-xs text-stone-400 leading-relaxed">
              Rescatando los sabores del páramo ecuatoriano, cocinando con leña de eucalipto en ancestrales pailas de bronce. Un homenaje a la cultura chagra y a las familias de nuestra tierra.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#fde047]">
              <Flame className="w-4 h-4 text-[#ea580c]" />
              <span className="font-semibold">Desde 2019 • Calacalí, Pichincha</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#22c55e]/20 text-[#22c55e] hover:bg-[#22c55e] hover:text-white transition-all flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#ec4899]/20 text-[#ec4899] hover:bg-[#ec4899] hover:text-white transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#3b82f6]/20 text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-all flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Menú de la Semana (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Especiales Semanales
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300 font-serif-body">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white block">Viernes de Pescados:</strong>
                  <span>Trucha al ajillo montañés, corvina a la leña y ceviches.</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white block">Sábados Chagras:</strong>
                  <span>Fritada en paila de bronce y caldo de gallina criolla.</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white block">Domingos Familiares:</strong>
                  <span>Encebollado de albacora, hornado y seco de chivo.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Enlaces Rápidos (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => onNavigate('inicio')} className="hover:text-[#fde047] transition-colors cursor-pointer">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('especiales')} className="hover:text-[#fde047] transition-colors cursor-pointer">
                  Menú Semanal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu-completo')} className="hover:text-[#fde047] transition-colors cursor-pointer">
                  Carta Completa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('historia')} className="hover:text-[#fde047] transition-colors cursor-pointer">
                  Cultura Chagra
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('eventos')} className="hover:text-[#fde047] transition-colors cursor-pointer">
                  Eventos & Rodeo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ubicacion')} className="hover:text-[#fde047] transition-colors cursor-pointer">
                  Cómo Llegar
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto & Reservas (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Visítanos
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c25e2e] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span>{RESTAURANT_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#d4a373] shrink-0" />
                <span>Vie a Dom: 8:30 AM - 8:00 PM</span>
              </div>
            </div>

            <button
              onClick={onOpenReservation}
              className="w-full mt-2 py-2.5 px-4 rounded-xl bg-[#c25e2e] hover:bg-[#d9703d] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              Reservar Mesa Online
            </button>
          </div>

        </div>

        {/* Bottom copyright and top scroll */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            <p>© {new Date().getFullYear()} El Garaje Calacaleño. Todos los derechos reservados.</p>
            <p className="text-[11px] text-stone-600 mt-0.5">Calacalí • Mitad del Mundo • Pichincha • Ecuador</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-stone-400">Hecho con orgullo por las tradiciones del Ecuador</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
              title="Volver arriba"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
