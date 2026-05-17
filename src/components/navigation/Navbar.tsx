import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { Menu, X, Rocket, ShoppingCart, User, Moon, Sun, Bell, Search, Layers } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const { theme, setTheme, user } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 shadow-sm overflow-x-hidden transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <span className="font-sans text-xl font-extrabold tracking-tighter text-on-surface">Pinnacle Hub</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-bold transition-all hover:text-primary relative group py-2",
                    location.pathname === link.href ? "text-primary" : "text-on-surface-variant"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300",
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden lg:flex items-center bg-surface-container-high rounded-full px-4 py-2 border border-outline-variant/10 focus-within:border-primary/50 transition-all shadow-inner">
              <Search className="w-4 h-4 text-on-surface-variant mr-2" />
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="bg-transparent border-none focus:outline-none text-xs w-32 xl:w-48 placeholder:text-on-surface-variant/50"
              />
            </div>

            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 text-on-surface-variant hover:text-primary transition-all rounded-full hover:bg-surface-variant/50 active:scale-95"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {user ? (
              <Link to="/dashboard" className="p-1 border border-outline-variant/20 rounded-full hover:border-primary/50 transition-all">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary shadow-sm overflow-hidden">
                  {user.avatar ? <img src={user.avatar} alt="" className="w-full h-full object-cover" /> : user.name[0]}
                </div>
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="hidden sm:block text-sm font-bold text-on-surface-variant hover:text-primary px-4 py-2 transition-colors">
                  Login
                </Link>
                <Link to="/register" className="text-sm font-bold bg-primary text-on-primary px-5 py-2 rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all shrink-0">
                  Register
                </Link>
              </div>
            )}

            <button 
              className="md:hidden p-2 text-on-surface-variant hover:text-on-surface active:scale-90 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-container-low border-b border-outline-variant/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-lg font-medium text-on-surface hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-outline-variant/10">
                <Link 
                  to="/login" 
                  className="block w-full text-center py-3 rounded-xl bg-primary text-on-primary font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
