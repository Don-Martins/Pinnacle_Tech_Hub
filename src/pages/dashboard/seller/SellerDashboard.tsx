import { motion } from 'motion/react';
import { useStore } from '../../../store/useStore';
import { 
  BarChart3, 
  DollarSign, 
  Users, 
  Package, 
  TrendingUp, 
  ArrowUpRight,
  PlusCircle,
  MessageSquare,
  Star,
  Settings
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Link } from 'react-router-dom';

export default function SellerDashboard() {
  const { user } = useStore();

  const stats = [
    { label: 'Total Revenue', value: '$12,450', icon: DollarSign, color: 'text-green-500', trend: '+18%' },
    { label: 'Active Students', value: '412', icon: Users, color: 'text-primary', trend: '+5%' },
    { label: 'Product Sales', value: '89', icon: Package, color: 'text-secondary', trend: '+12%' },
    { label: 'Platform Rating', value: '4.9', icon: Star, color: 'text-yellow-500', trend: 'Stable' },
  ];

  const topSellers = [
    { id: '1', title: 'Autonomous Drone Flight Controller', sales: 45, revenue: '$8,955', rating: 4.9 },
    { id: '2', title: 'PCB Layout for High-Speed Systems', sales: 32, revenue: '$2,848', rating: 4.7 },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-outline-variant">
        <div>
          <div className="inline-block px-2 py-0.5 rounded-md bg-secondary/10 border border-secondary/20 text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-4">
            Analytics Engine
          </div>
          <h1 className="text-5xl font-sans font-black tracking-tighter text-on-surface">Creator Hub</h1>
        </div>
        <Link to="/dashboard/upload" className="h-12 px-8 bg-secondary text-on-secondary rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg shadow-secondary/20">
          <PlusCircle className="size-5" /> Launch New Project
        </Link>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-3 rounded-2xl bg-surface-container-high", stat.color)}>
                <stat.icon className="size-6" />
              </div>
              <div className={cn("text-[10px] font-black uppercase px-2 py-1 rounded-lg", stat.trend.includes('+') ? "bg-green-500/10 text-green-500" : "bg-on-surface-variant/10 text-on-surface-variant")}>
                {stat.trend}
              </div>
            </div>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-3xl font-sans font-black text-on-surface">{stat.value}</p>
          </motion.div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Main Chart/Sales Area */}
         <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel p-8">
               <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-sans font-black text-on-surface tracking-tight">Revenue Analytics</h3>
                  <select className="bg-surface-container text-xs font-bold text-on-surface border border-outline-variant/10 rounded-xl px-4 py-2 outline-none">
                    <option>Last 30 Days</option>
                    <option>Last 6 Months</option>
                    <option>Year to Date</option>
                  </select>
               </div>
               
               {/* Mock Chart Area */}
               <div className="h-64 flex items-end gap-2 px-2">
                  {[40, 25, 60, 45, 80, 55, 90, 70, 45, 65, 85, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 1 }}
                      className={cn("flex-grow rounded-t-lg bg-linear-to-t", i === 11 ? "from-primary/20 to-primary" : "from-surface-container-highest to-surface-container-high")}
                    />
                  ))}
               </div>
               <div className="flex justify-between mt-4 px-2 text-[8px] sm:text-[10px] font-bold text-on-surface-variant uppercase tracking-widest gap-1 overflow-x-auto no-scrollbar">
                 {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => <div key={m} className="flex-1 text-center min-w-[30px]">{m}</div>)}
               </div>
            </div>

            <div className="space-y-6">
               <h3 className="text-xl font-sans font-black text-on-surface tracking-tight">Best Performing Blueprints</h3>
               <div className="space-y-4">
                  {topSellers.map(project => (
                    <div key={project.id} className="glass-card p-6 flex items-center justify-between border-l-4 border-l-primary group cursor-pointer hover:bg-surface-container transition-all">
                       <div className="flex items-center gap-4">
                          <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black">#{project.id}</div>
                          <div>
                            <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{project.title}</h4>
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{project.sales} Units Sold • {project.rating} Rating</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-lg font-sans font-black text-on-surface">{project.revenue}</p>
                          <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">+4.2% This Month</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Creator Alerts & Notifications */}
         <div className="space-y-8">
            <div className="p-8 bg-linear-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl relative overflow-hidden group">
               <div className="relative z-10">
                 <h3 className="text-lg font-sans font-black text-on-surface mb-4">Engineering Support</h3>
                 <p className="text-base font-medium text-on-surface-variant mb-6">You have 3 unanswered technical inquiries from your Drone Controller students.</p>
                 <button className="h-11 px-6 bg-primary text-on-primary rounded-xl font-bold text-xs flex items-center gap-2 group-hover:scale-105 transition-all">
                   Open Support Inbox <ArrowUpRight className="size-4" />
                 </button>
               </div>
               <MessageSquare className="absolute -bottom-4 -right-4 size-32 text-primary/5 group-hover:scale-110 transition-transform" />
            </div>

            <div className="glass-card p-6">
               <h3 className="font-sans font-black text-on-surface mb-6 flex items-center gap-2">
                 <BarChart3 className="size-4 text-secondary" /> Payout Status
               </h3>
               <div className="space-y-4">
                 <div className="p-4 bg-surface-container-high rounded-xl">
                    <p className="text-[10px] font-black uppercase text-on-surface-variant mb-2">Next Payout</p>
                    <div className="flex justify-between items-end">
                       <p className="text-2xl font-black text-on-surface">$2,450.00</p>
                       <p className="text-[10px] font-bold text-primary">May 21, 2024</p>
                    </div>
                 </div>
                 <button className="w-full py-3 bg-surface-container-highest rounded-xl text-xs font-bold text-on-surface hover:text-primary transition-all">
                   Manage Payout Settings
                 </button>
               </div>
            </div>

            <div className="glass-panel p-6">
                <h3 className="font-sans font-black text-on-surface mb-4">Quick Settings</h3>
                <div className="space-y-3">
                   {['Global Commissions', 'Storefront Visibility', 'Course Enrollment', 'Developer API'].map(label => (
                     <div key={label} className="flex items-center justify-between p-3 bg-surface-container/50 rounded-xl">
                        <span className="text-xs font-bold text-on-surface-variant">{label}</span>
                        <div className="w-10 h-5 bg-primary/20 rounded-full p-1 flex justify-end cursor-pointer">
                          <div className="size-3 bg-primary rounded-full" />
                        </div>
                     </div>
                   ))}
                </div>
            </div>
         </div>
      </div>
    </div>
  );
}
