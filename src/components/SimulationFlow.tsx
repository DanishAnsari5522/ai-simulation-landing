"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

export const SimulationFlow = () => {
  return (
    <section id="phases" className="section" style={{ background: "var(--surface-color)", borderTop: "1px solid var(--border-color)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1rem" }}>The Simulation Flow</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto" }}>
            Three intense stages to reconstruct your professional identity.
          </p>
        </motion.div>

        <ScrollStack
          itemDistance={100}
          itemScale={0.03}
          itemStackDistance={30}
          useWindowScroll={true}
        >
          {/* Phase 1 */}
          <ScrollStackItem
            itemClassName="phase-card glass-card"
            style={{ padding: "2.5rem" }}
          >
            <div style={{ position: "relative" }}>
              <span className="phase-number">01</span>
              <h3 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--primary)" }}>Learn</h3>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                <strong style={{ color: "var(--text-primary)" }}>Fifteen seats. One instructor. No recordings.</strong><br/><br/>
                What happens in the room stays in the room. This phase breaks down your existing preconceptions and rebuilds your foundational logic. It will change how you think forever.
              </p>
            </div>
            <div style={{ background: "rgba(0,0,0,0.05)", borderRadius: "12px", padding: "2rem", border: "1px solid var(--border-color)", marginTop: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem", marginBottom: "1rem" }}>
                <span style={{ color: "var(--text-secondary)" }}>Capacity</span>
                <strong style={{ color: "var(--text-primary)" }}>15 Elite Members</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem", marginBottom: "1rem" }}>
                <span style={{ color: "var(--text-secondary)" }}>Access</span>
                <strong style={{ color: "var(--text-primary)" }}>Strictly Offline, No Replay</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-secondary)" }}>Outcome</span>
                <strong style={{ color: "var(--primary)" }}>Mindset Optimization</strong>
              </div>
            </div>
          </ScrollStackItem>

          {/* Phase 2 */}
          <ScrollStackItem
            itemClassName="phase-card glass-card"
            style={{ padding: "2.5rem", display: "flex", flexDirection: "column-reverse", gap: "2rem" }}
          >
             <div style={{ background: "rgba(0,0,0,0.05)", borderRadius: "12px", padding: "2rem", border: "1px solid var(--border-color)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: "linear-gradient(90deg, var(--danger), var(--accent))" }}></div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                <div className="avatar" style={{ background: "linear-gradient(135deg, #ef4444, #8b5cf6)" }}>F</div>
                <div>
                   <h4 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "bold" }}>Fathy</h4>
                   <span style={{ fontSize: "0.85rem", color: "var(--danger)" }}>AI Manager (Stress Testing Active)</span>
                </div>
              </div>
              <p style={{ fontStyle: "italic", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                "Your Q2 projections are avoiding the structural deficit in marketing. You have 3 minutes to justify this variance."
              </p>
              <div style={{ textAlign: "right" }}>
                 <span style={{ display: "inline-block", padding: "4px 12px", background: "rgba(239, 68, 68, 0.1)", color: "var(--danger)", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "bold", border: "1px solid rgba(239, 68, 68, 0.2)" }}>Pressure: HIGH</span>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <span className="phase-number">02</span>
              <h3 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--accent)" }}>AI Simulation</h3>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                <strong style={{ color: "var(--text-primary)" }}>Six weeks inside a fully simulated company.</strong><br/><br/>
                You lead a team, manage budgets, and face Fathy, an AI manager who challenges every decision you make with data, pressure, and zero patience for vague answers. Adapt or fail.
              </p>
            </div>
          </ScrollStackItem>

          {/* Phase 3 */}
          <ScrollStackItem
            itemClassName="phase-card glass-card"
            style={{ padding: "2.5rem" }}
          >
            <div style={{ position: "relative" }}>
              <span className="phase-number">03</span>
              <h3 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--success)" }}>Get Hired</h3>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                <strong style={{ color: "var(--text-primary)" }}>You graduate with a verified performance record — not a certificate.</strong><br/><br/>
                Hiring partners receive your record before they meet you. No cold applications. No job boards. Just a direct conversation with companies already looking for someone exactly like you.
              </p>
            </div>
            <div style={{ background: "rgba(16, 185, 129, 0.05)", borderRadius: "12px", padding: "2.5rem", border: "1px solid rgba(16, 185, 129, 0.2)", textAlign: "center", marginTop: "1rem" }}>
              <div style={{ width: "80px", height: "80px", background: "var(--success)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem auto", boxShadow: "0 0 30px rgba(16,185,129,0.4)" }}>
                <CheckCircle2 size={40} color="white" />
              </div>
              <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem", color: "var(--success)" }}>Verified Record Sent</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                A partner company (Logistics AI Corp) is tracking your strategic milestones. They have requested an interview.
              </p>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  );
};
