import { motion } from 'motion/react';
import { Search, ShieldCheck, ShieldAlert, CheckCircle2, XCircle, ExternalLink, Award } from 'lucide-react';

const applications = [
  { id: 'APP-012', name: 'Dr. Robert Fox', email: 'robert@unilab.edu', specialization: 'Aerospace Engineering', experience: '15 years', status: 'Pending' },
  { id: 'APP-015', name: 'Cody Fisher', email: 'cody@robotics.dev', specialization: 'Motion Control', experience: '8 years', status: 'Pending' },
];

const sellers = [
  { id: 'SEL-4421', name: 'RoboMaster', projects: 12, rating: 4.9, earnings: '$142k', status: 'Verified' },
  { id: 'SEL-9902', name: 'CircuitSage', projects: 8, rating: 4.8, earnings: '$89k', status: 'Verified' },
];

export default function SellerManagementPage() {
  return (
    <div className="space-y-12 text-on-surface">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Seller Hub Admin</h1>
        <p className="text-on-surface-variant">Review applications and manage verified creator status.</p>
      </div>

      {/* Applications */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-6 h-6 text-amber-500" />
          <h2 className="text-xl font-bold tracking-tight">Pending Applications</h2>
        </div>

        <div className="grid gap-4">
          {applications.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{app.name}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-on-surface-variant font-medium">
                    <span>{app.specialization}</span>
                    <span className="uppercase tracking-widest text-primary">• {app.experience} Exp.</span>
                    <span>• {app.email}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 w-full md:w-auto">
                <button className="flex-grow md:flex-none p-2 bg-green-500/10 text-green-500 rounded-xl hover:bg-green-500 hover:text-white transition-all flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Approve</span>
                </button>
                <button className="flex-grow md:flex-none p-2 bg-error/10 text-error rounded-xl hover:bg-error hover:text-white transition-all flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest">
                  <XCircle className="w-4 h-4" />
                  <span>Reject</span>
                </button>
                <button className="p-2 bg-surface-container-high rounded-xl hover:bg-surface-variant transition-all">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Verified Sellers */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold tracking-tight">Verified Creators</h2>
        </div>

        <div className="glass-panel overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-xs text-on-surface-variant font-bold uppercase tracking-widest text-left">
                  <th className="px-6 py-5">Creator</th>
                  <th className="px-6 py-5">Projects</th>
                  <th className="px-6 py-5">Rating</th>
                  <th className="px-6 py-5">Total Sales</th>
                  <th className="px-6 py-5 text-right">Management</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {sellers.map((seller, i) => (
                  <motion.tr 
                    key={seller.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="font-bold text-sm mb-0.5">{seller.name}</div>
                      <div className="text-[10px] font-mono text-on-surface-variant">{seller.id}</div>
                    </td>
                    <td className="px-6 py-5 text-sm">{seller.projects} Assets</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-sm font-bold">{seller.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-mono font-bold text-primary">{seller.earnings}</td>
                    <td className="px-6 py-5 text-right">
                       <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">View Analytics</button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
