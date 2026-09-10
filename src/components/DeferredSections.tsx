import React from 'react';
import { ProblemSection } from './ProblemSection';
import { SolutionSection } from './SolutionSection';
import { AssessmentSection } from './AssessmentSection';
import { TwoOutcomesSection } from './TwoOutcomesSection';
import { ScopeSection } from './ScopeSection';
import { TrainingSection } from './TrainingSection';
import { ProgramFlowSection } from './ProgramFlowSection';
import { AuditStagesSection } from './AuditStagesSection';
import { CaseStudySection } from './CaseStudySection';
import { CustomizedProgramSection } from './CustomizedProgramSection';
import { LeadFormSection } from './LeadFormSection';
import { FaqSection } from './FaqSection';
import { FinalCtaSection } from './FinalCtaSection';
import { Footer } from './Footer';

export default function DeferredSections() {
  return (
    <>
      {/* 3. Section Masalah */}
      <ProblemSection />

      {/* 4. Solusi Progresivo */}
      <SolutionSection />

      {/* 5. Assessment Awal */}
      <AssessmentSection />

      {/* 6. Dua Hasil Setelah Assessment */}
      <TwoOutcomesSection />

      {/* 7. Ruang Lingkup Pendampingan (12 Cards) */}
      <ScopeSection />

      {/* 8. Pelatihan Tim HACCP (3 Cards) */}
      <TrainingSection />

      {/* 9. Alur Program (10 Steps Timeline) */}
      <ProgramFlowSection />

      {/* 10. Stage 1 & Stage 2 (Persiapan Audit) */}
      <AuditStagesSection />

      {/* 11. Contoh Kasus / Ilustrasi (SPPG Bintang Utama Bogor) */}
      <CaseStudySection />

      {/* 12. Program Disesuaikan dengan Kondisi SPPG */}
      <CustomizedProgramSection />

      {/* 13 & 14. Form Kualifikasi Lead & WhatsApp Otomatis */}
      <LeadFormSection />

      {/* 15. FAQ Accordion */}
      <FaqSection />

      {/* 16. Final CTA Section */}
      <FinalCtaSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
