export const containerVarient = {
  hidden: {
    x: "-100vw",
    // x: 0,
    // opacity: 0,
  },
  visible: {
    x: 0,
    // opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      type: "spring",
      stiffness: 120,
      //   when: "afterChildren"
      when: "beforeChildren",
    },
  },
};

export const parahVarient = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "100px" : direction === "right" ? "-100px" : 0,
      y: direction === "up" ? "100px" : direction === "down" ? "-100px" : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
      }
    },
  };
};
