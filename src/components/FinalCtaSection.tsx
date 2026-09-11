import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, MapPin, Building } from 'lucide-react';
import { WHATSAPP_NUMBER, createWhatsAppUrl } from '../data/haccpData';
import { trackWhatsAppClick } from '../utils/metaPixel';

export const FinalCtaSection: React.FC = () => {
  return (
    <section 
      id="final-cta" 
      className="content-auto py-12 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white relative overflow-hidden px-4 sm:px-5"
    >
      <div className="w-full relative z-10 text-left">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold tracking-wide uppercase mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Keamanan Pangan SPPG MBG</span>
        </div>

        {/* Big Headline */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug mb-3">
          JANGAN TUNGGU MENJELANG AUDIT UNTUK MENGETAHUI APA YANG MASIH KURANG.
        </h2>

        {/* Subheadline */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          Mulai dengan memahami kondisi aktual SPPG. Kami bantu memetakan apa yang sudah berjalan, 
          apa yang perlu diperbaiki, dan langkah berikutnya menuju sistem HACCP yang lebih siap.
        </p>

        {/* Large CTA button */}
        <div className="space-y-2.5 mb-6">
          <a
            id="final-cta-wa-btn"
            href={createWhatsAppUrl()}
            onClick={() => trackWhatsAppClick('Final CTA Section')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3.5 px-5 rounded-xl text-sm font-black shadow-xl shadow-emerald-950/80 active:scale-98 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>KONSULTASIKAN KONDISI SPPG</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#form-lead"
            className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800"
          >
            <span>Isi Data SPPG Dulu</span>
          </a>
        </div>

        {/* WhatsApp Callout */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 mb-6 flex items-center justify-between">
          <span className="text-xs text-slate-400">WhatsApp Resmi:</span>
          <span className="text-xs sm:text-sm text-emerald-400 font-extrabold tracking-wider">
            {WHATSAPP_NUMBER}
          </span>
        </div>

        {/* Location & Coverage */}
        <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-1.5">
          <div className="flex items-center gap-1.5 font-medium text-slate-300">
            <Building className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Progresivo Consulting — Bandung</span>
          </div>
          <div className="flex items-start gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              Wilayah Layanan: <strong className="text-white">Khusus SPPG di Seluruh Pulau Jawa</strong> (Jawa Barat, DKI Jakarta, Banten, Jawa Tengah, D.I. Yogyakarta, Jawa Timur).
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
