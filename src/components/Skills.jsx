import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200 dark:border-slate-800/80">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div
            key={category}
            className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}