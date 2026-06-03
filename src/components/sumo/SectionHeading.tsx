import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-brand">
            <span className="size-1.5 rounded-full bg-cyan-brand shadow-[0_0_12px_var(--cyan)]" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance text-4xl font-semibold leading-tight text-gradient md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}