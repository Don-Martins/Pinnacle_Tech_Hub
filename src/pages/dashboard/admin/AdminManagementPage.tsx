import { motion } from 'motion/react';
import { Shield, Plus, Key, LogOut, ChevronRight, UserCheck } from 'lucide-react';

const admins = [
  { id: 'ADM-001', name: 'Master AI', role: 'Super Admin', lastActive: 'Online Now', status: 'Active' },
  { id: 'ADM-002', name: 'Security Lead', role: 'System Admin', lastActive: '2h ago', status: 'Active' },
  { id: 'ADM-005', name: 'Mod Team Alpha', role: 'Moderator', lastActive: 'Yesterday', status: 'Inactive' },
];

export default function AdminManagementPage() {
  return (
    <div className="space-y-8 text-on-surface">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Team Management</h1>
          <p className="text-on-surface-variant">Control administrative access and audit internal logs.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
          <Plus className="w-5 h-5" />
          <span>Add Admin</span>
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/5 text-xs text-on-surface-variant font-bold uppercase tracking-widest text-left">
                    <th className="px-6 py-5">Admin Identity</th>
                    <th className="px-6 py-5">Permission Level</th>
                    <th className="px-6 py-5">Last Activity</th>
                    <th className="px-6 py-5 text-right">Access</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {admins.map((admin, i) => (
                    <tr key={admin.id} className="group hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-5">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                               {admin.name[0]}
                            </div>
                            <div className="font-bold text-sm">{admin.name}</div>
                         </div>
                      </td>
                      <td className="px-6 py-5">
                         <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${
                            admin.role.includes('Super') ? 'bg-secondary/10 text-secondary border border-secondary/20' : 'bg-surface-container-high border border-outline-variant/30 text-on-surface-variant'
                         }`}>
                            {admin.role}
                         </span>
                      </td>
                      <td className="px-6 py-5 text-xs font-medium text-on-surface-variant">{admin.lastActive}</td>
                      <td className="px-6 py-5 text-right">
                         <button className="p-2 text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
                            <Key className="w-4 h-4" />
                         </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
           <div className="glass-panel p-8 space-y-6">
             <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
             </div>
             <div>
                <h3 className="text-xl font-bold tracking-tight">Security Protocol</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-2">
                   All administrative actions are cryptographically signed and stored in the immutable system ledger.
                </p>
             </div>
             <button className="w-full py-3 bg-surface-container-high rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-surface-variant transition-all flex items-center justify-center gap-2">
                <span>View Full Audit Logs</span>
                <ChevronRight className="w-3.5 h-3.5" />
             </button>
           </div>
           
           <div className="glass-panel p-8 space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-on-surface-variant">System Integrity</h4>
              <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl">
                 <div className="flex items-center gap-3">
                    <UserCheck className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-bold">2FA Mandatory</span>
                 </div>
                 <div className="w-8 h-4 bg-primary rounded-full relative">
                    <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
