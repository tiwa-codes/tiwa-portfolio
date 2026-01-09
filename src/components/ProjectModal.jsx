import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prefersReducedMotion = useMemo(() => 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  // Focus trap and keyboard handling
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Focus first element
    setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 100);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const images = project.screenshots || [project.image];
  const currentImage = images[currentImageIndex];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.95,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.95,
      y: prefersReducedMotion ? 0 : 20,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          ref={modalRef}
          className="relative w-full max-w-4xl bg-slate-900 rounded-xl shadow-2xl my-8"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            ref={firstFocusableRef}
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 text-2xl text-white hover:text-emerald-400 transition-colors duration-200 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* Image Gallery */}
          <div className="relative">
            <img
              src={currentImage}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-64 sm:h-96 object-cover rounded-t-xl"
            />
            
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                  aria-label="Next image"
                >
                  ›
                </button>
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentImageIndex
                          ? 'w-8 bg-emerald-400'
                          : 'w-2 bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            <h2
              id="modal-title"
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
            >
              {project.title}
            </h2>

            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech stack */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={`${tech}-${index}`}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4 pt-4 border-t border-gray-700">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  View Demo
                </a>
              )}
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
