import React from 'react';
import {Command} from 'lucide-react';


const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 min-w-[150px]">
            <Command className="w-5 h-5 text-primary" />
            <span className="font-bold text-base ml-2">CollabLink</span>
          </div>
        <nav>
          <ul className="flex flex-wrap gap-6 text-muted-foreground text-sm">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
            <li><a href="#for-creators" className="hover:text-primary transition-colors">For Creators</a></li>
            <li><a href="#for-agencies" className="hover:text-primary transition-colors">For Agencies</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
