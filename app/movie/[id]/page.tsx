import Image from 'next/image'
import Link from 'next/link'
import { getMovieDetails } from '@/lib/tmdb'
import { formatDate, img } from '@/lib/utils'

export async function generateMetadata({ params }: { params: { id: string }}) {
  const data = await getMovieDetails(params.id)
  return {
    title: `${data.title} (${new Date(data.release_date).getFullYear()}) — Reviews & Details`,
    description: data.overview
  }
}

export default async function Page({ params }: { params: { id: string }}) {
  const data = await getMovieDetails(params.id)
  return (
    <div className="grid md:grid-cols-[220px,1fr] gap-6">
      <div className="space-y-3">
        {data.poster_path && (
          <Image
            src={img(data.poster_path, 'w342')}
            alt={data.title}
            width={220}
            height={330}
            className="rounded-2xl w-[220px] h-auto"
            priority
          />
        )}
        <div className="text-sm text-zinc-500 space-y-1">
          <div>Score: <span className="font-medium text-zinc-900 dark:text-zinc-100">{Math.round(data.vote_average * 10)}%</span></div>
          <div>Votes: {data.vote_count.toLocaleString()}</div>
          <div>Runtime: {data.runtime} mins</div>
          <div>Released: {formatDate(data.release_date)}</div>
          <div>Genres: {data.genres?.map((g:any) => g.name).join(', ')}</div>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-zinc-600 dark:text-zinc-300">{data.overview}</p>
        <div className="grid gap-3">
          <h2 className="text-xl font-semibold">Top Cast</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data.credits?.cast?.slice(0,8).map((p:any) => (
              <div key={p.id} className="rounded-2xl p-3 bg-zinc-100 dark:bg-zinc-900/50">
                <div className="font-medium">{p.name}</div>
                <div className="text-xs text-zinc-500">as {p.character}</div>
              </div>
            ))}
          </div>
        </div>
        {data.recommendations?.results?.length > 0 && (
          <div className="grid gap-3">
            <h2 className="text-xl font-semibold">Recommended</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {data.recommendations.results.slice(0,8).map((m:any) => (
                <Link key={m.id} href={`/movie/${m.id}`} className="rounded-2xl p-3 bg-zinc-100 dark:bg-zinc-900/50">
                  <div className="font-medium">{m.title}</div>
                  <div className="text-xs text-zinc-500">{new Date(m.release_date).getFullYear()}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
