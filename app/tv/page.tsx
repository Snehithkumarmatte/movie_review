import { getTrending, getTopRated } from '@/lib/tmdb'
import { TvGrid } from '@/components/TvGrid'
import { Tabs } from '@/components/Tabs'

export const revalidate = 60

export default async function Page({ searchParams }: { searchParams: { tab?: string }}) {
  const tab = searchParams?.tab === 'top' ? 'top' : 'trending'
  const [trending, top] = await Promise.all([
    getTrending('tv'),
    getTopRated('tv')
  ])
  return (
    <div className="space-y-6">
      <Tabs
        current={tab}
        items={[
          { id: 'trending', label: 'Trending', href: '/tv?tab=trending' },
          { id: 'top', label: 'Top Rated', href: '/tv?tab=top' },
        ]}
      />
      <TvGrid title={tab === 'trending' ? 'Trending TV' : 'Top Rated TV'} items={tab === 'trending' ? trending.results : top.results} />
    </div>
  )
}
