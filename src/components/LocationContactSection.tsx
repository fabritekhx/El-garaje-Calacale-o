import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Navigation, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Car, 
  Compass,
  MessageCircle
} from 'lucide-react';

export const LocationContactSection: React.FC = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactMessage) return;
    setIsSent(true);
  };

  return (
    <section id="ubicacion" className="py-20 px-4 sm:px-6 bg-[#160f0a] relative border-t border-[#c25e2e]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2d1b11] border border-[#c25e2e]/30 text-[#fde047] text-xs font-bold tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
            Visítanos en Calacalí
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ubicación & Contacto
          </h2>
          <p className="font-serif-body text-stone-300 text-base sm:text-lg mt-3">
            Estamos ubicados en el corazón patrimonial de Calacalí, Pichincha. A solo 15 minutos de la Ciudad Mitad del Mundo y en la ruta hacia el Geoparque Volcán Pululahua.
          </p>
        </div>

        {/* 2-Column Grid: Map & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Map Simulation & Directions (7 Cols) */}
          <div className="lg:col-span-7 bg-[#20150d] border border-[#c25e2e]/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Interactive Map Visual */}
            <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10 bg-[#120b06] shadow-inner flex flex-col justify-between p-4">
              
              {/* Stylized Andean Map Background Graphic */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d4a373_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Simulated Map Road Graphics */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,220 Q 150,200 300,140 T 600,100" fill="none" stroke="#78350f" strokeWidth="12" />
                <path d="M 0,220 Q 150,200 300,140 T 600,100" fill="none" stroke="#fde047" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M 280,0 L 300,140 L 340,300" fill="none" stroke="#522508" strokeWidth="8" />
              </svg>

              {/* Pin for El Garaje Calacaleño */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center animate-bounce">
                <div className="bg-[#c25e2e] text-white px-3 py-1 rounded-full shadow-2xl border-2 border-[#fde047] font-bold text-xs flex items-center gap-1.5 whitespace-nowrap">
                  <MapPin className="w-3.5 h-3.5 fill-white text-[#c25e2e]" />
                  <span>El Garaje Calacaleño</span>
                </div>
                <div className="w-2 h-4 bg-[#fde047] rounded-full shadow-md" />
              </div>

              {/* Waypoint labels */}
              <div className="relative z-10 flex justify-between text-[11px] font-bold">
                <span className="bg-black/70 px-2.5 py-1 rounded text-stone-300">
                  ← Desde Quito / Mitad del Mundo (15 min)
                </span>
                <span className="bg-black/70 px-2.5 py-1 rounded text-stone-300">
                  Hacia Volcán Pululahua (10 min) →
                </span>
              </div>

              {/* Coordinates badge bottom */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] text-stone-400 font-mono bg-black/80 px-2 py-0.5 rounded">
                  0° 00' 05" N • 78° 30' 45" W (Línea Equinoccial)
                </span>

                <div className="flex gap-2">
                  <a
                    href="https://maps.google.com/?q=Calacali,Pichincha,Ecuador"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#c25e2e] text-white font-bold text-xs flex items-center gap-1 hover:bg-[#d9703d] transition-all shadow"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Abrir Google Maps</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Step-by-Step Directions */}
            <div>
              <h4 className="font-heading text-base font-bold text-white mb-3 flex items-center gap-2">
                <Car className="w-4 h-4 text-[#fde047]" />
                ¿Cómo Llegar Fácilmente?
              </h4>
              
              <div className="space-y-2.5 text-xs font-serif-body text-stone-300">
                <div className="flex items-start gap-2.5 bg-[#140d08] p-3 rounded-xl border border-white/5">
                  <span className="w-5 h-5 rounded-full bg-[#c25e2e] text-white flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                  <p><strong>Desde Quito:</strong> Toma la Av. Manuel Córdova Galarza pasando el redondel de la Mitad del Mundo en San Antonio de Pichincha.</p>
                </div>
                <div className="flex items-start gap-2.5 bg-[#140d08] p-3 rounded-xl border border-white/5">
                  <span className="w-5 h-5 rounded-full bg-[#c25e2e] text-white flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                  <p><strong>En el Redondel de Calacalí:</strong> Ingresa por la avenida principal hacia el Parque Central histórico (frente a la iglesia patrimonial).</p>
                </div>
                <div className="flex items-start gap-2.5 bg-[#140d08] p-3 rounded-xl border border-white/5">
                  <span className="w-5 h-5 rounded-full bg-[#22c55e] text-white flex items-center justify-center font-bold text-[10px] shrink-0">✓</span>
                  <p><strong>Parqueadero Propio:</strong> Disponemos de estacionamiento privado gratuito vigilado para automóviles, camionetas y buses turísticos.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Details & Direct Inquiry Form (5 Cols) */}
          <div className="lg:col-span-5 bg-[#20150d] border border-[#c25e2e]/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              Información de Contacto
            </h3>

            {/* Direct Info List */}
            <div className="space-y-3.5 text-xs sm:text-sm text-stone-300">
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#c25e2e]/20 text-[#fde047] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">Dirección:</span>
                  <span>{RESTAURANT_INFO.address}</span>
                  <span className="text-[11px] text-[#d4a373] block mt-0.5">{RESTAURANT_INFO.locationLandmark}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">Teléfono & Pedidos:</span>
                  <span>{RESTAURANT_INFO.phoneDisplay}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">Horarios de Atención:</span>
                  <p className="text-xs text-stone-300 mt-1">{RESTAURANT_INFO.schedule.friday}</p>
                  <p className="text-xs text-stone-300">{RESTAURANT_INFO.schedule.saturday}</p>
                  <p className="text-xs text-stone-300">{RESTAURANT_INFO.schedule.sunday}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#fde047]/20 text-[#fde047] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">Correo Electrónico:</span>
                  <span>{RESTAURANT_INFO.email}</span>
                </div>
              </div>

            </div>

            {/* Social Media Links */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-2">
                Síguenos en Redes Sociales
              </span>
              <div className="flex gap-2">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hola%20El%20Garaje%20Calacaleño`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#22c55e]/20 hover:bg-[#22c55e] text-[#22c55e] hover:text-white transition-all flex items-center gap-1.5 text-xs font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#ec4899]/20 hover:bg-[#ec4899] text-[#ec4899] hover:text-white transition-all flex items-center gap-1.5 text-xs font-bold"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#3b82f6]/20 hover:bg-[#3b82f6] text-[#3b82f6] hover:text-white transition-all flex items-center gap-1.5 text-xs font-bold"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="font-heading text-sm font-bold text-white mb-3">
                Envíanos un Mensaje
              </h4>

              {isSent ? (
                <div className="bg-[#15803d]/20 border border-[#22c55e] p-4 rounded-xl text-center text-xs text-stone-200">
                  <CheckCircle2 className="w-6 h-6 text-[#22c55e] mx-auto mb-1.5" />
                  <span className="font-bold text-white block">¡Mensaje Enviado con Éxito!</span>
                  <span>Nos pondremos en contacto contigo a la brevedad posible.</span>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Tu Nombre"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#140d08] border border-white/10 text-white placeholder-stone-400 text-xs focus:outline-none focus:border-[#c25e2e]"
                  />
                  <input
                    type="email"
                    placeholder="Tu Correo Electrónico"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#140d08] border border-white/10 text-white placeholder-stone-400 text-xs focus:outline-none focus:border-[#c25e2e]"
                  />
                  <textarea
                    required
                    rows={3}
                    placeholder="¿En qué te podemos ayudar? (Pregunta sobre platos, eventos, reservas...)"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#140d08] border border-white/10 text-white placeholder-stone-400 text-xs focus:outline-none focus:border-[#c25e2e]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#c25e2e] hover:bg-[#d9703d] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Consulta</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
