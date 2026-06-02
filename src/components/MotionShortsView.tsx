/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

interface MotionShortsViewProps {
  onBack: () => void;
}

export default function MotionShortsView({ onBack }: MotionShortsViewProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');
  const [selectedShort, setSelectedShort] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const shorts = [
    {
      id: 1,
      title: 'Abstract Morphing Kinetic Loop',
      description: 'Exploring seamless morphing of 2D geometrical elements into corporate logo frameworks. Built entirely with custom Bezier speed graphs to control timing and weight.',
      tag: 'Interactive Motion Laboratory',
      year: '2024',
      image: '/src/assets/images/motion_frame_shapes_1780159369545.png',
      specs: {
        framerate: '60 FPS Lossless Scale',
        resolution: '1080x1080 (1:1 Ratio)',
        duration: '0:06 Loop',
      },
      deliverables: [
        'Smooth 60fps vector asset files',
        'Storyboards mapped to timing frames',
        'Custom Bezier ease presets built in',
        'Tactile sound synchronization tracks',
      ],
    },
    {
      id: 2,
      title: 'Fintech Character Splash Screen Animation',
      description: 'Character rigging project animating welcoming cartoon personnel managing a digital coin chart. Synchronized with tactile audio clicks.',
      tag: 'Interactive Motion Laboratory',
      year: '2023',
      image: '/src/assets/images/zave_ui_system_1780159329350.png',
      specs: {
        framerate: '30 FPS Character Rig',
        resolution: '1920x1080 (16:9 Landscape)',
        duration: '0:12 Loop',
      },
      deliverables: [
        'Smooth 60fps vector asset files',
        'Storyboards mapped to timing frames',
        'Custom Bezier ease presets built in',
        'Tactile sound synchronization tracks',
      ],
    },
    {
      id: 3,
      title: 'Kalamkaar Track Intro Typography Curation',
      description: 'A fast-paced kinetic typography single introduction for hip-hop launches. Combines extreme tracking stretch, high-contrast dark theme presets, and glitch overlayers.',
      tag: 'Interactive Motion Laboratory',
      year: '2024',
      image: '/src/assets/images/kalamkaar_poster_1780159351293.png',
      specs: {
        framerate: '60 FPS Expressive Type',
        resolution: '1080x1920 (9:16 Vertical Reel)',
        duration: '0:15 Teaser',
      },
      deliverables: [
        'Smooth 60fps vector asset files',
        'Storyboards mapped to timing frames',
        'Custom Bezier ease presets built in',
        'Tactile sound synchronization tracks',
      ],
    },
  ];

  const activeShort = shorts[selectedShort];

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
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">{activeShort.year}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 sm:py-24">
        <div className="max-w-4xl">
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">{activeShort.tag}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-neutral-900 leading-[1.1] mb-6">
            Motion Loops & Reels.
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl">
            Fine frame-by-frame timing blueprints. Fine-tuned with organic bezier ease curves.
          </p>
        </div>

        {/* Short Selector */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {shorts.map((sh, idx) => (
            <button
              key={sh.id}
              onClick={() => setSelectedShort(idx)}
              className={`p-5 rounded-xl text-left transition-all duration-300 cursor-pointer border-2 ${
                selectedShort === idx
                  ? 'bg-neutral-50 border-neutral-900'
                  : 'bg-white border-transparent hover:border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden mb-3 border border-neutral-200">
                <img src={sh.image} alt={sh.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">CLIP 0{idx + 1}</p>
              <h3 className="text-sm font-semibold text-neutral-900 mb-1">{sh.title}</h3>
              <p className="text-xs text-neutral-500">{sh.specs.framerate.split(' ')[0]} • {sh.specs.duration}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Active Short Content */}
      <div key={activeShort.id}>
        {/* Hero Image */}
        <section className="group cursor-zoom-in" onClick={() => { setLightboxSrc(activeShort.image); setLightboxTitle(activeShort.title); }}>
          <div className="relative">
            <img
              src={activeShort.image}
              alt={activeShort.title}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
          </div>
        </section>

        {/* Project Info */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 sm:py-24">
          <div className="max-w-4xl">
            <div className="mb-8">
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">{activeShort.tag} • {activeShort.year}</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.1] mb-6">
                {activeShort.title}
              </h2>
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
                {activeShort.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">Framerate</h3>
                <p className="text-lg font-medium text-neutral-900">{activeShort.specs.framerate}</p>
              </div>
              <div>
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">Resolution</h3>
                <p className="text-lg font-medium text-neutral-900">{activeShort.specs.resolution}</p>
              </div>
              <div>
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">Duration</h3>
                <p className="text-lg font-medium text-neutral-900">{activeShort.specs.duration}</p>
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-12">
              <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-6">Deliverables</h3>
              <ul className="space-y-3">
                {activeShort.deliverables.map((deliverable, index) => (
                  <li key={index} className="text-lg text-neutral-700 flex items-start gap-3">
                    <span className="text-neutral-300 mt-1">•</span>
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

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
