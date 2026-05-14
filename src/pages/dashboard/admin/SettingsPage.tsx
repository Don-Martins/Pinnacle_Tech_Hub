import { motion } from 'motion/react';
import { Settings, Shield, Globe, Bell, Mail, CreditCard, ChevronRight, Zap } from 'lucide-react';
import { useState } from 'react';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<'platform' | 'payment' | 'security'>('platform');

  return (
    <div className="space-y-8 text-on-surface">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Platform Engine</h1>
        <p className="text-on-surface-variant">Global configuration and core system parameters.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="space-y-1">
          {[
            { id: 'platform', icon: Globe, label: 'General Configuration' },
            { id: 'payment', icon: CreditCard, label: 'Payment Gateway' },
            { id: 'security', icon: Shield, label: 'Internal Security' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab.id 
                ? "bg-primary text-white shadow-lg shadow-primary/20" 
                : "text-on-surface-variant hover:bg-surface-variant/50 hover:text-on-surface"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="lg:col-span-3">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-8"
          >
            {activeTab === 'platform' && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Platform Name</label>
                     <input type="text" defaultValue="Pinnacle Hub" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Support Email</label>
                     <input type="email" defaultValue="nexus@pinnacle.hub" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                   </div>
                   <div className="space-y-2 md:col-span-2">
                     <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Marketplace Take Rate (%)</label>
                     <div className="flex gap-4 items-center">
                        <input type="number" defaultValue="5.0" className="w-32 bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                        <span className="text-xs text-on-surface-variant font-medium italic">Applied to all transactions globally.</span>
                     </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-white/5 space-y-6">
                   <h3 className="font-bold text-sm uppercase tracking-widest">Platform Features</h3>
                   <div className="space-y-3">
                      {[
                        { label: 'Public Registration', enabled: true },
                        { label: 'Creator Applications', enabled: true },
                        { label: 'Live Chat (BETA)', enabled: false },
                        { label: 'Paystack Integration', enabled: true },
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-surface-container-high/50 rounded-xl">
                           <span className="text-sm font-semibold">{feature.label}</span>
                           <div className={`w-10 h-5 rounded-full relative transition-colors ${feature.enabled ? 'bg-primary' : 'bg-surface-container-highest'}`}>
                              <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${feature.enabled ? 'right-1' : 'left-1'}`} />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">Synchronize Engine</button>
                </div>
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="space-y-8">
                 <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="w-8 h-8" />
                       </div>
                       <div>
                          <h4 className="font-bold">PayPal Gateway</h4>
                          <span className="text-[10px] uppercase tracking-widest text-green-500 font-bold">CONNECTED</span>
                       </div>
                    </div>
                    <button className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest hover:text-error transition-colors">Disconnect</button>
                 </div>

                 <div className="space-y-4">
                   <h3 className="font-bold text-sm uppercase tracking-widest">Refund Thresholds</h3>
                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-surface-container rounded-xl">
                         <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Auto-Refund Window</div>
                         <div className="text-lg font-bold">12 Hours</div>
                      </div>
                      <div className="p-4 bg-surface-container rounded-xl">
                         <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Dispute Grace Period</div>
                         <div className="text-lg font-bold">7 Days</div>
                      </div>
                   </div>
                 </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
