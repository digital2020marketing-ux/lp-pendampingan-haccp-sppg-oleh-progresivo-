import React from 'react';
import { Building2, ArrowDown, MapPin, AlertCircle } from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  return (
    <section id="studi-kasus" className="content-auto py-10 bg-white border-b border-slate-200 px-4 sm:px-5">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-[10px] font-bold uppercase tracking-wider mb-2">
            <span>Studi Alur Kerja Nyata</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-1">
            CONTOH ALUR PENANGANAN SPPG
          </h2>
          <span className="inline-block bg-slate-100 text-slate-700 font-semibold text-[11px] px-2.5 py-0.5 rounded-full border border-slate-200 mb-2">
            Contoh ilustrasi proses pendampingan
          </span>
        </div>

        {/* Narrative Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-2xs">
          
          {/* Header of case */}
          <div className="pb-3 border-b border-slate-200 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
                  SPPG Bintang Utama — Bogor
                </h3>
                <span className="text-[10px] text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" /> Jawa Barat
                </span>
              </div>
            </div>
            <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
              Sudah Beroperasi
            </span>
          </div>

          {/* Sequential Step Flow */}
          <div className="space-y-3">
            
            {/* Step 1 */}
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-[10px] font-extrabold uppercase text-emerald-700 block mb-0.5">
                Langkah Pertama
              </span>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                Assessment Kondisi Aktual
              </div>
              <p className="text-[11px] text-slate-600 leading-normal">
                Tim Progresivo Consulting meninjau zonasi fisik dapur, alur barang, dan SOP yang sedang berjalan di Bogor.
              </p>
            </div>

            <div className="flex justify-center text-slate-300">
              <ArrowDown className="w-4 h-4" />
            </div>

            {/* Step 2 */}
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-[10px] font-extrabold uppercase text-blue-700 block mb-0.5">
                Temuan Lapangan
              </span>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                Identifikasi Kesiapan vs Perbaikan
              </div>
              <p className="text-[11px] text-slate-600 leading-normal">
                Tim menemukan apa yang sudah berjalan baik dan titik kritis yang masih memerlukan perbaikan (sekat bahan baku & kontrol chiller).
              </p>
            </div>

            <div className="flex justify-center text-slate-300">
              <ArrowDown className="w-4 h-4" />
            </div>

            {/* Step 3 */}
            <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
              <span className="text-[10px] font-extrabold uppercase text-amber-800 block mb-0.5">
                Keputusan Teknis
              </span>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                Perbaikan Dilakukan Terlebih Dahulu
              </div>
              <p className="text-[11px] text-slate-700 leading-normal">
                Karena ada kebutuhan perbaikan infrastruktur fisik, sertifikasi tidak dipaksakan. SPPG merenovasi ringan tata letak dapur sesuai arahan teknis.
              </p>
            </div>

            <div className="flex justify-center text-slate-300">
              <ArrowDown className="w-4 h-4" />
            </div>

            {/* Step 4 */}
            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              <span className="text-[10px] font-extrabold uppercase text-emerald-800 block mb-0.5">
                Tahap Lanjutan
              </span>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                Setelah Dasar Siap: Pendampingan HACCP Dilanjutkan
              </div>

              <div className="flex flex-wrap items-center gap-1 text-[10px] font-bold text-emerald-950">
                <span className="bg-white px-2 py-0.5 rounded border border-emerald-300">Pelatihan</span>
                <span>→</span>
                <span className="bg-white px-2 py-0.5 rounded border border-emerald-300">Implementasi</span>
                <span>→</span>
                <span className="bg-white px-2 py-0.5 rounded border border-emerald-300">Rekaman</span>
                <span>→</span>
                <span className="bg-white px-2 py-0.5 rounded border border-emerald-300">Pra-Audit</span>
                <span>→</span>
                <span className="bg-emerald-700 text-white px-2 py-0.5 rounded">Sertifikasi</span>
              </div>
            </div>

          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 flex items-start gap-2 text-[10px] text-slate-500">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <p>
              Setiap SPPG dapat memiliki kebutuhan dan durasi perbaikan yang berbeda.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
