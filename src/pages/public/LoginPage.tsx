import { motion } from 'motion/react';
import { Layers, ArrowRight, Github, Mail, Lock, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import React, { useState } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useStore();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      setUser({
        id: '1',
        name: 'Elite Engineer',
        email: 'engineer@pinnacle.hub',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
        role: 'buyer'
      });
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] size-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] left-[-10%] size-[600px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="glass-panel p-8 lg:p-12 relative overflow-hidden">
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
              <Layers className="size-8 text-primary group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-sans font-black tracking-tighter text-on-surface">Pinnacle Hub</span>
            </Link>
            <h1 className="text-3xl font-sans font-black text-on-surface tracking-tight mb-2">Welcome Back</h1>
            <p className="text-on-surface-variant text-sm font-medium">Continue your engineering journey.</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Email Address</label>
                <div className="relative group">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                   <input 
                     type="email" 
                     placeholder="engineer@pinnacle.hub" 
                     required
                     className="w-full h-14 bg-surface-container-high border border-outline-variant/10 rounded-2xl pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all"
                   />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center pl-1">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Password</label>
                  <button type="button" className="text-[10px] font-bold text-primary hover:underline">Forgot?</button>
                </div>
                <div className="relative group">
                   <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                   <input 
                     type="password" 
                     placeholder="••••••••" 
                     required
                     className="w-full h-14 bg-surface-container-high border border-outline-variant/10 rounded-2xl pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all"
                   />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-14 bg-primary text-on-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:scale-100"
            >
              {loading ? "Authenticating..." : (
                <>Sign into Workspace <ArrowRight className="size-5" /></>
              )}
            </button>
          </form>

          <div className="my-8 flex items-center gap-4">
            <div className="h-[1px] flex-grow bg-outline-variant/10" />
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Or continue with</span>
            <div className="h-[1px] flex-grow bg-outline-variant/10" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="h-12 flex items-center justify-center gap-2 bg-surface-container border border-outline-variant/10 rounded-xl text-xs font-bold hover:bg-surface-container-highest transition-all">
              <Github className="size-4" /> GitHub
            </button>
            <button className="h-12 flex items-center justify-center gap-2 bg-surface-container border border-outline-variant/10 rounded-xl text-xs font-bold hover:bg-surface-container-highest transition-all">
              <GoogleLogo className="size-4" /> Google
            </button>
          </div>

          <p className="text-center text-xs font-medium text-on-surface-variant">
            Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Start Creating</Link>
          </p>

          {/* Security Badge */}
          <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center justify-center gap-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
            <ShieldCheck className="size-3 text-green-500" /> AES-256 Protected Workspace
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function GoogleLogo({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
       <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
