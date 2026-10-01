import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { journey } from '../data/portfolio';

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="My Development Journey" 
          subtitle="How I am growing as a software engineer and the path I am taking."
        />
        
        <div className="max-w-3xl mx-auto mt-16">
          <div className="relative border-l border-border/60 ml-4 md:ml-6 space-y-12">
            {journey.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline node */}
                <div className="absolute -left-[5px] md:-left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-background border-2 border-accent shadow-[0_0_0_4px_var(--background)] z-10" />
                
                <div className="bg-secondary/20 rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <span className="text-sm font-medium text-accent block mb-4">
                    {item.subtitle}
                  </span>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  {item.focus.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.focus.map((focusItem) => (
                        <span key={focusItem} className="px-2.5 py-1 bg-background text-foreground/80 rounded border border-border text-xs font-medium">
                          {focusItem}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
