/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, User, Sparkles, Compass, Hexagon, Mail, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

interface AboutViewProps {
  onBack: () => void;
  onContactClick: () => void;
}

export default function AboutView({ onBack, onContactClick }: AboutViewProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FAFAFA] min-h-screen pb-24 font-sans selection:bg-[#6E8FEA] selection:text-white"
    >
      {/* Sticky Sub-navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-neutral-100 z-50 px-6 sm:px-12 md:px-20 lg:px-24 py-5 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-[#6E8FEA] transition-all duration-300 ease-out cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Grid</span>
        </button>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xl">☻</span>
          <span className="text-xs font-bold text-[#6E8FEA] uppercase tracking-wider">Meet the Designer</span>
        </div>

        <button
          onClick={onContactClick}
          className="text-xs sm:text-sm font-semibold text-neutral-600 hover:text-[#6E8FEA] transition-all duration-300 ease-out cursor-pointer"
        >
          Contact
        </button>
      </nav>

      {/* Hero Header Area */}
      <div className="bg-white border-b border-neutral-100 pt-16 pb-20 px-6 sm:px-12 md:px-20 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#6E8FEA] text-[11px] font-bold rounded-full uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Profile &amp; Vision</span>
          </div>

          <h1 className="text-[34px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-medium tracking-tight text-black leading-[1.11]">
            Aryan Abhishek.
            <span className="block text-neutral-400 font-light text-[24px] sm:text-[34px] md:text-[40px] mt-2">
              Visual Designer &amp; Motion Artist
            </span>
          </h1>

          <p className="text-[17px] sm:text-[22px] md:text-[25px] leading-relaxed text-neutral-800 font-light font-sans max-w-3xl">
            Blending strict design systems, vector character styling, and meticulous kinetic artwork to create breathing brand ecosystems.
          </p>
        </div>
      </div>

      {/* Main Core Columns */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24 pt-16 grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* Left column (Biography) */}
        <div className="md:col-span-8 space-y-8 text-left">
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#6E8FEA] font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6E8FEA]"></span>
              My Story &amp; Creative Approach
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
              I am a multi-disciplinary visual and motion designer. Having graduated with formal training in Visual Communication (B.Des) from UID Ahmedabad, my design practices sits at the intersection of modern publication layouts, vector visual assets, and high-fidelity motion frames.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
              I believe great design isn't just about rendering things on a screen—it's about clarifying communication and bringing a sense of joy. Whether I'm building graphic decals for premium Helmets at <strong>Royal Enfield</strong>, structuring financial card systems for <strong>Zave Fintech</strong>, or animating heavy typographic layouts for music labels, my goal is always to deliver storytelling that is memorable and precise.
            </p>
          </section>

          {/* Core Values / Creed */}
          <section className="space-y-4 bg-neutral-50 border border-neutral-100 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xs uppercase tracking-widest text-neutral-900 font-bold flex items-center gap-2">
              <Hexagon className="w-4 h-4 text-[#6E8FEA]" />
              Design Practice Principles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-neutral-900 uppercase">01 / Visual Authority</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Deeply respectful of grids, editorial whitespace tracking, and balanced typography scales. Let the layout breathe.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-bold text-neutral-900 uppercase">02 / Organic Motion</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Rejecting mechanical presets. Hand-crafting bezier curves to direct user attention safely and keep motion feeling human.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-bold text-neutral-900 uppercase">03 / Collaborative Versatility</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Working natively alongside directors, sound engineers, product managers, and developers across print/digital assets.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-bold text-neutral-900 uppercase">04 / Character &amp; Wit</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Infusing custom-carved characters and small delights into the product layout to create meaningful brand affinity.
                </p>
              </div>
            </div>
          </section>

          {/* Curation Showcases */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#6E8FEA] font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6E8FEA]"></span>
              Selective Exhibitions &amp; Showcase
            </h3>
            <div className="border-t border-neutral-200 divide-y divide-neutral-100">
              <div className="py-4 flex justify-between items-center text-xs sm:text-sm">
                <div>
                  <h4 className="font-medium text-neutral-900">Thesis Showcase — UID Ahmedabad</h4>
                  <p className="text-xs text-neutral-400">Exhibiting graduation motion research and dynamic typography guides.</p>
                </div>
                <span className="text-xs font-mono text-neutral-400">2023</span>
              </div>
              <div className="py-4 flex justify-between items-center text-xs sm:text-sm">
                <div>
                  <h4 className="font-medium text-neutral-900">MODUS Digital Festival Exhibition</h4>
                  <p className="text-xs text-neutral-400">A series of experimental interaction installations and vector prints.</p>
                </div>
                <span className="text-xs font-mono text-neutral-400">2021</span>
              </div>
              <div className="py-4 flex justify-between items-center text-xs sm:text-sm">
                <div>
                  <h4 className="font-medium text-neutral-900">Royal Enfield Annual Protective Gear Show</h4>
                  <p className="text-xs text-neutral-400">Presenting custom helmet decal integrations under direct studio team supervision.</p>
                </div>
                <span className="text-xs font-mono text-neutral-400">2024</span>
              </div>
            </div>
          </section>
        </div>

        {/* Right column (Toolkit & Contact Specs) */}
        <div className="md:col-span-4 space-y-8 bg-white border border-neutral-100 rounded-2xl p-6 sm:p-8">
          {/* Toolset lists */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#6E8FEA] font-bold border-b border-neutral-100 pb-3">
              Technical Toolset
            </h3>
            <div className="space-y-4 text-left">
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase font-semibold">Motion &amp; Video</span>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {['After Effects', 'Premiere Pro', 'Media Encoder', 'Audition'].map((t) => (
                    <span key={t} className="text-xs bg-neutral-100 text-neutral-800 px-2.5 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase font-semibold">Interaction &amp; Vector</span>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {['Figma', 'Illustrator', 'Photoshop', 'Adobe XD'].map((t) => (
                    <span key={t} className="text-xs bg-neutral-100 text-neutral-800 px-2.5 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase font-semibold">Print &amp; Layout</span>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {['InDesign', 'Illustrator Layouts', 'Grid Systems'].map((t) => (
                    <span key={t} className="text-xs bg-neutral-100 text-neutral-800 px-2.5 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="border-neutral-100" />

          {/* Reach out details */}
          <div className="space-y-4 text-left">
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
              Let's create together
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              I am always excited about collaborating with tech companies, design studios, and music labels seeking fine aesthetics.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <a
                href="mailto:aryan19abhishek@gmail.com"
                className="flex items-center gap-2 text-neutral-700 hover:text-[#6E8FEA] transition-colors"
              >
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>aryan19abhishek@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-700 hover:text-[#6E8FEA] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-neutral-400" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-700 hover:text-[#6E8FEA] transition-colors"
              >
                <Instagram className="w-4 h-4 text-neutral-400" />
                <span>Instagram Profile</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer GoBack action */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24 pt-20">
        <div className="border-t border-neutral-200 pt-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-semibold text-neutral-800 hover:text-[#6E8FEA] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>
          <span className="text-[11px] text-neutral-400">© 2026 Aryan Abhishek</span>
        </div>
      </div>
    </motion.div>
  );
}
