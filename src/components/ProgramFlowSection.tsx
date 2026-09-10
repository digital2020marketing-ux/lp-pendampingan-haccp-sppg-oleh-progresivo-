import React from 'react';
import { GitCommit } from 'lucide-react';
import { PROGRAM_TIMELINE } from '../data/haccpData';

export const ProgramFlowSection: React.FC = () => {
  return (
    <section id="tahapan" className="content-auto py-10 bg-white border-b border-slate-200 px-4 sm:px-5">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-2.5">
            <GitCommit className="w-3 h-3 text-emerald-600" />
            <span>Tahapan Terarah</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
            DARI KONDISI SAAT INI MENUJU KESIAPAN AUDIT
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Peta jalan terstruktur 10 langkah yang membimbing manajemen dan staf dapur secara bertahap dan terukur.
          </p>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
          {PROGRAM_TIMELINE.map((item) => (
            <div key={item.step} className="relative group">
              {/* Timeline circle node */}
              <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center border-2 border-white shadow-xs">
                {item.step}
              </div>

              {/* Step Card */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 shadow-2xs hover:border-emerald-300 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <span className="text-[9px] font-bold uppercase text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded">
                    Langkah {item.step}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
