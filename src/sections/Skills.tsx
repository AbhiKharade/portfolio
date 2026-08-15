import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-slate-900/50">
      <div className="container mx-auto px-6">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies and tools I use to build solutions" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 text-primary rounded-lg">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-gradient-to-r from-primary to-accent-cyan h-2 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
