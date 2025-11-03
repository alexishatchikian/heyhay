import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  funFact: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alexis',
    role: 'Cofondateur & Designer',
    avatar: '👨‍💻',
    funFact: 'Passionné par les cultures du Caucase'
  },
  {
    name: 'Lilit',
    role: 'Cofondatrice & Pédagogue',
    avatar: '👩‍🏫',
    funFact: 'Fait chanter les lettres arméniennes ✨'
  },
  {
    name: 'Armen',
    role: 'Développeur Full-Stack',
    avatar: '👨‍💼',
    funFact: 'Code en arménien occidental'
  },
  {
    name: 'Sona',
    role: 'Linguiste & Contenus',
    avatar: '👩‍🔬',
    funFact: 'Parle 7 langues couramment'
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="text-center h-full" hover>
        <div className="space-y-4">
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center text-4xl"
            >
              {member.avatar}
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-primary font-semibold mb-3">
              {member.role}
            </p>
            <p className="text-gray-600 text-sm italic">
              {member.funFact}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Derrière HeyHay{' '}
            <span className="text-primary">👩‍💻👨‍💻</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une équipe passionnée par la langue arménienne, la pédagogie et la technologie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;