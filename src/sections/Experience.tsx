import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { experience, education } from '../data/portfolioData';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 relative bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Section */}
          <div>
            <SectionHeading title="Experience" />
            <div className="relative border-l border-slate-700 ml-3 space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[21px] top-1 p-2 bg-slate-800 border border-slate-600 rounded-full text-primary">
                    <item.icon size={20} />
                  </div>
                  <div className="glass p-6 rounded-2xl relative group hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex justify-between items-start gap-4 mb-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.role}</h3>
                      <div className="flex gap-2 items-center shrink-0">
                        {item.duration && (
                          <div className="text-xs font-semibold text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full mt-1">
                            {item.duration}
                          </div>
                        )}
                        {'letter' in item && item.letter && (
                          <a
                            href={item.letter as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1 rounded-full mt-1 transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            View Letter
                          </a>
                        )}
                      </div>
                    </div>
                    <h4 className="text-lg text-gray-300 mb-4">{item.company}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div id="education">
            <SectionHeading title="Education" />
            <div className="relative border-l border-slate-700 ml-3 space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[21px] top-1 p-2 bg-slate-800 border border-slate-600 rounded-full text-accent-purple">
                    <item.icon size={20} />
                  </div>
                  <div className="glass p-6 rounded-2xl relative group hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex justify-between items-start gap-4 mb-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent-purple transition-colors">{item.degree}</h3>
                      {item.duration && (
                        <div className="shrink-0 text-xs font-semibold text-accent-purple bg-accent-purple/10 px-3 py-1 rounded-full mt-1">
                          {item.duration}
                        </div>
                      )}
                    </div>
                    <h4 className="text-lg text-gray-300 mb-2">{item.institution}</h4>
                    {item.cgpa && (
                      <div className="inline-block mb-4 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-200 font-bold">
                        {item.cgpa}
                      </div>
                    )}
                    {item.description && (
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
