import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useStore } from './store/useStore';
import { AnimatePresence } from 'motion/react';

// Layouts
import PublicLayout from './components/layouts/PublicLayout';
import DashboardLayout from './components/layouts/DashboardLayout';

// Pages - Public
import HomePage from './pages/public/HomePage';
import MarketplacePage from './pages/public/MarketplacePage';
import ProjectDetailsPage from './pages/public/ProjectDetailsPage';
import LoginPage from './pages/public/LoginPage';
import RegisterPage from './pages/public/RegisterPage';
import AboutPage from './pages/public/AboutPage';
import CategoriesPage from './pages/public/CategoriesPage';
import ContactPage from './pages/public/ContactPage';

// Pages - Buyer
import BuyerDashboard from './pages/dashboard/buyer/BuyerDashboard';
import LearningPage from './pages/dashboard/buyer/LearningPage';
import PurchasedProjectsPage from './pages/dashboard/buyer/PurchasedProjectsPage';
import WishlistPage from './pages/dashboard/buyer/WishlistPage';
import CartPage from './pages/dashboard/buyer/CartPage';
import CheckoutPage from './pages/dashboard/buyer/CheckoutPage';
import OrderHistoryPage from './pages/dashboard/buyer/OrderHistoryPage';
import NotificationsPage from './pages/dashboard/buyer/NotificationsPage';
import ProfileSettingsPage from './pages/dashboard/buyer/ProfileSettingsPage';

// Pages - Seller
import SellerDashboard from './pages/dashboard/seller/SellerDashboard';
import UploadProjectPage from './pages/dashboard/seller/UploadProjectPage';
import ManageProjectsPage from './pages/dashboard/seller/ManageProjectsPage';
import OrdersPage from './pages/dashboard/seller/OrdersPage';
import EarningsPage from './pages/dashboard/seller/EarningsPage';
import SellerAnalyticsPage from './pages/dashboard/seller/AnalyticsPage';
import ReviewsPage from './pages/dashboard/seller/ReviewsPage';
import SellerProfileSettingsPage from './pages/dashboard/seller/SellerProfileSettingsPage';

// Pages - Admin
import AdminDashboard from './pages/dashboard/admin/AdminDashboard';
import UserManagementPage from './pages/dashboard/admin/UserManagementPage';
import SellerManagementPage from './pages/dashboard/admin/SellerManagementPage';
import ProjectModerationPage from './pages/dashboard/admin/ProjectModerationPage';
import TransactionsPage from './pages/dashboard/admin/TransactionsPage';
import AdminAnalyticsPage from './pages/dashboard/admin/AnalyticsPage';
import AdminManagementPage from './pages/dashboard/admin/AdminManagementPage';
import ReportsComplaintsPage from './pages/dashboard/admin/ReportsComplaintsPage';
import AdminSettingsPage from './pages/dashboard/admin/SettingsPage';

function AppRoutes() {
  const location = useLocation();
  const { user } = useStore();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location}>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="overview" replace />} />
          
          {/* Buyer Specific */}
          <Route path="overview" element={<BuyerDashboard />} />
          <Route path="learning" element={<LearningPage />} />
          <Route path="purchases" element={<PurchasedProjectsPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="orders" element={<OrderHistoryPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<ProfileSettingsPage />} />
          
          {/* Seller Specific */}
          <Route path="seller" element={<SellerDashboard />} />
          <Route path="upload" element={<UploadProjectPage />} />
          <Route path="manage" element={<ManageProjectsPage />} />
          <Route path="seller-orders" element={<OrdersPage />} />
          <Route path="earnings" element={<EarningsPage />} />
          <Route path="analytics" element={<SellerAnalyticsPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="seller-settings" element={<SellerProfileSettingsPage />} />
          
          {/* Admin Specific */}
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="users" element={<UserManagementPage />} />
          <Route path="sellers" element={<SellerManagementPage />} />
          <Route path="moderation" element={<ProjectModerationPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="admin-analytics" element={<AdminAnalyticsPage />} />
          <Route path="admin-management" element={<AdminManagementPage />} />
          <Route path="reports" element={<ReportsComplaintsPage />} />
          <Route path="admin-settings" element={<AdminSettingsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const { theme } = useStore();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    // Sync theme with DOM on initial load
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  if (!isHydrated) return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="size-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

