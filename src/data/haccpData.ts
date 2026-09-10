import { FaqItem, ScopeCardItem, TimelineStepItem } from '../types';

export const WHATSAPP_NUMBER = '0822-2777-1941';
export const WHATSAPP_RAW = '6282227771941';

export const PROBLEM_QUESTIONS = [
  {
    id: 'prob-1',
    question: 'Apakah kondisi dapur dan infrastrukturnya sudah memadai?',
    desc: 'Standar zonasi, sanitasi dinding/lantai, ventilasi udara, dan pemisahan area kotor & bersih.'
  },
  {
    id: 'prob-2',
    question: 'Apakah alur proses produksi sudah dikendalikan dengan baik?',
    desc: 'Dari penerimaan bahan baku segar, persiapan, pemasakan, hingga pengemasan porsi MBG.'
  },
  {
    id: 'prob-3',
    question: 'Apakah higiene dan sanitasi sudah konsisten?',
    desc: 'Kedisiplinan APD, cuci tangan, sanitasi alat masak, dan pembersihan terjadwal.'
  },
  {
    id: 'prob-4',
    question: 'Apakah SOP dan form yang ada sudah cukup sebagai bukti penerapan?',
    desc: 'Kelengkapan formulir pemantauan harian yang benar-benar diisi, bukan sekadar lembaran kosong.'
  },
  {
    id: 'prob-5',
    question: 'Bahaya apa yang harus dikendalikan pada setiap proses?',
    desc: 'Identifikasi spesifik bahaya biologis/bakteri, kimia, fisik, serta potensi cemaran silang.'
  },
  {
    id: 'prob-6',
    question: 'Apakah ada CCP yang perlu ditetapkan?',
    desc: 'Penetapan Titik Kendali Kritis (CCP) yang realistis untuk menu harian dan skala dapur SPPG.'
  },
  {
    id: 'prob-7',
    question: 'Apakah Tim HACCP memahami tugasnya?',
    desc: 'Pemahaman operasional seluruh staf, bukan hanya ditanggung oleh satu orang penanggung jawab.'
  },
  {
    id: 'prob-8',
    question: 'Apakah SPPG sudah siap ketika auditor datang?',
    desc: 'Kesiapan menghadapi wawancara langsung, penelusuran dokumen, dan observasi dapur saat memasak.'
  }
];

export const ASSESSMENT_ITEMS = [
  'Infrastruktur dan fasilitas',
  'Alur proses produksi',
  'Area penerimaan bahan',
  'Penyimpanan bahan baku',
  'Proses persiapan dan pengolahan',
  'Higiene personel',
  'Sanitasi',
  'Peralatan',
  'Pencegahan kontaminasi silang',
  'Pengendalian suhu',
  'SOP dan form yang digunakan',
  'PRP/GMP/SSOP',
  'Rekaman kegiatan',
  'Kesiapan menuju HACCP'
];

export const SCOPE_ITEMS: ScopeCardItem[] = [
  {
    number: '01',
    title: 'Gap Analysis',
    description: 'Menilai kondisi aktual dan kebutuhan perbaikan.'
  },
  {
    number: '02',
    title: 'Review SOP & Form',
    description: 'Memeriksa dokumen yang sudah digunakan SPPG.'
  },
  {
    number: '03',
    title: 'PRP / GMP / SSOP',
    description: 'Memperkuat program dasar keamanan pangan.'
  },
  {
    number: '04',
    title: 'Tim HACCP',
    description: 'Membantu pembentukan dan pembekalan Tim HACCP.'
  },
  {
    number: '05',
    title: 'Deskripsi Produk & Penggunaan',
    description: 'Menyusun informasi produk dan pengguna/konsumen yang dituju.'
  },
  {
    number: '06',
    title: 'Diagram Alir',
    description: 'Menyusun alur proses berdasarkan kondisi sebenarnya.'
  },
  {
    number: '07',
    title: 'Verifikasi Diagram Alir',
    description: 'Memastikan diagram sesuai dengan aktivitas di lapangan.'
  },
  {
    number: '08',
    title: 'Analisis Bahaya',
    description: 'Mengidentifikasi potensi bahaya biologis, kimia, fisik, dan alergen.'
  },
  {
    number: '09',
    title: 'Penetapan CCP',
    description: 'Menentukan titik pengendalian kritis bila memang diperlukan.'
  },
  {
    number: '10',
    title: 'Monitoring & Tindakan Koreksi',
    description: 'Membantu menyiapkan cara pemantauan, batas kritis, dan tindakan jika terjadi penyimpangan.'
  },
  {
    number: '11',
    title: 'Form & Rekaman',
    description: 'Menyiapkan bukti penerapan sistem.'
  },
  {
    number: '12',
    title: 'Implementasi & Pra-Audit',
    description: 'Mengevaluasi penerapan sebelum proses audit sertifikasi.'
  }
];

