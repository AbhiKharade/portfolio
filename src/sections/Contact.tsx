import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import { useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(
        'https://portfolio-backend-xj14.onrender.com/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ type: 'error', message: 'Network error. Please make sure the backend server is running.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-900/50">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together?" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-6">Let's build something awesome together!</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm currently looking for new opportunities, internships, and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Email</h4>
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} target="_blank" rel="noreferrer" className="text-lg font-medium hover:text-primary transition-colors">{personalInfo.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Phone</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-lg font-medium hover:text-accent-cyan transition-colors">{personalInfo.phone}</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Location</h4>
                  <p className="text-lg font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary/50 transition-all duration-300 hover:-translate-y-1">
                <Github size={18} />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary/50 transition-all duration-300 hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass p-8 rounded-3xl space-y-6 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                  <input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea id="message" rows={5} value={formData.message} onChange={handleChange} required placeholder="Hello Abhishek, I would like to discuss..." className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
                </div>

                <button disabled={isSubmitting} className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Toast Popup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: status.message ? 1 : 0, y: status.message ? 0 : 50 }}
        className="fixed bottom-8 right-8 z-50 pointer-events-none"
      >
        {status.message && (
          <div className={`px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 ${status.type === 'success' ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
            {status.type === 'success' ? (
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
            )}
            <p className="font-semibold">{status.message}</p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
