import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const prefersReducedMotion = useMemo(() => 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const skills = [
    { name: 'React & React Native', level: 90, category: 'Frontend' },
    { name: 'JavaScript/TypeScript', level: 85, category: 'Frontend' },
    { name: 'Python', level: 88, category: 'Backend' },
    { name: 'HTML/CSS/Tailwind', level: 92, category: 'Frontend' },
    { name: 'Node.js & Express', level: 80, category: 'Backend' },
    { name: 'Data Science & ML', level: 82, category: 'Data' },
    { name: 'Git & GitHub', level: 88, category: 'Tools' },
    { name: 'UI/UX Design', level: 85, category: 'Design' },
    { name: 'Notion & Systems', level: 90, category: 'Operations' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
      },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 1,
        ease: 'easeOut',
        delay: prefersReducedMotion ? 0 : 0.2,
      },
    }),
  };

  return (
    <section className="py-16 px-6 bg-black" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
        >
          <p className="text-emerald-400 font-semibold uppercase tracking-wide mb-2">
            What I Bring to the Table
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            A diverse toolkit spanning development, design, data science, and operations.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition-colors duration-300"
              variants={itemVariants}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                <span className="text-emerald-400 text-sm font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"
                  custom={skill.level}
                  variants={barVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
              </div>
              <p className="text-gray-500 text-xs mt-2">{skill.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
