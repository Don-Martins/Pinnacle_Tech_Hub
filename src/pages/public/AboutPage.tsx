import { motion } from 'motion/react';
import { Target, Users, Shield, Zap } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Creators', value: '1,200+' },
    { label: 'Projects', value: '5,000+' },
    { label: 'Students', value: '50,000+' },
    { label: 'Countries', value: '120+' },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 gradient-text"
          >
            Engineering the Future, <br />One Project at a Time.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-on-surface-variant max-w-3xl mx-auto"
          >
            Pinnacle Hub is the premier marketplace for high-end engineering source code, 
            schematics, and CAD models. We empower creators and accelerate learning.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-sm font-medium text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mission/Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-panel p-10 space-y-6"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="text-on-surface-variant leading-relaxed">
              To democratize advanced engineering knowledge by providing a secure, 
              high-quality marketplace where innovators can share their work and 
              learn from real-world applications.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-panel p-10 space-y-6"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Becoming the global standard for engineering collaboration, where every 
              schematic, piece of code, and architectural model is accessible to the 
              next generation of builders.
            </p>
          </motion.div>
        </div>

        {/* Features */}
        <div className="space-y-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Why Pinnacle Hub?</h2>
            <p className="text-on-surface-variant">Built by engineers, for engineers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Verified Quality', icon: Shield, desc: 'Every project is manually reviewed by our engineering moderation team.' },
              { title: 'Creator First', icon: Users, desc: 'Highest industry payouts for creators and transparent royalty systems.' },
              { title: 'Instant Access', icon: Zap, desc: 'Direct downloads for code, STL files, and bill of materials instantly.' }
            ].map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="w-10 h-10 bg-surface-container-high rounded-xl flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
