import Link from 'next/link'
import clsx from 'clsx'

export function Tabs({ items, current }: { items: { id: string, label: string, href: string }[], current: string }) {
  return (
    <div className="flex gap-2">
      {items.map(item => (
        <Link key={item.id} href={item.href} className={clsx(
          'px-3 py-1 rounded-2xl',
          current === item.id ? 'bg-brand text-white' : 'bg-zinc-100 dark:bg-zinc-800'
        )}>
          {item.label}
        </Link>
      ))}
    </div>
  )
}
