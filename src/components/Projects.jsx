import React from 'react';

const projects = [
  {
    name: 'InterviewPulse',
    desc: 'Mock interview practice with timed questions and analytics.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    url: 'https://github.com/yourname/interviewpulse',
  },
  {
    name: 'DataViz Pro',
    desc: 'Interactive dashboards with real-time charts and filters.',
    stack: ['Vite', 'React', 'D3.js'],
    url: 'https://github.com/yourname/dataviz-pro',
  },
  {
    name: 'DevNotes',
    desc: 'Markdown-powered notes and snippets for developers.',
    stack: ['React', 'LocalStorage', 'CSS'],
    url: 'https://github.com/yourname/devnotes',
  },
  {
    name: 'Craftify UI',
    desc: 'A small component library inspired by minimal aesthetics.',
    stack: ['React', 'Tailwind'],
    url: 'https://github.com/yourname/craftify-ui',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Projects</h2>
            <p className="text-slate-600 mt-2">Selected builds and experiments.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-100/60 blur-3xl group-hover:bg-blue-200/70 transition-colors" />
              <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-2 text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  View on GitHub
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 5.414V13a1 1 0 11-2 0V5.414L9.707 7.707A1 1 0 018.293 6.293l4-4z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
