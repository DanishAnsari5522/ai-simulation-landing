import { Hero } from "@/components/Hero";
import { HorizontalScrollCarousel } from "@/components/HorizontalScrollCarousel";
import { Slogan } from "@/components/Slogan";
import { SimulationFlow } from "@/components/SimulationFlow";
import { AiManager } from "@/components/AiManager";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <HorizontalScrollCarousel />
      <Slogan />
      <SimulationFlow />
      <AiManager />
      <Pricing />
      
      <footer style={{ background: "var(--bg-color)", padding: "2rem 0", textAlign: "center", borderTop: "1px solid var(--border-color)" }}>
          <p style={{ color: "var(--text-secondary)" }}>© 2026 Simulation Work Ecosystem. All seats strictly reserved.</p>
      </footer>
    </main>
  );
}
