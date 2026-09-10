import React, { Suspense, lazy, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MobileStickyBar } from './components/MobileStickyBar';

// Lazy load below-the-fold content for instant LCP and initial paint
const DeferredSections = lazy(() => import('./components/DeferredSections'));

export default function App() {
  // Preload deferred sections during idle time immediately after critical mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loadComponents = () => {
        import('./components/DeferredSections');
      };
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(loadComponents);
      } else {
        setTimeout(loadComponents, 60);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 antialiased selection:bg-emerald-500 selection:text-white flex flex-col items-center justify-start sm:py-6 sm:px-4">
      
      {/* Desktop Helper Banner (Shown only on larger screens to inform that this is exclusively designed for mobile phones) */}
      <div className="hidden sm:flex items-center justify-between w-full max-w-[480px] mb-3 px-3 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-300 shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">Mode Smartphone (HP)</span>
        </div>
        <span className="text-[11px] text-slate-400">Dioptimalkan khusus layar HP</span>
      </div>

      {/* Main Smartphone Wrapper:
          - On mobile screens (default): 100% full width, no phone frame borders, edge-to-edge.
          - On PC/tablets (sm:): constrained to max-w-[480px], with subtle smartphone rounded corners, border, and shadow.
      */}
      <div className="w-full sm:max-w-[480px] bg-slate-50 min-h-screen sm:min-h-0 sm:rounded-[36px] sm:border-[8px] sm:border-slate-800 sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col relative">
        
        {/* Smartphone Status Notch (visible on PC simulation) */}
        <div className="hidden sm:flex items-center justify-between px-6 pt-3 pb-1 bg-slate-950 text-white text-[10px] font-semibold tracking-wider select-none">
          <span>09:41</span>
          <div className="w-16 h-3 bg-slate-900 rounded-full border border-slate-800" />
          <div className="flex items-center gap-1.5">
            <span>5G</span>
            <div className="w-4 h-2 border border-slate-400 rounded-xs p-0.5 flex items-center">
              <div className="w-full h-full bg-emerald-400 rounded-2xs" />
            </div>
          </div>
        </div>

        {/* 1. Header (Sticky) */}
        <Header />

        {/* Scrollable Content Container */}
        <main className="flex-grow flex flex-col">
          {/* 2. Hero Section (Rendered immediately for fast LCP) */}
          <HeroSection />

          {/* 3–16. Below-the-fold sections loaded progressively */}
          <Suspense
            fallback={
              <div className="min-h-[250px] flex flex-col items-center justify-center p-8 text-center text-slate-400 bg-slate-900/50">
                <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mb-3" />
                <span className="text-xs font-medium">Memuat konten pendampingan...</span>
              </div>
            }
          >
            <DeferredSections />
          </Suspense>
        </main>

        {/* 17. Sticky WhatsApp Bar on Mobile */}
        <MobileStickyBar />

      </div>

      {/* Desktop Footer Note */}
      <div className="hidden sm:block text-center mt-4 text-xs text-slate-500">
        Landing Page Khusus Smartphone • Progresivo Consulting — HACCP SPPG MBG
      </div>

    </div>
  );
}
