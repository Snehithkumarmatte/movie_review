const BASE = 'https://api.themoviedb.org/3'

type Kind = 'movie' | 'tv'

async function api(path: string, init?: RequestInit) {
  const url = `${BASE}${path}`
  const res = await fetch(url, {
    ...init,
    headers: {
      ...(init?.headers || {}),
      Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`,
      accept: 'application/json'
    },
    // Cache on the server for 60s by default; pages can override revalidate
    next: { revalidate: 60 }
  })
  if (!res.ok) {
    console.error('TMDB error', res.status, await res.text())
    throw new Error(`TMDB request failed: ${res.status}`)
  }
  return res.json()
}

export async function getTrending(kind: Kind) {
  return api(`/trending/${kind}/day?language=en-US`)
}

export async function getTopRated(kind: Kind) {
  return api(`/${kind}/top_rated?language=en-US`)
}

export async function getMovieDetails(id: string) {
  return api(`/movie/${id}?append_to_response=videos,credits,recommendations&language=en-US`)
}

export async function getTvDetails(id: string) {
  return api(`/tv/${id}?append_to_response=videos,credits,recommendations&language=en-US`)
}

export async function searchMulti(q: string) {
  const sp = new URLSearchParams({ query: q, include_adult: 'false', language: 'en-US' })
  return api(`/search/multi?${sp.toString()}`)
}
