export interface LeadFormData {
  nama: string;
  whatsapp: string;
  namaSppg: string;
  lokasi: string;
  sudahBeroperasi: 'Sudah' | 'Belum' | '';
  kapasitasPorsi: string;
  sopFormBgn: 'Sudah' | 'Sebagian' | 'Belum' | '';
  kebutuhan: string;
  target: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ScopeCardItem {
  number: string;
  title: string;
  description: string;
}

export interface TimelineStepItem {
  step: number;
  title: string;
  description: string;
}
