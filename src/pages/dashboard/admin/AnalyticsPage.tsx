import { motion } from 'motion/react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, ShoppingBag, Landmark, TrendingUp, Globe, MousePointer2 } from 'lucide-react';

const data = [
  { name: 'Mon', revenue: 12000, users: 400 },
  { name: 'Tue', revenue: 15000, users: 450 },
  { name: 'Wed', revenue: 11000, users: 380 },
  { name: 'Thu', revenue: 19000, users: 600 },
  { name: 'Fri', revenue: 22000, users: 700 },
  { name: 'Sat', revenue: 25000, users: 800 },
  { name: 'Sun', revenue: 28000, users: 950 },
];

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-8 text-on-surface">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Global Analytics</h1>
        <p className="text-on-surface-variant">Overall platform health and growth metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Users', value: '52.4k', grow: '+8%', icon: Users },
          { label: 'Monthly GMV', value: '$841k', grow: '+12%', icon: Landmark },
          { label: 'Active Projects', value: '4,102', grow: '+4%', icon: ShoppingBag },
          { label: 'Platform CTR', value: '4.8%', grow: '+1%', icon: MousePointer2 },
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
              <stat.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="text-3xl font-extrabold tracking-tighter mb-1">{stat.value}</div>
            <div className="text-[10px] font-bold text-green-500">{stat.grow} this month</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-panel p-8">
          <h3 className="text-xl font-bold tracking-tight mb-8">Platform Revenue Growth</h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-on-surface-variant)', fontSize: 10, fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--color-on-surface-variant)', fontSize: 10, fontWeight: 600 }} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--color-surface-container-high)', borderRadius: '12px', border: 'none' }} />
                <Area type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={4} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-8 space-y-8">
          <h3 className="text-xl font-bold tracking-tight">Active Reach</h3>
          <div className="space-y-6">
            {[
              { region: 'North America', value: '42%' },
              { region: 'Europe', value: '31%' },
              { region: 'Asia Pacific', value: '18%' },
              { region: 'Latin America', value: '9%' },
            ].map((reg, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                   <span>{reg.region}</span>
                   <span>{reg.value}</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: reg.value }} className="h-full bg-primary" transition={{ delay: i * 0.1, duration: 1 }} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-white/5">
             <div className="flex items-center gap-3 text-on-surface-variant mb-4">
                <Globe className="w-5 h-5" />
                <div className="font-bold text-sm tracking-tight">Global Traffic Nodes</div>
             </div>
             <p className="text-xs text-on-surface-variant leading-relaxed">
               Pinnacle Hub currently serves engineering assets across 12 region clusters via decentralized node distribution.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