export const PROGRAM_TIMELINE: TimelineStepItem[] = [
  {
    step: 1,
    title: 'Konsultasi Awal',
    description: 'Memahami lokasi dan kondisi umum SPPG.'
  },
  {
    step: 2,
    title: 'Initial Assessment',
    description: 'Melihat kondisi aktual.'
  },
  {
    step: 3,
    title: 'Laporan Gap & Rekomendasi',
    description: 'Menentukan apa yang perlu diperbaiki.'
  },
  {
    step: 4,
    title: 'Perbaikan Dasar Jika Diperlukan',
    description: 'Terutama bila ada kebutuhan infrastruktur atau fasilitas.'
  },
  {
    step: 5,
    title: 'Penyusunan & Penyempurnaan Sistem HACCP',
    description: 'Dokumen dan sistem disesuaikan dengan operasional SPPG.'
  },
  {
    step: 6,
    title: 'Pelatihan Tim',
    description: 'Personel memahami sistem.'
  },
  {
    step: 7,
    title: 'Implementasi',
    description: 'Sistem dijalankan dan direkam.'
  },
  {
    step: 8,
    title: 'Evaluasi & Pra-Audit',
    description: 'Menguji kesiapan.'
  },
  {
    step: 9,
    title: 'Persiapan Audit Sertifikasi (Stage 1 & Stage 2)',
    description: 'Mempersiapkan tim menghadapi Audit Stage 1 (PRP/PDD) dan Audit Stage 2 (Sistem HACCP).'
  },
  {
    step: 10,
    title: 'Tindak Lanjut Temuan',
    description: 'Membantu menindaklanjuti apabila terdapat temuan audit.'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Apakah SPPG yang baru mulai bisa didampingi?',
    answer: 'Bisa. Program akan disesuaikan dengan kondisi aktual dan kebutuhan SPPG.'
  },
  {
    question: 'SPPG kami sudah menggunakan SOP dan form BGN. Apakah harus dibuat ulang?',
    answer: 'Tidak selalu. Dokumen yang sudah ada akan direview terlebih dahulu dan dapat disesuaikan bila diperlukan.'
  },
  {
    question: 'Bagaimana jika infrastrukturnya belum siap?',
    answer: 'Tim dapat memberikan rekomendasi berdasarkan hasil assessment. Jika membutuhkan perbaikan besar, proses menuju sertifikasi dapat ditunda terlebih dahulu.'
  },
  {
    question: 'Apakah Progresivo hanya membuat dokumen?',
    answer: 'Tidak. Pendampingan diarahkan pada dokumen, pemahaman tim, implementasi, rekaman, evaluasi, dan kesiapan audit.'
  },
  {
    question: 'Apakah bisa langsung sertifikasi?',
    answer: 'Tergantung kondisi SPPG. Karena itu kondisi awal sebaiknya dinilai terlebih dahulu.'
  },
  {
    question: 'Wilayah mana saja yang dilayani oleh Progresivo Consulting?',
    answer: 'Saat ini layanan pendampingan kami difokuskan khusus untuk seluruh wilayah Pulau Jawa (Jawa Barat, DKI Jakarta, Banten, Jawa Tengah, DI Yogyakarta, dan Jawa Timur) guna memastikan efektivitas kunjungan dan pendampingan teknis secara langsung di lapangan.'
  },
  {
    question: 'Berapa biaya programnya?',
    answer: 'Biaya disesuaikan dengan lokasi kota/kabupaten di Pulau Jawa, kondisi awal SPPG, kebutuhan pendampingan, dan ruang lingkup pekerjaan. Silakan hubungi kami agar program dapat disesuaikan dengan kondisi SPPG Anda.'
  },
  {
    question: 'Apakah sertifikasi dijamin berhasil?',
    answer: 'Kami membantu mempersiapkan sistem dan implementasinya. Keputusan sertifikasi tetap menjadi kewenangan lembaga sertifikasi berdasarkan hasil audit.'
  },
  {
    question: 'Siapa lembaga sertifikasi yang melaksanakan audit?',
    answer: 'Audit sertifikasi resmi dilaksanakan oleh PT SUCOFINDO yang telah terakreditasi oleh KAN (Komite Akreditasi Nasional). Progresivo Consulting berperan sebagai konsultan pendamping teknis yang membantu SPPG mempersiapkan kepatuhan PRP/PDD dan sistem HACCP hingga siap diaudit.'
  }
];

export function createWhatsAppUrl(formData?: Partial<{
  nama: string;
  namaSppg: string;
  lokasi: string;
  sudahBeroperasi: string;
  kapasitasPorsi: string;
  sopFormBgn: string;
  kebutuhan: string;
  target: string;
}>): string {
  if (!formData || !formData.nama) {
    const defaultMsg = 'Halo Progresivo Consulting, saya ingin konsultasi mengenai pendampingan HACCP SPPG MBG di Pulau Jawa.';
    return `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(defaultMsg)}`;
  }

  const message = [
    'Halo Progresivo Consulting, saya ingin konsultasi mengenai pendampingan HACCP SPPG (Pulau Jawa).',
    '',
    `Nama: ${formData.nama || '-'}`,
    `Nama SPPG: ${formData.namaSppg || '-'}`,
    `Lokasi (Pulau Jawa): ${formData.lokasi || '-'}`,
    `Sudah beroperasi: ${formData.sudahBeroperasi || '-'}`,
    `Kapasitas porsi/hari: ${formData.kapasitasPorsi || '-'}`,
    `SOP/Form BGN: ${formData.sopFormBgn || '-'}`,
    `Kebutuhan: ${formData.kebutuhan || '-'}`,
    `Target: ${formData.target || '-'}`
  ].join('\n');

  return `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(message)}`;
}
