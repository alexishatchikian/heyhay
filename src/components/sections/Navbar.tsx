import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              HeyHay 🇦🇲
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#pricing"
              className="text-primary font-semibold hover:text-primary-600 transition-colors"
            >
              Tarifs
            </a>
            <Button variant="secondary" size="sm">
              Connexion
            </Button>
            <Button variant="primary" size="sm">
              Inscription
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;