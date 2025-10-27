import React from 'react';

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-xl font-extrabold tracking-tight text-slate-900">
          Craftify
        </a>
        <div className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
        <a
          href="#projects"
          onClick={(e) => handleScroll(e, 'projects')}
          className="md:hidden inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full bg-slate-900 text-white shadow"
        >
          Explore
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
