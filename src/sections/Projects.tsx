import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

// Internal Project Modal component to keep things simple
function ProjectModal({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-background border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-secondary/80 backdrop-blur-sm rounded-full text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors z-10"
          >
            <X size={20} />
          </button>
          
          <div className="overflow-y-auto overflow-x-hidden p-6 sm:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden border border-border">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  {project.status === "building" && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 border border-yellow-500/20">
                      Currently Building
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-accent mb-4">{project.tag}</p>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors text-sm"
                    >
                      <FaGithub size={16} />
                      Source Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-accent rounded-full"></span>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-foreground/80 rounded-md text-xs font-medium border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-accent rounded-full"></span>
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-accent mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {project.note && (
              <div className="mt-8 p-4 bg-accent/5 border border-accent/20 rounded-xl">
                <p className="text-sm text-accent text-center font-medium">{project.note}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent work, showcasing my skills in full-stack development and DevOps."
        />
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-background border border-border overflow-hidden hover:border-accent/50 transition-all shadow-sm hover:shadow-md flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-60" />
                
                {project.status === "building" && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-background/90 text-yellow-600 dark:text-yellow-500 border border-yellow-500/30 backdrop-blur-md shadow-sm">
                      Currently Building
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                   <p className="text-sm font-medium text-accent bg-background/90 px-3 py-1 rounded-lg backdrop-blur-md inline-block border border-border shadow-sm">
                      {project.tag}
                   </p>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm line-clamp-3 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-secondary text-foreground/80 rounded-md text-[11px] font-medium border border-border">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 bg-secondary text-foreground/80 rounded-md text-[11px] font-medium border border-border">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                    View Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    <ExternalLink size={14} className={project.status === "building" ? "text-foreground/50 group-hover:text-white" : ""} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
