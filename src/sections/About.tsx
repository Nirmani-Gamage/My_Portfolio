import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  const focuses = [
    "Full-stack development",
    "AI-powered applications",
    "Real-time systems",
    "DevOps & cloud",
    "Team-based software projects"
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="A little about me" 
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-foreground/80 text-lg leading-relaxed md:text-xl md:leading-relaxed font-medium">
              I'm an Information Technology undergraduate at the University of Moratuwa with a growing focus on software engineering and full-stack development. I enjoy turning ideas into working applications and exploring how modern technologies can solve practical problems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background border border-border rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-accent rounded-full block"></span>
              Current Focus Areas
            </h3>
            <ul className="space-y-4">
              {focuses.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground/80 font-medium">
                  <CheckCircle2 size={20} className="text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
