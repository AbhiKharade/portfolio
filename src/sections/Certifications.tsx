import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolioData';
import { Award } from 'lucide-react';

export default function CertificationsAchievements() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        
        {/* Certifications */}
        <div className="mb-24">
          <SectionHeading title="Certifications" subtitle="Professional courses and specializations I have completed" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={cert.image} alt={cert.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 z-20 bg-primary/90 p-1.5 rounded-full text-white shadow-lg">
                    <Award size={18} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white mb-1 group-hover:text-primary transition-colors line-clamp-2">{cert.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{cert.issuer}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-primary font-medium">{cert.date}</p>
                    {'link' in cert && cert.link && (
                      <a
                        href={cert.link as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1 rounded-full transition-colors cursor-pointer"
                      >
                        View PDF
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
