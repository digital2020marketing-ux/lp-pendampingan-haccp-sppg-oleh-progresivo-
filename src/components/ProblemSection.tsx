import React from 'react';
import { HelpCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import { PROBLEM_QUESTIONS } from '../data/haccpData';

export const ProblemSection: React.FC = () => {
  return (
    <section id="masalah" className="content-auto py-10 bg-slate-50 border-b border-slate-200/80 px-4 sm:px-5">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2.5">
            <AlertCircle className="w-3 h-3 text-amber-600" />
            <span>Tantangan Operasional SPPG</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2.5">
            SUDAH MEMILIKI SOP BGN, TAPI APAKAH SUDAH SIAP MENUJU HACCP?
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Banyak SPPG sudah beroperasi, memiliki SOP, form, personel, dan kegiatan produksi yang berjalan. 
            Namun ketika mulai mempersiapkan HACCP, biasanya muncul banyak pertanyaan.
          </p>
        </div>

        {/* 8 Question Cards in clean mobile vertical list */}
        <div className="space-y-3 mb-6">
          {PROBLEM_QUESTIONS.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-1">
                    {item.question}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="bg-amber-50/80 border-l-4 border-amber-500 rounded-r-xl p-3.5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
            <span className="text-amber-800 font-extrabold">Penting: </span>
            Jangan menunggu auditor menemukan masalah yang sebenarnya bisa diketahui dan dibenahi lebih awal.
          </p>
        </div>

      </div>
    </section>
  );
};
