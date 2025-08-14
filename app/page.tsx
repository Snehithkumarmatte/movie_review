// app/page.tsx (or any page)
import Tabs, { TabItem } from '@/components/Tabs'

const tabItems: TabItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'trending', label: 'Trending', href: '/trending' },
  { id: 'top', label: 'Top Rated', href: '/top-rated' },
]

export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Reviews</h1>
      <Tabs items={tabItems} current="home" />
    </div>
  )
}
