import React, { useEffect, useRef, useState } from 'react';

const initialMessages = [
  { sender: 'bot', text: "Hey there! I'm CraftBot 👋 How can I help today?" },
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  const getReply = (text) => {
    const t = text.trim().toLowerCase();
    if (t.includes('hello') || t.includes('hi')) return "Hey there! I’m CraftBot 👋";
    if (t.includes('projects')) return 'You can check out Sam’s projects below!';
    if (t.includes('who made you')) return 'I was crafted with love by Sam 💻✨';
    return 'Keep going—you got this! Need project ideas or a quick tip?';
  };

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg = { sender: 'user', text };
    const botMsg = { sender: 'bot', text: getReply(text) };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTimeout(() => setMessages((m) => [...m, botMsg]), 300);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  return (
    <div>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg px-5 py-3 font-semibold"
        aria-label="Open CraftBot"
      >
        CraftBot
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-80 sm:w-96 rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          <div className="px-4 py-3 bg-slate-900 text-white text-sm font-semibold">CraftBot</div>
          <div className="h-64 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="p-3 border-t border-slate-200 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Say hello or ask about projects..."
              className="flex-1 rounded-lg border-slate-300 focus:border-green-500 focus:ring-green-500"
            />
            <button onClick={send} className="rounded-lg bg-green-500 hover:bg-green-600 text-white px-3 py-2 text-sm font-semibold">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
