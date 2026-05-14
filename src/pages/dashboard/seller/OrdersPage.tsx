import { motion } from 'motion/react';
import { Search, Filter, ExternalLink, Download, User, Calendar, CreditCard } from 'lucide-react';

const orders = [
  { 
    id: 'ORD-8831', 
    customer: 'Elite Engineer', 
    project: 'Advanced Robotic Arm Controller',
    amount: '$149.00',
    net: '$119.20',
    status: 'Paid',
    date: '2 hours ago'
  },
  { 
    id: 'ORD-7712', 
    customer: 'AutoTech Inc.', 
    project: 'Autonomous Drone Flight Path System',
    amount: '$299.00',
    net: '$239.20',
    status: 'Paid',
    date: '5 hours ago'
  },
  { 
    id: 'ORD-5542', 
    customer: 'Sarah Chen', 
    project: 'High-Efficiency PCB Layout Designs',
    amount: '$89.00',
    net: '$71.20',
    status: 'Pending',
    date: '1 day ago'
  }
];

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Project Sales</h1>
        <p className="text-on-surface-variant">Monitor orders and customer interactions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Orders', value: '412', grow: '+12%', sub: 'vs last 30 days' },
          { label: 'Pending Sales', value: '18', grow: '', sub: 'Awaiting clearance' },
          { label: 'Completion Rate', value: '99.4%', grow: '+0.2%', sub: 'Customer satisfaction' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">{stat.label}</div>
            <div className="text-3xl font-bold tracking-tighter mb-2">{stat.value}</div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">{stat.grow}</span>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">{stat.sub}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search orders, customers, or IDs..."
            className="w-full bg-surface-container border border-outline-variant rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="glass-panel overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-xs text-on-surface-variant font-bold uppercase tracking-widest text-left">
                <th className="px-6 py-5">Order Context</th>
                <th className="px-6 py-5">Customer</th>
                <th className="px-6 py-5">Amount</th>
                <th className="px-6 py-5">Net Earnings</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {orders.map((order, i) => (
                <motion.tr 
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="font-bold text-sm mb-0.5">{order.project}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-[10px] font-mono text-on-surface-variant">{order.id}</div>
                      <div className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">• {order.date}</div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center">
                        <User className="w-4 h-4 text-on-surface-variant" />
                      </div>
                      <span className="text-sm font-semibold">{order.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-mono">{order.amount}</td>
                  <td className="px-6 py-5 text-sm font-mono font-bold text-primary">{order.net}</td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      order.status === 'Paid' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      <div className={`w-1 h-1 rounded-full ${order.status === 'Paid' ? 'bg-green-500' : 'bg-amber-500'}`} />
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-on-surface-variant hover:text-on-surface">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-on-surface-variant hover:text-primary">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
