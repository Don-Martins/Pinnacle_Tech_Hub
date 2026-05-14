import { motion } from 'motion/react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Eye, ShoppingCart, UserCheck, TrendingUp, Globe, Smartphone, Monitor } from 'lucide-react';

const areaData = [
  { name: 'Jan', views: 4000, sales: 2400 },
  { name: 'Feb', views: 3000, sales: 1398 },
  { name: 'Mar', views: 2000, sales: 9800 },
  { name: 'Apr', views: 2780, sales: 3908 },
  { name: 'May', views: 1890, sales: 4800 },
  { name: 'Jun', views: 2390, sales: 3800 },
];

const pieData = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 100 },
];

const COLORS = ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-tertiary)'];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Performance Analytics</h1>
        <p className="text-on-surface-variant">Deep dive into your sales and traffic data.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Project Views', value: '124,302', icon: Eye, color: 'text-blue-500' },
          { label: 'Total Conversions', value: '3,842', icon: ShoppingCart, color: 'text-green-500' },
          { label: 'Conversion Rate', value: '3.1%', icon: UserCheck, color: 'text-purple-500' },
          { label: 'Growth', value: '+14.2%', icon: TrendingUp, color: 'text-orange-500' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className="text-3xl font-extrabold tracking-tighter">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-panel p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold tracking-tight">Traffic vs Sales</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Views</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full" />
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Sales</span>
              </div>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-on-surface-variant)', fontSize: 10, fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--color-on-surface-variant)', fontSize: 10, fontWeight: 600 }} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--color-surface-container-high)', borderRadius: '12px', border: 'none' }} />
                <Area type="monotone" dataKey="views" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.1} strokeWidth={3} />
                <Area type="monotone" dataKey="sales" stroke="var(--color-secondary)" fill="var(--color-secondary)" fillOpacity={0.1} strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold tracking-tight mb-8">Device Distribution</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4 mt-4">
            {pieData.map((item, i) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {i === 0 ? <Monitor className="w-4 h-4 text-primary" /> : i === 1 ? <Smartphone className="w-4 h-4 text-secondary" /> : <Globe className="w-4 h-4 text-tertiary" />}
                  <span className="text-sm font-semibold">{item.name}</span>
                </div>
                <span className="text-sm font-bold font-mono">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
