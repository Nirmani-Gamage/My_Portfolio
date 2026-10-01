import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/portfolio';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and relevant coursework."
        />
        
        <div className="max-w-4xl mx-auto mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-3xl border border-border p-8 md:p-12 shadow-sm relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-20 h-20 rounded-2xl bg-secondary border border-border flex items-center justify-center shrink-0">
                <GraduationCap size={40} className="text-foreground/80" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {education.institution}
                </h3>
                <p className="text-lg font-medium text-accent mb-4">
                  {education.degree}
                </p>
                
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/60 mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    {education.faculty}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    {education.period}
                  </span>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.relevantAreas.map((area) => (
                      <span key={area} className="px-3 py-1.5 bg-secondary text-foreground/80 rounded-lg text-xs font-medium border border-border">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
