import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onOpenModal }) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="group relative max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-2"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      onClick={() => onOpenModal(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenModal(project);
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          src={project.image}
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-2 right-2 bg-emerald-400/90 px-2 py-1 rounded-full text-xs font-semibold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to view
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500 mb-3">
          {project.title}
        </h5>
        <p className="font-normal text-sm sm:text-base text-gray-300 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="px-4 pb-4 flex flex-wrap gap-2">
        {project.technologies?.slice(0, 3).map((tag, index) => (
          <span
            key={`${project.title}-${tag}-${index}`}
            className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30"
          >
            {tag}
          </span>
        ))}
        {project.technologies?.length > 3 && (
          <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
