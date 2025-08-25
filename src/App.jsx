import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Playlist from './pages/Playlist'


export default function App() {
return (
<div className="min-h-screen text-gray-900">
<header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
<div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
<Link to="/" className="font-bold text-xl">Moodify</Link>
<nav className="text-sm">
<a href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/" target="_blank" rel="noreferrer" className="hover:underline">API</a>
</nav>
</div>
</header>
<main className="max-w-5xl mx-auto px-4 py-8">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/playlist/:mood" element={<Playlist />} />
</Routes>
</main>
<footer className="max-w-5xl mx-auto px-4 py-8 text-xs text-gray-500">
<p>Built with the iTunes Search API. No auth required.</p>
</footer>
</div>
)
}