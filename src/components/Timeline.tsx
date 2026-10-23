import React from 'react';
import { timeline } from '../data/story';
import { TimelineBlock } from './TimelineBlock';

export function Timeline() {
  return (
    <section id="journey" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-36">
      <h2 className="sr-only">The Journey</h2>
      <ol className="flex flex-col gap-24 lg:gap-36">
        {timeline.map((block, i) =>
        <TimelineBlock key={block.title} index={i} {...block} />
        )}
      </ol>
    </section>);

}