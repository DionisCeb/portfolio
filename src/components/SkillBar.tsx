import React from 'react';
import { motion } from 'framer-motion';


const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4 slide-block">
    <div className="flex justify-between mb-1">
      <span className="text-white">{name}</span>
      <span className="text-white">{level}%</span>
    </div>
    <div className="w-full h-2 bg-gray-700 rounded">
      <motion.div
        className="h-2 bg-cyan-400 rounded"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
    </div>
  </div>
);


export default SkillBar;
