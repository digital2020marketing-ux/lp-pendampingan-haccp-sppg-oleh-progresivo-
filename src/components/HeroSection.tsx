import React from 'react';
import { CheckCircle2, ArrowRight, ClipboardCheck, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { createWhatsAppUrl } from '../data/haccpData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-6 pb-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white overflow-hidden px-4 sm:px-5"
    >
      {/* Background ambient lighting for eye-catching elegance */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-start">
        
        {/* Small text badge above headline */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold tracking-wider uppercase mb-4 shadow-sm">
          <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" />
          <span>PENDAMPINGAN SISTEM HACCP SPPG MBG • KHUSUS PULAU JAWA</span>
        </div>

        {/* Big Headline */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-[1.2] mb-3">
          SPPG SUDAH BEROPERASI? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            JANGAN TUNGGU AUDIT
          </span>{' '}
          BARU BERBENAH.
        </h1>

        {/* Subheadline */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          Progresivo Consulting membantu SPPG membangun dan menerapkan sistem HACCP secara bertahap — 
          mulai dari melihat kondisi aktual, penyusunan sistem, pelatihan tim, implementasi, sampai persiapan menghadapi audit sertifikasi.
        </p>

        {/* 3 Core Points */}
        <div className="flex flex-col gap-2 mb-6 w-full bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 backdrop-blur-xs">
          <div className="flex items-start gap-2.5 text-slate-200 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Fokus pendampingan khusus seluruh wilayah Pulau Jawa</span>
          </div>
          <div className="flex items-start gap-2.5 text-slate-200 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Disesuaikan dengan kondisi aktual fasilitas & dapur SPPG</span>
          </div>
          <div className="flex items-start gap-2.5 text-slate-200 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Bukan sekadar dokumen, melainkan pembinaan nyata hingga siap audit</span>
          </div>
        </div>

        {/* Eye-catching Hero Image - Indonesian SPPG MBG Context */}
        <div className="w-full relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl shadow-black/60 bg-slate-900 mb-6">
          <picture>
            <source type="image/webp" srcSet="/images/sppg_mbg_meal.webp" />
            <img
              src="/images/sppg_mbg_meal.jpg"
              alt="Penyajian Makanan Bergizi Gratis (MBG) higienis dalam ompreng standar SPPG"
              width="800"
              height="520"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-56 sm:h-64 object-cover filter contrast-105"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />

          {/* Floating verified badge */}
          <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 rounded-lg px-2.5 py-1.5 shadow-md flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-white leading-tight">SPPG MBG Ready</div>
              <div className="text-[9px] text-slate-300">Standar Higiene & Keamanan MBG</div>
            </div>
          </div>

          {/* Floating note at bottom of image */}
          <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-2.5 shadow-md flex items-center gap-2.5">
            <ClipboardCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <p className="text-[11px] text-slate-200 leading-snug">
              <span className="font-bold text-white">Sistem Higiene Terverifikasi: </span>
              Pengendalian titik kritis, sanitasi ompreng MBG, dan keamanan pangan nyata.
            </p>
          </div>
        </div>

        {/* Accredited Certification Partner Badge */}
        <div className="w-full flex items-center justify-between gap-3 bg-slate-900/90 border border-slate-800 rounded-xl px-3.5 py-2.5 mb-5 shadow-sm">
          <div className="flex items-center gap-2.5">
            <img
              src="https://i.ibb.co.com/YBrjWfL1/sucopinbdo.jpg"
              alt="Sucofindo Terakreditasi KAN"
              referrerPolicy="no-referrer"
              className="h-7 w-auto object-contain rounded shrink-0 bg-white p-0.5"
            />
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 leading-tight">
                Lembaga Sertifikasi Resmi
              </div>
              <div className="text-xs font-extrabold text-white leading-tight">
                PT SUCOFINDO (Terakreditasi KAN)
              </div>
            </div>
          </div>
          <span className="text-[10px] font-bold text-blue-400 bg-blue-950/80 border border-blue-800/80 px-2 py-0.5 rounded hidden sm:inline-block">
            Standar Nasional
          </span>
        </div>

        {/* Action Buttons (Full width on mobile for effortless tapping) */}
        <div className="flex flex-col gap-2.5 w-full mb-3">
          <a
            id="hero-primary-cta"
            href="#form-lead"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3.5 px-5 rounded-xl font-extrabold text-sm shadow-lg shadow-emerald-950/50 active:scale-98 transition-all"
          >
            <span>KONSULTASIKAN KONDISI SPPG</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            id="hero-secondary-cta"
            href="#tahapan"
            className="w-full inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-750 text-slate-200 py-3 px-5 rounded-xl font-semibold text-xs border border-slate-700 active:scale-98 transition-all"
          >
            <span>PELAJARI TAHAP PENDAMPINGAN</span>
          </a>
        </div>

        {/* Reassurance text below CTA */}
        <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1 w-full justify-center text-center">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
          <span>Konsultasi awal melalui WhatsApp • Program disesuaikan kebutuhan SPPG</span>
        </div>

      </div>
    </section>
  );
};
