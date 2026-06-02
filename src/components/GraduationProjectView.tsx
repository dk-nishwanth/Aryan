/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

interface GraduationProjectViewProps {
  onBack: () => void;
}

export default function GraduationProjectView({ onBack }: GraduationProjectViewProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const projectImages = [
    { src: '/assets/images/kalamkaar_poster_1780159351293.png', title: 'Behind Design Thesis - Graduation Style Frame 03' },
    { src: '/assets/images/zave_ui_system_1780159329350.png', title: 'Behind Design Thesis - UI System' },
    { src: '/assets/images/motion_frame_shapes_1780159369545.png', title: 'Behind Design Thesis - Motion Frames' },
  ];

  const researchInsights = [
    {
      title: 'Problem Statement & Context',
      detail: 'Exploring the emotional weight of transitional milestones (such as graduation, loss, and childhood departure). Traditional explainers represent these abstract concepts in cold, analytical styles that fail to stimulate somatic empathy or memory retention.',
    },
    {
      title: 'Design Methodology',
      detail: 'Adopting a \'kinetic narrative\' framework. Synthesizing organic frame-by-frame character loops with rich, high-purity vector environments (inspired by Studio Ghibli compositions and Swiss layout pacing).',
    },
    {
      title: 'Audio-Visual Synthesis',
      detail: 'Developing tight sound effect mappings (sound alignment, spatial audio pans) synchronized with custom bezier ease changes to direct human emotional reception safely.',
    },
  ];

  const deliverables = [
    'Graduation motion cinematic script',
    'Detailed timing storyboard index',
    'Character model vector blueprints',
    'Scenic coordinate layer overlays',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white pb-24 font-sans"
    >
      {/* Sticky Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md z-40 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-5 flex items-center justify-between border-b border-neutral-100">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-neutral-900 transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
        <div className="hidden sm:flex items-center gap-3">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Thesis • 2023</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 sm:py-24">
        <div className="max-w-4xl">
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">Academic Curation • UID Ahmedabad</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-neutral-900 leading-[1.1] mb-6">
            Behind Design Cinema.
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl">
            A graduation motion film investigating human-character affinity. Incorporating research, storyboarding, and character layout frames.
          </p>
        </div>
      </section>

      {/* Image Sections - Vertically Stacked */}
      <div className="space-y-0">
        {projectImages.map((image, index) => (
          <section key={index} className="group cursor-zoom-in" onClick={() => { setLightboxSrc(image.src); setLightboxTitle(image.title); }}>
            <div className="relative">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>
          </section>
        ))}
      </div>

      {/* Research & Project Info Section */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 sm:py-24">
        <div className="max-w-4xl">
          <div className="mb-16">
            <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-8">Research Framework</h2>
            <div className="space-y-12">
              {researchInsights.map((insight, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-2xl font-medium text-neutral-900">{insight.title}</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">{insight.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">Film Duration</h3>
              <p className="text-lg font-medium text-neutral-900">3M 45S Loop</p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">Frames Scale</h3>
              <p className="text-lg font-medium text-neutral-900">60fps Vector</p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">Cinema Bounds</h3>
              <p className="text-lg font-medium text-neutral-900">21:9 UltraWide</p>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-12">
            <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-6">Deliverables</h3>
            <ul className="space-y-3">
              {deliverables.map((deliverable, index) => (
                <li key={index} className="text-lg text-neutral-700 flex items-start gap-3">
                  <span className="text-neutral-300 mt-1">•</span>
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Back Button at Bottom */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 pb-16">
        <div className="max-w-4xl border-t border-neutral-200 pt-8">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-neutral-900 transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={lightboxSrc !== null}
        src={lightboxSrc || ''}
        title={lightboxTitle}
        onClose={() => setLightboxSrc(null)}
      />
    </motion.div>
  );
}
