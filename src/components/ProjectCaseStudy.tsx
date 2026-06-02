/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Project } from '../types';
import ImageLightbox from './ImageLightbox';

interface ProjectCaseStudyProps {
  project: Project;
  onBack: () => void;
  key?: string;
}

export default function ProjectCaseStudy({ project, onBack }: ProjectCaseStudyProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [project.id]);

  const getProjectContent = (id: string) => {
    switch (id) {
      case 'behind-design':
        return {
          heroImage: '/src/assets/images/kalamkaar_poster_1780159351293.png',
          category: 'Branding, Art Direction, Motion Graphics',
          type: 'Personal Project',
          year: '2022',
          description: '"Behind Design" is a branding project that aims to create a cohesive and engaging identity for a new podcast that promises to be a valuable resource for anyone interested in the world of design in India.',
          images: [
            { src: '/src/assets/images/motion_frame_shapes_1780159369545.png', title: 'Episode 002' },
            { src: '/src/assets/images/dwan_music_visuals_1780157941722.png', title: 'Episode 001' },
          ],
          sections: [
            {
              title: 'Problem Statement',
              content: 'When I was a teenager looking for what to take up after I complete my High-School, I was very keen on designing as an option. But it was really difficult to look up anything regarding it as I personally didn\'t have any connects in the industry, and is relatively unpopular as a career option in India. All my friends were taking up engineering and other such options. All the research on this specific career route was to be done through Online research only, and most of the information I came across was mostly in context to other countries such as the US. Therefore you had to know someone that is already in the design industry to get any kind of relevant information. Designers and Aspiring Designers in India has to scour through Internet for a lot of time to look for relevant regional information that would help them in their career.',
            },
            {
              title: 'Why a podcast?',
              content: 'Nowadays, there is a high demand for people to have access to online content wherever they are, whenever they want. Whether it\'s music, news, TV, or social media, people now have instant access to the content they enjoy, no matter where they may be. Unlike Youtube videos or Television shows, podcast users can listen to podcasts without needing to watch the screen, allowing them to listen on walks or when driving home from work. They are also generally longer forms of content, which makes them more suitable for long car journeys.',
            },
            {
              title: 'Design Podcast in India',
              content: 'India\'s podcast market is growing and how. The country now has the third-largest listener base globally, just behind the US and China. A PwC Global Entertainment & Media Outlook study expects this number to rise to 17.61 million by 2023. All this increased interest in podcasts also means that there are now many hosting and podcast production companies that work with creators. Since 2016, podcasts have been steadily growing thanks to the efforts of some committed individuals. In the last six years, podcast listeners have had more choices than ever before thanks to large creators also entering the fray and offering more varied content. The listener base in India has grown from being just about four million in 2016 to an estimated 90 million in 2022.',
            },
            {
              title: 'Philosophy',
              content: 'We want to create a culture and community of helpfulness and awareness in the design industry, from helping aspiring designers to established designers to grow their careers even further.',
            },
            {
              columns: [
                {
                  title: 'Mission',
                  content: 'Our mission is to aspire and nurture a community of creatives by providing them the value they seek in regards to their field of interest with respect to the country they work in.',
                },
                {
                  title: 'Vision',
                  content: 'To provide value through our podcast in such quality and so useful that people would be willing to pay for it.',
                },
              ],
            },
            {
              title: 'Audience',
              subsections: [
                {
                  title: 'What age group do they fall into?',
                  content: 'Majority of the target lies in the younger population which would be around 17-24. The design industry in India is growing at the rate of 23% to 25% annually. The focus is to be more directed towards aspiring designers that are looking for guidance in this field.',
                },
                {
                  title: 'Are they self-employed, an employee, unemployed, etc.?',
                  content: 'The audience in order of number of people would be unemployed, employee, self-employed.',
                },
                {
                  title: 'What\'s their social life like?',
                  content: 'Currently people following design generally would lack people around them that would be knowledgeable about design and seek advice and information from the internet solely.',
                },
                {
                  title: 'What are their hopes, dreams, and challenges?',
                  content: 'This mostly consists of wanting to acquire more skills and monetize more with that skill. The challenges either come from lack of skills and knowledge or financial insecurity with the field.',
                },
              ],
            },
            {
              title: 'User Needs',
              content: 'What would they want to know about the topic of this podcast? New trends, Useful insights to upgrade their skills, Educational Content, Informative topics Career Tips, Monetization Tips, etc.',
            },
          ],
          galleryImages: [],
        };
      case 'disney-shopping-app':
        return {
          heroImage: '/src/assets/images/kama_iphone_1780154940227.png',
          category: 'UI/UX',
          type: 'Personal Project',
          year: '2021',
          description: 'This Project is a E-commerce Application for the existing Disney Shopping website which offers Disney official Merch',
          images: [
            { src: '/src/assets/images/farewill_hero_phone_1780154988405.png', title: 'iPad mini 8.3 - 2' },
            { src: '/src/assets/images/farewill_laptop_1780154892757.png', title: 'UI Components' },
          ],
          sections: [
            {
              columns: [
                { title: 'User Interface', content: '' },
                { title: 'UX Research', content: '' },
              ],
            },
            {
              title: 'Disclaimer',
              content: 'This case study is a personal concept project and the output is solely a work of my research and design.',
            },
            {
              title: 'Mission',
              content: 'The mission of The Walt Disney Company is to entertain, inform and inspire people around the globe through the power of unparalleled storytelling, reflecting the iconic brands, creative minds and innovative technologies that make it the world\'s premier entertainment company.',
            },
            {
              title: 'Disney is divided into 2 different divisions',
              subsections: [
                {
                  title: 'Disney Media and Entertainment Distribution',
                  content: 'Disney\'s this division already has an OTT application which lets user stream Disney\'s Content over the internet on their Devices. Disney+ Hotstar video on-demand over-the-top streaming service owned and operated by the Media and Entertainment Distribution division of The Walt Disney Company.',
                },
                {
                  title: 'Disney Parks, Experiences, and Products',
                  content: 'Disney\'s this division focuses more the Physical Market rather than the digital one. While the Disneyland App does exist. It\'s not very functional for the current India, Unless the rumoured Disneyland is built on the outskirts of Hyderabad. The Division also handles products, for which disney has an online store for on disney.in but it is quite unknown to the general public. So an Online Shopping App for its online market would be the focus for this project.',
                },
              ],
            },
            {
              title: 'Customer Analysis',
              subsections: [
                { title: 'Age', content: '5–25*. Age can be older than 25 if looking for gifts.' },
                { title: 'Gender', content: 'There is no gender barrier.' },
                { title: 'Needs', content: 'Fast Responsive App, Categories, Affordable Price, Filtering of products, Wishlist System.' },
              ],
            },
            {
              title: 'Who are our competitors?',
              content: 'The Disney online store could have more than usual competitors due to the variety of commodities Disney sells as merch and Gifts in addition to websites and apps that sell some official Disney merchandise approved by Disney itself.',
              bullets: ['Souled Store', 'Archies', 'Offline Retail Stores', 'Amazon'],
            },
            {
              title: 'Navigation Flow',
              content: 'The design language is kept fairly clean and simple for people of varying age to use easily.',
            },
            {
              title: 'Final UI Screens',
              sections: [
                {
                  title: 'Onboarding, Log in & Sign Up',
                  content: 'First impressions matter. The User is greeted with enticing imagery of popular Disney characters.',
                },
                {
                  title: 'Home Pages',
                  content: 'The Home Page Should be easy to navigate and be clean, The Buttons and imagery used take screen real estate in such a manner so that everything is easily accessible.',
                },
                {
                  title: 'Product Pages',
                  content: 'Clean, Clear and Easy to Identify. The Disney® Shopping App focuses on being simplistic for everyone to use.',
                },
              ],
            },
          ],
          galleryImages: [],
        };
      case 'grace':
        return {
          heroImage: '/src/assets/images/re_helmet_design_1780157894631.png',
          category: 'Branding, Art Direction, Packaging',
          type: 'Personal Project',
          year: '2021',
          description: 'Grace is a fashion branding project that focuses on luxury formal attires for females.',
          images: [
            { src: '/src/assets/images/spatial_exhibit_1780159389308.png', title: 'Sign_Mockup01_MicroVolume' },
            { src: '/src/assets/images/services_trophies_1780154964755.png', title: 'Boxes' },
          ],
          sections: [
            {
              title: 'Brand Goal',
              content: 'Women from metropolitan areas find it difficult to find formal wear Options from decent well-known Formal Wear brands. Womens formal wear is generally found in small sections in men\'s formal wear brands. The goal is to create a female-only section for a existing legacy Men\'s formal brand. For this Project I\'ve chosen the Brand Raymond to act as the Legacy Mens Formal Wear Brand.',
            },
            {
              title: 'Purpose',
              content: 'The purpose is to introduce an eqaul Section for women\'s formal wear in a brand that specializes in formal wear only.',
            },
          ],
          galleryImages: [],
        };
      case 'artist-management':
        return {
          heroImage: '/src/assets/images/zave_fintech_app_1780157917788.png',
          category: 'UI/UX, Web Design',
          type: 'Tcules UI/UX Placement Task',
          year: '2023',
          description: 'An Event/Artist Management interface for the event organizers where the organizer can see the status of the information that they requested from each manager of the bands performing.',
          images: [
            { src: '/src/assets/images/zave_ui_system_1780159329350.png', title: 'Dashboard' },
          ],
          sections: [],
          galleryImages: [],
        };
      case 'wild-young':
        return {
          heroImage: '/src/assets/images/headspace_billboard_1780154913817.png',
          category: 'Branding, Motion Graphics',
          type: 'Personal Project',
          year: '2022',
          description: 'Wild + Young is a online marketing agency concept branding project that targets young influencers to manage them.',
          images: [],
          sections: [],
          galleryImages: [],
        };
      default:
        return {
          heroImage: project.image,
          category: project.category,
          type: 'Project',
          year: project.year,
          description: project.description,
          images: [{ src: project.image, title: project.title }],
          sections: [],
          galleryImages: [],
        };
    }
  };

  const content = getProjectContent(project.id);

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
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">{project.year}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 sm:py-24">
        <div className="max-w-4xl">
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">{content.category}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-neutral-900 leading-[1.1] mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mb-6">
            <span>{content.type}</span>
            <span>•</span>
            <span>{content.year}</span>
          </div>
          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
            {content.description}
          </p>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#6E8FEA] hover:text-[#4a6fd4] transition-colors"
          >
            <span>Behance Project</span>
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <section
        className="group cursor-zoom-in px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-8"
        onClick={() => {
          setLightboxSrc(content.heroImage);
          setLightboxTitle('Hero Image');
        }}
      >
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={content.heroImage}
            alt="Hero"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
        </div>
      </section>

      {/* Content Images */}
      {content.images.length > 0 && (
        <div className="space-y-0 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          {content.images.map((image, index) => (
            <section
              key={index}
              className="group cursor-zoom-in py-6"
              onClick={() => {
                setLightboxSrc(image.src);
                setLightboxTitle(image.title);
              }}
            >
              <div className="relative rounded-xl overflow-hidden">
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
      )}

      {/* Content Sections */}
      <div className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          {content.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              {/* Section with Title */}
              {section.title && (
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-6">{section.title}</h2>
                  {section.content && (
                    <p className="text-lg text-neutral-600 leading-relaxed">{section.content}</p>
                  )}
                </div>
              )}

              {/* Bullet Points */}
              {section.bullets && (
                <ul className="space-y-2 mb-8">
                  {section.bullets.map((bullet: string, bulletIndex: number) => (
                    <li key={bulletIndex} className="text-lg text-neutral-700 flex items-start gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {/* Columns */}
              {section.columns && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {section.columns.map((col: any, colIndex: number) => (
                    <div key={colIndex}>
                      {col.title && (
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">{col.title}</h3>
                      )}
                      {col.content && (
                        <p className="text-lg text-neutral-600 leading-relaxed">{col.content}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Subsections */}
              {section.subsections && (
                <div className="space-y-8 mb-8">
                  {section.subsections.map((subsection: any, subIndex: number) => (
                    <div key={subIndex}>
                      <h3 className="text-lg font-medium text-neutral-900 mb-3">{subsection.title}</h3>
                      <p className="text-lg text-neutral-600 leading-relaxed">{subsection.content}</p>
                    </div>
                  ))}
                </div>
              )}



              {/* Inner Sections */}
              {section.sections && (
                <div className="space-y-8">
                  {section.sections.map((innerSection: any, innerIndex: number) => (
                    <div key={innerIndex}>
                      {innerSection.title && (
                        <h3 className="text-xl font-medium text-neutral-900 mb-3">{innerSection.title}</h3>
                      )}
                      {innerSection.content && (
                        <p className="text-lg text-neutral-600 leading-relaxed">{innerSection.content}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Images */}
      {content.galleryImages.length > 0 && (
        <div className="space-y-0 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          {content.galleryImages.map((image, index) => (
            <section
              key={index}
              className="group cursor-zoom-in py-6"
              onClick={() => {
                setLightboxSrc(image.src);
                setLightboxTitle(image.title);
              }}
            >
              <div className="relative rounded-xl overflow-hidden">
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
      )}

      {/* Back Button at Bottom */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16">
        <div className="max-w-4xl mx-auto border-t border-neutral-200 pt-8">
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
