import React from 'react';
import { Sliders, MapPin, Check, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../data/haccpData';

export const CustomizedProgramSection: React.FC = () => {
  return (
    <section id="program-custom" className="content-auto py-10 bg-slate-50 border-b border-slate-200 px-4 sm:px-5">
      <div className="w-full">
        
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-3">
            <Sliders className="w-3 h-3 text-emerald-600" />
            <span>Skema Pendampingan Fleksibel</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2.5">
            PROGRAM DISESUAIKAN DENGAN KONDISI SPPG
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            Setiap SPPG memiliki kondisi yang berbeda. Lokasi, kesiapan fasilitas, kapasitas produksi, kondisi dokumen, kebutuhan kunjungan, dan target sertifikasi akan memengaruhi ruang lingkup pendampingan.
          </p>

          <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 mb-4">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 block mb-0.5">
                  Wilayah Layanan: Khusus Seluruh Wilayah Pulau Jawa
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Berkantor pusat di <strong>Bandung</strong>, Progresivo Consulting memfokuskan pendampingan teknis dan kunjungan on-site <strong>hanya untuk SPPG di wilayah Pulau Jawa</strong> (Jawa Barat, DKI Jakarta, Banten, Jawa Tengah, D.I. Yogyakarta, dan Jawa Timur) demi menjamin kedalaman dan efektivitas pendampingan langsung di dapur.
                </p>
              </div>
            </div>
          </div>

          {/* 4 factors */}
          <div className="space-y-1.5 text-xs text-slate-600 mb-5">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Jarak & kebutuhan kunjungan on-site</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Kesiapan fisik dapur & tata ruang</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Volume produksi porsi per hari</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Kesiapan dokumen SOP yang sudah ada</span>
            </div>
          </div>

          {/* Action CTA */}
          <a
            id="program-info-wa-btn"
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold py-3.5 px-4 rounded-xl text-xs sm:text-sm shadow-md active:scale-98 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>KONSULTASIKAN KONDISI SPPG</span>
          </a>

        </div>

      </div>
    </section>
  );
};
