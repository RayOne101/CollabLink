import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { value: 'home', label: 'Home' },
  { value: 'how-it-works', label: 'How It Works' },
  { value: 'for-creators', label: 'For Creators' },
  { value: 'for-agencies', label: 'For Agencies' },
  { value: 'faq', label: 'FAQ' },
  { value: 'pricing', label: 'Pricing' },
];

const AnimatedHeader = () => {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const navigate = useNavigate();

  useEffect(() => {
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
      element.scrollIntoView({ behavior: 'smooth' });
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
    <motion.div
      className="sticky top-0 z-50 pt-8 px-4"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
        {/* Logo always visible */}
        <div className="p-3 flex items-center">
          <Logo />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <motion.nav
          className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg flex items-center gap-2">
            <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
              {navLinks.map((item) => (
                <motion.div
                  key={item.value}
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="relative"
                >
                  <ToggleGroupItem
                    value={item.value}
                    className={cn(
                      'px-4 py-2 rounded-full transition-colors relative',
                      activePage === item.value
                        ? 'text-accent-foreground bg-accent'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                    onClick={handleNavClick(item.value)}
                  >
                    {activePage === item.value && (
                      <motion.span
                        layoutId="nav-active-bg"
                        className="absolute inset-0 rounded-full bg-accent z-0"
                        style={{ zIndex: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        aria-hidden
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </ToggleGroupItem>
                </motion.div>
              ))}
            </ToggleGroup>
          </div>
        </motion.nav>

        {/* Desktop theme toggle and login */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full px-3 py-2">
            <Moon size={18} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch
              checked={!isDarkMode}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-primary"
            />
            <Sun size={18} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <div className="rounded-2xl">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={() => navigate('/login')}
            >
              Log in
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-center mb-2">
                <Logo />
              </div>
              {navLinks.map((item) => (
                <a
                  key={item.value}
                  href={`#${item.value}`}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    activePage === item.value
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  onClick={handleNavClick(item.value)}
                >
                  {item.label}
                </a>
              ))}
              {/* Add theme toggle for mobile */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <div className="flex items-center gap-2">
                  <Moon size={16} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Switch
                    checked={!isDarkMode}
                    onCheckedChange={toggleTheme}
                    className="data-[state=checked]:bg-primary"
                  />
                  <Sun size={16} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimatedHeader; 