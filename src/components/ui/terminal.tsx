"use client";

import { Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";


const headerActions = [
  {id: 1, label: "Close", color: "#ff5f57"},
  {id: 2, label: "Minimize", color: "#febc2e"},
  {id: 3, label: "Maximize", color: "#28c840"},
]


function TerminalHeader() {
  return (
    <div className="bg-hover-secondary py-3 px-4 flex items-center justify-between border-b border-bg-hover">
      <div className="flex flex-row items-center gap-2">
        {headerActions.map(action => (
          <div key={action.id} className="w-3 h-3 rounded-full" style={{backgroundColor: action.color}}/>
        ))}
      </div>

      <span className="text-xs font-mono text-text-secondary flex items-center gap-1.5">
        <Terminal size={12} /> sz-dev ~ bash
      </span>
    </div>
  )
}


function TerminalCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bg-card border border-border-card rounded-xl overflow-hidden box-shadow:0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px #252525 min-w-100">
      <TerminalHeader />

      <div className="pb-6 p-5 min-h-60 font-mono text-[13px] leading-[1.8] flex flex-col gap-2">
        <span className="text-text-secondary">$ node index.js</span>
          {children}
      </div>
    </div>
  );
}


const codeLines = [
  "const team = new SZDeveloppement();",
  "await team.build({ product: 'your-idea' });",
  "// Résultat: produit scalable & performant",
  "team.stack = ['Next.js', 'TypeScript', 'Node'];",
  "team.deploy({ env: 'production' });",
  "console.log('Livré dans les délais ✓');",
];

function getLineColor(index: number): string {
  const colors = [
    "#fff",
    "#0070f3",
    "#8f8f8f",
    "#f5a623",
    "#0070f3",
    "#50e3c2",
  ];
  return colors[index % colors.length];
}

function HeroTerminalCard() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (currentLine >= codeLines.length) return;
    intervalRef.current = setInterval(() => {
      const line = codeLines[currentLine];
      if (currentChar < line.length) {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = line.substring(0, currentChar + 1);
          return updated;
        });
        setCurrentChar((c) => c + 1);
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTimeout(() => {
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        }, 180);
      }
    }, 28);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentLine, currentChar]);

  return (
    <div className="bg-bg-card border border-border-card rounded-xl overflow-hidden box-shadow:0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px #252525 min-w-100 w-full max-w-120">
      <TerminalHeader />

      <div className="pb-6 p-5 min-h-60 font-mono text-[13px] leading-[1.8] flex flex-col gap-2.5">
        <span className="text-text-secondary">$ node index.js</span>

        <div className="flex flex-col gap-0">
          {displayedLines.map((line, i) => (
            <div key={i} style={{ color: getLineColor(i) }}>
              {line}
              {i === currentLine && currentLine < codeLines.length && (
                <span
                  className="cursor-blink text-text-primary"
                >
                  |
                </span>
              )}
            </div>
          ))}
        </div>

        {currentLine >= codeLines.length && (
          <div className="text-status-success">
            ✓ Prêt à coder avec vous.{" "}
            <span className="cursor-blink">
              |
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function FloatingBadge() {
  return (
    <div className="absolute -bottom-5 right-15 bg-bg-card border border-border-card rounded-xl px-4 py-3 flex flex-col gap-1 animate-float">
      <span className="text-xs text-text-secondary font-mono">Dernière livraison</span>
      <span className="text-sm text-status-success font-semibold font-body">✓ v2.4.1 déployé</span>
    </div>
  )
}


export { TerminalCard, HeroTerminalCard, FloatingBadge };