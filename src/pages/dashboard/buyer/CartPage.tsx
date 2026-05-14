import { motion } from 'motion/react';
import { ShoppingBag, X, ArrowRight, CreditCard, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const initialCart = [
  { 
    id: '3', 
    title: 'High-Efficiency PCB Layout Designs', 
    creator: 'CircuitSage', 
    price: 89.00,
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=250'
  }
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const removeItem = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Shopping Cart</h1>
        <p className="text-on-surface-variant">Review the projects before finalizing your engineering kit.</p>
      </div>

      {cart.length > 0 ? (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-4 flex gap-6 items-center flex-col sm:flex-row"
              >
                <div className="w-full sm:w-40 aspect-video rounded-lg overflow-hidden shrink-0">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 text-on-surface-variant hover:text-error transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-4 capitalize">By {item.creator}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold text-primary">${item.price.toFixed(2)}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="glass-panel p-8 space-y-6">
              <h2 className="text-xl font-bold tracking-tight border-b border-white/5 pb-4">Order Summary</h2>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Subtotal</span>
                  <span className="text-on-surface font-semibold font-mono">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Service Fee (5%)</span>
                  <span className="text-on-surface font-semibold font-mono">${tax.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary font-mono">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link 
                to="/dashboard/checkout"
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-center gap-4 pt-2">
                <CreditCard className="w-5 h-5 text-on-surface-variant/30" />
                <div className="w-[1px] h-4 bg-white/5" />
                <ShieldCheck className="w-5 h-5 text-on-surface-variant/30" />
              </div>
            </div>

            <div className="glass-card p-6 text-center text-xs text-on-surface-variant leading-relaxed">
              By proceeding, you agree to our <span className="text-on-surface font-medium underline">Terms of Service</span> and <span className="text-on-surface font-medium underline">Refund Policy</span>.
            </div>
          </div>
        </div>
      ) : (
        <div className="glass-panel p-20 text-center space-y-6">
          <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mx-auto text-on-surface-variant/30">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Your cart is empty</h2>
            <p className="text-on-surface-variant">Looks like you haven't added any project files yet.</p>
          </div>
          <Link 
            to="/marketplace" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:scale-[1.02]"
          >
            <span>Start Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
