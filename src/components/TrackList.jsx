import React from 'react'


export default function TrackList({ tracks }) {
if (!tracks?.length) return (
<p className="text-sm text-gray-600">No tracks found</p>
)


return (
<ul className="space-y-3">
{tracks.map(t => (
<li key={t.id} className="flex gap-3 items-center p-3 bg-white rounded-2xl border shadow-sm">
<img src={t.cover} alt={t.title} className="h-16 w-16 rounded-xl object-cover" />
<div className="flex-1">
<p className="font-medium leading-tight">{t.title}</p>
<p className="text-sm text-gray-600">{t.artist} · {t.album}</p>
<p className="text-xs text-gray-500">{t.genre}</p>
</div>
<div className="flex items-center gap-2">
{t.previewUrl && (
<audio controls src={t.previewUrl} className="h-8">
Your browser does not support audio
</audio>
)}
<a href={t.externalUrl} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-full border hover:bg-gray-50">Open</a>
</div>
</li>
))}
</ul>
)
}