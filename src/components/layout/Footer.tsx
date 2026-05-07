import { Link } from 'react-router-dom';
import { Twitter, MessageSquare, Github, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-card/40 border-t border-white/5 py-16 px-4">
      <div className="container mx-auto grid md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-extrabold flex items-center gap-2">
            <div className="w-8 h-8 bg-ivo-gradient rounded-lg flex items-center justify-center font-bold">I</div>
            IVO
          </Link>
          <p className="text-foreground-muted text-sm">Institutional-grade IVO ecosystem. Built for transparency, speed, and long-term yield.</p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Ecosystem</h4>
          <ul className="space-y-4 text-sm text-foreground-muted">
            <li><Link to="/presale" className="hover:text-primary">Presale</Link></li>
            <li><Link to="/staking" className="hover:text-primary">Staking Protocol</Link></li>
            <li><Link to="/dashboard" className="hover:text-primary">Investor Dashboard</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-sm text-foreground-muted">
            <li><Link to="/roadmap" className="hover:text-primary">Roadmap</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><a href="#" className="hover:text-primary">Security Audits</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Socials</h4>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary transition-colors"><Twitter size={18} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary transition-colors"><MessageSquare size={18} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary transition-colors"><Github size={18} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 pt-8 border-t border-white/5 text-center text-sm text-foreground-muted">
        © 2026 IVO Protocol. All rights reserved. Licensed by the IVO Foundation.
      </div>
    </footer>
  );
};

export default Footer;
