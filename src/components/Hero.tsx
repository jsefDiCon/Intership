import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { hero } from '../data/story';
import { EASE_OUT } from '../utils/motion';

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 60]);
  const words = hero.headline.split(' ');

  return (
    <section id="top" className="mx-auto max-w-7xl px-5 pb-20 pt-12 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h1 className="font-sans font-bold tracking-tight text-navy dark:text-white">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className="relative mb-3 inline-block pb-1 text-2xl lg:text-3xl">
              
              {hero.headlineLead}
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.2 }}
                className="absolute inset-x-0 bottom-0 h-1 origin-left rounded-full bg-cyan" />
              
            </motion.span>
            <span className="block text-[2.75rem] leading-[1.08] sm:text-6xl lg:text-[4.25rem]">
              {words.map((word, i) =>
              <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
                  <motion.span
                  className="inline-block"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.1 + i * 0.04 }}>
                  
                    {word}
                    {i < words.length - 1 ? '\u00A0' : ''}
                  </motion.span>
                </span>
              )}
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.45 }}
            className="mt-8 max-w-xl font-serif text-xl leading-relaxed text-navy/75 dark:text-white/75">
            
            {hero.subheadline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-navy/70 dark:text-white/70">
            
            <span>
              By <span className="font-semibold text-navy dark:text-white">{hero.author}</span>
            </span>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan" />
            <span>{hero.program}</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan" />
            <span>{hero.school}</span>
          </motion.p>
        </div>

        <div className="lg:col-span-5">
          <motion.figure
            initial={{ clipPath: 'inset(14% 14% 14% 14% round 24px)', opacity: 0 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0% round 24px)', opacity: 1 }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.25 }}
            className="overflow-hidden rounded-3xl bg-navy/5 dark:bg-white/5">
            
            <motion.img
              src={hero.image}
              alt={hero.imageAlt}
              style={{ y: imageY, scale: 1.1 }}
              className="aspect-[4/5] w-full object-cover object-[center_40%]" />
            
          </motion.figure>
        </div>
      </div>
    </section>);

}