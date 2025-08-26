import axios from 'axios';

const MOOD_MAP = {
    happy: ['happy', 'upbeat', 'cheerful', 'pop'],
    sad: ['sad', 'melancholy', 'piano'],
    relaxed: ['chill', 'lofi', 'ambient'],
    energetic: ['workout', 'edm', 'power'],
    romantic: ['love', 'romance', 'r&b'],
    focus: ['focus', 'instrumental', 'study', 'lofi']
};

function buildQuery(mood) {
    const terms = MOOD_MAP[mood] || [mood];
    return encodeURIComponent(terms.join(' '));
}

export async function fetchTracksForMood(mood, limit = 30) {
    const term = buildQuery(mood);
    const url = `https://itunes.apple.com/search?term=${term}&entity=song&limit=${limit}`;
    let res;
    try {
        res = await axios.get(url);
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch tracks');
    }
    const data = res.data;
    return data.results.map(normalizeTrack);
}

function normalizeTrack(item) {
    return {
        id: String(item.trackId),
        title: item.trackName,
        artist: item.artistName,
        album: item.collectionName,
        cover: item.artworkUrl100?.replace('100x100', '512x512'),
        previewUrl: item.previewUrl,
        externalUrl: item.trackViewUrl,
        genre: item.primaryGenreName,
        durationMs: item.trackTimeMillis
    };
}