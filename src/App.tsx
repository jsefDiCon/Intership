import React, { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Timeline } from './components/Timeline';
import { GalleryCarousel } from './components/GalleryCarousel';
import { Reflection } from './components/Reflection';
import { TeamFooter } from './components/TeamFooter';

type AppProps = {
  initialTheme?: 'light' | 'dark';
};

export function App({ initialTheme = 'light' }: AppProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme);

  return (
    <MotionConfig reducedMotion="user">
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen w-full bg-white font-sans text-navy antialiased transition-colors duration-200 dark:bg-navy dark:text-white">
        <Navbar
            theme={theme}
            onToggleTheme={() => setTheme((t) => t === 'dark' ? 'light' : 'dark')} />
          
        <main>
          <Hero />
          <Introduction />
          <Timeline />
          <GalleryCarousel />
          <Reflection />
        </main>
        <TeamFooter />
      </div>
    </div>
    </MotionConfig>);

}