import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import Card from './Card';
import Button from './Button';
import Badge from './Badge';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  emoji: string;
  monthlyPrice: number;
  yearlyPrice: number;
  isYearly: boolean;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'accent';
  isPopular?: boolean;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  emoji,
  monthlyPrice,
  yearlyPrice,
  isYearly,
  description,
  features,
  buttonText,
  buttonVariant,
  isPopular = false,
  index
}) => {
  const currentPrice = isYearly ? yearlyPrice : monthlyPrice;
  const priceText = isYearly ? '€/an' : '€/mois';
  const savings = Math.round(((monthlyPrice * 12 - yearlyPrice) / (monthlyPrice * 12)) * 100);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="relative"
    >
      {isPopular && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
        >
          <Badge variant="accent" animate className="shadow-lg">
            Le plus populaire ⭐
          </Badge>
        </motion.div>
      )}

      <Card
        className={cn(
          "h-full relative overflow-hidden",
          isPopular && "border-2 border-accent shadow-xl scale-105"
        )}
        hover
      >
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="text-3xl">{emoji}</div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>

          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <motion.span
                key={currentPrice}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-3xl font-bold text-primary"
              >
                {currentPrice}
              </motion.span>
              <span className="text-gray-600">{priceText}</span>
            </div>

            {isYearly && yearlyPrice > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <Badge variant="success" animate>
                  -{savings}% 🎁
                </Badge>
              </motion.div>
            )}

            {!isYearly && yearlyPrice > 0 && (
              <p className="text-sm text-gray-500">
                ou {yearlyPrice} €/an
              </p>
            )}
          </div>

          <div className="space-y-3">
            {features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                {feature.included ? (
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                )}
                <span
                  className={cn(
                    "text-sm",
                    feature.included ? "text-gray-700" : "text-gray-400"
                  )}
                >
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant={buttonVariant}
              className="w-full"
              size="lg"
            >
              {buttonText}
            </Button>
          </motion.div>
        </div>

        {isPopular && (
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 pointer-events-none" />
        )}
      </Card>
    </motion.div>
  );
};

export default PricingCard;