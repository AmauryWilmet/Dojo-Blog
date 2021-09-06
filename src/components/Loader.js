import { motion } from "framer-motion";

const loaderVariants = {
  init: {
    x: 0,
  },
  anim: {
    x: 80,
    borderRadius: ["50% 50%", "2% 50%"],
    rotate: 360,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      className="loader"
      variants={loaderVariants}
      initial="init"
      animate="anim"
    ></motion.div>
  );
};

export default Loader;
