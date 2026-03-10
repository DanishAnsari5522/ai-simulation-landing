"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const AiManager = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1rem" }}>Meet <span className="gradient-text">Fathy</span></h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto" }}>
            Your AI Manager. Forgiving? No. Insightful? Uncomfortably so.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="ai-manager-container"
        >
          {/* Sidebar Stats */}
          <div className="chat-sidebar">
            <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "2rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>Simulation Dashboard</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Budget Health</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--danger)", fontWeight: "bold" }}>Critical (14% Variance)</span>
                </div>
                <div style={{ height: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "45%", background: "var(--danger)" }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Team Morale</span>
                  <span style={{ fontSize: "0.85rem", color: "#f59e0b", fontWeight: "bold" }}>62/100</span>
                </div>
                <div style={{ height: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "62%", background: "#f59e0b" }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Operational Efficiency</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--success)", fontWeight: "bold" }}>Optimal</span>
                </div>
                <div style={{ height: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "94%", background: "var(--success)" }}></div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: "8px", padding: "1rem" }}>
              <span style={{ color: "var(--danger)", fontSize: "0.85rem", fontWeight: "bold" }}>Warning: Fathy expects a response to the Q3 Logistics report in 12 minutes.</span>
            </div>
          </div>

          {/* Chat Area */}
          <div className="chat-main">
            <div className="chat-header">
              <div className="avatar">F</div>
              <div>
                <h4 style={{ margin: 0, fontSize: "1.1rem" }}>Fathy</h4>
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Active now | Evaluation Mode</span>
              </div>
            </div>

            <div className="chat-messages">
              <div className="message-ai">
                I reviewed your resource allocation for the upcoming Q3 expansion. You severely underestimated the onboarding costs by roughly $42,000. 
                <br /><br />
                Data indicates an 18% turnover rate in the current team if we push this timeline without compensation adjustments. Explain your logic, now.
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <span className="metric-badge metric-danger">-14% ROI Risk</span>
                  <span className="metric-badge" style={{ background: "rgba(245, 158, 11, 0.1)", color: "#f59e0b", border: "1px solid rgba(245, 158, 11, 0.2)" }}>Turnover Alert</span>
                </div>
              </div>

              <div className="message-user">
                The initial assessment assumed we could offset onboarding costs by moving three senior devs from the legacy project. I understand this exposes us to turnover risk, but it accelerates go-to-market.
              </div>

              <div className="message-ai">
                 Moving senior developers without addressing legacy debt doesn't "accelerate" anything, it just defers the failure. You're trading a short-term metric boost for long-term structural weakness. 
                 <br /><br />
                 I am rejecting this allocation. Propose a new budget that balances technical debt with expansion, or I will flag your leadership score to the hiring partners.
              </div>
            </div>

            <div className="chat-input-area">
              <input type="text" className="chat-input" placeholder="Justify your budget logic..." />
              <button className="chat-send-btn">
                <Send size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
