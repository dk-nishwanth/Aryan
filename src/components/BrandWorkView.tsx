/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

interface BrandWorkViewProps {
  onBack: () => void;
}

export default function BrandWorkView({ onBack }: BrandWorkViewProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const brands = [
    {
      id: 're',
      name: 'Royal Enfield Collab',
      theme: 'Helmets, Decals & Adventurer Gear Aesthetics',
      image: '/assets/images/re_helmet_design_1780157894631.png',
      description: 'Collaborated directly with the apparel and safety accessories division to elevate Royal Enfield’s adventurer series. I focused on designing high-impact vector decals, establishing coordinate rules, and selecting modern, rugged colorways.',
      tag: 'Assistant Manager - Design',
      year: '2023',
      specs: { tool: 'Illustrator & CAD', context: 'Physical Decals', standard: 'Automobile Safety' },
      deliverables: [
        'Premium Protective Helmets Decals & Vector Layouts',
        'Complex compound curve coordinate mapping and shell surface design',
        'Curation of annual gear color cards representing vintage adventurer heritage'
      ],
    },
    {
      id: 'zave',
      name: 'Zave Singapore Collab',
      theme: 'SaaS Fintech Dashboard & Dynamic Illustration Systems',
      image: '/assets/images/zave_ui_system_1780159329350.png',
      description: 'Formulated visual components and transactional layouts to expand Zave’s client-facing onboarding flow. Also crafted custom character illustrations used inside the dashboard to humanize transaction reports and empty states.',
      tag: 'UI/UX & Illustrative Design',
      year: '2023',
      specs: { tool: 'Figma & Illustrator', context: 'SaaS Fintech Dashboard', standard: 'Web Responsive' },
      deliverables: [
        'Fintech onboarding UI cards, mobile app assets, and high-fidelity mockups',
        'Custom illustration toolkit with cohesive character guides',
        'Dynamic desktop web designs ensuring high visual readability and minimal layout noise'
      ],
    },
    {
      id: 'kalamkaar',
      name: 'Kalamkaar Music label Collab',
      theme: 'Music Single Cover Artwork & Kinetic Campaigns for Raftaar',
      image: '/assets/images/kalamkaar_poster_1780159351293.png',
      description: 'Designed eye-catching digital album artworks and promotional assets for some of India’s leading rap and hip-hop single launches. I produced highly kinetic typography layouts and video promos capturing immediate social feed attention.',
      tag: 'Art Direction & Motion',
      year: '2024',
      specs: { tool: 'After Effects & PS', context: 'Single Cover Art', standard: 'Social Marketing' },
      deliverables: [
        'Promotional digital posters, singles covers, and lyric background overlays',
        'Fast-paced social media reels templates with tight rhythmic sound syncing',
        'Album typography branding guidelines defining experimental modern type hierarchies'
      ],
    },
    {
      id: 'boult',
      name: 'Boult Audio Collab',
      theme: 'E-commerce Promotional Videos & Storyboard Curation',
      image: '/assets/images/motion_frame_shapes_1780159369545.png',
      description: 'Crafted fast cuts and storyboard outlines for Boult’s e-commerce audio accessories. Collaborated closely with directors to ensure seamless sound element alignment and dynamic vector animations.',
      tag: 'Motion Graphics Intern',
      year: '2022',
      specs: { tool: 'Vinci Storyboards', context: 'Promo Storyboarding', standard: 'Video Conversion' },
      deliverables: [
        'High-converting social video advertisements and product detail catalogs',
        'Storyboard framing structures representing structural speaker diagrams',
        'Lottie interactive motion clips for landing pages'
      ],
    },
    {
      id: 'headspace',
      name: 'Headspace & Farewill Collab',
      theme: 'Guided Meditation Screen UI & Warm Public Billboards',
      image: '/assets/images/headspace_billboard_1780154913817.png',
      description: 'Collaborated on illustrative layout campaigns illustrating mindful, delightful characters. These assets were featured across social campaigns, billboard displays, and client onboarding sequences.',
      tag: 'Illustration & Brand Curation',
      year: '2021',
      specs: { tool: 'Vector Storytelling', context: 'Billboard Illustrations', standard: 'Ambient Print' },
      deliverables: [
        'Custom cartoon characters illustrating mindfulness and friendly product storytelling',
        'High-contrast physical poster designs for outdoor billboards and street campaigns',
        'Screen mockup layouts guiding clean, friendly digital interactions'
      ],
    },
  ];

  const [activeBrand, setActiveBrand] = useState(brands[0]);

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
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">2023-Present</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 sm:py-24">
        <div className="max-w-4xl">
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">Studio & Brand Curation</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-neutral-900 leading-[1.1] mb-6">
            Brand Work & Collabs.
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl">
            Bringing corporate identities to life through visual wit. A segregated collection of high-reach alliances.
          </p>
        </div>

        {/* Brand Selector */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {brands.map((brand, index) => (
            <button
              key={brand.id}
              onClick={() => setActiveBrand(brand)}
              className={`p-5 rounded-xl text-left transition-all duration-300 cursor-pointer border-2 ${
                activeBrand.id === brand.id
                  ? 'bg-neutral-50 border-neutral-900'
                  : 'bg-white border-transparent hover:border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">0{index + 1}</p>
              <h3 className="text-sm font-semibold text-neutral-900 mb-1">{brand.name}</h3>
              <p className="text-xs text-neutral-500">{brand.year}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Active Brand Content */}
      <div key={activeBrand.id}>
        {/* Hero Image */}
        <section className="group cursor-zoom-in" onClick={() => { setLightboxSrc(activeBrand.image); setLightboxTitle(activeBrand.name); }}>
          <div className="relative">
            <img
              src={activeBrand.image}
              alt={activeBrand.name}
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
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">{activeBrand.tag} • {activeBrand.year}</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.1] mb-6">
                {activeBrand.name}
              </h2>
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
                {activeBrand.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">Tool</h3>
                <p className="text-lg font-medium text-neutral-900">{activeBrand.specs.tool}</p>
              </div>
              <div>
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">Context</h3>
                <p className="text-lg font-medium text-neutral-900">{activeBrand.specs.context}</p>
              </div>
              <div>
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">Standard</h3>
                <p className="text-lg font-medium text-neutral-900">{activeBrand.specs.standard}</p>
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-12">
              <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-6">Deliverables</h3>
              <ul className="space-y-3">
                {activeBrand.deliverables.map((deliverable, index) => (
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
