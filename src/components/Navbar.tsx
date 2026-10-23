import React, { useState } from 'react';
import { ArrowUpRightIcon, MenuIcon, MoonIcon, SunIcon, XIcon } from 'lucide-react';
import { logoUrl, navItems, reportLabel, reportUrl } from '../data/story';
import { ScrollProgress } from './ScrollProgress';

type NavbarProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-navy/90">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8"
        aria-label="Main">
        
        <a href="#top" className="flex items-center rounded-md dark:bg-white dark:px-2 dark:py-1">
          <img src={logoUrl} alt="aecc — Study abroad consultants" className="h-8 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) =>
          <li key={item.href}>
              <a
              href={item.href}
              className="whitespace-nowrap text-[15px] font-medium text-navy/75 transition-colors duration-150 hover:text-navy dark:text-white/75 dark:hover:text-white">
              
                {item.label}
              </a>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy transition-colors duration-150 hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan dark:text-white dark:hover:bg-white/10">
            
            {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <a
            href={reportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-150 hover:bg-cyan-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-navy sm:inline-flex">
            
            {reportLabel}
            <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-navy/5 dark:text-white dark:hover:bg-white/10 lg:hidden">
            
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open &&
      <div
        id="mobile-menu"
        className="border-t border-navy/10 bg-white px-5 pb-5 pt-2 dark:border-white/10 dark:bg-navy lg:hidden">
        
          <ul className="flex flex-col">
            {navItems.map((item) =>
          <li key={item.href}>
                <a
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-navy dark:text-white">
              
                  {item.label}
                </a>
              </li>
          )}
          </ul>
          <a
          href={reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-navy">
          
            {reportLabel}
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      }
      <ScrollProgress />
    </header>);

}