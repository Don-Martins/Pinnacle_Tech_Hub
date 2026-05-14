import { motion } from 'motion/react';
import { Search, Filter, Play, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const purchasedProjects = [
  { 
    id: '1', 
    title: 'Advanced Robotic Arm Controller', 
    creator: 'RoboMaster', 
    progress: 75, 
    lastAccessed: '2 days ago',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=250'
  },
  { 
    id: '2', 
    title: 'Autonomous Drone Flight Path System', 
    creator: 'SkyHigh Tech', 
    progress: 100, 
    lastAccessed: '1 week ago',
    thumbnail: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=400&h=250'
  }
];

export default function PurchasedProjectsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">My Library</h1>
        <p className="text-on-surface-variant">Continue your engineering journey here.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search your projects..."
            className="w-full bg-surface-container border border-outline-variant rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container border border-outline-variant rounded-xl text-sm font-semibold hover:bg-surface-variant transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {purchasedProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden group"
          >
            <div className="relative aspect-video">
              <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link 
                  to={`/dashboard/learning`}
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                >
                  <Play className="w-6 h-6 fill-current" />
                </Link>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg mb-1 line-clamp-1">{project.title}</h3>
                  <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest">{project.creator}</p>
                </div>
                {project.progress === 100 && (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-on-surface-variant uppercase tracking-widest">{project.progress}% Complete</span>
                    <span className="text-on-surface-variant flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {project.lastAccessed}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      className={`h-full ${project.progress === 100 ? 'bg-green-500' : 'bg-primary'}`}
                    />
                  </div>
                </div>

                <Link 
                  to={`/dashboard/learning`}
                  className="w-full py-2.5 bg-surface-container-high border border-outline-variant/10 rounded-xl text-sm font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  {project.progress === 100 ? 'Review Project' : 'Continue Learning'}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
