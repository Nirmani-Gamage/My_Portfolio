import { ArrowRight, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { personalInfo, currentlyLearning } from '../data/portfolio';

export default function BuildingInPublic() {
  return (
    <section id="building" className="py-24 relative overflow-hidden bg-secondary/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Building in Public Card */}
          <div className="bg-foreground rounded-3xl border border-border p-8 md:p-12 shadow-2xl relative overflow-hidden text-background">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 mix-blend-screen" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-3">
                <Code className="text-accent" />
                Building in Public
              </h2>
              <p className="text-background/80 text-lg leading-relaxed mb-8">
                I enjoy learning by building — experimenting with new technologies, developing projects, and continuously improving my engineering skills.
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

          {/* Currently Learning Card */}
          <div className="bg-background rounded-3xl border border-border p-8 md:p-12 shadow-lg relative overflow-hidden group hover:border-accent/30 transition-colors">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-foreground">
                Currently Learning
              </h2>
              <p className="text-foreground/70 text-base mb-8">
                Expanding my software engineering and DevOps toolkit.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {currentlyLearning.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-secondary/50 text-foreground border border-border/50 rounded-xl text-sm font-medium hover:bg-secondary hover:border-border transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
