import React from 'react';
import { motion } from 'framer-motion';
import { logoUrl, team } from '../data/story';
import { EASE_OUT } from '../utils/motion';
import { Reveal } from './Reveal';

export function TeamFooter() {
  return (
    <footer className="border-t border-navy/10 px-5 pb-12 pt-24 dark:border-white/10 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-5xl text-center">
        <motion.figure
          initial={{ clipPath: 'inset(8% 8% 8% 8% round 24px)', opacity: 0 }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 24px)', opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          className="overflow-hidden rounded-3xl bg-navy/5 dark:bg-white/5">
          
          <img
            src={team.image}
            alt={team.imageAlt}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover" />
          
        </motion.figure>
        <Reveal>
          <h2 className="mt-14 text-3xl font-bold tracking-tight text-navy dark:text-white lg:text-4xl">
            {team.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-xl leading-relaxed text-navy/75 dark:text-white/75">
            {team.message}
          </p>
        </Reveal>
        <ul className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Tags">
          {team.tags.map((tag, i) =>
          <motion.li
            key={tag}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: EASE_OUT, delay: i * 0.04 }}
            className="rounded-full border border-navy/15 px-4 py-1.5 text-sm font-medium text-navy dark:border-cyan/30 dark:text-cyan">
            
              {tag}
            </motion.li>
          )}
        </ul>
      </div>
      <div className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-navy/10 pt-8 text-sm text-navy/60 dark:border-white/10 dark:text-white/60 sm:flex-row">
        <span className="rounded-md dark:bg-white dark:px-2 dark:py-1">
          <img src={logoUrl} alt="aecc" className="h-6 w-auto" />
        </span>
        <p>© 2026 Joseph P. Feria · OJT at aecc Global Education Inc., Davao</p>
      </div>
    </footer>);

}