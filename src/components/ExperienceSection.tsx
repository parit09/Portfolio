import { motion } from 'framer-motion';
import RotatingCards from './RotatingCards';

const experienceData = [
  {
    id: 1,
    company: 'Morgan Stanley',
    role: 'Technology Apprentice',
    description: 'Worked on development of scalable microservices architecture serving millions of users. Established best practices for code quality and deployment pipelines.',
    tech: ['Angular', 'Tailwind CSS', 'C#', 'Python', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
    isSoon: false,
  },
  {
    id: 2,
    company: 'Coming Soon',
    role: '',
    description: '',
    tech: [],
    isSoon: true,
  },
  {
    id: 3,
    company: 'Coming Soon',
    role: '',
    description: '',
    tech: [],
    isSoon: true,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen py-20 px-6 relative">
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
            Battle History
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient-gold">
            Work Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <RotatingCards cards={experienceData} type="experience" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          Click on cards to rotate through experiences
        </motion.p>
      </div>
    </section>
  );
};

export default ExperienceSection;
