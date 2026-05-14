import { motion, AnimatePresence } from 'motion/react';
import { 
  CloudUpload, 
  Plus, 
  X, 
  Code2, 
  Cpu, 
  FileCode, 
  Layers, 
  Terminal,
  ShieldCheck,
  Zap,
  Layout,
  Info
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../../lib/utils';

export default function UploadProjectPage() {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<string[]>([]);

  const toggleFile = (name: string) => {
    setFiles(prev => prev.includes(name) ? prev.filter(f => f !== name) : [...prev, name]);
  };

  const assetTypes = [
    { name: 'Source Code', icon: Code2, devIcon: FileCode },
    { name: 'Hardware Schematics', icon: Cpu, devIcon: Layout },
    { name: 'PCB Gerber Files', icon: Layers, devIcon: Terminal },
    { name: 'Mechanical CAD', icon: Layout, devIcon: Layers },
    { name: 'Implementation Guides', icon: Terminal, devIcon: Layout },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-sans font-black tracking-tighter text-on-surface mb-3">Launch Your Masterpiece</h1>
        <p className="text-on-surface-variant font-medium">Turn your engineering projects into high-value professional assets.</p>
      </section>

      {/* Progress */}
      <div className="flex items-center gap-4 justify-center">
         {[1, 2, 3].map(s => (
           <div key={s} className="flex items-center gap-4">
              <div className={cn("size-10 rounded-full flex items-center justify-center font-black text-xs transition-all", 
                step === s ? "bg-primary text-on-primary scale-110 shadow-lg" : 
                step > s ? "bg-green-500 text-white" : "bg-surface-container-high text-on-surface-variant")}>
                {step > s ? '✓' : s}
              </div>
              {s < 3 && <div className={cn("h-1 w-20 rounded-full", step > s ? "bg-green-500" : "bg-surface-container-high")} />}
           </div>
         ))}
      </div>

      {/* Form Wizard */}
      <div className="glass-panel p-8 lg:p-12">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
               <h2 className="text-2xl font-sans font-black text-on-surface tracking-tight">Basic Intelligence</h2>
               <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Project Title</label>
                    <input type="text" placeholder="e.g. High-Frequency Trading Core" className="w-full h-14 bg-surface-container-high border border-outline-variant/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Primary Category</label>
                       <select className="w-full h-14 bg-surface-container-high border border-outline-variant/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold appearance-none">
                         <option>Robotics</option>
                         <option>Embedded Systems</option>
                         <option>FinTech</option>
                         <option>Cloud Infrastructure</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Access Price (USD)</label>
                       <input type="number" placeholder="499" className="w-full h-14 bg-surface-container-high border border-outline-variant/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Technical Summary</label>
                    <textarea placeholder="Describe the engineering challenge and your solution..." className="w-full h-32 bg-surface-container-high border border-outline-variant/10 rounded-2xl p-6 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium resize-none" />
                  </div>
               </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
               <h2 className="text-2xl font-sans font-black text-on-surface tracking-tight">Artifact Definition</h2>
               <p className="text-on-surface-variant text-sm font-medium">Select the professional assets included in this blueprint.</p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {assetTypes.map((type) => (
                    <button
                      key={type.name}
                      onClick={() => toggleFile(type.name)}
                      className={cn(
                        "p-6 rounded-2xl border-2 transition-all flex items-center gap-4 text-left",
                        files.includes(type.name) 
                          ? "bg-primary/5 border-primary text-primary" 
                          : "bg-surface-container/50 border-outline-variant/10 text-on-surface-variant hover:border-outline-variant/30"
                      )}
                    >
                      <type.icon className="size-6 shrink-0" />
                      <span className="font-bold text-sm">{type.name}</span>
                      {files.includes(type.name) && <Plus className="size-4 ml-auto rotate-45" />}
                    </button>
                  ))}
               </div>

               <div className="p-8 border-2 border-dashed border-outline-variant/20 rounded-3xl flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/50 transition-all">
                  <div className="size-16 bg-surface-container-high rounded-2xl flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors mb-4">
                     <CloudUpload className="size-8" />
                  </div>
                  <h4 className="font-bold text-on-surface">Upload Secure Archive (.zip/7z)</h4>
                  <p className="text-xs text-on-surface-variant mt-1">Maximum file size: 5GB. Encrypted on upload.</p>
               </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
               <div className="text-center">
                  <div className="inline-flex items-center justify-center size-20 bg-green-500/10 text-green-500 rounded-full mb-6">
                    <ShieldCheck className="size-10" />
                  </div>
                  <h2 className="text-3xl font-sans font-black text-on-surface tracking-tight mb-2">Final Validation</h2>
                  <p className="text-on-surface-variant font-medium">Verify your engineering submission details before final launch.</p>
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-surface-container/50 rounded-2xl border border-outline-variant/10">
                     <div className="flex items-center gap-3 text-xs font-bold text-on-surface-variant"><Zap className="size-4 text-primary" /> Creator Commission</div>
                     <span className="text-xs font-black text-green-500">85% Retained</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-surface-container/50 rounded-2xl border border-outline-variant/10">
                     <div className="flex items-center gap-3 text-xs font-bold text-on-surface-variant"><Info className="size-4 text-secondary" /> Verification SLA</div>
                     <span className="text-xs font-bold text-on-surface">2-4 Business Days</span>
                  </div>
               </div>

               <div className="p-6 bg-surface-container-high rounded-2xl text-[10px] uppercase font-bold tracking-widest text-on-surface-variant leading-relaxed text-center">
                 By submitting, you affirm that you own the IP rights to this engineering content and agree to the 
                 professional creator guidelines of Pinnacle Hub.
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex justify-between items-center pt-8 border-t border-outline-variant/10">
           <button 
             disabled={step === 1}
             onClick={() => setStep(s => s - 1)}
             className="px-6 py-3 text-sm font-bold text-on-surface-variant hover:text-on-surface disabled:opacity-30 transition-colors"
           >
             Previous Step
           </button>
           <button 
             onClick={() => {
                if (step === 3) {
                  // Final submission
                  alert("Project submitted for professional review!");
                } else {
                  setStep(s => s + 1);
                }
             }}
             className="px-10 h-14 bg-primary text-on-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
           >
             {step === 3 ? "Launch Blueprint" : "Next Protocol"} <Plus className="size-5" />
           </button>
        </div>
      </div>
    </div>
  );
}
