/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WeeklySpecials } from './components/WeeklySpecials';
import { MenuSection } from './components/MenuSection';
import { DishDetailModal } from './components/DishDetailModal';
import { OrderCartModal } from './components/OrderCartModal';
import { HistorySection } from './components/HistorySection';
import { EventsSection } from './components/EventsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { LocationContactSection } from './components/LocationContactSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { 
  ShoppingBag, 
  MessageCircle, 
  CheckCircle2, 
  Calendar,
  Flame
} from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Show a brief rustic toast notification on cart actions
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (
    dish: MenuItem, 
    quantity: number = 1, 
    extraSides: string[] = [], 
    notes?: string
  ) => {
    setCartItems(prev => {
      // Check if exact same item with same sides and notes exists
      const existingIdx = prev.findIndex(item => 
        item.menuItem.id === dish.id && 
        JSON.stringify(item.extraSides) === JSON.stringify(extraSides) &&
        item.notes === notes
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prev, { menuItem: dish, quantity, extraSides, notes }];
      }
    });

    triggerToast(`¡"${dish.name}" añadido a tu pedido!`);
  };

  const handleUpdateCartQuantity = (index: number, newQty: number) => {
    setCartItems(prev => {
      const updated = [...prev];
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
    triggerToast("Producto eliminado del pedido");
  };

  const handleClearCart = () => {
    setCartItems([]);
    triggerToast("Canasta de pedido vaciada");
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Monitor scroll for updating activeSection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'especiales', 'menu-completo', 'historia', 'eventos', 'ubicacion', 'reservas'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#150f0a] text-[#f7f1e7] flex flex-col font-sans">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-24 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#2b170e] text-white border border-[#d97706] px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        cartCount={totalItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => handleNavigate('reservas')}
      />

      <main className="flex-1">
        {/* 1. Hero Section with Central Emblem Logo */}
        <Hero
          onNavigateToSpecials={() => handleNavigate('especiales')}
          onOpenReservation={() => handleNavigate('reservas')}
          onNavigateToMenu={() => handleNavigate('menu-completo')}
        />

        {/* 2. Menú de la Semana (Viernes de Pescados, Sábados de Fritadas & Caldo, Domingos de Encebollado) */}
        <WeeklySpecials
          onSelectDish={(dish) => setSelectedDish(dish)}
          onAddToCart={(dish) => handleAddToCart(dish, 1)}
          onOpenReservation={() => handleNavigate('reservas')}
        />

        {/* 3. Menú Completo / Carta Filterable Catalog */}
        <MenuSection
          onSelectDish={(dish) => setSelectedDish(dish)}
          onAddToCart={(dish) => handleAddToCart(dish, 1)}
        />

        {/* 4. Historia & Cultura Chagra en Calacalí */}
        <HistorySection />

        {/* 5. Eventos Chagras, Rodeos & Música en Vivo */}
        <EventsSection
          onOpenReservation={() => handleNavigate('reservas')}
        />

        {/* 6. Testimonios & Calificaciones de Clientes */}
        <TestimonialsSection />

        {/* 7. Crónicas del Fogón / Blog de Tradiciones */}
        <BlogSection />

        {/* 8. Mapa de Ubicación & Cómo Llegar desde Quito */}
        <LocationContactSection />

        {/* 9. Sistema de Reserva de Mesas */}
        <ReservationSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReservation={() => handleNavigate('reservas')}
      />

      {/* Floating Action Buttons for Quick Access */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Fast Contact */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hola%20El%20Garaje%20Calacaleño,%20quisiera%20hacer%20una%20consulta`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-[#22c55e] text-white shadow-xl hover:bg-[#16a34a] hover:scale-110 transition-all flex items-center justify-center cursor-pointer group"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold px-0 group-hover:px-2">
            WhatsApp Directo
          </span>
        </a>

        {/* Floating Cart Drawer Trigger */}
        {totalItemsCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-3.5 rounded-full bg-[#c25e2e] text-white shadow-xl hover:bg-[#d9703d] hover:scale-110 transition-all flex items-center justify-center cursor-pointer relative"
            aria-label="Abrir Pedido"
          >
            <ShoppingBag className="w-6 h-6 text-[#fde047]" />
            <span className="absolute -top-1 -right-1 bg-[#ea580c] text-white text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              {totalItemsCount}
            </span>
          </button>
        )}
      </div>

      {/* Modals */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
      />

      <OrderCartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
