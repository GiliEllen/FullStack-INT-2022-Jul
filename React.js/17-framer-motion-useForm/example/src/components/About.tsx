import React from "react";
import { motion } from "framer-motion";

const paragraphVarient = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      mass: 8,
      damping: 8,
    },
  },
};

const hoverVariant = {
  hover: {
    //   scale: [1.1,1,1.1,1,1.1,1],
    scale: 1.1,
    textShadow: "0px 0px 8px black",
    boxShadow: "0px 0px 8px black",
    transition: {
      duration: 0.3,
      repeatType: "reverse",
    },
  },
};

const About = () => {
  return (
    <motion.div animate={{}}>
      <motion.h2
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
      >
        ABOUT
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vero
        nesciunt quis quo natus dolorum laborum consectetur non optio temporibus
        totam veniam nihil, commodi placeat sequi veritatis. Doloremque, ut
        perferendis.
      </motion.p>
      <motion.p variants={paragraphVarient} initial="hidden" animate="visible">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vero
        nesciunt quis quo natus dolorum laborum consectetur non optio temporibus
        totam veniam nihil, commodi placeat sequi veritatis. Doloremque, ut
        perferendis.
      </motion.p>
      <motion.button
        style={{
          border: "1px solid black",
          backgroundColor: "inherit",
          padding: "15px 30px",
        }}
        // variants={hoverVariant}
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px black",
          boxShadow: "0px 0px 8px black",
          transition: {
            duration: 0.3,
           repeatType: "reverse",
           repeat: Infinity
          },
        }}
      >
        TEST
      </motion.button>
    </motion.div>
  );
};
// const About = () => {
//   return (
//     <motion.div
//     animate={{rotateZ: 180, marginTop: "200px"}}
//     >
//       <motion.h2
//         // animate={{ fontSize: "20px", color: "#ff2994", x: "100px", y: "100px" }}
//       >
//         ABOUT
//       </motion.h2>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vero
//         nesciunt quis quo natus dolorum laborum consectetur non optio temporibus
//         totam veniam nihil, commodi placeat sequi veritatis. Doloremque, ut
//         perferendis.
//       </p>
//       <motion.button animate={{ scale: 1.5 }}>TEST</motion.button>
//     </motion.div>
//   );
// };

export default About;
