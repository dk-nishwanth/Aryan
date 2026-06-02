/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { services } from '../data';
import SectionHeader from './SectionHeader';

export default function Services() {
  return (
    <section id="services-section" className="py-20 px-6 sm:px-12 md:px-20 lg:px-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          title="Services"
          subtitle="Areas of expertise."
        />

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pt-4">
          
          {/* Left Column: Trophies Photograph Card (hidden on mobile, shown on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block lg:col-span-6 relative rounded-[12px] overflow-hidden border border-black/5 shadow-sm"
          >
            {/* The Generated services photograph */}
            <img
              src="/assets/images/services_trophies_1780154964755.png"
              alt="Aryan Abhishek Design Concept"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column: High-fidelity static list to match screenshot exactly */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-between py-1 border-t border-black/10">
            <div>
              {services.map((service) => (
                <div 
                   key={service.id} 
                   className="py-4 border-b border-black/10 flex items-center justify-between text-left"
                >
                  <span className="text-xl sm:text-2xl md:text-[23px] font-medium tracking-tight text-black font-sans">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>

            {/* View More Capsule action directly underneath the list */}
            <div className="pt-6 flex justify-start">
              <button
                onClick={() => {
                  const el = document.getElementById('visual-feed');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center justify-center gap-1.5 px-5 py-2 hover:bg-neutral-900 border border-neutral-800/30 hover:border-neutral-900 rounded-full text-xs font-semibold text-neutral-800 hover:text-white transition-all duration-300 cursor-pointer"
              >
                <span>View more</span>
                <span className="text-[10px] transform transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
