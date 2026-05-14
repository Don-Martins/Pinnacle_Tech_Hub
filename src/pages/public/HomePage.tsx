import { motion } from 'motion/react';
import { Rocket, ArrowRight, ShieldCheck, Zap, Code2, Database, Cpu, Users, Star, Globe, Layout, Smartphone, Mail, ChevronDown, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { name: 'Source Code', desc: 'Production-ready codebases with clean architecture.', icon: Code2, color: 'text-primary' },
    { name: 'Schematics', desc: 'Professional PCB designs and electrical layouts.', icon: Cpu, color: 'text-secondary' },
    { name: 'Mechanical', desc: 'Precise CAD models and technical assemblies.', icon: Database, color: 'text-tertiary' },
  ];

  const stats = [
    { label: 'Active Engineers', value: '45,000+' },
    { label: 'Project Blueprints', value: '12,500+' },
    { label: 'Creator Earnings', value: '$8.4M+' },
    { label: 'Success Rate', value: '99.9%' },
  ];

  const categories = [
    { name: 'Embedded Systems', icon: Cpu, count: '1.2k' },
    { name: 'Robotics', icon: Rocket, count: '840' },
    { name: 'IoT', icon: Globe, count: '2.1k' },
    { name: 'UI/UX', icon: Layout, count: '3.4k' },
  ];

  const faqs = [
    { q: "How do I download the project files?", a: "Once your purchase is successful, all assets including source code, CAD models, and bill of materials will be instantly available in your library for download." },
    { q: "Can I use the source code for my own commercial projects?", a: "Yes, most projects come with a license that allows for individual and commercial use, provided you follow the specific license terms included in the project documentation." },
    { q: "What support do you provide for purchased projects?", a: "Pinnacle Hub provides a direct communication channel with the creators. You can ask technical questions and get support directly from the engineers who built the project." },
    { q: "How do I become a verified creator?", a: "You can apply via the Creator Application page. We review your portfolio and technical expertise to ensure the highest standards on our platform." },
  ];

  return (
    <div className="relative overflow-hidden bg-surface">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[160px] animate-pulse-glow" />
          <div className="absolute bottom-[10%] right-[-5%] w-[45%] h-[45%] bg-secondary/10 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-left"
            >
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-sans font-black tracking-[-0.06em] text-on-surface mb-10 leading-[0.82]">
                SOURCE <br /> 
                <span className="gradient-text">ENGINEERING</span>
              </h1>
              
              <p className="max-w-xl text-lg md:text-2xl text-on-surface-variant mb-16 font-medium leading-relaxed opacity-80">
                The premium hub for professional engineering blueprints, high-fidelity source code, and elite technical assets.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <Link to="/marketplace" className="group relative flex-grow sm:flex-none px-12 py-6 bg-primary text-on-primary rounded-2xl font-black text-xl transition-all overflow-hidden shadow-2xl shadow-primary/20">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    Browse Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
                <Link to="/dashboard/admin" className="flex-grow sm:flex-none px-12 py-6 bg-surface-container border border-outline-variant/20 backdrop-blur-xl rounded-2xl font-black text-xl hover:bg-surface-variant/80 transition-all text-on-surface flex items-center justify-center gap-3 group">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <span>Admin Panel</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200&h=1000" 
                  alt="Industrial Engineering" 
                  className="w-full h-full object-cover aspect-[4/5]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Tech Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 z-20 glass-panel p-8 max-w-[280px]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">Live Updates</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Global Sync</div>
                  </div>
                </div>
                <div className="text-3xl font-black tracking-tighter text-on-surface">12,402+ Blueprints</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-24 border-y border-outline-variant/10 bg-surface-dim/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">{stat.value}</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest leading-none">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-xs font-bold text-primary uppercase tracking-[0.3em]">The Pinnacle Standard</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">Elite Assets for Elite Engineers.</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed">
                We believe in architectural purity and technical excellence. Every project on our platform 
                undergoes a rigorous manual review process by our senior engineering moderation team.
              </p>
              <ul className="space-y-6">
                {[
                  { t: 'Verified Source Code', d: 'Fully documented, peer-reviewed, and production-ready.' },
                  { t: 'Bill of Materials (BOM)', d: 'Complete inventory lists with direct sourcing links.' },
                  { t: '24/7 Creator Support', d: 'Direct access to the engineers who built the assets.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface">{item.t}</h4>
                      <p className="text-sm text-on-surface-variant">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] animate-pulse rounded-full" />
              <div className="relative glass-panel w-full h-full p-8 overflow-hidden group">
                <div className="w-full h-full bg-surface-container rounded-2xl border border-white/5 p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="h-2 w-1/2 bg-primary/30 rounded-full" />
                    <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                    <div className="h-2 w-1/3 bg-secondary/30 rounded-full" />
                    <div className="pt-8 grid grid-cols-2 gap-4">
                      <div className="aspect-video bg-white/5 rounded-xl border border-white/5 animate-pulse" />
                      <div className="aspect-video bg-white/5 rounded-xl border border-white/5 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 blur-3xl rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-32 bg-surface-dim/40 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 px-2">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">Trending Now</div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Active Repositories.</h2>
            </div>
            <Link to="/marketplace" className="text-sm font-bold text-primary hover:underline flex items-center gap-2 group">
              View All Marketplace <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card group overflow-hidden"
              >
                <div className="aspect-video bg-surface-container-high overflow-hidden relative">
                   <img src={`https://images.unsplash.com/photo-${1581091226825 + i}?auto=format&fit=crop&q=80&w=600&h=400`} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                      V3.4 Ready
                   </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">Advanced Robotic Control</h3>
                      <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest">By RoboMaster</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                      <span className="text-xs font-bold">4.9</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-surface-container text-[10px] font-bold text-on-surface-variant rounded uppercase tracking-wider">C++</span>
                    <span className="px-2 py-1 bg-surface-container text-[10px] font-bold text-on-surface-variant rounded uppercase tracking-wider">ROS2</span>
                    <span className="px-2 py-1 bg-surface-container text-[10px] font-bold text-on-surface-variant rounded uppercase tracking-wider">PCB</span>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="text-2xl font-black tracking-tighter">$149.00</div>
                    <button className="p-3 bg-primary text-white rounded-xl hover:scale-110 transition-all shadow-xl shadow-primary/20">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Creator CTA */}
      <section className="py-40 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto space-y-12"
          >
            <h2 className="text-5xl md:text-7xl font-sans font-black tracking-tight leading-none text-on-surface">
              Architect the <br /> <span className="text-primary italic">Next Generation.</span>
            </h2>
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed opacity-80">
              Are you an elite engineer with professional project files? Join our inner circle of creators 
              and monetize your engineering expertise with the highest royalty rates in the industry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/register" className="px-10 py-5 bg-on-surface text-surface rounded-2xl font-black text-lg hover:scale-[1.02] transition-all">
                Become a Creator
              </Link>
              <Link to="/contact" className="px-10 py-5 border border-outline-variant rounded-2xl font-black text-lg hover:bg-surface-variant transition-all">
                Expert Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-surface-dim/20 border-t border-outline-variant/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4">Common Inquiries</h2>
            <p className="text-on-surface-variant">Everything you need to know about the hub.</p>
          </div>
          
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-bold tracking-tight text-on-surface">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-on-surface-variant transition-transform", openFaq === i && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8 text-on-surface-variant text-sm leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
