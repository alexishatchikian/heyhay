import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Apprends l'arménien comme jamais auparavant{' '}
              <span className="text-primary">🇦🇲</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              HeyHay rend l'apprentissage de la langue arménienne simple, ludique et immersif.
              Des jeux, des histoires et des défis quotidiens pour progresser à ton rythme —
              que tu sois débutant ou déjà avancé.
            </p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="primary" size="lg" className="text-lg">
                Découvrir
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center space-y-6">
                <div className="text-6xl animate-bounce-slow">📱</div>
                <div className="space-y-4">
                  <div className="flex justify-center space-x-3">
                    <motion.span
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                      className="text-3xl text-primary font-bold"
                    >
                      Ա
                    </motion.span>
                    <motion.span
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      className="text-3xl text-accent font-bold"
                    >
                      Բ
                    </motion.span>
                    <motion.span
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      className="text-3xl text-primary font-bold"
                    >
                      Գ
                    </motion.span>
                    <motion.span
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                      className="text-3xl text-accent font-bold"
                    >
                      Դ
                    </motion.span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    Apprentissage interactif
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;