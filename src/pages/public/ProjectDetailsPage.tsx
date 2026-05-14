import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Star, 
  RotateCcw, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  ShoppingCart, 
  ArrowRight,
  Download,
  Share2,
  Bookmark,
  CheckCircle2,
  FileCode,
  Layout,
  Layers,
  Terminal,
  Zap
} from 'lucide-react';
import { cn } from '../../lib/utils';

export default function ProjectDetailsPage() {
  const { id } = useParams();

  // Mock project data - normally fetched based on ID
  const project = {
    id,
    title: 'Autonomous Drone Flight Controller',
    category: 'Robotics',
    price: 199,
    rating: 4.9,
    reviewsCount: 124,
    creator: 'SkyNet Dynamics',
    creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
    description: `
      A production-ready firmware and hardware architecture for commercial UAVs. 
      This project includes full source code in C++ using RTOS-based task management, 
      Eagle/Altium schematics, and Gazebo simulation models.
    `,
    features: [
      'PID Control Loop Optimization',
      'IMU Sensor Fusion (EKF)',
      'MAVLink 2.0 Integration',
      'Waypoints & GPS Navigation',
      'Dynamic Obstacle Avoidance'
    ],
    techStack: ['C++', 'STM32', 'RTOS', 'MAVLink'],
    images: [
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1473966968600-fa804b86d30b?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1527977966376-1c841ae74ea1?auto=format&fit=crop&q=80&w=400',
    ]
  };

  return (
    <div className="min-h-screen pb-20 bg-surface">
      {/* Header / Breadcrumbs */}
      <div className="bg-surface-dim/50 backdrop-blur-md sticky top-16 z-20 border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-4 text-xs font-semibold text-on-surface-variant">
          <Link to="/marketplace" className="hover:text-primary transition-colors">Marketplace</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-on-surface">{project.category}</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-on-surface truncate">{project.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Visual Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Title & Creator */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest mb-4">
                Premium Project
              </span>
              <h1 className="text-4xl lg:text-5xl font-sans font-black tracking-tighter text-on-surface mb-6 leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6">
                 <div className="flex items-center gap-3">
                   <img src={project.creatorAvatar} className="size-10 rounded-full border border-outline-variant/20" />
                   <div>
                     <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest leading-none mb-1">Creator</p>
                     <p className="text-sm font-bold text-on-surface">{project.creator}</p>
                   </div>
                 </div>
                 <div className="size-1 w-1 rounded-full bg-outline-variant/30 hidden sm:block" />
                 <div className="flex items-center gap-2">
                   <div className="flex text-yellow-500">
                     {[...Array(5)].map((_, i) => <Star key={i} className={cn("size-4", i < 4 ? "fill-yellow-500" : "fill-none")} />)}
                   </div>
                   <span className="text-sm font-bold text-on-surface">{project.rating}</span>
                   <span className="text-xs font-medium text-on-surface-variant text-nowrap">({project.reviewsCount} reviews)</span>
                 </div>
              </div>
            </div>

            {/* Showcase Image */}
            <div className="glass-panel overflow-hidden relative group">
              <img src={project.images[0]} className="w-full aspect-[21/9] object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-bottom p-8">
                 <div className="mt-auto">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-white text-xs font-bold border border-white/30 hover:bg-white/30 transition-all">
                      <Zap className="size-4" /> Live Simulation Preview
                    </button>
                 </div>
              </div>
            </div>

            {/* Description Tab Area */}
            <div className="space-y-8">
              <div className="flex border-b border-outline-variant/10 gap-8">
                <button className="pb-4 text-sm font-bold text-primary border-b-2 border-primary">Overview</button>
                <button className="pb-4 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">Hardware Specs</button>
                <button className="pb-4 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">Documentation</button>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className="size-5 text-primary" />
                    <h3 className="font-bold text-on-surface">Software Highlights</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-on-surface-variant">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="size-5 text-secondary" />
                    <h3 className="font-bold text-on-surface">Included Assets</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-on-surface-variant"><FileCode className="size-4" /> C++ Source (.cpp/.h)</li>
                    <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Layers className="size-4" /> PCB Gerber Files</li>
                    <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Layout className="size-4" /> STEP Mechanical Models</li>
                    <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Terminal className="size-4" /> Deployment Scripts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout / Pricing Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-6">
            <div className="glass-panel p-8 space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Total Access</p>
                  <p className="text-4xl font-sans font-black text-on-surface">${project.price}</p>
                </div>
                <div className="px-2 py-1 bg-green-500/10 text-green-500 rounded-lg text-[10px] font-black uppercase mb-1">
                  Lifetime Updates
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full h-14 bg-primary text-on-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
                  <ShoppingCart className="size-5" /> Buy Blueprint
                </button>
                <button className="w-full h-14 bg-surface-container-high border border-outline-variant/10 text-on-surface rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all">
                  Try Demo Workspace
                </button>
              </div>

              <div className="pt-6 border-t border-outline-variant/10 space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant">
                  <RotateCcw className="size-4" /> 14-Day Engineering Audit Guarantee
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant">
                  <ShieldCheck className="size-4" /> Verified Professional Creator
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                 <button className="flex-grow h-12 flex items-center justify-center gap-2 bg-surface-container border border-outline-variant/10 rounded-xl text-xs font-bold hover:bg-secondary/10 hover:text-secondary hover:border-secondary transition-all">
                   <Bookmark className="size-4" /> Save
                 </button>
                 <button className="flex-grow h-12 flex items-center justify-center gap-2 bg-surface-container border border-outline-variant/10 rounded-xl text-xs font-bold hover:bg-primary/10 hover:text-primary hover:border-primary transition-all text-nowrap">
                   <Share2 className="size-4" /> Share
                 </button>
              </div>
            </div>

            {/* Quick Support Card */}
            <div className="glass-card p-6 flex items-center gap-4">
               <div className="size-12 bg-surface-container-high rounded-2xl flex items-center justify-center">
                 <Zap className="size-6 text-tertiary" />
               </div>
               <div>
                 <h4 className="text-sm font-bold text-on-surface">Need a customization?</h4>
                 <p className="text-xs text-on-surface-variant">Contact the creator for bespoke modifications.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function ChevronRight({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
