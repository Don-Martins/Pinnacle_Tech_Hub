import { motion } from 'motion/react';
import { Search, Shield, Eye, CheckCircle2, XCircle, Clock, AlertTriangle } from 'lucide-react';

const pendingProjects = [
  { 
    id: 'PRJ-4431', 
    title: 'Hydrogen Fuel Cell Management System', 
    creator: 'EcoTech', 
    category: 'Renewable Energy', 
    submittedAt: '1 hour ago',
    thumbnail: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=400&h=250' 
  },
  { 
    id: 'PRJ-9921', 
    title: 'Advanced LiDAR Navigation Module', 
    creator: 'LaserFocus', 
    category: 'Automotive', 
    submittedAt: '3 hours ago',
    thumbnail: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?auto=format&fit=crop&q=80&w=400&h=250' 
  }
];

export default function ProjectModerationPage() {
  return (
    <div className="space-y-8 text-on-surface">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Content Moderation</h1>
        <p className="text-on-surface-variant">Review technical documentation, source code, and assets before publication.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {[
          { label: 'Pending Review', value: '14', icon: Clock, color: 'text-amber-500' },
          { label: 'Approved Today', value: '28', icon: CheckCircle2, color: 'text-green-500' },
          { label: 'Rejected Today', value: '3', icon: XCircle, color: 'text-error' },
          { label: 'Reports', value: '5', icon: AlertTriangle, color: 'text-red-500' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold tracking-tighter">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6">
        {pendingProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-6 flex flex-col lg:flex-row gap-6 items-center"
          >
            <div className="w-full lg:w-48 aspect-video rounded-xl overflow-hidden shrink-0">
               <img src={project.thumbnail} alt="" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-grow space-y-2 text-center lg:text-left">
              <div className="text-[10px] font-bold text-primary uppercase tracking-widest">{project.category}</div>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-on-surface-variant">
                 <span className="font-semibold text-on-surface">By {project.creator}</span>
                 <span className="font-mono">{project.id}</span>
                 <span>Submitted {project.submittedAt}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 shrink-0">
               <button className="px-5 py-2.5 bg-surface-container-high rounded-xl hover:bg-surface-variant transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  <Eye className="w-4 h-4" />
                  <span>Inspect Assets</span>
               </button>
               <button className="px-5 py-2.5 bg-green-500/10 text-green-500 rounded-xl hover:bg-green-500 hover:text-white transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Approve</span>
               </button>
               <button className="px-5 py-2.5 bg-error/10 text-error rounded-xl hover:bg-error hover:text-white transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  <XCircle className="w-4 h-4" />
                  <span>Reject</span>
               </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
