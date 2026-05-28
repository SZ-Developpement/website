"use client";

import { HeaderAdmin } from "@/components/layout/HeaderAdmin";

export default function AdminPage() {
  return (
    <>
      <HeaderAdmin />
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </main>
    </>
  );
}
