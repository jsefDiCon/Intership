import React from 'react';
import { motion } from 'framer-motion';
import { introduction } from '../data/story';
import { EASE_OUT } from '../utils/motion';
import { Reveal } from './Reveal';

export function Introduction() {
  const [first, ...rest] = introduction;
  return (
    <section id="about" className="px-5 py-24 lg:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="sr-only">Introduction</h2>
        <Reveal>
          <p className="font-serif text-2xl leading-[1.6] text-navy dark:text-white lg:text-[1.75rem]">
            {first}
          </p>
        </Reveal>
        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          className="mx-auto my-12 h-1 w-16 rounded-full bg-cyan" />
        
        {rest.map((p) =>
        <Reveal key={p.slice(0, 24)} delay={0.08}>
            <p className="font-serif text-xl italic leading-relaxed text-navy/75 dark:text-white/75">
              {p}
            </p>
          </Reveal>
        )}
      </div>
    </section>);

}