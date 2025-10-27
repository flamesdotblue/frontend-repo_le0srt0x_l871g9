import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'MySQL'];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About</h2>
          <p className="mt-4 text-slate-600 text-lg">
            I’m Sam, a passionate tech enthusiast exploring AI, data, and web development. I love crafting clean
            interfaces and scalable solutions that turn ideas into delightful experiences.
          </p>
          <p className="mt-3 text-slate-600">
            This site brings together a few projects, my core skills, and a playful mini assistant to keep things fun.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-full bg-green-50 text-green-700 border border-green-200 text-sm font-medium shadow-sm"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 text-slate-600">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <p className="font-semibold text-slate-900">Frontend</p>
              <p className="text-sm mt-1">React, Tailwind, animations, accessibility.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <p className="font-semibold text-slate-900">Data & AI</p>
              <p className="text-sm mt-1">Python, data workflows, experimentation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
