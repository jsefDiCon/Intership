import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { EASE_OUT } from '../utils/motion';
import { Reveal } from './Reveal';

type TimelineBlockProps = {
  index: number;
  label: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export function TimelineBlock({ index, label, title, body, image, imageAlt }: TimelineBlockProps) {
  const ref = useRef<HTMLLIElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['-7%', '7%']);
  const reversed = index % 2 === 1;

  return (
    <li ref={ref} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <motion.figure
        initial={{ clipPath: 'inset(10% 10% 10% 10% round 24px)', opacity: 0 }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 24px)', opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3, ease: EASE_OUT }}
        className={`overflow-hidden rounded-3xl bg-navy/5 dark:bg-white/5 lg:col-span-5 ${
        reversed ? 'lg:order-2 lg:col-start-8' : ''}`
        }>
        
        <motion.img
          src={image}
          alt={imageAlt}
          loading="lazy"
          style={{ y, scale: 1.16 }}
          className="aspect-[4/5] w-full object-cover" />
        
      </motion.figure>
      <div className={`lg:col-span-7 ${reversed ? 'lg:order-1 lg:col-start-1' : ''}`}>
        <Reveal>
          <p className="flex items-center gap-3 font-sans text-sm font-semibold text-navy/60 dark:text-white/60">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan text-navy">
              {index + 1}
            </span>
            Chapter {index + 1} · {label}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-navy dark:text-white lg:text-[2.5rem]">
            {title}
          </h3>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl font-serif text-lg leading-[1.8] text-navy/80 dark:text-white/80">
            {body}
          </p>
        </Reveal>
      </div>
    </li>);

}