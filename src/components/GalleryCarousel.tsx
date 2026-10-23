import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { gallery } from '../data/story';
import { Reveal } from './Reveal';

export function GalleryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = gallery.length;

  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    if (track.scrollLeft <= 2) return setActive(0);
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) return setActive(total - 1);
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    slides.forEach((s, i) => {
      const d = Math.abs(s.offsetLeft + s.clientWidth / 2 - center);
      if (d < min) {
        min = d;
        closest = i;
      }
    });
    setActive(closest);
  }, [total]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      track.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [updateActive]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.max(0, Math.min(total - 1, i));
    const slide = track.children[target] as HTMLElement | undefined;
    if (!slide) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2,
      behavior: reduce ? 'auto' : 'smooth'
    });
  };

  return (
    <section
      id="gallery"
      aria-roledescription="carousel"
      aria-label="Moments from the Field"
      className="overflow-hidden bg-navy py-24 text-white dark:bg-navy-deep lg:py-32">
      
      <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-5 lg:px-8">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">Moments from the Field</h2>
        </Reveal>
        <div className="hidden items-center gap-3 sm:flex">
          <span className="mr-2 text-sm tabular-nums text-white/60" aria-live="polite">
            {active + 1} / {total}
          </span>
          <ArrowButton direction="prev" disabled={active === 0} onClick={() => goTo(active - 1)} />
          <ArrowButton
            direction="next"
            disabled={active === total - 1}
            onClick={() => goTo(active + 1)} />
          
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory items-start gap-5 overflow-x-auto px-5 lg:gap-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        tabIndex={0}
        aria-label="Gallery photos, scroll horizontally"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            goTo(active + 1);
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goTo(active - 1);
          }
        }}>
        
        {gallery.map((item, i) =>
        <figure
          key={item.image}
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${total}`}
          className={`flex w-fit shrink-0 snap-center flex-col transition-opacity duration-200 ease-out ${
          i === active ? 'opacity-100' : 'opacity-45'}`
          }>
          
            <div className="overflow-hidden rounded-2xl bg-white/5">
              <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              draggable={false}
              className="block h-[min(58vh,72vw)] max-h-[600px] min-h-[260px] w-auto max-w-[88vw] select-none object-contain" />
            
            </div>
            <figcaption className="mt-4 w-0 min-w-full font-serif text-base italic leading-snug text-white/75">
              {item.caption}
            </figcaption>
          </figure>
        )}
      </div>

      <div className="mt-10 flex items-center justify-center gap-4 px-5">
        <div className="sm:hidden">
          <ArrowButton direction="prev" disabled={active === 0} onClick={() => goTo(active - 1)} />
        </div>
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose photo">
          {gallery.map((item, i) =>
          <button
            key={item.image}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Photo ${i + 1}: ${item.caption}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-[width,background-color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
            i === active ? 'w-8 bg-cyan' : 'w-2.5 bg-white/30 hover:bg-white/50'}`
            } />

          )}
        </div>
        <div className="sm:hidden">
          <ArrowButton
            direction="next"
            disabled={active === total - 1}
            onClick={() => goTo(active + 1)} />
          
        </div>
      </div>
    </section>);

}

type ArrowButtonProps = {
  direction: 'prev' | 'next';
  disabled: boolean;
  onClick: () => void;
};

function ArrowButton({ direction, disabled, onClick }: ArrowButtonProps) {
  const Icon = direction === 'prev' ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous photo' : 'Next photo'}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan text-navy transition-[transform,opacity] duration-150 ease-out hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
      
      <Icon className="h-6 w-6" />
    </button>);

}