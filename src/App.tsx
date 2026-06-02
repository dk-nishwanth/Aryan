/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import FeaturedWork from './components/FeaturedWork';
import Services from './components/Services';
import VisualFeed from './components/VisualFeed';
import Press from './components/Press';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ProjectCaseStudy from './components/ProjectCaseStudy';
import { Project } from './types';
import LoadingScreen from './components/LoadingScreen';

// Sub-page Views
import AboutView from './components/AboutView';
import ExperienceView from './components/ExperienceView';
import BrandWorkView from './components/BrandWorkView';
import MotionShortsView from './components/MotionShortsView';
import GraduationProjectView from './components/GraduationProjectView';
import SmallProjectsView from './components/SmallProjectsView';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'experience' | 'brand-work' | 'motion-shorts' | 'grad-project' | 'small-projects' | 'case-study'>('home');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Monitor general page scroll for progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSelectProject = (project: Project) => {
    if (project.id === 'brand-work') {
      setCurrentView('brand-work');
    } else if (project.id === 'motion-shorts') {
      setCurrentView('motion-shorts');
    } else if (project.id === 'grad-project') {
      setCurrentView('grad-project');
    } else if (project.id === 'small-projects') {
      setCurrentView('small-projects');
    } else {
      setActiveProject(project);
      setCurrentView('case-study');
    }
  };

  const handleContactClick = () => {
    if (currentView === 'home') {
      // If on home page, scroll to footer
      document.getElementById('footer-contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on other pages, go back to home first, then after transition, scroll
      setCurrentView('home');
      // Wait for home page to render, then scroll to footer
      setTimeout(() => {
        document.getElementById('footer-contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  const renderViewContent = () => {
    switch (currentView) {
      case 'about':
        return <AboutView onBack={() => setCurrentView('home')} onContactClick={handleContactClick} />;
      case 'experience':
        return <ExperienceView onBack={() => setCurrentView('home')} onContactClick={handleContactClick} />;
      case 'brand-work':
        return <BrandWorkView onBack={() => setCurrentView('home')} onContactClick={handleContactClick} />;
      case 'motion-shorts':
        return <MotionShortsView onBack={() => setCurrentView('home')} onContactClick={handleContactClick} />;
      case 'grad-project':
        return <GraduationProjectView onBack={() => setCurrentView('home')} onContactClick={handleContactClick} />;
      case 'small-projects':
        return <SmallProjectsView onBack={() => setCurrentView('home')} onContactClick={handleContactClick} />;
      case 'case-study':
        return activeProject ? (
          <ProjectCaseStudy
            key="view-case-study"
            project={activeProject}
            onBack={() => {
              setActiveProject(null);
              setCurrentView('home');
            }}
          />
        ) : null;
      case 'home':
      default:
        return (
          <motion.div
            key="home-feed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col"
          >
            {/* Hero Header Area */}
            <Header
              onAboutClick={() => setCurrentView('about')}
              onExperienceClick={() => setCurrentView('experience')}
              onContactClick={handleContactClick}
            />

            {/* Featured Grid Section (First Focus: Projects to Showcase) */}
            <FeaturedWork onSelectProject={handleSelectProject} />

            {/* Workplace Professional experience timeline (Second Focus: Work Ex) */}
            <Experience />

            {/* Services/Expertise Accordions Section */}
            <Services />

            {/* Visual feed scrolling inspiration deck */}
            <VisualFeed />

            {/* Curated Press articles & features list */}
            <Press />

            {/* Scalable footer contact module (Third Focus: Contact) */}
            <Footer />
          </motion.div>
        );
    }
  };

  return (
    <>
      <LoadingScreen isLoaded={isLoaded} />
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col relative selection:bg-[#6E8FEA] selection:text-white">
        {/* Tiny top indicator progress bar */}
        <div className="fixed top-0 left-0 right-0 h-[3px] bg-neutral-200/50 z-50 pointer-events-none">
          <motion.div
            className="h-full bg-[#6E8FEA]"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          {isLoaded && renderViewContent()}
        </AnimatePresence>
      </div>
    </>
  );
}
