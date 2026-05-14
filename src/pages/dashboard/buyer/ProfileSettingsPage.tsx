import { motion } from 'motion/react';
import { User, Bell, Lock, Globe, Camera, Shield, Palette } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '../../../store/useStore';

export default function ProfileSettingsPage() {
  const { user, theme, setTheme } = useStore();
  const [activeTab, setActiveTab] = useState<'profile' | 'password' | 'notifications' | 'appearance'>('profile');

  const tabs = [
    { id: 'profile', icon: User, label: 'Public Profile' },
    { id: 'password', icon: Lock, label: 'Password' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'appearance', icon: Palette, label: 'Appearance' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Account Settings</h1>
        <p className="text-on-surface-variant">Manage your identity and platform experience.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar Tabs */}
        <div className="space-y-1">
          {tabs.map(tab => (
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

        {/* Content */}
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
                  <div>
                    <h3 className="text-xl font-bold mb-1">{user?.name}</h3>
                    <p className="text-on-surface-variant text-sm mb-4">{user?.email}</p>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-all">Upload New</button>
                      <button className="px-4 py-2 bg-surface-container-high text-xs font-bold rounded-lg hover:bg-surface-variant transition-all">Remove</button>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-white/5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Display Name</label>
                    <input type="text" defaultValue={user?.name} className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Email Address</label>
                    <input type="email" defaultValue={user?.email} className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Bio</label>
                    <textarea rows={4} placeholder="Tell us about your engineering background..." className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">Save Changes</button>
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div className="space-y-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-1">Theme Preference</h3>
                    <p className="text-sm text-on-surface-variant">Choose how Pinnacle Hub looks on your device.</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setTheme('light')}
                      className={`p-6 rounded-2xl border-2 transition-all text-left space-y-4 ${
                        theme === 'light' ? "border-primary bg-primary/5" : "border-outline-variant bg-surface-container hover:border-outline"
                      }`}
                    >
                      <div className="w-12 h-8 bg-white rounded border border-gray-200" />
                      <div>
                        <div className="font-bold">Light mode</div>
                        <div className="text-xs text-on-surface-variant">Clean and bright</div>
                      </div>
                    </button>
                    <button 
                      onClick={() => setTheme('dark')}
                      className={`p-6 rounded-2xl border-2 transition-all text-left space-y-4 ${
                        theme === 'dark' ? "border-primary bg-primary/5" : "border-outline-variant bg-surface-container hover:border-outline"
                      }`}
                    >
                      <div className="w-12 h-8 bg-surface-container-highest rounded border border-white/5" />
                      <div>
                        <div className="font-bold">Dark mode</div>
                        <div className="text-xs text-on-surface-variant">Easy on the eyes</div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="space-y-6 pt-8 border-t border-white/5">
                  <div>
                    <h3 className="text-lg font-bold mb-1">Accessibility</h3>
                    <p className="text-sm text-on-surface-variant">Adjust visual settings for better readability.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl">
                      <div className="flex items-center gap-3">
                        <Palette className="w-5 h-5 text-on-surface-variant" />
                        <span className="font-semibold">High Contrast Mode</span>
                      </div>
                      <div className="w-10 h-5 bg-surface-container-highest rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'password' && (
              <div className="max-w-md space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Current Password</label>
                  <input type="password" underline className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">New Password</label>
                  <input type="password" underline className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Confirm New Password</label>
                  <input type="password" underline className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="pt-4">
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">Update Password</button>
                </div>
              </div>
            )}
          </motion.div>
          
          <div className="mt-8 glass-card p-6 border-error/10 bg-error/5 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-error mb-1">Danger Zone</h4>
              <p className="text-xs text-on-surface-variant">Permanently delete your account and all engineering data.</p>
            </div>
            <button className="px-4 py-2 border border-error/50 text-error text-xs font-bold rounded-lg hover:bg-error/10 transition-all uppercase tracking-widest">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
