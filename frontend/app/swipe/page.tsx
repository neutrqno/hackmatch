<div className="bg-zinc-900 text-white shadow-xl rounded-xl p-6 w-80">

<h2 className="text-2xl font-bold mb-2">
{user.name}
</h2>

<p className="text-gray-400 mb-2">
{user.location}
</p>

<div className="mb-3">
<span className="text-purple-400 font-semibold">
Skills
</span>

<p className="text-gray-300">
{user.skills}
</p>
</div>

<div className="mb-3">
<span className="text-purple-400 font-semibold">
Hackathon
</span>

<p className="text-gray-300">
{user.hackathon}
</p>
</div>

<hr className="my-3 border-gray-700"/>

<div className="space-y-2">

<div className="flex justify-between">
<span>GitHub</span>
<button onClick={()=>copy(user.github)}
className="bg-gray-800 px-2 py-1 rounded text-sm">
Copy
</button>
</div>

<div className="flex justify-between">
<span>LinkedIn</span>
<button onClick={()=>copy(user.linkedin)}
className="bg-gray-800 px-2 py-1 rounded text-sm">
Copy
</button>
</div>

<div className="flex justify-between">
<span>Discord</span>
<button onClick={()=>copy(user.discord)}
className="bg-gray-800 px-2 py-1 rounded text-sm">
Copy
</button>
</div>

</div>

</div>