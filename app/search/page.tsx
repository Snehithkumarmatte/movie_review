import { searchMulti } from '@/lib/tmdb'
import { MovieGrid } from '@/components/MovieGrid'
import { TvGrid } from '@/components/TvGrid'

export const revalidate = 0

export default async function Page({ searchParams }: { searchParams: { q?: string }}) {
  const q = searchParams?.q ?? ''
  const data = q ? await searchMulti(q) : { results: [] }
  const movies = data.results.filter((x:any) => x.media_type === 'movie')
  const tv = data.results.filter((x:any) => x.media_type === 'tv')
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Search results for “{q}”</h1>
      <MovieGrid title="Movies" items={movies} emptyMessage="No movies found." />
      <TvGrid title="TV Shows" items={tv} emptyMessage="No TV shows found." />
    </div>
  )
}
