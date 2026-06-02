/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { X, ExternalLink, Sparkles, Award, Heart, Shield, Code, Palette } from 'lucide-react';

interface ReadMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReadMoreModal({ isOpen, onClose }: ReadMoreModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative w-full max-w-3xl bg-[#FAFAFA] rounded-3xl shadow-2xl overflow-hidden border border-black/10 max-h-[90vh] flex flex-col z-10"
      >
        {/* Top Header Panel */}
        <div className="bg-[#6E8FEA] px-8 py-6 text-white flex justify-between items-center relative">
          <div className="flex items-center gap-3">
            <span className="text-2xl">☻</span>
            <h2 className="text-xl font-medium font-sans tracking-tight">Meet Aryan Abhishek</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Scroll Area */}
        <div className="p-8 overflow-y-auto space-y-8 text-xs sm:text-sm md:text-[15px] text-[#222222] scrollbar-thin">
          {/* Main Statement */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl font-medium leading-relaxed text-black tracking-tight">
              "Blending meticulous visual styles, interactive grids, and rich motion artwork to create breathing brand ecosystems."
            </p>
            <p className="text-neutral-500 leading-relaxed font-normal">
              I am a multi-disciplinary Visual and Motion Designer. Combining strong typography layouts, illustrative systems, and advanced motion graphics, I build beautiful experiences that elevate digital, print, and physical form factors.
            </p>
          </div>

          {/* Core Milestones/Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/50 space-y-2.5">
              <div className="flex items-center gap-2 text-amber-800">
                <Shield className="w-4.5 h-4.5" />
                <h3 className="font-semibold text-sm">Royal Enfield Helmet Graphics</h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                As the **Assistant Manager - Design (Helmets)**, I oversee the complete aesthetic mapping and decal styling for Royal Enfield's premium protective adventurer lineups.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/50 space-y-2.5">
              <div className="flex items-center gap-2 text-blue-800">
                <Code className="w-4.5 h-4.5" />
                <h3 className="font-semibold text-sm">UI/UX &amp; Fintech Motion</h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Spearheaded design layouts, marketing imagery, and interactive motion prototypes at Zave Fintech to foster high user engagement.
              </p>
            </div>
          </div>

          {/* Chronological Career Experience Timeline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-950 border-b border-gray-200 pb-2">
              <Award className="w-4.5 h-4.5 text-[#6E8FEA]" />
              <h4 className="font-bold text-xs uppercase tracking-wider">Professional Experience</h4>
            </div>
            <div className="space-y-6 pt-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 border-b border-neutral-100 pb-4">
                <div className="flex-1">
                  <h5 className="font-semibold text-neutral-900 text-sm sm:text-[15px]">Assistant Manager - Design (Helmets)</h5>
                  <p className="text-xs text-neutral-500">Royal Enfield · Gurugram, India (On-site)</p>
                  <p className="text-xs text-[#555555] mt-1 leading-relaxed">
                    Designed all visual aspects of Helmets made by Royal Enfield, from conceptual decals to shell structures and interiors.
                  </p>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 font-semibold uppercase sm:text-right whitespace-nowrap self-start">Aug 2023 - Present</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 border-b border-neutral-100 pb-4">
                <div className="flex-1">
                  <h5 className="font-semibold text-neutral-900 text-sm sm:text-[15px]">UI / UX &amp; Motion Designer</h5>
                  <p className="text-xs text-neutral-500">Zave · Fintech (Remote)</p>
                  <p className="text-xs text-[#555555] mt-1 leading-relaxed">
                    Produced key marketing assets, branding, and motion frameworks to expand the startup's active client outreach.
                  </p>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 font-semibold uppercase sm:text-right whitespace-nowrap self-start">Jan 2023 - Jul 2023</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 border-b border-neutral-100 pb-4">
                <div className="flex-1">
                  <h5 className="font-semibold text-neutral-900 text-sm sm:text-[15px]">Visual / Motion Designer</h5>
                  <p className="text-xs text-neutral-500">Dwan Media · Multi-faceted Digital Agency (Remote)</p>
                  <p className="text-xs text-[#555555] mt-1 leading-relaxed">
                    Crafted covers and promo graphics for Kalamkaar Music Label / Raftaar, Represent Management, and Trinity Gaming.
                  </p>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 font-semibold uppercase sm:text-right whitespace-nowrap self-start">Apr 2021 - Jan 2023</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 border-b border-neutral-100 pb-4">
                <div className="flex-1">
                  <h5 className="font-semibold text-neutral-900 text-sm sm:text-[15px]">Motion Design Intern</h5>
                  <p className="text-xs text-neutral-500">Boult Audio · Gurugram, India (On-site)</p>
                  <p className="text-xs text-[#555555] mt-1 leading-relaxed">
                    Designed storyboards, animated promotional assets, and edited dynamic e-commerce video catalogs.
                  </p>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 font-semibold uppercase sm:text-right whitespace-nowrap self-start">Jun 2022 - Jul 2022</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                <div className="flex-1">
                  <h5 className="font-semibold text-neutral-900 text-sm sm:text-[15px]">Motion / UI Designer</h5>
                  <p className="text-xs text-neutral-500">SaaS Application (Remote)</p>
                  <p className="text-xs text-[#555555] mt-1 leading-relaxed">
                    Created user-friendly landing templates, explainer motion guides, and social media banners.
                  </p>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 font-semibold uppercase sm:text-right whitespace-nowrap self-start">Dec 2020 - May 2021</span>
              </div>
            </div>
          </div>

          {/* Highlight creative tools list */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-900 border-b border-gray-200 pb-2">
              <Palette className="w-4.5 h-4.5 text-[#6E8FEA]" />
              <h4 className="font-bold text-xs uppercase tracking-wider">Expert Toolset</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'InDesign', 'Figma', 'Adobe XD'].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-0.5 text-xs bg-neutral-100 hover:bg-[#6E8FEA] hover:text-white transition-colors duration-200 rounded-full text-neutral-700 font-medium border border-neutral-200/40 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="border-t border-gray-200 pt-5 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg md:text-xl font-bold text-[#6E8FEA]">5+</div>
              <div className="text-[11px] text-gray-500 font-medium">Years Career</div>
            </div>
            <div>
              <div className="text-lg md:text-xl font-bold text-[#6E8FEA]">10+</div>
              <div className="text-[11px] text-gray-500 font-medium">Brands Shaped</div>
            </div>
            <div>
              <div className="text-lg md:text-xl font-bold text-[#6E8FEA]">20+</div>
              <div className="text-[11px] text-gray-500 font-medium">Curation Shows</div>
            </div>
          </div>
        </div>

        {/* Bottom Contact Quick Panel */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-neutral-400 font-medium font-mono">+91 98-732-867-30 · Gurugram, India</p>
          <a
            href="mailto:aryan19abhishek@gmail.com"
            className="flex items-center gap-1.5 text-xs font-bold text-[#6E8FEA] hover:text-blue-700 transition-colors uppercase tracking-wider cursor-pointer"
          >
            Say hello <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
