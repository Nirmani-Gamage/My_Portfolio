import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolio';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.name.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-border/50 py-3" 
        : "bg-transparent border-transparent py-5"
    )}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tighter text-foreground">
          Nirmani<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    activeSection === link.name.toLowerCase() ? "text-accent" : "text-foreground/70"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-foreground transition-colors" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-foreground transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-foreground p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg">
          <ul className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block text-base font-medium py-2 transition-colors",
                    activeSection === link.name.toLowerCase() ? "text-accent" : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 pt-4 border-t border-border mt-2">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-foreground p-2 bg-secondary rounded-full">
                <FaGithub size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-foreground p-2 bg-secondary rounded-full">
                <FaLinkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
