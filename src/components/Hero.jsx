import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleExplore = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Subtle gradient overlay that doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-start justify-center min-h-[70vh]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold mb-4">
          Craft your logic. Shape your vision.
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
          Craftify
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600 text-lg">
          A modern developer portfolio showcasing projects, skills, and a friendly mini AI assistant.
        </p>
        <div className="mt-8">
          <button onClick={handleExplore} className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 transition-transform hover:scale-[1.02]">
            Explore Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
