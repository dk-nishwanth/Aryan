/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { projects } from '../data';
import { Project } from '../types';
import SectionHeader from './SectionHeader';
import { ArrowUpRight, Shield, Laptop, Music, Sparkles } from 'lucide-react';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

export default function FeaturedWork({ onSelectProject }: FeaturedWorkProps) {
  // Let's separate the flagship first project and additional projects
  const flagshipProduct = projects[0];
  const secondaryProducts = projects.slice(1);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'behind-design':
        return <Shield className="w-5 h-5 text-[#BAC6F5]" />;
      case 'artist-management-app':
        return <Music className="w-5 h-5 text-[#AA89E5]" />;
      case 'motion-graphics':
        return <Laptop className="w-5 h-5 text-[#F27E4B]" />;
      default:
        return <Sparkles className="w-5 h-5 text-neutral-400" />;
    }
  };

  return (
    <section id="projects-section" className="py-24 px-6 sm:px-12 md:px-20 lg:px-24 bg-white select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          title="Projects"
          subtitle="Selected branding, design, motion systems, and interface projects."
          onActionClick={() => {
            const el = document.getElementById('work-experience');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          actionText="View Work History"
        />

        {/* Editorial Layout Grid */}
        <div className="space-y-12">
          {/* Mobile Single-Column Vertical Stack (Enlarged and optimized) */}
          <div className="block lg:hidden space-y-10">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-45px' }}
                transition={{ duration: 0.6 }}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer text-left"
              >
                {/* Image Container with smaller padding to let the image be shown much bigger */}
                <div className={`aspect-square w-full rounded-[24px] p-4 xs:p-5 sm:p-8 flex items-center justify-center overflow-hidden border border-black/[0.03] shadow-sm relative ${project.color}`}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[92%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)] transform transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                {/* Info Text & Action Row underneath */}
                <div className="flex justify-between items-center py-4 px-1">
                  <h3 className="text-[20px] font-bold text-neutral-900 tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <span className="flex items-center gap-1 text-xs font-semibold text-[#6E8FEA] group-hover:text-neutral-900 transition-colors uppercase tracking-wider">
                    <span>View project</span>
                    <span className="text-[12px]">→</span>
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Centered Pill action button matching screenshot */}
            <div className="pt-4 flex">
              <button
                onClick={() => {
                  const el = document.getElementById('services-section'); // Scroll to services
                  (el || document.getElementById('work-experience'))?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center justify-center gap-1.5 px-5 py-2 bg-transparent hover:bg-neutral-900 border border-neutral-800/30 hover:border-neutral-900 rounded-full text-xs font-semibold text-neutral-800 hover:text-white transition-all duration-300 cursor-pointer"
              >
                <span>View more</span>
                <span className="text-[10px] transform transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </button>
            </div>
          </div>

          {/* Desktop Showcase Grid (Flagship + Secondary Asymmetry rebuilt with massive visual proportions) */}
          <div className="hidden lg:block space-y-12">
            {flagshipProduct && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                onClick={() => onSelectProject(flagshipProduct)}
                className="group cursor-pointer bg-neutral-50 hover:bg-neutral-100/50 border border-neutral-200/50 rounded-[32px] p-8 md:p-10 lg:p-12 transition-all duration-300 flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.06)]"
              >
                {/* Text Side (Column 1 - 5 cols on lg) */}
                <div className="flex-1 flex flex-col justify-between py-2 space-y-8 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-inner">
                        {getProjectIcon(flagshipProduct.id)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-[#6E8FEA] uppercase">
                          Featured Project
                        </span>
                        <h4 className="text-neutral-400 text-xs font-mono font-medium leading-none">
                          {flagshipProduct.year}
                        </h4>
                      </div>
                    </div>

                    <h3 className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-tight text-neutral-900 leading-[1.12]">
                      {flagshipProduct.title}
                    </h3>

                    <p className="text-sm text-neutral-500 leading-relaxed max-w-md font-light">
                      {flagshipProduct.description}
                    </p>
                  </div>

                  {/* Tags & Actions */}
                  <div className="space-y-5">
                    <div className="flex flex-wrap gap-1.5">
                      {flagshipProduct.deliverables.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-white border border-neutral-200/80 text-neutral-700 text-xs font-medium rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-bold text-neutral-900 group-hover:text-[#6E8FEA] transition-colors uppercase tracking-widest pt-2">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Massive Image Showcase Frame (Column 2 - Enlarged Widescreen Display) */}
                <div className={`flex-1 min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] overflow-hidden rounded-[24px] p-4 sm:p-6 flex items-center justify-center border border-black/[0.03] shadow-sm relative min-w-0 ${flagshipProduct.color}`}>
                  <motion.img
                    src={flagshipProduct.image}
                    alt={flagshipProduct.title}
                    referrerPolicy="no-referrer"
                    className="w-full max-w-[480px] max-h-[92%] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.11)] transform transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  
                  {/* Visual Glass Tag */}
                  <span className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md border border-white/45 text-[10px] font-mono text-neutral-600 px-3.5 py-2 rounded-full uppercase tracking-widest font-bold shadow-sm">
                    {flagshipProduct.category}
                  </span>
                </div>
              </motion.div>
            )}

            {/* SECONDARY PROJECTS: Modern 2-Column Split (Enlarged sizes) */}
            <div className="grid grid-cols-2 gap-6 sm:gap-10">
              {secondaryProducts.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer bg-neutral-50/50 hover:bg-neutral-50 border border-neutral-200/50 rounded-[28px] p-5 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)] text-left"
                >
                  {/* Card Top: Image Presentation (Considerably Scaled Up) */}
                  <div className={`h-[240px] xs:h-[300px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded-2xl p-4 sm:p-5 flex items-center justify-center border border-black/[0.03] relative ${project.color}`}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full max-w-[160px] xs:max-w-[220px] sm:max-w-[340px] md:max-w-[400px] max-h-[92%] h-auto object-contain drop-shadow-[0_22px_45px_rgba(0,0,0,0.09)] transform transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    
                    {/* Subtle Date badge */}
                    <span className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm border border-neutral-200/40 text-[9px] font-mono text-neutral-500 px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-sm">
                      {project.year}
                    </span>
                  </div>

                  {/* Card Bottom: Metadatas */}
                  <div className="space-y-4 px-1">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1 min-w-0">
                        <p className="text-[10px] font-mono font-bold tracking-widest text-[#6E8FEA] uppercase block leading-none mb-1">
                          {project.category}
                        </p>
                        <h3 className="text-xl sm:text-[23px] font-bold tracking-tight text-neutral-900 leading-tight block">
                          {project.title}
                        </h3>
                      </div>
                      
                      <div className="w-8 h-8 rounded-xl bg-neutral-900/5 text-neutral-700 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-colors shrink-0">
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>

                    <p className="text-sm text-neutral-500 leading-relaxed font-light font-sans">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.deliverables.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-white border border-neutral-200 text-neutral-600 text-xs rounded-full font-medium shadow-sm font-sans"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

