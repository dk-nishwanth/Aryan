/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { feedItems } from '../data';
import { FeedItem } from '../types';
import SectionHeader from './SectionHeader';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Grid, 
  SlidersHorizontal,
  Compass, 
  Sparkles,
  Maximize2,
  Heart
} from 'lucide-react';

export default function VisualFeed() {
  const [activeItem, setActiveItem] = useState<FeedItem | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'reel' | 'grid'>('reel');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Collect unique category tags
  const tags = ['All', ...Array.from(new Set(feedItems.map((item) => item.tag)))];

  // Filter items based on selected tag
  const filteredItems = selectedTag === 'All' 
    ? feedItems 
    : feedItems.filter(item => item.tag === selectedTag);

  // Monitor grid scroll position for progress indicator
  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const scrollPercent = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    setScrollProgress(scrollPercent || 0);
  };

  const openLightbox = (item: FeedItem) => {
    // Find index in filtered list to enable proper prev/next slides
    const idx = filteredItems.findIndex(i => i.id === item.id);
    setActiveItem(item);
    setActiveIndex(idx >= 0 ? idx : 0);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const nextIdx = (activeIndex + 1) % filteredItems.length;
    setActiveIndex(nextIdx);
    setActiveItem(filteredItems[nextIdx]);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const prevIdx = (activeIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveIndex(prevIdx);
    setActiveItem(filteredItems[prevIdx]);
  };

  const toggleLike = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLikedItems(prev => {
      const isCurrentlyLiked = prev[id];
      setLikes(likesPrev => ({
        ...likesPrev,
        [id]: (likesPrev[id] || 0) + (isCurrentlyLiked ? -1 : 1)
      }));
      return { ...prev, [id]: !isCurrentlyLiked };
    });
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, activeIndex, filteredItems]);

  return (
    <section id="visual-feed" className="py-24 px-6 sm:px-12 md:px-20 lg:px-24 bg-white select-none border-t border-neutral-100 relative overflow-hidden">
      {/* Decorative vector grid accent */}
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgba(244,244,245,0.3)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header aligning precisely with client spec layout */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <SectionHeader
            title="Visual feed"
            subtitle="Work I've created and things that inspire me."
          />
          
          {/* Subtle View mode selector */}
          <div className="flex bg-neutral-100/80 p-1 rounded-xl border border-neutral-200/50 self-start sm:self-auto mb-4 sm:mb-0">
            <button
              onClick={() => setViewMode('reel')}
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                viewMode === 'reel' 
                  ? 'bg-white text-neutral-900 shadow-sm' 
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
              title="Reel Carousel"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                viewMode === 'grid' 
                  ? 'bg-white text-neutral-900 shadow-sm' 
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
              title="Bento Grid"
            >
              <Grid className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Elegant Minimal Category Pills */}
        <div className="flex flex-nowrap sm:flex-wrap items-center gap-1.5 sm:gap-2 mb-10 overflow-x-auto sm:overflow-visible scrollbar-none py-1.5 w-full">
          {tags.map((tag) => {
            const isActive = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 whitespace-nowrap ${
                  isActive 
                    ? 'bg-neutral-900 text-white shadow-md shadow-neutral-950/5' 
                    : 'bg-neutral-100/70 hover:bg-neutral-200/50 text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Panel Layout Frame */}
        <AnimatePresence mode="wait">
          {viewMode === 'reel' ? (
            /* Reel Horizon Layout */
            <motion.div
              key="reel-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div
                ref={containerRef}
                onScroll={handleScroll}
                className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none pb-8 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {filteredItems.map((item, index) => {
                  const isItemLiked = likedItems[item.id];
                  const itemLikes = likes[item.id] || 0;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      onClick={() => openLightbox(item)}
                      className="flex-none w-[260px] xs:w-[300px] sm:w-[320px] md:w-[360px] snap-start group"
                    >
                      {/* Interactive Image Frame */}
                      <div className="relative overflow-hidden bg-neutral-50 border border-neutral-100 rounded-3xl aspect-[4/5] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:border-neutral-200">
                        <img
                          src={item.image}
                          alt={item.alt}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transform transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />

                        {/* Top corner category badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md border border-white/40 text-[#6E8FEA] font-bold font-mono tracking-wider text-[10px] rounded-lg shadow-sm">
                            {item.tag}
                          </span>
                        </div>

                        {/* Top corner like trigger */}
                        <button
                          onClick={(e) => toggleLike(item.id, e)}
                          className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-md border transition-all duration-300 cursor-pointer ${
                            isItemLiked 
                              ? 'bg-[#6E8FEA] text-white border-[#6E8FEA]/20 scale-105'
                              : 'bg-white/80 hover:bg-white text-neutral-600 hover:text-red-500 border-white/40 shadow-sm'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isItemLiked ? 'fill-current' : ''}`} />
                        </button>

                        {/* Luxury Information Mask Hover Cover */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                          <div className="space-y-2 text-left">
                            <span className="text-[10px] font-mono tracking-wider uppercase text-[#6E8FEA] font-bold">Concept Detail</span>
                            <h4 className="text-white text-lg font-medium leading-snug tracking-tight font-sans">
                              {item.alt}
                            </h4>
                            <p className="text-neutral-300 text-xs font-normal leading-relaxed line-clamp-2">
                              {item.caption}
                            </p>
                          </div>
                          
                          {/* Foot detail bar */}
                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/15 text-[10px] font-mono text-neutral-400">
                            <span>GRID RATIO: {item.ratio.replace('aspect-[', '').replace(']', '')}</span>
                            <div className="flex items-center gap-1">
                              <Maximize2 className="w-3 h-3 text-[#6E8FEA]" />
                              <span>ZOOM WORK</span>
                            </div>
                          </div>
                        </div>

                        {/* Non-hover overlay detail line for easy identification on mobile */}
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-between opacity-100 group-hover:opacity-0 transition-opacity duration-300 lg:hidden">
                          <span className="text-white font-sans text-xs font-semibold truncate pr-4">{item.alt}</span>
                          <span className="text-white/80 text-[10px] font-mono shrink-0 font-bold">{item.tag}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Slider Track (screenshot inspiration layout tracker) */}
              <div className="relative mt-4 h-[2px] bg-neutral-100 rounded-full max-w-lg mx-auto overflow-hidden">
                <motion.div 
                  className="absolute h-full bg-[#6E8FEA] rounded-full left-0 top-0"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
            </motion.div>
          ) : (
            /* Bento Studio Grid View */
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6"
            >
              {filteredItems.map((item, index) => {
                const isItemLiked = likedItems[item.id];
                return (
                  <motion.div
                    key={item.id}
                    layoutId={`gallery-item-${item.id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    onClick={() => openLightbox(item)}
                    className="group relative bg-[#FAFAFA] border border-neutral-100 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:border-neutral-200 transition-all duration-300"
                  >
                    {/* Balanced ratio bounding block */}
                    <div className="relative overflow-hidden aspect-square sm:aspect-[4/5] md:aspect-square bg-neutral-50">
                      <img
                        src={item.image}
                        alt={item.alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />

                      {/* Header overlay row */}
                      <div className="absolute top-2 left-2 right-2 sm:top-4 sm:inset-x-4 flex items-center justify-between z-15">
                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-white/90 backdrop-blur-md text-[#6E8FEA] font-mono font-bold text-[8px] sm:text-[9px] rounded-md shadow-sm uppercase tracking-wider">
                          {item.tag}
                        </span>
                        
                        <button
                          onClick={(e) => toggleLike(item.id, e)}
                          className={`p-1 sm:p-1.5 rounded-full backdrop-blur-md border transition-all duration-300 ${
                            isItemLiked 
                              ? 'bg-[#6E8FEA] text-white border-[#6E8FEA]/20 scale-105' 
                              : 'bg-white/80 hover:bg-white text-neutral-500'
                          }`}
                        >
                          <Heart className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${isItemLiked ? 'fill-current' : ''}`} />
                        </button>
                      </div>

                      {/* Studio mask hover panel */}
                      <div className="absolute inset-0 bg-black/80 flex flex-col justify-end p-3 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="space-y-1 sm:space-y-2 text-left">
                          <span className="text-[8px] sm:text-[10px] font-mono tracking-widest text-[#6E8FEA] uppercase font-bold">Curated Deck</span>
                          <h4 className="text-white text-xs sm:text-base font-semibold leading-tight">{item.alt}</h4>
                          <p className="text-neutral-400 text-[10px] sm:text-xs font-normal leading-relaxed line-clamp-2 sm:line-clamp-3">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More Button mimicking specified design layout */}
        <div className="pt-8 flex justify-start">
          <button
            onClick={() => {
              const el = document.getElementById('press-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center justify-center gap-1.5 px-5 py-2 hover:bg-neutral-900 border border-neutral-800/30 hover:border-neutral-900 rounded-full text-xs font-semibold text-neutral-800 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <span>View more</span>
            <span className="text-[10px] transform transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </button>
        </div>
      </div>

      {/* Lightbox full-screen Studio Gallery Overlay */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
            {/* Backdrop with real heavy ambient blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />

            {/* Slider container with architectural details */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 26, stiffness: 210 }}
              className="relative max-w-5xl w-full flex flex-col lg:flex-row bg-[#111111] border border-neutral-800 rounded-[24px] sm:rounded-[32px] overflow-y-auto lg:overflow-visible shadow-[0_30px_90px_rgba(0,0,0,0.8)] z-10 max-h-[90vh] lg:max-h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Row Absolute Controllers for Mobile */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-30 flex items-center gap-2">
                <button
                  onClick={() => toggleLike(activeItem.id)}
                  className={`p-2 sm:p-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                    likedItems[activeItem.id] 
                      ? 'bg-[#6E8FEA] text-white border-[#6E8FEA]/30' 
                      : 'bg-neutral-800/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border-neutral-700'
                  }`}
                  aria-label="Appreciate work"
                >
                  <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${likedItems[activeItem.id] ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-2 sm:p-2.5 bg-neutral-800/90 hover:bg-neutral-800 text-white border border-neutral-700/60 rounded-full cursor-pointer transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>

              {/* Slider Image frame */}
              <div className="relative flex-1 bg-black/60 flex items-center justify-center p-3 sm:p-4 min-h-[220px] xs:min-h-[300px] lg:min-h-0">
                <img
                  src={activeItem.image}
                  alt={activeItem.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full max-h-[32vh] xs:max-h-[45vh] lg:max-h-[65vh] object-contain rounded-xl select-none pointer-events-none"
                />

                {/* Left/Right controls inside frame */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 p-2 bg-neutral-800/90 hover:bg-[#6E8FEA] text-white rounded-full cursor-pointer hover:scale-105 transition-all text-xs sm:text-sm shadow-md border border-neutral-700/50"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 p-2 bg-neutral-800/90 hover:bg-[#6E8FEA] text-white rounded-full cursor-pointer hover:scale-105 transition-all text-xs sm:text-sm shadow-md border border-neutral-700/50"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </div>

              {/* Gallery Exhibition Metadata Label sidebar (Right column on desktop) */}
              <div className="w-full lg:w-[340px] bg-[#161616] p-5 sm:p-8 text-neutral-100 flex flex-col justify-between space-y-6 sm:space-y-8 select-none border-t lg:border-t-0 lg:border-l border-neutral-800/80 shrink-0">
                <div className="space-y-6">
                  {/* Category Pill Tag */}
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-[#6E8FEA]/10 text-[#6E8FEA] border border-[#6E8FEA]/20 rounded-full text-[10px] font-bold uppercase tracking-wider font-mono">
                      {activeItem.tag}
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono tracking-wider font-semibold">
                      INDEX {activeIndex + 1} / {filteredItems.length}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-sans text-neutral-100 tracking-tight leading-snug">
                      {activeItem.alt}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-400 font-normal font-sans">
                      "{activeItem.caption}"
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-800/60 flex flex-col space-y-4">
                  <div className="flex justify-between items-center text-xs text-neutral-500">
                    <span className="font-mono">APPRECIATIONS:</span>
                    <span className="font-bold text-neutral-300 font-mono">
                      {(likes[activeItem.id] || 0) + (likedItems[activeItem.id] ? 12 : 11)} LIKES
                    </span>
                  </div>

                  <div className="space-y-1 text-left text-[10px] text-neutral-600 font-mono font-medium leading-relaxed">
                    <div className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#6E8FEA]" />
                      <span>EXHIBITED CONCEPT STUDY</span>
                    </div>
                    <div>CURATOR DIRECTORY, DELHI · 2026</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
