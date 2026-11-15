import React from 'react';
import { GraduationCap, Cpu, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200 dark:border-slate-800/80">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">Engineering Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <GraduationCap className="w-8 h-8 text-emerald-500 mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Academic Foundation</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            3rd-year BSc. Computer Engineering student at the University of Dodoma (CIVE), specializing in Web Development, Computer Networking, and Embedded Systems.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <Cpu className="w-8 h-8 text-emerald-500 mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Dual-Domain Focus</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Combining clean, responsive front-end engineering with hands-on LAN/WAN administration and hardware troubleshooting skills.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <Globe className="w-8 h-8 text-emerald-500 mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Quick Highlights</h3>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
            <li><strong className="text-slate-800 dark:text-slate-200">Base:</strong> Dodoma &amp; Dar es Salaam</li>
            <li><strong className="text-slate-800 dark:text-slate-200">Core:</strong> UI/UX, React, LAN/WAN</li>
            <li><strong className="text-slate-800 dark:text-slate-200">Languages:</strong> English &amp; Swahili</li>
          </ul>
        </div>
      </div>
    </section>
  );
}