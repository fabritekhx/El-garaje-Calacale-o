import React, { useState } from 'react';
import { ReservationData } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  Sparkles, 
  Flame, 
  Share2, 
  AlertCircle,
  Wine
} from 'lucide-react';

interface ReservationSectionProps {
  initialDate?: string;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ initialDate }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    email: '',
    date: initialDate || '',
    time: '13:00',
    guests: 4,
    area: 'salon-rustico',
    occasion: 'almuerzo-familiar',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedData, setConfirmedData] = useState<ReservationData | null>(null);

  const timeSlots = [
    '09:00', '10:30', '12:00', '13:00', '14:00', '15:00', '16:30', '18:00', '19:30'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;
    
    setConfirmedData({ ...formData });
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    if (!confirmedData) return '';
    const areaName = confirmedData.area === 'salon-rustico' ? 'Salón Rústico Principal' : confirmedData.area === 'terraza-campestre' ? 'Terraza Campestre' : 'Área Fogata & Tradición';
    const text = `¡Hola El Garaje Calacaleño! 🐎🍲 Deseo confirmar mi reserva de mesa:%0A%0A` +
      `👤 *Nombre:* ${encodeURIComponent(confirmedData.name)}%0A` +
      `📞 *Teléfono:* ${encodeURIComponent(confirmedData.phone)}%0A` +
      `📅 *Fecha:* ${confirmedData.date}%0A` +
      `⏰ *Hora:* ${confirmedData.time}%0A` +
      `👥 *Personas:* ${confirmedData.guests} comensales%0A` +
      `🏡 *Área:* ${encodeURIComponent(areaName)}%0A` +
      `🎉 *Ocasión:* ${encodeURIComponent(confirmedData.occasion)}%0A` +
      (confirmedData.notes ? `📝 *Detalles:* ${encodeURIComponent(confirmedData.notes)}%0A` : '') +
      `%0A¡Muchas gracias, nos vemos en Calacalí!`;
    return `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`;
  };

  return (
    <section id="reservas" className="py-20 px-4 sm:px-6 bg-rustic-wood relative border-t border-[#c25e2e]/20">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2d1b11] border border-[#c25e2e]/30 text-[#fde047] text-xs font-bold tracking-widest uppercase mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#22c55e]" />
            Atención Personalizada
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Reserva tu Mesa Campestre
          </h2>
          <p className="font-serif-body text-stone-300 text-base sm:text-lg mt-3">
            Asegura tu lugar junto a las brasas o en nuestra terraza con vista a las montañas de Calacalí. Ideal para paseos de fin de semana, familias y grupos.
          </p>
        </div>

        {/* Reservation Card Form or Confirmation View */}
        <div className="bg-[#21160e] border border-[#c25e2e]/35 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {isSubmitted && confirmedData ? (
            /* Confirmation Voucher */
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-[#15803d]/20 border border-[#22c55e] text-[#22c55e] rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#fde047] font-bold block mb-1">
                  ¡Reserva Registrada con Éxito!
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                  Te Esperamos en El Garaje Calacaleño, {confirmedData.name}
                </h3>
              </div>

              {/* Summary ticket */}
              <div className="max-w-md mx-auto bg-[#160e08] border border-dashed border-[#c25e2e]/50 rounded-2xl p-5 text-left text-xs sm:text-sm text-stone-300 space-y-2.5">
                <div className="flex justify-between pb-2 border-b border-white/10 font-bold text-white">
                  <span>Código de Reserva:</span>
                  <span className="text-[#fde047]">#GC-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Fecha:</span>
                  <span className="font-semibold text-white">{confirmedData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Hora:</span>
                  <span className="font-semibold text-white">{confirmedData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Personas:</span>
                  <span className="font-semibold text-white">{confirmedData.guests} comensales</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Área:</span>
                  <span className="font-semibold text-white">
                    {confirmedData.area === 'salon-rustico' ? 'Salón Rústico Principal' : confirmedData.area === 'terraza-campestre' ? 'Terraza Campestre' : 'Área Fogata & Tradición'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Ubicación:</span>
                  <span className="font-semibold text-[#d4a373]">Calacalí, Pichincha</span>
                </div>
              </div>

              <p className="text-xs text-stone-300 max-w-md mx-auto">
                Hemos pre-registrado tu mesa. Para confirmación prioritaria y coordinar bienvenida con canelazos calientes, pulsa el botón de WhatsApp abajo:
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Enviar Confirmación por WhatsApp</span>
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 font-semibold text-sm transition-colors"
                >
                  Modificar Reserva
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Familia Morales o Carlos Terán"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140d08] border border-white/10 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-[#c25e2e]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: 099 876 5432"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140d08] border border-white/10 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-[#c25e2e]"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                    Fecha de la Visita *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140d08] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c25e2e]"
                  />
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                    Número de Personas
                  </label>
                  <div className="flex items-center gap-2">
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl bg-[#140d08] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c25e2e]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 30].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'persona' : 'personas'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Time Slot Picker */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                  Hora de Llegada
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, time: slot })}
                      className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        formData.time === slot
                          ? 'bg-[#c25e2e] text-white shadow-md'
                          : 'bg-[#140d08] text-stone-300 hover:bg-[#251910] border border-white/5'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ambiance Area Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                  Ambiente Preferido
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, area: 'salon-rustico' })}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      formData.area === 'salon-rustico'
                        ? 'bg-[#c25e2e]/20 border-[#c25e2e] ring-1 ring-[#c25e2e]'
                        : 'bg-[#140d08] border-white/5 hover:bg-[#251910]'
                    }`}
                  >
                    <span className="font-heading text-sm font-bold text-white block">Salón Rústico</span>
                    <span className="text-[11px] text-stone-300 block mt-0.5">Madera maciza, aperos chagras y aroma a leña</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, area: 'terraza-campestre' })}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      formData.area === 'terraza-campestre'
                        ? 'bg-[#c25e2e]/20 border-[#c25e2e] ring-1 ring-[#c25e2e]'
                        : 'bg-[#140d08] border-white/5 hover:bg-[#251910]'
                    }`}
                  >
                    <span className="font-heading text-sm font-bold text-white block">Terraza Campestre</span>
                    <span className="text-[11px] text-stone-300 block mt-0.5">Vista panorámica a las montañas de Calacalí</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, area: 'area-fogata' })}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      formData.area === 'area-fogata'
                        ? 'bg-[#c25e2e]/20 border-[#c25e2e] ring-1 ring-[#c25e2e]'
                        : 'bg-[#140d08] border-white/5 hover:bg-[#251910]'
                    }`}
                  >
                    <span className="font-heading text-sm font-bold text-white block">Área de Fogata</span>
                    <span className="text-[11px] text-stone-300 block mt-0.5">Fuego vivo, canelazos y peña musical</span>
                  </button>

                </div>
              </div>

              {/* Special Occasion & Notes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                    Motivo de la Visita
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140d08] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c25e2e]"
                  >
                    <option value="almuerzo-familiar">Almuerzo Familiar de Fin de Semana</option>
                    <option value="cumpleanos">Celebración de Cumpleaños (¡Cortesía de Canelazos!)</option>
                    <option value="paseo-turistico">Paseo Turístico / Mitad del Mundo / Pululahua</option>
                    <option value="reunion-amigos">Reunión de Amigos / Peña</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                    Comentarios o Pedidos Especiales (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Silla para bebé, preferencia de mesa cerca a la ventana..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140d08] border border-white/10 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-[#c25e2e]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#fde047]" />
                  <span>Sin costo de reserva • Confirmación inmediata</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#c25e2e] hover:bg-[#d9703d] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-[#c25e2e]/30 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirmar Reserva de Mesa</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
