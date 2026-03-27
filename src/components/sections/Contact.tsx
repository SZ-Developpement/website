"use client";

import { useState } from "react";
import { Badge } from "../ui/badge";
import { CheckCircle, Send } from "lucide-react";
import SZSection from "../layout/SZSection";
import { GroupInput, GroupTextarea } from "../contact/GroupInput";
import { contact, status } from "../../../data/pages/contact";
import Link from "next/link";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentStatus = status[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
      } else {
        const errorData = await response.json();
        console.error("Erreur Resend:", errorData);
        alert("Oups ! Une erreur est survenue.");
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SZSection id="contact" className="flex flex-col justify-center items-center gap-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <Badge status={false} text="Contact"/>
        <h2 className="font-display text-5xl font-extrabold leading-none text-center">
          Parlons de votre{" "}
          <span className="gradient-text-blue">prochain projet.</span>
        </h2>
        <p className="text-text-secondary text-body max-w-150 text-center">
          Que vous ayez une idée précise ou un simple point de départ, noussommes là pour vous accompagner.
        </p>
      </div>

      <div className="grid grid-cols-[1fr_1.6fr] items-start gap-8">
        <div className="flex flex-col gap-4">
          {contact.map((item) => (
          <Link href={item.url} key={item.label} style={{ '--hover-color': `${item.color}50` } as React.CSSProperties} className="flex flex-row items-center gap-4 bg-bg-card border border-border-card p-4 rounded-xl hover:bg-bg-dark relative hover:translate-y-0.5 transition-all duration-500 hover:border-(--hover-color) cursor-pointer" >

            <div className="w-11 aspect-square flex items-center justify-center rounded-lg border" style={{backgroundColor: `${item.color}10`, borderColor: `${item.color}25`}}>
              <item.icon size={20} color={item.color} />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-xs font-mono uppercase text-text-secondary">{item.label}</h3>
              <p className="text-[#e0e0e0] text-sm font-body">{item.value}</p>
            </div>
          </Link>
          ))}

          <hr className="w-full border-t border-border-card" />

          <div className="flex flex-col gap-2 bg-bg-card border border-border-card p-4 rounded-xl hover:bg-bg-dark relative hover:translate-y-0.5 transition-all duration-500 cursor-pointer" >

              <div className="flex flex-row gap-2.5 items-center">
                <span className="w-2 h-2 rounded-full " style={{ backgroundColor: currentStatus.color, boxShadow: `0 0 10px ${currentStatus.color}`}} />
                <h3 className="text-[13px] font-body font-bold" style={{color: currentStatus.color}}>{currentStatus.title}</h3>

              </div>
              <p className="text-text-secondary text-xs font-body">{currentStatus.text}</p>

          </div>

        </div>

          <div className="h-full bg-bg-card border border-border-card p-6 rounded-xl relative" >
            {sent ? (
              <div className="h-full flex flex-col gap-4 items-center justify-center">
                <CheckCircle size={48} color="#50e3c2" />
                <h3 className="font-display text-xl font-bold">
                  Message envoyé !
                </h3>
                <p className="text-text-secondary text-sm font-body">
                  Merci pour votre message. Nous reviendrons vers vous dans les
                  plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <GroupInput label="Nom" id="name" type="text" placeholder="John Doe" required value={form.name} onChange={handleChange} />
                  <GroupInput label="Email" id="email" type="email" placeholder="john.doe@email.com" required value={form.email} onChange={handleChange} />
                </div>

                <GroupInput label="Sujet" id="subject" type="text" placeholder="Développement d'une app mobile..." required value={form.subject} onChange={handleChange} />
                <GroupTextarea label="Message" id="message" placeholder="Décrivez votre projet, vos besoins, vos délais..." required value={form.message} onChange={handleChange} />
              
                <button type="submit" disabled={loading} className={`w-full py-2.5 rounded-lg text-sm font-semibold font-body flex items-center justify-center gap-2 ${loading ? "bg-border-card text-text-secondary cursor-all-scroll" : "bg-bg-button text-bg-card cusror-pointer hover:bg-text-primary"} transition-colors duration-300`}>
                  {loading ? (
                    <>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
      </div>
    </SZSection>
  );
}