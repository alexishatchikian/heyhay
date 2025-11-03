import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
    { name: 'Conditions', href: '#terms' },
    { name: 'Politique de confidentialité', href: '#privacy' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-accent mb-2">
              HeyHay 🇦🇲
            </h3>
            <p className="text-gray-400 text-sm">
              L'arménien accessible à tous
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-6">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 HeyHay – Fait avec{' '}
            <span className="text-accent">💜</span>{' '}
            entre la France et l'Arménie
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;