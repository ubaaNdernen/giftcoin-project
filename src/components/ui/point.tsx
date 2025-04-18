import { motion } from "framer-motion";

interface AnimatedPointsProps {
  points: number;
  animate: boolean;
}

export const AnimatedPoints: React.FC<AnimatedPointsProps> = ({
  points,
  animate,
}) => {
  return (
    <div className="relative">
      {/* Orbiting rings */}
      <motion.div
        className="absolute inset-0 border-2 border-indigo-500/30 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 border-2 border-purple-500/20 rounded-full"
        animate={{
          rotate: -360,
          scale: [1.1, 1.2, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Points button */}
      <motion.div
        className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full px-6 py-2 shadow-lg shadow-indigo-500/20"
        animate={{
          scale: animate ? [1, 1.1, 1] : 1,
          boxShadow: animate
            ? [
                "0 10px 15px -3px rgb(99 102 241 / 0.2)",
                "0 15px 20px -3px rgb(99 102 241 / 0.3)",
                "0 10px 15px -3px rgb(99 102 241 / 0.2)",
              ]
            : "0 10px 15px -3px rgb(99 102 241 / 0.2)",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="relative flex items-center space-x-2">
          <span className="text-white font-bold">{points}</span>
          <span className="text-white/90">Points</span>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-white/10 rounded-full blur-md"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};
