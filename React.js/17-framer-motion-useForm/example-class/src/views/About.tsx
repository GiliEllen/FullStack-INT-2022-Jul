import React from "react";
import { motion } from "framer-motion";
import { containerVarient, fadeIn, parahVarient } from "../util/animations/animation";

const About = () => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 1, 1)}
      initial="hidden"
      whileInView="visible"
      transition={{delay: 2}}
    //   viewport={{once: true}}
    >
      <motion.h1
        className="about"
        // animate={{ color: "black", x: 0 }}
        // initial={{ x: "-100vw" }}
        // transition={{ duration: 1, delay: 1, type: "spring", stiffness: 120 }}
      >
        About
      </motion.h1>
      <motion.p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        cupiditate blanditiis, aliquam excepturi dolore culpa explicabo at
        beatae molestias provident deserunt, deleniti numquam minima expedita
        tempora vitae fugiat consectetur quam.
      </motion.p>
      <motion.p variants={parahVarient}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        cupiditate blanditiis, aliquam excepturi dolore culpa explicabo at
        beatae molestias provident deserunt, deleniti numquam minima expedita
        tempora vitae fugiat consectetur quam.
      </motion.p>
    </motion.div>
  );
};

export default About;
