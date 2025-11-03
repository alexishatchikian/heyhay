import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Mission: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            L'arménien accessible à tous{' '}
            <span className="text-primary">🌍</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Notre mission : rendre la langue et la culture arméniennes vivantes et à la portée de chacun.
            Que tu apprennes pour parler avec ta famille, voyager ou reconnecter avec tes racines,
            HeyHay t'accompagne pas à pas.
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button variant="primary" size="lg">
              Commencer maintenant
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;