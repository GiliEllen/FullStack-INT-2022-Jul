export const fadeIn = (direction:string, type:string, delay:number, duration:number, children?:string) => {
    return {
        hidden: {
          x: direction === 'left' ? '100px' : direction === 'right' ? '-100px' : 0,
          y: direction === 'up' ? '100px' : direction === 'down' ? '-100px' : 0,
          opacity: 0,
        },
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: 'easeOut',
            when: children === "before" ? "beforeChildren" : children === "after" ? "afterChildren" : "",
            staggerChildren: children  ? 0.5 :  0
          },
        },
      };
};
