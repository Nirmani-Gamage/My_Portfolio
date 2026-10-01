import { motion } from 'framer-motion';
import { ArrowRight, Download, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const stack = ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Git", "Docker"];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content (Left side) */}
          <div className="flex flex-col space-y-8 lg:col-span-7 order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-secondary/80 text-foreground text-sm font-medium mb-6 border border-border/50 backdrop-blur-sm">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                Open to Software Engineering Internships
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.1] mb-4">
                Nirmani Gamage
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70 mb-2">
                Software Engineering Intern Candidate
              </h2>
              
              <h3 className="text-lg md:text-xl font-medium text-accent">
                Information Technology Undergraduate @ University of Moratuwa
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-foreground/70 max-w-xl text-lg leading-relaxed">
                I'm an Information Technology undergraduate interested in building full-stack applications, AI-powered software, and modern software engineering solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a 
                href="#projects" 
                className="px-6 py-3.5 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-foreground/10"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a 
                href={personalInfo.resumePath}
                className="px-6 py-3.5 bg-secondary text-foreground border border-border rounded-xl font-medium hover:bg-secondary/80 transition-all active:scale-95 flex items-center gap-2 hover:border-foreground/20"
                download
              >
                Download CV
                <Download size={18} />
              </a>
              <div className="flex items-center gap-3 ml-auto sm:ml-4 mt-4 sm:mt-0 w-full sm:w-auto">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none flex justify-center p-3.5 bg-secondary border border-border rounded-xl text-foreground/80 hover:text-foreground hover:border-foreground/20 transition-all" aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none flex justify-center p-3.5 bg-secondary border border-border rounded-xl text-foreground/80 hover:text-foreground hover:border-foreground/20 transition-all" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Visual Element (Right side) */}
          <div className="lg:col-span-5 order-2 flex flex-col items-center justify-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-[-10%] rounded-full border border-border/50 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-[-20%] rounded-full border border-border/30 border-dashed animate-[spin_90s_linear_infinite_reverse]" />
              
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl" />
              
              {/* The image container */}
              <div className="absolute inset-0 rounded-full border border-border bg-background p-2 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-secondary border border-border/50 relative">
                  <img 
                    src={profileImg} 
                    alt="Nirmani Gamage — Software Engineering Intern Candidate" 
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle inner overlay */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] rounded-full pointer-events-none" />
                </div>
              </div>
            </motion.div>
            
            {/* Secondary Code Visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 md:-bottom-12 -left-4 md:-left-12 bg-background/80 backdrop-blur-md border border-border rounded-xl p-4 shadow-xl hidden sm:block max-w-[260px] z-10"
            >
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/50">
                <Code2 size={14} className="text-accent" />
                <span className="text-xs font-medium text-foreground/70">developer.json</span>
              </div>
              <pre className="text-[10px] md:text-xs font-mono text-foreground/80 leading-relaxed overflow-x-hidden">
                <span className="text-purple-500 dark:text-purple-400">const</span> <span className="text-blue-500 dark:text-blue-400">nirmani</span> = {"{\n"}
                {"  "}role: <span className="text-green-600 dark:text-green-400">"Intern"</span>,{"\n"}
                {"  "}stack: [<span className="text-green-600 dark:text-green-400">"React"</span>, <span className="text-green-600 dark:text-green-400">"Node.js"</span>],{"\n"}
                {"  "}exploring: [<span className="text-green-600 dark:text-green-400">"DevOps"</span>, <span className="text-green-600 dark:text-green-400">"Cloud"</span>]{"\n"}
                {"};"}
              </pre>
            </motion.div>
          </div>
          
        </div>
      </div>
      
      {/* Tech Stack Strip */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-20 border-y border-border/50 bg-secondary/30 py-6"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground/50 whitespace-nowrap">
              Current Stack
            </span>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-8 gap-y-4">
              {stack.map((tech, i) => (
                <div key={tech} className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors cursor-default">
                    {tech}
                  </span>
                  {i < stack.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-border md:hidden lg:block ml-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
