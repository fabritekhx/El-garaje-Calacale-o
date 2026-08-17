import React, { useState } from 'react';
import { EventItem } from '../types';
import { EVENTS_DATA, RESTAURANT_INFO } from '../data/restaurantData';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Music, 
  Flame, 
  Sparkles, 
  CheckCircle2,
  Share2,
  Ticket,
  ChevronRight
} from 'lucide-react';

interface EventsSectionProps {
  onOpenReservation: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenReservation }) => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpPhone, setRsvpPhone] = useState('');
  const [rsvpGuests, setRsvpGuests] = useState(2);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent || !rsvpName || !rsvpPhone) return;

    setRsvpSuccess(true);
  };

  const getWhatsAppRsvpUrl = () => {
    if (!selectedEvent) return '';
    const text = `¡Hola El Garaje Calacaleño! 🐎🎶 Deseo reservar para el evento: *${encodeURIComponent(selectedEvent.title)}*%0A` +
      `📅 *Fecha:* ${encodeURIComponent(selectedEvent.dateText)}%0A` +
      `⏰ *Hora:* ${encodeURIComponent(selectedEvent.timeText)}%0A` +
      `👤 *Nombre:* ${encodeURIComponent(rsvpName)}%0A` +
      `📞 *Teléfono:* ${encodeURIComponent(rsvpPhone)}%0A` +
      `👥 *Cupos:* ${rsvpGuests} personas%0A%0A` +
      `¡Por favor confírmenme la disponibilidad de mesa para el evento!`;
    return `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`;
  };

  return (
    <section id="eventos" className="py-20 px-4 sm:px-6 bg-[#150f09] relative border-t border-[#c25e2e]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2d1b11] border border-[#c25e2e]/30 text-[#fde047] text-xs font-bold tracking-widest uppercase mb-3">
            <Music className="w-3.5 h-3.5 text-[#22c55e]" />
            Fiestas & Cultura Viva
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Eventos Chagras & Música en Vivo
          </h2>
          <p className="font-serif-body text-stone-300 text-base sm:text-lg mt-3">
            Desde la adrenalina de los rodeos andinos hasta las cálidas noches de fogata y pasillos ecuatorianos. Conoce nuestras próximas fechas y asegura tu mesa.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EVENTS_DATA.map((event) => (
            <div
              key={event.id}
              className="bg-[#20150d] rounded-3xl border border-[#c25e2e]/25 hover:border-[#f59e0b]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:-translate-y-1"
            >
              {/* Event Image */}
              <div className="relative h-60 w-full overflow-hidden bg-stone-900">
                <img
                  src={event.image}
                  alt={event.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20150d] via-transparent to-black/40" />

                {/* Event Category Tag */}
                <div className="absolute top-3.5 left-3.5 bg-[#c25e2e] text-white text-xs font-bold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                  {event.category}
                </div>

                {/* Price tag */}
                <div className="absolute top-3.5 right-3.5 bg-black/80 backdrop-blur-md text-[#fde047] text-xs font-bold px-3 py-1 rounded-md border border-[#fde047]/30">
                  {event.priceTag}
                </div>

                {/* Spots left indicator */}
                <div className="absolute bottom-3.5 left-3.5 text-xs text-stone-300 font-medium bg-[#140d08]/80 px-2.5 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>Quedan {event.spotsLeft} cupos</span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#d4a373] font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.dateText}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {event.timeText}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#fde047] transition-colors leading-snug mb-2">
                    {event.title}
                  </h3>

                  <p className="font-serif-body text-xs text-stone-300 line-clamp-3 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-6">
                    {event.activities.slice(0, 3).map((act, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                        <span className="truncate">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedEvent(event);
                      setRsvpSuccess(false);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#c25e2e] hover:bg-[#d9703d] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <Ticket className="w-4 h-4 text-[#fde047]" />
                    <span>Reservar Asistencia</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Live Peña Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#2a170e] via-[#331c11] to-[#20130b] border border-[#d97706]/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#ea580c]/20 border border-[#ea580c] flex items-center justify-center text-[#fde047] shrink-0">
              <Flame className="w-8 h-8 animate-pulse" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#fde047] block mb-1">
                ¿Deseas organizar un evento privado?
              </span>
              <h4 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Celebra tus Cumpleaños, Paseos o Eventos Corporativos
              </h4>
              <p className="font-serif-body text-xs sm:text-sm text-stone-300 mt-1 max-w-xl">
                Contamos con espacio para hasta 120 personas, menú campestre personalizado a la leña, música de pueblo en vivo y zona de parqueo privado vigilado.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenReservation}
            className="px-6 py-3.5 rounded-xl bg-[#fde047] hover:bg-[#fef08a] text-[#1a110a] font-extrabold text-xs sm:text-sm whitespace-nowrap shadow-lg transition-all shrink-0 cursor-pointer"
          >
            Cotizar Evento Privado
          </button>
        </div>

      </div>

      {/* RSVP Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#1e130b] border border-[#c25e2e]/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left">
            
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 text-stone-300 hover:text-white"
            >
              ✕
            </button>

            {rsvpSuccess ? (
              <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
                <div className="w-14 h-14 rounded-full bg-[#15803d]/20 border border-[#22c55e] text-[#22c55e] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  ¡Pre-Reserva Registrada!
                </h3>
                <p className="font-serif-body text-xs text-stone-300 max-w-sm mx-auto">
                  Gracias {rsvpName}. Para recibir la confirmación de mesa asignada para <strong>{selectedEvent.title}</strong>, por favor pulsa el botón de WhatsApp abajo:
                </p>

                <div className="pt-2">
                  <a
                    href={getWhatsAppRsvpUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Confirmar Cupos por WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <div>
                  <span className="text-xs uppercase font-bold text-[#fde047] tracking-wider block mb-1">
                    {selectedEvent.category} • {selectedEvent.dateText}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-tight">
                    {selectedEvent.title}
                  </h3>
                  <p className="font-serif-body text-xs text-stone-300 mt-2">
                    {selectedEvent.fullStory}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-white mb-1">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre y apellido"
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#140d08] border border-white/10 text-white text-xs focus:outline-none focus:border-[#c25e2e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-white mb-1">WhatsApp de Contacto *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: 099 876 5432"
                      value={rsvpPhone}
                      onChange={(e) => setRsvpPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#140d08] border border-white/10 text-white text-xs focus:outline-none focus:border-[#c25e2e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-white mb-1">Número de Asistentes</label>
                    <select
                      value={rsvpGuests}
                      onChange={(e) => setRsvpGuests(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#140d08] border border-white/10 text-white text-xs focus:outline-none focus:border-[#c25e2e]"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#c25e2e] hover:bg-[#d9703d] text-white font-bold text-sm shadow-lg cursor-pointer"
                >
                  Registrar Asistencia ({selectedEvent.priceTag})
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
