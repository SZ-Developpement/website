// @/components/ui/MyInput.tsx
import { cn } from "../../lib/utils";
import React from "react";

function InputGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("w-full flex flex-col gap-2 items-start")}>
      {children}
    </div>
  );
}

function InputGroupLabel({
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "text-xs font-semibold uppercase tracking-wider text-neutral-400 select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-10 w-full min-w-0 rounded-lg border border-neutral-800 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-100 transition-all placeholder:text-neutral-500 outline-none focus:border-neutral-700 focus:bg-neutral-900 focus:ring-2 focus:ring-neutral-800 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-500/50 aria-invalid:ring-red-500/20",
        className,
      )}
      {...props}
    />
  );
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "h-[120px] resize-none w-full min-w-0 rounded-lg border border-neutral-800 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-100 transition-all placeholder:text-neutral-500 outline-none focus:border-neutral-700 focus:bg-neutral-900 focus:ring-2 focus:ring-neutral-800 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-500/50 aria-invalid:ring-red-500/20",
        className,
      )}
      {...props}
    />
  );
}

export { InputGroup, InputGroupLabel, InputGroupInput, InputGroupTextarea };
