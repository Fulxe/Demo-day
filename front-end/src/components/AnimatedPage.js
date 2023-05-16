import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: 100 , rotate : 10},
  animate: { opacity: 1, x: 0 , rotate: 0 },
  exit: { opacity: 0, x: -100 , rotate: -10},
  whileHover :{ scale: 1.2 },
  whileTap :{ scale: 1.1 },
  drag:"x",
  dragConstraints:{ left: -100, right: 100 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
