import React from 'react';
import { ShieldCheck, CheckCheck, Info, Sparkles, Building2, Flame } from 'lucide-react';

export const AuditStagesSection: React.FC = () => {
  return (
    <section id="audit-stages" className="content-auto py-10 bg-slate-50 border-b border-slate-200 px-4 sm:px-5">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-[10px] font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>Standar Lembaga Sertifikasi</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
            PERSIAPAN MENGHADAPI PROSES AUDIT SERTIFIKASI
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Audit sertifikasi HACCP umumnya melalui 2 tingkatan evaluasi resmi oleh lembaga sertifikasi independen terakreditasi:
          </p>
        </div>

        {/* Lembaga Sertifikasi: PT SUCOFINDO Terakreditasi KAN */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200/90 shadow-xs mb-5">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="shrink-0 bg-slate-50 border border-slate-200/80 rounded-xl p-2 flex items-center justify-center shadow-2xs">
              <img
                src="https://i.ibb.co.com/YBrjWfL1/sucopinbdo.jpg"
                alt="Lembaga Sertifikasi PT SUCOFINDO Terakreditasi KAN"
                referrerPolicy="no-referrer"
                className="h-16 sm:h-20 w-auto object-contain rounded-md"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-800 text-[10px] font-extrabold uppercase tracking-wider mb-1.5">
                <ShieldCheck className="w-3 h-3 text-blue-600" />
                <span>Lembaga Sertifikasi Resmi • Akreditasi KAN</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight mb-1">
                PT SUCOFINDO (Terakreditasi KAN)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Audit sertifikasi resmi HACCP dilaksanakan bersama lembaga pengujian, inspeksi, dan sertifikasi nasional <strong>PT SUCOFINDO</strong> yang telah terakreditasi oleh <strong>Komite Akreditasi Nasional (KAN)</strong>, menjamin sertifikat HACCP yang diterbitkan memiliki legitimasi kuat, kredibel, dan diakui secara nasional.
              </p>
            </div>
          </div>
        </div>

        {/* 2 Stage Cards */}
        <div className="space-y-4 mb-5">
          
          {/* Stage 1: Audit PRP / PDD */}
          <div className="bg-white rounded-2xl p-4.5 border-2 border-blue-500/80 shadow-xs">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-sm shadow-blue-500/30">
                  S1
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 block leading-none">
                    TAHAP 1
                  </span>
                  <h3 className="text-base font-black text-slate-900 leading-tight">
                    AUDIT PRP / PDD
                  </h3>
                </div>
              </div>
              <span className="text-[10px] font-extrabold text-blue-800 bg-blue-100/80 border border-blue-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Kelayakan Dasar
              </span>
            </div>

            <div className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Pemeriksaan Prerequisite Programs / Program Persyaratan Dasar:</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Auditor memeriksa fondasi kelayakan fisik dapur dan pemenuhan standar dasar (GMP / SSOP / CPPOB) sebelum masuk ke sistem HACCP lanjutan.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1.5 text-[11px] text-slate-700">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                <span><strong>Fasilitas & Infrastruktur:</strong> Tata letak dapur, ventilasi, pencahayaan, saluran air & penanganan limbah.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                <span><strong>Sanitasi & Higiene:</strong> Kebersihan area olah, cuci tangan, pengendalian hama (pest control), air bersih.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                <span><strong>Kesiapan Dokumen PRP/PDD:</strong> Manual, SOP dasar, dan rekaman pembersihan berkala.</span>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-blue-700 font-semibold">
              <span>Fokus Utama: Memastikan dapur layak sebelum audit HACCP</span>
              <span className="text-blue-500 font-bold">✓ Wajib Lolos</span>
            </div>
          </div>

          {/* Stage 2: Audit Sistem HACCP */}
          <div className="bg-white rounded-2xl p-4.5 border-2 border-emerald-500/80 shadow-xs">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-sm shadow-emerald-500/30">
                  S2
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block leading-none">
                    TAHAP 2
                  </span>
                  <h3 className="text-base font-black text-slate-900 leading-tight">
                    AUDIT SISTEM HACCP
                  </h3>
                </div>
              </div>
              <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Penerapan Lapangan
              </span>
            </div>

            <div className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pemeriksaan Penerapan 7 Prinsip & 12 Langkah HACCP:</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Auditor melihat langsung apakah sistem kendali bahaya yang sudah dibuat benar-benar dijalankan dan dibuktikan dengan rekaman di kegiatan dapur sehari-hari.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1.5 text-[11px] text-slate-700">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                <span><strong>Analisis Bahaya & CCP:</strong> Titik kritis kendali bahaya biologis, fisik, dan kimia pada menu SPPG.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                <span><strong>Monitoring & Batas Kritis:</strong> Pemantauan suhu memasak, suhu chiller, durasi simpan, dan holding time.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                <span><strong>Tindakan Koreksi & Bukti Rekaman:</strong> Log form harian pengolahan dan kesiapan personel saat diwawancarai.</span>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-emerald-700 font-semibold">
              <span>Fokus Utama: Memverifikasi sistem berjalan nyata dalam operasional</span>
              <span className="text-emerald-600 font-bold">✓ Sertifikasi Terbit</span>
            </div>
          </div>

        </div>

        {/* Support Note */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 mb-4 text-center">
          <p className="text-xs font-bold text-emerald-950 leading-relaxed">
            Progresivo Consulting membantu SPPG mempersiapkan kepatuhan PRP/PDD (Stage 1) serta mematangkan penerapan sistem HACCP & form rekaman di dapur (Stage 2).
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-3 flex items-start gap-2.5 text-[11px] text-slate-600">
          <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-800">Catatan:</strong> Keputusan sertifikasi merupakan kewenangan lembaga sertifikasi berdasarkan hasil audit.
          </p>
        </div>

      </div>
    </section>
  );
};
