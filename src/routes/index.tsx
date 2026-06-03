import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sumo/Hero";
import {
  WhatIsITS,
  WhySimulation,
  Tools,
  NetEdit,
  Limitations,
  IntroSUMOpp,
  WorkflowTimeline,
  Contributions,
  TechStack,
  DemoSection,
  Footer,
} from "@/components/sumo/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SUMO++ — Intelligent Transportation Simulation Platform" },
      { name: "description", content: "A unified traffic simulation platform integrating OpenStreetMap, SUMO, NetEdit and TraCI for intelligent transportation research." },
      { property: "og:title", content: "SUMO++ — Intelligent Transportation Simulation Platform" },
      { property: "og:description", content: "Unified traffic simulation, visualization and experimentation for ITS research." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Hero />
      <WhatIsITS />
      <WhySimulation />
      <Tools />
      <NetEdit />
      <Limitations />
      <IntroSUMOpp />
      <WorkflowTimeline />
      <Contributions />
      <TechStack />
      <DemoSection />
      <Footer />
    </main>
  );
}
