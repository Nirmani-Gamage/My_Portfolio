import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionHeading 
            title="Let's build something together." 
            subtitle="I'm currently looking for Software Engineering Internship opportunities."
          />
          
          <div className="grid lg:grid-cols-5 gap-12 mt-12">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                If you're looking for a motivated developer who enjoys learning and building real software, I'd love to connect.
              </p>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-secondary/30 hover:bg-secondary hover:border-accent/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={20} className="text-foreground/70 group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email Me</h4>
                    <p className="text-sm text-foreground/60">Let's discuss opportunities</p>
                  </div>
                </a>
                
                <a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-secondary/30 hover:bg-secondary hover:border-accent/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaLinkedin size={20} className="text-foreground/70 group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-sm text-foreground/60">Connect professionally</p>
                  </div>
                </a>
                
                <a 
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-secondary/30 hover:bg-secondary hover:border-accent/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaGithub size={20} className="text-foreground/70 group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">GitHub</h4>
                    <p className="text-sm text-foreground/60">View my code</p>
                  </div>
                </a>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-background rounded-3xl border border-border p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-foreground"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-foreground"
                      placeholder="jane@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-foreground resize-none"
                      placeholder="Hi Nirmani, I'd like to discuss an internship opportunity..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-foreground text-background font-medium rounded-xl hover:bg-foreground/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 size={18} />
                        Message Sent
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  {isSubmitted && (
                    <p className="text-sm text-green-500 text-center mt-4">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
