import { motion } from 'motion/react';
import { Search, Filter, MoreVertical, Ban, ShieldCheck, Mail, UserPlus, UserX } from 'lucide-react';

const users = [
  { id: 'USR-1290', name: 'Elite Engineer', email: 'engineer@pinnacle.hub', role: 'Buyer', status: 'Active', joined: 'Oct 20, 2024' },
  { id: 'USR-3342', name: 'CyberSmith', email: 'smith@cyber.tech', role: 'Seller', status: 'Active', joined: 'Oct 15, 2024' },
  { id: 'USR-8821', name: 'Bad Actor', email: 'spam@bot.com', role: 'Buyer', status: 'Suspended', joined: 'Nov 01, 2024' },
  { id: 'USR-0042', name: 'Sarah Chen', email: 'sarah@circuit.dev', role: 'Seller', status: 'Active', joined: 'Sep 28, 2024' },
];

export default function UserManagementPage() {
  return (
    <div className="space-y-8 text-on-surface">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">User Registry</h1>
        <p className="text-on-surface-variant">Monitor roles, permissions, and account status across the platform.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search by name, email, or ID..."
            className="w-full bg-surface-container border border-outline-variant rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container border border-outline-variant rounded-xl text-sm font-semibold hover:bg-surface-variant transition-colors">
            <Filter className="w-4 h-4 text-on-surface-variant" />
            <span>Role: All</span>
          </button>
        </div>
      </div>

      <div className="glass-panel overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-xs text-on-surface-variant font-bold uppercase tracking-widest text-left">
                <th className="px-6 py-5">User Identity</th>
                <th className="px-6 py-5">Role</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Joined Date</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((user, i) => (
                <motion.tr 
                  key={user.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center font-bold text-primary">
                        {user.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-sm mb-0.5">{user.name}</div>
                        <div className="text-[10px] font-mono text-on-surface-variant">{user.id} • {user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                      user.role === 'Seller' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      user.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-error/10 text-error'
                    }`}>
                      <div className={`w-1 h-1 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-error'}`} />
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">{user.joined}</td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-on-surface-variant hover:text-primary" title="Message User">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-on-surface-variant hover:text-error" title={user.status === 'Active' ? "Suspend User" : "Unsuspend User"}>
                        {user.status === 'Active' ? <UserX className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                      </button>
                      <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-on-surface-variant hover:text-on-surface">
                        <MoreVertical className="w-4 h-4" />
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
