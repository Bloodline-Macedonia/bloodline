export const container = {
    initial: { },
    enter: { transition: { duration: .5, staggerChildren: 0.2, when: "beforeChildren"} },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };
  
  export const content = {
    initial: { y: 30, opacity: 0 },
    enter: { y: 0, opacity: 1, transition: { duration: .5, staggerChildren: 0.2, when: "beforeChildren" } },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };
  