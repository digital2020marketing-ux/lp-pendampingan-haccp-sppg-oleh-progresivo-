import React from 'react';
import { Layers } from 'lucide-react';
import { SCOPE_ITEMS } from '../data/haccpData';

export const ScopeSection: React.FC = () => {
  return (
    <section id="pendampingan" className="content-auto py-10 bg-white border-b border-slate-200 px-4 sm:px-5">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-2.5">
            <Layers className="w-3 h-3 text-emerald-600" />
            <span>Cakupan Layanan Terpadu</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
            APA SAJA YANG DIBANTU OLEH PROGRESIVO CONSULTING?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            12 pilar pendampingan terstruktur untuk memastikan sistem HACCP dibangun sesuai kaidah teknis dan operasional dapur SPPG.
          </p>
        </div>

        {/* 12 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {SCOPE_ITEMS.map((item) => (
            <div
              key={item.number}
              className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-black tracking-widest text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pt-1.5 border-t border-slate-200/60 mt-1.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Strategic Positioning Box */}
        <div className="rounded-xl bg-slate-900 text-slate-200 p-4 text-center border border-slate-800 shadow-xs">
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Prinsip Kami: </strong>
            Bukan sekadar membuat dokumen HACCP. Progresivo Consulting membantu SPPG membangun sistem, menjalankannya, dan mempersiapkannya menghadapi proses audit sertifikasi.
          </p>
        </div>

      </div>
    </section>
  );
};
