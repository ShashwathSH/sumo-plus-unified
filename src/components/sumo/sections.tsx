import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Navigation, Radio, Gauge, ShieldCheck, Sparkles, Building2, MapPin, Siren,
  TrafficCone, FlaskConical, GraduationCap, TrendingUp, Users, Workflow,
  Network, FileCode2, Terminal, Layers, AlertTriangle, CheckCircle2,
  Map, Cog, Play, BarChart3, Rocket, Globe2, Cpu, Boxes, Wrench, Eye,
  ChevronRight, ExternalLink, Activity, X, ZoomIn,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import sumoImg from "@/assets/sumo.png.asset.json";
import neteditImg from "@/assets/netedit.png.asset.json";
import vissimImg from "@/assets/vissim.png.asset.json";
import aimsunImg from "@/assets/aimsun.png.asset.json";
import sumoppImg from "@/assets/sumopp-ui.png.asset.json";

/* ============ SCREENSHOT CARD (glass + hover zoom + lightbox) ============ */
function ScreenshotCard({
  src,
  alt,
  caption,
  featured = false,
}: {
  src: string;
  alt: string;
  caption: string;
  featured?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <figure className="group w-full">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge ${alt}`}
          className={`relative block w-full overflow-hidden rounded-2xl glass-strong p-2 ring-1 ring-white/10 transition-shadow hover:shadow-[var(--shadow-elegant)] ${
            featured ? "md:p-3" : ""
          }`}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/30">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-brand opacity-0 ring-1 ring-cyan-brand/30 backdrop-blur transition-opacity group-hover:opacity-100">
              <ZoomIn className="size-3" /> Click to enlarge
            </div>
          </div>
        </button>
        <figcaption className="mt-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {caption}
        </figcaption>
      </figure>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl glass-strong p-3"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full bg-black/60 text-foreground ring-1 ring-white/20 transition hover:bg-black/80"
              >
                <X className="size-4" />
              </button>
              <img src={src} alt={alt} className="max-h-[80vh] w-full rounded-xl object-contain" />
              <div className="mt-3 text-center text-sm text-muted-foreground">{caption}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ============ SECTION 2: WHAT IS ITS ============ */
const itsCards = [
  { icon: Building2, title: "Smart Infrastructure", desc: "Connected sensors, signals & roadside units that make cities communicate." },
  { icon: Radio, title: "Traffic Monitoring", desc: "Real-time data collection through cameras, GPS, and IoT devices." },
  { icon: Gauge, title: "Congestion Management", desc: "Dynamic routing and adaptive signal control to keep traffic flowing." },
  { icon: ShieldCheck, title: "Road Safety", desc: "Crash prediction, driver alerts, and automated incident response." },
  { icon: TrendingUp, title: "Traffic Optimization", desc: "AI-driven optimization across networks for efficient movement." },
  { icon: Sparkles, title: "Smart Cities", desc: "The foundation for sustainable, connected urban mobility." },
];
const itsExamples = [
  { icon: MapPin, label: "Google Maps Traffic" },
  { icon: TrafficCone, label: "Smart Traffic Signals" },
  { icon: Navigation, label: "Route Optimization" },
  { icon: Siren, label: "Emergency Prioritization" },
];

export function WhatIsITS() {
  return (
    <section id="its" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Section 01"
          title={<>What is an <span className="text-gradient-brand">Intelligent Transportation System?</span></>}
          description="ITS uses sensing, computing, and communication to make roads safer, faster, and smarter — turning ordinary infrastructure into a living network."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {itsCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full rounded-2xl glass p-6 transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-brand/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--blue)]/30 to-[var(--cyan)]/20 ring-1 ring-cyan-brand/30">
                  <c.icon className="size-6 text-cyan-brand" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 rounded-2xl glass-strong p-6 md:p-8">
            <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Real-world examples you already use
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {itsExamples.map((e) => (
                <div key={e.label} className="flex items-center gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/5">
                  <e.icon className="size-5 text-cyan-brand" />
                  <span className="text-sm font-medium text-foreground/90">{e.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ SECTION 3: WHY TRAFFIC SIMULATION ============ */
export function WhySimulation() {
  const benefits = [
    "Evaluate road networks",
    "Analyze congestion patterns",
    "Test traffic policies safely",
    "Study driver behavior",
    "Smart-city planning",
    "Research and education",
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Section 02"
          title={<>Why do we need <span className="text-gradient-brand">Traffic Simulation?</span></>}
          description="Testing strategies on real roads is expensive, slow and dangerous. Simulation lets engineers experiment with entire cities — safely, repeatedly, and at a fraction of the cost."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-2xl glass p-8">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-destructive/20 blur-3xl" />
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-destructive">
                <AlertTriangle className="size-4" /> Real-world testing
              </div>
              <h3 className="text-2xl font-semibold">Risky · Expensive · Slow</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-destructive" />Disrupts real commuters and emergency services</li>
                <li className="flex gap-3"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-destructive" />Requires permits, equipment, and field crews</li>
                <li className="flex gap-3"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-destructive" />Cannot test rare or dangerous scenarios</li>
                <li className="flex gap-3"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-destructive" />Failures can cause accidents and gridlock</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-2xl glass glow-border p-8">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-cyan-brand/30 blur-3xl" />
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-brand">
                <CheckCircle2 className="size-4" /> Simulation testing
              </div>
              <h3 className="text-2xl font-semibold text-gradient-brand">Safe · Fast · Repeatable</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-cyan-brand" />Run thousands of scenarios in minutes</li>
                <li className="flex gap-3"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-cyan-brand" />Zero risk to people or infrastructure</li>
                <li className="flex gap-3"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-cyan-brand" />Compare policies side-by-side</li>
                <li className="flex gap-3"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-cyan-brand" />Built-in analytics &amp; visualization</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {benefits.map((b, i) => (
            <Reveal key={b} delay={i * 0.04}>
              <div className="rounded-xl glass p-4 text-center text-xs font-medium text-foreground/90">
                {b}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 4: TOOLS ============ */
const tools = [
  {
    name: "SUMO",
    tag: "Open Source",
    color: "from-emerald-400/40 to-cyan-400/30",
    description: "Simulation of Urban MObility — a free, open-source microscopic traffic simulator developed by DLR.",
    bullets: ["Open-source & free", "Microscopic simulation", "Highly customizable", "Research-oriented"],
    image: sumoImg.url,
    caption: "SUMO GUI: Microscopic Traffic Simulation Environment",
  },
  {
    name: "VISSIM",
    tag: "Commercial",
    color: "from-blue-400/40 to-indigo-400/30",
    description: "PTV VISSIM — industry-standard commercial microscopic simulator used by transportation agencies worldwide.",
    bullets: ["Commercial simulator", "Widely used in industry", "Advanced behavioral modeling", "Enterprise support"],
    image: vissimImg.url,
    caption: "PTV VISSIM: Commercial Traffic Simulation Platform",
  },
  {
    name: "AIMSUN",
    tag: "Enterprise",
    color: "from-cyan-400/40 to-sky-400/30",
    description: "Aimsun Next — large-scale traffic modeling & management platform for cities and highway operators.",
    bullets: ["Traffic planning & management", "Large-scale networks", "Hybrid simulation", "Real-time operations"],
    image: aimsunImg.url,
    caption: "AIMSUN: Advanced Traffic Planning and Simulation Tool",
  },
];

export function Tools() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Section 03"
          title={<>Existing <span className="text-gradient-brand">Traffic Simulation Platforms</span></>}
          description="A look at the leading simulators used by researchers and traffic engineers today."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tools.map((t, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={t.name} delay={i * 0.08}>
                <motion.div
                  layout
                  whileHover={{ y: -6 }}
                  className="group block h-full w-full overflow-hidden rounded-2xl glass p-6 text-left transition-shadow hover:shadow-[var(--shadow-elegant)]"
                >
                  <ScreenshotCard src={t.image} alt={`${t.name} screenshot`} caption={t.caption} />
                  <div className="mt-5 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-foreground">{t.name}</h3>
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-cyan-brand">{t.tag}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="mt-3 w-full text-left"
                  >
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="mt-1 space-y-2 overflow-hidden text-sm"
                        >
                          {t.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2 text-foreground/90">
                              <ChevronRight className="size-3.5 text-cyan-brand" /> {b}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                    <div className="mt-3 text-xs font-medium text-cyan-brand">
                      {isOpen ? "Click to collapse details" : "Click to view details"}
                    </div>
                  </button>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 5: NETEDIT ============ */
export function NetEdit() {
  const steps = [
    { icon: Globe2, label: "OpenStreetMap", note: "Real-world map data" },
    { icon: Wrench, label: "NetEdit", note: "Define roads, junctions & signals" },
    { icon: Play, label: "SUMO Simulation", note: "Run & visualize traffic" },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Section 04"
          title={<>NetEdit — <span className="text-gradient-brand">SUMO Network Editor</span></>}
          description="NetEdit is the graphical editor for SUMO — used to author road networks, junctions, traffic signals and other simulation elements before a simulation can be run."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <ScreenshotCard
              src={neteditImg.url}
              alt="NetEdit screenshot"
              caption="NetEdit: Road Network and Traffic Infrastructure Editor"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ol className="relative space-y-6 border-l border-cyan-brand/30 pl-6">
              {steps.map((s, i) => (
                <li key={s.label} className="relative">
                  <span className="absolute -left-[34px] grid size-7 place-items-center rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--cyan)] text-xs font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
                    {i + 1}
                  </span>
                  <div className="rounded-xl glass p-4">
                    <div className="flex items-center gap-3">
                      <s.icon className="size-5 text-cyan-brand" />
                      <h4 className="text-base font-semibold">{s.label}</h4>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 6: LIMITATIONS ============ */
const limitations = [
  { icon: Terminal, title: "Complex command-line operations", detail: "Most workflows require CLI knowledge to run binaries." },
  { icon: FileCode2, title: "XML-based configuration", detail: "Routes, networks and demand are hand-edited in XML." },
  { icon: Layers, title: "Multiple disconnected tools", detail: "OSM, NetEdit, SUMO GUI, TraCI all live as separate apps." },
  { icon: GraduationCap, title: "Steep learning curve", detail: "Beginners struggle to get a first simulation running." },
  { icon: Workflow, title: "Difficult workflow management", detail: "Switching between tools breaks focus and slows research." },
  { icon: Users, title: "Poor accessibility for beginners", detail: "Students and researchers lose hours on setup, not science." },
];

export function Limitations() {
  const flow = ["OSM", "NetEdit", "XML Editing", "SUMO GUI", "Analysis"];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Section 05"
          title={<>Challenges in <span className="text-gradient-brand">Existing Workflows</span></>}
          description="Powerful tools exist, but stitching them together is a job in itself."
        />

        <Reveal>
          <div className="mt-14 overflow-x-auto rounded-2xl glass-strong p-6">
            <div className="flex min-w-max items-center justify-between gap-3">
              {flow.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Step {i + 1}</div>
                    <div className="text-sm font-semibold text-foreground">{step}</div>
                  </div>
                  {i < flow.length - 1 && (
                    <div className="text-destructive/80">
                      <ChevronRight className="size-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-destructive/90">
              <AlertTriangle className="mr-1 inline size-3.5" /> Five disjoint tools, dozens of manual steps
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {limitations.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl glass p-6">
                <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-destructive/15 ring-1 ring-destructive/30">
                  <l.icon className="size-5 text-destructive" />
                </div>
                <h4 className="text-base font-semibold text-foreground">{l.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{l.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 7: INTRODUCING SUMO++ ============ */
const features = [
  { icon: Globe2, title: "OpenStreetMap Integration", desc: "Search any city and import real road data instantly." },
  { icon: Network, title: "Automatic Network Generation", desc: "Convert OSM data into SUMO networks with one click." },
  { icon: Cog, title: "SUMO Integration", desc: "Run simulations directly from the unified interface." },
  { icon: Wrench, title: "NetEdit Integration", desc: "Launch and edit networks without switching contexts." },
  { icon: Activity, title: "Real-time Simulation Control", desc: "Play, pause, step, and tweak parameters live via TraCI." },
  { icon: FlaskConical, title: "Research Mode", desc: "Configure experiments, batch runs and reproducible studies." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Visualize flows, delays and emissions in one place." },
  { icon: Workflow, title: "Unified Workflow", desc: "Map → Network → Simulate → Analyze, all in one app." },
];

export function IntroSUMOpp() {
  return (
    <section id="sumopp" className="relative py-28">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-cyan-brand/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium tracking-wide text-cyan-brand">
              <Rocket className="size-3.5" /> THE SOLUTION
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-6xl font-bold md:text-8xl">
              <span className="text-gradient-brand">SUMO</span>
              <span className="text-foreground">++</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-foreground/80">
              Unified Traffic Simulation Platform
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-3xl text-pretty text-muted-foreground">
              SUMO++ is a desktop platform built to simplify the SUMO ecosystem by integrating
              map import, network generation, simulation execution, visualization, and traffic
              research workflows into a single, beautiful environment.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-2xl glass p-5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-brand/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--blue)]/30 to-[var(--cyan)]/20 ring-1 ring-cyan-brand/30">
                    <f.icon className="size-5 text-cyan-brand" />
                  </div>
                  <h4 className="text-base font-semibold">{f.title}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 8: WORKFLOW TIMELINE ============ */
const workflow = [
  { icon: MapPin, title: "Search Location", desc: "Find any city or region on OpenStreetMap." },
  { icon: Map, title: "Select Area", desc: "Draw the bounding box you want to simulate." },
  { icon: Network, title: "Generate Network", desc: "Auto-convert OSM data into a SUMO network." },
  { icon: Wrench, title: "Open SUMO / NetEdit", desc: "Inspect and refine the generated network." },
  { icon: Play, title: "Run Simulation", desc: "Execute with real-time control via TraCI." },
  { icon: BarChart3, title: "Analyze Results", desc: "Visualize flows, delays and metrics." },
];

export function WorkflowTimeline() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Section 06"
          title={<>The SUMO++ <span className="text-gradient-brand">Workflow</span></>}
          description="From a blank map to a running simulation — in six guided steps."
        />
        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-brand/60 via-cyan-brand/30 to-transparent md:left-1/2 md:block" />
          <div className="space-y-8">
            {workflow.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className={`relative grid items-center gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`rounded-2xl glass p-6 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-brand">
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                    <h4 className="mt-1 text-xl font-semibold">{w.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                  <div className="relative flex justify-center">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-[var(--blue)] to-[var(--cyan)] text-primary-foreground shadow-[var(--shadow-glow)] ring-4 ring-background"
                    >
                      <w.icon className="size-7" />
                    </motion.div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 9: CONTRIBUTIONS ============ */
const contributions = [
  { icon: Sparkles, title: "Improved UI/UX", desc: "A modern, intuitive interface for the entire SUMO toolchain." },
  { icon: Workflow, title: "Centralized Workflow", desc: "All simulation steps consolidated in one application." },
  { icon: FlaskConical, title: "Simplified Experimentation", desc: "Rapid scenario setup for research and coursework." },
  { icon: Activity, title: "Real-time Control", desc: "Live TraCI control over running simulations." },
  { icon: Globe2, title: "Indian Traffic Models", desc: "Foundation for region-specific driver behavior models." },
];

export function Contributions() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Section 07"
          title={<>Key <span className="text-gradient-brand">Contributions</span></>}
          description="What SUMO++ brings to the traffic-simulation community."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {contributions.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full rounded-2xl glass p-6"
              >
                <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--blue)]/30 to-[var(--cyan)]/20 ring-1 ring-cyan-brand/30">
                  <c.icon className="size-5 text-cyan-brand" />
                </div>
                <h4 className="text-base font-semibold">{c.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 10: TECH STACK ============ */
const stack = [
  { name: "SUMO", note: "Traffic Simulator", icon: TrafficCone },
  { name: "Qt6", note: "Desktop Framework", icon: Boxes },
  { name: "PySide6", note: "Python Bindings", icon: Cpu },
  { name: "TraCI", note: "Simulation Control API", icon: Activity },
  { name: "OpenStreetMap", note: "Map Data", icon: Globe2 },
  { name: "NetEdit", note: "Network Editor", icon: Wrench },
];

export function TechStack() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Section 08"
          title={<>Technology <span className="text-gradient-brand">Stack</span></>}
          description="Built on proven, open technologies."
        />
        <div className="mt-14 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {stack.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -6, rotate: -1 }}
                className="group flex h-full flex-col items-center gap-2 rounded-2xl glass p-6 text-center"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--blue)]/30 to-[var(--cyan)]/20 ring-1 ring-cyan-brand/30 transition-all group-hover:shadow-[var(--shadow-glow)]">
                  <s.icon className="size-6 text-cyan-brand" />
                </div>
                <div className="mt-2 text-sm font-semibold">{s.name}</div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{s.note}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 11: DEMO ============ */
export function DemoSection() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-cyan-brand/25 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 size-72 rounded-full bg-blue-brand/25 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium tracking-wide text-cyan-brand">
                  <Play className="size-3.5" /> LIVE DEMONSTRATION
                </div>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  See <span className="text-gradient-brand">SUMO++</span> in action
                </h2>
                <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
                  The SUMO++ platform integrates simulation setup, execution, visualization,
                  and traffic research into a single user-friendly environment.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--blue)] to-[var(--cyan)] px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                  >
                    <Play className="size-4" />
                    Launch Demo
                    <ExternalLink className="size-3.5 opacity-70 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <div className="text-xs text-muted-foreground">Desktop app · Qt6 · PySide6</div>
                </div>
              </div>
              <div className="w-full">
                <ScreenshotCard
                  src={sumoppImg.url}
                  alt="SUMO++ application screenshot"
                  caption="SUMO++: Unified Traffic Simulation Platform Developed in this Project"
                  featured
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3 md:items-end">
          <div>
            <div className="font-display text-3xl font-bold">
              <span className="text-gradient-brand">SUMO</span>
              <span className="text-foreground">++</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Traffic Simulation Made Accessible.
            </p>
          </div>
          <div className="text-sm md:text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-cyan-brand">Project</div>
            <div className="mt-1 font-medium text-foreground">SUMO++ — Unified Traffic Simulation Platform</div>
          </div>
          <div className="text-sm md:text-right">
            <div className="text-xs uppercase tracking-[0.2em] text-cyan-brand">Institution</div>
            <div className="mt-1 font-medium text-foreground">Dept. of Information Science &amp; Engineering</div>
            <div className="text-muted-foreground">RV College of Engineering</div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} SUMO++ Project · Final Year Engineering Showcase</span>
          <span className="tracking-[0.2em]">INTELLIGENT · TRANSPORTATION · SIMULATION</span>
        </div>
      </div>
    </footer>
  );
}