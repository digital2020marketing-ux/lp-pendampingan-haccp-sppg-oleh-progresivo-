import React, { useState } from 'react';
import { 
  MessageCircle, 
  CheckCircle, 
  Building2, 
  MapPin, 
  User, 
  Phone, 
  Sparkles
} from 'lucide-react';
import { LeadFormData } from '../types';
import { WHATSAPP_NUMBER, createWhatsAppUrl } from '../data/haccpData';
import { trackLeadSubmission } from '../utils/metaPixel';

export const LeadFormSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    nama: '',
    whatsapp: '',
    namaSppg: '',
    lokasi: '',
    sudahBeroperasi: 'Sudah',
    kapasitasPorsi: '',
    sopFormBgn: 'Sudah',
    kebutuhan: 'Assessment kesiapan',
    target: '1–3 bulan'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger Meta Pixel & Conversions API Lead Event with deduplication & user data
    trackLeadSubmission(formData);

    const waUrl = createWhatsAppUrl({
      nama: formData.nama,
      namaSppg: formData.namaSppg,
      lokasi: formData.lokasi,
      sudahBeroperasi: formData.sudahBeroperasi,
      kapasitasPorsi: formData.kapasitasPorsi,
      sopFormBgn: formData.sopFormBgn,
      kebutuhan: formData.kebutuhan,
      target: formData.target
    });

    window.open(waUrl, '_blank');
  };

  return (
    <section id="form-lead" className="content-auto py-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-4 sm:px-5">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Formulir Kualifikasi SPPG</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug mb-2">
            CERITAKAN SEDIKIT KONDISI SPPG ANDA
          </h2>

          <p className="text-xs text-slate-300 leading-relaxed">
            Data ini membantu tim konsultan memahami gambaran awal dapur sebelum diskusi solusi via WhatsApp. Layanan pendampingan kami khusus melayani SPPG di seluruh wilayah <strong>Pulau Jawa</strong>.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Nama PIC */}
            <div>
              <label className="block text-[11px] font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                Nama Anda *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Nama Lengkap"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950/90 border border-slate-700 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
            </div>

            {/* Nomor WhatsApp */}
            <div>
              <label className="block text-[11px] font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                Nomor WhatsApp *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 08123456789"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950/90 border border-slate-700 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
            </div>

            {/* Nama SPPG */}
            <div>
              <label className="block text-[11px] font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                Nama SPPG *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Contoh: SPPG Mandiri Sejahtera"
                  value={formData.namaSppg}
                  onChange={(e) => setFormData({ ...formData, namaSppg: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950/90 border border-slate-700 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
            </div>

            {/* Lokasi SPPG */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[11px] font-bold text-slate-200 uppercase tracking-wider">
                  Lokasi SPPG (Kota/Kabupaten) *
                </label>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded">
                  Khusus Pulau Jawa
                </span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Kab. Bandung, Bogor, Solo, Surabaya, dll."
                  value={formData.lokasi}
                  onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950/90 border border-slate-700 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                Melayani: Jawa Barat, DKI Jakarta, Banten, Jawa Tengah, D.I. Yogyakarta, dan Jawa Timur.
              </p>
            </div>

            {/* Apakah sudah beroperasi? */}
            <div>
              <label className="block text-[11px] font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                Apakah SPPG Sudah Beroperasi? *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Sudah', 'Belum'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFormData({ ...formData, sudahBeroperasi: opt as any })}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                      formData.sudahBeroperasi === opt
                        ? 'bg-emerald-600 border-emerald-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-300'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Kapasitas produksi/porsi per hari */}
            <div>
              <label className="block text-[11px] font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                Kapasitas Produksi / Porsi Per Hari *
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: 1.500 porsi/hari"
                value={formData.kapasitasPorsi}
                onChange={(e) => setFormData({ ...formData, kapasitasPorsi: e.target.value })}
                className="w-full px-3 py-2.5 bg-slate-950/90 border border-slate-700 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            {/* SOP/Form BGN */}
            <div>
              <label className="block text-[11px] font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                Apakah Sudah Memiliki SOP/Form BGN? *
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Sudah', 'Sebagian', 'Belum'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFormData({ ...formData, sopFormBgn: opt as any })}
                    className={`py-2 px-2 rounded-lg text-xs font-bold border transition-all ${
                      formData.sopFormBgn === opt
                        ? 'bg-emerald-600 border-emerald-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-300'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Kebutuhan Saat Ini */}
            <div>
              <label className="block text-[11px] font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                Kebutuhan Saat Ini *
              </label>
              <div className="space-y-1.5">
                {[
                  'Assessment kesiapan',
                  'Penyusunan sistem HACCP',
                  'Pendampingan implementasi',
                  'Persiapan sertifikasi',
                  'Belum tahu, ingin konsultasi dulu'
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFormData({ ...formData, kebutuhan: item })}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-medium border transition-all flex items-center justify-between ${
                      formData.kebutuhan === item
                        ? 'bg-emerald-950/90 border-emerald-500 text-emerald-200 font-bold'
                        : 'bg-slate-950/80 border-slate-800 text-slate-300'
                    }`}
                  >
                    <span>{item}</span>
                    {formData.kebutuhan === item && <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Target */}
            <div>
              <label className="block text-[11px] font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                Target Waktu Realisasi *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Secepatnya', '1–3 bulan', '3–6 bulan', 'Belum ditentukan'].map((targetOpt) => (
                  <button
                    key={targetOpt}
                    type="button"
                    onClick={() => setFormData({ ...formData, target: targetOpt })}
                    className={`py-2 px-2 rounded-lg text-[11px] font-bold border transition-all ${
                      formData.target === targetOpt
                        ? 'bg-emerald-600 border-emerald-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-300'
                    }`}
                  >
                    {targetOpt}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                id="lead-form-submit-btn"
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-950/60 flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>KONSULTASIKAN SPPG SAYA →</span>
              </button>

              <p className="mt-2 text-center text-[10px] text-slate-400">
                Pesan terformat otomatis terisi di WhatsApp: {WHATSAPP_NUMBER}
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
