import React from 'react';
import { Users, GraduationCap, Sparkles, CheckCheck } from 'lucide-react';

export const TrainingSection: React.FC = () => {
  return (
    <section id="pelatihan" className="content-auto py-10 bg-slate-50 border-b border-slate-200 px-4 sm:px-5">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-[10px] font-bold uppercase tracking-wider mb-2.5">
            <Users className="w-3 h-3 text-blue-600" />
            <span>Pemberdayaan Sumber Daya Manusia</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
            SISTEM TIDAK AKAN BERJALAN KALAU HANYA SATU ORANG YANG MEMAHAMINYA
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Karena itu program pendampingan juga diarahkan agar personel yang terlibat memahami fungsi dan tanggung jawabnya.
          </p>
        </div>

        {/* 3 Training Cards */}
        <div className="space-y-3.5 mb-2">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-extrabold text-slate-900">
                Awareness Keamanan Pangan
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
              Personel memahami mengapa higiene, sanitasi, suhu, kontaminasi silang, dan pencatatan penting dalam operasional harian SPPG MBG.
            </p>
            <span className="text-[10px] text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-200 inline-block">
              Seluruh kru dapur & pengolah makanan
            </span>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-extrabold text-slate-900">
                Pelatihan Tim HACCP
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
              Tim memahami alur HACCP, 7 prinsip, 12 langkah, dan bagaimana sistem dijalankan secara berkesinambungan.
            </p>
            <span className="text-[10px] text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-200 inline-block">
              PIC dapur, QC, supervisor & kepala unit
            </span>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <CheckCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-extrabold text-slate-900">
                Pendampingan Praktik
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
              Tim dibantu langsung menerapkan form, monitoring, pencatatan harian, dan tindakan koreksi saat terjadi penyimpangan di dapur.
            </p>
            <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
              Praktik on-site di area produksi dapur SPPG
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
