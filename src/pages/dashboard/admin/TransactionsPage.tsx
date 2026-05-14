import { motion } from 'motion/react';
import { Search, Download, Filter, ArrowUpRight, ArrowDownLeft, ExternalLink, CreditCard } from 'lucide-react';

const transactions = [
  { id: 'TX-9012', type: 'Sale', amount: '+$1,240.00', user: 'engineer@pinnacle.hub', project: 'Solar Inverter Design', date: '2 hours ago', status: 'Success' },
  { id: 'TX-8831', type: 'Withdrawal', amount: '-$5,000.00', user: 'smith@cyber.tech', project: '-', date: '5 hours ago', status: 'Pending' },
  { id: 'TX-7712', type: 'Sale', amount: '+$890.00', user: 'sarah@circuit.dev', project: 'PCB Layout Designs', date: '1 day ago', status: 'Success' },
  { id: 'TX-6621', type: 'Refund', amount: '-$45.00', user: 'buyer@generic.ca', project: 'Drone Logic', date: '2 days ago', status: 'Success' },
];

export default function TransactionsPage() {
  return (
    <div className="space-y-8 text-on-surface">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Platform Transactions</h1>
          <p className="text-on-surface-variant">Audit financial flow, sales, and withdrawals.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-high border border-outline-variant/30 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-surface-variant transition-all">
          <Download className="w-4 h-4" />
          <span>Export Ledger</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Platform Gross', value: '$241,890', sub: 'Gross Merchandise Value' },
          { label: 'Network Fees', value: '$12,094', sub: '5% Take Rate' },
          { label: 'Total Payouts', value: '$186,412', sub: 'Paid to Creators' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">{stat.label}</div>
            <div className="text-2xl font-bold tracking-tighter mb-1">{stat.value}</div>
            <div className="text-[10px] font-medium text-on-surface-variant/70 uppercase tracking-widest">{stat.sub}</div>
          </motion.div>
        ))}
      </div>

      <div className="glass-panel overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-xs text-on-surface-variant font-bold uppercase tracking-widest text-left">
                <th className="px-6 py-5">TX ID / Type</th>
                <th className="px-6 py-5">User Account</th>
                <th className="px-6 py-5">Project Context</th>
                <th className="px-6 py-5">Amount</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {transactions.map((tx, i) => (
                <motion.tr 
                  key={tx.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${tx.type === 'Sale' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'}`}>
                        {tx.type === 'Sale' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownLeft className="w-4 h-4" />}
                      </div>
                      <div>
                         <div className="text-xs font-bold font-mono">{tx.id}</div>
                         <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{tx.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium">{tx.user}</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">{tx.project}</td>
                  <td className={`px-6 py-5 text-sm font-mono font-bold ${tx.amount.startsWith('+') ? 'text-green-500' : 'text-on-surface'}`}>
                    {tx.amount}
                  </td>
                  <td className="px-6 py-5">
                     <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${tx.status === 'Success' ? 'bg-green-500/10 text-green-500' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                        {tx.status}
                     </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                     <button className="p-2 text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
                        <ExternalLink className="w-4 h-4" />
                     </button>
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
