import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Anna',
    age: 26,
    text: "J'ai enfin pu parler avec mes grands-parents en arménien pour la première fois. Merci HeyHay ❤️",
    avatar: '👩‍🦱'
  },
  {
    id: 2,
    name: 'David',
    age: 32,
    text: "J'ai testé plein d'applis, mais HeyHay est la seule qui rend l'apprentissage vraiment vivant et motivant !",
    avatar: '👨‍💼'
  },
  {
    id: 3,
    name: 'Marine',
    age: 19,
    text: 'Les mini-jeux et les histoires me donnent envie de continuer chaque jour.',
    avatar: '👩‍🎓'
  },
  {
    id: 4,
    name: 'Armen',
    age: 45,
    text: 'Mes enfants apprennent enfin la langue de leurs ancêtres avec plaisir.',
    avatar: '👨‍👨‍👦‍👦'
  },
  {
    id: 5,
    name: 'Sona',
    age: 28,
    text: 'La progression est visible dès les premières semaines. Je recommande vivement !',
    avatar: '👩‍🔬'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const visibleTestimonials = 3;

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev + visibleTestimonials >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - visibleTestimonials) : prev - 1
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ce que disent nos utilisateurs{' '}
            <span className="text-primary">💬</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {testimonials.slice(currentIndex, currentIndex + visibleTestimonials).map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="h-full" hover>
                      <div className="text-center space-y-4">
                        <div className="text-4xl">{testimonial.avatar}</div>
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {testimonial.name}, {testimonial.age} ans
                          </h4>
                        </div>
                        <blockquote className="text-gray-600 italic leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="flex justify-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="text-accent text-lg">⭐</span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </motion.button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / visibleTestimonials) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index * visibleTestimonials);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / visibleTestimonials) === index
                    ? 'bg-primary'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;