import React, { useState } from 'react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Send, 
  MapPin, 
  Phone, 
  User, 
  Clock, 
  CheckCircle2,
  Sparkles,
  Truck
} from 'lucide-react';

interface OrderCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const OrderCartModal: React.FC<OrderCartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryZone, setDeliveryZone] = useState('Calacalí Centro');
  const [orderNotes, setOrderNotes] = useState('');

  if (!isOpen) return null;

  // Calculate pricing
  const subtotal = cartItems.reduce((acc, item) => {
    // Base dish price
    let itemTotal = item.menuItem.price * item.quantity;
    // Add extra sides approx (each side $1.00 on average)
    if (item.extraSides && item.extraSides.length > 0) {
      itemTotal += item.extraSides.length * 1.00 * item.quantity;
    }
    return acc + itemTotal;
  }, 0);

  const deliveryFee = orderType === 'delivery' ? (deliveryZone === 'Calacalí Centro' ? 1.50 : 3.00) : 0;
  const total = subtotal + deliveryFee;

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || cartItems.length === 0) return;

    let itemsSummary = '';
    cartItems.forEach((item, index) => {
      itemsSummary += `%0A${index + 1}. *${item.quantity}x ${encodeURIComponent(item.menuItem.name)}* ($${(item.menuItem.price * item.quantity).toFixed(2)})`;
      if (item.extraSides.length > 0) {
        itemsSummary += `%0A   + Extras: ${encodeURIComponent(item.extraSides.join(', '))}`;
      }
      if (item.notes) {
        itemsSummary += `%0A   _Nota: ${encodeURIComponent(item.notes)}_`;
      }
    });

    const typeText = orderType === 'pickup' ? '🛍️ *Para Retirar en Local (Calacalí)*' : `🛵 *Entrega a Domicilio:* ${encodeURIComponent(deliveryZone)} - ${encodeURIComponent(deliveryAddress)}`;

    const message = `¡Hola El Garaje Calacaleño! 🐎🍲 Deseo realizar el siguiente pedido:%0A` +
      itemsSummary +
      `%0A%0A------------------------%0A` +
      `💰 *Subtotal:* $${subtotal.toFixed(2)}%0A` +
      (orderType === 'delivery' ? `🛵 *Envío:* $${deliveryFee.toFixed(2)}%0A` : '') +
      `🔥 *TOTAL:* $${total.toFixed(2)}%0A` +
      `------------------------%0A` +
      `👤 *Cliente:* ${encodeURIComponent(customerName)}%0A` +
      `📞 *Teléfono:* ${encodeURIComponent(customerPhone)}%0A` +
      `📍 *Modalidad:* ${typeText}%0A` +
      (orderNotes ? `📝 *Observaciones:* ${encodeURIComponent(orderNotes)}%0A` : '') +
      `%0A¡Espero su confirmación del tiempo estimado!`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#1a110a] border-l border-[#c25e2e]/40 w-full max-w-lg h-full flex flex-col justify-between shadow-2xl text-left">
        
        {/* Cart Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#22160e]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c25e2e]/20 border border-[#c25e2e]/40 flex items-center justify-center text-[#fde047]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">Mi Pedido</h3>
              <span className="text-xs text-stone-400">
                {cartItems.length} {cartItems.length === 1 ? 'producto seleccionado' : 'productos seleccionados'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cartItems.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-xs text-stone-400 hover:text-red-400 p-1.5 transition-colors"
                title="Vaciar pedido"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-14 h-14 text-stone-600 mx-auto mb-3" />
              <h4 className="font-heading text-base font-bold text-white">Tu canasta está vacía</h4>
              <p className="text-stone-400 text-xs mt-1 max-w-xs mx-auto">
                Explora nuestras especialidades criollas a la leña y agrégalas con un clic.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 rounded-lg bg-[#c25e2e] text-white text-xs font-bold"
              >
                Explorar Menú
              </button>
            </div>
          ) : (
            <>
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#231710] border border-white/5 rounded-2xl p-3.5 flex gap-3 items-start justify-between"
                >
                  <img
                    src={item.menuItem.image}
                    alt={item.menuItem.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover bg-stone-900 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h5 className="font-heading text-sm font-bold text-white truncate">
                      {item.menuItem.name}
                    </h5>
                    <span className="text-xs font-bold text-[#fde047] block">
                      ${(item.menuItem.price * item.quantity).toFixed(2)}
                    </span>

                    {/* Extras */}
                    {item.extraSides && item.extraSides.length > 0 && (
                      <span className="text-[11px] text-stone-400 block truncate">
                        + {item.extraSides.join(', ')}
                      </span>
                    )}

                    {/* Notes */}
                    {item.notes && (
                      <span className="text-[11px] text-amber-200/80 italic block truncate">
                        Nota: {item.notes}
                      </span>
                    )}

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                        className="w-6 h-6 rounded-md bg-[#140d08] hover:bg-white/10 flex items-center justify-center text-white text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-white w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                        className="w-6 h-6 rounded-md bg-[#140d08] hover:bg-white/10 flex items-center justify-center text-white text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(idx)}
                    className="text-stone-500 hover:text-red-400 p-1 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Customer & Delivery Form (when items present) */}
        {cartItems.length > 0 && (
          <form onSubmit={handleSendWhatsAppOrder} className="p-5 border-t border-white/10 bg-[#21150d] space-y-4">
            
            {/* Pickup or Delivery Selector */}
            <div className="grid grid-cols-2 gap-2 bg-[#140d08] p-1 rounded-xl border border-white/5">
              <button
                type="button"
                onClick={() => setOrderType('pickup')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  orderType === 'pickup'
                    ? 'bg-[#c25e2e] text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Para Retirar (Calacalí)
              </button>

              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  orderType === 'delivery'
                    ? 'bg-[#c25e2e] text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>A Domicilio</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                required
                placeholder="Tu Nombre *"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="px-3 py-2 rounded-xl bg-[#140d08] border border-white/10 text-white placeholder-stone-400 text-xs focus:outline-none focus:border-[#c25e2e]"
              />

              <input
                type="tel"
                required
                placeholder="Teléfono / WhatsApp *"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="px-3 py-2 rounded-xl bg-[#140d08] border border-white/10 text-white placeholder-stone-400 text-xs focus:outline-none focus:border-[#c25e2e]"
              />
            </div>

            {orderType === 'delivery' && (
              <div className="space-y-2">
                <select
                  value={deliveryZone}
                  onChange={(e) => setDeliveryZone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#140d08] border border-white/10 text-white text-xs focus:outline-none focus:border-[#c25e2e]"
                >
                  <option value="Calacalí Centro (Tarifa $1.50)">Calacalí Centro (Tarifa $1.50)</option>
                  <option value="San Antonio de Pichincha / Mitad del Mundo (Tarifa $3.00)">San Antonio de Pichincha / Mitad del Mundo (Tarifa $3.00)</option>
                  <option value="Pomasqui / La Pampa (Tarifa $3.50)">Pomasqui / La Pampa (Tarifa $3.50)</option>
                  <option value="Reserva Pululahua / Caseríos cercanos (Tarifa $2.50)">Reserva Pululahua / Caseríos cercanos (Tarifa $2.50)</option>
                </select>

                <input
                  type="text"
                  required
                  placeholder="Dirección exacta o referencia de entrega *"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#140d08] border border-white/10 text-white placeholder-stone-400 text-xs focus:outline-none focus:border-[#c25e2e]"
                />
              </div>
            )}

            <input
              type="text"
              placeholder="Observación adicional para cocina..."
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#140d08] border border-white/10 text-white placeholder-stone-400 text-xs focus:outline-none focus:border-[#c25e2e]"
            />

            {/* Price Summary */}
            <div className="pt-3 border-t border-white/10 text-xs space-y-1 text-stone-300">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
              </div>
              {orderType === 'delivery' && (
                <div className="flex justify-between">
                  <span>Envío estimado:</span>
                  <span className="font-semibold text-white">${deliveryFee.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-white pt-1">
                <span>Total a Pagar:</span>
                <span className="text-[#fde047] font-heading text-lg">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Submit Button to WhatsApp */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Pedido por WhatsApp</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
