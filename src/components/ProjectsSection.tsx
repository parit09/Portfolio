import { motion } from 'framer-motion';
import RotatingCards from './RotatingCards';

const projectsData = [
  {
    id: 1,
    company: 'High frequency Treade Matching Engine',
    role: 'Modulelow-level systems / high-performance backend project',
    description: 'A modular high-frequency matching engine written in C++20, focused on ultra-low latency and high throughput using lock-free data structures and custom memory management',
    tech: ['C++20', 'Python', 'CMake', 'Boost', 'Docker'],
    isSoon: false, 
    link: 'https://github.com/parit09/HFT_core_engine',
  },
  {
    id: 2,
    company: 'Speach to Text using NLP',
    role: 'Full Stack Application',
    description: 'A web application that converts spoken language into written text using advanced NLP techniques.',
    tech: ['Python', 'Flask', 'Django', 'Tailwind', 'NLP Models'],
    isSoon: false,
    link: 'https://speechtotext-nlp-project-2.onrender.com',
  },
  {
    id: 3,
    company: 'Prescripto',
    role: 'Full Stack Application',
    description: 'A online appointment booking system for doctors and patients with real-time notifications, calendar integration, and secure patient records management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB','Tailwind CSS','JWT'],
    isSoon: false,
    link: 'https://github.com/parit09/Prescripto',
  },
  {
    id: 4,
    company: 'RentKaro',
    role: 'Full Stack Application',
    description: 'A comprehensive car rental platform with real-time availability, secure booking, and integrated payment processing.',
    tech: ['Java', 'Spring Boot', 'Maven', 'MySQL', 'JPA','Tailwind CSS','JWT'],
    isSoon: false, 
    link: 'https://github.com/parit09/Car-Rental-System',
  },
  {
    id: 5,
    company: 'A Chess game with custom chess engine',
    role: 'Full Stack Application',
    description: 'Comming Soon',
    tech: [],
    isSoon: false, 
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
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
            Conquered Realms
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient-gold">
            Projects
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <RotatingCards cards={projectsData} type="project" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          Click on cards to explore projects and use View Project to open links
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;


