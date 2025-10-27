import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out!');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact</h2>
        <p className="text-slate-600 mt-2">Let’s collaborate or just say hi.</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                required
                rows={5}
                className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Tell me about your idea..."
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 font-semibold hover:scale-[1.01] transition-transform shadow"
            >
              Send Message
            </button>
          </form>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">Find me on</p>
            <div className="mt-4 flex items-center gap-4">
              <a href="https://github.com/Samarth1518" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:border-slate-300">
                <Github className="w-5 h-5 text-slate-700 group-hover:text-slate-900" />
                <span className="text-slate-700 group-hover:text-slate-900">GitHub</span>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:border-slate-300">
                <Linkedin className="w-5 h-5 text-blue-700" />
                <span className="text-slate-700 group-hover:text-slate-900">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:border-slate-300">
                <Instagram className="w-5 h-5 text-pink-600" />
                <span className="text-slate-700 group-hover:text-slate-900">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
