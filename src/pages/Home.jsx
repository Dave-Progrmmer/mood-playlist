import React from 'react'
import { useNavigate } from 'react-router-dom'
import MoodSelector from '../components/MoodSelector'


export default function Home() {
const navigate = useNavigate()
const [mood, setMood] = React.useState('happy')


function go() {
navigate(`/playlist/${encodeURIComponent(mood)}`)
}


return (
<section className="space-y-8">
<div className="text-center space-y-3">
<h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Mood based playlist generator</h1>
<p className="text-gray-600 max-w-2xl mx-auto">Choose your mood. Generate a fresh playlist from public tracks. No login needed.</p>
</div>


<div className="max-w-xl mx-auto space-y-4">
<MoodSelector value={mood} onChange={setMood} />
<button onClick={go} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 text-white px-6 py-3 font-medium shadow hover:opacity-90">
Generate playlist
</button>
</div>
</section>
)
}