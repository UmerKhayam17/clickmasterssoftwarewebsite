import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { TechStackTabs } from "@/components/landing/tech-stack-tabs";
import { container, sectionPad } from "@/lib/landing/constants";
import { techStackIntro } from "@/lib/landing/data";
import { cn } from "@/lib/utils";

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="relative w-full overflow-hidden bg-gradient-to-b from-horizon-sky/30 via-white to-white"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-horizon-peach/30 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-horizon-sky/40 blur-3xl" />
      </div>

      <div className={cn(container, sectionPad, "relative")}>
        <SectionHeading
          overlineText="Our toolkit"
          title={
            <>
              Built with a <span className="italic">modern toolkit</span>
            </>
          }
          description={techStackIntro}
          className="mb-8 md:mb-10"
        />

        <Reveal>
          <TechStackTabs />
        </Reveal>
      </div>
    </section>
  );
}
