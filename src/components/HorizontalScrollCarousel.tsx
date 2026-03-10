"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrainCircuit, Briefcase, Users, Lightbulb } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const HorizontalScrollCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: "Robotics & AI",
      subtitle: "Immerse yourself in cutting-edge concepts taught by leading experts and touch the actual data.",
      Icon: BrainCircuit,
      gradient: "linear-gradient(135deg, #ff416c, #ff4b2b)",
    },
    {
      title: "Work Simulation",
      subtitle: "Six hyper-realistic weeks managing teams, handling budgets, and navigating corporate challenges.",
      Icon: Briefcase,
      gradient: "linear-gradient(135deg, #3a7bd5, #3a6073)",
    },
    {
      title: "Hiring",
      subtitle: "Bypass resumes. Partner companies review verified simulations to hire top talent directly.",
      Icon: Users,
      gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
    },
    {
      title: "Startup Ecosystem",
      subtitle: "Tap into a network of visionaries to build and scale the companies of tomorrow.",
      Icon: Lightbulb,
      gradient: "linear-gradient(135deg, #8E54E9, #4776E6)",
    }
  ];

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    // Wait slightly to ensure styles/fonts are loaded before measuring
    const timeoutId = setTimeout(() => {
      let scrollTween = gsap.to(trackRef.current, {
        x: () => -(trackRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + trackRef.current!.scrollWidth
        }
      });

      // Optional: per-card animations triggered when they enter the "container viewport"
      const cardsEls = trackRef.current!.querySelectorAll('.character-card');
      cardsEls.forEach((card, index) => {
        // Skip the first card as it is natively visible
        if (index === 0) return;

        gsap.fromTo(card, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left center+=200", 
              toggleActions: "play none none reverse",
            }
          }
        );
      });

    }, 100);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} style={{ overflow: "hidden" }}>
      <div 
        style={{ 
          height: "100vh", 
          display: "flex", 
          alignItems: "center", 
          background: "var(--surface-color)",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
          position: "relative"
        }}
      >
        <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "100%", zIndex: 10, textAlign: "center" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: 800 }}>Core Pillars</h2>
          <p style={{ color: "var(--text-secondary)" }}>Scroll to explore the ecosystem</p>
        </div>
        
        <div ref={trackRef} className="horizontal-track" style={{ paddingLeft: "15vw", paddingRight: "15vw" }}>
          {cards.map((card, index) => (
            <div 
              key={index}
              className="character-card" 
              style={{ background: card.gradient }}
            >
              <div className="card-icon-wrapper">
                <card.Icon size={140} color="white" strokeWidth={1} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-subtitle">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
