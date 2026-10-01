import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse mix-blend-multiply dark:mix-blend-lighten" />
      
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-foreground text-sm font-medium mb-4 border border-border">
              Hi, I'm Nirmani.
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              I build software that <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                solves real problems.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mb-4">
              {personalInfo.title}
            </h2>
            <p className="text-foreground/70 max-w-xl text-lg leading-relaxed">
              {personalInfo.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a 
              href={personalInfo.resumePath}
              className="px-6 py-3 bg-secondary text-foreground border border-border rounded-lg font-medium hover:bg-secondary/80 transition-colors flex items-center gap-2"
              download
            >
              Download CV
              <Download size={18} />
            </a>
            <div className="flex items-center gap-4 ml-auto md:ml-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-3 bg-secondary border border-border rounded-lg text-foreground hover:text-accent transition-colors" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-secondary border border-border rounded-lg text-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl bg-secondary/50 border border-border p-8 shadow-2xl backdrop-blur-sm overflow-hidden">
            {/* Window controls */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            
            {/* Code Content */}
            <pre className="text-sm font-mono text-foreground/80 overflow-x-auto">
              <code className="language-javascript">
                <span className="text-purple-500 dark:text-purple-400">const</span>{" "}
                <span className="text-blue-500 dark:text-blue-400">nirmani</span> = {"{\n"}
                {"  "}role: <span className="text-green-600 dark:text-green-400">"Software Engineer"</span>,{"\n"}
                {"  "}stack: [<span className="text-green-600 dark:text-green-400">"React"</span>, <span className="text-green-600 dark:text-green-400">"Node.js"</span>, <span className="text-green-600 dark:text-green-400">"MongoDB"</span>],{"\n"}
                {"  "}interests: [<span className="text-green-600 dark:text-green-400">"AI"</span>, <span className="text-green-600 dark:text-green-400">"DevOps"</span>, <span className="text-green-600 dark:text-green-400">"Cloud"</span>]{"\n"}
                {"};"}
              </code>
            </pre>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-background border border-border shadow-lg rounded-xl p-4 flex items-center gap-3 max-w-[200px]"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-xs font-medium text-foreground">
                Open to Software Engineering Internships
              </span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
