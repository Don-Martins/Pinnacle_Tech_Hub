import { motion } from 'motion/react';
import { Camera, Globe, Github, Twitter, Linkedin, Briefcase, Award, Zap } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '../../../store/useStore';

export default function SellerProfileSettingsPage() {
  const { user } = useStore();
  const [activeTab, setActiveTab] = useState<'profile' | 'social' | 'credentials'>('profile');

  return (
    <div className="space-y-8 text-on-surface">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Creator Hub Profile</h1>
        <p className="text-on-surface-variant">How you appear to buyers and fellow engineering experts.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="space-y-1">
          {[
            { id: 'profile', icon: Briefcase, label: 'Professional Info' },
            { id: 'social', icon: Globe, label: 'Social & Web' },
            { id: 'credentials', icon: Award, label: 'Certifications' },
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
            {activeTab === 'profile' && (
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-8 items-center">
                  <div className="relative group">
                    <img 
                      src={user?.avatar} 
                      alt="Avatar" 
                      className="w-32 h-32 rounded-3xl object-cover border-4 border-surface-container shadow-xl" 
                    />
                    <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex items-center justify-center text-white">
                      <Camera className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold mb-1">{user?.name}</h3>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">Elite Creator Status</p>
                    <div className="flex gap-2">
                       <div className="px-3 py-1 bg-surface-container-high rounded text-[10px] font-bold uppercase tracking-widest">Mechanical</div>
                       <div className="px-3 py-1 bg-surface-container-high rounded text-[10px] font-bold uppercase tracking-widest">Embedded</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-white/5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Creator Alias</label>
                    <input type="text" defaultValue="PinnacleDev" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Specialization</label>
                    <input type="text" defaultValue="Robotics & PLC systems" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Technical Statement</label>
                    <textarea rows={4} defaultValue="Expert in full-stack engineering with focus on autonomous systems." className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">Update Creator Profile</button>
                </div>
              </div>
            )}

            {activeTab === 'social' && (
              <div className="space-y-6">
                {[
                  { icon: Github, label: 'GitHub Portfolio', placeholder: 'github.com/yourhandle' },
                  { icon: Twitter, label: 'X (Twitter)', placeholder: 'x.com/yourhandle' },
                  { icon: Linkedin, label: 'LinkedIn Profile', placeholder: 'linkedin.com/in/yourhandle' },
                  { icon: Globe, label: 'Personal Website', placeholder: 'yourwebsite.com' },
                ].map((social, i) => (
                  <div key={i} className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                      <social.icon className="w-3.5 h-3.5" />
                      {social.label}
                    </label>
                    <input type="text" placeholder={social.placeholder} className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                ))}
                <div className="flex justify-end pt-4">
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">Link Accounts</button>
                </div>
              </div>
            )}

            {activeTab === 'credentials' && (
              <div className="space-y-6">
                <div className="p-6 border-2 border-dashed border-outline-variant rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Verification Badge</h4>
                    <p className="text-xs text-on-surface-variant max-w-xs mx-auto">Upload professional certifications or degrees to earn an 'Expert Verified' badge on your store.</p>
                  </div>
                  <button className="px-6 py-2 bg-surface-container-high border border-outline-variant rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Start Verification</button>
                </div>

                <div className="space-y-4 pt-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Active Badges</h4>
                  <div className="flex gap-4">
                    <div className="p-3 glass-card flex items-center gap-3">
                       <Zap className="w-4 h-4 text-emerald-500" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Early Adopter</span>
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
