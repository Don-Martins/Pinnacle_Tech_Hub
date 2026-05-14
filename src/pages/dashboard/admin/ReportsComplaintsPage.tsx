import { motion } from 'motion/react';
import { AlertCircle, Flag, MessageSquare, ShieldAlert, CheckCircle2, UserX, Trash2 } from 'lucide-react';

const reports = [
  { id: 'REP-102', type: 'Copyright', violator: 'BotCopy123', reporter: 'RoboMaster', project: 'Hydraulic Logic', date: '4h ago', status: 'New' },
  { id: 'REP-098', type: 'Spam', violator: 'AdBot', reporter: 'System Guard', project: 'Comment Section', date: '12h ago', status: 'Pending' },
  { id: 'REP-085', type: 'Harassment', violator: 'ToxicUser', reporter: 'Sarah Chen', project: 'Direct Message', date: 'Yesterday', status: 'Closed' },
];

export default function ReportsComplaintsPage() {
  return (
    <div className="space-y-8 text-on-surface">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Reports & Complaints</h1>
        <p className="text-on-surface-variant">Resolve disputes and handle platform moderation tickets.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {[
          { label: 'Unresolved', value: '4', icon: AlertCircle, color: 'text-error' },
          { label: 'Average Response', value: '2.4h', icon: MessageSquare, color: 'text-primary' },
          { label: 'Actions Taken', value: '128', icon: ShieldAlert, color: 'text-on-surface' },
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
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold tracking-tighter">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        {reports.map((report, i) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`glass-panel p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-l-4 ${
              report.status === 'New' ? 'border-l-error' : report.status === 'Pending' ? 'border-l-amber-500' : 'border-l-green-500/30'
            }`}
          >
            <div className="flex items-center gap-5">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                report.status === 'New' ? 'bg-error/10 text-error' : 'bg-surface-container-high text-on-surface-variant'
              }`}>
                <Flag className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                   <h3 className="font-extrabold text-sm uppercase tracking-wider">{report.type} Violation</h3>
                   <span className="text-[10px] font-mono text-on-surface-variant">{report.id}</span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-on-surface-variant">
                   <span className="font-bold text-error">Suspect: {report.violator}</span>
                   <span>Reporter: {report.reporter}</span>
                   <span>Target: {report.project}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
                <button className="flex-grow md:flex-none p-2 bg-green-500/10 text-green-500 rounded-xl hover:bg-green-500 hover:text-white transition-all flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-widest">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Resolve</span>
                </button>
                <button className="flex-grow md:flex-none p-2 bg-error/10 text-error rounded-xl hover:bg-error hover:text-white transition-all flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-widest">
                  <UserX className="w-3.5 h-3.5" />
                  <span>Ban Suspect</span>
                </button>
                <button className="p-2 bg-surface-container-high rounded-xl hover:bg-error transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
