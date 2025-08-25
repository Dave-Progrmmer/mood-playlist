import React from 'react'


const MOODS = [
{ key: 'happy', label: 'Happy' },
{ key: 'sad', label: 'Sad' },
{ key: 'relaxed', label: 'Relaxed' },
{ key: 'energetic', label: 'Energetic' },
{ key: 'romantic', label: 'Romantic' },
{ key: 'focus', label: 'Focus' }
]


export default function MoodSelector({ value, onChange }) {
return (
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
{MOODS.map(m => (
<button
key={m.key}
onClick={() => onChange(m.key)}
className={
`rounded-2xl border px-4 py-3 text-sm font-medium transition shadow-sm ` +
`${value === m.key ? 'bg-gray-900 text-white' : 'bg-white hover:bg-gray-50'}`
}
>
{m.label}
</button>
))}
</div>
)
} 