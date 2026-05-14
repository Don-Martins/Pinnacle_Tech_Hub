import { motion } from 'motion/react';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const wishlistItems = [
  { 
    id: '3', 
    title: 'High-Efficiency PCB Layout Designs', 
    creator: 'CircuitSage', 
    price: '$89.00',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=250'
  },
  { 
    id: '4', 
    title: 'Industrial PLC Logic Modules', 
    creator: 'AutomationHub', 
    price: '$249.00',
    thumbnail: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=400&h=250'
  }
];

export default function WishlistPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">My Wishlist</h1>
        <p className="text-on-surface-variant">Projects you've saved for later curiosity.</p>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative aspect-video">
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <button className="absolute top-3 right-3 p-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-error/20 hover:text-error transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1 line-clamp-1">{item.title}</h3>
                <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest mb-4">{item.creator}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-primary">{item.price}</div>
                  <button className="p-2.5 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="glass-panel p-20 text-center space-y-6">
          <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mx-auto text-on-surface-variant/30">
            <Heart className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Your wishlist is empty</h2>
            <p className="text-on-surface-variant">Explore the marketplace to find projects that inspire you.</p>
          </div>
          <Link 
            to="/marketplace" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:scale-[1.02]"
          >
            <span>Browse Marketplace</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
