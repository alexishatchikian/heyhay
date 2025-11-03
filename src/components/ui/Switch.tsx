import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  leftLabel: string;
  rightLabel: string;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  onCheckedChange,
  leftLabel,
  rightLabel,
  className
}) => {
  return (
    <div className={cn("flex items-center justify-center space-x-4", className)}>
      <span className={cn("font-medium", !checked ? "text-primary" : "text-gray-500")}>
        {leftLabel}
      </span>

      <button
        onClick={() => onCheckedChange(!checked)}
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2",
          checked ? "bg-primary" : "bg-gray-300"
        )}
      >
        <motion.span
          layout
          className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-200"
          animate={{
            x: checked ? 28 : 4
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        />
      </button>

      <span className={cn("font-medium", checked ? "text-primary" : "text-gray-500")}>
        {rightLabel}
      </span>
    </div>
  );
};

export default Switch;