import { motion } from 'framer-motion';
import { ScrollText, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 1,
    name: "Introduction to Cloud Computing",
    issuer: "Swayam NPTEL",
    date: "2024",
    credentialId: "",
    url: "https://drive.google.com/file/d/1gFd6GhtnJRD7VKUFPjhpHNNRiNL-ccwc/view?usp=sharing",
  
  },
  {
    id: 2,
    name: "Multi-core Computer Architecture",
    issuer: "Swayam NPTEL",
    date: "2023",
    credentialId: "",
    url: "https://drive.google.com/file/d/1sL3pmkbNIZBwG2jCd5KvzBM-CU_k4NSN/view?usp=drive_link",
  },
  {
    id: 3,
    name: "React Native",
    issuer: "Coursera-Meta",
    date: "2024",
    credentialId: "CKA-2022",
    url: "https://drive.google.com/file/d/1rC6DF5J9WUWd_W1q7giiPAmCWxRo91fu/view?usp=sharing",
  }
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 px-6 relative">
      {/* Section Divider */}
      <div className="section-divider w-full max-w-xl mx-auto mb-20" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary/80 uppercase tracking-[0.3em] text-sm mb-4">
            Sacred Scrolls
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient-gold">
            Certificates
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, rotateX: -15 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group cursor-pointer"
            >
              <div className="card-medieval rounded-xl p-6 relative overflow-hidden hover:glow-gold transition-all duration-500">
                {/* Scroll Icon Background */}
                <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <ScrollText className="w-16 h-16" />
                </div>

                {/* Decorative Seal */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <ScrollText className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                  </div>

                  <h3 className="font-serif text-lg text-gradient-gold mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-xs text-primary/60 font-mono">
                      {cert.credentialId}
                    </span>

                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${cert.name} certificate`}
                        className="text-primary/40 group-hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <ExternalLink className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
