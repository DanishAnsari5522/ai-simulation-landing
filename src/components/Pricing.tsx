"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="register" className="section" style={{ background: "var(--surface-color)", borderTop: "1px solid var(--border-color)", paddingBottom: "10rem" }}>
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1rem" }}>Secure Your Seat</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto" }}>
            Only 15 seats available per cohort. No exceptions. Select your commitment level below.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {/* Standard Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pricing-card glass-card"
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Standard Access</h3>
            <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>For ambitious talent looking to break into elite corporate structures.</p>
            
            <div className="pricing-price">$2,499</div>
            
            <ul className="pricing-features">
              <li>
                <CheckCircle2 size={20} className="pricing-icon" />
                <span>Phase 1: Deep Learning seminars (15 seats)</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="pricing-icon" />
                <span>Phase 2: 6-Week AI Manager Simulation</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="pricing-icon" />
                <span>Standard Performance Record Output</span>
              </li>
              <li style={{ opacity: 0.5 }}>
                <CheckCircle2 size={20} className="pricing-icon" />
                <span>Direct Hiring Partner Network Access</span>
              </li>
            </ul>
            
            <button className="btn btn-outline" style={{ width: "100%", padding: "1rem" }}>Join Waitlist</button>
          </motion.div>

          {/* Premium Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="pricing-card glass-card popular"
          >
            <div className="pricing-badge">RECOMMENDED</div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--primary)" }}>Leadership Track</h3>
            <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>Full simulation ecosystem + exclusive direct placement guarantee program.</p>
            
            <div className="pricing-price">$4,999</div>
            
            <ul className="pricing-features">
              <li>
                <CheckCircle2 size={20} className="pricing-icon" />
                <span>Phase 1: Deep Learning seminars (15 seats)</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="pricing-icon" />
                <span>Phase 2: 6-Week High-Pressure AI Simulation</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="pricing-icon" />
                <span><strong style={{ color: "var(--text-primary)" }}>Verified Elite Performance Record</strong></span>
              </li>
              <li>
                <CheckCircle2 size={20} className="pricing-icon" />
                <span>Priority Placement with Top Hiring Partners</span>
              </li>
            </ul>
            
            <button className="btn btn-primary" style={{ width: "100%", padding: "1rem" }}>Apply For Cohort</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
