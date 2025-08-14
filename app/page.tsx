import { getTrending, getTopRated } from '@/lib/tmdb'
import { MovieGrid } from '@/components/MovieGrid'
import { Tabs } from '@/components/Tabs'

export const revalidate = 60

export default async function Page({ searchParams }: { searchParams: { tab?: string }}) {
  const tab = searchParams?.tab === 'top' ? 'top' : 'trending'
  const [trending, top] = await Promise.all([
    getTrending('movie'),
    getTopRated('movie')
  ])
  return (
    <div className="space-y-6">
      <Tabs
        current={tab}
        items={[
          { id: 'trending', label: 'Trending', href: '/?tab=trending' },
          { id: 'top', label: 'Top Rated', href: '/?tab=top' },
        ]}
      />
      {tab === 'trending' ? (
        <MovieGrid title="Trending Movies" items={trending.results} />
      ) : (
        <MovieGrid title="Top Rated Movies" items={top.results} />
      )}
    </div>
  )
}
