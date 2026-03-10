"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const ScrollWord = ({ 
  children, 
  progress, 
  range, 
  className = "", 
  style = {} 
}: { 
  children: React.ReactNode; 
  progress: MotionValue<number>; 
  range: [number, number];
  className?: string;
  style?: React.CSSProperties;
}) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const blur = useTransform(progress, range, [8, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <span style={{ display: "inline-block", marginRight: "0.25em" }}>
      <motion.span 
        style={{ opacity, filter, y, display: "inline-block", willChange: "opacity, filter, transform", ...style }}
        className={className}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const Slogan = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "start 30%"]
  });

  return (
    <section className="section" ref={containerRef}>
      <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h2 className="slogan-text" style={{ flexWrap: "wrap", justifyContent: "center", display: "flex", textAlign: "center" }}>
          <div>
            <ScrollWord progress={scrollYProgress} range={[0, 0.06]}>We</ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.06, 0.12]}>don't</ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.12, 0.18]}>teach</ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.18, 0.24]}>you</ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.24, 0.30]} className="gradient-text">how</ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.30, 0.36]}>to</ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.36, 0.42]}>work.</ScrollWord>
          </div>
          <div style={{ width: "100%", height: "0" }}></div> {/* Line break equivalent */}
          <div>
            <ScrollWord progress={scrollYProgress} range={[0.42, 0.48]}>We</ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.48, 0.54]}>throw</ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.54, 0.60]}>you</ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.60, 0.66]}>into</ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.66, 0.72]}>the</ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.72, 0.85]} style={{ fontStyle: "italic", fontWeight: 300 }}>fire</ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.85, 0.92]}>of</ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.92, 1.0]}>it.</ScrollWord>
          </div>
        </h2>
      </div>
    </section>
  );
};
