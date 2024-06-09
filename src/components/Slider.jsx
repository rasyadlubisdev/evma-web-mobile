import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Slider = (props) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.offsetWidth - carousel.current.scrollWidth);
  }, []);

  return (
    <motion.div
      style={{ display: "flex" }}
      drag="x"
      dragConstraints={{ right: 0, left: width }}
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
    >
      {props.children}
    </motion.div>
  );
};

export default Slider;
