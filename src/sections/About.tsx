import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { aboutCards } from '../data/portfolio';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="A little about me" 
          subtitle="Passionate about building full-stack applications and solving real-world problems."
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg dark:prose-invert"
          >
            <p className="text-foreground/80 leading-relaxed">
              I am currently an Information Technology undergraduate at the University of Moratuwa. 
              My journey in software engineering has been driven by a deep curiosity about how systems 
              work and a desire to build applications that genuinely make an impact.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              I specialize in full-stack development, but I am continuously expanding my horizons. 
              Lately, I've been exploring AI-powered features that enhance user experiences, as well as 
              diving into DevOps and cloud technologies to understand how scalable software is deployed and maintained.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              I thrive in environments where I can learn continuously and solve complex problems logically. 
              I am actively seeking internship opportunities where I can contribute to meaningful projects 
              while honing my skills alongside experienced professionals.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {aboutCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={index}
                  variants={item}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-accent/50 transition-colors shadow-sm group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <Icon className="text-foreground/70 group-hover:text-accent transition-colors" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{card.title}</h3>
                  <p className="text-sm text-foreground/60">{card.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
