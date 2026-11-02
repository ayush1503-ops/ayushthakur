import React, { useState, useEffect, useCallback } from 'react';
import { Loader } from './components/Loader';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Origin } from './components/Origin';
import { Missions } from './components/Missions';
import { Arsenal } from './components/Arsenal';
import { Process } from './components/Process';
import { Intel } from './components/Intel';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudy } from './components/CaseStudy';
import { usePortfolioMotion } from './hooks/useMotion';
import { PROJECTS } from './data/projects';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'project'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('pasha');

  // Check URL params on initial load and handle popstate (browser back/forward)
  useEffect(() => {
    const handleLocationChange = () => {
      const params = new URLSearchParams(window.location.search);
      const projectParam = params.get('p');
      const hash = window.location.hash;

      if (projectParam && PROJECTS.some((p) => p.id === projectParam)) {
        setSelectedProjectId(projectParam);
        setCurrentView('project');
      } else if (hash.startsWith('#project-')) {
        const id = hash.replace('#project-', '');
        if (PROJECTS.some((p) => p.id === id)) {
          setSelectedProjectId(id);
          setCurrentView('project');
        }
      } else {
        setCurrentView('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Initialize GSAP motion whenever the view or project changes
  usePortfolioMotion(`${currentView}-${selectedProjectId}`);

  const handleSelectProject = useCallback((projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView('project');
    const newUrl = `${window.location.pathname}?p=${projectId}`;
    window.history.pushState({ p: projectId }, '', newUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateHome = useCallback((hash?: string) => {
    setCurrentView('home');
    const newUrl = hash ? `${window.location.pathname}${hash}` : window.location.pathname;
    window.history.pushState({}, '', newUrl);

    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Loader />
      <Nav currentView={currentView} onNavigateHome={handleNavigateHome} />

      {currentView === 'home' ? (
        <main id="top">
          <Hero onScrollToMissions={() => handleNavigateHome('#missions')} />
          <Origin />
          <Missions onSelectProject={handleSelectProject} />
          <Arsenal />
          <Process />
          <Intel />
          <Contact />
        </main>
      ) : (
        <CaseStudy
          projectId={selectedProjectId}
          onBackToMissions={() => handleNavigateHome('#missions')}
          onSelectProject={handleSelectProject}
        />
      )}

      <Footer
        isProjectView={currentView === 'project'}
        onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onBackToMissions={() => handleNavigateHome('#missions')}
      />
    </>
  );
};

export default App;
