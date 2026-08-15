import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { aboutData, personalInfo } from '../data/portfolioData';
import { BookOpen, Heart, Lightbulb, Target } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="About Me" subtitle="Get to know me and my journey in AI & Data Science" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mb-10 mx-auto max-w-sm lg:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent-cyan rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg"></div>
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="relative z-10 rounded-3xl object-cover w-full h-[400px] border border-slate-700 shadow-2xl"
              />
            </div>

          </motion.div>

          {/* Timeline Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-lg text-gray-300 mb-8 leading-relaxed">
              {personalInfo.summary}
            </div>

            <motion.div variants={item} className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-lg text-primary">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-400">{aboutData.education}</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-accent-cyan/20 rounded-lg text-accent-cyan">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-gray-400">{aboutData.passion}</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-accent-purple/20 rounded-lg text-accent-purple">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interests</h3>
                <p className="text-gray-400">{aboutData.interests}</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-secondary/20 rounded-lg text-secondary">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Career Goals</h3>
                <p className="text-gray-400">{aboutData.careerGoals}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
