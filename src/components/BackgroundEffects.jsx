import React, { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check for mobile/small screens
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile) {
      setShouldRender(false);
    }

    // Listen for resize events
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setShouldRender(!mobile && !reducedMotion);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className="circles" aria-hidden="true">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </div>
  );
};

export default BackgroundEffects;
