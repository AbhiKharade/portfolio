import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolioData';
import TiltCard from '../components/TiltCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="Featured Projects" subtitle="A selection of my recent AI and Data Science work" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <TiltCard className="glass rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-shadow duration-300">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500 z-10 mix-blend-overlay"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features list */}
                  <ul className="mb-8 space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent-cyan before:rounded-full before:mr-2">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors">
                      <Github size={16} className="mr-1.5" /> Code
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6 text-lg">Want to see more of my work?</p>
          <a 
            href="https://github.com/AbhiKharade" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-800 text-white font-medium hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 border border-slate-700 hover:border-slate-600 shadow-lg"
          >
            <Github size={20} />
            View Other Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
