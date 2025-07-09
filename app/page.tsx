"use client"

import { SparklesText } from "@/components/magicui/sparkles-text"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        <SparklesText>
          Portfolio Coming Soon
        </SparklesText>
      </h1>
      <p className="text-lg text-center">
        Akan rilis maksimal tanggal <strong>10 Juli, jam 22.00 WIB</strong>
      </p>
      <p className="text-sm text-center mt-4">
        Stay tuned! Karya terbaik sedang dipoles 🛠️✨
      </p>
    </main>
  )
}
