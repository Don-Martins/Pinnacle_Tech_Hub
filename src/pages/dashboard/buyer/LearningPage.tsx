import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  MessageSquare, 
  Code2, 
  Download,
  Share2,
  Video,
  ListTodo,
  ShieldCheck,
  Search,
  Filter
} from 'lucide-react';
import { cn } from '../../../lib/utils';

export default function LearningPage() {
  const [activeCourse, setActiveCourse] = useState('1');
  const [activeLesson, setActiveLesson] = useState('1-1');

  const myCourses = [
    {
      id: '1',
      title: 'Autonomous Drone Flight Controller',
      progress: 75,
      totalLessons: 24,
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=200',
      modules: [
        {
          id: 'm1',
          title: 'Module 1: RTOS Fundamentals',
          lessons: [
            { id: '1-1', title: 'Setting up the STM32 Environment', duration: '12:45', completed: true },
            { id: '1-2', title: 'Task Scheduling & Context Switching', duration: '22:10', completed: true },
            { id: '1-3', title: 'Semaphore & Mutex in Drone Control', duration: '18:50', completed: false }
          ]
        },
        {
          id: 'm2',
          title: 'Module 2: Sensor Fusion (EKF)',
          lessons: [
            { id: '2-1', title: 'Introduction to Kalman Filters', duration: '28:15', completed: false },
            { id: '2-2', title: 'Mathematical Modeling of Drone Dynamics', duration: '45:00', completed: false }
          ]
        }
      ]
    }
  ];

  const currentCourse = myCourses.find(c => c.id === activeCourse) || myCourses[0];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <div className="flex items-center gap-2 mb-2">
             <div className="size-2 rounded-full bg-primary animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-widest text-primary">In Progress</span>
           </div>
           <h1 className="text-3xl font-sans font-black tracking-tighter text-on-surface">Learning Workspace</h1>
        </div>
        <div className="flex bg-surface-container rounded-xl p-1 border border-outline-variant/10">
           <button className="px-5 py-2 text-xs font-bold rounded-lg bg-surface-container-highest text-on-surface">Main Study</button>
           <button className="px-5 py-2 text-xs font-bold rounded-lg text-on-surface-variant hover:text-on-surface">Review Notes</button>
           <button className="px-5 py-2 text-xs font-bold rounded-lg text-on-surface-variant hover:text-on-surface">Practice Env</button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 h-full">
         
         {/* Video Section & Details */}
         <div className="xl:col-span-8 space-y-6">
            <div className="glass-panel overflow-hidden relative group aspect-video bg-black flex items-center justify-center">
              <Play className="size-16 text-primary drop-shadow-lg group-hover:scale-110 transition-transform cursor-pointer" />
              <div className="absolute top-0 w-full p-6 flex justify-between items-center bg-linear-to-b from-black/60 to-transparent">
                 <h3 className="text-sm font-bold text-white tracking-tight">1.1 Setting up the STM32 Environment</h3>
                 <div className="flex gap-2">
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 transition-all shadow-lg"><Share2 className="size-4" /></button>
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 transition-all shadow-lg"><Download className="size-4" /></button>
                 </div>
              </div>
              <div className="absolute bottom-0 w-full h-1 bg-surface-container-highest">
                 <div className="h-full bg-primary w-3/4 shadow-[0_0_10px_rgba(173,198,255,1)]" />
              </div>
            </div>

            <div className="glass-card p-6 lg:p-8 space-y-8">
               <div className="flex flex-wrap items-center gap-8 border-b border-outline-variant/10 pb-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Status</span>
                    <span className="flex items-center gap-2 text-sm font-bold text-green-500"><CheckCircle2 className="size-4" /> Lesson Completed</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Resources</span>
                    <div className="flex gap-3">
                       <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-lg text-[10px] font-black uppercase text-on-surface-variant hover:text-primary transition-colors"><FileText className="size-3" /> Technical Specs</button>
                       <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-lg text-[10px] font-black uppercase text-on-surface-variant hover:text-primary transition-colors"><Code2 className="size-3" /> Starter Code</button>
                    </div>
                  </div>
               </div>

               <div>
                 <h2 className="text-xl font-bold text-on-surface mb-4">Lesson Overview</h2>
                 <p className="text-on-surface-variant leading-relaxed text-sm">
                   In this lesson, we dive deep into the specific architecture requirements for the flight controller hardware. 
                   We will configure the FreeRTOS middleware, set up the initial task heaps, and establish the SPI communication 
                   protocol for the BMI270 inertial measurement unit.
                 </p>
               </div>

               <div className="pt-6 border-t border-outline-variant/10">
                  <h3 className="text-sm font-bold text-on-surface mb-6 flex items-center gap-2">
                    <MessageSquare className="size-4 text-primary" /> Student Discussion (124)
                  </h3>
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100" className="size-10 rounded-full shrink-0" />
                        <div className="flex-grow bg-surface-container p-4 rounded-2xl rounded-tl-none">
                           <div className="flex justify-between items-center mb-1">
                             <h4 className="text-xs font-bold text-on-surface">Marcus Weber</h4>
                             <span className="text-[10px] text-on-surface-variant">2h ago</span>
                           </div>
                           <p className="text-xs text-on-surface-variant leading-relaxed">
                             Has anyone tried integrating this with the newer STM32H7 series? I'm getting some DMA conflict 
                             on the SPI bus during high-frequency IMU reads.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Course Sidebar */}
         <div className="xl:col-span-4 space-y-6">
            <div className="glass-panel p-6">
               <h3 className="text-sm font-black text-on-surface uppercase tracking-widest mb-6 flex items-center justify-between">
                 Course Content
                 <span className="text-primary text-[10px] px-2.5 py-1 bg-primary/10 rounded-full">{currentCourse.progress}% Done</span>
               </h3>
               
               <div className="space-y-2 max-h-[600px] overflow-y-auto no-scrollbar pr-1">
                  {currentCourse.modules.map((module) => (
                    <div key={module.id} className="space-y-1">
                       <div className="px-3 py-3 rounded-xl bg-surface-container border border-outline-variant/10 text-xs font-bold text-on-surface flex items-center justify-between mb-2">
                         {module.title}
                         <ChevronRight className="size-3 text-on-surface-variant" />
                       </div>
                       <div className="space-y-1 pl-2">
                          {module.lessons.map((lesson) => (
                            <button
                               key={lesson.id}
                               onClick={() => setActiveLesson(lesson.id)}
                               className={cn(
                                 "w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all group",
                                 activeLesson === lesson.id 
                                   ? "bg-primary/10 text-primary border border-primary/20" 
                                   : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                               )}
                            >
                               {lesson.completed ? (
                                 <CheckCircle2 className="size-4 shrink-0 text-green-500" />
                               ) : (
                                 <div className={cn("size-4 rounded-full border-2 shrink-0", activeLesson === lesson.id ? "border-primary" : "border-outline-variant")} />
                               )}
                               <div className="flex-grow">
                                  <p className="text-xs font-bold leading-tight">{lesson.title}</p>
                                  <div className="flex items-center gap-2 mt-1 opacity-60">
                                     <Video className="size-3" />
                                     <span className="text-[10px] font-bold">{lesson.duration}</span>
                                  </div>
                               </div>
                            </button>
                          ))}
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="glass-card p-6 border-dashed border-2">
               <h3 className="font-bold text-on-surface mb-2">Private Mentorship</h3>
               <p className="text-xs text-on-surface-variant mb-4">Stuck on Module 2? Schedule a 1:1 troubleshooting session with the project creator.</p>
               <button className="w-full h-11 bg-surface-container-highest rounded-xl text-xs font-black uppercase tracking-widest text-primary hover:bg-primary text-on-primary transition-all">
                 Request Session
               </button>
            </div>
         </div>

      </div>
    </div>
  );
}
