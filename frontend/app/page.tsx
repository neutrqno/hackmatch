"use client"

import { useState } from "react"

export default function Home() {

  const [name,setName] = useState("")
  const [skills,setSkills] = useState("")
  const [hackathon,setHackathon] = useState("")
  const [location,setLocation] = useState("")
  const [github,setGithub] = useState("")
  const [linkedin,setLinkedin] = useState("")
  const [discord,setDiscord] = useState("")

  const submit = async () => {

    await fetch("https://hackmatch-api.onrender.com/users",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        skills,
        hackathon,
        location,
        github,
        linkedin,
        discord
      })
    })

    alert("Profile created 🚀")
  }

  return(

    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

      <div className="text-center mb-10">

        <h1 className="text-5xl font-bold mb-4">
          HackMatch 🚀
        </h1>

        <p className="text-gray-400">
          Find teammates for your next hackathon
        </p>

      </div>

      <div className="bg-zinc-900 p-8 rounded-xl shadow-xl w-[400px]">

        <input
        placeholder="Name"
        className="w-full mb-3 p-2 rounded bg-black border border-gray-700"
        onChange={(e)=>setName(e.target.value)}
        />

        <input
        placeholder="Skills (Python, React...)"
        className="w-full mb-3 p-2 rounded bg-black border border-gray-700"
        onChange={(e)=>setSkills(e.target.value)}
        />

        <input
        placeholder="Hackathon name"
        className="w-full mb-3 p-2 rounded bg-black border border-gray-700"
        onChange={(e)=>setHackathon(e.target.value)}
        />

        <input
        placeholder="Location"
        className="w-full mb-3 p-2 rounded bg-black border border-gray-700"
        onChange={(e)=>setLocation(e.target.value)}
        />

        <input
        placeholder="GitHub username"
        className="w-full mb-3 p-2 rounded bg-black border border-gray-700"
        onChange={(e)=>setGithub(e.target.value)}
        />

        <input
        placeholder="LinkedIn profile"
        className="w-full mb-3 p-2 rounded bg-black border border-gray-700"
        onChange={(e)=>setLinkedin(e.target.value)}
        />

        <input
        placeholder="Discord username"
        className="w-full mb-5 p-2 rounded bg-black border border-gray-700"
        onChange={(e)=>setDiscord(e.target.value)}
        />

        <button
        onClick={submit}
        className="w-full bg-purple-600 hover:bg-purple-500 p-2 rounded font-semibold"
        >
        Create Profile
        </button>

      </div>

    </div>
  )
}