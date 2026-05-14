import { motion } from 'motion/react';
import { Star, MessageSquare, Reply, ThumbsUp, Filter, Search } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  { 
    id: '1', 
    user: 'CyberSmith', 
    rating: 5, 
    date: '2 days ago', 
    project: 'Advanced Robotic Arm Controller',
    content: 'The schematics are incredibly detailed and the code is very well commented. Saved me weeks of development time. Highly recommended!',
    likes: 12,
    replied: true,
    reply: 'Thank you so much for the feedback! Glad it was useful for your assembly.'
  },
  { 
    id: '2', 
    user: 'EngineerDave', 
    rating: 4, 
    date: '1 week ago', 
    project: 'Autonomous Drone Flight Path System',
    content: 'Very good architecture. I had some trouble with the PID tuning section initially but the creator helper me out quickly.',
    likes: 5,
    replied: false
  },
  { 
    id: '3', 
    user: 'TechEnthusiast', 
    rating: 5, 
    date: '2 weeks ago', 
    project: 'Advanced Robotic Arm Controller',
    content: 'Flawless execution. The STL files for the joints fit perfectly with standard servos.',
    likes: 8,
    replied: true,
    reply: 'Great to hear! I spent a lot of time on those tolerances.'
  }
];

export default function ReviewsPage() {
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Social Proof</h1>
          <p className="text-on-surface-variant">Manage your reputation and interact with your buyers.</p>
        </div>
        <div className="flex items-center gap-4 px-6 py-3 bg-surface-container rounded-xl border border-outline-variant/30">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span className="text-xl font-bold">4.9</span>
          </div>
          <div className="w-[1px] h-6 bg-white/5" />
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Total 214 Reviews</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-on-surface">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search reviews by keyword or user..."
            className="w-full bg-surface-container border border-outline-variant rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container border border-outline-variant rounded-xl text-sm font-semibold hover:bg-surface-variant transition-colors">
            <Filter className="w-4 h-4 text-on-surface-variant" />
            <span>Rating: All Stars</span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex-grow space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container-highest rounded-2xl flex items-center justify-center text-xl font-bold text-primary">
                    {review.user[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{review.user}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-on-surface-variant/30'}`} />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">• {review.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-primary font-bold text-xs uppercase tracking-widest">ON PROJECT: {review.project}</div>
                
                <p className="text-on-surface-variant leading-relaxed text-sm italic">
                  "{review.content}"
                </p>

                <div className="flex items-center gap-6 pt-4">
                  <button className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{review.likes} Helpful</span>
                  </button>
                  {!review.replied ? (
                    <button 
                      onClick={() => setReplyingTo(review.id)}
                      className="flex items-center gap-2 text-xs font-bold text-primary hover:underline transition-colors"
                    >
                      <Reply className="w-4 h-4" />
                      <span>Reply to this review</span>
                    </button>
                  ) : null}
                </div>

                {review.replied && (
                  <div className="mt-6 p-6 bg-primary/5 border border-primary/10 rounded-2xl space-y-3">
                    <div className="flex items-center gap-2">
                       <MessageSquare className="w-4 h-4 text-primary" />
                       <span className="text-xs font-bold text-primary uppercase tracking-widest">Your Private Response</span>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{review.reply}</p>
                  </div>
                )}

                {replyingTo === review.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 space-y-4"
                  >
                    <textarea 
                      placeholder="Write your response..." 
                      className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      rows={3}
                    />
                    <div className="flex gap-2">
                      <button className="px-6 py-2 bg-primary text-white text-xs font-bold rounded-lg">Post Response</button>
                      <button 
                        onClick={() => setReplyingTo(null)}
                        className="px-6 py-2 bg-surface-container-high text-xs font-bold rounded-lg underline"
                      >
                        Cancel
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
