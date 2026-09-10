import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../data/haccpData';

interface MobileStickyBarProps {
  isContained?: boolean;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ isContained }) => {
  return (
    <div 
      className={`${
        isContained ? 'sticky bottom-0' : 'fixed bottom-0'
      } left-0 right-0 z-50 p-3 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.6)]`}
    >
      <div className="max-w-[480px] mx-auto">
        <a
          id="mobile-sticky-wa-bar"
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3.5 px-4 rounded-xl font-black text-sm shadow-lg shadow-emerald-950/80 active:scale-98 transition-all"
        >
          <span className="text-base">💬</span>
          <span className="tracking-wide">Konsultasi HACCP SPPG</span>
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping ml-1" />
        </a>
      </div>
    </div>
  );
};
