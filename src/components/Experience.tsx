/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';
import { Dot } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  timeline: string;
  location: string;
  description: string;
  skills: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 're',
      role: 'Assistant Manager - Design (Helmets)',
      company: 'Royal Enfield',
      timeline: '2023 - Present',
      location: 'Gurugram, India',
      description: 'Directing all visual aspects of Royal Enfield signature protective gear. Managing graphic decals, custom typography, colorways, fabric interiors, and trim alignment.',
      skills: ['Industrial Graphics', 'Decal Mapping', 'Material Trim Styling', 'Color Design']
    },
    {
      id: 'zave',
      role: 'UI/UX & Motion Designer',
      company: 'Zave',
      timeline: '2023',
      location: 'Singapore (Remote)',
      description: 'Crafting premium digital interfaces, brand illustrations, and animated explainers for a modern Singaporean Fintech company.',
      skills: ['UI/UX Prototyping', 'Vector Illustrations', 'After Effects Motion']
    },
    {
      id: 'dwan',
      role: 'Visual & Motion Designer',
      company: 'Dwan Media',
      timeline: '2021 - 2023',
      location: 'Remote',
      description: 'Spearheading design campaigns for music labels (Kalamkaar Music/Raftaar), detailed stats infographics for Represent Management, and dynamic social content.',
      skills: ['Artwork Assembly', 'Stat Infographics', 'Social Campaigns', 'Kinetic Typography']
    },
    {
      id: 'boult',
      role: 'Motion Design Intern',
      company: 'Boult Audio',
      timeline: '2022',
      location: 'Gurugram, India',
      description: 'Designed storyboard sequences and edited fast-paced video promos for digital consumer electronic merchandise.',
      skills: ['Storyboarding', 'Video Promotion', 'Sound Sync']
    }
  ];

  return (
    <section id="work-experience" className="py-20 px-6 sm:px-12 md:px-20 lg:px-24 bg-white border-t border-black/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          title="Experience"
          subtitle="A minimal overview of my professional timeline."
        />

        {/* Clean, high-density timeline list */}
        <div className="mt-8 border-t border-black/10 text-left">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="py-5 border-b border-black/10 flex flex-col md:flex-row md:items-start md:justify-between gap-3 group hover:bg-neutral-50/50 transition-colors duration-200"
            >
              <div className="space-y-1.5 max-w-3xl">
                {/* Company and Location Info */}
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <span>{item.company}</span>
                  <Dot className="w-3 h-3 text-neutral-300" />
                  <span>{item.location}</span>
                </span>
                
                {/* Job Title / Role */}
                <h3 className="text-base sm:text-lg font-medium tracking-tight text-neutral-800">
                  {item.role}
                </h3>

                {/* Short descriptive task highlight */}
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Minimal Skill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono text-neutral-400 bg-neutral-100/70 border border-neutral-200/40 px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year Timeline column */}
              <div className="text-xs font-mono text-neutral-500 whitespace-nowrap self-start md:self-center pr-2 bg-neutral-100 rounded-full px-2.5 py-0.5 md:my-0 mt-1 md:bg-transparent md:p-0">
                {item.timeline}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
