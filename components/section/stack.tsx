"use client";

import { stack } from "@/lib/data/stacks";
import SzSection from "../layout/szSection";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function StackIcon({ icon }: { icon: (typeof stack)[number] }) {
  return (
    <div className="flex flex-col items-center gap-2 shrink-0 w-16">
      <Image
        src={icon.icon}
        alt={icon.name}
        width={24}
        height={24}
        className="h-6 w-6 shrink-0 opacity-50 hover:opacity-90 transition"
      />
      <span className="text-[11px] text-white/50 text-center leading-tight whitespace-nowrap">
        {icon.name}
      </span>
    </div>
  );
}

export default function Stack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  // how many times we repeat the base set of icons to guarantee full coverage
  const [repeats, setRepeats] = useState(2);

  useEffect(() => {
    function computeRepeats() {
      const containerWidth = containerRef.current?.offsetWidth ?? 0;
      const setWidth = setRef.current?.offsetWidth ?? 0;
      if (!setWidth) return;
      // we need at least 2x the container width covered by content,
      // so the -50% translate always has a full screen's worth behind it
      const needed = Math.ceil((containerWidth * 2) / setWidth) + 1;
      setRepeats(Math.max(2, needed));
    }
    computeRepeats();
    window.addEventListener("resize", computeRepeats);
    return () => window.removeEventListener("resize", computeRepeats);
  }, []);

  return (
    <SzSection
      id="stack"
      title="Stack"
      description="Les technologies que nous utilisons au quotidien"
    >
      <div
        className="absolute inset-0 grid-fade pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 100% at 50% 60%, black 40%, transparent 100%)",
        }}
      />

      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div
          className="flex gap-12 items-center w-max animate-marquee"
          style={{ "--repeats": repeats } as React.CSSProperties}
        >
          {/* first set — measured as the reference width */}
          <div ref={setRef} className="flex gap-12 items-center shrink-0">
            {stack.map((icon, index) => (
              <StackIcon key={index} icon={icon} />
            ))}
          </div>
          {/* repeated sets to guarantee full-width coverage on any screen */}
          {Array.from({ length: repeats - 1 }).map((_, i) => (
            <div
              key={i}
              className="flex gap-12 items-center shrink-0"
              aria-hidden="true"
            >
              {stack.map((icon, index) => (
                <StackIcon key={`${index}-${i}`} icon={icon} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </SzSection>
  );
}
