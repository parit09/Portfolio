import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sword } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 px-6 relative">
      {/* Section Divider */}
      <div className="section-divider w-full max-w-xl mx-auto mb-20" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center mb-8">
            <Sword className="w-8 h-8 text-primary rotate-45" />
          </div>

          <h2 className="font-serif text-2xl md:text-3xl text-gradient-gold mb-4">
            Ready to Forge Something Great?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Whether you seek a loyal ally for your next quest or wish to discuss the 
            ancient arts of code, my ravens await your message.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {[
              { icon: Github, label: 'GitHub', href: 'https://github.com/parit09' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/parit-rajput-479789255' },
              { icon: Mail, label: 'Email', href: 'mailto:paritraj1234@gmail.com' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 rounded-full bg-secondary border border-border hover:border-primary/50 hover:glow-gold transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-primary" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Parit Rajput. Crafted with honor and TypeScript.
            </p>
            <p className="text-muted-foreground/50 text-xs mt-2">
              "Most of the bugs can be solved with just some sleep."
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
