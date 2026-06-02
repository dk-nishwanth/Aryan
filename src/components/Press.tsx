/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { pressItems } from '../data';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Press() {
  return (
    <section id="press-section" className="py-20 px-6 sm:px-12 md:px-20 lg:px-24 bg-[#FAFAFA] border-t border-black/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          title="Press"
          subtitle="Interviews & features."
        />

        {/* Press list containing high-fidelity items */}
        <div className="mt-8 border-t border-black/10 text-left">
          {pressItems.slice(0, 3).map((item, index) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block py-6 border-b border-black/10 hover:bg-neutral-50/40 transition-all duration-300"
            >
              <div className="space-y-1">
                {/* Publisher / Publication Name */}
                <div className="text-xs sm:text-[13px] font-medium tracking-tight text-neutral-500 text-left">
                  {item.publisher}
                </div>
                {/* The Press Article Title */}
                <h3 className="text-lg sm:text-xl md:text-[23px] font-medium tracking-tight text-black group-hover:opacity-75 transition-opacity leading-relaxed flex flex-wrap items-center gap-1.5">
                  <span>{item.title}</span>
                  <span className="text-neutral-400 text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View More Capsule action directly underneath */}
        <div className="pt-8 flex justify-start">
          <button
            onClick={() => {
              const el = document.getElementById('footer-contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center justify-center gap-1.5 px-5 py-2 hover:bg-neutral-900 border border-neutral-800/30 hover:border-neutral-900 rounded-full text-xs font-semibold text-neutral-800 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <span>View more</span>
            <span className="text-[10px] transform transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
