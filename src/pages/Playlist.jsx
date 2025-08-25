import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Loader from '../components/Loader'
import TrackList from '../components/TrackList'
import { fetchTracksForMood } from '../services/music'
import { shuffle } from '../utils/shuffle'


export default function Playlist() {
const { mood } = useParams()
const [tracks, setTracks] = React.useState([])
const [loading, setLoading] = React.useState(true)
const [error, setError] = React.useState('')


React.useEffect(() => {
let isMounted = true
async function load() {
setLoading(true)
setError('')
try {
const results = await fetchTracksForMood(mood, 50)
const randomized = shuffle(results).slice(0, 25)
if (isMounted) setTracks(randomized)
} catch (e) {
if (isMounted) setError('Failed to load tracks')
} finally {
if (isMounted) setLoading(false)
}
}
load()
return () => { isMounted = false }
}, [mood])


return (
<section className="space-y-6">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl font-bold">Playlist for {decodeURIComponent(mood)}</h2>
<p className="text-sm text-gray-600">25 tracks, randomized on each load</p>
</div>
<Link to="/" className="text-sm underline">Change mood</Link>
</div>


{loading && <Loader label="Fetching tracks" />}
{error && <p className="text-sm text-red-600">{error}</p>}
{!loading && !error && <TrackList tracks={tracks} />}
</section>
)
}