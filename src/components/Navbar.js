import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navbarVariants = {
  init: {
    y: "-30vh",
  },
  anim: {
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      straggerChildren: 0.5,
    },
  },
};

const titleVariants = {
  init: {
    x: -1000,
    opacity: 0,
  },

  anim: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 3,
      type: "spring",
      stiffness: 100,
    },
  },
};

const linksVariants = {
  init: {
    x: 1000,
    opacity: 0,
  },

  anim: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1,
      type: "spring",
      stiffness: 100,
    },
  },
};

const Navbar = () => {
  return (
    <motion.nav
      variants={navbarVariants}
      initial="init"
      animate="anim"
      className="navbar"
    >
      <motion.h1 variants={titleVariants}>The Dojo Blog</motion.h1>
      <motion.div variants={linksVariants} className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
