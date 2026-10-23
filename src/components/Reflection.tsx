import React from 'react';
import { ArrowUpRightIcon, QuoteIcon } from 'lucide-react';
import { reflection, reportLabel, reportUrl } from '../data/story';
import { Reveal } from './Reveal';

export function Reflection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-36">
      <Reveal y={40} scale={0.97}>
        <div className="rounded-[2rem] bg-cyan p-8 text-navy dark:border dark:border-cyan/25 dark:bg-navy-deep dark:text-white sm:p-12 lg:p-20">
          <QuoteIcon aria-hidden="true" className="h-10 w-10 text-navy dark:text-cyan" />
          <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
            {reflection.title}
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
            {reflection.paragraphs.map((p, i) =>
            <Reveal key={p.slice(0, 24)} delay={0.1 + i * 0.06}>
                <p className="font-serif text-lg leading-[1.8] text-navy/85 dark:text-white/80">{p}</p>
              </Reveal>
            )}
          </div>
          <div className="mt-12 flex flex-col gap-8 border-t border-navy/20 pt-10 dark:border-white/15 lg:flex-row lg:items-end lg:justify-between">
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-2xl font-semibold leading-snug lg:text-3xl">
                {reflection.closing}
              </p>
            </Reveal>
            <a
              href={reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-soft dark:bg-cyan dark:text-navy dark:hover:bg-cyan-strong lg:self-auto">
              
              {reportLabel}
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>);

}