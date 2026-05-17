import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useStore, type UserRole } from '../../store/useStore';
import { 
  LayoutDashboard, 
  BookOpen, 
  Package, 
  Settings, 
  LogOut, 
  ChevronRight, 
  Menu, 
  X,
  PlusCircle,
  BarChart3,
  Users,
  Layers,
  ToggleLeft,
  ToggleRight,
  ShieldAlert,
  Heart,
  ShoppingCart,
  ShoppingBag,
  Bell,
  Wallet,
  Star,
  ShieldCheck,
  Shield,
  TrendingUp,
  FileText,
  CreditCard,
  UserPlus
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

export default function DashboardLayout() {
  const { currentRole, setRole, user, logout } = useStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const buyerLinks = [
    { name: 'Overview', href: '/dashboard/overview', icon: LayoutDashboard },
    { name: 'My Learning', href: '/dashboard/learning', icon: BookOpen },
    { name: 'Purchases', href: '/dashboard/purchases', icon: Package },
    { name: 'Wishlist', href: '/dashboard/wishlist', icon: Heart },
    { name: 'My Cart', href: '/dashboard/cart', icon: ShoppingBag },
    { name: 'Order History', href: '/dashboard/orders', icon: FileText },
    { name: 'Notifications', href: '/dashboard/notifications', icon: Bell },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const sellerLinks = [
    { name: 'Sales Overview', href: '/dashboard/seller', icon: BarChart3 },
    { name: 'Manage Projects', href: '/dashboard/manage', icon: Package },
    { name: 'Upload New', href: '/dashboard/upload', icon: PlusCircle },
    { name: 'Orders', href: '/dashboard/seller-orders', icon: ShoppingCart },
    { name: 'Earnings', href: '/dashboard/earnings', icon: Wallet },
    { name: 'Analytics', href: '/dashboard/analytics', icon: TrendingUp },
    { name: 'Reviews', href: '/dashboard/reviews', icon: Star },
    { name: 'Store Settings', href: '/dashboard/seller-settings', icon: Settings },
  ];

  const adminLinks = [
    { name: 'Admin Hub', href: '/dashboard/admin', icon: ShieldAlert },
    { name: 'User Directory', href: '/dashboard/users', icon: Users },
    { name: 'Seller Verification', href: '/dashboard/sellers', icon: ShieldCheck },
    { name: 'Content Moderation', href: '/dashboard/moderation', icon: Shield },
    { name: 'Transactions', href: '/dashboard/transactions', icon: CreditCard },
    { name: 'Platform Stats', href: '/dashboard/admin-analytics', icon: BarChart3 },
    { name: 'Admin Team', href: '/dashboard/admin-management', icon: UserPlus },
    { name: 'Reports', href: '/dashboard/reports', icon: ShieldAlert },
    { name: 'Engine Settings', href: '/dashboard/admin-settings', icon: Settings },
  ];

  const currentLinks = currentRole === 'buyer' ? buyerLinks : currentRole === 'seller' ? sellerLinks : adminLinks;

  const handleRoleSwitch = () => {
    let nextRole: UserRole = 'buyer';
    if (currentRole === 'buyer') nextRole = 'seller';
    else if (currentRole === 'seller') nextRole = 'admin';
    else nextRole = 'buyer';

    setRole(nextRole);
    if (nextRole === 'buyer') navigate('/dashboard/overview');
    else if (nextRole === 'seller') navigate('/dashboard/seller');
    else navigate('/dashboard/admin');
  };

  const SidebarContent = ({ isMobile = false }) => (
    <div className="flex flex-col h-full bg-surface-container-low">
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-outline-variant/10">
        <Link to="/" className="flex items-center gap-2 group overflow-hidden">
          <div className="p-1.5 bg-primary/10 rounded-lg shrink-0">
            <Layers className="w-6 h-6 text-primary" />
          </div>
          <AnimatePresence mode="wait">
            {(isSidebarOpen || isMobile) && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-sans text-lg font-extrabold tracking-tighter text-on-surface whitespace-nowrap"
              >
                Pinnacle Hub
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        {isMobile && (
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden p-2 text-on-surface-variant hover:text-on-surface"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-grow px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        {currentLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group",
              location.pathname === link.href 
                ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" 
                : "text-on-surface-variant hover:bg-surface-variant/50 hover:text-on-surface"
            )}
          >
            <link.icon className={cn("w-5 h-5 shrink-0", location.pathname === link.href ? "text-primary" : "text-on-surface-variant group-hover:text-on-surface")} />
            {(isSidebarOpen || isMobile) && <span className="text-sm font-medium whitespace-nowrap">{link.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Footer Sidebar */}
      <div className="p-3 border-t border-outline-variant/10 space-y-2 shrink-0">
        {/* Role Switcher */}
        <button 
          onClick={handleRoleSwitch}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all bg-surface-container-high border border-outline-variant/10 text-xs font-semibold",
            isSidebarOpen || isMobile ? "justify-between" : "justify-center"
          )}
        >
          <div className="flex items-center gap-3">
            {currentRole === 'buyer' ? <ToggleLeft className="w-5 h-5 text-primary" /> : currentRole === 'seller' ? <ToggleRight className="w-5 h-5 text-secondary" /> : <Shield className="w-5 h-5 text-error" />}
            {(isSidebarOpen || isMobile) && <span className="uppercase tracking-widest">{currentRole}</span>}
          </div>
          {(isSidebarOpen || isMobile) && <ChevronRight className="w-4 h-4 text-on-surface-variant/50" />}
        </button>

        {/* Logout */}
        <button 
          onClick={() => {
            logout();
            navigate('/');
          }}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-on-surface-variant hover:bg-error-container/10 hover:text-error",
            isSidebarOpen || isMobile ? "" : "justify-center"
          )}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {(isSidebarOpen || isMobile) && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-surface overflow-hidden relative">
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu (Sliding) */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 w-72 z-50 transform transition-transform duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent isMobile={true} />
      </aside>

      {/* Desktop Sidebar */}
      <aside 
        className={cn(
          "hidden lg:flex shrink-0 bg-surface-container-low border-r border-outline-variant transition-all duration-300 ease-in-out z-40 relative group/sidebar",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <SidebarContent />

        {/* Toggle Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-20 w-6 h-6 bg-surface-container border border-outline-variant/20 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-all z-50 shadow-md opacity-0 group-hover/sidebar:opacity-100"
        >
          {isSidebarOpen ? <X className="w-3 h-3" /> : <Menu className="w-3 h-3" />}
        </button>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow w-full overflow-hidden">
        {/* Mobile Header */}
        <header className="h-16 lg:hidden flex items-center justify-between px-6 bg-surface-container-low border-b border-outline-variant shrink-0 z-30">
          <div className="flex items-center gap-3">
             <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 rounded-lg hover:bg-surface-variant text-on-surface"
             >
                <Menu className="w-6 h-6" />
             </button>
             <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                <span className="font-sans text-sm font-bold text-on-surface">Pinnacle</span>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary">
                {user?.name?.[0] || 'U'}
             </div>
          </div>
        </header>

        <main className="flex-grow overflow-y-auto overflow-x-hidden relative bg-surface-dim/30 scroll-smooth">
          <div className="p-4 md:p-8 lg:p-12 w-full max-w-[1600px] mx-auto min-h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
