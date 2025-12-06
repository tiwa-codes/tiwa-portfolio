import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { name } from '../constants';

const Hero = () => {
  const ref = useRef(0);
  const [text, setText] = useState('');
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText(() => text + name[ref.current - 1]);
      } else {
        setIsAnimationComplete(true);
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [text]);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: 'easeOut',
      },
    },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.8,
        ease: 'easeInOut',
        delay: prefersReducedMotion ? 0 : 1,
      },
    },
  };

  return (
    <div className="hero relative h-[calc(100vh)] flex justify-center items-center text-white" id="hero">
      <motion.div
        className="pt-4 backdrop-blur-sm rounded-3xl px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold mt-2 text-center"
          variants={itemVariants}
        >
          Hi, I'm&nbsp;
          <span className="text-yellow-200 font-extrabold relative inline-block">
            {text}
            {!isAnimationComplete && (
              <motion.span
                className="inline-block ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
            <motion.span
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-200 to-pink-500"
              variants={underlineVariants}
              initial="hidden"
              animate={isAnimationComplete ? 'visible' : 'hidden'}
            />
          </span>
        </motion.h1>
        
        <motion.p
          className="mt-6 text-lg sm:text-xl text-center leading-relaxed"
          variants={itemVariants}
        >
          I am passionate about{' '}
          <b className="text-emerald-300">building seamless digital experiences</b> through
          development, design and data driven insights.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4 flex-wrap"
          variants={itemVariants}
        >
          <a
            href="#projects"
            className="group relative px-6 py-3 bg-gradient-to-r from-yellow-200 to-yellow-300 text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
