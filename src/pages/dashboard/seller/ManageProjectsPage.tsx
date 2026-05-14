import { motion } from 'motion/react';
import { Search, Filter, Plus, Edit3, Trash2, Eye, BarChart3, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  { 
    id: '1', 
    title: 'Advanced Robotic Arm Controller', 
    category: 'Embedded Systems', 
    sales: 124, 
    revenue: '$18,476',
    status: 'Published',
    updatedAt: '2 days ago',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=250'
  },
  { 
    id: '2', 
    title: 'Autonomous Drone Flight Path System', 
    category: 'Aerospace', 
    sales: 82, 
    revenue: '$24,518',
    status: 'Published',
    updatedAt: '1 week ago',
    thumbnail: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=400&h=250'
  },
  { 
    id: '3', 
    title: 'Smart Home Hub Architecture', 
    category: 'IoT Solutions', 
    sales: 0, 
    revenue: '$0',
    status: 'Draft',
    updatedAt: 'Just now',
    thumbnail: 'https://images.unsplash.com/photo-1558002038-103792e3747d?auto=format&fit=crop&q=80&w=400&h=250'
  }
];

export default function ManageProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Manage Projects</h1>
          <p className="text-on-surface-variant">Track performance and edit your engineering assets.</p>
        </div>
        <Link 
          to="/dashboard/upload" 
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>Upload Project</span>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search projects by title or category..."
            className="w-full bg-surface-container border border-outline-variant rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container border border-outline-variant rounded-xl text-sm font-semibold hover:bg-surface-variant transition-colors">
            <Filter className="w-4 h-4 text-on-surface-variant" />
            <span>Sort by: Newest</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden group flex flex-col"
          >
            <div className="relative aspect-video">
              <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute top-4 left-4">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  project.status === 'Published' ? 'bg-green-500/10 text-green-500' : 'bg-surface-container-highest text-on-surface-variant'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-primary transition-all">
                  <Edit3 className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-surface-variant transition-all">
                  <Eye className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-error transition-all">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
                  <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest">{project.category}</p>
                </div>
                <button className="p-1.5 text-on-surface-variant hover:text-on-surface">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="p-3 bg-surface-container/50 rounded-xl border border-white/5">
                  <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Sales</div>
                  <div className="text-lg font-bold font-mono text-on-surface">{project.sales}</div>
                </div>
                <div className="p-3 bg-surface-container/50 rounded-xl border border-white/5">
                  <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Revenue</div>
                  <div className="text-lg font-bold font-mono text-primary">{project.revenue}</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-semibold text-on-surface-variant uppercase tracking-widest">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Last edit: {project.updatedAt}</span>
                </div>
                <Link to="/dashboard/analytics" className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">View Analytics</Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
