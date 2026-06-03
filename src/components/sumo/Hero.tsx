import { motion } from "motion/react";
import { ArrowRight, Cpu, Activity } from "lucide-react";
import { TrafficNetwork } from "./TrafficNetwork";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0">
        <TrafficNetwork />
      </div>
      <div className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[500px] w-[900px] max-w-full rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.2_240/0.35),transparent)] blur-2xl" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-brand"
        >
          <Activity className="size-3.5" />
          INTELLIGENT TRANSPORTATION SYSTEMS · FINAL YEAR PROJECT
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-7xl font-bold tracking-tight md:text-9xl"
        >
          <span className="text-gradient-brand">SUMO</span>
          <span className="text-foreground">++</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-balance text-lg text-foreground/80 md:text-2xl"
        >
          A Unified Traffic Simulation Platform for
          <span className="text-gradient-brand"> Intelligent Transportation Research</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base"
        >
          Simplifying traffic simulation, visualization, and experimentation through an
          integrated user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#its"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--blue)] to-[var(--cyan)] px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
          >
            Explore ITS
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#sumopp"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
          >
            <Cpu className="size-4 text-cyan-brand" />
            View SUMO++
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground"
        >
          <span className="tracking-[0.3em]">SCROLL</span>
          <span className="h-10 w-px bg-gradient-to-b from-cyan-brand to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}