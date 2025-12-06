import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../constants';

const Timeline = () => {
  const prefersReducedMotion = useMemo(() => 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
      },
    },
  };

  return (
    <section className="py-16 px-6 bg-gray-950" id="timeline">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
        >
          <p className="text-yellow-400 font-semibold uppercase tracking-wide mb-2">
            My Journey So Far
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Experience & Timeline
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            A chronicle of roles, projects, and contributions that shaped my career.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-emerald-400 to-blue-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
              }`}
              variants={itemVariants}
            >
              <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 bg-gradient-to-br from-yellow-400 to-emerald-400 rounded-full border-4 border-gray-950 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 flex-1 bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}>
                  <div className="flex items-start gap-4 mb-3">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                      >
                        {exp.company} ↗
                      </a>
                      <p className="text-yellow-400 text-sm font-medium mt-1">
                        {exp.duration}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.points.slice(0, 3).map((point, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-sm flex items-start gap-2"
                      >
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.points.length > 3 && (
                    <p className="text-gray-500 text-xs mt-3">
                      +{exp.points.length - 3} more achievements
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
