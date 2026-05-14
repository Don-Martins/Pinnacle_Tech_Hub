import { motion } from 'motion/react';
import { CreditCard, ShieldCheck, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CheckoutPage() {
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const navigate = useNavigate();

  const handlePayment = () => {
    setStep('payment');
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  if (step === 'success') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">Order Successful!</h1>
          <p className="text-on-surface-variant max-w-md mx-auto">
            Your engineering resources are now available in your library. A confirmation email has been sent to your inbox.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/dashboard/learning" 
            className="px-8 py-3 bg-primary text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:scale-[1.02]"
          >
            Start Learning
          </Link>
          <Link 
            to="/dashboard/overview" 
            className="px-8 py-3 bg-surface-container-high text-on-surface font-bold rounded-xl transition-all border border-outline-variant hover:bg-surface-variant"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 bg-surface-container rounded-lg text-on-surface-variant hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Checkout</h1>
          <p className="text-sm text-on-surface-variant">Complete your transaction to unlock project access.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: Form */}
        <div className="space-y-8">
          <div className="glass-panel p-8 space-y-6">
            <h2 className="text-xl font-bold tracking-tight">Billing Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Full Name</label>
                <input type="text" defaultValue="Elite Engineer" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Email Address</label>
                <input type="email" defaultValue="engineer@pinnacle.hub" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Company (Optional)</label>
                <input type="text" placeholder="Engineering Solutions Ltd." className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 space-y-6">
            <h2 className="text-xl font-bold tracking-tight">Secure Payment</h2>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold">PayPal</div>
                    <div className="text-xs text-on-surface-variant">Recommended for international orders</div>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                </div>
              </div>
              
              <div className="p-4 bg-surface-container border border-outline-variant rounded-xl flex items-center justify-between opacity-50 grayscale cursor-not-allowed">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <div className="font-bold">Credit/Debit Card</div>
                    <div className="text-xs text-on-surface-variant">Coming Soon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="space-y-6">
          <div className="glass-panel p-8 space-y-6">
            <h2 className="text-xl font-bold tracking-tight border-b border-white/5 pb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-16 h-10 bg-surface-container-high rounded overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=250" className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="text-sm font-bold line-clamp-1">High-Efficiency PCB Layout Designs</div>
                  <div className="text-xs text-primary font-mono">$89.00</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5 text-sm">
              <div className="flex justify-between text-on-surface-variant">
                <span>Subtotal</span>
                <span className="font-mono text-on-surface">$89.00</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Fees</span>
                <span className="font-mono text-on-surface">$4.45</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-white/5">
                <span>Total Amount</span>
                <span className="font-mono text-primary">$93.45</span>
              </div>
            </div>

            <button 
              disabled={step === 'payment'}
              onClick={handlePayment}
              className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              {step === 'payment' ? (
                <>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Finalize Purchase</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-3 p-4 bg-surface-container-high rounded-xl text-[10px] text-on-surface-variant">
              <AlertCircle className="w-4 h-4 shrink-0 text-primary" />
              <p>Digital products are non-refundable. Please review the project specifications before purchasing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
