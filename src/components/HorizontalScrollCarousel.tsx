"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrainCircuit, Briefcase, Users, Lightbulb } from "lucide-react";

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateRange = () => {
      if (trackRef.current) {
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth);
      }
    };

    updateRange();
    
    // Add a ResizeObserver to track container changes better than window resize
    const observer = new ResizeObserver(updateRange);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", updateRange);
    
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateRange);
    };
  }, []);

  // Finish the horizontal slide slightly before the user reaches the end of the vertical section.
  // This causes the final card to pause fully inside the viewport allowing the user to view it
  // completely before the next section begins to scroll into view.
  const x = useTransform(scrollYProgress, [0, 0.85], [0, -scrollRange]);

  return (
    <section ref={targetRef} className="horizontal-scroll-container" style={{ height: "400vh" }}>
      <div className="horizontal-scroll-sticky">
        <div className="container" style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "100%", zIndex: 10, textAlign: "center" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: 800 }}>Core Pillars</h2>
          <p style={{ color: "var(--text-secondary)" }}>Scroll to explore the ecosystem</p>
        </div>
        
        <motion.div ref={trackRef} style={{ x }} className="horizontal-track">
          <div style={{ minWidth: "15vw" }}></div>
          
          {/* Card 1 */}
          <div className="character-card" style={{ background: "linear-gradient(135deg, #ff416c, #ff4b2b)" }}>
            <div className="card-icon-wrapper">
              <BrainCircuit size={140} color="white" strokeWidth={1} />
            </div>
            <div className="card-content">
              <h3 className="card-title">Robotics & AI</h3>
              <p className="card-subtitle">Immerse yourself in cutting-edge concepts taught by leading experts and touch the actual data.</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="character-card" style={{ background: "linear-gradient(135deg, #3a7bd5, #3a6073)" }}>
            <div className="card-icon-wrapper">
              <Briefcase size={140} color="white" strokeWidth={1} />
            </div>
            <div className="card-content">
              <h3 className="card-title">Work Simulation</h3>
              <p className="card-subtitle">Six hyper-realistic weeks managing teams, handling budgets, and navigating corporate challenges.</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="character-card" style={{ background: "linear-gradient(135deg, #11998e, #38ef7d)" }}>
            <div className="card-icon-wrapper">
              <Users size={140} color="white" strokeWidth={1} />
            </div>
            <div className="card-content">
              <h3 className="card-title">Hiring</h3>
              <p className="card-subtitle">Bypass resumes. Partner companies review verified simulations to hire top talent directly.</p>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="character-card" style={{ background: "linear-gradient(135deg, #8E54E9, #4776E6)" }}>
            <div className="card-icon-wrapper">
              <Lightbulb size={140} color="white" strokeWidth={1} />
            </div>
            <div className="card-content">
              <h3 className="card-title">Startup Ecosystem</h3>
              <p className="card-subtitle">Tap into a network of visionaries to build and scale the companies of tomorrow.</p>
            </div>
          </div>
          
          <div style={{ minWidth: "5vw" }}></div>
        </motion.div>
      </div>
    </section>
  );
};
