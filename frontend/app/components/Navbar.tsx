"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center px-10 py-6 bg-black text-white">

      <h1 className="text-xl font-bold text-purple-400">
        HackMatch
      </h1>

      <div className="flex gap-8 text-gray-300">

        <Link href="/">Home</Link>
        <Link href="/swipe">Hack Partners</Link>
        <Link href="/">Upload Yourself</Link>
        <Link href="/">About</Link>

      </div>

      <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500">
        Get Started
      </button>

    </div>
  )
}