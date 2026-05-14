import { motion } from 'motion/react';
import { Bell, Package, Star, MessageSquare, ShieldCheck, Search, Filter, MoreHorizontal } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { useState } from 'react';

const initialNotifications = [
  { 
    id: '1', 
    type: 'purchase', 
    title: 'New Purchase Unlock', 
    message: 'Your purchase of "Solar Inverter Design" is now active in your library.',
    time: '2 hours ago',
    read: false,
    icon: ShieldCheck,
    color: 'text-green-500',
    bg: 'bg-green-500/10'
  },
  { 
    id: '2', 
    type: 'update', 
    title: 'Project Update Available', 
    message: 'CircuitSage released version 2.1 for "PCB Layout Designs".',
    time: '5 hours ago',
    read: false,
    icon: Package,
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  { 
    id: '3', 
    type: 'reply', 
    title: 'New Reply to your review', 
    message: 'RoboMaster replied to your review on "Robotic Arm Controller".',
    time: '1 day ago',
    read: true,
    icon: MessageSquare,
    color: 'text-secondary',
    bg: 'bg-secondary/10'
  },
  { 
    id: '4', 
    type: 'system', 
    title: 'Security Alert', 
    message: 'Your password was successfully changed yesterday.',
    time: 'Yesterday',
    read: true,
    icon: Star,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10'
  }
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Notifications</h1>
          <p className="text-on-surface-variant">Stay updated with your engineering community.</p>
        </div>
        <button 
          onClick={markAllRead}
          className="text-xs font-bold text-primary uppercase tracking-widest hover:underline"
        >
          Mark all as read
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search notifications..."
            className="w-full bg-surface-container border border-outline-variant rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex gap-2">
          <button className="p-2.5 bg-surface-container border border-outline-variant rounded-xl hover:bg-surface-variant transition-colors">
            <Filter className="w-4 h-4 text-on-surface-variant" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {notifications.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className={cn(
              "glass-card p-5 flex gap-5 items-start transition-all hover:bg-white/[0.02]",
              !n.read && "border-l-4 border-l-primary"
            )}
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", n.bg)}>
              <n.icon className={cn("w-6 h-6", n.color)} />
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-1">
                <h3 className={cn("font-bold", !n.read ? "text-on-surface" : "text-on-surface-variant")}>
                  {n.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-medium text-on-surface-variant/70 uppercase tracking-widest">{n.time}</span>
                  <button className="text-on-surface-variant hover:text-on-surface">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {n.message}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center pt-8">
        <button className="text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">
          View older notifications
        </button>
      </div>
    </div>
  );
}
