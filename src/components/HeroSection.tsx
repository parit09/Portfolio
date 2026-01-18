import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden
                 z-20 pointer-events-auto"
    >
      {/* Background Pattern (NON-INTERACTIVE) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 pointer-events-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative pointer-events-none"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-gradient-gold glow-gold relative">
              <div className="absolute inset-2 rounded-full overflow-hidden bg-secondary">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="absolute -inset-4 border border-primary/20 rounded-full animate-spin-slow"
              style={{ animationDuration: '20s' }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left pointer-events-auto"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-primary/80 uppercase tracking-[0.3em] text-sm mb-4"
            >
              Welcome to my realm
            </motion.p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              Parit <span className="text-gradient-gold">Rajput</span>
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12">
              <TypewriterText
                words={[
                  'Software Developer',
                  'Software Engineer',
                  'Full Stack Developer',
                  'Code Warrior',
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={2000}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground max-w-lg leading-relaxed mb-8"
            >
              Forging elegant solutions from the fires of complex problems.
              With sword in one hand and keyboard in the other, I craft digital
              experiences that stand the test of time.
              I have mastered arts like JavaScript, TypeScript, React, Node.js, Java,
              python, c++, C#, and more to build robust and scalable applications.
            </motion.p>

            {/* ACTION BUTTONS (CLICKABLE) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start pointer-events-auto"
            >
              {/* Scroll to Experience */}
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-8 py-3
                           bg-primary text-primary-foreground rounded font-medium
                           hover:bg-primary/90 transition-all duration-300
                           glow-gold cursor-pointer"
              >
                View Quest Log
              </a>

              {/* Email (Guaranteed) */}
              <a
                href="https://mail.google.com/mail/?view=cm&to=paritraj1234@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3
                           border border-primary/50 text-primary rounded font-medium
                           hover:bg-primary/10 transition-all duration-300
                           cursor-pointer"
              >
                Send Raven
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border border-primary/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

