import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu,Command, X, CircleDot, LayoutDashboard, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const navigate = useNavigate();
  
  useEffect(() => {
    // Apply the theme to the document when it changes
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);
  
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      const yOffset = -40; // Offset to leave space above the section
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="sticky top-0 z-50 pt-0 px-4">
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8">
        <div className="flex items-center justify-between w-full rounded-full px-4 py-2 backdrop-blur-md bg-background/80 border border-border shadow-lg">
          {/* Logo on the left */}
          <div className="flex items-center gap-2 min-w-[150px]">
            <Command className="w-5 h-5 text-primary" />
            <span className="font-bold text-base ml-2">CollabLink</span>
          </div>
          {/* Nav links centered (hidden on mobile) */}
          <div className="flex-1 hidden md:flex justify-center">
            <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)} className="flex flex-row items-center gap-2">
              <ToggleGroupItem value="home" className={cn("px-4 py-2 rounded-full transition-colors relative whitespace-nowrap", activePage === 'home' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')} onClick={handleNavClick('home')}>Home</ToggleGroupItem>
              <ToggleGroupItem value="how-it-works" className={cn("px-4 py-2 rounded-full transition-colors relative whitespace-nowrap", activePage === 'how-it-works' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')} onClick={handleNavClick('how-it-works')}>How It Works</ToggleGroupItem>
              <ToggleGroupItem value="for-creators" className={cn("px-4 py-2 rounded-full transition-colors relative whitespace-nowrap", activePage === 'for-creators' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')} onClick={handleNavClick('for-creators')}>For Creators</ToggleGroupItem>
              <ToggleGroupItem value="for-agencies" className={cn("px-4 py-2 rounded-full transition-colors relative whitespace-nowrap", activePage === 'for-agencies' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')} onClick={handleNavClick('for-agencies')}>For Agencies</ToggleGroupItem>
              <ToggleGroupItem value="faq" className={cn("px-4 py-2 rounded-full transition-colors relative whitespace-nowrap", activePage === 'faq' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')} onClick={handleNavClick('faq')}>FAQ</ToggleGroupItem>
              <ToggleGroupItem value="pricing" className={cn("px-4 py-2 rounded-full transition-colors relative whitespace-nowrap", activePage === 'pricing' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')} onClick={handleNavClick('pricing')}>Pricing</ToggleGroupItem>
            </ToggleGroup>
          </div>
          {/* Log in button on the right (hidden on mobile) */}
          <div className="hidden md:flex items-center min-w-[100px] justify-end">
            <Button 
              className="bg-orange-500 text-white border border-orange-500 rounded-full px-4 py-2 transition-colors hover:bg-white hover:text-orange-500 whitespace-nowrap"
              onClick={() => navigate("/comingsoon")}
            >Log in</Button>
          </div>
          {/* Mobile menu button on the right (only on mobile) */}
          <button 
            className="md:hidden ml-auto p-3 rounded-2xl text-muted-foreground hover:text-foreground"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              <a 
                href="#home" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'home' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('home')}
              >
                Home
              </a>
              <a 
                href="#how-it-works" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'how-it-works' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('how-it-works')}
              >
                How It Works
              </a>
              <a 
                href="#for-creators" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'for-creators' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('for-creators')}
              >
                For Creators
              </a>
              <a 
                href="#for-agencies" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'for-agencies' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('for-agencies')}
              >
                For Agencies
              </a>
              <a 
                href="#pricing" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'pricing' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('pricing')}
              >
                Pricing
              </a>
              <a 
                href="#faq" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'faq' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('faq')}
              >
                FAQ
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
