import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SECTIONS = [
  {
    title: 'General',
    questions: [
      { q: 'What is IVO?', a: 'IVO is a next-generation digital asset designed to power a scalable and community-driven Web3 ecosystem. Built with a strong focus on utility, transparency, and long-term sustainability, IVO aims to bridge innovative blockchain technology with real-world applications.' },
      { q: 'What is the vision behind IVO?', a: 'The vision of IVO is to create a modern decentralized ecosystem where users have access to secure digital tools, transparent financial interactions, and community-powered governance. IVO is focused on building sustainable utility rather than short-term hype.' },
      { q: 'What makes IVO different from other tokens?', a: 'IVO is designed around long-term ecosystem growth, real utility, and strategic scalability. Unlike speculative projects, IVO focuses on practical use cases, community engagement, and a transparent growth strategy.' },
      { q: 'What blockchain is IVO built on?', a: 'IVO is built on a secure and scalable blockchain infrastructure designed to support fast transactions, ecosystem expansion, and future integrations.' }
    ]
  },
  {
    title: 'Utility & Ecosystem',
    questions: [
      { q: 'What is the utility of the IVO token?', a: 'The IVO token is intended to play a central role within the ecosystem and may be used for access to premium features, staking opportunities, governance participation, community rewards, ecosystem payments, and future Web3 integrations.' },
      { q: 'Does IVO support staking?', a: 'Yes. IVO plans to implement staking mechanisms that reward long-term holders and active ecosystem participants, strengthening ecosystem stability.' },
      { q: 'What benefits do IVO holders receive?', a: 'IVO holders may gain access to early product access, community reward programs, governance rights, exclusive events, and potential platform incentives.' }
    ]
  },
  {
    title: 'Tokenomics & Security',
    questions: [
      { q: 'Is there a long-term roadmap?', a: 'Yes. IVO is built with a long-term development strategy focused on ecosystem expansion, strategic partnerships, technology development, and increased adoption.' },
      { q: 'Will the token supply be limited?', a: 'Yes. IVO is designed with a fixed maximum supply model intended to support scarcity, ecosystem balance, and sustainable token economics.' },
      { q: 'Is there a burn mechanism?', a: 'IVO may implement strategic burn mechanisms over time to optimize token circulation and support long-term ecosystem health.' },
      { q: 'How does IVO prioritize security?', a: 'Security is a core priority. The project follows industry best practices, including smart contract security standards, continuous infrastructure monitoring, and strategic risk management.' }
    ]
  },
  {
    title: 'Community & Legal',
    questions: [
      { q: 'Is IVO community-driven?', a: 'Absolutely. Community participation is essential. The project values transparency, open communication, and long-term engagement with its supporters.' },
      { q: 'Will IVO be listed on exchanges?', a: 'IVO aims to expand accessibility through strategic listings on both decentralized and centralized exchanges as the ecosystem grows.' },
      { q: 'How can I stay updated?', a: 'You can follow IVO through official channels: Website, X (Twitter), Telegram, Discord, and Medium.' },
      { q: 'Is IVO a financial investment?', a: 'IVO is a utility-focused digital asset designed for ecosystem participation. Users should always conduct their own research before making financial decisions. Disclaimer: This FAQ is for informational purposes and does not constitute financial advice.' }
    ]
  }
];

export const FAQ = () => {
  const [open, setOpen] = useState<string | null>('General-0');

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {SECTIONS.map((section) => (
        <div key={section.title}>
          <h3 className="text-3xl font-bold mb-8 text-primary">{section.title}</h3>
          <div className="space-y-4">
            {section.questions.map((faq, i) => {
              const id = `${section.title}-${i}`;
              return (
                <div key={id} className="glass-card border border-white/10 overflow-hidden">
                  <button 
                    className="w-full p-6 flex justify-between items-center text-left text-white hover:bg-white/5 transition-colors"
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
