import React from 'react'

export default function TrackList({ tracks }) {
  if (!tracks?.length)
    return (
      <p className="text-sm text-gray-600">No tracks found</p>
    )

  return (
    <ul className="space-y-3">
      {tracks.map(t => (
        <li
          key={t.id}
          className="flex flex-col sm:flex-row gap-3 sm:gap-3 items-start sm:items-center p-3 bg-white rounded-2xl border shadow-sm"
        >
          <img
            src={t.cover}
            alt={t.title}
            className="h-16 w-16 rounded-xl object-cover flex-shrink-0 mx-auto sm:mx-0"
          />
          <div className="flex-1 w-full">
            <p className="font-medium leading-tight">{t.title}</p>
            <p className="text-sm text-gray-600">{t.artist} · {t.album}</p>
            <p className="text-xs text-gray-500">{t.genre}</p>
          </div>
          <div className="flex flex-row sm:flex-col items-center gap-2 w-full sm:w-auto justify-end sm:justify-center mt-2 sm:mt-0">
            {t.previewUrl && (
              <audio
                controls
                src={t.previewUrl}
                className="h-8 w-full sm:w-auto"
                style={{ minWidth: 120, maxWidth: 200 }}
              >
                Your browser does not support audio
              </audio>
            )}
            <a
              href={t.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-3 py-1 rounded-full border hover:bg-gray-50 w-full sm:w-auto text-center"
            >
              Open
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}