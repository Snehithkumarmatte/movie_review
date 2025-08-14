import Link from 'next/link'
import Image from 'next/image'
import { img } from '@/lib/utils'

export function MovieGrid({ title, items, emptyMessage }: { title: string, items: any[], emptyMessage?: string }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      {items.length === 0 ? (
        <p className="text-sm text-zinc-500">{emptyMessage ?? 'Nothing to show.'}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((m:any) => (
            <Link key={m.id} href={`/movie/${m.id}`} className="no-underline group">
              <div className="rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                {m.poster_path ? (
                  <Image
                    src={img(m.poster_path, 'w342')}
                    alt={m.title}
                    width={342} height={513}
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform"
                  />
                ) : (
                  <div className="aspect-[2/3] grid place-items-center text-sm text-zinc-500">No image</div>
                )}
              </div>
              <div className="mt-2">
                <div className="font-medium leading-tight line-clamp-2">{m.title}</div>
                <div className="text-xs text-zinc-500">{m.release_date?.slice(0,4) ?? '—'}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
