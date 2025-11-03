import React from 'react';
import { motion } from 'framer-motion';

interface FeatureProps {
  title: string;
  description: string;
  illustration: React.ReactNode;
  reverse?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ title, description, illustration, reverse = false }) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
      <motion.div
        initial={{ x: reverse ? 50 : -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}
      >
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {title}
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </motion.div>

      <motion.div
        initial={{ x: reverse ? -50 : 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className={`${reverse ? 'lg:col-start-1' : ''}`}
      >
        {illustration}
      </motion.div>
    </div>
  );
};

const Features: React.FC = () => {
  const InteractiveIllustration = () => (
    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Niveau 1</span>
            <span className="text-sm font-bold text-primary">85%</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['🎯', '🎮', '📚', '🏆'].map((emoji, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-primary-50 rounded-lg p-4 text-center cursor-pointer hover:bg-primary-100 transition-colors"
              >
                <div className="text-2xl mb-1">{emoji}</div>
                <div className="text-xs text-primary font-medium">Jeu {index + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const VoiceIllustration = () => (
    <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-8">
      <div className="bg-white rounded-xl shadow-lg p-6 text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-4"
        >
          🎙️
        </motion.div>
        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="text-sm text-gray-600 font-medium">Écoute et répète</p>
        </div>
      </div>
    </div>
  );

  const ProgressIllustration = () => (
    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-gray-900">Tes progrès</h4>
            <span className="text-2xl">📈</span>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Vocabulaire', progress: 75, color: 'bg-primary' },
              { label: 'Grammaire', progress: 60, color: 'bg-accent' },
              { label: 'Prononciation', progress: 90, color: 'bg-primary' }
            ].map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-bold text-gray-900">{item.progress}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`${item.color} rounded-full h-2`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <Feature
          title="Une méthode interactive"
          description="Grâce à des exercices illustrés et des mini-jeux, HeyHay transforme l'apprentissage en aventure. Chaque mot appris débloque une histoire, un dialogue ou un nouveau défi linguistique."
          illustration={<InteractiveIllustration />}
        />

        <div className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20">
          <Feature
            title="Des voix et histoires authentiques 🎙️"
            description="Découvre des conversations réelles, des chansons et des extraits culturels enregistrés par des locuteurs natifs. Parce qu'apprendre une langue, c'est aussi plonger dans sa culture."
            illustration={<VoiceIllustration />}
            reverse
          />
        </div>

        <Feature
          title="Suis tes progrès et reste motivé 📈"
          description="Suis ta progression, gagne des badges, relève des défis et découvre combien tu as appris semaine après semaine."
          illustration={<ProgressIllustration />}
        />
      </div>
    </section>
  );
};

export default Features;