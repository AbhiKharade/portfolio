import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Download, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';

const NeuralHeroScene = React.lazy(() => import('../components/NeuralHeroScene'));

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

      {/* Neural Network 3D Scene */}
      <Suspense fallback={null}>
        <NeuralHeroScene />
      </Suspense>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
            Available for Internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-purple to-accent-cyan">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-300 font-medium mb-4"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="flex items-center px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              View Projects <ChevronRight size={20} className="ml-2" />
            </a>
            <a
              href="/resume.pdf"
              download="Abhishek_Kharade_Resume.pdf"
              target="_blank"
              className="flex items-center px-8 py-3 rounded-full glass font-medium hover:bg-white/5 transition-all duration-300"
            >
              <Download size={20} className="mr-2" /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex space-x-6"
          >
            {[
              { icon: Github, href: personalInfo.socials.github, label: 'GitHub' },
              { icon: Linkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`, label: 'Email' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
