import { easeIn, motion } from "framer-motion";

const PageTransition = ({ children, up }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: up ? 50 : -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: up ? -50 : 50 }}
      transition={{ duration: 0.5, ease: up ? "easeInOut" : "easeIn" }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
