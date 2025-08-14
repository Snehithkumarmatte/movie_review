'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { Search } from 'lucide-react'

export function SearchBox() {
  const [q, setQ] = useState('')
  const router = useRouter()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!q.trim()) return
    router.push(`/search?q=${encodeURIComponent(q.trim())}`)
    setQ('')
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2 ml-2">
      <input
        className="px-3 py-1 rounded-2xl bg-zinc-100 dark:bg-zinc-800 outline-none focus:ring-2 ring-brand"
        placeholder="Search movies & TV…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button className="px-3 py-1 rounded-2xl bg-brand text-white hover:opacity-90" aria-label="Search">
        <Search size={16} />
      </button>
    </form>
  )
}
