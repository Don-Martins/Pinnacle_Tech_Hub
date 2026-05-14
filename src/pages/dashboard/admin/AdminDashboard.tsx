import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Users, 
  FileCheck, 
  BarChart3, 
  Search, 
  ChevronRight, 
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Flag
} from 'lucide-react';
import { cn } from '../../../lib/utils';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '45,200', icon: Users, color: 'text-primary' },
    { label: 'Pending Verification', value: '124', icon: FileCheck, color: 'text-yellow-500' },
    { label: 'Platform Volume', value: '$2.4M', icon: BarChart3, color: 'text-green-500' },
    { label: 'Reported Content', value: '8', icon: AlertTriangle, color: 'text-red-500' },
  ];

  const verificationQueue = [
    { id: '1', name: 'Dr. Sarah Chen', project: 'Neural Interface V3', status: 'Pending', date: '2h ago' },
    { id: '2', name: 'Quantum Engineering', project: 'Cryo-Cooling System', status: 'In Review', date: '5h ago' },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-sans font-black tracking-tighter text-on-surface mb-2">Government & Oversight</h1>
          <p className="text-on-surface-variant font-medium">Platform governance and verification master control.</p>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <div className={cn("p-2.5 rounded-xl bg-surface-container-high", stat.color)}>
                <stat.icon className="size-5" />
              </div>
            </div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-2xl font-sans font-black text-on-surface">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Verification Queue */}
         <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel p-8">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-sans font-black text-on-surface tracking-tight">Verification Queue</h3>
                  <button className="text-xs font-bold text-primary hover:underline">View All Tickets</button>
               </div>
               
               <div className="space-y-3">
                  {verificationQueue.map(ticket => (
                    <div key={ticket.id} className="p-4 bg-surface-container/50 border border-outline-variant/10 rounded-2xl flex items-center justify-between hover:bg-surface-container transition-all group">
                       <div className="flex items-center gap-4">
                          <div className="size-10 bg-surface-container-high rounded-xl flex items-center justify-center font-black text-xs text-on-surface">#{ticket.id}</div>
                          <div>
                            <h4 className="text-sm font-bold text-on-surface">{ticket.name}</h4>
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tight">{ticket.project}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-6">
                          <div className="text-right">
                             <span className={cn("inline-block px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest", 
                                ticket.status === 'Pending' ? "bg-yellow-500/10 text-yellow-500" : "bg-primary/10 text-primary")}>
                               {ticket.status}
                             </span>
                             <p className="text-[10px] font-medium text-on-surface-variant mt-1">{ticket.date}</p>
                          </div>
                          <div className="flex gap-2">
                             <button className="p-2 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500/20 transition-colors"><CheckCircle2 className="size-4" /></button>
                             <button className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors"><XCircle className="size-4" /></button>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Platform Activity Log */}
            <div className="glass-card p-8">
               <h3 className="text-lg font-sans font-black text-on-surface mb-6">Recent Platform Events</h3>
               <div className="space-y-4">
                  {[
                    { event: 'Critical Update', detail: 'V3.2 Engine Deployed', color: 'bg-primary' },
                    { event: 'Suspicious Activity', detail: 'Block ID: 0x921 (IP: 142.12.X.X)', color: 'bg-red-500' },
                    { event: 'New Partner', detail: 'MIT Media Lab Integrated', color: 'bg-tertiary' }
                  ].map((evt, i) => (
                    <div key={i} className="flex items-center gap-4 text-xs font-bold">
                       <div className={cn("size-2 rounded-full", evt.color)} />
                       <span className="text-on-surface min-w-[120px]">{evt.event}</span>
                       <span className="text-on-surface-variant truncate">{evt.detail}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Admin Sidebars */}
         <div className="space-y-8">
            <div className="glass-panel p-6 bg-red-500/5 border-red-500/20">
               <h3 className="text-red-500 font-sans font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                 <ShieldAlert className="size-4" /> System Health
               </h3>
               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-on-surface-variant">API Latency</span>
                    <span className="text-xs font-bold text-green-500">12ms - Healthy</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-on-surface-variant">Auth Systems</span>
                    <span className="text-xs font-bold text-green-500">Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-on-surface-variant">Payment Gateways</span>
                    <span className="text-xs font-bold text-yellow-500">Latency Detected</span>
                  </div>
                  <button className="w-full h-11 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all mt-4">
                    Emergency Maintenance Mode
                  </button>
               </div>
            </div>

            <div className="glass-card p-6">
               <h3 className="font-sans font-black text-on-surface mb-6 flex items-center gap-2">
                 <Flag className="size-4 text-orange-500" /> Resolution Center
               </h3>
               <div className="p-4 bg-surface-container-high rounded-xl border border-outline-variant/10 text-center">
                  <p className="text-xs font-bold text-on-surface mb-2">User Dispute #9921</p>
                  <p className="text-[10px] text-on-surface-variant mb-4">"Product 'STM32 Drone Engine' missing Gerber files."</p>
                  <div className="flex gap-2">
                    <button className="flex-grow py-2 bg-primary text-on-primary rounded-lg text-[10px] font-black uppercase">Mediate</button>
                    <button className="flex-grow py-2 bg-surface-container-highest rounded-lg text-[10px] font-black uppercase">Escalate</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
