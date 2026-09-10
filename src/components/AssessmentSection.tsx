import React from 'react';
import { 
  ClipboardList, 
  MapPin, 
  Search, 
  FileSpreadsheet, 
  FileCheck, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { ASSESSMENT_ITEMS } from '../data/haccpData';

export const AssessmentSection: React.FC = () => {
  const steps = [
    { title: 'KUNJUNGAN', desc: 'Hadir langsung ke SPPG', icon: MapPin },
    { title: 'PEMERIKSAAN', desc: 'Observasi fisik dapur & SOP', icon: Search },
    { title: 'GAP ANALYSIS', desc: 'Petakan selisih vs standar', icon: ClipboardList },
    { title: 'LAPORAN', desc: 'Dokumen temuan objektif', icon: FileSpreadsheet },
    { title: 'REKOMENDASI', desc: 'Panduan prioritas perbaikan', icon: FileCheck },
  ];

  return (
    <section 
      id="assessment" 
      className="content-auto py-10 bg-gradient-to-br from-slate-950 via-teal-950 to-slate-950 text-white relative overflow-hidden px-4 sm:px-5"
    >
      {/* Decorative background glow */}
      <div className="absolute top-10 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Langkah Pertama Paling Aman</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug mb-2">
            BELUM TAHU SPPG SUDAH SIAP HACCP ATAU BELUM?
          </h2>

          <p className="text-xs sm:text-sm font-semibold text-emerald-300 mb-2">
            Mulai dari Initial Assessment / Gap Assessment terlebih dahulu.
          </p>

          <p className="text-xs text-slate-300 leading-relaxed">
            Sebelum program pendampingan penuh dimulai, Tim Progresivo Consulting dapat melakukan kunjungan ke SPPG untuk memahami kondisi aktual di lapangan.
          </p>
        </div>

        {/* Visual 5-Step Flow Horizontal Scrolling / Grid for Mobile */}
        <div className="mb-6">
          <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2.5 flex items-center gap-1.5">
            <span>Alur Pelaksanaan Initial Assessment:</span>
          </div>
          
          <div className="grid grid-cols-5 gap-1.5 text-center">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.title}
                  className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-2 flex flex-col items-center justify-center"
                >
                  <IconComp className="w-4 h-4 text-emerald-400 mb-1" />
                  <span className="text-[9px] font-black text-white leading-tight">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Eye-catching Visual Banner Photo - Indonesian SPPG MBG Context */}
        <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-lg mb-6">
          <picture>
            <source type="image/webp" srcSet="/images/sppg_mbg_students.webp" />
            <img
              src="/images/sppg_mbg_students.jpg"
              alt="Siswa sekolah di Indonesia menikmati hidangan Makan Bergizi Gratis (MBG) yang aman dan higienis"
              width="800"
              height="520"
              loading="lazy"
              decoding="async"
              className="w-full h-44 object-cover filter contrast-105"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
          <div className="absolute bottom-2.5 left-3 right-3">
            <span className="text-[10px] font-bold uppercase text-emerald-400 tracking-wider block">
              Dampak Nyata Keamanan Pangan MBG
            </span>
            <span className="text-xs font-semibold text-white">
              Menjaga hidangan tetap aman, higienis, dan terlindungi hingga ke tangan siswa.
            </span>
          </div>
        </div>

        {/* 14 Elements Inspected */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 mb-5">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              14 Elemen yang Diperiksa di SPPG
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {ASSESSMENT_ITEMS.map((check, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-slate-950/70 border border-slate-800 text-[11px] text-slate-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span className="truncate">{check}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Output Assessment Card */}
        <div className="bg-gradient-to-br from-emerald-950/90 via-slate-900 to-teal-950/90 border border-emerald-500/40 rounded-xl p-4 shadow-xl mb-3">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 block mb-1">
            OUTPUT ASSESSMENT
          </span>
          <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug mb-3">
            SPPG MENDAPATKAN GAMBARAN KONDISI AKTUAL DAN PRIORITAS PERBAIKAN
          </h3>

          <div className="space-y-2 mb-4">
            <div className="flex items-start gap-2 text-slate-200 text-xs">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Temuan/gap yang perlu diperbaiki secara objektif</span>
            </div>
            <div className="flex items-start gap-2 text-slate-200 text-xs">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Prioritas tindakan mendesak vs bertahap</span>
            </div>
            <div className="flex items-start gap-2 text-slate-200 text-xs">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Rekomendasi perbaikan disesuaikan kondisi SPPG</span>
            </div>
            <div className="flex items-start gap-2 text-slate-200 text-xs">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Gambaran kesiapan menuju pendampingan HACCP</span>
            </div>
          </div>

          <a
            id="assessment-cta-btn"
            href="#form-lead"
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md active:scale-98 transition-all"
          >
            <span>MULAI DARI ASSESSMENT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
