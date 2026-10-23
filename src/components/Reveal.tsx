import React from 'react';
import { motion } from 'framer-motion';
import { EASE_OUT } from '../utils/motion';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
};

export function Reveal({ children, className, delay = 0, y = 28, scale = 1 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: EASE_OUT, delay }}>
      
      {children}
    </motion.div>);

}