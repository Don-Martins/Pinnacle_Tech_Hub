import { motion } from 'motion/react';
import { Search, Filter, Cpu, Code2, Database, Star, ShoppingCart, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

const PROJECTS = [
  {
    id: '1',
    title: 'Autonomous Drone Flight Controller',
    category: 'Robotics',
    price: 199,
    rating: 4.9,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800',
    tags: ['C++', 'Firmware', 'STM32'],
    creator: 'SkyNet Dynamics'
  },
  {
    id: '2',
    title: 'Distributed Cloud Storage Engine',
    category: 'Backend',
    price: 349,
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    tags: ['Go', 'Kubernetes', 'Storage'],
    creator: 'CloudMatrix'
  },
  {
    id: '3',
    title: 'Haptic Feedback Surgical Arm',
    category: 'Mechanical',
    price: 1250,
    rating: 5.0,
    reviews: 24,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    tags: ['SolidWorks', 'Arduino', 'Python'],
    creator: 'MedTech Labs'
  },
  {
    id: '4',
    title: 'Neural Network Optimizer Core',
    category: 'AI/ML',
    price: 499,
    rating: 4.7,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tags: ['PyTorch', 'Cuda', 'AI'],
    creator: 'NeuralNodes'
  },
];

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Robotics', 'Backend', 'Mechanical', 'AI/ML', 'Frontend', 'IoT'];

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-sans font-black tracking-[-0.05em] text-on-surface mb-6 leading-[0.85]">
                ENGINEERING <br /> <span className="gradient-text">CATALOG</span>
              </h1>
              <p className="text-xl text-on-surface-variant font-medium opacity-80 leading-relaxed max-w-xl text-balance">
                Access professional schematics, verified source code, and precision models from top-tier creators worldwide.
              </p>
            </div>
            
            <div className="flex bg-surface-container-high/50 backdrop-blur-xl rounded-2xl p-1.5 border border-outline-variant shrink-0 overflow-x-auto no-scrollbar shadow-2xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-3 text-[11px] font-black rounded-xl transition-all whitespace-nowrap uppercase tracking-[0.1em]",
                    activeCategory === cat 
                      ? "bg-primary text-on-primary shadow-[0_0_20px_rgba(59,130,246,0.5)]" 
                      : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="flex-grow flex items-center bg-surface-container-high rounded-2xl px-4 border border-outline-variant/10 focus-within:border-primary/50 transition-all">
            <Search className="w-5 h-5 text-on-surface-variant mr-3" />
            <input 
              type="text" 
              placeholder="Search for projects, tech stacks, or keywords..." 
              className="bg-transparent border-none focus:outline-none h-14 text-sm w-full placeholder:text-on-surface-variant/50"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 h-14 bg-surface-container-high border border-outline-variant/10 rounded-2xl text-sm font-bold hover:bg-surface-container-highest transition-all group shrink-0">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col glass-card overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest/80 to-transparent flex items-bottom p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="mt-auto w-full flex justify-between items-center text-white">
                      <span className="text-xs font-bold uppercase tracking-tight">{project.category}</span>
                      <div className="flex items-center gap-1 bg-surface/60 backdrop-blur-md px-2 py-1 rounded-lg">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-[10px] font-bold">{project.rating}</span>
                      </div>
                   </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-tighter uppercase px-2 py-0.5 bg-surface-container-highest text-primary rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-sans font-bold text-on-surface mb-2 leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-on-surface-variant font-medium mb-4">by {project.creator}</p>
                
                <div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Price</span>
                    <span className="text-xl font-sans font-black text-on-surface">${project.price}</span>
                  </div>
                  <Link to={`/project/${project.id}`} className="size-10 rounded-xl bg-primary text-on-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md shadow-primary/20">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
