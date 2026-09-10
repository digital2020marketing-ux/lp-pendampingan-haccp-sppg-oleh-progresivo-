import React from 'react';
import { ShieldCheck, Wrench, ArrowRight, HeartHandshake } from 'lucide-react';

export const TwoOutcomesSection: React.FC = () => {
  return (
    <section id="hasil-assessment" className="content-auto py-10 bg-slate-50 border-b border-slate-200 px-4 sm:px-5">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-200 text-slate-800 text-[10px] font-bold uppercase tracking-wider mb-2.5">
            <span>Transparansi & Kejujuran Teknis</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
            DUA KEMUNGKINAN HASIL SETELAH ASSESSMENT
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Kami tidak memaksakan sertifikasi. Keputusan kelanjutan program selalu berpijak pada fakta kesiapan dapur di lapangan.
          </p>
        </div>

        {/* 2 Outcome Cards */}
        <div className="space-y-4 mb-6">
          
          {/* Card Hijau */}
          <div className="bg-white rounded-xl p-4 border-2 border-emerald-500/80 shadow-xs">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                  KONDISI A
                </span>
                <h3 className="text-base font-extrabold text-slate-900">
                  KONDISI SPPG CUKUP SIAP
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Jika persyaratan dasar, infrastruktur, dan operasional sudah cukup memadai, program dapat dilanjutkan ke tahap:
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
              <div className="flex flex-wrap items-center gap-1 text-[11px] font-bold text-emerald-950">
                <span className="bg-white px-2 py-0.5 rounded border border-emerald-300">Pendampingan HACCP</span>
                <span>→</span>
                <span className="bg-white px-2 py-0.5 rounded border border-emerald-300">Implementasi</span>
                <span>→</span>
                <span className="bg-white px-2 py-0.5 rounded border border-emerald-300">Pra-Audit</span>
                <span>→</span>
                <span className="bg-emerald-700 text-white px-2 py-0.5 rounded">Persiapan Sertifikasi</span>
              </div>
            </div>
          </div>

          {/* Card Oranye */}
          <div className="bg-white rounded-xl p-4 border-2 border-amber-500/80 shadow-xs">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                  KONDISI B
                </span>
                <h3 className="text-base font-extrabold text-slate-900">
                  MASIH MEMERLUKAN PERBAIKAN
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Jika ditemukan perbaikan infrastruktur atau fasilitas yang cukup besar, <strong>sertifikasi tidak perlu dipaksakan</strong>.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5">
              <div className="flex flex-wrap items-center gap-1 text-[11px] font-bold text-amber-950">
                <span className="bg-white px-2 py-0.5 rounded border border-amber-300">Assessment</span>
                <span>→</span>
                <span className="bg-white px-2 py-0.5 rounded border border-amber-300">Laporan Perbaikan</span>
                <span>→</span>
                <span className="bg-white px-2 py-0.5 rounded border border-amber-300">Pembenahan</span>
                <span>→</span>
                <span className="bg-white px-2 py-0.5 rounded border border-amber-300">Review</span>
                <span>→</span>
                <span className="bg-amber-700 text-white px-2 py-0.5 rounded">Pendampingan Lanjut</span>
              </div>
            </div>
          </div>

        </div>

        {/* Selling Point Highlight */}
        <div className="rounded-xl bg-slate-900 text-white p-4 border border-slate-800 shadow-md flex items-start gap-3">
          <HeartHandshake className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              KOMITMEN UTAMA PROGRESIVO
            </span>
            <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
              “Kami lebih memilih memberi rekomendasi perbaikan terlebih dahulu daripada mendorong SPPG masuk sertifikasi sebelum benar-benar siap.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
