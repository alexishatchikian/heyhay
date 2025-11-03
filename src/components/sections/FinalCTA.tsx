import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            Prêt à découvrir HeyHay ?{' '}
            <span className="text-accent">🇦🇲</span>
          </h2>

          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Rejoins des centaines d'apprenants qui redécouvrent la langue arménienne
            avec plaisir et simplicité.
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Button variant="accent" size="lg" className="text-lg px-12">
              Découvrir HeyHay
            </Button>

            <div className="flex justify-center items-center space-x-6 text-sm opacity-75">
              <span>✨ Gratuit pendant 7 jours</span>
              <span>📱 Sur iOS et Android</span>
              <span>🎯 Résultats garantis</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;