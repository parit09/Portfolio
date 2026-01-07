import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const achievements = [
  {
    id: 1,
    icon: Medal,
    title: "Vedic Maths Olympiad",
    description: "Bronze Medalist in National Level Competition",
    year: "2020",
  },
  {
    id: 2,
    icon: Trophy,
    title: "Codeforces",
    description: "1200+ rating on codeforces",
    year: "",
  },
  {
    id: 3,
    icon: Trophy,
    title: "Leetcode",
    description: "1400+ rating on leetcode",
    year: "",
  },
  {
    id: 4,
    icon: Star,
    title: "Code Chef",
    description: "2 star Code on code chef",
    year: "",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 px-6 relative">
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
            Trophies of War
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient-gold">
            Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="card-medieval rounded-xl p-6 h-full text-center relative overflow-hidden hover:glow-gold transition-all duration-500">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4 relative"
                >
                  <achievement.icon className="w-8 h-8" />
                  <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-30" />
                </motion.div>

                <h3 className="font-serif text-lg text-gradient-gold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {achievement.description}
                </p>
                <span className="text-xs text-primary/60 uppercase tracking-wider">
                  {achievement.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
