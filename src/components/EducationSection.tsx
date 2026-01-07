import { Branch } from '@radix-ui/react-dismissable-layer';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Chandigarh University",
    location: "Mohali, Punjab, India",
    year: "2022 - 2026",
    description: "Specialized in Distributed Systems and Machine Learning. Thesis on scalable real-time data processing architectures.",
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 relative">
      {/* Section Divider */}
      <div className="section-divider w-full max-w-xl mx-auto mb-20" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary/80 uppercase tracking-[0.3em] text-sm mb-4">
            Knowledge Scrolls
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient-gold">
            Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary glow-gold hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>

                <div className="md:ml-20 card-medieval rounded-xl p-6 md:p-8 hover:glow-gold transition-all duration-500">
                  {/* Decorative Corners */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-xl" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/40 rounded-bl-xl" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-xl" />

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-gradient-gold mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-foreground font-medium">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary/60" />
                      {edu.year}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary/60" />
                      {edu.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
