import { Link } from 'react-router-dom';
import { Layers, Share2, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full mt-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <Layers className="w-6 h-6 text-primary" />
              <span className="font-sans text-xl font-extrabold tracking-tighter text-on-surface">Pinnacle Hub</span>
            </Link>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Engineering Mastery. Accelerate your learning with premium real-world projects and professional mentalship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-surface-container-high rounded-full text-on-surface-variant hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-surface-container-high rounded-full text-on-surface-variant hover:text-primary transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans text-xs font-bold text-on-surface mb-6 uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/marketplace" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Marketplace</Link></li>
              <li><Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Courses</Link></li>
              <li><Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Become a Creator</Link></li>
              <li><Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-bold text-on-surface mb-6 uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Engineering Standards</Link></li>
              <li><Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Community Forum</Link></li>
              <li><Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-bold text-on-surface mb-6 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-outline-variant/10 mt-12 pt-8 text-center">
          <p className="text-xs text-on-surface-variant">
            © 2024 Pinnacle Hub. Engineering Mastery. All rights reserved. Built for creators by experts.
          </p>
        </div>
      </div>
    </footer>
  );
}
