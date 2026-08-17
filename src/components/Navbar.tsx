import React, { useState, useEffect } from 'react';
import { LogoEmblem } from './LogoEmblem';
import { 
  ShoppingBag, 
  Calendar, 
  Phone, 
  Menu as MenuIcon, 
  X, 
  Flame, 
  Clock, 
  MapPin, 
  Sparkles,
  UtensilsCrossed
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenReservation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine current day special for the notification ticker
  const today = new Date().getDay(); // 0 = Domingo, 5 = Viernes, 6 = Sábado
  let todaySpecialText = "Especiales a la Leña";
  if (today === 5) todaySpecialText = "Hoy Viernes: Pescados & Mariscos Frescos";
  else if (today === 6) todaySpecialText = "Hoy Sábado: Fritada en Paila & Caldo de Gallina";
  else if (today === 0) todaySpecialText = "Hoy Domingo: Encebollado de Albacora & Hornado";
  else todaySpecialText = "Viernes a Domingo: Especiales Criollos a la Leña";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'especiales', label: 'Menú Semanal' },
    { id: 'menu-completo', label: 'Carta' },
    { id: 'historia', label: 'Historia Chagra' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'ubicacion', label: 'Ubicación' },
  ];

  return (
    <>
      {/* Top Banner Ticker with Day Highlights */}
      <div className="bg-[#24130a] border-b border-[#c25e2e]/30 text-xs py-1.5 px-4 text-[#f5efe6]/90 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#c25e2e] text-white font-semibold text-[10px] tracking-wider uppercase">
              <Flame className="w-3 h-3 animate-pulse" /> Sabor a la Leña
            </span>
            <span className="font-medium text-[#fde047] hidden sm:inline">
              {todaySpecialText}
            </span>
            <span className="text-stone-400 hidden md:inline">• Calacalí, Pichincha</span>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-medium ml-auto">
            <a 
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hola%20El%20Garaje%20Calacaleño,%20deseo%20hacer%20una%20consulta`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#f5efe6] hover:text-[#fde047] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#22c55e]" />
              <span>{RESTAURANT_INFO.phoneDisplay}</span>
            </a>
            <span className="text-stone-500 hidden sm:inline">|</span>
            <span className="flex items-center gap-1 text-stone-300 hidden sm:flex">
              <Clock className="w-3.5 h-3.5 text-[#d4a373]" />
              <span>Vie a Dom: 8:30 AM - 8:00 PM</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Single-Line Navbar Contract: [Brand title] — [Nav links] — [Actions] */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#18100a]/95 backdrop-blur-md border-b border-[#c25e2e]/30 shadow-2xl py-2.5' 
            : 'bg-[#1c120a]/80 backdrop-blur-sm border-b border-white/5 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          
          {/* Brand Zone: Exactly one line */}
          <button 
            onClick={() => onNavigate('inicio')} 
            className="flex items-center gap-3 group text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#c25e2e] rounded-md"
          >
            <div className="w-10 h-10 shrink-0">
              <LogoEmblem size="sm" />
            </div>
            <div className="leading-tight">
              <span className="block font-heading text-lg sm:text-xl font-bold tracking-wider text-[#fde047] group-hover:text-white transition-colors">
                EL GARAJE
              </span>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-[#d4a373] font-semibold -mt-0.5">
                CALACALEÑO
              </span>
            </div>
          </button>

          {/* Nav Zone: 4-6 nav links, single-line */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#c25e2e] text-white shadow-sm shadow-[#c25e2e]/40'
                      : 'text-[#f5efe6]/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Zone: 1-2 primary actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 sm:px-3 sm:py-2 rounded-lg bg-[#2d1b11] border border-[#c25e2e]/40 text-[#f5efe6] hover:bg-[#3d2417] hover:border-[#d97706] transition-all flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#c25e2e]"
              aria-label="Ver pedido"
            >
              <ShoppingBag className="w-4 h-4 text-[#fde047]" />
              <span className="text-xs font-semibold hidden sm:inline">Pedido</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#c25e2e] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book Table Action */}
            <button
              onClick={onOpenReservation}
              className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#c25e2e] to-[#a44517] hover:from-[#d9703d] hover:to-[#b84e1b] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-[#c25e2e]/30 flex items-center gap-1.5 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden xs:inline">Reservar</span> Mesa
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 text-[#f5efe6] hover:bg-white/10 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/80 backdrop-blur-md flex flex-col justify-between p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <LogoEmblem size="sm" />
              <div>
                <span className="font-heading text-lg font-bold text-[#fde047]">EL GARAJE</span>
                <span className="block text-xs uppercase tracking-widest text-[#d4a373]">CALACALEÑO</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-white/10 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2 my-auto py-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-[#c25e2e] text-white font-bold'
                    : 'text-stone-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenReservation();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-[#c25e2e] text-white font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Reservar Mesa en Calacalí
            </button>

            <button
              onClick={() => {
                onOpenCart();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-[#2d1b11] border border-[#c25e2e]/50 text-[#fde047] font-semibold flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Ver Pedido para Llevar ({cartCount})
            </button>

            <div className="text-center text-xs text-stone-400 mt-2">
              <p>Centro Histórico de Calacalí • Pichincha</p>
              <p className="text-[#d4a373] mt-0.5">Viernes a Domingo a la Leña</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
