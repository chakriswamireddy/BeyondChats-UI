import React from 'react'


import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TypingAnim({
  children,
  className,
  duration = 70,
  delay = 0,
  as: Component = "div",
  startOnView = false,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length-1) {
        setDisplayedText((prev) => prev + children[i]);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [children, duration, started]);

  return (
    <motion.div
      ref={elementRef}
      className={"  text-xl sm:text-4xl font-bold text-purple-400  leading-[5rem] tracking-[-0.02em]"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // style={{
      //   WebkitTextStroke: '2px  #A78BFA  ',
      //   WebkitTextFillColor: 'transparent',
      //   textStroke: '2px gray',
      //   color: 'transparent'
      // }}
    >
      {displayedText}
    </motion.div>
  );
}
