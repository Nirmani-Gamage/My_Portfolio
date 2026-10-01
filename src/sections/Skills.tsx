import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/portfolio';

export default function Skills() {
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
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  const renderSkillGroup = (title: string, skillList: string[], isLearning = false) => (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        {title}
        {isLearning && (
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
            Currently Learning
          </span>
        )}
      </h3>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {skillList.map((skill) => (
          <motion.div
            key={skill}
            variants={item}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
              isLearning 
                ? 'bg-secondary/50 border-border/50 text-foreground/70 hover:border-accent/30' 
                : 'bg-background border-border text-foreground hover:border-accent/50 hover:bg-secondary/20 shadow-sm'
            }`}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="Technologies and tools I use to build robust software."
        />
        
        <div className="grid md:grid-cols-2 gap-x-16">
          <div>
            {renderSkillGroup("Frontend", skills.frontend)}
            {renderSkillGroup("Backend", skills.backend)}
            {renderSkillGroup("Database", skills.database)}
          </div>
          <div>
            {renderSkillGroup("Programming Languages", skills.programming)}
            {renderSkillGroup("Tools", skills.tools)}
            {renderSkillGroup("DevOps & Cloud", skills.devops, true)}
          </div>
        </div>
      </div>
    </section>
  );
}
