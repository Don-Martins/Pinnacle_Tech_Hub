import { motion } from 'motion/react';
import { useStore } from '../../../store/useStore';
import { 
  ArrowUpRight, 
  BookOpen, 
  Clock, 
  ShoppingCart, 
  Star,
  Zap,
  TrendingUp,
  Search,
  ChevronRight
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Link } from 'react-router-dom';

export default function BuyerDashboard() {
  const { user } = useStore();

  const stats = [
    { label: 'Active Projects', value: '4', icon: BookOpen, color: 'text-primary' },
    { label: 'Purchased Assets', value: '12', icon: ShoppingCart, color: 'text-secondary' },
    { label: 'Mastery Level', value: 'Lv. 8', icon: Star, color: 'text-tertiary' },
    { label: 'Learning Hours', value: '42h', icon: Clock, color: 'text-primary' },
  ];

  const recentProjects = [
    { id: '1', title: 'Autonomous Drone Flight Controller', progress: 75, lastActive: '2h ago', image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=200' },
    { id: '2', title: 'Distributed Cloud Storage Engine', progress: 30, lastActive: 'Yesterday', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200' },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-outline-variant">
        <div>
          <div className="inline-block px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">
            Workspace Overview
          </div>
          <h1 className="text-5xl font-sans font-black tracking-tighter text-on-surface">Welcome Back, {user?.name.split(' ')[0]}</h1>
        </div>
        <div className="flex gap-3">
          <div className="hidden sm:flex items-center bg-surface-container rounded-xl px-4 border border-outline-variant/10">
             <Search className="size-4 text-on-surface-variant mr-3" />
             <input type="text" placeholder="Jump to..." className="bg-transparent border-none focus:outline-none h-11 text-xs w-48" />
          </div>
          <button className="h-11 px-6 bg-primary text-on-primary rounded-xl font-bold text-xs hover:scale-105 transition-all shadow-lg shadow-primary/20">
            Find New Projects
          </button>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex justify-between items-start mb-4">
               <div className={cn("p-2.5 rounded-xl bg-surface-container-high", stat.color)}>
                 <stat.icon className="size-5" />
               </div>
               <div className="flex items-center gap-1 text-green-500 text-[10px] font-black uppercase tracking-widest bg-green-500/10 px-2 py-0.5 rounded-md">
                 <TrendingUp className="size-3" /> 12%
               </div>
            </div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-2xl font-sans font-black text-on-surface">{stat.value}</p>
          </motion.div>
        ))}
      </section>

      {/* Main Content Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Active Learning */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-sans font-black text-on-surface tracking-tight">Active Learning</h3>
            <Link to="/dashboard/learning" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
              View All <ChevronRight className="size-3" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="glass-panel p-5 flex items-center gap-5 hover:border-primary/30 transition-all group cursor-pointer">
                <img src={project.image} className="size-20 rounded-xl object-cover shrink-0" />
                <div className="flex-grow">
                   <div className="flex items-center justify-between mb-2">
                     <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{project.title}</h4>
                     <span className="text-[10px] font-medium text-on-surface-variant">{project.lastActive}</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="flex-grow h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${project.progress}%` }} />
                      </div>
                      <span className="text-xs font-black text-primary">{project.progress}%</span>
                   </div>
                </div>
                <ArrowUpRight className="size-5 text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="pt-6">
             <h3 className="text-xl font-sans font-black text-on-surface tracking-tight mb-6">Expert Recommendations</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="p-6 bg-linear-to-br from-primary/10 to-transparent rounded-2xl border border-primary/10 hover:bg-primary/20 transition-all cursor-pointer group">
                  <Zap className="size-6 text-primary mb-4" />
                  <h4 className="font-bold text-on-surface mb-2">System Design Mastery</h4>
                  <p className="text-xs text-on-surface-variant line-clamp-2 italic mb-4">"Based on your C++ interest. Master distributed systems architectural patterns."</p>
                  <button className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Course <ArrowUpRight className="size-3" />
                  </button>
               </div>
               <div className="p-6 bg-linear-to-br from-secondary/10 to-transparent rounded-2xl border border-secondary/10 hover:bg-secondary/20 transition-all cursor-pointer group">
                  <Star className="size-6 text-secondary mb-4" />
                  <h4 className="font-bold text-on-surface mb-2">PCB Layout Pro</h4>
                  <p className="text-xs text-on-surface-variant line-clamp-2 italic mb-4">"Perfect next step for robotics projects. Advance from hobby to professional."</p>
                  <button className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Course <ArrowUpRight className="size-3" />
                  </button>
               </div>
             </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
           <div className="glass-card p-6">
              <h3 className="font-sans font-black text-on-surface mb-4">Upcoming Mentor Session</h3>
              <div className="p-4 bg-surface-container-high rounded-xl mb-4 border border-outline-variant/10">
                 <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" className="size-10 rounded-full" />
                    <div>
                      <p className="text-sm font-bold text-on-surface">Alex Chen</p>
                      <p className="text-[10px] font-medium text-on-surface-variant uppercase tracking-tight">AI Engineering Lead</p>
                    </div>
                 </div>
                 <div className="flex items-center justify-between text-xs font-bold text-on-surface-variant">
                    <span className="flex items-center gap-2 bg-surface/40 px-2.5 py-1.5 rounded-lg"><Clock className="size-3 text-primary" /> 14:00 Today</span>
                    <button className="text-primary hover:underline">Join Link</button>
                 </div>
              </div>
              <button className="w-full py-3 bg-surface-container-highest rounded-xl text-xs font-bold text-on-surface hover:bg-primary/10 hover:text-primary transition-all">
                Reschedule Session
              </button>
           </div>

           <div className="glass-panel p-6">
              <h3 className="font-sans font-black text-on-surface mb-6 flex items-center gap-2">
                <TrendingUp className="size-4 text-tertiary" /> Mastery Progress
              </h3>
              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                      <span className="text-on-surface-variant">Embedded Systems</span>
                      <span className="text-tertiary">85%</span>
                    </div>
                    <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        className="h-full bg-tertiary"
                      />
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                      <span className="text-on-surface-variant">Cloud Architecture</span>
                      <span className="text-secondary">42%</span>
                    </div>
                    <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '42%' }}
                        className="h-full bg-secondary"
                      />
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
