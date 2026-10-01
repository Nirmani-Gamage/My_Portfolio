import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

export default function BuildingInPublic() {
  return (
    <section id="building" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-foreground rounded-3xl border border-border p-8 md:p-12 shadow-2xl relative overflow-hidden text-background">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 mix-blend-screen" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Building in Public
            </h2>
            <p className="text-background/80 text-lg leading-relaxed mb-8">
              I enjoy learning by building — experimenting with new technologies, developing projects, and continuously improving my engineering skills. Every project is a stepping stone to becoming a better software engineer.
            </p>
            
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              <FaGithub size={20} />
              View My GitHub
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
