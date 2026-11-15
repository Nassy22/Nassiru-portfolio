import React from 'react';
import { Briefcase } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200 dark:border-slate-800/80">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">Experience &amp; Education</h2>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
        {experienceData.map((item) => (
          <div key={item.id} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500 bg-white dark:bg-slate-950 text-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase className="w-4 h-4" />
            </div>

            <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">{item.period}</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">{item.role}</h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-3">
                {item.company} &bull; {item.location}
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-disc pl-4">
                {item.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}