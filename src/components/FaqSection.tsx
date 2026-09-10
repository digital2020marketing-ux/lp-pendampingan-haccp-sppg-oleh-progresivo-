import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_LIST } from '../data/haccpData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="content-auto py-10 bg-slate-50 border-b border-slate-200 px-4 sm:px-5">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-2.5">
            <HelpCircle className="w-3 h-3 text-emerald-600" />
            <span>Tanya Jawab Seputar Pendampingan</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
            FREQUENTLY ASKED QUESTIONS (FAQ)
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Jawaban lugas seputar proses pendampingan sistem HACCP untuk SPPG MBG.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-2.5">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-xl border transition-all overflow-hidden ${
                  isOpen ? 'border-emerald-500 shadow-2xs' : 'border-slate-200'
                }`}
              >
                <button
                  id={`faq-mobile-btn-${index}`}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-3.5 flex items-center justify-between gap-3 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      isOpen ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 pt-0.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
