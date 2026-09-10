import React from 'react';
import { FileText, ChefHat, CheckSquare2, ArrowDown } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section id="tentang" className="content-auto py-10 bg-white border-b border-slate-200 px-4 sm:px-5">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-2.5">
            <span>Pendekatan Progresivo Consulting</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2.5">
            KAMI MEMBANTU SPPG MEMBANGUN SISTEMNYA, BUKAN HANYA MENYIAPKAN DOKUMEN
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Sertifikasi HACCP yang kokoh berakar pada praktik dapur yang konsisten, bukan sekadar setumpuk map dokumen formalitas.
          </p>
        </div>

        {/* 3-Stage Diagram Vertical Flow for Mobile */}
        <div className="space-y-3 mb-6">
          
          {/* Tahap 1: Dokumen */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">DOKUMEN</h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Tahap 01
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Membantu menyiapkan dan menyesuaikan sistem, SOP, form, analisis bahaya, serta rekaman yang diperlukan.
            </p>
          </div>

          <div className="flex justify-center text-slate-300">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Tahap 2: Implementasi */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <ChefHat className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">IMPLEMENTASI</h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Tahap 02
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Membantu tim memahami bagaimana prosedur tersebut benar-benar dijalankan dalam kegiatan sehari-hari.
            </p>
          </div>

          <div className="flex justify-center text-slate-300">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Tahap 3: Kesiapan Audit */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <CheckSquare2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">KESIAPAN AUDIT</h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Tahap 03
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Membantu mengevaluasi bukti penerapan dan mempersiapkan personel menghadapi proses audit.
            </p>
          </div>

        </div>

        {/* Big Highlight Box */}
        <div className="rounded-xl bg-gradient-to-br from-slate-950 to-slate-900 text-white p-4 border border-slate-800 shadow-lg text-center">
          <p className="text-xs sm:text-sm font-bold leading-relaxed text-emerald-300">
            “HACCP yang baik bukan sekadar dokumen yang tersimpan di komputer. Sistemnya harus terlihat dalam kegiatan dapur sehari-hari.”
          </p>
        </div>

      </div>
    </section>
  );
};
