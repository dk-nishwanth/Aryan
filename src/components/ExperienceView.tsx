/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Dot, Flag, Compass, Award, ExternalLink } from 'lucide-react';

interface ExperienceViewProps {
  onBack: () => void;
  onContactClick: () => void;
}

export default function ExperienceView({ onBack, onContactClick }: ExperienceViewProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const experiences = [
    {
      role: 'Assistant Manager - Design (Helmets)',
      company: 'Royal Enfield',
      timeline: 'Aug 2023 - Present',
      location: 'Gurugram, India',
      highlights: [
        'Directing visual and creative decal layouts across premium motorcycle helmets.',
        'Developing full shell decal maps, collaborating on materials selection and interiors color schemes.',
        'Optimizing production-ready vector artworks, coordinate alignments, and physical print placement specs.',
        'Establishing unified style rules for future gear launches, improving design system integrity.'
      ],
      skills: ['Industrial Graphics', 'Decal Mapping', 'Material Trim Styling', 'Production Artworks']
    },
    {
      role: 'UI/UX & Motion Designer',
      company: 'Zave Fintech',
      timeline: 'Jan 2023 - Jul 2023',
      location: 'Singapore (Remote)',
      highlights: [
        'Crafted responsive dashboard screens, mobile mockups, and transactional UI grids inside Figma.',
        'Created vector character illustration guidelines to humanize financial states and credit card details.',
        'Designed high-fidelity animated explainers and website motion banners using Adobe After Effects.',
        'Streamlined visual asset export procedures, minimizing file overhead and enhancing display speed.'
      ],
      skills: ['UI/UX Prototyping', 'Vector Illustrations', 'SaaS Onboarding', 'After Effects Motion']
    },
    {
      role: 'Visual & Motion Designer',
      company: 'Dwan Media',
      timeline: 'Apr 2021 - Jan 2023',
      location: 'Remote',
      highlights: [
        'Created high-impact promotional posters and digital cover arts for Kalamkaar Music Label and artist Raftaar.',
        'Constructed custom lyric videos and kinetic typography layouts with tight audio synchronization.',
        'Designed detailed stats infographics, corporate decks, and player profile visual cards for Represent Management.',
        'Shaped visual identity campaigns for domestic and international high-reach entertainment brands.'
      ],
      skills: ['Artwork Assembly', 'Stat Infographics', 'Social Campaigns', 'Kinetic Typography']
    },
    {
      role: 'Motion Design Intern',
      company: 'Boult Audio',
      timeline: 'Jun 2022 - Jul 2022',
      location: 'Gurugram, India',
      highlights: [
        'Designed storyboards, video promos, and e-commerce video listings for audio electronics.',
        'Edited fast-paced social media ads capturing immediate brand attention.',
        'Supervised sound element synchronization and dynamic visual effects across advertisement catalogs.'
      ],
      skills: ['Video Ads Editing', 'E-commerce Promos', 'Sound Sync', 'Storyboarding']
    },
    {
      role: 'Motion / UI Designer',
      company: 'Murf.ai',
      timeline: 'Dec 2020 - May 2021',
      location: 'Remote',
      highlights: [
        'Drafted interactive explainers and motion graphics for AI voice generator platforms.',
        'Created optimized UI illustrations and graphics for marketing landing pages.',
        'Compiled promotional social media assets for global targeted ad campaigns.'
      ],
      skills: ['SaaS Explainer Motion', 'Marketing Illustrations', 'UI Graphic Systems']
    }
  ];

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
          <Clock className="w-4.5 h-4.5 text-[#6E8FEA]" />
          <span className="text-xs font-bold text-[#6E8FEA] uppercase tracking-wider">Work History Details</span>
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-amber-600 text-[11px] font-bold rounded-full uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Professional timeline</span>
          </div>

          <h1 className="text-[34px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-medium tracking-tight text-black leading-[1.11]">
            Experience.
            <span className="block text-neutral-500 font-light text-[22px] sm:text-[32px] md:text-[36px] mt-2">
              Shaping brands in tech, retail, and entertainment.
            </span>
          </h1>

          <p className="text-[17px] sm:text-[21px] leading-relaxed text-neutral-500 font-light max-w-2xl font-sans">
            A granular walkthrough of my professional journey, highlighting the deliverables, metrics, and artistic techniques behind each position.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24 pt-16">
        <div className="relative border-l-2 border-neutral-200 pl-6 sm:pl-10 space-y-16 py-4 text-left">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#6E8FEA] shadow-sm z-10" />

              <div className="space-y-4">
                {/* Meta details */}
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#6E8FEA] uppercase block">
                    {exp.timeline}
                  </span>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 leading-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                      <span>at</span>
                      <span className="text-neutral-500 font-semibold">{exp.company}</span>
                      <Dot className="w-3 h-3 text-neutral-300" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Sub-highlights bullet checklist */}
                <ul className="space-y-2.5 max-w-3xl">
                  {exp.highlights.map((item, keyID) => (
                    <li key={keyID} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                      <span className="text-[#6E8FEA] mt-1 font-bold shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono text-neutral-500 bg-neutral-100 hover:bg-neutral-200 px-2.5 py-0.5 rounded transition-colors"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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
