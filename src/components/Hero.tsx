"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "./AnimatedButton";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="bg-grid"></div>
      <div className="glow-bubble glow-bubble-1"></div>
      <div className="glow-bubble glow-bubble-2"></div>
      
      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: "max(3rem, 6vw)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem" }}
        >
          Welcome to the <br />
          <span className="gradient-text">Future of Work Simulation</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontSize: "1.25rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 3rem auto" }}
        >
          Experience a new standard of hiring, training, and startup building through hyper-realistic AI-driven environments.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ display: "flex", gap: "1.5rem", justifyContent: "center", alignItems: "center" }}
        >
          <a href="#register" style={{ textDecoration: "none" }}>
            <AnimatedButton />
          </a>
          <a href="#phases" className="btn btn-outline" style={{ height: "fit-content" }}>How it works</a>
        </motion.div>
      </div>
    </section>
  );
};
