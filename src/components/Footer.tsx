import React from 'react';
import { ShieldCheck, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, createWhatsAppUrl } from '../data/haccpData';

export const Footer: React.FC = () => {
  return (
    <footer className="content-auto bg-slate-950 text-slate-400 text-xs border-t border-slate-800/80 pt-8 pb-28 px-4 sm:px-5">
      <div className="w-full">
        
        {/* Brand */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-sm text-white block leading-none">
                Progresivo Consulting
              </span>
              <span className="text-[10px] text-slate-400">
                Konsultan Keamanan Pangan & Sistem HACCP SPPG MBG
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
            Membantu SPPG MBG membangun dan menerapkan sistem HACCP secara nyata dan bertahap.
          </p>

          <div className="text-[10px] text-slate-300 bg-slate-900 border border-slate-800 rounded-lg p-2.5">
            “Jika SPPG belum siap secara infrastruktur, kami lebih memilih memetakan perbaikannya terlebih dahulu daripada memaksakan proses sertifikasi.”
          </div>
        </div>

        {/* Quick Nav */}
        <div className="mb-6">
          <h4 className="text-[10px] font-bold text-white uppercase tracking-wider mb-2.5">
            Navigasi Halaman
          </h4>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <a href="#tentang" className="text-slate-300 hover:text-emerald-400">Tentang Layanan</a>
            <a href="#assessment" className="text-slate-300 hover:text-emerald-400">Initial Assessment</a>
            <a href="#pendampingan" className="text-slate-300 hover:text-emerald-400">Ruang Lingkup</a>
            <a href="#tahapan" className="text-slate-300 hover:text-emerald-400">10 Alur Program</a>
            <a href="#form-lead" className="text-slate-300 hover:text-emerald-400">Formulir SPPG</a>
            <a href="#faq" className="text-slate-300 hover:text-emerald-400">FAQ</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-6 pt-4 border-t border-slate-900 space-y-2 text-[11px]">
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
            <span>Kantor: Bandung, Jawa Barat (Fokus layanan khusus seluruh wilayah Pulau Jawa).</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <a 
              href={createWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 font-bold"
            >
              WhatsApp: {WHATSAPP_NUMBER}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-900 text-[10px] text-slate-500 text-center">
          <p>© {new Date().getFullYear()} Progresivo Consulting. All rights reserved.</p>
          <p className="mt-0.5">Pendampingan Teknis Keamanan Pangan & Sistem HACCP SPPG MBG</p>
        </div>

      </div>
    </footer>
  );
};
