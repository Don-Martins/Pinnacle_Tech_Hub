import { motion } from 'motion/react';
import { Search, Download, ExternalLink, Calendar, CreditCard, ChevronRight } from 'lucide-react';

const orders = [
  { 
    id: 'ORD-2024-8831', 
    date: 'Oct 24, 2024', 
    project: 'Advanced Robotic Arm Controller',
    amount: '$149.00',
    status: 'Completed',
    method: 'PayPal'
  },
  { 
    id: 'ORD-2024-7712', 
    date: 'Sep 12, 2024', 
    project: 'Autonomous Drone Flight Path System',
    amount: '$299.00',
    status: 'Completed',
    method: 'PayPal'
  },
  { 
    id: 'ORD-2024-5542', 
    date: 'Aug 05, 2024', 
    project: 'Smart Home Hub Architecture',
    amount: '$75.00',
    status: 'Completed',
    method: 'PayPal'
  }
];

export default function OrderHistoryPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Order History</h1>
        <p className="text-on-surface-variant">Manage your transactions and download receipts.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search by order ID or project..."
            className="w-full bg-surface-container border border-outline-variant rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="glass-panel overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-xs text-on-surface-variant font-bold uppercase tracking-widest text-left">
                <th className="px-6 py-5">Order Details</th>
                <th className="px-6 py-5">Date</th>
                <th className="px-6 py-5">Amount</th>
                <th className="px-6 py-5">Method</th>
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
                    <div className="text-[10px] font-mono text-on-surface-variant">{order.id}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-on-surface">
                      <Calendar className="w-3.5 h-3.5 text-on-surface-variant" />
                      {order.date}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-mono font-bold text-primary">{order.amount}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <CreditCard className="w-3.5 h-3.5" />
                      {order.method}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-500 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      <div className="w-1 h-1 bg-green-500 rounded-full" />
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-on-surface-variant hover:text-on-surface" title="Download Receipt">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-on-surface-variant hover:text-primary" title="View Details">
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
