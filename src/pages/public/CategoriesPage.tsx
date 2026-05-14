import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cpu, Box, Cloud, Globe, Car, Plane, Battery, Code } from 'lucide-react';

const categories = [
  { name: 'Embedded Systems', icon: Cpu, count: 124, color: 'text-blue-500' },
  { name: 'Mechanical CAD', icon: Box, count: 86, color: 'text-green-500' },
  { name: 'IoT Solutions', icon: Cloud, count: 64, color: 'text-purple-500' },
  { name: 'Web Engineering', icon: Globe, count: 210, color: 'text-orange-500' },
  { name: 'Automotive', icon: Car, count: 42, color: 'text-red-500' },
  { name: 'Aerospace', icon: Plane, count: 31, color: 'text-cyan-500' },
  { name: 'Renewable Energy', icon: Battery, count: 55, color: 'text-emerald-500' },
  { name: 'FPGA & ASIC', icon: Code, count: 28, color: 'text-amber-500' },
];

export default function CategoriesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4"
          >
            Explore Categories
          </motion.h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Browse through specialized engineering domains to find the project that matches your expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <Link to={`/marketplace?category=${cat.name.toLowerCase()}`}>
                <div className="glass-card p-8 h-full flex flex-col items-center text-center transition-all group-hover:bg-surface-container-high/60 group-hover:border-primary/20">
                  <div className={`p-4 rounded-2xl bg-surface-container-high mb-6 transition-transform group-hover:scale-110`}>
                    <cat.icon className={`w-8 h-8 ${cat.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cat.name}</h3>
                  <p className="text-sm text-on-surface-variant font-medium uppercase tracking-widest">{cat.count} AVAILABLE</p>
                  
                  <div className="mt-8 flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-highest opacity-0 group-hover:opacity-100 transition-opacity">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 glass-panel p-12 overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight mb-6">Can't find what you're looking for?</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Our network of elite engineers is growing every day. Suggest a new category or request a custom project architecture from our top creators.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Request a Category
              </Link>
            </div>
            <div className="relative h-64 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                    className="w-16 h-16 bg-surface-container/80 rounded-xl border border-white/5"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
