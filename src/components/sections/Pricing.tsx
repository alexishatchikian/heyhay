import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Switch from '../ui/Switch';
import PricingCard from '../ui/PricingCard';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      title: 'Plan Découverte',
      emoji: '🆓',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'Idéal pour débuter',
      features: [
        { text: 'Accès à 3 leçons gratuites', included: true },
        { text: 'Mini-jeux de base', included: true },
        { text: 'Pas de suivi de progression', included: false },
        { text: 'Pas de contenu audio', included: false },
      ],
      buttonText: 'Commencer gratuitement',
      buttonVariant: 'secondary' as const,
      isPopular: false,
    },
    {
      title: 'Plan Apprenant',
      emoji: '💛',
      monthlyPrice: 9.99,
      yearlyPrice: 95,
      description: 'Le plus populaire',
      features: [
        { text: 'Accès illimité à toutes les leçons', included: true },
        { text: 'Suivi des progrès', included: true },
        { text: 'Contenu audio natif', included: true },
        { text: 'Défis et récompenses', included: true },
        { text: "Pas d'accès hors-ligne", included: false },
      ],
      buttonText: "S'abonner",
      buttonVariant: 'accent' as const,
      isPopular: true,
    },
    {
      title: 'Plan Premium',
      emoji: '💜',
      monthlyPrice: 14.99,
      yearlyPrice: 145,
      description: 'Pour aller plus loin',
      features: [
        { text: 'Tout le contenu illimité', included: true },
        { text: 'Mode hors-ligne', included: true },
        { text: 'Accès anticipé aux nouvelles leçons', included: true },
        { text: 'Prononciation guidée par IA', included: true },
        { text: 'Support prioritaire', included: true },
      ],
      buttonText: 'Devenir Premium',
      buttonVariant: 'primary' as const,
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Des formules simples pour apprendre à ton rythme{' '}
            <span className="text-primary">💡</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Choisis le plan qui te convient et commence ton voyage dans la langue arménienne dès aujourd'hui.
          </p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              leftLabel="Mensuel"
              rightLabel="Annuel"
              className="mb-8"
            />
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              emoji={plan.emoji}
              monthlyPrice={plan.monthlyPrice}
              yearlyPrice={plan.yearlyPrice}
              isYearly={isYearly}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonVariant={plan.buttonVariant}
              isPopular={plan.isPopular}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-gray-600">
            <strong>Tous nos abonnements peuvent être annulés à tout moment.</strong>
          </p>
          <p className="text-gray-500 text-sm">
            Aucun engagement, tu gardes tes progrès même après la fin d'un plan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;