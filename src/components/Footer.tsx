import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <h3 className="text-xl font-bold tracking-tight text-foreground mb-2">
          {personalInfo.name}
        </h3>
        <p className="text-foreground/70 text-sm mb-6 text-center">
          Software Engineering Intern Candidate
        </p>
        
        <div className="flex gap-6 mb-8">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
        
        <p className="text-foreground/50 text-xs">
          &copy; {new Date().getFullYear()} Nirmani Gamage. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
