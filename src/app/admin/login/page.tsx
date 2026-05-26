"use client";

import {
  InputGroup,
  InputGroupLabel,
  InputGroupInput,
} from "@/components/ui/MyInput";
import React from "react";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      window.location.href = "/admin";
    } else {
      const data = await res.json();
      console.error(data.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-lg z-10">
        <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-8 text-center sm:text-left">
            <h1 className="text-xl font-bold tracking-tight text-neutral-100">
              Connexion Administrateur
            </h1>
            <p className="text-sm text-neutral-400">
              Veuillez entrer vos accès pour vous connecter au tableau de bord.
            </p>
          </div>

          {/* Formulaire */}
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroupLabel htmlFor="email">Adresse Email</InputGroupLabel>
              <InputGroupInput
                id="email"
                type="email"
                placeholder="nom@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
              <div className="w-full flex justify-between items-center">
                <InputGroupLabel htmlFor="password">
                  Mot de passe
                </InputGroupLabel>
                <a
                  href="#"
                  className="text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  Oublié ?
                </a>
              </div>
              <InputGroupInput
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputGroup>

            <button
              type="submit"
              className="w-full bg-neutral-100 text-neutral-950 h-10 font-medium text-sm flex items-center justify-center rounded-lg cursor-pointer hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200 mt-2 shadow-sm"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
