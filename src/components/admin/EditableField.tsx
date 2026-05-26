"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Pencil, X } from "lucide-react";
import React from "react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupLabel,
  InputGroupTextarea,
} from "@/components/ui/MyInput";

type FieldType = "text" | "number" | "textarea";

type Props = {
  label: string;
  value: string | number | null | undefined;
  field: string;
  type?: FieldType;
  memberId: string;
  placeholder?: string;
  onSuccess: (field: string, value: string) => void;
  children: React.ReactNode;
};

export function EditableField({
  label,
  value,
  field,
  type = "text",
  memberId,
  placeholder,
  onSuccess,
  children,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState(String(value ?? ""));
  const [loading, setLoading] = React.useState(false);

  const handleSave = async () => {
    setLoading(true);

    const res = await fetch(`/api/admin/members/${memberId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        [field]: type === "number" ? Number(input) : input,
      }),
    });

    setLoading(false);

    if (res.ok) {
      onSuccess(field, input);
      setOpen(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <span className=" inline-flex items-center gap-1.5  cursor-pointer hover:opacity-70 transition-opacity">
          {children}
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-[#0e0e0e] border border-[#383838] rounded-xl p-6 flex flex-col gap-5"
        >
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-base font-semibold">
              Modifier — {label}
            </Dialog.Title>
            <button
              onClick={() => setOpen(false)}
              className="text-white/40 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <InputGroup>
            <InputGroupLabel>{label}</InputGroupLabel>
            {type === "textarea" ? (
              <InputGroupTextarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder}
              />
            ) : (
              <InputGroupInput
                type={type}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder}
              />
            )}
          </InputGroup>

          <div className="flex gap-3">
            <button
              onClick={() => setOpen(false)}
              className="flex-1 h-9 border border-[#383838] text-white/60 text-sm rounded-lg hover:bg-white/5 transition-all"
            >
              Annuler
            </button>
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex-1 h-9 bg-white text-black font-semibold text-sm rounded-lg hover:bg-white/70 transition-all disabled:opacity-50"
            >
              {loading ? "Sauvegarde..." : "Sauvegarder"}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
