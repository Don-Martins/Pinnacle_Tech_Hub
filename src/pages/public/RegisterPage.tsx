import { motion } from 'motion/react';
import { Layers, ArrowRight, Github, Mail, Lock, User, Briefcase, GraduationCap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import React, { useState } from 'react';
import { cn } from '../../lib/utils';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { setUser } = useStore();
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: '2',
        name: 'New Innovator',
        email: 'innovator@pinnacle.hub',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100',
        role: role
      });
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-4 relative overflow-hidden py-12 lg:py-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] size-[600px] bg-tertiary/10 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-[20%] right-[-10%] size-[600px] bg-primary/10 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <div className="glass-panel p-8 lg:p-12">
          <div className="text-center mb-10">
             <Link to="/" className="inline-flex items-center gap-2 mb-6">
                <Layers className="size-8 text-primary" />
                <span className="text-2xl font-sans font-black tracking-tighter text-on-surface">Pinnacle Hub</span>
             </Link>
             <h1 className="text-3xl lg:text-4xl font-sans font-black text-on-surface tracking-tight mb-2">Join the Elite</h1>
             <p className="text-on-surface-variant text-sm font-medium">Create your account and start building amazing things.</p>
          </div>

          <form className="space-y-8" onSubmit={handleRegister}>
            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button"
                onClick={() => setRole('buyer')}
                className={cn(
                  "p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 text-center",
                  role === 'buyer' 
                    ? "bg-primary/10 border-primary text-primary" 
                    : "bg-surface-container border-outline-variant/10 text-on-surface-variant hover:border-outline-variant/30"
                )}
              >
                <div className={cn("p-3 rounded-xl", role === 'buyer' ? "bg-primary text-on-primary" : "bg-surface-container-high")}>
                  <GraduationCap className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">I'm a Builder</h3>
                  <p className="text-[10px] uppercase font-bold opacity-70 tracking-widest mt-1">Want to learn & buy</p>
                </div>
              </button>

              <button 
                type="button"
                onClick={() => setRole('seller')}
                className={cn(
                  "p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 text-center",
                  role === 'seller' 
                    ? "bg-secondary/10 border-secondary text-secondary" 
                    : "bg-surface-container border-outline-variant/10 text-on-surface-variant hover:border-outline-variant/30"
                )}
              >
                <div className={cn("p-3 rounded-xl", role === 'seller' ? "bg-secondary text-on-secondary" : "bg-surface-container-high")}>
                  <Briefcase className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">I'm a Creator</h3>
                  <p className="text-[10px] uppercase font-bold opacity-70 tracking-widest mt-1">Want to sell & mentor</p>
                </div>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                  <input type="text" placeholder="John Doe" required className="w-full h-14 bg-surface-container-high border border-outline-variant/10 rounded-2xl pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                  <input type="email" placeholder="john@example.com" required className="w-full h-14 bg-surface-container-high border border-outline-variant/10 rounded-2xl pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all" />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                  <input type="password" placeholder="••••••••" required className="w-full h-14 bg-surface-container-high border border-outline-variant/10 rounded-2xl pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all" />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full h-16 bg-primary text-on-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 disabled:opacity-50"
            >
              {loading ? "Initializing..." : <>Create Account <ArrowRight className="size-5" /></>}
            </button>
          </form>

          <p className="mt-8 text-center text-xs font-medium text-on-surface-variant">
            Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log in here</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
