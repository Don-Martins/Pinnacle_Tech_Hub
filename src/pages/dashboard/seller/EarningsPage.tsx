import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Wallet, ArrowUpRight, TrendingUp, Landmark, ArrowRight, Download } from 'lucide-react';

const data = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 5000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

const transactions = [
  { id: 'TX-9012', amount: '+$1,240.00', date: '2 hours ago', status: 'Completed', type: 'Sale' },
  { id: 'TX-8831', amount: '-$5,000.00', date: 'Yesterday', status: 'Pending', type: 'Withdrawal' },
  { id: 'TX-7712', amount: '+$890.00', date: '2 days ago', status: 'Completed', type: 'Sale' },
];

export default function EarningsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Financial Hub</h1>
          <p className="text-on-surface-variant">Manage balances and withdrawal requests.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
          <Landmark className="w-5 h-5" />
          <span>Request Payout</span>
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Stats */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 bg-primary/5 border-primary/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 text-primary/10 transition-transform group-hover:scale-110 group-hover:-rotate-12">
                <Wallet className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Total Balance</div>
                <div className="text-4xl font-extrabold tracking-tighter text-on-surface mb-2">$12,842.10</div>
                <p className="text-on-surface-variant text-sm">Available for instant withdrawal</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 bg-secondary/5 border-secondary/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 text-secondary/10 transition-transform group-hover:scale-110 group-hover:-rotate-12">
                <TrendingUp className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Total Revenue</div>
                <div className="text-4xl font-extrabold tracking-tighter text-on-surface mb-2">$42,910.45</div>
                <p className="text-on-surface-variant text-sm flex items-center gap-1">
                  <ArrowUpRight className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-green-500 font-bold">+22.4%</span> vs last month
                </p>
              </div>
            </motion.div>
          </div>

          <div className="glass-panel p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold racking-tight">Revenue Insights</h3>
              <div className="flex gap-2">
                <select className="bg-surface-container border border-outline-variant rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-widest focus:outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-on-surface-variant)', fontSize: 10, fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-on-surface-variant)', fontSize: 10, fontWeight: 600 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--color-surface-container-high)', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 700
                    }} 
                  />
                  <Area type="monotone" dataKey="sales" stroke="var(--color-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Financial Activity */}
        <div className="space-y-6">
          <div className="glass-panel p-8">
            <h3 className="text-xl font-bold tracking-tight mb-8">Payout Methods</h3>
            <div className="space-y-4">
              {[
                { name: 'Bank Account •••• 4242', icon: Landmark, primary: true },
                { name: 'PayPal Account', icon: Wallet, primary: false }
              ].map((method) => (
                <div key={method.name} className={`p-4 rounded-xl border flex items-center justify-between ${
                  method.primary ? 'bg-primary/5 border-primary/20' : 'bg-surface-container border-outline-variant/30 opacity-60'
                }`}>
                  <div className="flex items-center gap-3">
                    <method.icon className={`w-5 h-5 ${method.primary ? 'text-primary' : 'text-on-surface-variant'}`} />
                    <span className="text-sm font-semibold">{method.name}</span>
                  </div>
                  {method.primary && <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Primary</div>}
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border border-dashed border-outline-variant rounded-xl text-xs font-bold text-on-surface-variant hover:border-primary hover:text-primary transition-all uppercase tracking-widest">
              + Add Payout Method
            </button>
          </div>

          <div className="glass-panel p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold tracking-tight">Recent Activity</h3>
              <ArrowRight className="w-4 h-4 text-on-surface-variant cursor-pointer hover:text-primary" />
            </div>
            <div className="space-y-6">
              {transactions.map((tx) => (
                <div key={tx.id} className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                       <span className="text-sm font-bold">{tx.type}</span>
                       <span className="text-[10px] font-mono text-on-surface-variant">{tx.id}</span>
                    </div>
                    <div className="text-xs text-on-surface-variant">{tx.date}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-bold font-mono ${tx.amount.startsWith('+') ? 'text-green-500' : 'text-on-surface'}`}>
                      {tx.amount}
                    </div>
                    <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{tx.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
