"use client";

import ResizeableDemo from "@/components/ui/Layout/resizableDemo";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl">
        <ResizeableDemo />
      </div>
    </main>
  );
}

