export function img(path: string, size: 'w92'|'w154'|'w185'|'w342'|'w500'|'w780'|'original' = 'w500') {
  return `https://image.tmdb.org/t/p/${size}${path}`
}

export function formatDate(s?: string) {
  if (!s) return '—'
  const d = new Date(s)
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}
