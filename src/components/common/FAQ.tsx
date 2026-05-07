import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SECTIONS = [
  {
    title: 'General',
    questions: [
      { q: 'What is IVO?', a: 'IVO is a digital token designed to support a modern blockchain ecosystem focused on real utility, scalability, transparency, and Web3 integration.' },
      { q: 'What is the mission of the IVO project?', a: 'The mission of IVO is to simplify access to blockchain technology while building a sustainable, transparent, and community-driven ecosystem.' },
      { q: 'Which blockchain is IVO built on?', a: 'IVO is built on institutional-grade blockchain infrastructure designed for high throughput and security.' },
    ]
  },
  {
    title: 'Utility & Ecosystem',
    questions: [
      { q: 'What can the IVO token be used for?', a: 'IVO enables access to premium features, staking rewards, governance participation, and ecosystem payments.' },
      { q: 'Does IVO support staking?', a: 'Yes, IVO incorporates advanced staking mechanisms designed to reward long-term participants with yield-bearing opportunities.' },
    ]
  },
  {
    title: 'Security & Legal',
    questions: [
      { q: 'Is the smart contract audited?', a: 'Security is our priority. We follow industry-leading standards, including multi-stage audits by reputable security firms.' },
      { q: 'Does IVO guarantee profits?', a: 'No. As with any digital asset, the cryptocurrency market involves inherent risks. No investment guarantees profit.' }
    ]
  }
];

export const FAQ = () => {
  const [open, setOpen] = useState<string | null>('General-0');

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {SECTIONS.map((section) => (
        <div key={section.title}>
          <h3 className="text-2xl font-bold mb-6 text-primary">{section.title}</h3>
          <div className="space-y-4">
            {section.questions.map((faq, i) => {
              const id = `${section.title}-${i}`;
              return (
                <div key={id} className="glass-card border border-white/10 overflow-hidden">
                  <button 
                    className="w-full p-6 flex justify-between items-center text-left text-white"
                    onClick={() => setOpen(open === id ? null : id)}
                  >
                    <span className="font-bold text-lg">{faq.q}</span>
                    {open === id ? <ChevronUp className="text-primary" /> : <ChevronDown />}
                  </button>
                  {open === id && (
                    <div className="px-6 pb-6 text-foreground-muted text-white leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
