import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-surface">
    <div className="relative">
      <div className="size-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      <div className="absolute inset-0 size-12 border-4 border-transparent border-b-secondary/40 rounded-full animate-spin-slow" />
    </div>
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </StrictMode>,
);
